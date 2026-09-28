import {
  useEffect,
  useState,
  type ReactNode,
} from "react";

import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const SIDEBAR_STORAGE_KEY =
  "sajilobuild-sidebar-expanded";

function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const [isSidebarExpanded, setIsSidebarExpanded] =
    useState<boolean>(() => {
      try {
        return (
          localStorage.getItem(
            SIDEBAR_STORAGE_KEY,
          ) === "true"
        );
      } catch {
        return false;
      }
    });

  const [isMobileSidebarOpen, setIsMobileSidebarOpen] =
    useState(false);

  /*
   * =========================================================
   * SAVE DESKTOP SIDEBAR STATE
   * =========================================================
   */

  useEffect(() => {
    try {
      localStorage.setItem(
        SIDEBAR_STORAGE_KEY,
        String(isSidebarExpanded),
      );
    } catch {
      // Ignore localStorage errors.
    }
  }, [isSidebarExpanded]);

  /*
   * =========================================================
   * KEYBOARD SHORTCUT
   *
   * macOS:
   * Command + B
   *
   * Windows/Linux:
   * Ctrl + B
   *
   * Do not trigger while the user is typing.
   * =========================================================
   */

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;

      const isTyping =
        target?.matches(
          "input, textarea, select, [contenteditable='true']",
        );

      if (
        !isTyping &&
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "b"
      ) {
        event.preventDefault();

        setIsSidebarExpanded(
          (current) => !current,
        );

        return;
      }

      if (
        event.key === "Escape" &&
        isMobileSidebarOpen
      ) {
        setIsMobileSidebarOpen(false);
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
  }, [isMobileSidebarOpen]);

  /*
   * =========================================================
   * MOBILE BODY SCROLL LOCK
   * =========================================================
   */

  useEffect(() => {
    if (!isMobileSidebarOpen) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        previousOverflow;
    };
  }, [isMobileSidebarOpen]);

  /*
   * =========================================================
   * CLOSE MOBILE SIDEBAR WHEN RESIZING TO DESKTOP
   * =========================================================
   */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileSidebarOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      handleResize,
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize,
      );
    };
  }, []);

  return (
    <div className="min-h-dvh bg-slate-50">
      {/* =====================================================
          DESKTOP SIDEBAR

          Fixed to the viewport.

          The sidebar itself NEVER scrolls with the page.
      ====================================================== */}

      <div className="hidden lg:block">
        <DashboardSidebar
          isExpanded={isSidebarExpanded}
          onToggle={() =>
            setIsSidebarExpanded(
              (current) => !current,
            )
          }
        />
      </div>

      {/* =====================================================
          MOBILE SIDEBAR
      ====================================================== */}

      <div
        className={[
          "fixed inset-0 z-[60] lg:hidden",
          "transition-[visibility] duration-300",
          isMobileSidebarOpen
            ? "visible"
            : "invisible",
        ].join(" ")}
        aria-hidden={!isMobileSidebarOpen}
      >
        {/* Overlay */}

        <button
          type="button"
          aria-label="Close navigation"
          tabIndex={
            isMobileSidebarOpen ? 0 : -1
          }
          onClick={() =>
            setIsMobileSidebarOpen(false)
          }
          className={[
            "absolute inset-0 bg-slate-950/30",
            "backdrop-blur-[2px]",
            "transition-opacity duration-300",
            isMobileSidebarOpen
              ? "opacity-100"
              : "opacity-0",
          ].join(" ")}
        />

        {/* Drawer */}

        <div
          className={[
            "relative z-10 h-full w-[280px] max-w-[85vw]",
            "transition-transform duration-300 ease-out",
            isMobileSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full",
          ].join(" ")}
        >
          <DashboardSidebar
            isExpanded={true}
            mobile={true}
            onToggle={() =>
              setIsMobileSidebarOpen(false)
            }
            onNavigate={() =>
              setIsMobileSidebarOpen(false)
            }
          />
        </div>
      </div>

      {/* =====================================================
          MAIN APPLICATION

          Desktop:
          collapsed = 72px
          expanded = 264px

          Mobile:
          full width
      ====================================================== */}

      <div
        className={[
          "min-h-dvh transition-[padding-left] duration-300 ease-out",
          isSidebarExpanded
            ? "lg:pl-[264px]"
            : "lg:pl-[72px]",
        ].join(" ")}
      >
        <div className="flex min-h-dvh min-w-0 flex-col">
          <DashboardHeader
            onMenuClick={() =>
              setIsMobileSidebarOpen(true)
            }
          />

          <main className="min-w-0 flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;