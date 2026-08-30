import { profile } from "@/lib/content";

export default function ResumeButton({ label = "Download résumé" }: { label?: string }) {
  return (
    <a
      href={profile.resumeUrl}
      download
      className="inline-flex items-center gap-2.5 border border-signal/[0.42] bg-signal/[0.05] px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-signal transition-colors hover:border-signal hover:bg-signal/[0.11]"
    >
      {label}
      <span className="border-l border-line-hi pl-2.5 text-[10px] normal-case tracking-[0.1em] text-faint">
        {profile.resumeNote}
      </span>
    </a>
  );
}
