"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { appConfig } from "@/config/app";
import { ExperienceEducationSection } from "./ExperienceEducationSection";
import { TechStackSection } from "./TechStackSection";

export const ExpAndStack: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Top-Left Flower floating animation
      gsap.to(".cat-flower-1", {
        y: -12,
        scale: 1.15,
        rotation: 45,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        transformOrigin: "center center",
      });

      // Far-Right Flower floating animation
      gsap.to(".cat-flower-2", {
        y: 10,
        scale: 0.85,
        rotation: -30,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.4,
        transformOrigin: "center center",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-[#FAF9F5] py-12 md:py-16 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-16 items-start">
          {/* Left Column: Experiences & Tech Stack */}
          <div className="space-y-12 md:space-y-16">
            <ExperienceEducationSection showOnly="experiences" />
            <TechStackSection />
          </div>

          {/* Right Column: Education & Sleeping Cat */}
          <div className="space-y-6 md:space-y-8">
            <ExperienceEducationSection showOnly="education" />

            {/* Sleeping Cat Image Container with Floating GSAP Flowers */}
            <div className="relative pt-2">
              <div className="relative w-80 h-60 sm:w-96 sm:h-72 lg:w-[440px] lg:h-[310px] xl:w-[800px] xl:h-[600px] mx-auto lg:mx-0">
                {/* Floating Flower 1 (Top-Left) */}
                <div className="cat-flower-1 absolute top-4 left-6 sm:left-12 z-10 text-[#272D18] pointer-events-none">
                <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.4325 5.82051C12.9252 1.6137 16.9886 -0.371666 20.6524 0.0573318C24.3162 0.486436 27.8683 2.87117 27.3189 7.5633C27.0731 9.66186 26.1179 12.0789 24.8233 14.1499C27.3052 13.255 30.0755 12.8065 32.0898 13.0424C36.2967 13.5351 38.2813 17.599 37.8522 21.2628C37.423 24.9266 35.0385 28.4789 30.3462 27.9293C28.1879 27.6765 25.6925 26.6738 23.5836 25.3227C24.3302 27.5972 24.6796 30.1039 24.4392 32.1571C23.8897 36.8493 19.8831 38.3493 16.2193 37.9203C12.5557 37.4912 9.06051 34.6209 9.55283 30.4143C9.75834 28.6604 10.6017 26.4681 11.7692 24.473C9.74835 25.0293 7.61929 25.2668 5.83347 25.0577C1.14123 24.5082 -0.358755 20.5016 0.0702859 16.8379C0.499419 13.1742 3.36971 9.67904 7.57625 10.1714C9.2526 10.3677 11.3303 11.146 13.2527 12.2336C12.5521 9.98698 12.2235 7.60645 12.4325 5.82051ZM19.5194 12.581C19.0318 16.109 15.8726 18.6412 12.323 18.3494C15.8513 18.8367 18.3846 21.9961 18.0927 25.5459C18.58 22.0176 21.7387 19.4849 25.2885 19.7768C21.7604 19.2895 19.2278 16.1306 19.5194 12.581Z" fill="#272D18"/>
                </svg>

                </div>

                {/* Floating Flower 2 (Far-Right) */}
                <div className="cat-flower-2 absolute top-1/4 right-2 sm:right-6 z-10 text-[#272D18] pointer-events-none">
                    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.4325 5.82051C12.9252 1.6137 16.9886 -0.371666 20.6524 0.0573318C24.3162 0.486436 27.8683 2.87117 27.3189 7.5633C27.0731 9.66186 26.1179 12.0789 24.8233 14.1499C27.3052 13.255 30.0755 12.8065 32.0898 13.0424C36.2967 13.5351 38.2813 17.599 37.8522 21.2628C37.423 24.9266 35.0385 28.4789 30.3462 27.9293C28.1879 27.6765 25.6925 26.6738 23.5836 25.3227C24.3302 27.5972 24.6796 30.1039 24.4392 32.1571C23.8897 36.8493 19.8831 38.3493 16.2193 37.9203C12.5557 37.4912 9.06051 34.6209 9.55283 30.4143C9.75834 28.6604 10.6017 26.4681 11.7692 24.473C9.74835 25.0293 7.61929 25.2668 5.83347 25.0577C1.14123 24.5082 -0.358755 20.5016 0.0702859 16.8379C0.499419 13.1742 3.36971 9.67904 7.57625 10.1714C9.2526 10.3677 11.3303 11.146 13.2527 12.2336C12.5521 9.98698 12.2235 7.60645 12.4325 5.82051ZM19.5194 12.581C19.0318 16.109 15.8726 18.6412 12.323 18.3494C15.8513 18.8367 18.3846 21.9961 18.0927 25.5459C18.58 22.0176 21.7387 19.4849 25.2885 19.7768C21.7604 19.2895 19.2278 16.1306 19.5194 12.581Z" fill="#272D18"/>
                    </svg>
                </div>

                <Image
                  src={appConfig.sleepingFrogImage}
                  alt="Sleeping cat in frog costume"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};