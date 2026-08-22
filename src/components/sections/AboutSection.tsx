import React from "react";
import Image from "next/image";
import { appConfig } from "@/config/app";
import { Button } from "../ui/Button";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#FAF9F5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Flower Profile Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <Image
                src={appConfig.aboutImage}
                alt={appConfig.owner}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Column: Bio Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight">
              {appConfig.bioHeadline}
            </h2>

            <p className="text-lg font-bold text-gray-900">
              {appConfig.bioSubheadline}
            </p>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              I am a{" "}
              <strong className="text-gray-900 font-bold">UI/UX Designer</strong>{" "}
              and{" "}
              <strong className="text-gray-900 font-bold">
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
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0" />
                  <div>
                    <strong className="text-gray-900 font-bold">
                      {principle.title}:
                    </strong>{" "}
                    {principle.description}
                  </div>
                </li>
              ))}
            </ul>

            {/* AFK Note */}
            <div className="pt-2 text-sm sm:text-base text-gray-700 leading-relaxed">
              <p className="font-bold text-gray-900 mb-1">
                When I'm &quot;AFK&quot;:
              </p>
              <p>{appConfig.bioParagraph2}</p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button href="#contact" variant="solid" size="md">
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
