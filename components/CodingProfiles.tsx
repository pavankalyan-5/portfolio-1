import { certifications, codingProfiles, socials } from "@/lib/content";

/** One hue at three weights, ordered easy → hard. */
const SPLIT_TONE = ["bg-signal/90", "bg-signal/50", "bg-signal/25"];

function Card({ profile }: { profile: (typeof codingProfiles)[number] }) {
  const total = profile.split?.reduce((sum, part) => sum + part.count, 0) ?? 0;

  return (
    <>
      <div className="flex justify-between gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
          {profile.platform}
        </span>
        <span className="font-mono text-[11px] text-faint [font-variant-numeric:tabular-nums]">
          {profile.handle}
        </span>
      </div>

      <div className="mt-5 font-mono text-[26px] font-medium tracking-[-0.035em] transition-colors group-hover:text-signal">
        {profile.title}
      </div>
      <p className="mt-2 text-[13.5px] text-dim">{profile.detail}</p>

      {profile.split && (
        <>
          <div
            className="mt-4 flex h-1 gap-0.5"
            role="img"
            aria-label={`${total} problems solved: ${profile.split
              .map((p) => `${p.count} ${p.label}`)
              .join(", ")}.`}
          >
            {profile.split.map((part, i) => (
              <span
                key={part.label}
                className={SPLIT_TONE[i]}
                style={{ width: `${(part.count / total) * 100}%` }}
              />
            ))}
          </div>
          <div className="mt-2.5 flex flex-wrap gap-3.5">
            {profile.split.map((part) => (
              <span
                key={part.label}
                className="font-mono text-[10.5px] text-faint [font-variant-numeric:tabular-nums]"
              >
                {part.count} {part.label}
              </span>
            ))}
          </div>
        </>
      )}

      {profile.stats && (
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1.5 border-t border-line pt-4">
          {profile.stats.map((stat) => (
            <div key={stat.key} className="flex flex-col gap-[3px]">
              <span className="font-mono text-[17px] tracking-[-0.02em] [font-variant-numeric:tabular-nums]">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                {stat.key}
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default function CodingProfiles() {
  const github = socials.find((s) => s.name === "GitHub");

  return (
    <div>
      <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2">
        {codingProfiles.map((profile) =>
          profile.url ? (
            <a
              key={profile.platform}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className="group block bg-panel p-6 transition-colors hover:bg-panel-2"
            >
              <Card profile={profile} />
            </a>
          ) : (
            // ACM ICPC has nowhere to link, so it gets no interactive affordance.
            <div key={profile.platform} className="bg-panel p-6">
              <Card profile={profile} />
            </div>
          )
        )}
      </div>

      {github && (
        <p className="mt-5 font-mono text-[11.5px] text-faint">
          Source for everything I&rsquo;ve built:{" "}
          <a
            href={github.url}
            target="_blank"
            rel="noreferrer"
            className="border-b border-signal/30 text-signal transition-colors hover:border-signal"
          >
            github.com/pavankalyan-5
          </a>
        </p>
      )}

      <p className="tag mt-8">Certifications</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {certifications.map((cert) => (
          <li
            key={cert}
            className="border border-line px-2.5 py-[5px] font-mono text-[11px] text-dim"
          >
            {cert}
          </li>
        ))}
      </ul>
    </div>
  );
}
