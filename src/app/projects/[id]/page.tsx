import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { projects } from "@/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-gray-900 flex flex-col font-sans selection:bg-[#D2E874] selection:text-[#1A2217]">
      <Header />
      <main className="flex-1">
        <section className="bg-[#FAF9F5] pb-12 md:pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/projects?filter=projects"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-[#566542] transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>

            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#EDF0E6] px-3 py-1.5 text-xs font-medium text-[#566542]">
                {project.category}
              </span>
              <span className="text-sm font-mono text-gray-500">{project.year}</span>
            </div>

            <h1 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              {project.title}
            </h1>

            <div className="mb-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
              <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-2xl bg-gray-100 shadow-sm lg:mx-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 768px"
                  className="object-contain"
                />
              </div>
              <aside>
                <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-gray-500">
                  Skills &amp; Tools
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="default" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </aside>
            </div>

            <div>
              <h2 className="mb-3 text-xl font-bold text-gray-900">About this project</h2>
              <p className="text-base leading-7 text-gray-600">{project.description}</p>
            </div>

            <div className="mt-10">
              {project.link && project.link !== "#" && (
                <Button
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="md"
                >
                  Visit Project
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
