import AuthLayout from "../features/auth/components/AuthLayout";
import LoginForm from "../features/auth/components/LoginForm";

function LoginPage() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to continue to your workspace."
      footerText="New here?"
      footerLinkText="Create an account"
      footerTo="/auth/register"
    >
      <LoginForm />
    </AuthLayout>
  );
}

export default LoginPage;
