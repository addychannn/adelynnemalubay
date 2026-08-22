import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "lime" | "dark";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium transition-colors";

  const variantStyles = {
    default: "bg-[#EFEFEA] text-[#4A5538]",
    outline: "border border-[#566542] text-[#566542]",
    lime: "bg-[#D2E874] text-[#1A2217] font-semibold",
    dark: "bg-[#283223] text-[#A6C088]",
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
