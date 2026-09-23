import React from "react";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
  titleTag?: "h1" | "h2" | "h3";
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className = "",
  titleTag: Tag = "h2",
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses[align]} ${className}`}>
      {eyebrow && (
        <span className="text-xs uppercase tracking-widest font-semibold text-primary mb-2.5 px-3 py-1 bg-primary-light rounded-full inline-block">
          {eyebrow}
        </span>
      )}
      <Tag className="text-h2 md:text-h1 font-serif text-primary tracking-tight font-bold mb-3.5 leading-tight">
        {title}{" "}
        {highlight && (
          <span className="text-foreground relative inline-block">
            {highlight}
          </span>
        )}
      </Tag>
      {description && (
        <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
