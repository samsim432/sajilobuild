import {
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../auth/AuthProvider";

function UserMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const menuRef =
    useRef<HTMLDivElement | null>(null);

  /*
   * =========================================================
   * CLOSE WHEN CLICKING OUTSIDE
   * =========================================================
   */

  useEffect(() => {
    const handlePointerDown = (
      event: PointerEvent,
    ) => {
      if (!menuRef.current) {
        return;
      }

      if (
        !menuRef.current.contains(
          event.target as Node,
        )
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "pointerdown",
      handlePointerDown,
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown,
      );
    };
  }, []);

  /*
   * =========================================================
   * ESCAPE
   * =========================================================
   */

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setIsOpen(false);
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
  }, [isOpen]);

  /*
   * =========================================================
   * LOGOUT
   * =========================================================
   */

  const handleLogout = () => {
    setIsOpen(false);

    logout();

    navigate("/login", {
      replace: true,
    });
  };

  const firstLetter =
    user?.name?.trim()?.charAt(0)?.toUpperCase() ||
    "S";

  return (
    <div
      ref={menuRef}
      className="relative"
    >
      {/* =====================================================
          TRIGGER
      ====================================================== */}

      <button
        type="button"
        onClick={() =>
          setIsOpen((open) => !open)
        }
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-label="Open account menu"
        className={[
          "flex items-center gap-2 rounded-xl p-1.5",
          "transition-colors duration-150",
          isOpen
            ? "bg-slate-100"
            : "hover:bg-slate-100",
        ].join(" ")}
      >
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
          {firstLetter}
        </div>

        <div className="hidden max-w-[140px] text-left sm:block">
          <p className="truncate text-xs font-semibold text-slate-900">
            {user?.name || "User"}
          </p>

          <p className="truncate text-[11px] text-slate-400">
            Account
          </p>
        </div>

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
          className={[
            "transition-transform duration-200",
            isOpen
              ? "rotate-180"
              : "",
          ].join(" ")}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {/* =====================================================
          MENU
      ====================================================== */}

      {isOpen && (
        <div
          role="menu"
          aria-label="Account menu"
          className="absolute right-0 top-[calc(100%+8px)] z-50 w-60 origin-top-right rounded-xl border border-slate-200 bg-white p-1.5 shadow-[0_12px_40px_rgba(15,23,42,0.12)]"
        >
          {/* Account information */}

          <div className="mb-1 border-b border-slate-100 px-3 py-2.5">
            <p className="truncate text-sm font-semibold text-slate-900">
              {user?.name ||
                "SajiloBuild User"}
            </p>

            <p className="mt-0.5 truncate text-xs text-slate-500">
              {user?.email || ""}
            </p>
          </div>

          {/* Settings */}

          <button
            type="button"
            role="menuitem"
            onClick={() => {
              setIsOpen(false);
              navigate(
                "/dashboard/settings",
              );
            }}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950"
          >
            <SettingsIcon />

            <span>Settings</span>
          </button>

          {/* Logout */}

          <button
            type="button"
            role="menuitem"
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950"
          >
            <LogoutIcon />

            <span>Log out</span>
          </button>
        </div>
      )}
    </div>
  );
}

/*
 * ============================================================
 * SETTINGS ICON
 * ============================================================
 */

function SettingsIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="3"
      />

      <path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 1.7-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V20h-2.4v-.2a1.7 1.7 0 0 0-1.03-1.56 1.7 1.7 0 0 0-1.88.34l-.06.06-1.7-1.7.06-.06A1.7 1.7 0 0 0 8.4 15a1.7 1.7 0 0 0-1.56-1.03H6v-2.4h.2A1.7 1.7 0 0 0 7.76 10a1.7 1.7 0 0 0-.34-1.88l-.06-.06 1.7-1.7.06.06A1.7 1.7 0 0 0 11 6.76 1.7 1.7 0 0 0 12.03 5.2V5h2.4v.2A1.7 1.7 0 0 0 15.46 6.76a1.7 1.7 0 0 0 1.88-.34l.06-.06 1.7 1.7-.06.06A1.7 1.7 0 0 0 18.7 10a1.7 1.7 0 0 0 1.56 1.03h.2v2.4h-.2A1.7 1.7 0 0 0 19.4 15Z" />
    </svg>
  );
}

/*
 * ============================================================
 * LOGOUT ICON
 * ============================================================
 */

function LogoutIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M10 17l5-5-5-5" />
      <path d="M15 12H3" />
      <path d="M21 19V5a2 2 0 0 0-2-2h-7" />
    </svg>
  );
}

export default UserMenu;