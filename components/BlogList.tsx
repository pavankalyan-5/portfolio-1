import Link from "next/link";

import { blogs } from "@/lib/content";

export default function BlogList() {
  return (
    <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2">
      {blogs.map((blog) => (
        <Link
          key={blog.slug}
          href={`/blog/${blog.slug}`}
          className="group flex flex-col bg-panel px-6 pb-7 pt-6 transition-colors hover:bg-panel-2"
        >
          <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-faint">
            {blog.where}
          </span>
          <h3 className="mt-3.5 font-mono text-[clamp(18px,2vw,23px)] font-medium leading-[1.2] tracking-[-0.035em] transition-colors group-hover:text-signal">
            {blog.title}
          </h3>
          <p className="mt-3 flex-1 text-sm text-dim">{blog.summary}</p>
          <div className="mt-5 flex items-center justify-between gap-3 font-mono text-[10.5px] uppercase tracking-[0.14em]">
            <span className="text-faint">{blog.tags.join(" · ")}</span>
            <span className="text-signal">Read →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
