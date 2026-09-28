import { useState, type ReactNode } from "react";

import DashboardLayout from "../components/dashboard/DashboardLayout";
import PromptBox from "../components/builder/PromptBox";
import { useAuth } from "../auth/AuthProvider";

interface IdeaCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  prompt: string;
  delay: string;
  onSelect: (prompt: string) => void;
}

const ideas: Omit<IdeaCardProps, "delay" | "onSelect">[] = [
  {
    title: "Business website",
    description: "A professional website for your business.",
    prompt:
      "Build a professional business website with a homepage, about section, services, testimonials, contact form, and responsive design.",
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M7 6.5h.01" />
        <path d="M10 6.5h.01" />
      </svg>
    ),
  },

  {
    title: "Developer portfolio",
    description: "Showcase projects, skills, and experience.",
    prompt:
      "Create a modern developer portfolio with a hero section, about section, skills, projects, experience, and contact form.",
    icon: (
      <svg
        width="19"
        height="19"
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
    ),
  },

  {
    title: "SaaS application",
    description: "Build a dashboard-based software product.",
    prompt:
      "Build a SaaS application with authentication, dashboard, user management, settings, navigation, and a modern responsive interface.",
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 9v12" />
      </svg>
    ),
  },

  {
    title: "Online store",
    description: "Products, cart, checkout, and orders.",
    prompt:
      "Create an online store with product listings, product details, categories, shopping cart, checkout, order management, and responsive design.",
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 8h12l1 12H5L6 8Z" />
        <path d="M9 8a3 3 0 0 1 6 0" />
      </svg>
    ),
  },

  {
    title: "Restaurant",
    description: "Menu, reservations, and restaurant information.",
    prompt:
      "Build a modern restaurant website with a beautiful menu, food categories, restaurant information, reservations, opening hours, location, and contact details.",
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 3v7" />
        <path d="M4 3v4a3 3 0 0 0 6 0V3" />
        <path d="M7 10v11" />
        <path d="M17 3v18" />
        <path d="M17 3c2.2 1.4 3 3.1 3 5.5V11h-3" />
      </svg>
    ),
  },

  {
    title: "Something else",
    description: "Start with any idea you have in mind.",
    prompt: "",
    icon: (
      <svg
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    ),
  },
];

function Dashboard() {
  const { user } = useAuth();

  const [selectedPrompt, setSelectedPrompt] = useState("");

  const firstName =
    user?.name?.trim().split(" ")[0] || "there";

  const handleIdeaSelect = (prompt: string) => {
    if (!prompt) {
      setSelectedPrompt("");
      return;
    }

    setSelectedPrompt(prompt);

    window.setTimeout(() => {
      document
        .getElementById("dashboard-build-prompt")
        ?.focus();
    }, 50);
  };

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
          <div className="absolute left-1/2 top-[-280px] h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-blue-50/70 blur-3xl" />

          <div className="absolute left-[10%] top-[190px] h-32 w-32 rounded-full bg-blue-50/40 blur-3xl" />

          <div className="absolute right-[8%] top-[140px] h-40 w-40 rounded-full bg-slate-100/70 blur-3xl" />
        </div>

        {/* =====================================================
            CONTENT
        ====================================================== */}

        <div className="relative mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          {/* ===================================================
              HERO
          ==================================================== */}

          <section className="mx-auto max-w-3xl text-center">
            <div
              className="hero-fade-in inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
              style={{ animationDelay: "50ms" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
              </span>

              Welcome back, {firstName}
            </div>

            <h1
              className="hero-fade-in mt-6 text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl md:text-5xl"
              style={{ animationDelay: "100ms" }}
            >
              What do you want to build?
            </h1>

            <p
              className="hero-fade-in mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base sm:leading-7"
              style={{ animationDelay: "150ms" }}
            >
              Describe your idea in plain language.
              SajiloBuild turns your idea into a working
              application.
            </p>
          </section>

          {/* ===================================================
              PROMPT
          ==================================================== */}

          <section
            className="hero-fade-in mx-auto mt-8 w-full max-w-4xl sm:mt-10"
            style={{ animationDelay: "220ms" }}
          >
            <PromptBox
              initialPrompt={selectedPrompt}
              onPromptChange={setSelectedPrompt}
            />
          </section>

          {/* ===================================================
              QUICK START
          ==================================================== */}

          <section
            className="hero-fade-in mx-auto mt-14 max-w-5xl sm:mt-20"
            style={{ animationDelay: "300ms" }}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                  Quick start
                </p>

                <h2 className="mt-2 text-lg font-semibold tracking-tight text-slate-950 sm:text-xl">
                  Start with an idea
                </h2>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Not sure what to build? Start with one of
                  these.
                </p>
              </div>

              <p className="hidden text-xs text-slate-400 sm:block">
                Choose an idea to fill the builder
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ideas.map((idea, index) => (
                <IdeaCard
                  key={idea.title}
                  {...idea}
                  delay={`${350 + index * 40}ms`}
                  onSelect={handleIdeaSelect}
                />
              ))}
            </div>
          </section>

          {/* ===================================================
              FOOTER MESSAGE
          ==================================================== */}

          <div
            className="hero-fade-in mx-auto mt-12 flex max-w-5xl justify-center sm:mt-16"
            style={{ animationDelay: "600ms" }}
          >
            <div className="flex items-center gap-2 text-center text-xs text-slate-400">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />
                <path d="M19 16l.6 1.9L21.5 19l-1.9.6L19 21.5l-.6-1.9-1.9-.6 1.9-.6L19 16Z" />
              </svg>

              <span>
                Describe it. Build it. Make it yours.
              </span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function IdeaCard({
  title,
  description,
  icon,
  prompt,
  delay,
  onSelect,
}: IdeaCardProps) {
  const isSelected =
    Boolean(prompt) && false;

  return (
    <button
      type="button"
      onClick={() => onSelect(prompt)}
      className={[
        "hero-fade-in group relative min-h-[138px] overflow-hidden rounded-xl border bg-white p-5 text-left",
        "transition-all duration-200",
        "hover:-translate-y-0.5 hover:border-blue-200",
        "hover:shadow-[0_8px_30px_rgba(15,23,42,0.06)]",
        "active:translate-y-0 active:scale-[0.99]",
        "focus-visible:border-blue-500",
        isSelected
          ? "border-blue-300 bg-blue-50/30"
          : "border-slate-200",
      ].join(" ")}
      style={{ animationDelay: delay }}
    >
      {/* Top accent */}

      <div className="absolute inset-x-0 top-0 h-px bg-blue-500 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

      {/* Header */}

      <div className="flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-600">
          {icon}
        </div>

        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="text-slate-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-blue-500"
        >
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      </div>

      {/* Content */}

      <h3 className="mt-4 text-sm font-semibold text-slate-950">
        {title}
      </h3>

      <p className="mt-1.5 max-w-[270px] text-sm leading-5 text-slate-500">
        {description}
      </p>
    </button>
  );
}

export default Dashboard;