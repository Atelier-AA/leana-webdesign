import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: siteConfig.legal.impressum.title,
  alternates: { canonical: "/impressum" },
};

export default function ImpressumPage() {
  const { impressum } = siteConfig.legal;

  return (
    <>
      <Breadcrumbs items={[{ label: impressum.title }]} />
      <PageHero title={impressum.title} subtitle={`Stand: ${impressum.updated}`} />
      <Container className="max-w-3xl space-y-10 pb-20 md:pb-28">
        {impressum.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-display text-lg font-medium">{section.heading}</h2>
            <div className="mt-3 space-y-2 text-muted-foreground">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}
