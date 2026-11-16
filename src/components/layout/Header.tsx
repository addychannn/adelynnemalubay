"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/config/navigation";
import { appConfig } from "@/config/app";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/#home" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 overflow-hidden">
            <Image
              src={appConfig.logoImage}
              alt={appConfig.owner}
              fill
              sizes="44px"
              className="object-contain group-hover:scale-105 transition-transform"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isButton = item.href.endsWith("#contact");
            const isActive =
              item.href === "/projects" && pathname.startsWith("/projects");
            const linkClassName = `inline-flex min-h-11 items-center rounded-full px-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#566542] focus-visible:ring-offset-2 ${
              isActive
                ? "bg-[#EDF0E6] text-[#445133]"
                : "text-gray-700 hover:text-[#566542]"
            }`;

            if (isButton) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex min-h-11 items-center justify-center rounded-full border border-gray-300 bg-[#FAF9F5] px-5 text-sm font-semibold text-[#1A2217] shadow-xs transition-all hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#566542] focus-visible:ring-offset-2"
                >
                  {item.label}
                </Link>
              );
            }
            return (
              <Link
                key={item.label}
                href={item.href}
                className={linkClassName}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#566542] lg:hidden"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!mobileMenuOpen}
        className="space-y-2 border-b border-gray-200 bg-[#FAF9F5] px-4 py-4 shadow-lg lg:hidden"
      >
        {navItems.map((item) => {
          const isActive =
            item.href === "/projects" && pathname.startsWith("/projects");

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`flex min-h-11 items-center rounded-lg px-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#566542] ${
                isActive
                  ? "bg-[#EDF0E6] text-[#445133]"
                  : "text-gray-800 hover:bg-gray-100 hover:text-[#566542]"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
