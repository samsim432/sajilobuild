import { Link } from "react-router-dom";

import DashboardLayout from "../components/dashboard/DashboardLayout";

const templates = [
  {
    title: "Business Website",
    description:
      "A professional website for a business, service, or company.",
    category: "Website",
  },
  {
    title: "Developer Portfolio",
    description:
      "Showcase your projects, skills, experience, and contact information.",
    category: "Portfolio",
  },
  {
    title: "Restaurant",
    description:
      "A modern restaurant site with menu, location, opening hours, and contact.",
    category: "Business",
  },
  {
    title: "Online Store",
    description:
      "Product catalogue, shopping cart, checkout, and order management.",
    category: "E-commerce",
  },
  {
    title: "SaaS Dashboard",
    description:
      "A starting point for analytics, users, settings, and application data.",
    category: "Application",
  },
];

function Templates() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div>
          <p className="text-sm font-medium text-blue-600">
            Templates
          </p>

          <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Start with a template
          </h1>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Start from a common project structure and customize it
            with your own idea.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <TemplateCard
              key={template.title}
              {...template}
            />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

interface TemplateCardProps {
  title: string;
  description: string;
  category: string;
}

function TemplateCard({
  title,
  description,
  category,
}: TemplateCardProps) {
  return (
    <article className="group flex min-h-60 flex-col rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
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
              width="18"
              height="18"
              rx="2"
            />

            <path d="M8 8h8" />
            <path d="M8 12h8" />
            <path d="M8 16h5" />
          </svg>
        </div>

        <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500">
          {category}
        </span>
      </div>

      <h2 className="mt-5 text-base font-semibold text-slate-950">
        {title}
      </h2>

      <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
        {description}
      </p>

      <Link
        to="/new"
        className="mt-5 inline-flex h-10 items-center justify-center rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 hover:text-slate-950"
      >
        Use template
      </Link>
    </article>
  );
}

export default Templates;