import React from "react";
import Image from "next/image";
import { experiences, educationList } from "@/data/profile";
import { appConfig } from "@/config/app";
import { StarIcon } from "../ui/StarIcon";

export const ExperienceEducationSection: React.FC = () => {
  return (
    <section className="bg-[#FAF9F5] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {/* Experiences Column */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Experiences
            </h2>

            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="flex items-start gap-4">
                  <StarIcon className="w-4 h-4 text-[#7A8B63] mt-1 shrink-0" />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      {exp.company}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                      {exp.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-8 relative">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Education
            </h2>

            <div className="space-y-6">
              {educationList.map((edu) => (
                <div key={edu.id} className="flex items-start gap-4">
                  <StarIcon className="w-4 h-4 text-[#7A8B63] mt-1 shrink-0" />
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900">
                      {edu.institution}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                      {edu.degree}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Sleeping Frog Character Asset */}
            <div className="pt-8 flex justify-center md:justify-end">
              <div className="relative w-64 h-48 sm:w-80 sm:h-56">
                <Image
                  src={appConfig.sleepingFrogImage}
                  alt="Sleeping frog illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
