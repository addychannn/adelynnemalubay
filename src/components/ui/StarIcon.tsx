import React from "react";

interface StarIconProps {
  className?: string;
}

export const StarIcon: React.FC<StarIconProps> = ({
  className = "w-4 h-4 text-[#566542]",
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`inline-block shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
};
