import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ProjectItem } from "@/types/portfolio";
import { Badge } from "./Badge";

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="group bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col h-full">
      {/* Thumbnail */}
      <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Category & Year */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 bg-[#EDF0E6] py-1.5 px-3 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#566542]" />
            <span className="text-xs font-medium text-[#566542]">
              {project.category}
            </span>
          </div>
          <span className="text-xs text-gray-400 font-mono">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#566542] transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1 line-clamp-4">
          {project.summary ?? project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <Badge key={idx} variant="default" className="text-[11px] py-0.5 px-2.5">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-gray-100 pt-5">
          <Link
            href={`/projects/${project.id}`}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full bg-[#566542] px-4 text-xs font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#445133] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#566542] focus-visible:ring-offset-2"
          >
            View Project Details
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          {project.link && project.link !== "#" && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-gray-300 px-4 text-xs font-semibold text-gray-700 transition-colors hover:border-[#566542]/50 hover:bg-[#566542]/5 hover:text-[#445133] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#566542] focus-visible:ring-offset-2"
            >
              Visit Live Project
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
