import { Link } from "react-router-dom";

import DashboardLayout from "../components/dashboard/DashboardLayout";
import ProjectCard, {
  type Project,
} from "../components/dashboard/ProjectCard";

const projects: Project[] = [];

function Projects() {
  return (
    <DashboardLayout>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-600">
              Workspace
            </p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              Projects
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Your websites and applications built with SajiloBuild.
            </p>
          </div>

          <Link
            to="/new"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
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
              <path d="M12 5v14" />
              <path d="M5 12h14" />
            </svg>

            New Build
          </Link>
        </div>

        {projects.length === 0 ? (
          <EmptyProjects />
        ) : (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

function EmptyProjects() {
  return (
    <div className="mt-10 flex min-h-[420px] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
        <svg
          width="26"
          height="26"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h4l2 2h7A2.5 2.5 0 0 1 21 9.5v8A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5z" />
        </svg>
      </div>

      <h2 className="mt-5 text-lg font-semibold text-slate-950">
        No projects yet
      </h2>

      <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
        Your projects will appear here after you start building
        something with SajiloBuild.
      </p>

      <Link
        to="/new"
        className="mt-6 inline-flex h-10 items-center justify-center rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
      >
        Create your first project
      </Link>
    </div>
  );
}

export default Projects;