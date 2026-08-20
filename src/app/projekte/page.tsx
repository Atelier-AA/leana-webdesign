import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Projects } from "@/components/sections/Projects";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: siteConfig.projects.title,
  description: siteConfig.projects.subtitle,
  alternates: { canonical: "/projekte" },
};

export default function ProjektePage() {
  const { projects, contactSection, hero } = siteConfig;

  return (
    <>
      <Breadcrumbs items={[{ label: "Projekte" }]} />
      <PageHero
        eyebrow={projects.eyebrow}
        title={projects.title}
        subtitle={projects.subtitle}
      />
      <Projects showHeading={false} />
      <CtaBand
        title={contactSection.title}
        subtitle={contactSection.subtitle}
        ctaLabel={hero.ctaPrimary.label}
        ctaHref="/kontakt"
      />
    </>
  );
}
