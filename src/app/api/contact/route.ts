import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactConfig } from "@/config/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Strip line breaks so user input can't inject extra email headers
const oneLine = (value: string) => value.replace(/[\r\n]+/g, " ").trim();

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = oneLine(String(body.name ?? ""));
    const email = oneLine(String(body.email ?? ""));
    const subject = oneLine(String(body.subject ?? ""));
    const message = String(body.message ?? "").trim();
    const honeypot = String(body.website ?? "");

    // Bots fill the hidden field; pretend success and drop it
    if (honeypot) return NextResponse.json({ ok: true });

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in your name, email, and message." },
        { status: 400 }
      );
    }
    if (!EMAIL_RE.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }
    if (name.length > 100 || subject.length > 150 || message.length > 5000) {
      return NextResponse.json(
        { error: "One of the fields is too long." },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      // Use a verified domain here once you have one, e.g. "Portfolio <contact@yourdomain.com>"
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL ?? contactConfig.email],
      replyTo: email,
      subject: subject || `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Couldn't send your message. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}