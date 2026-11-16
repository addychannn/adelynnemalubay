import React from "react";
import { projects } from "@/data/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { StarIcon } from "../ui/StarIcon";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section id="projects" className="scroll-mt-24 bg-[#FAF9F5] py-16 md:py-24 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <div className="flex items-center gap-2 mb-3">
          <StarIcon className="w-3.5 h-3.5 text-[#7A8B63]" />
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            SELECTED WORKS
          </span>
        </div>

        {/* Title */}
        <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight mb-12">
          Projects
        </h2>
        {/* <p className="mb-10 -mt-6 max-w-2xl text-base leading-relaxed text-gray-600">
          Mobile app projects first, followed by product tools. Browse more projects and visual work.
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-12">
          <Button 
            href="/projects" 
            variant="outline" 
            size="md"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};