import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: siteConfig.contactSection.title,
  description: siteConfig.contactSection.subtitle,
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  const { contactSection } = siteConfig;

  return (
    <>
      <Breadcrumbs items={[{ label: "Kontakt" }]} />
      <PageHero
        eyebrow={contactSection.eyebrow}
        title={contactSection.title}
        subtitle={contactSection.subtitle}
      />
      <Contact showHeading={false} />
    </>
  );
}
