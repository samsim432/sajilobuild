import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "../brand/logo";

const navigation = [
  {
    label: "Features",
    href: "/#features",
    type: "anchor",
  },
  {
    label: "How it works",
    href: "/#how-it-works",
    type: "anchor",
  },
  {
    label: "Templates",
    href: "/templates",
    type: "route",
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

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-5 items-center justify-center">
      <span
        className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
          open ? "rotate-45" : "-translate-y-[6px]"
        }`}
      />

      <span
        className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-all duration-200 ${
          open
            ? "scale-0 opacity-0"
            : "scale-100 opacity-100"
        }`}
      />

      <span
        className={`absolute h-[1.5px] w-5 rounded-full bg-current transition-all duration-300 ${
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
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  const isLoginPage =
    location.pathname === "/login";

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  /*
   * Detect when the user scrolls down.
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );
    };
  }, []);

  /*
   * Close mobile menu when route changes.
   */
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  /*
   * Close mobile menu with Escape key.
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

  /*
   * Prevent page scrolling while mobile menu is open.
   */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* =====================================================
          MAIN NAVBAR
      ====================================================== */}

      <header
        className={`sticky top-0 z-[100] w-full border-b transition-all duration-300 ${
          isScrolled
            ? "border-slate-200 bg-white/95 shadow-[0_4px_24px_-12px_rgba(15,23,42,0.2)] backdrop-blur-xl"
            : "border-slate-100 bg-white"
        }`}
      >
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[72px] lg:px-8">
          {/* =================================================
              LOGO
          ================================================== */}

          <Link
            to="/"
            aria-label="SajiloBuild home"
            className="group rounded-md outline-none transition-transform duration-200 hover:scale-[1.01] focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-4"
          >
            <Logo />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <nav
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) => {
              const isActive =
                item.type === "route" &&
                location.pathname === item.href;

              return (
                <Link
                  key={item.href}
                  to={item.href}
                  aria-current={
                    isActive ? "page" : undefined
                  }
                  className={`group relative rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                    isActive
                      ? "text-blue-600"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute bottom-1 left-3.5 right-3.5 h-px origin-left bg-blue-600 transition-transform duration-200 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* =================================================
              DESKTOP ACTIONS
          ================================================== */}

          <div className="hidden items-center gap-2 md:flex">
            {/* LOGIN */}

            <Link
              to="/login"
              className={`rounded-lg px-3.5 py-2.5 text-[13px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                isLoginPage
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              Log in
            </Link>

            {/* GET STARTED */}

            <Link
              to="/signup"
              className="group inline-flex min-h-10 items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-[13px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Get started

              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowIcon />
              </span>
            </Link>
          </div>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================== */}

          <button
            type="button"
            aria-label={
              isMenuOpen
                ? "Close menu"
                : "Open menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() =>
              setIsMenuOpen((open) => !open)
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 md:hidden"
          >
            <MenuIcon open={isMenuOpen} />
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        className={`fixed inset-0 z-[90] bg-slate-950/20 backdrop-blur-[2px] transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={closeMenu}
      />

      {/* =====================================================
          MOBILE DRAWER
      ====================================================== */}

      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`fixed right-0 top-0 z-[110] flex h-dvh w-[min(90vw,380px)] flex-col border-l border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* =================================================
            DRAWER HEADER
        ================================================== */}

        <div className="flex h-[68px] shrink-0 items-center justify-between border-b border-slate-100 px-4">
          <Link
            to="/"
            onClick={closeMenu}
            aria-label="SajiloBuild home"
            className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            <Logo />
          </Link>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
          >
            <CloseIcon />
          </button>
        </div>

        {/* =================================================
            DRAWER CONTENT
        ================================================== */}

        <div className="flex flex-1 flex-col overflow-y-auto px-4 py-6">
          {/* =================================================
              EXPLORE
          ================================================== */}

          <nav aria-label="Mobile navigation">
            <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Explore
            </p>

            <div className="mt-3 space-y-1">
              {navigation.map((item) => {
                const isActive =
                  item.type === "route" &&
                  location.pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={closeMenu}
                    aria-current={
                      isActive ? "page" : undefined
                    }
                    className={`group flex min-h-12 items-center justify-between rounded-xl px-3 text-sm font-medium transition-all duration-200 hover:bg-slate-50 hover:pl-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                      isActive
                        ? "bg-blue-50 pl-4 text-blue-700"
                        : "text-slate-700 hover:text-slate-950"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`transition-transform duration-200 group-hover:translate-x-1 ${
                        isActive
                          ? "text-blue-600"
                          : "text-slate-300 group-hover:text-blue-600"
                      }`}
                    >
                      <ArrowIcon />
                    </span>
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* DIVIDER */}

          <div className="my-7 h-px bg-slate-100" />

          {/* =================================================
              ACCOUNT
          ================================================== */}

          <div>
            <p className="px-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Account
            </p>

            <div className="mt-3 space-y-2">
              {/* LOGIN */}

              <Link
                to="/login"
                onClick={closeMenu}
                className={`flex min-h-11 items-center justify-center rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  isLoginPage
                    ? "border-blue-200 bg-blue-50 text-blue-700"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                Log in
              </Link>

              {/* GET STARTED */}

              <Link
                to="/signup"
                onClick={closeMenu}
                className="group flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-md active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Get started

                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowIcon />
                </span>
              </Link>
            </div>
          </div>

          {/* =================================================
              BOTTOM INFORMATION CARD
          ================================================== */}

          <div className="mt-auto pt-8">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
                </span>

                <span className="text-xs font-semibold text-slate-700">
                  SajiloBuild
                </span>
              </div>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                Build software by describing what you
                want to create.
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* =====================================================
          AUTH PAGE INDICATOR
      ====================================================== */}

      {isAuthPage && (
        <div className="pointer-events-none fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-[10px] font-medium text-slate-400 shadow-sm backdrop-blur sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

          Secure SajiloBuild account
        </div>
      )}
    </>
  );
}

export default Navbar;