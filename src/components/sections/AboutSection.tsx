"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { appConfig } from "@/config/app";
import { Button } from "../ui/Button";

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Entrance animation timeline
      const tl = gsap.timeline();

      tl.from(".animate-item", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
      });

      // 2. Continuous floating motion for main profile image
      gsap.to(imageRef.current, {
        y: -20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 3. Floating, scaling, and spinning star animations
      gsap.to(".star-1", {
        y: -25,
        scale: 1.3,
        rotation: 90,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "center center",
      });

      gsap.to(".star-2", {
        y: 18,
        scale: 0.7,
        rotation: -45,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.3,
        transformOrigin: "center center",
      });

      gsap.to(".star-3", {
        y: -20,
        scale: 1.25,
        rotation: 120,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.6,
        transformOrigin: "center center",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="about" className="bg-[#FAF9F5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Profile Graphic with Floating Stars */}
          <div className="lg:col-span-5 flex justify-center animate-item">
            <div className="relative w-80 h-72 sm:w-96 sm:h-96">
              {/* Star 1: Top Right */}
              <div className="star-1 absolute -top-6 right-2 sm:right-6 z-20 text-[#272D18] pointer-events-none">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.377865 0.34258C1.15249 -0.426131 3.0282 0.143096 5.01165 1.60723C7.00645 0.157852 8.88708 -0.396522 9.65619 0.377736C10.425 1.15247 9.85614 3.02873 8.39154 5.0125C9.84075 7.00728 10.3955 8.88716 9.62103 9.65606C8.84621 10.425 6.97027 9.85538 4.98626 8.39043C2.99131 9.83983 1.11156 10.3956 0.342709 9.6209C-0.426105 8.84617 0.142787 6.96989 1.60736 4.98613C0.158401 2.99158 -0.396443 1.1115 0.377865 0.34258Z" fill="#272D18"/>
                </svg>
              </div>

              {/* Star 2: Bottom Left */}
              <div className="star-2 absolute bottom-0 -left-6 sm:left-0 z-20 text-[#272D18] pointer-events-none">
               <svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.377865 0.34258C1.15249 -0.426131 3.0282 0.143096 5.01165 1.60723C7.00645 0.157852 8.88708 -0.396522 9.65619 0.377736C10.425 1.15247 9.85614 3.02873 8.39154 5.0125C9.84075 7.00728 10.3955 8.88716 9.62103 9.65606C8.84621 10.425 6.97027 9.85538 4.98626 8.39043C2.99131 9.83983 1.11156 10.3956 0.342709 9.6209C-0.426105 8.84617 0.142787 6.96989 1.60736 4.98613C0.158401 2.99158 -0.396443 1.1115 0.377865 0.34258Z" fill="#272D18"/>
                </svg>
              </div>

              {/* Star 3: Mid Right */}
              <div className="star-3 absolute top-1/2 -right-6 sm:-right-8 z-20 text-[#272D18] opacity-80 pointer-events-none">
                <svg width="20" height="20" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.377865 0.34258C1.15249 -0.426131 3.0282 0.143096 5.01165 1.60723C7.00645 0.157852 8.88708 -0.396522 9.65619 0.377736C10.425 1.15247 9.85614 3.02873 8.39154 5.0125C9.84075 7.00728 10.3955 8.88716 9.62103 9.65606C8.84621 10.425 6.97027 9.85538 4.98626 8.39043C2.99131 9.83983 1.11156 10.3956 0.342709 9.6209C-0.426105 8.84617 0.142787 6.96989 1.60736 4.98613C0.158401 2.99158 -0.396443 1.1115 0.377865 0.34258Z" fill="#272D18"/>
                </svg>
              </div>

              {/* Main Floating Image Container */}
              <div ref={imageRef} className="w-full h-full relative">
                <Image
                  src={appConfig.aboutImage}
                  alt={appConfig.owner}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="animate-item text-5xl sm:text-6xl font-extrabold text-[#272D18] tracking-tight">
              {appConfig.bioHeadline}
            </h2>

            {/* <p className="animate-item text-lg font-bold text-[#272D18]">
              {appConfig.bioSubheadline}
            </p> */}

            <p className="animate-item text-sm sm:text-base text-[#272D18] leading-relaxed">
              I am a{" "}
              <strong className="text-[#272D18] font-bold">UI/UX Designer</strong>{" "}
              and{" "}
              <strong className="text-[#272D18] font-bold">
                Front-End Developer
              </strong>{" "}
              with nearly 3 years of professional experience in turning complex
              ideas into seamless digital realities. I specialize in building
              responsive, human-centric web applications that are as technically
              sound as they are visually stunning.
            </p>

            {/* Principles */}
            <ul className="space-y-3 pt-2">
              {appConfig.bioPrinciples.map((principle, idx) => (
                <li key={idx} className="animate-item flex items-start gap-3 text-sm sm:text-base text-[#272D18]">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0" />
                  <div>
                    <strong className="text-[#272D18] font-bold">
                      {principle.title}:
                    </strong>{" "}
                    {principle.description}
                  </div>
                </li>
              ))}
            </ul>

            {/* AFK Note */}
            <div className="animate-item pt-2 text-sm sm:text-base text-[#272D18] leading-relaxed">
              <p className="font-bold text-[#272D18] mb-1">
                When I'm &quot;AFK&quot;:
              </p>
              <p>{appConfig.bioParagraph2}</p>
            </div>

            {/* CTAs */}
            <div className="animate-item flex flex-wrap items-center gap-4 pt-4">
            <Button 
                href="https://drive.google.com/file/d/1ZaYaN-hQynDW93F1QuZl23jT9jeLM-Pt/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                variant="solid" 
                size="md"
              >
                Download CV
              </Button>
              <Button href="#contact" variant="outline" size="md">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};