import React from "react";
import { appConfig } from "@/config/app";

export const RoleMarquee: React.FC = () => {
  return (
    <section className="bg-[#FAF9F5] border-y border-gray-300/80 py-4 sm:py-5 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap items-center justify-center lg:justify-around gap-x-5 gap-y-2 sm:gap-x-8 sm:gap-y-3 md:gap-x-12 text-center">
          {appConfig.roles.map((role) => (
            <li
              key={role}
              className="text-sm min-[400px]:text-base sm:text-lg md:text-xl font-bold text-gray-900 tracking-tight whitespace-nowrap"
            >
              {role}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};