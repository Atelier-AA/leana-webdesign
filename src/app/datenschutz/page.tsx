import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: siteConfig.legal.datenschutz.title,
  alternates: { canonical: "/datenschutz" },
};

export default function DatenschutzPage() {
  const { datenschutz } = siteConfig.legal;

  return (
    <>
      <Breadcrumbs items={[{ label: datenschutz.title }]} />
      <PageHero title={datenschutz.title} subtitle={`Stand: ${datenschutz.updated}`} />
      <Container className="max-w-3xl space-y-10 pb-20 md:pb-28">
        {datenschutz.sections.map((section) => (
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
