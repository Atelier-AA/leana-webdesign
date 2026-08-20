import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import { PageHero } from "@/components/layout/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Learning } from "@/components/sections/Learning";

export const metadata: Metadata = {
  title: siteConfig.learning.title,
  description: siteConfig.learning.subtitle,
  alternates: { canonical: "/was-ich-lerne" },
};

export default function WasIchLernePage() {
  const { learning } = siteConfig;

  return (
    <>
      <Breadcrumbs items={[{ label: "Was ich lerne" }]} />
      <PageHero eyebrow={learning.eyebrow} title={learning.title} subtitle={learning.subtitle} />
      <Learning showHeading={false} />
    </>
  );
}
