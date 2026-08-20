import { siteConfig } from "@/config/site.config";
import { Hero } from "@/components/sections/Hero";
import { Areas } from "@/components/sections/Areas";
import { About } from "@/components/sections/About";
import { Experiments } from "@/components/sections/Experiments";
import { Reasons } from "@/components/sections/Reasons";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  const { features, hero, contactSection } = siteConfig;

  return (
    <>
      <Hero />
      {features.areas ? (
        <Areas footerLink={{ label: "Alles, was ich ausprobiere", href: "/experimente" }} />
      ) : null}
      {features.about ? (
        <About
          mode="teaser"
          cta={{ label: "Warum ich das mache", href: "/warum-ich-das-mache" }}
        />
      ) : null}
      {features.experiments ? (
        <Experiments
          limit={3}
          footerLink={{ label: "Alle Experimente ansehen", href: "/experimente" }}
        />
      ) : null}
      {features.reasons ? <Reasons /> : null}
      {features.contact ? (
        <CtaBand
          title={contactSection.title}
          subtitle={contactSection.subtitle}
          ctaLabel={hero.ctaPrimary.label}
          ctaHref="/kontakt"
        />
      ) : null}
    </>
  );
}
