import React from "react";
import { skillCategories } from "@/data/skills";
import { StarIcon } from "../ui/StarIcon";

export const TechStackSection: React.FC = () => {
  return (
    <section className="bg-[#FAF9F5] py-12 md:py-16 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-10">
          Tech Stack
        </h2>

        <div className="space-y-6 max-w-3xl">
          {skillCategories.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <StarIcon className="w-4 h-4 text-[#7A8B63] mt-1 shrink-0" />
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
