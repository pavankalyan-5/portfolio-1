import Link from "next/link";

import { projects } from "@/lib/content";

export default function WorkList() {
  return (
    <div className="mt-8 grid gap-px border-y border-line bg-line">
      {projects.map((project) => (
        <article
          key={project.slug}
          className="group grid items-start gap-x-8 gap-y-4 bg-void py-7 transition-colors hover:bg-panel sm:grid-cols-[1fr_auto]"
        >
          <div>
            <span className="tag">
              {project.year} · {project.role}
            </span>
            <h3 className="mt-2 font-mono text-[clamp(20px,2.4vw,28px)] font-medium tracking-[-0.035em]">
              <Link
                href={`/work/${project.slug}`}
                className="transition-colors group-hover:text-signal"
              >
                {project.title}
              </Link>
            </h3>
            <p className="mt-2 max-w-prose text-sm text-dim">{project.tagline}</p>
            <p className="mt-3.5 font-mono text-[11px] uppercase tracking-[0.08em] text-faint">
              {project.stack.join(" · ")}
            </p>
          </div>

          {/* Case study, live build and source each get their own target. */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 sm:flex-col sm:items-end sm:gap-2.5">
            <Link
              href={`/work/${project.slug}`}
              className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.16em] text-signal"
            >
              case study →
            </Link>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.16em] text-dim transition-colors hover:text-signal"
              >
                live ↗
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.16em] text-dim transition-colors hover:text-signal"
              >
                source ↗
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
