import { Link } from "react-router-dom";

export interface Project {
  id: string;
  name: string;
  description?: string;
  framework?: string;
  updatedAt: string;
}

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-xl border border-slate-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
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
        </div>

        <button
          type="button"
          aria-label={`More options for ${project.name}`}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 opacity-0 transition-all group-hover:opacity-100 hover:bg-slate-100 hover:text-slate-700 focus:opacity-100"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="5" cy="12" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="19" cy="12" r="1" />
          </svg>
        </button>
      </div>

      <h3 className="mt-5 truncate text-base font-semibold text-slate-950">
        {project.name}
      </h3>

      <p className="mt-1.5 min-h-10 text-sm leading-5 text-slate-500">
        {project.description || "No description available."}
      </p>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <div className="flex items-center gap-2">
          {project.framework && (
            <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600">
              {project.framework}
            </span>
          )}

          <span className="text-xs text-slate-400">
            {project.updatedAt}
          </span>
        </div>

        <Link
          to={`/projects/${project.id}`}
          className="text-sm font-semibold text-blue-600 transition-colors hover:text-blue-700"
        >
          Open
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;