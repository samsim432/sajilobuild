import {
  useEffect,
  useState,
  type FormEvent,
} from "react";
import { useNavigate } from "react-router-dom";

const examples = [
  "Build a modern restaurant website with an online menu.",
  "Create a developer portfolio with projects and contact information.",
  "Build a SaaS dashboard for managing customers.",
  "Create an online store with products, cart, and checkout.",
];

interface PromptBoxProps {
  initialPrompt?: string;
  onPromptChange?: (prompt: string) => void;
}

function PromptBox({
  initialPrompt = "",
  onPromptChange,
}: PromptBoxProps) {
  const navigate = useNavigate();

  const [prompt, setPrompt] = useState(initialPrompt);
  const [isBuilding, setIsBuilding] = useState(false);

  /*
   * Keep PromptBox synchronized when the parent
   * changes the selected idea.
   */
  useEffect(() => {
    setPrompt(initialPrompt);
  }, [initialPrompt]);

  const updatePrompt = (value: string) => {
    setPrompt(value);
    onPromptChange?.(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedPrompt = prompt.trim();

    if (!trimmedPrompt || isBuilding) {
      return;
    }

    setIsBuilding(true);

    window.setTimeout(() => {
      navigate("/new", {
        state: {
          prompt: trimmedPrompt,
        },
      });
    }, 800);
  };

  const handleExampleClick = (example: string) => {
    updatePrompt(example);
  };

  return (
    <div className="w-full">
      {/* =====================================================
          MAIN PROMPT CARD
      ====================================================== */}

      <div
        className={[
          "rounded-2xl border bg-white p-2 transition-all duration-200 sm:p-3",
          "shadow-[0_8px_30px_rgba(15,23,42,0.04)]",
          prompt.trim()
            ? "border-slate-300"
            : "border-slate-200",
          isBuilding
            ? "opacity-80"
            : "hover:border-slate-300",
        ].join(" ")}
      >
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="dashboard-build-prompt"
            className="sr-only"
          >
            Describe what you want to build
          </label>

          {/* =================================================
              TEXTAREA
          ================================================== */}

          <textarea
            id="dashboard-build-prompt"
            value={prompt}
            onChange={(event) =>
              updatePrompt(event.target.value)
            }
            placeholder="Describe what you want to build..."
            rows={6}
            disabled={isBuilding}
            className="min-h-36 w-full resize-none border-0 bg-transparent px-3 py-3 text-[15px] leading-7 text-slate-950 outline-none placeholder:text-slate-400 disabled:cursor-not-allowed disabled:opacity-60 sm:min-h-40 sm:px-4 sm:py-4 sm:text-base"
          />

          {/* =================================================
              FOOTER
          ================================================== */}

          <div className="flex flex-col gap-3 border-t border-slate-100 px-2 pb-2 pt-3 sm:flex-row sm:items-center sm:justify-between sm:px-3">
            <div className="flex min-w-0 items-center gap-2">
              {/* Small AI indicator */}

              <span
                className={[
                  "h-1.5 w-1.5 shrink-0 rounded-full transition-colors",
                  prompt.trim()
                    ? "bg-blue-500"
                    : "bg-slate-300",
                ].join(" ")}
              />

              <p className="truncate text-xs text-slate-400">
                Describe your idea in plain language.
              </p>
            </div>

            <button
              type="submit"
              disabled={!prompt.trim() || isBuilding}
              className="sajilo-button inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400 sm:w-auto"
            >
              {isBuilding ? (
                <>
                  <span
                    className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                    aria-hidden="true"
                  />

                  Starting...
                </>
              ) : (
                <>
                  Start building

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
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* =====================================================
          EXAMPLES
      ====================================================== */}

      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">
            Try an example
          </p>

          <span className="hidden text-xs text-slate-400 sm:block">
            Or write your own
          </span>
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {examples.map((example) => {
            const isSelected = prompt === example;

            return (
              <button
                key={example}
                type="button"
                onClick={() => handleExampleClick(example)}
                disabled={isBuilding}
                className={[
                  "group flex min-h-[62px] items-center gap-3 rounded-xl border p-3 text-left text-sm leading-5 transition-all duration-200",
                  "disabled:cursor-not-allowed disabled:opacity-60",
                  isSelected
                    ? "border-blue-200 bg-blue-50/60 text-blue-900"
                    : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950",
                ].join(" ")}
              >
                {/* Example icon */}

                <span
                  className={[
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-md transition-colors",
                    isSelected
                      ? "bg-blue-100 text-blue-600"
                      : "bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600",
                  ].join(" ")}
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
                </span>

                <span className="min-w-0 flex-1">
                  {example}
                </span>

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
                  className="shrink-0 text-slate-300 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-blue-500"
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default PromptBox;