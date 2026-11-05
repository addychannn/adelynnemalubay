"use client";

import React, { useState } from "react";
import { contactConfig } from "@/config/contact";
import { StarIcon } from "../ui/StarIcon";
import { Button } from "../ui/Button";
import { Mail, MapPin, CheckCircle } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "../ui/SocialIcons";

type Status = "idle" | "sending" | "success" | "error";

const EMPTY_FORM = { name: "", email: "", subject: "", message: "" };

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [honeypot, setHoneypot] = useState(""); // hidden field; real users leave it empty
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website: honeypot }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(data.error || "Couldn't send your message. Please try again.");
      }

      setStatus("success");
      setFormData(EMPTY_FORM);
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Couldn't send your message. Please try again."
      );
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-[#131910] border border-gray-800 rounded-xl text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D2E874] transition-colors";

  return (
    <section id="contact" className="bg-[#1B2217] text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center gap-2 mb-3">
          <StarIcon className="w-3.5 h-3.5 text-[#D2E874]" />
          <span className="text-xs font-bold text-[#D2E874] uppercase tracking-widest">
            LET&apos;S WORK TOGETHER
          </span>
        </div>

        {/* Title & Intro */}
        <h2 className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
          {contactConfig.headline}
        </h2>
        <p className="text-sm sm:text-base text-gray-300 max-w-2xl mb-12 leading-relaxed">
          {contactConfig.subheadline}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Form */}
          <div className="lg:col-span-7">
            {status === "success" ? (
              <div
                role="status"
                className="bg-[#263121] border border-[#D2E874]/30 rounded-2xl p-8 text-center space-y-4"
              >
                <CheckCircle className="w-12 h-12 text-[#D2E874] mx-auto" />
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-sm text-gray-300">
                  Thank you for reaching out. I&apos;ll get back to you as soon as possible!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot: hidden from people, bots tend to fill it */}
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-medium text-gray-300">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      maxLength={100}
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-medium text-gray-300">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-xs font-medium text-gray-300">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    maxLength={150}
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    maxLength={5000}
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {status === "error" && (
                  <p role="alert" className="text-sm text-red-400">
                    {errorMessage}
                  </p>
                )}

                <div>
                  <Button
                    type="submit"
                    variant="lime"
                    size="md"
                    className="px-8 disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            )}
          </div>

          {/* Right Direct Details */}
          <div className="lg:col-span-5 space-y-10">
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Contact Details
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#D2E874] transition-colors"
                >
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#263121] flex items-center justify-center text-[#D2E874]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="break-all">{contactConfig.email}</span>
                </a>

                <a
                  href={`https://${contactConfig.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#D2E874] transition-colors"
                >
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#263121] flex items-center justify-center text-[#D2E874]">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <span className="break-all">{contactConfig.github}</span>
                </a>

                <a
                  href={`https://${contactConfig.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#D2E874] transition-colors"
                >
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#263121] flex items-center justify-center text-[#D2E874]">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                  <span className="break-all">{contactConfig.instagram}</span>
                </a>

                <a
                  href={`https://${contactConfig.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#D2E874] transition-colors"
                >
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#263121] flex items-center justify-center text-[#D2E874]">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <span className="break-all">{contactConfig.linkedin}</span>
                </a>

                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#263121] flex items-center justify-center text-[#D2E874]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span>{contactConfig.location}</span>
                </div>
              </div>
            </div>

            {/* Open For List */}
            <div className="space-y-4 pt-4 border-t border-gray-800">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                OPEN FOR
              </h3>

              <div className="space-y-3">
                {contactConfig.openFor.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-200">
                    <StarIcon className="w-3.5 h-3.5 text-[#D2E874]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};