"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { StarIcon } from "../ui/StarIcon";

export const ViewProjects: React.FC = () => {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const allProjects = projects || [];
  const totalPages = Math.max(1, Math.ceil(allProjects.length / ITEMS_PER_PAGE));

  // Slice to display only 3 projects per page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProjects = allProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section id="view_projects" className="bg-[#FAF9F5] py-16 md:py-10 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-6">
          <a
            href="/#home"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-emerald-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </a>
        </div>

        {/* Label */}
        <div className="flex items-center gap-2 mb-3">
          <StarIcon className="w-3.5 h-3.5 text-[#7A8B63]" />
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            All Projects
          </span>
        </div>

        {/* Title */}
        <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight mb-12">
          Projects
        </h2>

        {/* Paginated Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[450px]">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-200/80">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            ← Previous
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-9 h-9 rounded-full text-sm font-semibold transition-colors ${
                  currentPage === page
                    ? "bg-[#566542] text-white"
                    : "text-gray-600 hover:bg-gray-200/70"
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-semibold text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            Next →
          </button>
        </div>

      </div>
    </section>
  );
};