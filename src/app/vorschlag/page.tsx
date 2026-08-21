import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { AreaTabs } from "./AreaTabs";

export const metadata: Metadata = {
  title: "Vorschlag — grosses, editorielles Layout",
  description: "Ein gestalterischer Alternativ-Vorschlag für leana-me.ch im Stil eines editoriellen Portfolio-Templates.",
  alternates: { canonical: "/vorschlag" },
  robots: { index: false, follow: false },
};

const cream = "#f6ead9";
const ink = "#17140f";

export default function VorschlagPage() {
  const { hero, about, areas, experiments, learning, contactSection, contact, navigation, footer, business } =
    siteConfig;

  const navLinks = [{ label: "Start", href: "/vorschlag" }, ...navigation];

  return (
    <div style={{ backgroundColor: cream, color: ink }} className="font-sans">
      {/* ---------- HERO ---------- */}
      <section className="relative flex min-h-[100vh] flex-col justify-between overflow-hidden">
        <Image
          src={hero.media.src ?? "/images/hero-workspace.jpg"}
          alt={hero.media.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />

        {/* nav over hero */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-8 text-white md:px-12 md:pt-10">
          <span className="font-display text-lg tracking-wide">{business.name.toUpperCase()}</span>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm tracking-wide text-white/85 transition-colors hover:text-white"
          >
            ORIGINAL <span aria-hidden>↗</span>
          </Link>
        </div>

        {/* headline */}
        <div className="relative z-10 flex-1 px-6 py-10 md:px-12">
          <h1 className="font-display font-medium uppercase leading-[0.92] text-white">
            <span className="block text-[10.5vw] md:text-[9vw]">Ausprobieren</span>
            <span className="mt-2 block pl-[8vw] text-[10.5vw] leading-none text-white/70 md:mt-4 md:pl-[18vw] md:text-[6vw]">
              +
            </span>
            <span className="mt-2 block pl-[10vw] text-[10.5vw] md:mt-4 md:pl-[22vw] md:text-[9vw]">Verstehen</span>
          </h1>
        </div>

        {/* bottom row */}
        <div className="relative z-10 flex flex-col gap-6 px-6 pb-10 text-white md:flex-row md:items-end md:justify-between md:px-12 md:pb-14">
          <p className="max-w-sm text-sm leading-relaxed text-white/80">{hero.subheadline}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={hero.ctaPrimary.href}
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-opacity hover:opacity-85"
            >
              {hero.ctaPrimary.label}
            </Link>
            {hero.ctaSecondary ? (
              <Link
                href={hero.ctaSecondary.href}
                className="flex items-center gap-2 text-sm text-white/85 transition-colors hover:text-white"
              >
                <span aria-hidden>→</span> {hero.ctaSecondary.label}
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      {/* ---------- STICKY NAV (post-hero) ---------- */}
      <div
        className="sticky top-0 z-40 flex items-center justify-between border-b px-6 py-4 backdrop-blur md:px-12"
        style={{ backgroundColor: `${cream}f2`, borderColor: "#e4d6bf" }}
      >
        <span className="font-display text-base tracking-wide">{business.name.toUpperCase()}</span>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="transition-opacity hover:opacity-60">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/" className="text-sm underline underline-offset-4 md:hidden">
          Original
        </Link>
      </div>

      {/* ---------- INTRO TEASER ---------- */}
      <section className="px-6 py-24 md:px-12 md:py-36">
        <div className="grid gap-10 md:grid-cols-[minmax(0,380px)_1fr] md:items-center md:gap-20">
          <div className="overflow-hidden rounded-sm" style={{ aspectRatio: "4 / 5" }}>
            <Image
              src={about.media.src ?? "/images/leana-illustration.svg"}
              alt={about.media.alt}
              width={480}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="max-w-lg text-lg leading-relaxed md:text-xl">{about.excerpt}</p>
            <Link
              href="/warum-ich-das-mache"
              className="mt-8 inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-60"
            >
              <span aria-hidden>→</span> Warum ich das mache
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- COLLAGE + HEADING ---------- */}
      <section className="relative px-6 pb-32 md:px-12">
        <div className="relative mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
          <div className="col-span-1 translate-y-6">
            <Image
              src="/images/hero-workspace.jpg"
              alt=""
              width={500}
              height={640}
              className="h-full w-full rounded-sm object-cover"
              style={{ aspectRatio: "4 / 5" }}
            />
          </div>
          <div className="col-span-1 -translate-y-4">
            <Image
              src="/images/project-cafe.jpg"
              alt=""
              width={500}
              height={640}
              className="h-full w-full rounded-sm object-cover"
              style={{ aspectRatio: "4 / 5" }}
            />
          </div>
          <div className="col-span-1 translate-y-10">
            <Image
              src="/images/project-coiffeur.jpg"
              alt=""
              width={500}
              height={640}
              className="h-full w-full rounded-sm object-cover"
              style={{ aspectRatio: "4 / 5" }}
            />
          </div>
          <div className="col-span-1 -translate-y-2">
            <Image
              src="/images/project-handwerk.jpg"
              alt=""
              width={500}
              height={640}
              className="h-full w-full rounded-sm object-cover"
              style={{ aspectRatio: "4 / 5" }}
            />
          </div>
        </div>

        <div className="relative z-10 mx-auto mt-16 max-w-2xl text-center md:mt-24">
          <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
            Eine Sammlung von Ideen,
            <br />
            <span style={{ color: "#8a8073" }}>die beim Ausprobieren entstanden sind.</span>
          </h2>
        </div>
      </section>

      {/* ---------- NUMBERED EXPERIMENTS ---------- */}
      {experiments.items.map((item, index) => (
        <section key={item.slug} className="relative flex min-h-screen flex-col justify-between overflow-hidden">
          <Image
            src={item.media.src ?? "/images/hero-workspace.jpg"}
            alt={item.media.alt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/10" />

          <div className="relative z-10 px-6 pt-16 md:px-12 md:pt-20">
            <span className="font-display text-[20vw] leading-none text-white/90 md:text-[10vw]">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="relative z-10 flex flex-col gap-6 px-6 pb-14 text-white md:flex-row md:items-end md:justify-between md:px-12 md:pb-20">
            <h3 className="font-display text-5xl leading-[0.95] md:text-7xl">{item.title}</h3>
            <div className="max-w-sm md:text-right">
              <p className="text-base text-white/85 md:text-lg">{item.experimentQuestion}</p>
              {item.liveUrl ? (
                <Link
                  href={item.liveUrl.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-white/90 underline underline-offset-4 transition-colors hover:text-white md:justify-end"
                >
                  {item.liveUrl.label} <span aria-hidden>↗</span>
                </Link>
              ) : null}
            </div>
          </div>
        </section>
      ))}

      {/* ---------- AREAS / SERVICES ---------- */}
      <section className="px-6 py-28 md:px-12 md:py-40">
        <p className="mb-10 text-xs uppercase tracking-[0.2em]" style={{ color: "#8a8073" }}>
          {areas.eyebrow}
        </p>
        <AreaTabs items={areas.items} />
      </section>

      {/* ---------- LEARNING / NEWS CARDS ---------- */}
      <section className="border-t px-6 py-24 md:px-12 md:py-32" style={{ borderColor: "#e4d6bf" }}>
        <p className="mb-10 text-xs uppercase tracking-[0.2em]" style={{ color: "#8a8073" }}>
          {learning.eyebrow}
        </p>
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {learning.items.slice(0, 4).map((item) => (
            <div key={item.title} className="border-t pt-6" style={{ borderColor: "#e4d6bf" }}>
              <h3 className="font-display text-xl md:text-2xl">{item.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: "#6b6357" }}>
                {item.teaser}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- BIG CTA ---------- */}
      <section className="relative overflow-hidden px-6 py-28 md:px-12 md:py-40">
        <h2 className="font-display text-5xl leading-[0.98] md:text-8xl">
          Hast du eine Idee,
          <br />
          <span className="block md:pl-[10vw]">die ich ausprobieren</span>
          <span className="block md:pl-[18vw]">sollte?</span>
        </h2>
        <div className="mt-10 flex flex-col gap-4 md:mt-14 md:max-w-sm">
          <p className="text-sm leading-relaxed" style={{ color: "#6b6357" }}>
            {contactSection.subtitle} {contactSection.responseTime}.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex w-fit items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-85"
            style={{ backgroundColor: ink }}
          >
            Schreib mir <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="relative px-6 pt-20 text-white md:px-12" style={{ backgroundColor: "#75695a" }}>
        <div className="flex flex-col gap-14 pb-16 md:flex-row md:justify-between">
          <nav className="flex flex-col gap-2">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-3xl text-white/70 transition-colors hover:text-white md:text-4xl"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="space-y-6 text-sm text-white/80">
            <div>
              <p className="text-white">{contact.address.city}, {contact.address.country}</p>
              <a href={`mailto:${contact.email}`} className="underline underline-offset-4 hover:text-white">
                {contact.email}
              </a>
            </div>
            {footer.legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-white/15 py-10 font-display leading-none">
          <span className="text-[13vw] md:text-[7vw]">{footer.copyrightName.toUpperCase()}</span>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/15 py-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {footer.copyrightName} — Alle Rechte vorbehalten</span>
          <Link href="/" className="underline underline-offset-4 hover:text-white/90">
            Zur Originalseite
          </Link>
        </div>
      </footer>
    </div>
  );
}
