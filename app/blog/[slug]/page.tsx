import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogs } from "@/lib/content";
import BackLink from "@/components/BackLink";

type Params = { params: { slug: string } };

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return {};
  return { title: blog.title, description: blog.summary };
}

export default function BlogArticle({ params }: Params) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) notFound();

  const index = blogs.findIndex((b) => b.slug === blog.slug);
  const next = blogs[(index + 1) % blogs.length];

  return (
    <article className="shell max-w-[820px] pb-20 pt-10 lg:pt-16">
      <BackLink href="/#blogs" label="Blogs" />

      <header className="mt-11 border-b border-line pb-9">
        <p className="tag">{blog.where}</p>
        <h1 className="mt-4 font-mono text-[clamp(24px,3.6vw,38px)] font-medium leading-[1.1] tracking-[-0.04em] [text-wrap:balance]">
          {blog.title}
        </h1>
        <p className="mt-4 max-w-prose text-base text-dim sm:text-lg">{blog.summary}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <li
              key={tag}
              className="border border-line px-2.5 py-[5px] font-mono text-[11px] text-dim"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <h2 className="tag mt-11">The problem</h2>
      <p className="mt-3.5 border-l border-line-hi pl-5">{blog.statement}</p>

      <h2 className="tag mt-11">Examples</h2>
      <div className="mt-3.5 grid gap-4">
        {blog.examples.map((example) => (
          <div key={example.input} className="border border-line bg-panel px-5 py-4">
            <code className="font-mono text-[13px] text-signal">{example.input}</code>
            <div className="mt-1 font-mono text-[13px] text-meter">→ {example.output}</div>
            <p className="mt-2.5 text-sm text-dim">{example.why}</p>
          </div>
        ))}
      </div>

      <h2 className="tag mt-11">Approach</h2>
      <div className="mt-3.5 grid gap-4">
        {blog.approach.map((paragraph) => (
          <p key={paragraph} className="text-dim">
            {paragraph}
          </p>
        ))}
      </div>

      <h2 className="tag mt-11">The algorithm</h2>
      <ol className="mt-4 grid gap-2.5">
        {blog.steps.map((step, i) => (
          <li key={step} className="grid grid-cols-[2.25rem_1fr] gap-1">
            <span className="pt-0.5 font-mono text-[11px] text-signal">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[14.5px] text-dim">{step}</span>
          </li>
        ))}
      </ol>

      <h2 className="tag mt-11">Complexity</h2>
      <div className="mt-3.5 grid gap-px border border-line bg-line sm:grid-cols-2">
        <div className="bg-panel px-5 py-4">
          <div className="tag">Time</div>
          <div className="mt-2 font-mono text-[19px] tracking-[-0.02em] text-meter">
            {blog.time}
          </div>
        </div>
        <div className="bg-panel px-5 py-4">
          <div className="tag">Space</div>
          <div className="mt-2 font-mono text-[19px] tracking-[-0.02em] text-meter">
            {blog.space}
          </div>
        </div>
      </div>
      {blog.naive && (
        <p className="mt-3.5 text-sm text-dim">Down from a naive {blog.naive}.</p>
      )}

      <a
        href={blog.url}
        target="_blank"
        rel="noreferrer"
        className="mt-11 inline-flex items-center gap-2.5 border border-signal/30 px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-signal transition-colors hover:border-signal hover:bg-signal/[0.06]"
      >
        Read the full article on GeeksforGeeks ↗
      </a>

      {next.slug !== blog.slug && (
        <Link
          href={`/blog/${next.slug}`}
          className="group mt-14 flex items-baseline justify-between gap-6 border-t border-line pt-9"
        >
          <span>
            <span className="tag">Next article</span>
            <span className="mt-2.5 block max-w-[30ch] font-mono text-[clamp(18px,2.4vw,26px)] font-medium leading-[1.2] tracking-[-0.035em] transition-colors group-hover:text-signal">
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
      )}
    </article>
  );
}
