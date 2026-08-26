"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ArtItem } from "@/types/portfolio";
import { Badge } from "./Badge";

interface ArtCardProps {
  art: ArtItem;
}

export const ArtCard: React.FC<ArtCardProps> = ({ art }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Animation Refs
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLDivElement>(null);

  // GSAP Entrance & Exit Animations
  useEffect(() => {
    if (isPreviewOpen) {
      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden";

      const ctx = gsap.context(() => {
        // Fade in backdrop
        gsap.fromTo(
          overlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.3, ease: "power2.out" }
        );

        // Scale & pop in image
        gsap.fromTo(
          imageWrapperRef.current,
          { scale: 0.85, opacity: 0, y: 20 },
          { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.4)", delay: 0.05 }
        );

        // Fade up caption text
        gsap.fromTo(
          captionRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.3, delay: 0.2, ease: "power2.out" }
        );
      });

      return () => {
        ctx.revert();
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isPreviewOpen]);

  // Smooth exit transition handler
  const handleClose = () => {
    const ctx = gsap.context(() => {
      gsap.to([imageWrapperRef.current, captionRef.current], {
        scale: 0.9,
        opacity: 0,
        duration: 0.2,
        ease: "power2.in",
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => setIsPreviewOpen(false),
      });
    });

    return () => ctx.revert();
  };

  // Keyboard support: ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isPreviewOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPreviewOpen]);

  return (
    <>
      <article onClick={() => setIsPreviewOpen(true)} className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-gray-950 shadow-md">
        {/* Artwork */}
        <Image
          src={art.image}
          alt={art.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Persistent top-right badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="text-[10px] font-mono font-medium text-white/80 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            {art.year}
          </span>
        </div>

        {/* Hover Gradient Overlay with Info */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5 flex flex-col justify-end">
          <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <span className="text-[11px] font-medium tracking-wider uppercase text-[#A0B088] mb-1 block">
              {art.category}
            </span>
            <h3 className="text-xl font-bold text-white mb-2">{art.title}</h3>

            <div className="flex items-center justify-between gap-2 pt-2 border-t border-white/15">
              <div className="flex flex-wrap gap-1">
                {art.tags.slice(0, 3).map((tag, idx) => (
                  <Badge key={idx} className="bg-white/10 text-white text-[10px] border-none px-2 py-0">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Preview Button */}
              <button
                type="button"
                onClick={() => setIsPreviewOpen(true)}
                className="text-xs text-white font-medium hover:text-[#A0B088] transition-colors shrink-0 flex items-center gap-1 cursor-pointer"
              >
                <span>Preview</span>
                <span className="text-sm">🔍</span>
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* GSAP Powered Lightbox Modal */}
      {isPreviewOpen && (
        <div
          ref={overlayRef}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-20 cursor-pointer"
            aria-label="Close preview"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Image Box */}
          <div
            ref={imageWrapperRef}
            className="relative max-w-5xl w-full max-h-[80vh] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={art.image}
              alt={art.title}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Caption */}
          <div
            ref={captionRef}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white/90 pointer-events-none"
          >
            <p className="font-bold text-lg tracking-tight">{art.title}</p>
            <p className="text-xs text-white/60 font-mono mt-0.5">
              {art.category} • {art.year}
            </p>
          </div>
        </div>
      )}
    </>
  );
};