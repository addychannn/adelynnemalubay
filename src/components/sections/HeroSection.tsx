import React from "react";
import Image from "next/image";
import { appConfig } from "@/config/app";
import { Button } from "../ui/Button";

import { TypewriterRole } from "../ui/TypewriterRole";

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-[#FAF9F5] overflow-hidden pt-36 sm:pt-48 md:pt-60 lg:pt-72 pb-4">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Corner-to-Corner Ambient Gradient Glow Overlay */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-70">
        <Image
          src="/materials/gradient.png"
          alt="Corner-to-corner ambient gradient background"
          fill
          className="object-cover"
        />
      </div>

      {/* Top-Left Corner Glow Accent */}
      <div className="absolute -top-24 -left-24 w-[500px] h-[500px] sm:w-[750px] sm:h-[750px] opacity-80 pointer-events-none z-0">
        <Image
          src="/materials/gradient.png"
          alt="Top-left corner gradient glow"
          fill
          className="object-contain object-top-left"
        />
      </div>

      {/* Bottom-Right Corner Glow Accent */}
      <div className="absolute -bottom-24 -right-24 w-[500px] h-[500px] sm:w-[750px] sm:h-[750px] opacity-80 pointer-events-none z-0">
        <Image
          src="/materials/gradient.png"
          alt="Bottom-right corner gradient glow"
          fill
          className="object-contain object-bottom-right"
        />
      </div>

      {/* Desktop Main Frog Character Illustration — Positioned AT THE VERY RIGHT CORNER OF THE SCREEN */}
      <div className="hidden lg:block absolute right-0 bottom-0 w-[55vw] max-w-[850px] h-[550px] sm:h-[650px] lg:h-[720px] xl:h-[1077px] pointer-events-none z-10">
        <Image
          src={appConfig.heroImage}
          alt={appConfig.owner}
          fill
          priority
          className="object-contain object-right-bottom drop-shadow-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-left pb-16">
            <span className="text-4xl sm:text-5xl md:text-6xl xl:text-8xl font-medium text-gray-900 tracking-wide block">
              I'm
            </span>

            {/* Heavy Display Name */}
            <h1 className="text-7xl sm:text-8xl md:text-9xl xl:text-9xl font-black italic text-[#111827] tracking-tight leading-none uppercase font-sans">
              {appConfig.owner}
            </h1>

            {/* Selection Framed Badge with Dynamic Typewriter Effect */}
            <div className="inline-block relative my-2">
              <div className="relative border border-[#3B82F6] px-4 py-2 bg-white/60 backdrop-blur-xs rounded-xs shadow-xs">
                {/* Selection handles at corners */}
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#3B82F6] border border-white" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#3B82F6] border border-white" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#3B82F6] border border-white" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#3B82F6] border border-white" />
                <TypewriterRole />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href="#projects" variant="solid" size="md">
                View My Works
              </Button>
              <Button href="#contact" variant="outline" size="md">
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Mobile-Only Hero Character Graphic */}
          <div className="lg:hidden relative w-full max-w-md mx-auto h-[400px] pb-4">
            <Image
              src={appConfig.heroImage}
              alt={appConfig.owner}
              fill
              priority
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
