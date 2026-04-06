import type { InputHTMLAttributes } from "react";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  wrapperClassName?: string;
};

function Checkbox({ className = "", wrapperClassName = "", id, label, error, ...props }: CheckboxProps) {
  const hasError = Boolean(error);
  const errorId = id ? `${id}-error` : undefined;

  return (
    <div className={wrapperClassName}>
      <label htmlFor={id} className="inline-flex items-center gap-2 text-sm text-text-main">
        <input
          id={id}
          type="checkbox"
          aria-invalid={hasError}
          aria-describedby={hasError ? errorId : undefined}
          className={`h-4 w-4 rounded border text-primary focus:ring-2 focus:ring-primary/25 ${
            hasError ? "border-red-500" : "border-border"
          } ${className}`.trim()}
          {...props}
        />
        {label ? <span>{label}</span> : null}
      </label>

      {hasError ? (
        <p id={errorId} className="mt-2 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default Checkbox;
