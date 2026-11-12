"use client";

import React, { useState } from "react";
import Image from "next/image";
import { navItems } from "@/config/navigation";
import { appConfig } from "@/config/app";
import { Menu, X } from "lucide-react";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F5]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="/#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 overflow-hidden">
            <Image
              src={appConfig.logoImage}
              alt={appConfig.owner}
              fill
              sizes="40px"
              className="object-contain group-hover:scale-105 transition-transform"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isButton = item.href === "#contact";
            if (isButton) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-5 py-2 text-xs font-semibold text-[#1A2217] bg-[#FAF9F5] border border-gray-300 rounded-full hover:bg-gray-100 transition-all shadow-xs"
                >
                  {item.label}
                </a>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-semibold text-gray-700 hover:text-[#566542] transition-colors"
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F5] border-b border-gray-200 px-4 py-6 space-y-4 shadow-lg animate-in slide-in-from-top duration-200">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-gray-800 hover:text-[#566542] py-2"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
