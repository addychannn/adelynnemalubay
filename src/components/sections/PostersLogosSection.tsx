import React from "react";
import { postersLogos } from "@/data/posters-logos";
import { ArtCard } from "../ui/ArtCard";
import { Button } from "../ui/Button";
import { StarIcon } from "../ui/StarIcon";
import { ArrowRight } from "lucide-react";

export const PostersLogosSection: React.FC = () => {
  const logos = postersLogos.filter((item) => item.category === "Logo Design");
  const postersAndBanners = postersLogos.filter(
    (item) => item.category === "Poster Design" || item.category === "Banner Design"
  );
  const featuredLogos = logos.slice(0, 3);
  const featuredPostersAndBanners = postersAndBanners.slice(0, 3);

  return (
    <section id="posters-logos" className="bg-[#FAF9F5] py-16 md:py-24 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-3">
          <StarIcon className="w-3.5 h-3.5 text-[#7A8B63]" />
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            SELECTED WORKS
          </span>
        </div>

        <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight mb-12">
          Visual Design
        </h2>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Logos &amp; Branding
            </h3>
            {featuredLogos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredLogos.map((item) => (
                  <ArtCard key={item.id} art={item} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                Logo and branding projects will appear here.
              </p>
            )}
            {/* <div className="mt-8">
              <Button href="/projects?filter=logos" variant="outline" size="md">
                View More Logos
              </Button>
            </div> */}
              <div className="flex items-center justify-center mt-12">
                <Button 
                  href="/projects?filter=logos"
                  variant="outline" 
                  size="md"
                >
                  View More Logos
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Posters &amp; Banners
            </h3>
            {featuredPostersAndBanners.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPostersAndBanners.map((item) => (
                  <ArtCard key={item.id} art={item} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500">
                Poster and banner projects will appear here.
              </p>
            )}
            {/* <div className="mt-8">
              <Button href="/projects?filter=banners" variant="outline" size="md">
                View More Posters &amp; Banners
              </Button>
            </div> */}
            <div className="flex items-center justify-center mt-12">
              <Button 
                href="/projects?filter=banners"
                variant="outline" 
                size="md"
              >
                View More Posters &amp; Banners
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
