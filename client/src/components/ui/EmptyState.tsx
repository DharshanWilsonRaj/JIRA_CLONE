import type { ReactNode } from "react";

type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: ReactNode;
  action?: ReactNode;
  className?: string;
};

function EmptyState({ title, description, icon, action, className = "" }: EmptyStateProps) {
  return (
    <div className={`rounded-2xl border border-dashed border-border bg-surface p-8 text-center ${className}`.trim()}>
      {icon ? <div className="mb-3 flex justify-center text-text-subtle">{icon}</div> : null}
      <h3 className="text-base font-semibold text-text-main">{title}</h3>
      {description ? <p className="mt-2 text-sm text-text-subtle">{description}</p> : null}
      {action ? <div className="mt-4">{action}</div> : null}
    </div>
  );
}

export default EmptyState;
