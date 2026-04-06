import type { HTMLAttributes } from "react";

type SpinnerProps = HTMLAttributes<HTMLDivElement> & {
  size?: "sm" | "md" | "lg";
};

const sizeClasses: Record<NonNullable<SpinnerProps["size"]>, string> = {
  sm: "h-4 w-4 border-2",
  md: "h-6 w-6 border-2",
  lg: "h-8 w-8 border-4"
};

function Spinner({ className = "", size = "md", ...props }: SpinnerProps) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={`inline-block animate-spin rounded-full border-border border-t-primary ${sizeClasses[size]} ${className}`.trim()}
      {...props}
    />
  );
}

export default Spinner;
