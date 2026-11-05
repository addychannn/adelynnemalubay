import React from "react";
import Image from "next/image";
import { appConfig } from "@/config/app";
import { Button } from "../ui/Button";
import { TypewriterRole } from "../ui/TypewriterRole";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      // Height hugs the content on mobile/tablet; full screen only on desktop (svh avoids URL-bar jump)
      className="relative bg-[#FAF9F5] overflow-hidden lg:min-h-[100svh] flex items-center"
    >
      {/* Background Grid Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] sm:bg-[size:3rem_3rem] md:bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"
      />

      {/* Top-Left Corner Glow Accent */}
      <div
        aria-hidden="true"
        className="absolute -top-12 -left-12 sm:-top-24 sm:-left-24 w-[220px] h-[220px] sm:w-[420px] sm:h-[420px] lg:w-[600px] lg:h-[600px] xl:w-[750px] xl:h-[750px] opacity-80 pointer-events-none z-0"
      >
        <Image
          src="/materials/gradient.png"
          alt=""
          fill
          sizes="(min-width: 1280px) 750px, (min-width: 1024px) 600px, (min-width: 640px) 420px, 220px"
          className="object-contain object-left-top"
        />
      </div>

      {/* Bottom-Right Corner Glow Accent */}
      <div
        aria-hidden="true"
        className="absolute -bottom-12 -right-12 sm:-bottom-24 sm:-right-24 w-[220px] h-[220px] sm:w-[420px] sm:h-[420px] lg:w-[600px] lg:h-[600px] xl:w-[750px] xl:h-[750px] opacity-80 pointer-events-none z-0"
      >
        <Image
          src="/materials/gradient.png"
          alt=""
          fill
          sizes="(min-width: 1280px) 750px, (min-width: 1024px) 600px, (min-width: 640px) 420px, 220px"
          className="object-contain object-right-bottom"
        />
      </div>

      {/* Desktop Main Frog Character Illustration — hidden below 1024px */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[44vw] xl:w-[50vw] 2xl:w-[52vw] h-full pointer-events-none z-10">
        <Image
          src={appConfig.heroImage}
          alt={appConfig.owner}
          fill
          priority
          sizes="(min-width: 1536px) 52vw, (min-width: 1280px) 50vw, 44vw"
          className="object-cover object-left-bottom drop-shadow-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 min-w-0 space-y-3 sm:space-y-5 lg:space-y-6 text-left py-20 sm:pt-24 sm:pb-4 lg:py-20">
            <span className="block text-xl min-[400px]:text-2xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium text-[#272D18] tracking-wide">
              I&apos;m
            </span>

            {/* Heavy Display Name */}
            <h1 className="text-4xl min-[400px]:text-5xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black italic text-[#272D18] tracking-tight leading-none uppercase font-sans break-words">
              {appConfig.owner}
            </h1>

            {/* Selection Framed Badge */}
            <div className="relative my-2 max-w-full inline-block">
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
          <div className="hidden sm:block lg:hidden relative w-full sm:max-w-md md:max-w-lg mx-auto sm:h-[420px] md:h-[500px] sm:mb-10">
            <Image
              src={appConfig.heroImage}
              alt={appConfig.owner}
              fill
              priority
              sizes="(min-width: 768px) 32rem, (min-width: 640px) 28rem, 20rem"
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};