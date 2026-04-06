import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/ui/Card";

type AuthLayoutProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  footerText: string;
  footerLinkText: string;
  footerTo: string;
};

function AuthLayout({ title, subtitle, children, footerText, footerLinkText, footerTo }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-background ">
      <Card className="flex min-h-screen w-full x overflow-hidden rounded-none border-0 " >
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
              <h2 className="text-3xl font-bold text-text-main">{title}</h2>
              <p className="mt-2 text-sm text-text-subtle">{subtitle}</p>
            </div>

            {children}

            <p className="mt-7 text-center text-sm text-text-subtle">
              {footerText}{" "}
              <Link to={footerTo} className="font-semibold text-primary hover:opacity-90">
                {footerLinkText}
              </Link>
            </p>
          </div>
        </section>
      </Card>
    </main>
  );
}

export type { AuthLayoutProps };
export default AuthLayout;
