import React from "react";
import Image from "next/image";
import { appConfig } from "@/config/app";
import { contactConfig } from "@/config/contact";
import { navItems } from "@/config/navigation";
import { Mail } from "lucide-react";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "../ui/SocialIcons";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#141A11] text-white border-t border-gray-800/80 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-gray-800/60">
          {/* Brand & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <Image
                  src={appConfig.logoImage}
                  alt={appConfig.owner}
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed">
              Bridging the gap between design and code.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href={`https://${contactConfig.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1D251A] flex items-center justify-center text-gray-300 hover:text-[#D2E874] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://${contactConfig.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1D251A] flex items-center justify-center text-gray-300 hover:text-[#D2E874] transition-colors"
                aria-label="GitHub"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://${contactConfig.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#1D251A] flex items-center justify-center text-gray-300 hover:text-[#D2E874] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${contactConfig.email}`}
                className="w-8 h-8 rounded-full bg-[#1D251A] flex items-center justify-center text-gray-300 hover:text-[#D2E874] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest">
              NAVIGATION
            </h3>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#D2E874] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* What I Do Column */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest">
              WHAT I DO
            </h3>
            <ul className="space-y-2 text-xs text-gray-400 font-medium">
              <li>UI/UX Design</li>
              <li>Front-End Development</li>
              <li>2D Illustration</li>
              <li>Brand Identity</li>
              <li>Prototyping</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center md:text-right text-xs text-gray-500">
          © {new Date().getFullYear()} {appConfig.owner}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
