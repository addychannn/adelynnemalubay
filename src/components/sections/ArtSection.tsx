import React from "react";
import { arts } from "@/data/arts";
import { StarIcon } from "../ui/StarIcon";
import { ArtCard } from "../ui/ArtCard";
import { Button } from "../ui/Button";

export const ArtSection: React.FC = () => {
  return (
    <section id="arts" className="bg-[#FAF9F5] py-16 md:py-24 border-t border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-3">
          <StarIcon className="w-3.5 h-3.5 text-[#7A8B63]" />
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            SELECTED WORKS
          </span>
        </div>

        <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 tracking-tight mb-12">
          Arts &amp; Illustration
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {arts.map((art) => (
            <ArtCard key={art.id} art={art} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-12 md:mt-16">
          <Button 
            href="https://www.instagram.com/studio.addy_/" 
            target="_blank"
            rel="noopener noreferrer"
            variant="outline" 
            size="md"
          >
            Visit Studio Addy on Instagram ↗
          </Button>
        </div>
      </div>
    </section>
  );
};