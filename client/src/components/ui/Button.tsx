import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "default" | "primary" | "outline" | "danger" | "success" | "black";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    fullWidth?: boolean;
    variant?: ButtonVariant;
  }
>;

const variantClasses: Record<ButtonVariant, string> = {
  default: "bg-primary text-white hover:opacity-95 focus:ring-primary/30",
  primary: "bg-primary text-white hover:opacity-95 focus:ring-primary/30",
  outline:
    "border border-border bg-surface text-text-main hover:bg-background focus:ring-primary/20 dark:border-border dark:bg-surface dark:text-text-main dark:hover:bg-background/70",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500/30 dark:bg-red-500 dark:hover:bg-red-600",
  success:
    "bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-emerald-500/30 dark:bg-emerald-500 dark:hover:bg-emerald-600",
  black: "bg-slate-900 text-white hover:bg-black focus:ring-slate-700/40 dark:bg-black dark:hover:bg-slate-900"
};

function Button({
  children,
  className = "",
  fullWidth = false,
  type = "button",
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`rounded-xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-60 ${
        variantClasses[variant]
      } ${
        fullWidth ? "w-full" : ""
      } ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
