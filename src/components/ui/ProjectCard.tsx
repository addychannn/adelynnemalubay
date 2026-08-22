import React from "react";
import Image from "next/image";
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
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#566542]" />
            <span className="text-xs font-medium text-gray-600">
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
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, idx) => (
            <Badge key={idx} variant="default" className="text-[11px] py-0.5 px-2.5">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Action Link */}
        <div className="pt-4 border-t border-gray-100">
          <a
            href={project.link || "#"}
            className="inline-flex items-center text-xs font-semibold text-gray-800 hover:text-[#566542] transition-colors gap-1 group/link"
          >
            <span>View Project</span>
            <span className="inline-block transition-transform group-hover/link:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};
