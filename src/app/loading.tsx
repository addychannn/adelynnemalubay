import Image from "next/image";
import { appConfig } from "@/config/app";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
      className="flex min-h-[70vh] flex-1 items-center justify-center bg-[#FAF9F5] px-6"
    >
      <div className="flex flex-col items-center gap-5">
        <div className="relative flex h-28 w-28 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-[#566542]/15" />
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-[#566542] motion-reduce:animate-none" />
          <div className="relative h-20 w-20 animate-pulse motion-reduce:animate-none">
            <Image
              src={appConfig.logoImage}
              alt=""
              fill
              priority
              sizes="80px"
              className="object-contain"
            />
          </div>
        </div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#566542]">
          Loading
        </p>
      </div>
    </div>
  );
}
