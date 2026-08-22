import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import { appConfig } from "@/config/app";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
});

export const metadata: Metadata = {
  title: `${appConfig.owner} — ${appConfig.roleTitle} & Front-End Developer`,
  description: `${appConfig.owner}'s portfolio. ${appConfig.subTitle}. Based in ${appConfig.location}.`,
  keywords: [
    "UI/UX Designer",
    "Front-End Developer",
    "2D Artist",
    "Portfolio",
    "Addy",
    "Next.js",
    "React",
    "Tailwind CSS",
  ],
  authors: [{ name: appConfig.owner }],
  openGraph: {
    title: `${appConfig.owner} — Portfolio`,
    description: appConfig.subTitle,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${archivoBlack.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F5] font-sans">
        {children}
      </body>
    </html>
  );
}
