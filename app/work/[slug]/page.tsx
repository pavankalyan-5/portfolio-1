import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/lib/content";
import BackLink from "@/components/BackLink";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return { title: project.title, description: project.tagline };
}

export default function CaseStudy({ params }: Params) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <div className="shell pb-11 pt-10 lg:pt-16">
        <BackLink href="/#work" label="Work" />

        <p className="tag mt-11">
          {project.year} · {project.role}
        </p>
        <h1 className="mt-4 max-w-[14ch] font-mono text-[clamp(28px,4.6vw,52px)] font-medium leading-[1.04] tracking-[-0.045em] [text-wrap:balance]">
          {project.title}
        </h1>
        <p className="mt-5 max-w-prose text-base text-dim sm:text-lg">{project.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-signal/[0.42] bg-signal/[0.05] px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-signal transition-colors hover:border-signal hover:bg-signal/[0.11]"
            >
              Live site ↗
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-line-hi px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] transition-colors hover:border-signal hover:text-signal"
            >
              Source ↗
              {project.repoName && (
                <span className="border-l border-line-hi pl-2.5 text-[10px] normal-case tracking-[0.1em] text-faint">
                  {project.repoName}
                </span>
              )}
            </a>
          )}
        </div>
      </div>

      <div className="shell">
        <div className="relative aspect-[16/9] overflow-hidden border border-line bg-panel">
          <Image
            src={project.image}
            alt={`${project.title} interface`}
            fill
            priority
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </div>

      <div className="shell py-14 lg:py-24">
        <div className="grid gap-9 md:grid-cols-[200px_1fr] md:gap-x-8">
          <aside className="md:sticky md:top-[78px] md:self-start">
            <span className="tag">Stack</span>
            <ul className="mt-3 space-y-1.5">
              {project.stack.map((tech) => (
                <li key={tech} className="text-sm text-dim">
                  {tech}
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-12">
            <section>
              <h2 className="tag">The problem</h2>
              <p className="mt-4 max-w-prose text-base sm:text-lg">{project.problem}</p>
            </section>

            <section>
              <h2 className="tag">The approach</h2>
              <ol className="mt-4 grid max-w-prose gap-5">
                {project.approach.map((step, i) => (
                  <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-2">
                    <span className="pt-1 font-mono text-[11px] tracking-[0.16em] text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-dim">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section>
              <h2 className="tag">The outcome</h2>
              <p className="mt-4 max-w-prose text-base sm:text-lg">{project.outcome}</p>
            </section>
          </div>
        </div>
      </div>

      {next.slug !== project.slug && (
        <div className="border-t border-line">
          <Link
            href={`/work/${next.slug}`}
            className="group shell flex items-baseline justify-between gap-6 py-11 lg:py-16"
          >
            <span>
              <span className="tag">Next project</span>
              <span className="mt-2.5 block font-mono text-[clamp(24px,3.2vw,38px)] font-medium tracking-[-0.04em] transition-colors group-hover:text-signal">
                {next.title}
              </span>
            </span>
            <span
              aria-hidden
              className="shrink-0 text-2xl text-signal transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            >
              ↗
            </span>
          </Link>
        </div>
      )}
    </article>
  );
}
