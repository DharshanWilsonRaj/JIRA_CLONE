import { Toaster } from "sonner";

function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      richColors
      toastOptions={{
        style: {
          border: "1px solid rgb(var(--color-border))",
          background: "rgb(var(--color-surface))",
          color: "rgb(var(--color-text-main))"
        }
      }}
    />
  );
}

export default ToastProvider;
