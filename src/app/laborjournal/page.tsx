import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Caveat } from "next/font/google";
import { siteConfig } from "@/config/site.config";

const caveat = Caveat({ subsets: ["latin"], weight: "600" });

export const metadata: Metadata = {
  title: "Laborjournal — Vorschlag",
  description:
    "Ein zweiter Design-Vorschlag für leana-me.ch: ein offen geführtes Experiment-Logbuch statt eines Agentur-Portfolios.",
  alternates: { canonical: "/laborjournal" },
  robots: { index: false, follow: false },
};

const cream = "#fafaf9";
const ink = "#16181c";
const inkSoft = "#52585c";
const accent = "#0f8b78";
const accentSoft = "#e3f2ee";
const border = "#e1e4e1";

const logStatus: Record<string, { label: string; tone: "done" | "progress" }> = {
  "cafe-sonnenblick": { label: "FUNKTIONIERT", tone: "done" },
  "coiffeur-haarwerk": { label: "FUNKTIONIERT", tone: "done" },
  "handwerk-meier": { label: "NOCH IN ARBEIT", tone: "progress" },
};

const logImage: Record<string, string> = {
  "cafe-sonnenblick": "/images/log-elindo.jpg",
  "coiffeur-haarwerk": "/images/log-atelier.jpg",
  "handwerk-meier": "/images/log-handwerk.jpg",
};

const logUrl: Record<string, string> = {
  "cafe-sonnenblick": "elindo.ch",
  "coiffeur-haarwerk": "atelier-aa-ch.vercel.app",
  "handwerk-meier": "localhost:8000",
};

const logNote: Record<string, string> = {
  "cafe-sonnenblick": "Struktur, Texte, Bilder — die KI liefert schnell Ideen. Ein gutes Ergebnis entsteht erst, wenn ich auswähle und selbst entscheide.",
  "coiffeur-haarwerk": "Diesmal ging's ums Reduzieren: wie wenig braucht eine Seite wirklich, um trotzdem klar zu wirken?",
  "handwerk-meier": "Bewusst nichts Ausgefallenes — nur schauen, ob KI beim Strukturieren wirklich hilft.",
};

export default function LaborjournalPage() {
  const { hero, areas, experiments, learning, contactSection, contact, navigation, footer, business } = siteConfig;

  return (
    <div style={{ backgroundColor: cream, color: ink }} className="font-sans">
      {/* ---------- NAV ---------- */}
      <div
        className="flex items-center justify-between px-6 py-6 md:px-12"
        style={{ borderBottom: `1px solid ${border}` }}
      >
        <span className="font-display text-lg font-semibold">{business.name}</span>
        <nav className="hidden items-center gap-8 text-sm md:flex" style={{ color: inkSoft }}>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-70">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/kontakt"
          className="rounded-md px-5 py-2.5 text-sm font-medium"
          style={{ backgroundColor: ink, color: cream }}
        >
          Schreib mir
        </Link>
      </div>

      {/* ---------- HERO ---------- */}
      <section className="px-6 pb-28 pt-20 md:px-12 md:pt-24">
        <div className="mb-7 flex flex-wrap items-center gap-4">
          <span className={caveat.className} style={{ fontSize: 26, color: accent, transform: "rotate(-2deg)", display: "inline-block" }}>
            mein Experiment-Logbuch —
          </span>
          <span
            className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: accentSoft, color: accent }}
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} />
            STATUS: LÄUFT
          </span>
        </div>

        <h1 className="font-display max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
          {hero.headline}
        </h1>

        <p className="mt-8 max-w-lg text-lg leading-relaxed" style={{ color: inkSoft }}>
          {hero.subheadline}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link
            href={hero.ctaPrimary.href}
            className="rounded-md px-7 py-3.5 text-sm font-medium"
            style={{ backgroundColor: ink, color: cream }}
          >
            {hero.ctaPrimary.label}
          </Link>
          <a href="#logbuch" className="text-sm" style={{ color: inkSoft, borderBottom: `1px solid #c7ccc9` }}>
            → Alle Einträge im Logbuch
          </a>
        </div>
      </section>

      {/* ---------- WAS ICH AUSPROBIERE ---------- */}
      <section className="px-6 pb-28 md:px-12">
        <p className="mb-10 text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: accent }}>
          {areas.eyebrow}
        </p>
        <div
          className="grid grid-cols-2 gap-8 pt-8 md:grid-cols-4 md:gap-10"
          style={{ borderTop: `1px solid ${border}` }}
        >
          {areas.items.map((item) => (
            <div key={item.title}>
              <span className="font-display block text-4xl font-semibold" style={{ color: "#d8dbd8" }}>
                {String(areas.items.indexOf(item) + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display mt-3 mb-2 text-lg">{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: inkSoft }}>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- LOGBUCH ---------- */}
      <section id="logbuch" className="px-6 pb-24 md:px-12">
        <p className="mb-10 text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: accent }}>
          Logbuch
        </p>

        <div className="flex flex-col gap-16">
          {experiments.items.map((item, index) => {
            const status = logStatus[item.slug];
            const rotate = index % 2 === 0 ? "-1.5deg" : "1deg";
            return (
              <div
                key={item.slug}
                className="grid gap-10 pb-16 md:grid-cols-[1fr_260px] md:gap-14"
                style={{
                  borderBottom:
                    index < experiments.items.length - 1 ? `1px solid ${border}` : "none",
                }}
              >
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="font-display text-sm" style={{ color: "#b5ac9e" }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-2xl md:text-[26px]">{item.title}</h3>
                    {status ? (
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold"
                        style={
                          status.tone === "done"
                            ? { backgroundColor: accentSoft, color: accent }
                            : { backgroundColor: "#f7ecd9", color: "#93650f" }
                        }
                      >
                        {status.label}
                      </span>
                    ) : null}
                  </div>
                  <p className="mb-5 max-w-md text-[15px]" style={{ color: inkSoft }}>
                    {item.experimentQuestion}
                  </p>

                  <div className="overflow-hidden rounded-lg" style={{ border: `1px solid ${border}` }}>
                    <div
                      className="flex items-center gap-1.5 px-3.5 py-2.5"
                      style={{ backgroundColor: "#f2f0ec", borderBottom: `1px solid ${border}` }}
                    >
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#d8dbd8" }} />
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#d8dbd8" }} />
                      <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#d8dbd8" }} />
                      <span className="ml-2.5 text-xs" style={{ color: "#8a8073" }}>
                        {logUrl[item.slug]}
                      </span>
                    </div>
                    <Image
                      src={logImage[item.slug]}
                      alt={`Screenshot: ${item.title}`}
                      width={1100}
                      height={688}
                      className="block h-auto w-full"
                    />
                  </div>

                  {item.liveUrl ? (
                    <a
                      href={item.liveUrl.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-sm"
                      style={{ borderBottom: "1px solid #c7ccc9" }}
                    >
                      {item.liveUrl.label} ↗
                    </a>
                  ) : null}
                </div>

                <div className="pt-2 md:pt-14">
                  <p
                    className={caveat.className}
                    style={{ fontSize: 22, lineHeight: 1.3, color: accent, transform: `rotate(${rotate})`, margin: 0 }}
                  >
                    {logNote[item.slug]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ---------- WAS ICH LERNE ---------- */}
      <section className="px-6 pb-28 md:px-12">
        <p className="mb-10 text-xs font-semibold uppercase tracking-[0.14em]" style={{ color: accent }}>
          {learning.eyebrow}
        </p>
        <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">
          {learning.items.slice(0, 4).map((item) => (
            <div key={item.title} className="pt-6" style={{ borderTop: `1px solid ${border}` }}>
              <h3 className="font-display text-xl">{item.title}</h3>
              <p className="mt-2.5 max-w-md text-sm leading-relaxed" style={{ color: inkSoft }}>
                {item.teaser}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- TEAL CTA ---------- */}
      <section className="px-6 py-24 text-center md:px-12 md:py-32" style={{ backgroundColor: accent, color: cream }}>
        <h2 className="font-display mx-auto max-w-2xl text-4xl font-semibold leading-[1.15] md:text-5xl">
          {contactSection.title}
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed" style={{ color: "rgba(250,250,249,0.8)" }}>
          {contactSection.subtitle} {contactSection.responseTime}.
        </p>
        <Link
          href="/kontakt"
          className="mt-8 inline-flex rounded-md px-7 py-3.5 text-sm font-semibold"
          style={{ backgroundColor: cream, color: accent }}
        >
          Schreib mir →
        </Link>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="px-6 pb-8 pt-14 md:px-12" style={{ backgroundColor: ink, color: cream }}>
        <div
          className="flex flex-col gap-8 pb-10 md:flex-row md:items-start md:justify-between"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}
        >
          <div>
            <span className="font-display text-xl font-semibold">{business.name}</span>
            <p className="mt-3 max-w-xs text-sm leading-relaxed" style={{ color: "rgba(250,250,249,0.6)" }}>
              {hero.headline}
            </p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm" style={{ color: "rgba(250,250,249,0.75)" }}>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="text-sm md:text-right" style={{ color: "rgba(250,250,249,0.75)" }}>
            <a href={`mailto:${contact.email}`} className="block hover:text-white">
              {contact.email}
            </a>
            <p className="mt-1.5" style={{ color: "rgba(250,250,249,0.5)" }}>
              {contact.address.city}, Aargau
            </p>
          </div>
        </div>
        <div
          className="flex flex-col gap-2 pt-6 text-xs md:flex-row md:items-center md:justify-between"
          style={{ color: "rgba(250,250,249,0.4)" }}
        >
          <span>© {new Date().getFullYear()} {footer.copyrightName}. Alle Rechte vorbehalten.</span>
          <Link href="/" className="hover:text-white" style={{ color: "rgba(250,250,249,0.55)" }}>
            Zur Originalseite
          </Link>
        </div>
      </footer>
    </div>
  );
}
