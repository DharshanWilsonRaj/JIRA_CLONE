import type { HTMLAttributes } from "react";

type DividerProps = HTMLAttributes<HTMLHRElement> & {
  orientation?: "horizontal" | "vertical";
};

function Divider({ className = "", orientation = "horizontal", ...props }: DividerProps) {
  const orientationClass = orientation === "vertical" ? "h-full w-px" : "h-px w-full";
  return <hr className={`shrink-0 border-0 bg-border ${orientationClass} ${className}`.trim()} {...props} />;
}

export default Divider;
