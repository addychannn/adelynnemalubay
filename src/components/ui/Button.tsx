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
    "inline-flex items-center justify-center font-medium rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#566542]";

  const sizeStyles = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const variantStyles = {
    solid:
      "bg-[#566542] text-white hover:bg-[#445133] shadow-xs active:scale-[0.98]",
    outline:
      "border border-[#566542] text-[#566542] hover:bg-[#566542]/10 active:scale-[0.98]",
    lime: "bg-[#D2E874] text-[#1A2217] hover:bg-[#C2DB62] font-semibold shadow-xs active:scale-[0.98]",
    dark: "bg-[#2A3525] text-white hover:bg-[#374431] active:scale-[0.98]",
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