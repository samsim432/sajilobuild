import {
  NavLink,
  useNavigate,
} from "react-router-dom";
import type { ReactNode } from "react";

import { useAuth } from "../../auth/AuthProvider";
import Logo from "../brand/logo";

interface DashboardSidebarProps {
  isExpanded: boolean;
  onToggle: () => void;
  onNavigate?: () => void;
  mobile?: boolean;
}

interface NavigationItem {
  label: string;
  href: string;
  icon: ReactNode;
}

const navigation: NavigationItem[] = [
  {
    label: "New Build",
    href: "/new",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "/dashboard/projects",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h4l2 2h7A2.5 2.5 0 0 1 21 9.5v8A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z" />
      </svg>
    ),
  },
  {
    label: "Templates",
    href: "/templates",
    icon: (
      <svg
        width="20"
        height="20"
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
          width="7"
          height="7"
          rx="1"
        />
        <rect
          x="14"
          y="3"
          width="7"
          height="7"
          rx="1"
        />
        <rect
          x="3"
          y="14"
          width="7"
          height="7"
          rx="1"
        />
        <rect
          x="14"
          y="14"
          width="7"
          height="7"
          rx="1"
        />
      </svg>
    ),
  },
];

const settingsNavigation: NavigationItem[] = [
  {
    label: "Settings",
    href: "/dashboard/settings",
    icon: (
      <svg
        width="20"
        height="20"
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
    ),
  },
];

function DashboardSidebar({
  isExpanded,
  onToggle,
  onNavigate,
  mobile = false,
}: DashboardSidebarProps) {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login", {
      replace: true,
    });
    onNavigate?.();
  };

  const handleLogoClick = () => {
    navigate("/dashboard");

    if (mobile) {
      onNavigate?.();
    }
  };

  const firstLetter =
    user?.name?.trim()?.charAt(0)?.toUpperCase() ||
    "S";

  return (
    <aside
      className={[
        "flex h-dvh flex-col",
        "border-r border-slate-200 bg-white",
        "shadow-[4px_0_24px_rgba(15,23,42,0.03)]",
        "overflow-hidden",
        "transition-[width] duration-300 ease-out",
        mobile
          ? "relative w-full"
          : "fixed inset-y-0 left-0 z-40",
        !mobile &&
          (isExpanded
            ? "w-[264px]"
            : "w-[72px]"),
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {/* =====================================================
          HEADER
      ====================================================== */}

      <div
        className={[
          "flex h-16 shrink-0 items-center",
          "border-b border-slate-100",
          isExpanded
            ? "px-3"
            : "justify-center px-2",
        ].join(" ")}
      >
        {isExpanded ? (
          <>
            {/* Brand */}

            <button
              type="button"
              onClick={handleLogoClick}
              aria-label="Go to SajiloBuild dashboard"
              className="group flex min-w-0 flex-1 items-center rounded-lg px-2 py-1.5 text-left transition-colors hover:bg-slate-50"
            >
              <Logo
                showText
                animated
              />
            </button>

            {/* Desktop collapse */}

            {!mobile && (
              <button
                type="button"
                onClick={onToggle}
                aria-label="Collapse sidebar"
                title="Collapse sidebar"
                className="group ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-all duration-150 hover:bg-slate-100 hover:text-slate-700"
              >
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
                  className="transition-transform duration-200 group-hover:-translate-x-0.5"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            {/* Mobile close */}

            {mobile && (
              <button
                type="button"
                onClick={onNavigate}
                aria-label="Close navigation"
                title="Close navigation"
                className="ml-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
              >
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
              </button>
            )}
          </>
        ) : (
          /* Collapsed rail */

          <button
            type="button"
            onClick={onToggle}
            aria-label="Expand sidebar"
            title="Expand sidebar"
            className="group flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-slate-50"
          >
            <Logo
              showText={false}
              animated
              className="justify-center"
            />
          </button>
        )}
      </div>

      {/* =====================================================
          NAVIGATION

          Only this area can scroll.
      ====================================================== */}

      <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-2 py-5 scrollbar-none">
        <nav aria-label="Dashboard navigation">
          {isExpanded && (
            <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Workspace
            </p>
          )}

          <div className="space-y-1">
            {navigation.map((item) => (
              <SidebarNavItem
                key={item.href}
                item={item}
                isExpanded={isExpanded}
                onNavigate={onNavigate}
              />
            ))}
          </div>

          {isExpanded && (
            <div className="my-5 border-t border-slate-100" />
          )}

          {isExpanded && (
            <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Account
            </p>
          )}

          <div className="space-y-1">
            {settingsNavigation.map(
              (item) => (
                <SidebarNavItem
                  key={item.href}
                  item={item}
                  isExpanded={isExpanded}
                  onNavigate={onNavigate}
                />
              ),
            )}
          </div>
        </nav>
      </div>

      {/* =====================================================
          ACCOUNT AREA

          This section NEVER scrolls.
      ====================================================== */}

      <div className="shrink-0 border-t border-slate-100 bg-white p-2">
        {isExpanded ? (
          <div className="space-y-1">
            {/* User */}

            <button
              type="button"
              onClick={() =>
                navigate(
                  "/dashboard/settings",
                )
              }
              className="flex w-full items-center gap-3 rounded-lg px-2.5 py-2.5 text-left transition-colors hover:bg-slate-50"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
                {firstLetter}
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {user?.name ||
                    "SajiloBuild User"}
                </p>

                <p className="truncate text-xs text-slate-500">
                  {user?.email || ""}
                </p>
              </div>
            </button>

            {/* Logout */}

            <button
              type="button"
              onClick={handleLogout}
              className="flex h-10 w-full items-center gap-3 rounded-lg px-3 text-sm font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
            >
              <LogoutIcon />

              <span>Log out</span>
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-1">
            {/* Avatar */}

            <SidebarTooltip label="Account settings">
              <button
                type="button"
                onClick={() =>
                  navigate(
                    "/dashboard/settings",
                  )
                }
                aria-label="Account settings"
                className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-slate-50"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-[11px] font-semibold text-blue-700">
                  {firstLetter}
                </div>
              </button>
            </SidebarTooltip>

            {/* Logout */}

            <SidebarTooltip label="Log out">
              <button
                type="button"
                onClick={handleLogout}
                aria-label="Log out"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                <LogoutIcon />
              </button>
            </SidebarTooltip>
          </div>
        )}
      </div>
    </aside>
  );
}

/*
 * ============================================================
 * NAV ITEM
 * ============================================================
 */

interface SidebarNavItemProps {
  item: NavigationItem;
  isExpanded: boolean;
  onNavigate?: () => void;
}

function SidebarNavItem({
  item,
  isExpanded,
  onNavigate,
}: SidebarNavItemProps) {
  return (
    <NavLink
      to={item.href}
      onClick={onNavigate}
      aria-label={item.label}
      className={({ isActive }) =>
        [
          "group relative flex h-10 items-center rounded-lg",
          "text-sm font-medium",
          "transition-all duration-150",
          isExpanded
            ? "gap-3 px-3"
            : "justify-center px-0",
          isActive
            ? "bg-blue-50 text-blue-700"
            : "text-slate-600 hover:bg-slate-50 hover:text-slate-950",
        ].join(" ")
      }
    >
      {item.icon}

      <span
        className={[
          "overflow-hidden whitespace-nowrap transition-all duration-200",
          isExpanded
            ? "max-w-[180px] opacity-100"
            : "max-w-0 opacity-0",
        ].join(" ")}
      >
        {item.label}
      </span>

      {!isExpanded && (
        <span className="pointer-events-none absolute left-[calc(100%+10px)] z-[100] hidden whitespace-nowrap rounded-md bg-slate-950 px-2.5 py-1.5 text-xs font-medium text-white shadow-lg group-hover:block">
          {item.label}
        </span>
      )}
    </NavLink>
  );
}

/*
 * ============================================================
 * SIDEBAR TOOLTIP
 * ============================================================
 */

interface SidebarTooltipProps {
  label: string;
  children: ReactNode;
}

function SidebarTooltip({
  label,
  children,
}: SidebarTooltipProps) {
  return (
    <div className="group relative">
      {children}

      <span className="pointer-events-none absolute left-[calc(100%+10px)] top-1/2 z-[100] hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-950 px-2.5 py-1.5 text-xs font-medium text-white shadow-lg group-hover:block">
        {label}
      </span>
    </div>
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
      <path d="M10 17l5-5-5-5" />
      <path d="M15 12H3" />
      <path d="M21 19V5a2 2 0 0 0-2-2h-7" />
    </svg>
  );
}

export default DashboardSidebar;