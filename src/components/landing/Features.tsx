const features = [
  {
    number: "01",
    title: "Natural language",
    description:
      "Describe your idea in normal language instead of starting with technical requirements, frameworks, or code.",
    label: "Describe",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.4 9.4 0 0 1-4.1-.9L3 21l1.9-4.4A8.5 8.5 0 1 1 21 11.5Z" />
        <path d="M8 11h8" />
        <path d="M8 7h5" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "AI-powered building",
    description:
      "SajiloBuild is designed to help turn your requirements into application structure, interfaces, and implementation.",
    label: "Build",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Keep improving",
    description:
      "Your first idea is only the beginning. Continue describing changes and refine your project as it develops.",
    label: "Iterate",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 12a9 9 0 0 1 15.5-6.2L21 8" />
        <path d="M21 3v5h-5" />
        <path d="M21 12a9 9 0 0 1-15.5 6.2L3 16" />
        <path d="M3 21v-5h5" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Built for everyone",
    description:
      "Whether you're completely new to software or already a developer, SajiloBuild is designed around the way you work.",
    label: "Everyone",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0 1 12 0" />
        <circle cx="17" cy="9" r="2" />
        <path d="M16 15a5 5 0 0 1 5 5" />
      </svg>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
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

function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative overflow-hidden border-t border-slate-100 bg-white"
    >
      {/* =====================================================
          BACKGROUND DETAILS
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-[5%] top-24 h-36 w-36 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute bottom-20 right-[5%] h-40 w-40 rounded-full bg-slate-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
            <span
              className="h-1.5 w-1.5 rounded-full bg-blue-600"
              aria-hidden="true"
            />

            Why SajiloBuild
          </div>

          <h2
            id="features-heading"
            className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            Software creation,
            <br className="hidden sm:block" />
            <span className="text-blue-600">
              {" "}
              without the complexity.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Focus on what you want to create while SajiloBuild helps
            handle the technical details behind your idea.
          </p>
        </div>

        {/* =====================================================
            FEATURE GRID
        ====================================================== */}

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:mt-16 lg:gap-6">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_35px_-28px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_45px_-25px_rgba(15,23,42,0.25)] sm:p-7"
            >
              {/* =================================================
                  TOP ROW
              ================================================== */}

              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-300 group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-600">
                  {feature.icon}
                </div>

                <span className="font-mono text-xs font-semibold tabular-nums text-slate-300 transition-colors duration-300 group-hover:text-blue-300">
                  {feature.number}
                </span>
              </div>

              {/* =================================================
                  LABEL
              ================================================== */}

              <div className="mt-7">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue-600">
                  {feature.label}
                </span>

                <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                  {feature.title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>
              </div>

              {/* =================================================
                  BOTTOM ACTION
              ================================================== */}

              <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 transition-colors duration-300 group-hover:text-blue-600">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors duration-300 group-hover:bg-blue-50 group-hover:text-blue-600">
                    <CheckIcon />
                  </span>

                  Designed for your workflow
                </span>

                <span className="text-slate-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-600">
                  <ArrowIcon />
                </span>
              </div>

              {/* =================================================
                  ACTIVE BOTTOM LINE
              ================================================== */}

              <span
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        {/* =====================================================
            FEATURE FLOW
        ====================================================== */}

        <div className="mx-auto mt-14 hidden max-w-4xl items-center justify-center gap-3 md:flex">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className="flex items-center"
            >
              <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-400">
                <span className="font-mono text-[10px] text-slate-300">
                  {feature.number}
                </span>

                {feature.label}
              </span>

              {index < features.length - 1 && (
                <span
                  className="mx-4 h-px w-8 bg-slate-200 lg:w-12"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* =====================================================
            BOTTOM VALUE STATEMENT
        ====================================================== */}

        <div className="mx-auto mt-14 max-w-4xl border-t border-slate-200 pt-10 text-center sm:mt-16">
          <p className="text-xl font-semibold tracking-tight text-slate-950 sm:text-2xl lg:text-3xl">
            Your idea should be the starting point —
            <span className="text-blue-600">
              {" "}
              not your coding experience.
            </span>
          </p>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            SajiloBuild is being designed to make software creation
            easier to approach, while still giving developers room
            to build, customize, and take control.
          </p>

          {/* Small supporting points */}

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <CheckIcon />
              </span>
              Start with an idea
            </span>

            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <CheckIcon />
              </span>
              Build through conversation
            </span>

            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                <CheckIcon />
              </span>
              Keep improving
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;