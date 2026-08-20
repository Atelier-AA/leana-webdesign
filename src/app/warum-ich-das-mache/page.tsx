import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { About } from "@/components/sections/About";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: siteConfig.about.title,
  description: siteConfig.about.subtitle ?? siteConfig.about.body[0],
  alternates: { canonical: "/warum-ich-das-mache" },
};

export default function WarumIchDasMachePage() {
  const { about, contactSection, hero } = siteConfig;

  return (
    <>
      <Breadcrumbs items={[{ label: "Warum ich das mache" }]} />
      <PageHero eyebrow={about.eyebrow} title={about.title} subtitle={about.subtitle} />
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
