type AvatarProps = {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses: Record<NonNullable<AvatarProps["size"]>, string> = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base"
};

function getInitials(name?: string) {
  if (!name) return "?";
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((part) => part.charAt(0).toUpperCase()).join("");
}

function Avatar({ src, alt = "Avatar", name, size = "md", className = "" }: AvatarProps) {
  const baseClass = `inline-flex items-center justify-center overflow-hidden rounded-full border border-border bg-background text-text-subtle ${sizeClasses[size]} ${className}`.trim();

  if (src) {
    return <img src={src} alt={alt} className={baseClass} />;
  }

  return <span className={baseClass}>{getInitials(name)}</span>;
}

export default Avatar;
