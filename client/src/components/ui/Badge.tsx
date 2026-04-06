import type { HTMLAttributes, PropsWithChildren } from "react";

type BadgeVariant = "default" | "primary" | "success" | "danger" | "outline";

type BadgeProps = PropsWithChildren<
  HTMLAttributes<HTMLSpanElement> & {
    variant?: BadgeVariant;
  }
>;

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-background text-text-main border border-border",
  primary: "bg-primary/10 text-primary border border-primary/20",
  success: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20",
  danger: "bg-red-500/10 text-red-700 dark:text-red-300 border border-red-500/20",
  outline: "bg-transparent text-text-main border border-border"
};

function Badge({ children, className = "", variant = "default", ...props }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${variantClasses[variant]} ${className}`.trim()} {...props}>
      {children}
    </span>
  );
}

export default Badge;
