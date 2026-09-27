import { useEffect, useState } from "react";
import Logo from "../brand/logo";

const navigation = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Templates", href: "#templates" },
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

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-5 items-center justify-center">
      <span
        className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-transform duration-200 ${
          open ? "rotate-45" : "-translate-y-[6px]"
        }`}
      />

      <span
        className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-opacity duration-150 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />

      <span
        className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-transform duration-200 ${
          open ? "-rotate-45" : "translate-y-[6px]"
        }`}
      />
    </span>
  );
}

function CloseIcon() {
  return (
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[100] w-full border-b transition-all duration-300 ${
          isScrolled
            ? "border-slate-200 bg-white/95 shadow-[0_4px_20px_-12px_rgba(15,23,42,0.18)] backdrop-blur-xl"
            : "border-slate-100 bg-white"
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
          <a
            href="#top"
            aria-label="SajiloBuild home"
            onClick={closeMenu}
            className="rounded-md outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
          >
            <Logo />
          </a>

          {/* Desktop navigation */}
          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3.5 py-2 text-[13px] font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop actions */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#login"
              className="rounded-lg px-3.5 py-2.5 text-[13px] font-medium text-slate-600 transition-colors duration-200 hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Log in
            </a>

            <a
              href="#get-started"
              className="group inline-flex min-h-10 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:bg-blue-700 hover:shadow-md active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Get started

              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </a>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 md:hidden"
          >
            <MenuIcon open={isMenuOpen} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-slate-950/20 backdrop-blur-[2px] transition-opacity duration-200 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      {/* Mobile drawer */}
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-[110] flex h-dvh w-[min(90vw,380px)] flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-slate-100 px-4">
          <Logo />

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto px-4 py-6">
          <nav aria-label="Mobile navigation">
            <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Explore
            </p>

            <div className="mt-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="group flex min-h-12 items-center justify-between rounded-xl px-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  {item.label}

                  <span className="text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-blue-600">
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </nav>

          <div className="my-7 h-px bg-slate-100" />

          <div>
            <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Account
            </p>

            <div className="mt-3 space-y-2">
              <a
                href="#login"
                onClick={closeMenu}
                className="flex min-h-11 items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                Log in
              </a>

              <a
                href="#get-started"
                onClick={closeMenu}
                className="flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Get started
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="mt-auto pt-8">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-600" />

                <span className="text-xs font-semibold text-slate-700">
                  SajiloBuild
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Build software by describing what you want to create.
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Navbar;