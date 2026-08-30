import { education, profile, socials } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="shell flex flex-wrap items-center justify-between gap-x-7 gap-y-4 py-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
          © {new Date().getFullYear()} {profile.name}
        </span>

        <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint">
          {education.degree} · {education.years}
        </span>

        <div className="flex gap-7">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint transition-colors hover:text-signal"
            >
              {social.name}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-faint transition-colors hover:text-signal"
          >
            Résumé
          </a>
        </div>
      </div>
    </footer>
  );
}
