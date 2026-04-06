import { useState } from "react";
import { toast } from "sonner";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

type LoginFormProps = Record<string, never>;

function LoginForm(_props: LoginFormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();

        const nextErrors: { email?: string; password?: string } = {};

        if (!email.trim()) {
          nextErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          nextErrors.email = "Enter a valid email address.";
        }

        if (!password.trim()) {
          nextErrors.password = "Password is required.";
        }

        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
          toast.error("Please fix the highlighted fields.");
          return;
        }

        toast.success("Signed in successfully (UI demo)");
      }}
    >
      <Input
        id="login-email"
        type="email"
        label="Email"
        placeholder="you@company.com"
        value={email}
        error={errors.email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
        }}
        required
      />

      <div>
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="login-password" className="block text-sm font-medium text-text-main">
            Password
          </label>
          <button type="button" className="text-sm font-medium text-primary hover:opacity-90">
            Forgot?
          </button>
        </div>
        <Input
          id="login-password"
          type="password"
          placeholder="Enter your password"
          value={password}
          error={errors.password}
          onChange={(event) => {
            setPassword(event.target.value);
            if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
          }}
          required
        />
      </div>

      <div className="flex items-center justify-between text-sm">
        <label className="inline-flex items-center gap-2 text-text-subtle">
          <input type="checkbox" className="h-4 w-4 rounded border-border text-primary focus:ring-primary/20" />
          Remember me
        </label>
      </div>

      <Button type="submit" fullWidth>
        Sign in
      </Button>
    </form>
  );
}

export type { LoginFormProps };
export default LoginForm;
