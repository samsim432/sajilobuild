import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import DashboardLayout from "../components/dashboard/DashboardLayout";
import PromptBox from "../components/builder/PromptBox";

interface LocationState {
  prompt?: string;
}

function NewBuild() {
  const location = useLocation();

  const state = location.state as LocationState | null;

  const [initialPrompt, setInitialPrompt] = useState(
    state?.prompt || "",
  );

  useEffect(() => {
    if (state?.prompt) {
      setInitialPrompt(state.prompt);
    }
  }, [state?.prompt]);

  return (
    <DashboardLayout>
      <div className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-white">
        {/* =====================================================
            BACKGROUND
        ====================================================== */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[430px] overflow-hidden"
        >
          <div className="absolute left-1/2 top-[-280px] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-blue-50/60 blur-3xl" />

          <div className="absolute left-[8%] top-[220px] h-32 w-32 rounded-full bg-blue-50/30 blur-3xl" />

          <div className="absolute right-[10%] top-[160px] h-40 w-40 rounded-full bg-slate-100/70 blur-3xl" />
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="relative mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          {/* ===================================================
              TOP NAVIGATION
          ==================================================== */}

          <div className="hero-fade-in flex items-center justify-between">
            <Link
              to="/dashboard"
              className="group inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-950"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>

              Dashboard
            </Link>

            <div className="hidden items-center gap-2 text-xs text-slate-400 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />

              New Build
            </div>
          </div>

          {/* ===================================================
              HERO
          ==================================================== */}

          <section className="mx-auto mt-12 max-w-3xl text-center sm:mt-16">
            <div
              className="hero-fade-in inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700"
              style={{ animationDelay: "80ms" }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3v18" />
                <path d="M3 12h18" />
              </svg>

              New build
            </div>

            <h1
              className="hero-fade-in mt-5 text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl md:text-5xl"
              style={{ animationDelay: "130ms" }}
            >
              What do you want to build?
            </h1>

            <p
              className="hero-fade-in mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7"
              style={{ animationDelay: "180ms" }}
            >
              Start with your idea. You don't need to know how
              everything should work yet. SajiloBuild will help
              turn your idea into a real application.
            </p>
          </section>

          {/* ===================================================
              PROMPT
          ==================================================== */}

          <section
            className="hero-fade-in mx-auto mt-8 max-w-4xl sm:mt-10"
            style={{ animationDelay: "250ms" }}
          >
            <PromptBox initialPrompt={initialPrompt} />
          </section>

          {/* ===================================================
              WHAT HAPPENS NEXT
          ==================================================== */}

          <section
            className="hero-fade-in mx-auto mt-14 max-w-4xl sm:mt-20"
            style={{ animationDelay: "330ms" }}
          >
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                What happens next
              </p>

              <h2 className="mt-2 text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                From idea to application
              </h2>

              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">
                SajiloBuild will guide the project from your idea
                toward a working product.
              </p>
            </div>

            {/* =================================================
                STEPS
            ================================================== */}

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <BuildStep
                number="01"
                title="Understand"
                description="We turn your idea into clear product requirements."
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4-4" />
                  </svg>
                }
              />

              <BuildStep
                number="02"
                title="Plan"
                description="The project structure, features, and technical approach are planned."
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 5h16" />
                    <path d="M4 12h10" />
                    <path d="M4 19h7" />
                  </svg>
                }
              />

              <BuildStep
                number="03"
                title="Build"
                description="Your application is generated and becomes ready for you to refine."
                icon={
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M8 8l-4 4 4 4" />
                    <path d="M16 8l4 4-4 4" />
                    <path d="M14 4l-4 16" />
                  </svg>
                }
              />
            </div>
          </section>

          {/* ===================================================
              HELPER CARD
          ==================================================== */}

          <section
            className="hero-fade-in mx-auto mt-8 max-w-4xl sm:mt-10"
            style={{ animationDelay: "400ms" }}
          >
            <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5">
              <div className="flex gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm ring-1 ring-slate-200">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 11v5" />
                    <path d="M12 8h.01" />
                  </svg>
                </div>

                <div className="min-w-0">
                  <h2 className="text-sm font-semibold text-slate-950">
                    You don't need to know the technical details
                  </h2>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Focus on what you want to build, who it's
                    for, and what it should do. You can refine
                    the details as the project develops.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </DashboardLayout>
  );
}

interface BuildStepProps {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

function BuildStep({
  number,
  title,
  description,
  icon,
}: BuildStepProps) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
      <div className="flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-50 text-slate-600 transition-colors duration-200 group-hover:bg-blue-50 group-hover:text-blue-600">
          {icon}
        </div>

        <span className="text-[11px] font-semibold tracking-wider text-slate-300">
          {number}
        </span>
      </div>

      <h3 className="mt-4 text-sm font-semibold text-slate-950">
        {title}
      </h3>

      <p className="mt-1.5 text-sm leading-6 text-slate-500">
        {description}
      </p>
    </div>
  );
}

export default NewBuild;