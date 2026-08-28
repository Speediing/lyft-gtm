import { Suspense } from "react";
import { LoginForm } from "@/components/LoginForm";
import { BrandLockup } from "@/components/BrandLockup";

export default function LoginPage() {
  return (
    <main className="login-shell">
      <section className="login-card" aria-labelledby="login-title">
        <BrandLockup size="md" />
        <p className="eyebrow">Lyft x SpaceXAI</p>
        <h1 id="login-title">Enter the site password</h1>
        <p className="login-intro">
          Open the private GTM leave-behind.
        </p>
        <Suspense fallback={null}>
          <LoginForm />
        </Suspense>
      </section>
    </main>
  );
}
