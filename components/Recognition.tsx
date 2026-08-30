import Image from "next/image";

import { awards } from "@/lib/content";

export default function Recognition() {
  return (
    <div>
      <div className="mt-9 grid items-start gap-9 md:grid-cols-[288px_1fr]">
        <div className="group border border-line bg-panel p-2.5">
          <Image
            src={awards.lead.image}
            alt={awards.lead.alt}
            width={720}
            height={960}
            sizes="(max-width: 768px) 100vw, 288px"
            className="h-auto w-full brightness-[0.85] contrast-[1.03] saturate-[0.7] transition-[filter] duration-500 group-hover:filter-none"
          />
        </div>

        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-meter">
            {awards.lead.when}
          </span>
          <h3 className="mt-2.5 font-mono text-[clamp(21px,2.6vw,31px)] font-medium leading-[1.1] tracking-[-0.04em]">
            {awards.lead.title}
          </h3>
          <p className="mt-4 border-l border-line-hi pl-5 text-dim">
            &ldquo;{awards.lead.citation}&rdquo;
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {awards.lead.badges.map((badge) => (
              <li
                key={badge}
                className="border border-signal/[0.26] px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.11em] text-signal"
              >
                {badge}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.06em] text-faint">
            {awards.lead.signature}
          </p>
        </div>
      </div>

      {/* Both certificates render at one size despite different source ratios —
          contain, not cover, so no signature or badge gets cropped away. */}
      <div className="mt-11 grid items-start gap-7 sm:grid-cols-2">
        {awards.certificates.map((cert) => (
          <div key={cert.when}>
            <div className="group border border-line bg-panel p-2.5">
              <div className="relative aspect-[16/10] bg-void">
                <Image
                  src={cert.image}
                  alt={cert.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 440px"
                  className="object-contain brightness-[0.85] contrast-[1.03] saturate-[0.7] transition-[filter] duration-500 group-hover:filter-none"
                />
              </div>
            </div>
            <span className="mt-4 block font-mono text-[11px] uppercase tracking-[0.18em] text-meter">
              {cert.when}
            </span>
            <h3 className="mt-2.5 font-mono text-[clamp(21px,2.6vw,31px)] font-medium leading-[1.1] tracking-[-0.04em]">
              {cert.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cert.badges.map((badge) => (
                <li
                  key={badge}
                  className="border border-signal/[0.26] px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-[0.11em] text-signal"
                >
                  {badge}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.06em] text-faint">
              {cert.signature}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
