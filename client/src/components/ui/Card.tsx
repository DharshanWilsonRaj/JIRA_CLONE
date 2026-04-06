import type { HTMLAttributes, PropsWithChildren } from "react";

type CardProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-border bg-surface shadow-2xl shadow-slate-200/50 dark:shadow-black/25 ${className}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
