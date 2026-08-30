import type { ReactNode } from "react";

/**
 * Section shell. The rail names the diagram node this section documents —
 * the label is information, not decoration, so sections are never numbered.
 */
export default function Section({
  id,
  node,
  label,
  title,
  lede,
  children,
}: {
  id: string;
  node: string;
  label: string;
  title: string;
  lede?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-line">
      <div className="shell py-14 sm:py-20 lg:py-[100px]">
        <div className="grid gap-7 md:grid-cols-[200px_1fr] md:gap-x-8">
          <div className="md:sticky md:top-[78px] md:self-start">
            <span className="nodeid">[{node}]</span>
            <div className="tag mt-2">{label}</div>
          </div>
          <div>
            <h2 className="sec-title">{title}</h2>
            {lede && <p className="mt-4 text-dim">{lede}</p>}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
