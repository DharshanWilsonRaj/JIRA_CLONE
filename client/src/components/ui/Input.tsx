import type { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  wrapperClassName?: string;
};

function Input({ className = "", wrapperClassName = "", id, label, error, ...props }: InputProps) {
  const hasError = Boolean(error);
  const errorId = id ? `${id}-error` : undefined;

  return (
    <div className={wrapperClassName}>
      {label ? (
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-text-main">
          {label}
        </label>
      ) : null}

      <input
        id={id}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
        className={`w-full rounded-xl border bg-surface px-4 py-3 text-text-main outline-none transition placeholder:text-text-subtle/80 focus:ring-4 ${
          hasError
            ? "border-red-500 focus:border-red-500 focus:ring-red-500/15"
            : "border-border focus:border-primary focus:ring-primary/15"
        } ${className}`.trim()}
        {...props}
      />

      {hasError ? (
        <p id={errorId} className="mt-2 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default Input;
