import type { HTMLAttributes } from "react";

type InlineErrorProps = HTMLAttributes<HTMLParagraphElement> & {
  message: string;
};

function InlineError({ message, className = "", ...props }: InlineErrorProps) {
  return (
    <p className={`text-sm text-red-600 dark:text-red-400 ${className}`.trim()} role="alert" {...props}>
      {message}
    </p>
  );
}

export default InlineError;
