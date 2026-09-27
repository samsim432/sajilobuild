function ArrowIcon() {
  return (
    <svg
      width="17"
      height="17"
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

function SparkIcon() {
  return (
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
    >
      <path d="m12 3-1.5 6.5L4 12l6.5 1.5L12 20l1.5-6.5L20 12l-6.5-2.5L12 3Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
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

function FinalCTA() {
  return (
    <section
      id="get-started"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden border-t border-slate-800 bg-slate-950"
    >
      {/* =====================================================
          BACKGROUND GRID
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* =====================================================
          BACKGROUND LIGHT
      ====================================================== */}

      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px]"
        aria-hidden="true"
      />

      {/* =====================================================
          FLOATING BUILD ELEMENTS
      ====================================================== */}

      <div
        className="hero-float absolute left-[7%] top-24 hidden h-12 w-12 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 font-mono text-xs font-semibold text-slate-600 shadow-xl sm:flex"
        aria-hidden="true"
      >
        {"</>"}
      </div>

      <div
        className="hero-float absolute right-[8%] top-32 hidden h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 font-mono text-xs font-semibold text-slate-600 shadow-xl sm:flex"
        aria-hidden="true"
      >
        {"{}"}
      </div>

      <div
        className="hero-float absolute bottom-24 left-[12%] hidden h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 font-mono text-xs font-semibold text-slate-600 shadow-xl lg:flex"
        aria-hidden="true"
      >
        AI
      </div>

      <div
        className="hero-float absolute bottom-20 right-[14%] hidden h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 font-mono text-xs font-semibold text-slate-600 shadow-xl lg:flex"
        aria-hidden="true"
      >
        +
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-4xl">
          {/* =================================================
              TOP BADGE
          ================================================== */}

          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3.5 py-1.5 text-xs font-semibold text-blue-400">
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-600/10">
                <SparkIcon />
              </span>

              Start building with AI
            </div>
          </div>

          {/* =================================================
              HEADING
          ================================================== */}

          <div className="mx-auto mt-7 max-w-3xl text-center">
            <h2
              id="final-cta-heading"
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Have an idea?
              <br />
              <span className="text-blue-400">
                Build it with SajiloBuild.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Describe what you want to create in your own words.
              Start with an idea and let SajiloBuild help turn it
              into software.
            </p>
          </div>

          {/* =================================================
              CTA BUTTONS
          ================================================== */}

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#prompt-builder"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_-12px_rgba(255,255,255,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-[0_14px_35px_-12px_rgba(255,255,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
            >
              Start Building

              <span className="transition-transform duration-200 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </a>

            <a
              href="#how-it-works"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-700 bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-600 hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto"
            >
              See How It Works
            </a>
          </div>

          {/* =================================================
              VALUE POINTS
          ================================================== */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-blue-400">
                <CheckIcon />
              </span>
              Start with plain language
            </span>

            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-blue-400">
                <CheckIcon />
              </span>
              No technical details required
            </span>

            <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-900 text-blue-400">
                <CheckIcon />
              </span>
              Keep refining your idea
            </span>
          </div>

          {/* =================================================
              BUILD VISUAL
          ================================================== */}

          <div className="mx-auto mt-16 max-w-3xl sm:mt-20">
            <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.8)]">
              {/* Window header */}

              <div className="flex h-11 items-center justify-between border-b border-slate-800 px-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
                </div>

                <span className="font-mono text-[10px] text-slate-600">
                  sajilobuild.ai
                </span>

                <span className="h-5 w-12 rounded border border-slate-800" />
              </div>

              {/* Build interface */}

              <div className="grid min-h-[220px] md:grid-cols-[0.85fr_1.15fr]">
                {/* Prompt side */}

                <div className="border-b border-slate-800 p-5 md:border-b-0 md:border-r sm:p-6">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400">
                      <SparkIcon />
                    </span>

                    <span className="text-xs font-semibold text-slate-300">
                      Your idea
                    </span>
                  </div>

                  <div className="mt-5 space-y-2">
                    <div className="h-2 w-[88%] rounded-full bg-slate-800" />
                    <div className="h-2 w-[72%] rounded-full bg-slate-800" />
                    <div className="h-2 w-[82%] rounded-full bg-slate-800" />
                    <div className="h-2 w-[55%] rounded-full bg-slate-800" />
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-800 px-3 py-2">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500" />

                    <span className="text-[10px] font-medium text-slate-500">
                      AI understanding requirements
                    </span>
                  </div>
                </div>

                {/* Generated side */}

                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-300">
                      Generated project
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-[10px] font-medium text-blue-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      Building
                    </span>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-2">
                    <div className="h-20 rounded-lg border border-slate-800 bg-slate-950" />
                    <div className="h-20 rounded-lg border border-slate-800 bg-slate-950" />
                    <div className="h-20 rounded-lg border border-slate-800 bg-slate-950" />
                  </div>

                  <div className="mt-3 h-2 w-[75%] rounded-full bg-slate-800" />
                  <div className="mt-2 h-2 w-[48%] rounded-full bg-slate-800" />

                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-[10px] text-slate-600">
                      Preview
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 px-2.5 py-1.5 text-[10px] font-medium text-slate-500">
                      Open project
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              FINAL MESSAGE
          ================================================== */}

          <p className="mt-10 text-center text-xs leading-5 text-slate-600">
            Your next product can start with a sentence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;