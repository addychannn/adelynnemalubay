import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ViewProjects } from "@/components/pages/ViewProjects";

interface ProjectsPageProps {
  searchParams: Promise<{ filter?: string | string[] }>;
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const { filter } = await searchParams;

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-gray-900 flex flex-col font-sans selection:bg-[#D2E874] selection:text-[#1A2217]">
      <Header />
      <main className="flex-1">
        <ViewProjects initialFilter={Array.isArray(filter) ? filter[0] : filter} />
      </main>
      <Footer />
    </div>
  );
}
