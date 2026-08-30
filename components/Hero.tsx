import Image from "next/image";

import { profile } from "@/lib/content";
import SystemDiagram from "@/components/SystemDiagram";
import ResumeButton from "@/components/ResumeButton";

export default function Hero() {
  return (
    <section className="shell pt-12 sm:pt-16 lg:pt-[92px]" id="top">
      <div className="grid items-start gap-12 lg:grid-cols-[1fr_320px]">
        <div>
          <p className="tag animate-rise">
            {profile.role} · {profile.company}
          </p>

          <h1
            className="mt-5 max-w-[17ch] animate-rise font-mono text-[clamp(30px,5.4vw,62px)] font-medium leading-[1.02] tracking-[-0.05em] [text-wrap:balance]"
            style={{ animationDelay: "70ms" }}
          >
            {profile.headline.lead}
            <em className="not-italic text-signal">
              {profile.headline.accent}
            </em>
            {profile.headline.tail}
          </h1>

          <p
            className="mt-6 max-w-[60ch] animate-rise text-base text-dim"
            style={{ animationDelay: "140ms" }}
          >
            {profile.intro}
          </p>

          <div
            className="mt-7 flex animate-rise flex-wrap gap-x-7 gap-y-2.5 font-mono text-xs text-faint"
            style={{ animationDelay: "200ms" }}
          >
            <span className="inline-flex items-center gap-2">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-signal shadow-[0_0_8px_var(--signal)]"
              />
              {profile.availableNote}
            </span>
            <span>
              based in <b className="font-medium text-text">Srikakulam, AP</b>
            </span>
            <span>
              prev. <b className="font-medium text-text">EagleView</b> ·{" "}
              <b className="font-medium text-text">ValueLabs</b>
            </span>
            <span>
              <b className="font-medium text-text">Champion of Excellence</b>,
              Prezent 2025
            </span>
          </div>

          <div
            className="mt-7 flex animate-rise flex-wrap items-center gap-3"
            style={{ animationDelay: "260ms" }}
          >
            <ResumeButton />
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2.5 border border-line-hi px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] transition-colors hover:border-signal hover:text-signal"
            >
              Get in touch
            </a>
          </div>
        </div>

        <figure className="ml-auto hidden w-full max-w-[300px] lg:block">
          <div className="relative aspect-[5/6]">
            <Image
              src={profile.portraitHero}
              alt={`Portrait of ${profile.name}.`}
              fill
              priority
              sizes="300px"
              className="animate-morph object-cover [object-position:50%_16%]"
            />
            <span
              aria-hidden
              className="absolute -inset-0.5 animate-morph border border-signal/50"
            />
            <span
              aria-hidden
              className="absolute -inset-[15px] animate-morph border border-signal/[0.15] [animation-delay:-6s]"
            />
            <span
              aria-hidden
              className="absolute -inset-[29px] animate-morph border border-dashed border-signal/20 [animation-delay:-13s]"
            />
          </div>
        </figure>
      </div>

      <SystemDiagram />
    </section>
  );
}
