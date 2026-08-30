import { buildingNow } from "@/lib/content";

export default function BuildingNow() {
  return (
    <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2">
      {buildingNow.map((item) => (
        <article key={item.id} className="bg-panel px-6 pb-7 pt-7">
          <div className="font-mono text-[11px] tracking-[0.06em] text-signal">{item.id}</div>
          <span className="mt-4 inline-block border border-signal/[0.26] px-2.5 py-1 font-mono text-[10.5px] font-medium uppercase tracking-[0.12em] text-signal">
            {item.flag}
          </span>
          <h3 className="mt-3.5 font-mono text-[clamp(21px,2.5vw,29px)] font-medium leading-[1.12] tracking-[-0.04em]">
            {item.title}
          </h3>
          <p className="mt-3 text-[14.5px] text-dim">{item.body}</p>
        </article>
      ))}
    </div>
  );
}
