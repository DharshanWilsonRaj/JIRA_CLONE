import { useState } from "react";
import { toast } from "sonner";
import Card from "./components/ui/Card";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  return (
    <main className="min-h-screen bg-background px-4 py-10 sm:px-6 lg:px-8">
      <Card className="mx-auto flex min-h-[85vh] w-full max-w-6xl overflow-hidden">
        <section className="hidden w-1/2 bg-primary p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/90">
              Jira Clone
            </p>
            <h1 className="text-4xl font-semibold leading-tight">Plan sprints, track progress, ship faster.</h1>
            <p className="mt-5 max-w-sm text-white/85">
              One place for backlog, board, and issue tracking with a clean team-first workflow.
            </p>
          </div>
          <p className="text-sm text-white/80">Built for modern product teams.</p>
        </section>

        <section className="flex w-full items-center justify-center p-6 sm:p-10 lg:w-1/2">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-text-main">Welcome back</h2>
              <p className="mt-2 text-sm text-text-subtle">Sign in to continue to your workspace.</p>
            </div>

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
                id="email"
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
                  <label htmlFor="password" className="block text-sm font-medium text-text-main">
                    Password
                  </label>
                  <button type="button" className="text-sm font-medium text-primary hover:opacity-90">
                    Forgot?
                  </button>
                </div>
                <Input
                  id="password"
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

            <p className="mt-7 text-center text-sm text-text-subtle">
              New here? <button className="font-semibold text-primary hover:opacity-90">Create an account</button>
            </p>
          </div>
        </section>
      </Card>
    </main>
  );
}

export default App;
