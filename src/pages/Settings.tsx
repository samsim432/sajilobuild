import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "../components/dashboard/DashboardLayout";
import { useAuth } from "../auth/AuthProvider";

function Settings() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState(user?.name || "");
  const [saved, setSaved] = useState(false);

  const handleSave = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <DashboardLayout>
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div>
          <p className="text-sm font-medium text-blue-600">
            Account
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Settings
          </h1>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Manage your SajiloBuild account and preferences.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          <section className="rounded-xl border border-slate-200 bg-white">
            <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
              <h2 className="text-base font-semibold text-slate-950">
                Profile
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Update the information associated with your account.
              </p>
            </div>

            <form
              onSubmit={handleSave}
              className="space-y-5 px-5 py-6 sm:px-6"
            >
              <div>
                <label
                  htmlFor="settings-name"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Name
                </label>

                <input
                  id="settings-name"
                  type="text"
                  value={name}
                  onChange={(event) =>
                    setName(event.target.value)
                  }
                  className="h-11 w-full max-w-xl rounded-lg border border-slate-200 bg-white px-3.5 text-sm text-slate-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/10"
                />
              </div>

              <div>
                <label
                  htmlFor="settings-email"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Email
                </label>

                <input
                  id="settings-email"
                  type="email"
                  value={user?.email || ""}
                  disabled
                  className="h-11 w-full max-w-xl rounded-lg border border-slate-200 bg-slate-50 px-3.5 text-sm text-slate-500 outline-none"
                />

                <p className="mt-2 text-xs text-slate-400">
                  Email changes will be handled by the authentication
                  provider when real authentication is connected.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                >
                  Save changes
                </button>

                {saved && (
                  <span className="text-sm font-medium text-green-600">
                    Changes saved.
                  </span>
                )}
              </div>
            </form>
          </section>

          <section className="rounded-xl border border-slate-200 bg-white">
            <div className="border-b border-slate-100 px-5 py-5 sm:px-6">
              <h2 className="text-base font-semibold text-slate-950">
                Account
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Manage your current session.
              </p>
            </div>

            <div className="px-5 py-6 sm:px-6">
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50"
              >
                Log out
              </button>
            </div>
          </section>

          <SettingsPlaceholder
            title="Appearance"
            description="Theme and interface preferences will be available here."
          />

          <SettingsPlaceholder
            title="Notifications"
            description="Configure build, project, and account notifications."
          />

          <SettingsPlaceholder
            title="Usage"
            description="Track your AI usage and project activity."
          />

          <SettingsPlaceholder
            title="Billing"
            description="Plans, invoices, and payment information will appear here."
          />

          <SettingsPlaceholder
            title="Integrations"
            description="Connect external services and development tools."
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

interface SettingsPlaceholderProps {
  title: string;
  description: string;
}

function SettingsPlaceholder({
  title,
  description,
}: SettingsPlaceholderProps) {
  return (
    <section className="rounded-xl border border-slate-200 bg-white px-5 py-5 sm:px-6">
      <h2 className="text-base font-semibold text-slate-950">
        {title}
      </h2>

      <p className="mt-1 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <span className="mt-4 inline-flex rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
        Coming later
      </span>
    </section>
  );
}

export default Settings;