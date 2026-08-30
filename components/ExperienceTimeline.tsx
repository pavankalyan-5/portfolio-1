import { experience } from "@/lib/content";

export default function ExperienceTimeline() {
  return (
    <ol className="mt-8 border-t border-line">
      {experience.map((job) => (
        <li
          key={`${job.company}-${job.role}`}
          className="grid gap-x-8 gap-y-2 border-b border-line py-7 sm:grid-cols-[176px_1fr]"
        >
          <p className="font-mono text-[11.5px] uppercase tracking-[0.06em] text-faint [font-variant-numeric:tabular-nums]">
            {job.start} — {job.end}
            <span className="block normal-case opacity-70">{job.period}</span>
          </p>

          <div>
            <h3 className="font-mono text-[19px] font-medium tracking-[-0.025em]">{job.role}</h3>
            <p className="mt-1.5 font-mono text-[11.5px] uppercase tracking-[0.1em] text-signal">
              {job.company}
              {job.location && <span className="text-faint"> · {job.location}</span>}
            </p>
            <ul className="mt-3.5 grid max-w-prose gap-[7px]">
              {job.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="relative pl-5 text-sm text-dim before:absolute before:left-0 before:top-[0.72em] before:h-px before:w-[11px] before:bg-line-hi"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
