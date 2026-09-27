import { useEffect, useState } from "react";
import PromptBox from "./PromptBox";

type Project = {
  name: string;
  category: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    name: "The Garden Table",
    category: "Restaurant",
    description: "Restaurant website with reservations and online ordering.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "NOVA Store",
    category: "E-commerce",
    description: "Modern online store with products, cart and checkout.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "Creative Portfolio",
    category: "Portfolio",
    description: "A clean portfolio for designers, developers and creators.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "FlowBoard",
    category: "SaaS",
    description: "Project management dashboard for modern teams.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "StayNest",
    category: "Booking",
    description: "Property booking platform with search and reservations.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
  },
  {
    name: "LocalPro",
    category: "Business",
    description: "Business platform for managing customers and services.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85",
  },
];

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

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
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
      {direction === "left" ? (
        <path d="m15 18-6-6 6-6" />
      ) : (
        <path d="m9 18 6-6-6-6" />
      )}
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

function SparkIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m12 3 1.5 6.5L20 12l-6.5 1.5L12 20l-1.5-6.5L4 12l6.5-2.5L12 3Z" />
    </svg>
  );
}

function HeroImageShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const activeProject = projects[activeIndex];

  useEffect(() => {
    if (paused) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused]);

  function previous() {
    setActiveIndex(
      (current) => (current - 1 + projects.length) % projects.length,
    );
  }

  function next() {
    setActiveIndex((current) => (current + 1) % projects.length);
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main image card */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_30px_80px_-35px_rgba(15,23,42,0.3)]">
        {/* Browser top */}
        <div className="flex h-11 items-center justify-between border-b border-slate-200 bg-slate-50 px-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>

          <div className="hidden h-6 w-52 items-center justify-center rounded-md border border-slate-200 bg-white text-[9px] text-slate-400 sm:flex">
            app.sajilobuild.com
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[9px] text-slate-500 sm:block">
              Preview
            </span>

            <span className="rounded-md bg-blue-600 px-2.5 py-1 text-[9px] font-semibold text-white">
              Publish
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <img
            key={activeProject.image}
            src={activeProject.image}
            alt={`${activeProject.name} ${activeProject.category} project`}
            className="h-full w-full object-cover transition-opacity duration-500"
          />

          {/* Image overlay */}
          <div className="absolute inset-0 bg-slate-950/25" />

          {/* Project information */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
            <span className="inline-flex rounded-full border border-white/30 bg-white/15 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
              {activeProject.category}
            </span>

            <h2 className="mt-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
              {activeProject.name}
            </h2>

            <p className="mt-1 max-w-sm text-[10px] leading-4 text-white/85 sm:text-xs">
              {activeProject.description}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <span className="rounded-md bg-white px-3 py-1.5 text-[9px] font-semibold text-slate-900">
                Explore
              </span>

              <span className="rounded-md border border-white/30 bg-white/10 px-3 py-1.5 text-[9px] font-medium text-white backdrop-blur-sm">
                Generated by AI
              </span>
            </div>
          </div>

          {/* AI badge */}
          <div className="absolute right-4 top-4 flex items-center gap-2 rounded-lg border border-white/20 bg-slate-950/60 px-3 py-2 backdrop-blur-md">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-blue-600 text-white">
              <SparkIcon />
            </span>

            <span className="text-[9px] font-semibold text-white">
              Built with SajiloBuild
            </span>
          </div>
        </div>

        {/* Bottom project bar */}
        <div className="flex items-center justify-between border-t border-slate-200 bg-white px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

            <span className="text-[9px] font-medium text-slate-500">
              Project generated successfully
            </span>
          </div>

          <span className="text-[9px] text-slate-400">
            {activeIndex + 1} / {projects.length}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {projects.map((project, index) => (
            <button
              key={project.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${project.category} project`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-7 bg-blue-600"
                  : "w-1.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <span className="mr-1 text-[10px] font-medium text-slate-400">
            {activeProject.category}
          </span>

          <button
            type="button"
            onClick={previous}
            aria-label="Previous project"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
          >
            <ChevronIcon direction="left" />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-slate-100 bg-white"
    >
      {/* Subtle background */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-[-220px] h-[520px] w-[800px] -translate-x-1/2 rounded-full bg-blue-50/70 blur-3xl" />

        <div className="absolute left-1/2 top-24 h-px w-20 -translate-x-1/2 bg-blue-200" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
        {/* Hero content */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* LEFT: Text */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="hero-fade-in">
              <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-white">
                  <SparkIcon />
                </span>

                AI software builder
              </span>
            </div>

            {/* Main heading */}
            <h1
              id="hero-heading"
              className="mt-6 text-balance text-4xl font-bold tracking-[-0.055em] text-slate-950 sm:text-5xl md:text-6xl lg:mt-7 lg:text-6xl xl:text-[70px] xl:leading-[1.02]"
            >
              Turn your idea
              <br />
              into{" "}
              <span className="text-blue-600">
                software.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:mx-0">
              Describe what you want to build in plain language. SajiloBuild
              turns your idea into a real website or application you can
              customize, test, and grow.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <a
                href="#prompt-builder"
                className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:w-auto"
              >
                Start building

                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowIcon />
                </span>
              </a>

              <a
                href="#how-it-works"
                className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 sm:w-auto"
              >
                See how it works

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
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </a>
            </div>

            {/* Small trust points */}
            <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-400 lg:justify-start">
              <span className="inline-flex items-center gap-1.5">
                <CheckIcon />
                No coding required
              </span>

              <span className="inline-flex items-center gap-1.5">
                <CheckIcon />
                Start with an idea
              </span>
            </div>
          </div>

          {/* RIGHT: Image showcase */}
          <HeroImageShowcase />
        </div>

        {/* Prompt builder */}
        <div
          id="prompt-builder"
          className="mx-auto mt-16 max-w-4xl scroll-mt-24 sm:mt-20 lg:mt-24"
        >
          <div className="mb-4 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Start building
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Tell SajiloBuild what you want to create.
            </p>
          </div>

          <PromptBox />

          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5">
              <CheckIcon />
              No coding experience required
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />

            <span>Start with an idea</span>
          </div>
        </div>

        {/* Supported project types */}
        <div className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs font-medium text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <CheckIcon />
            Websites
          </span>

          <span className="inline-flex items-center gap-1.5">
            <CheckIcon />
            E-commerce
          </span>

          <span className="inline-flex items-center gap-1.5">
            <CheckIcon />
            SaaS
          </span>

          <span className="inline-flex items-center gap-1.5">
            <CheckIcon />
            Booking apps
          </span>

          <span className="inline-flex items-center gap-1.5">
            <CheckIcon />
            Business tools
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;