import type { HTMLAttributes, PropsWithChildren } from "react";

type TagProps = PropsWithChildren<HTMLAttributes<HTMLSpanElement>>;

function Tag({ children, className = "", ...props }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-lg border border-border bg-surface px-2 py-1 text-xs text-text-subtle ${className}`.trim()}
      {...props}
    >
      {children}
    </span>
  );
}

export default Tag;
