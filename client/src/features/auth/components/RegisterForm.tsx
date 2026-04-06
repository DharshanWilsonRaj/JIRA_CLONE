import { useState } from "react";
import { toast } from "sonner";
import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";

type RegisterFormProps = Record<string, never>;

function RegisterForm(_props: RegisterFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  return (
    <form
      className="space-y-5"
      onSubmit={(event) => {
        event.preventDefault();

        const nextErrors: {
          fullName?: string;
          email?: string;
          password?: string;
          confirmPassword?: string;
        } = {};

        if (!fullName.trim()) {
          nextErrors.fullName = "Full name is required.";
        }

        if (!email.trim()) {
          nextErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          nextErrors.email = "Enter a valid email address.";
        }

        if (!password.trim()) {
          nextErrors.password = "Password is required.";
        } else if (password.length < 8) {
          nextErrors.password = "Password must be at least 8 characters.";
        }

        if (!confirmPassword.trim()) {
          nextErrors.confirmPassword = "Confirm password is required.";
        } else if (confirmPassword !== password) {
          nextErrors.confirmPassword = "Passwords do not match.";
        }

        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
          toast.error("Please fix the highlighted fields.");
          return;
        }

        toast.success("Account created successfully (UI demo)");
      }}
    >
      <Input
        id="register-name"
        type="text"
        label="Full Name"
        placeholder="John Doe"
        value={fullName}
        error={errors.fullName}
        onChange={(event) => {
          setFullName(event.target.value);
          if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
        }}
        required
      />

      <Input
        id="register-email"
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

      <Input
        id="register-password"
        type="password"
        label="Password"
        placeholder="Create a password"
        value={password}
        error={errors.password}
        onChange={(event) => {
          setPassword(event.target.value);
          if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
        }}
        required
      />

      <Input
        id="register-confirm-password"
        type="password"
        label="Confirm Password"
        placeholder="Re-enter your password"
        value={confirmPassword}
        error={errors.confirmPassword}
        onChange={(event) => {
          setConfirmPassword(event.target.value);
          if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
        }}
        required
      />

      <Button type="submit" fullWidth>
        Create account
      </Button>
    </form>
  );
}

export type { RegisterFormProps };
export default RegisterForm;
