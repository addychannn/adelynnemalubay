import React from "react";

// Union type allowing either button or anchor props
type ButtonBaseProps = {
  variant?: "solid" | "outline" | "lime" | "dark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asChild?: boolean;
};

type AnchorProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = AnchorProps | NativeButtonProps;

export const Button: React.FC<ButtonProps> = ({
  variant = "solid",
  size = "md",
  children,
  href,
  className = "",
  ...props
}) => {
  const baseStyles =
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#566542] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const sizeStyles = {
    sm: "min-h-9 px-4 text-xs",
    md: "px-6 text-sm",
    lg: "min-h-12 px-8 text-base",
  };

  const variantStyles = {
    solid:
      "bg-[#566542] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#445133] hover:shadow-md active:translate-y-0",
    outline:
      "border border-[#566542]/35 bg-white text-[#445133] hover:-translate-y-0.5 hover:border-[#566542] hover:bg-[#566542]/5 hover:shadow-sm active:translate-y-0",
    lime: "bg-[#D2E874] text-[#1A2217] shadow-sm hover:-translate-y-0.5 hover:bg-[#C2DB62] hover:shadow-md active:translate-y-0",
    dark: "bg-[#2A3525] text-white shadow-sm hover:-translate-y-0.5 hover:bg-[#374431] hover:shadow-md active:translate-y-0",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={combinedClasses}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};