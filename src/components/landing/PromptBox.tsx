import { useState } from "react";

const examples = [
  {
    label: "Store",
    text: "Build an online clothing store with products, cart, and checkout.",
  },
  {
    label: "Restaurant",
    text: "Create a modern restaurant website with an online menu.",
  },
  {
    label: "Portfolio",
    text: "Build my developer portfolio with projects and contact information.",
  },
  {
    label: "Booking",
    text: "Create a hotel booking application with rooms and reservations.",
  },
];

function PromptBox() {
  const [prompt, setPrompt] = useState("");
  const [isBuilding, setIsBuilding] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!prompt.trim() || isBuilding) {
      return;
    }

    setIsBuilding(true);

    window.setTimeout(() => {
      setIsBuilding(false);
    }, 1600);
  };

  const useExample = (example: string) => {
    setPrompt(example);
  };

  const clearPrompt = () => {
    setPrompt("");
  };

  return (
    <div className="relative">
      {/* Main prompt container */}
      <div
        className={`relative rounded-2xl border bg-white p-2 transition-all duration-300 sm:p-3 ${
          isFocused
            ? "border-blue-300 shadow-[0_25px_80px_-25px_rgba(37,99,235,0.28)]"
            : "border-slate-200 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)]"
        }`}
      >
        {/* Active border effect */}
        <div
          className={`pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-blue-100/30 blur-xl transition-opacity duration-300 ${
            isFocused ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        />

        <form onSubmit={handleSubmit}>
          {/* Prompt area */}
          <div className="relative">
            <label
              htmlFor="build-prompt"
              className="sr-only"
            >
              Describe what you want to build
            </label>

            <textarea
              id="build-prompt"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Describe what you want to build..."
              rows={4}
              maxLength={2000}
              className="min-h-36 w-full resize-none border-0 bg-transparent px-3 py-3 pr-10 text-base leading-7 text-slate-950 outline-none placeholder:text-slate-400 sm:min-h-40 sm:px-4 sm:py-4 sm:text-[15px]"
            />

            {/* Clear button */}
            {prompt.length > 0 && (
              <button
                type="button"
                onClick={clearPrompt}
                aria-label="Clear prompt"
                className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 sm:right-3 sm:top-3"
              >
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
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Bottom toolbar */}
          <div className="flex flex-col gap-3 border-t border-slate-100 px-2 pb-2 pt-3 sm:flex-row sm:items-center sm:justify-between sm:px-3">
            {/* Left information */}
            <div className="flex min-w-0 items-center gap-2">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-500">
                <svg
                  width="14"
                  height="14"
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

              <div className="min-w-0">
                <p className="truncate text-xs font-medium text-slate-600">
                  Describe your idea in plain language
                </p>

                <p className="mt-0.5 hidden text-[11px] text-slate-400 sm:block">
                  The more detail you provide, the better.
                </p>
              </div>
            </div>

            {/* Right controls */}
            <div className="flex items-center justify-between gap-3 sm:justify-end">
              {/* Character count */}
              <span className="text-[11px] tabular-nums text-slate-400">
                {prompt.length}/2000
              </span>

              {/* Build button */}
              <button
                type="submit"
                disabled={!prompt.trim() || isBuilding}
                className="group inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm outline-none transition-all duration-200 hover:bg-blue-700 hover:shadow-md disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400 disabled:shadow-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 sm:flex-none sm:px-5"
              >
                {isBuilding ? (
                  <>
                    <span
                      className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                      aria-hidden="true"
                    />

                    <span>Building...</span>
                  </>
                ) : (
                  <>
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

                    <span>Build with SajiloBuild</span>

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
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Example prompts */}
      <div className="mt-6">
        <div className="mb-3 flex items-center justify-center gap-2">
          <span className="h-px w-8 bg-slate-200" />

          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
            Or try an example
          </p>

          <span className="h-px w-8 bg-slate-200" />
        </div>

        <div className="flex flex-wrap justify-center gap-2">
          {examples.map((example) => (
            <button
              key={example.label}
              type="button"
              onClick={() => useExample(example.text)}
              title={example.text}
              className="group inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-xs font-medium text-slate-600 shadow-sm outline-none transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:translate-y-0"
            >
              <span className="flex h-4 w-4 items-center justify-center rounded bg-slate-100 text-[9px] font-bold text-slate-500 transition-colors group-hover:bg-blue-100 group-hover:text-blue-600">
                {example.label.charAt(0)}
              </span>

              {example.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PromptBox;