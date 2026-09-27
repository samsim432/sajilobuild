import { useRef, useState } from "react";

const websiteTypes = [
  "Business websites",
  "Portfolios",
  "Landing pages",
  "Restaurants",
  "Hotels",
  "Blogs",
  "Agency websites",
  "Personal websites",
  "Event websites",
  "Documentation",
];

const applicationTypes = [
  "SaaS applications",
  "Dashboards",
  "E-commerce",
  "Booking systems",
  "CRM",
  "Marketplaces",
  "Admin panels",
  "Management systems",
  "Customer portals",
  "Internal tools",
];

interface CategoryListProps {
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
  accent: "blue" | "slate";
}

function ArrowIcon({
  direction = "right",
}: {
  direction?: "left" | "right";
}) {
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
      className={direction === "left" ? "rotate-180" : ""}
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function CategoryList({
  title,
  description,
  items,
  icon,
  accent,
}: CategoryListProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const maxScroll =
      container.scrollWidth - container.clientWidth;

    setCanScrollLeft(container.scrollLeft > 5);
    setCanScrollRight(container.scrollLeft < maxScroll - 5);
  };

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;

    if (!container) {
      return;
    }

    const amount = container.clientWidth * 0.72;

    container.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });

    window.setTimeout(updateScrollState, 350);
  };

  const isBlue = accent === "blue";

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_12px_40px_-30px_rgba(15,23,42,0.35)] transition-shadow duration-300 hover:shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)]">
      {/* =====================================================
          CARD HEADER
      ====================================================== */}

      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-5">
          <div className="flex items-start gap-4">
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${
                isBlue
                  ? "border-blue-100 bg-blue-50 text-blue-600"
                  : "border-slate-200 bg-slate-50 text-slate-700"
              }`}
            >
              {icon}
            </div>

            <div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                {title}
              </h3>

              <p className="mt-1.5 max-w-xl text-sm leading-6 text-slate-500">
                {description}
              </p>
            </div>
          </div>

          <span className="hidden shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-500 sm:inline-flex">
            {items.length} types
          </span>
        </div>
      </div>

      {/* =====================================================
          SLIDER
      ====================================================== */}

      <div className="relative border-t border-slate-100">
        {/* Left fade */}

        <div
          className={`pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-white transition-opacity duration-200 ${
            canScrollLeft ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />

        {/* Right fade */}

        <div
          className={`pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-white transition-opacity duration-200 ${
            canScrollRight ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />

        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="scrollbar-none flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 py-6 sm:px-8"
        >
          {items.map((item, index) => (
            <div
              key={item}
              className="group/item flex w-[220px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow-md sm:w-[240px]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                      isBlue
                        ? "bg-blue-50 text-blue-600"
                        : "bg-white text-slate-600"
                    }`}
                  >
                    <CheckIcon />
                  </span>

                  <span className="font-mono text-[10px] font-medium tabular-nums text-slate-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h4 className="mt-5 text-sm font-semibold text-slate-900">
                  {item}
                </h4>
              </div>

              <div className="mt-7 flex items-center gap-1.5 text-xs font-medium text-slate-400 transition-colors duration-200 group-hover/item:text-blue-600">
                Build with AI
                <ArrowIcon />
              </div>
            </div>
          ))}
        </div>

        {/* =====================================================
            SLIDER CONTROLS
        ====================================================== */}

        <div className="flex items-center justify-between border-t border-slate-100 px-6 py-3 sm:px-8">
          <p className="text-[11px] font-medium text-slate-400">
            Swipe or scroll to explore
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label={`Previous ${title.toLowerCase()} categories`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ArrowIcon direction="left" />
            </button>

            <button
              type="button"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label={`Next ${title.toLowerCase()} categories`}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function BuildCategories() {
  return (
    <section
      id="build"
      aria-labelledby="build-heading"
      className="relative overflow-hidden border-t border-slate-100 bg-white"
    >
      {/* =====================================================
          BACKGROUND DETAILS
      ====================================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute left-[10%] top-24 h-32 w-32 rounded-full bg-blue-100/40 blur-3xl" />

        <div className="absolute bottom-24 right-[8%] h-40 w-40 rounded-full bg-slate-100 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {/* =====================================================
            SECTION HEADING
        ====================================================== */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600">
            <span
              className="h-1.5 w-1.5 rounded-full bg-blue-600"
              aria-hidden="true"
            />

            What can you build?
          </div>

          <h2
            id="build-heading"
            className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
          >
            From simple websites to
            <span className="text-blue-600">
              {" "}
              full applications.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Start with almost any idea. Describe what you need in
            plain language and SajiloBuild turns your requirements
            into a software project.
          </p>
        </div>

        {/* =====================================================
            CATEGORY SLIDERS
        ====================================================== */}

        <div className="mx-auto mt-12 max-w-6xl space-y-5 lg:mt-14">
          <CategoryList
            title="Websites"
            description="Create polished web experiences for yourself, your business, or your next idea."
            items={websiteTypes}
            accent="blue"
            icon={
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="16"
                  rx="2"
                />
                <path d="M3 9h18" />
                <path d="M7 6.5h.01" />
                <path d="M10 6.5h.01" />
              </svg>
            }
          />

          <CategoryList
            title="Applications"
            description="Turn more ambitious ideas into applications designed around your requirements and workflows."
            items={applicationTypes}
            accent="slate"
            icon={
              <svg
                width="23"
                height="23"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="2"
                />
                <path d="M8 8h8" />
                <path d="M8 12h8" />
                <path d="M8 16h5" />
              </svg>
            }
          />
        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ====================================================== */}

        <div className="mx-auto mt-12 max-w-2xl text-center sm:mt-14">
          <div className="inline-flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 sm:flex-row">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
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
                <path d="M12 3v18" />
                <path d="M3 12h18" />
              </svg>
            </span>

            <p className="text-sm text-slate-600">
              Have something different in mind?{" "}
              <a
                href="#prompt-builder"
                className="font-semibold text-slate-950 transition-colors hover:text-blue-600"
              >
                Describe your idea instead.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BuildCategories;