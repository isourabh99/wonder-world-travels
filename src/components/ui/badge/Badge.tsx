import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "light" | "outline" | "gold" | "success";
  size?: "sm" | "md";
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "light",
  size = "sm",
  className = "",
  icon,
}) => {
  const sizeClasses = {
    sm: "text-[11px] px-2.5 py-0.5 font-medium tracking-wide uppercase",
    md: "text-xs px-3 py-1 font-semibold",
  };

  const variantClasses = {
    primary: "bg-primary text-white",
    light: "bg-primary-light text-primary border border-primary/10",
    outline: "border border-border text-foreground bg-white/80",
    gold: "bg-sky-50 text-sky-700 border border-sky-200",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
