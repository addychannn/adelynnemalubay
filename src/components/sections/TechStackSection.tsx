import React from "react";
import { skillCategories } from "@/data/skills";
import { StarIcon } from "../ui/StarIcon";

export const TechStackSection: React.FC = () => {
  return (
    <section className="bg-[#FAF9F5] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-10">
          Tech Stack
        </h2>

        <div className="space-y-6 max-w-3xl">
          {skillCategories.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
               <div className="pt-2 shrink-0 bg-[#FAF9F5]">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.377865 0.34258C1.15249 -0.426131 3.0282 0.143096 5.01165 1.60723C7.00645 0.157852 8.88708 -0.396522 9.65619 0.377736C10.425 1.15247 9.85614 3.02873 8.39154 5.0125C9.84075 7.00728 10.3955 8.88716 9.62103 9.65606C8.84621 10.425 6.97027 9.85538 4.98626 8.39043C2.99131 9.83983 1.11156 10.3956 0.342709 9.6209C-0.426105 8.84617 0.142787 6.96989 1.60736 4.98613C0.158401 2.99158 -0.396443 1.1115 0.377865 0.34258Z" fill="#272D18"/>
                  </svg>
                </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900">
                  {item.category}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 font-medium">
                  {item.skills.join(" • ")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
