import type { HTMLAttributes } from "react";

type SkeletonProps = HTMLAttributes<HTMLDivElement>;

function Skeleton({ className = "", ...props }: SkeletonProps) {
  return <div className={`animate-pulse rounded-lg bg-border/70 dark:bg-border/60 ${className}`.trim()} {...props} />;
}

export default Skeleton;
