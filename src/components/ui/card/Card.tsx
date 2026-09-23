import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  rounded?: "2xl" | "3xl";
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverEffect = true,
  padding = "md",
  rounded = "2xl",
  className = "",
  ...props
}) => {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const roundedClasses = {
    "2xl": "rounded-2xl",
    "3xl": "rounded-3xl",
  };

  return (
    <div
      className={`bg-white border border-border overflow-hidden transition-all duration-300 ${
        roundedClasses[rounded]
      } ${paddingClasses[padding]} ${
        hoverEffect
          ? "hover:shadow-md hover:border-primary/20 hover:-translate-y-1"
          : "shadow-sm"
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
