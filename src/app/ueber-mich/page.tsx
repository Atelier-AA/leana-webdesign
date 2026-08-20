import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { About } from "@/components/sections/About";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: siteConfig.about.title,
  description: siteConfig.about.body[0],
  alternates: { canonical: "/ueber-mich" },
};

export default function UeberMichPage() {
  const { about, contactSection, hero } = siteConfig;

  return (
    <>
      <Breadcrumbs items={[{ label: "Über mich" }]} />
      <PageHero eyebrow={about.eyebrow} title={about.title} />
      <About showHeading={false} cta={{ label: hero.ctaPrimary.label, href: "/kontakt" }} />
      <CtaBand
        title={contactSection.title}
        subtitle={contactSection.subtitle}
        ctaLabel={hero.ctaPrimary.label}
        ctaHref="/kontakt"
      />
    </>
  );
}
