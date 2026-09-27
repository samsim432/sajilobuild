import { useState } from "react";

type PromptCategory =
  | "E-commerce"
  | "Restaurant"
  | "Portfolio"
  | "Booking"
  | "SaaS"
  | "Business";

type PromptItem = {
  title: string;
  description: string;
  prompt: string;
  category: PromptCategory;
};

const prompts: PromptItem[] = [
  {
    title: "Online clothing store",
    description:
      "Products, categories, shopping cart, and checkout.",
    prompt:
      "Build an online clothing store with products, categories, cart, and checkout.",
    category: "E-commerce",
  },
  {
    title: "Restaurant website",
    description:
      "Menu, location, opening hours, and contact information.",
    prompt:
      "Create a modern restaurant website with a menu, location, opening hours, and contact information.",
    category: "Restaurant",
  },
  {
    title: "Developer portfolio",
    description:
      "Projects, skills, experience, and contact information.",
    prompt:
      "Build my developer portfolio with projects, skills, experience, and contact information.",
    category: "Portfolio",
  },
  {
    title: "Hotel booking system",
    description:
      "Rooms, availability, reservations, and booking management.",
    prompt:
      "Create a hotel booking application with rooms, availability, and reservations.",
    category: "Booking",
  },
  {
    title: "SaaS dashboard",
    description:
      "Analytics, users, settings, and data management.",
    prompt:
      "Build a SaaS dashboard with analytics, users, settings, and data management.",
    category: "SaaS",
  },
  {
    title: "Business website",
    description:
      "Professional pages for a growing business.",
    prompt:
      "Create a professional business website with services, about, contact, and testimonials.",
    category: "Business",
  },
];

function CategoryIcon({
  category,
}: {
  category: PromptCategory;
}) {
  const commonProps = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (category) {
    case "E-commerce":
      return (
        <svg {...commonProps}>
          <path d="M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20 8H6" />
          <circle cx="10" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
        </svg>
      );

    case "Restaurant":
      return (
        <svg {...commonProps}>
          <path d="M7 3v8" />
          <path d="M4 3v5a3 3 0 0 0 6 0V3" />
          <path d="M7 11v10" />
          <path d="M16 3v18" />
          <path d="M16 3c2 2 3 4.5 3 7h-3" />
        </svg>
      );

    case "Portfolio":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M8 4V2h8v2" />
          <path d="M3 10h18" />
          <path d="M9 14h6" />
        </svg>
      );

    case "Booking":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="17" rx="2" />
          <path d="M16 2v4" />
          <path d="M8 2v4" />
          <path d="M3 10h18" />
          <path d="M8 14h.01" />
          <path d="M12 14h.01" />
          <path d="M16 14h.01" />
        </svg>
      );

    case "SaaS":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
          <path d="M13 13h4" />
          <path d="M13 17h4" />
        </svg>
      );

    case "Business":
      return (
        <svg {...commonProps}>
          <path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16" />
          <path d="M2 21h20" />
          <path d="M8 7h2" />
          <path d="M14 7h2" />
          <path d="M8 11h2" />
          <path d="M14 11h2" />
          <path d="M10 21v-4h4v4" />
        </svg>
      );
  }
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function ExamplePrompts() {
  const [usedPrompt, setUsedPrompt] = useState<string | null>(
    null,
  );

  const handleUsePrompt = (prompt: string) => {
    const promptInput = document.getElementById(
      "build-prompt",
    ) as HTMLTextAreaElement | null;

    if (!promptInput) {
      return;
    }

    /*
     * Update the native textarea value in a way that
     * React-controlled inputs can detect.
     */
    const nativeSetter = Object.getOwnPropertyDescriptor(
      HTMLTextAreaElement.prototype,
      "value",
    )?.set;

    nativeSetter?.call(promptInput, prompt);

    promptInput.dispatchEvent(
      new Event("input", {
        bubbles: true,
      }),
    );

    promptInput.focus();

    setUsedPrompt(prompt);

    window.setTimeout(() => {
      setUsedPrompt(null);
    }, 1800);

    /*
     * Scroll the prompt builder into view on smaller screens.
     */
    window.setTimeout(() => {
      promptInput.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 50);
  };

  return (
    <section
      id="templates"
      aria-labelledby="examples-heading"
      className="relative overflow-hidden border-t border-slate-100 bg-slate-50"
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-px w-full max-w-5xl -translate-x-1/2 bg-slate-200" />

        <div className="absolute left-[8%] top-24 h-32 w-32 rounded-full bg-blue-100/50 blur-3xl" />

        <div className="absolute bottom-20 right-[8%] h-40 w-40 rounded-full bg-slate-200/70 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
            <span
              className="h-1.5 w-1.5 rounded-full bg-blue-600"
              aria-hidden="true"
            />

            Start with an idea
          </div>

          <h2
            id="examples-heading"
            className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Tell SajiloBuild what
            <span className="text-blue-600">
              {" "}
              you want to build.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Start with an idea and let SajiloBuild handle the
            technical details. Choose an example below or describe
            your own product.
          </p>
        </div>

        {/* =====================================================
            PROMPT CARDS
        ====================================================== */}

        <div className="mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {prompts.map((item, index) => {
            const isUsed = usedPrompt === item.prompt;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => handleUsePrompt(item.prompt)}
                aria-label={`Use ${item.title} example`}
                className={`group relative flex min-h-[230px] flex-col overflow-hidden rounded-2xl border bg-white p-5 text-left outline-none transition-all duration-300 sm:p-6 ${
                  isUsed
                    ? "border-blue-300 shadow-[0_16px_40px_-20px_rgba(37,99,235,0.35)]"
                    : "border-slate-200 shadow-[0_8px_30px_-24px_rgba(15,23,42,0.3)] hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_45px_-24px_rgba(15,23,42,0.35)]"
                } focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2`}
              >
                {/* Top number */}

                <div className="flex items-start justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-colors duration-300 group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-600">
                    <CategoryIcon category={item.category} />
                  </span>

                  <span className="font-mono text-[11px] font-medium tabular-nums text-slate-300 transition-colors duration-300 group-hover:text-blue-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}

                <div className="mt-5">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-blue-600">
                    {item.category}
                  </span>

                  <h3 className="mt-2 text-base font-semibold tracking-tight text-slate-950 sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>
                </div>

                {/* Bottom action */}

                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                  <span
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 ${
                      isUsed
                        ? "text-blue-700"
                        : "text-slate-700 group-hover:text-blue-600"
                    }`}
                  >
                    {isUsed ? (
                      <>
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                          <CheckIcon />
                        </span>
                        Added to builder
                      </>
                    ) : (
                      <>
                        Use this idea
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          <ArrowIcon />
                        </span>
                      </>
                    )}
                  </span>

                  <span
                    className="text-xs text-slate-400"
                    aria-hidden="true"
                  >
                    AI-ready
                  </span>
                </div>

                {/* Hover line */}

                <span
                  className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>

        {/* =====================================================
            STATUS MESSAGE
        ====================================================== */}

        <div
          aria-live="polite"
          className="mt-7 flex min-h-6 items-center justify-center"
        >
          {usedPrompt && (
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-medium text-blue-700 shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                <CheckIcon />
              </span>

              Idea added to the prompt builder
            </div>
          )}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ====================================================== */}

        <div className="mx-auto mt-12 max-w-2xl text-center sm:mt-14">
          <p className="text-sm text-slate-500">
            Don't see your idea?
          </p>

          <a
            href="#prompt-builder"
            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
          >
            Describe your own idea
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ExamplePrompts;