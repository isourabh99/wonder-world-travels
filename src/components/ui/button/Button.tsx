import React, { forwardRef } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  pill?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      pill = true,
      leftIcon,
      rightIcon,
      isLoading,
      className = "",
      disabled,
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-7 py-3.5 gap-2.5",
    };

    const variantClasses = {
      primary:
        "bg-primary text-white hover:bg-primary-hover shadow-sm hover:shadow active:scale-[0.98]",
      secondary:
        "bg-foreground text-white hover:bg-black shadow-sm hover:shadow active:scale-[0.98]",
      outline:
        "border border-primary text-primary hover:bg-primary-light active:scale-[0.98]",
      ghost:
        "text-primary hover:bg-primary-light active:scale-[0.98]",
      light:
        "bg-primary-light text-primary hover:bg-primary/15 active:scale-[0.98]",
    };

    const shapeClass = pill ? "rounded-full" : "rounded-2xl";

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ${shapeClass} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
        {...props}
      >
        {isLoading ? (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : (
          leftIcon
        )}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = "Button";
