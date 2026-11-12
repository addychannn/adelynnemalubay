"use client";

import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { postersLogos } from "@/data/posters-logos";
import { ProjectCard } from "../ui/ProjectCard";
import { ArtCard } from "../ui/ArtCard";
import { StarIcon } from "../ui/StarIcon";

type ProjectFilter = "all" | "projects" | "logos" | "banners";

interface ViewProjectsProps {
  initialFilter?: string;
}

const filters: { value: ProjectFilter; label: string }[] = [
  { value: "all", label: "All Work" },
  { value: "projects", label: "Projects" },
  { value: "logos", label: "Logos & Branding" },
  { value: "banners", label: "Posters & Banners" },
];

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => (
  <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200/80">
    <button
      onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
      disabled={currentPage === 1}
      className="min-h-10 rounded-full border border-gray-300 bg-white px-4 text-sm font-semibold text-gray-700 transition-colors hover:border-[#566542]/50 hover:bg-[#566542]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#566542] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40"
    >
      ← Previous
    </button>

    <div className="flex items-center gap-2">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          aria-current={currentPage === page ? "page" : undefined}
          className={`h-10 min-w-10 rounded-full px-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#566542] focus-visible:ring-offset-2 ${
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
      onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
      disabled={currentPage === totalPages}
      className="min-h-10 rounded-full border border-gray-300 bg-white px-4 text-sm font-semibold text-gray-700 transition-colors hover:border-[#566542]/50 hover:bg-[#566542]/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#566542] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40"
    >
      Next →
    </button>
  </div>
);

export const ViewProjects: React.FC<ViewProjectsProps> = ({ initialFilter }) => {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [logoPage, setLogoPage] = useState(1);
  const [bannerPage, setBannerPage] = useState(1);
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>(
    () => filters.find((filter) => filter.value === initialFilter)?.value ?? "all"
  );

  const logos = postersLogos.filter((item) => item.category === "Logo Design");
  const postersAndBanners = postersLogos.filter(
    (item) => item.category === "Poster Design" || item.category === "Banner Design"
  );
  const totalPages = Math.max(1, Math.ceil(projects.length / ITEMS_PER_PAGE));
  const totalLogoPages = Math.ceil(logos.length / ITEMS_PER_PAGE);
  const totalBannerPages = Math.ceil(postersAndBanners.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProjects = projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  const visibleLogos = logos.slice((logoPage - 1) * ITEMS_PER_PAGE, logoPage * ITEMS_PER_PAGE);
  const visiblePostersAndBanners = postersAndBanners.slice(
    (bannerPage - 1) * ITEMS_PER_PAGE,
    bannerPage * ITEMS_PER_PAGE
  );
  const showProjects = activeFilter === "all" || activeFilter === "projects";
  const showLogos = activeFilter === "all" || activeFilter === "logos";
  const showPostersAndBanners = activeFilter === "all" || activeFilter === "banners";

  const handleFilterChange = (filter: ProjectFilter) => {
    setActiveFilter(filter);
    setCurrentPage(1);
    setLogoPage(1);
    setBannerPage(1);
  };

  return (
    <section id="view_projects" className="bg-[#FAF9F5] py-16 md:py-10 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/#home"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-emerald-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <StarIcon className="w-3.5 h-3.5 text-[#7A8B63]" />
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            Portfolio
          </span>
        </div>

        <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight mb-12">
          Selected Work
        </h2>

        <div className="sticky top-20 z-40 -mx-4 mb-8 border-b border-gray-200/80 bg-[#FAF9F5]/95 px-4 py-4 backdrop-blur-md sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex flex-wrap gap-3" aria-label="Filter portfolio work">
            {filters.map((filter) => (
              <button
                key={filter.value}
                type="button"
                onClick={() => handleFilterChange(filter.value)}
                aria-pressed={activeFilter === filter.value}
                className={`min-h-10 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#566542] focus-visible:ring-offset-2 ${
                  activeFilter === filter.value
                    ? "border-[#566542] bg-[#566542] text-white shadow-sm"
                    : "border-gray-300 bg-white text-gray-700 hover:border-[#566542]/50 hover:bg-[#566542]/5 hover:text-[#445133]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {showProjects && (
            <section aria-labelledby="projects-heading">
              <h3 id="projects-heading" className="text-3xl font-bold text-gray-900 mb-8">
                Projects
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[450px]">
                {visibleProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
              {totalPages > 1 && (
                <PaginationControls
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </section>
          )}

          {showLogos && (
            <section aria-labelledby="logos-heading">
              <h3 id="logos-heading" className="text-3xl font-bold text-gray-900 mb-8">
                Logos &amp; Branding
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visibleLogos.map((item) => (
                  <ArtCard key={item.id} art={item} />
                ))}
              </div>
              {totalLogoPages > 1 && (
                <PaginationControls
                  currentPage={logoPage}
                  totalPages={totalLogoPages}
                  onPageChange={setLogoPage}
                />
              )}
            </section>
          )}

          {showPostersAndBanners && (
            <section aria-labelledby="banners-heading">
              <h3 id="banners-heading" className="text-3xl font-bold text-gray-900 mb-8">
                Posters &amp; Banners
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visiblePostersAndBanners.map((item) => (
                  <ArtCard key={item.id} art={item} />
                ))}
              </div>
              {totalBannerPages > 1 && (
                <PaginationControls
                  currentPage={bannerPage}
                  totalPages={totalBannerPages}
                  onPageChange={setBannerPage}
                />
              )}
            </section>
          )}
        </div>

      </div>
    </section>
  );
};