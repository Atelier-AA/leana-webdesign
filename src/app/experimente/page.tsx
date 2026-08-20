import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Areas } from "@/components/sections/Areas";
import { Experiments } from "@/components/sections/Experiments";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";
import { renderRichText } from "@/lib/richtext";

export const metadata: Metadata = {
  title: siteConfig.areas.title,
  description: siteConfig.areas.subtitle,
  alternates: { canonical: "/experimente" },
};

export default function ExperimentePage() {
  const { areas, experiments, contactSection, hero } = siteConfig;

  return (
    <>
      <Breadcrumbs items={[{ label: "Experimente" }]} />
      <PageHero eyebrow={areas.eyebrow} title={areas.title} subtitle={areas.subtitle} />
      <Areas showHeading={false} />

      {experiments.intro.length > 0 ? (
        <Container className="pt-4">
          <h2 className="max-w-2xl text-balance font-display text-2xl font-medium leading-[1.15]">
            {experiments.title}
          </h2>
          <div className="mt-4 max-w-2xl space-y-3 text-pretty text-muted-foreground">
            {experiments.intro.map((paragraph) => (
              <p key={paragraph}>{renderRichText(paragraph)}</p>
            ))}
          </div>
        </Container>
      ) : null}

      <Experiments showHeading={false} />

      <CtaBand
        title={contactSection.title}
        subtitle={contactSection.subtitle}
        ctaLabel={hero.ctaPrimary.label}
        ctaHref="/kontakt"
      />
    </>
  );
}
