import React from "react";
import { appConfig } from "@/config/app";

export const RoleMarquee: React.FC = () => {
  return (
    <section className="bg-[#FAF9F5] border-y border-gray-300/80 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-around gap-6 md:gap-12 text-center">
          {appConfig.roles.map((role, idx) => (
            <span
              key={idx}
              className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
