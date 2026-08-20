import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Services } from "@/components/sections/Services";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CtaBand } from "@/components/sections/CtaBand";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: siteConfig.services.title,
  description: siteConfig.services.subtitle,
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  const { services, contactSection, hero } = siteConfig;

  return (
    <>
      <Breadcrumbs items={[{ label: "Leistungen" }]} />
      <PageHero
        eyebrow={services.eyebrow}
        title={services.title}
        subtitle={services.subtitle}
        banner={{
          type: "image",
          src: "/images/services-banner.jpg",
          alt: "Gemütlicher Arbeitsplatz von oben mit Laptop, Wireframe-Skizze, Lichterkette und einer Tasse Kakao",
          aspectRatio: "16 / 6",
        }}
      />
      <Services showHeading={false} />
      {services.process.length > 0 ? <ProcessSteps items={services.process} /> : null}
      {services.note ? (
        <Container className="pb-20 md:pb-28">
          <p className="max-w-2xl text-sm italic text-muted-foreground">{services.note}</p>
        </Container>
      ) : null}
      <CtaBand
        title={contactSection.title}
        subtitle={contactSection.subtitle}
        ctaLabel={hero.ctaPrimary.label}
        ctaHref="/kontakt"
      />
    </>
  );
}
