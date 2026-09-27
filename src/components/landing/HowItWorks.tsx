import { useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Describe",
    description:
      "Tell SajiloBuild what you want to create using normal language. Start with your idea, not technical requirements.",
    label: "Your idea",
  },
  {
    number: "02",
    title: "Build",
    description:
      "AI turns your idea into a plan, designs the experience, and generates the application around your requirements.",
    label: "AI builds",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "Preview your project, refine it through conversation, and publish your application when it is ready.",
    label: "Your product",
  },
];

function DescribeIcon() {
  return (
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
  );
}

function BuildIcon() {
  return (
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
  );
}

function LaunchIcon() {
  return (
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
      <path d="M14 5h5v5" />
      <path d="M10 14 19 5" />
      <path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="19"
      height="19"
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

function StepIcon({ index }: { index: number }) {
  if (index === 0) {
    return <DescribeIcon />;
  }

  if (index === 1) {
    return <BuildIcon />;
  }

  return <LaunchIcon />;
}

function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % steps.length);
    }, 2600);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative overflow-hidden border-t border-slate-100 bg-slate-50"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-[8%] top-20 h-32 w-32 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute bottom-20 right-[8%] h-40 w-40 rounded-full bg-slate-200/60 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-sm">
            <span
              className="relative flex h-1.5 w-1.5"
              aria-hidden="true"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />

              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-600" />
            </span>

            How it works
          </div>

          <h2
            id="how-it-works-heading"
            className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            From idea to
            <span className="text-blue-600"> application.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            You describe what you want to build. SajiloBuild
            understands the idea, generates the software, and helps
            you refine it.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mx-auto mt-14 max-w-6xl lg:mt-20">
          {/* Desktop connector */}
          <div
            className="absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-slate-200 lg:block"
            aria-hidden="true"
          >
            <div
              className="h-full bg-blue-600 transition-all duration-1000 ease-in-out"
              style={{
                width:
                  activeStep === 0
                    ? "0%"
                    : activeStep === 1
                      ? "50%"
                      : "100%",
              }}
            />
          </div>

          {/* Desktop progress point */}
          <div
            className="absolute top-[25px] hidden h-3 w-3 rounded-full bg-blue-600 shadow-[0_0_0_5px_rgba(37,99,235,0.10)] transition-all duration-1000 ease-in-out lg:block"
            style={{
              left:
                activeStep === 0
                  ? "16.66%"
                  : activeStep === 1
                    ? "50%"
                    : "83.33%",
              transform: "translateX(-50%)",
            }}
            aria-hidden="true"
          />

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-10">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isCompleted = activeStep > index;

              return (
                <article
                  key={step.number}
                  className={`group relative text-center transition-all duration-700 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "opacity-80"
                  }`}
                >
                  {/* Mobile connector */}
                  {index < steps.length - 1 && (
                    <div
                      className="absolute left-1/2 top-[68px] h-[calc(100%+40px)] w-px -translate-x-1/2 bg-slate-200 lg:hidden"
                      aria-hidden="true"
                    >
                      <div
                        className={`h-full w-full bg-blue-600 transition-all duration-700 ${
                          activeStep > index
                            ? "scale-y-100"
                            : "scale-y-0"
                        } origin-top`}
                      />
                    </div>
                  )}

                  {/* Step number */}
                  <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center">
                    {/* Active pulse ring */}
                    <span
                      className={`absolute inset-0 rounded-full border transition-all duration-500 ${
                        isActive
                          ? "scale-110 border-blue-200"
                          : "scale-100 border-transparent"
                      }`}
                    />

                    {/* Number circle */}
                    <div
                      className={`relative flex h-14 w-14 items-center justify-center rounded-full border text-sm font-bold transition-all duration-500 ${
                        isActive
                          ? "border-blue-600 bg-blue-600 text-white shadow-[0_8px_25px_-10px_rgba(37,99,235,0.8)]"
                          : isCompleted
                            ? "border-blue-200 bg-blue-50 text-blue-600"
                            : "border-slate-200 bg-white text-slate-500 shadow-sm"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckIcon />
                      ) : (
                        step.number
                      )}
                    </div>
                  </div>

                  {/* Icon */}
                  <div
                    className={`mx-auto mt-7 flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-500 ${
                      isActive
                        ? "border-blue-100 bg-blue-50 text-blue-600"
                        : isCompleted
                          ? "border-blue-100 bg-white text-blue-500"
                          : "border-slate-200 bg-white text-slate-500"
                    }`}
                  >
                    <StepIcon index={index} />
                  </div>

                  {/* Content */}
                  <div className="mt-5">
                    <span
                      className={`text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors duration-300 ${
                        isActive
                          ? "text-blue-600"
                          : "text-slate-400"
                      }`}
                    >
                      {step.label}
                    </span>

                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-slate-500">
                      {step.description}
                    </p>
                  </div>

                  {/* Active indicator */}
                  <div
                    className={`mx-auto mt-6 h-1 rounded-full bg-blue-600 transition-all duration-500 ${
                      isActive
                        ? "w-10 opacity-100"
                        : "w-0 opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>
        </div>

        {/* Step controls */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {steps.map((step, index) => (
            <button
              key={step.number}
              type="button"
              onClick={() => setActiveStep(index)}
              aria-label={`Show step ${step.number}: ${step.title}`}
              aria-current={
                activeStep === index ? "step" : undefined
              }
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4 ${
                activeStep === index
                  ? "w-8 bg-blue-600"
                  : "w-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* Bottom information */}
        <div className="mx-auto mt-14 max-w-3xl border-t border-slate-200 pt-8 text-center sm:mt-16">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
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

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-slate-500">
            Start simple. Add more detail as your project grows.
            SajiloBuild is designed to help you move from an idea to
            a working product without needing to understand every
            technical step first.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;