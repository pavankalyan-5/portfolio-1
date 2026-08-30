import { impact } from "@/lib/content";

export default function ImpactMeters() {
  return (
    <div className="mt-8 grid gap-px border border-line bg-line lg:grid-cols-3">
      {impact.map((item) => (
        <article key={item.node} className="bg-panel px-6 pb-7 pt-6">
          <div className="font-mono text-[11px] tracking-[0.06em] text-signal">{item.node}</div>
          <p className="mt-4 font-mono text-[clamp(40px,5.5vw,58px)] font-medium leading-none tracking-[-0.05em] text-meter [font-variant-numeric:tabular-nums]">
            {item.value}
          </p>
          <p className="mt-3 text-sm">{item.label}</p>
          <p className="mt-1.5 text-[13.5px] text-dim">{item.detail}</p>
          <p className="mt-3.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-faint">
            {item.where}
          </p>
        </article>
      ))}
    </div>
  );
}
