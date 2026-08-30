import type { Metadata } from "next";
import type { ReactNode } from "react";

import {
  blogs,
  certifications,
  education,
  experience,
  impact,
  profile,
  resume,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Résumé",
  description: `Résumé of ${profile.name}, ${profile.role} at ${profile.company}.`,
  robots: { index: false },
};

/**
 * One-page résumé, print-first.
 *
 * Palette is the site's mint darkened for paper — #0E7360 holds contrast on
 * white where #5bf2b8 would vanish. Two columns to fit one page, but the
 * sidebar comes AFTER the main column in the DOM, so text extraction still
 * reads header → experience → skills rather than interleaving them.
 */
export default function Resume() {
  return (
    <div className="resume-root bg-white text-[#15191b]">
      <article className="resume-sheet mx-auto w-full max-w-[720px] px-8 py-10">
        {/* Header. The contact rows are left-aligned inside their own column so
            the icons form a straight rail — right-aligning them left a ragged
            edge that made the whole header look off-balance. */}
        <header className="border-b-2 border-[#0E7360] pb-3">
          <div className="flex items-start justify-between gap-8">
            <div>
              <h1 className="font-mono text-[29px] font-semibold leading-none tracking-[-0.035em]">
                {profile.name}
              </h1>
              <p className="mt-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-[#0E7360]">
                {profile.role} · {profile.company}
              </p>
            </div>

            <div className="grid shrink-0 gap-[5px] pt-0.5">
              <ContactRow icon={<MailIcon />} text={profile.email} href={`mailto:${profile.email}`} />
              <ContactRow icon={<PhoneIcon />} text={profile.phone} />
              <ContactRow icon={<PinIcon />} text={profile.location} />
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5">
            {resume.links.map((link) => (
              <a key={link.label} href={link.url} className="flex items-center gap-1.5">
                <span
                  aria-hidden
                  className="grid h-[13px] min-w-[19px] place-items-center rounded-[2px] bg-[#0E7360] px-[3px] font-mono text-[7.5px] font-semibold leading-none text-white"
                >
                  {link.mark}
                </span>
                <span className="text-[9.5px] leading-none text-[#3a4144]">
                  <span className="sr-only">{link.label}: </span>
                  {link.text}
                </span>
              </a>
            ))}
          </div>
        </header>

        {/* Summary */}
        <p className="mt-4 text-[11px] leading-[1.6] text-[#3a4144]">
          {resume.summary}
        </p>

        {/* Measured results — the strip that carries over from the site. */}
        <div className="mt-3.5 grid grid-cols-3 gap-px overflow-hidden rounded-[2px] bg-[#dfe9e6]">
          {impact.map((item) => (
            <div key={item.node} className="bg-[#f2f8f6] px-3 py-2">
              <p className="font-mono text-[18px] font-semibold leading-none tracking-[-0.03em] text-[#0E7360]">
                {item.value}
              </p>
              <p className="mt-1 text-[9px] font-medium uppercase leading-[1.3] tracking-[0.1em] text-[#5d6669]">
                {item.label}
              </p>
              <p className="mt-0.5 font-mono text-[8.5px] uppercase tracking-[0.12em] text-[#8b9497]">
                {item.where}
              </p>
            </div>
          ))}
        </div>

        {/* Body: main column first in the DOM, sidebar second. Publications and
            education live on the left — long titles need the width, and it
            balances the two columns to roughly equal height. */}
        <div className="mt-4 grid grid-cols-[1fr_205px] gap-x-6">
          <div className="pr-1">
            <Heading>Experience</Heading>
            <div className="space-y-3">
              {experience.map((job) => (
                <div key={`${job.company}-${job.role}`} className="break-inside-avoid">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[12px] font-semibold leading-snug">
                      {job.role}
                      <span className="font-normal text-[#0E7360]"> — {job.company}</span>
                    </h3>
                    <span className="shrink-0 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.06em] text-[#7b8487] [font-variant-numeric:tabular-nums]">
                      {job.start} – {job.end}
                    </span>
                  </div>
                  {job.location && (
                    <p className="font-mono text-[9px] tracking-[0.04em] text-[#98a1a3]">
                      {job.location}
                    </p>
                  )}
                  <ul className="mt-1 space-y-[2px]">
                    {job.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="relative pl-2.5 text-[10.5px] leading-[1.5] text-[#3a4144] before:absolute before:left-0 before:top-[0.52em] before:h-[3px] before:w-[3px] before:bg-[#0E7360]"
                      >
                        <Emphasise text={highlight} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <Heading className="mt-3.5">Publications</Heading>
            <ul className="space-y-[3px]">
              {blogs.map((blog) => (
                <li
                  key={blog.slug}
                  className="relative pl-2.5 text-[10.5px] leading-[1.5] text-[#3a4144] before:absolute before:left-0 before:top-[0.52em] before:h-[3px] before:w-[3px] before:bg-[#0E7360]"
                >
                  <a href={blog.url} className="font-semibold text-[#15191b]">
                    “{blog.title}”
                  </a>
                  <span className="text-[#7b8487]"> — GeeksforGeeks</span>
                </li>
              ))}
            </ul>

            <Heading className="mt-3.5">Education</Heading>
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-[10.5px] leading-[1.5] text-[#3a4144]">
                <span className="font-semibold text-[#15191b]">{education.degree}</span>
                {" — "}
                {education.school}
              </p>
              <span className="shrink-0 whitespace-nowrap font-mono text-[9px] text-[#7b8487]">
                {education.years}
              </span>
            </div>
          </div>

          <aside className="border-l border-[#e4ebeb] pl-6">
            <Heading>Skills</Heading>
            <div className="space-y-[3px]">
              {resume.skills.map((group) => (
                <p key={group.group} className="text-[9.5px] leading-[1.55] text-[#3a4144]">
                  <span className="font-mono font-semibold text-[#15191b]">
                    {group.group}
                  </span>
                  <br />
                  {group.items.join(" · ")}
                </p>
              ))}
            </div>

            <Heading className="mt-4">Competitive Programming</Heading>
            <ul className="space-y-[3px]">
              {resume.competitive.map((line) => (
                <li key={line} className="text-[9.5px] leading-[1.55] text-[#3a4144]">
                  <Emphasise text={line} />
                </li>
              ))}
            </ul>

            <Heading className="mt-4">Awards</Heading>
            <ul className="space-y-[3px]">
              {resume.awardLines.map((line) => (
                <li key={line} className="text-[9.5px] leading-[1.55] text-[#3a4144]">
                  {line}
                </li>
              ))}
            </ul>

            <Heading className="mt-4">Certifications</Heading>
            <p className="text-[9.5px] leading-[1.55] text-[#3a4144]">
              {certifications.join(" · ")}
            </p>
          </aside>
        </div>
      </article>
    </div>
  );
}

function ContactRow({
  icon,
  text,
  href,
}: {
  icon: ReactNode;
  text: string;
  href?: string;
}) {
  const body = (
    <>
      <span className="mt-[1px] shrink-0 text-[#0E7360]">{icon}</span>
      <span className="text-[9.5px] leading-[1.35] text-[#4c5457]">{text}</span>
    </>
  );
  return href ? (
    <a href={href} className="flex items-start gap-1.5">
      {body}
    </a>
  ) : (
    <span className="flex items-start gap-1.5">{body}</span>
  );
}

/* Hand-drawn so the set stays visually consistent and prints crisply at 10px.
   Stroke-based, inheriting currentColor. */
function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="9.5"
      height="9.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function MailIcon() {
  return (
    <Icon>
      <rect x="1.4" y="3.4" width="13.2" height="9.2" rx="1.2" />
      <path d="M1.7 4.4 8 8.7l6.3-4.3" />
    </Icon>
  );
}

function PhoneIcon() {
  return (
    <Icon>
      <path d="M4.1 2.3 6 2.7l.9 2.4-1.4 1a8.4 8.4 0 0 0 3.4 3.4l1-1.4 2.4.9.4 1.9a1.1 1.1 0 0 1-1.1 1.3A10.9 10.9 0 0 1 2.8 3.4a1.1 1.1 0 0 1 1.3-1.1Z" />
    </Icon>
  );
}

function PinIcon() {
  return (
    <Icon>
      <path d="M8 14.4s5-4.7 5-8a5 5 0 0 0-10 0c0 3.3 5 8 5 8Z" />
      <circle cx="8" cy="6.3" r="1.8" />
    </Icon>
  );
}

function Heading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`mb-1.5 border-b border-[#dce3e3] pb-[3px] font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-[#0E7360] ${className}`}
    >
      {children}
    </h2>
  );
}

/** Numbers are why a recruiter stops scanning, so let them carry weight. */
function Emphasise({ text }: { text: string }) {
  const parts = text.split(/(~?\+?\d[\d,.]*\s?%|\d{1,3}(?:,\d{3})+|\brating \d+\b)/g);
  return (
    <>
      {parts.map((part, i) =>
        /^(~?\+?\d[\d,.]*\s?%|\d{1,3}(?:,\d{3})+|rating \d+)$/.test(part) ? (
          <strong key={i} className="font-semibold text-[#0E7360]">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
