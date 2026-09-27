import type { ReactNode } from "react";

import Logo from "../brand/logo";

interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 py-8 sm:px-6 sm:py-12">
        <div className="flex justify-center">
          <a href="/" aria-label="SajiloBuild home">
            <Logo />
          </a>
        </div>

        <div className="mt-8 flex-1 sm:mt-10">
          {children}
        </div>

        <p className="mt-8 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} SajiloBuild. All rights
          reserved.
        </p>
      </div>
    </main>
  );
}

export default AuthLayout;