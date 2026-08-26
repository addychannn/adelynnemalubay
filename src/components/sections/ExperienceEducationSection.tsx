import React from "react";
import { experiences, educationList } from "@/data/profile";

interface ExperienceEducationProps {
  showOnly?: "experiences" | "education";
}

export const ExperienceEducationSection: React.FC<ExperienceEducationProps> = ({ showOnly }) => {
  const showExperiences = !showOnly || showOnly === "experiences";
  const showEducation = !showOnly || showOnly === "education";

  return (
    <div className={`grid grid-cols-1 ${!showOnly ? "md:grid-cols-2 gap-12 lg:gap-16" : ""}`}>
      {/* Experiences Column */}
      {showExperiences && (
        <div className="space-y-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#272D18] tracking-tight">
            Experiences
          </h2>

          <div className="relative space-y-6">
            <div className="absolute left-[4px] top-3 bottom-3 w-[1.5px] bg-[#272D18]/30 -z-0" />

            {experiences.map((exp) => (
              <div key={exp.id} className="flex items-start gap-4 relative z-10">
                <div className="pt-1.5 pb-1.5 shrink-0 bg-[#FAF9F5]">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.377865 0.34258C1.15249 -0.426131 3.0282 0.143096 5.01165 1.60723C7.00645 0.157852 8.88708 -0.396522 9.65619 0.377736C10.425 1.15247 9.85614 3.02873 8.39154 5.0125C9.84075 7.00728 10.3955 8.88716 9.62103 9.65606C8.84621 10.425 6.97027 9.85538 4.98626 8.39043C2.99131 9.83983 1.11156 10.3956 0.342709 9.6209C-0.426105 8.84617 0.142787 6.96989 1.60736 4.98613C0.158401 2.99158 -0.396443 1.1115 0.377865 0.34258Z" fill="#272D18"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#272D18]">
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
      )}

      {/* Education Column */}
      {showEducation && (
        <div className="space-y-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#272D18] tracking-tight">
            Education
          </h2>

          <div className="relative space-y-6">
            <div className="absolute left-[4px] top-3 bottom-3 w-[1.5px] bg-[#272D18]/30 -z-0" />

            {educationList.map((edu) => (
              <div key={edu.id} className="flex items-start gap-4 relative z-10">
                <div className="pt-1.5 pb-1.5 shrink-0 bg-[#FAF9F5]">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.377865 0.34258C1.15249 -0.426131 3.0282 0.143096 5.01165 1.60723C7.00645 0.157852 8.88708 -0.396522 9.65619 0.377736C10.425 1.15247 9.85614 3.02873 8.39154 5.0125C9.84075 7.00728 10.3955 8.88716 9.62103 9.65606C8.84621 10.425 6.97027 9.85538 4.98626 8.39043C2.99131 9.83983 1.11156 10.3956 0.342709 9.6209C-0.426105 8.84617 0.142787 6.96989 1.60736 4.98613C0.158401 2.99158 -0.396443 1.1115 0.377865 0.34258Z" fill="#272D18"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#272D18]">
                    {edu.institution}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">
                    {edu.degree}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};