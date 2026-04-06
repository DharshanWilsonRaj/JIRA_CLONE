import AuthLayout from "../features/auth/components/AuthLayout";
import RegisterForm from "../features/auth/components/RegisterForm";

function RegisterPage() {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Set up your workspace access in a minute."
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerTo="/auth/login"
    >
      <RegisterForm />
    </AuthLayout>
  );
}

export default RegisterPage;
