import Logo from "../brand/logo";
import UserMenu from "./UserMenu";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

function DashboardHeader({
  onMenuClick,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between border-b border-slate-200/80 bg-white/95 px-4 backdrop-blur-md sm:px-6">
      {/* =====================================================
          LEFT
      ====================================================== */}

      <div className="flex min-w-0 items-center gap-2">
        {/* Mobile menu */}

        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open navigation"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 lg:hidden"
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 6h16" />
            <path d="M4 12h16" />
            <path d="M4 18h16" />
          </svg>
        </button>

        {/* Mobile logo */}

        <div className="lg:hidden">
          <Logo
            showText
            animated
            className="scale-[0.88] origin-left"
          />
        </div>

        {/* Desktop context */}

        <div className="hidden lg:block">
          <p className="text-sm font-semibold text-slate-900">
            Workspace
          </p>

          <p className="text-[11px] text-slate-400">
            Build something great
          </p>
        </div>
      </div>

      {/* =====================================================
          RIGHT
      ====================================================== */}

      <div className="flex items-center gap-2">
        {/* Keyboard shortcut hint */}

        <div className="hidden items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] text-slate-400 xl:flex">
          <span>⌘</span>
          <span>B</span>
          <span className="ml-0.5">
            Toggle sidebar
          </span>
        </div>

        <UserMenu />
      </div>
    </header>
  );
}

export default DashboardHeader;