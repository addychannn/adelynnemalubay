import React from "react";
import Image from "next/image";
import { appConfig } from "@/config/app";
import { Button } from "../ui/Button";
import { TypewriterRole } from "../ui/TypewriterRole";

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-[#FAF9F5] overflow-hidden min-h-screen flex items-center">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      {/* Top-Left Corner Glow Accent */}
      <div className="absolute -top-24 -left-24 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[750px] lg:h-[750px] opacity-80 pointer-events-none z-0">
        <Image
          src="/materials/gradient.png"
          alt="Top-left corner gradient glow"
          fill
          className="object-contain object-top-left"
        />
      </div>

      {/* Bottom-Right Corner Glow Accent */}
      <div className="absolute -bottom-24 -right-24 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[750px] lg:h-[750px] opacity-80 pointer-events-none z-0">
        <Image
          src="/materials/gradient.png"
          alt="Bottom-right corner gradient glow"
          fill
          className="object-contain object-bottom-right"
        />
      </div>

      {/* Desktop Main Frog Character Illustration — Hidden on screens smaller than 1024px */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[52vw] h-full pointer-events-none z-10">
        <Image
          src={appConfig.heroImage}
          alt={appConfig.owner}
          fill
          priority
          className="object-cover object-left-bottom drop-shadow-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-left py-8 lg:py-20">
            <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#272D18] tracking-wide block">
              I'm
            </span>

            {/* Heavy Display Name */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-9xl font-black italic text-[#272D18] tracking-tight leading-none uppercase font-sans break-words">
              {appConfig.owner}
            </h1>

            {/* Selection Framed Badge */}
            <div className="inline-block relative my-2">
              <div className="relative border border-[#3B82F6] px-3 py-1.5 sm:px-4 sm:py-2 bg-white/60 backdrop-blur-xs rounded-xs shadow-xs">
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#3B82F6] border border-white" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#3B82F6] border border-white" />
                <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#3B82F6] border border-white" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#3B82F6] border border-white" />
                <TypewriterRole />
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Button href="#projects" variant="solid" size="md">
                View My Works
              </Button>
              <Button href="#contact" variant="outline" size="md">
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Mobile/Tablet Hero Character Graphic */}
          <div className="lg:hidden relative w-full max-w-sm sm:max-w-md mx-auto h-[320px] sm:h-[450px]">
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