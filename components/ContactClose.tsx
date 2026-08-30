import Image from "next/image";

import { profile } from "@/lib/content";
import ResumeButton from "@/components/ResumeButton";

export default function ContactClose() {
  return (
    <section id="contact" className="scroll-mt-16 border-t border-line">
      <div className="shell py-14 sm:py-20 lg:py-[100px]">
        {/* The only warm image on the site, and the last thing you see. */}
        <div className="grid items-center gap-9 md:grid-cols-[360px_1fr] md:gap-[52px]">
          <figure className="border border-line bg-panel p-2.5">
            <Image
              src={profile.portrait}
              alt={`${profile.name} at a waterfront at sunset.`}
              width={760}
              height={760}
              sizes="(max-width: 768px) 100vw, 360px"
              className="h-auto w-full"
            />
            <figcaption className="px-0.5 pb-0.5 pt-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-faint">
              Off the clock
            </figcaption>
          </figure>

          <div>
            <span className="nodeid">[client → gateway]</span>
            <h2 className="sec-title max-w-[20ch]">
              Have something that needs to hold up under load?
            </h2>
            <p className="mt-4 max-w-prose text-dim">
              Backend architecture, reliability work, or a product that needs its first
              engineers — those are the conversations I answer fastest.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-6 inline-block border-b border-signal/35 pb-1 font-mono text-[clamp(17px,2.6vw,27px)] tracking-[-0.035em] text-signal transition-colors hover:border-signal"
            >
              {profile.email}
            </a>
            <div className="mt-7">
              <ResumeButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
