import { siteConfig } from "@/config/site.config";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Reasons } from "@/components/sections/Reasons";
import { CtaBand } from "@/components/sections/CtaBand";

export default function HomePage() {
  const { features, hero, contactSection } = siteConfig;

  return (
    <>
      <Hero />
      {features.services ? (
        <Services footerLink={{ label: "Alle Leistungen im Detail", href: "/leistungen" }} />
      ) : null}
      {features.about ? <About cta={{ label: "Mehr über mich", href: "/ueber-mich" }} /> : null}
      {features.projects ? (
        <Projects
          limit={3}
          footerLink={{ label: "Alle Beispielprojekte ansehen", href: "/projekte" }}
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
