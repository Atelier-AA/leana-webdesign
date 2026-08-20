import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          {hero.eyebrow ? (
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.14em] text-accent">
              {hero.eyebrow}
            </p>
          ) : null}
          <h1 className="text-display text-balance font-display font-medium leading-[1.03] tracking-tight">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-lg text-muted-foreground">
            {hero.subheadline}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Button>
            {hero.ctaSecondary ? (
              <Button href={hero.ctaSecondary.href} variant="ghost">
                {hero.ctaSecondary.label}
              </Button>
            ) : null}
          </div>
        </div>

        <MediaPlaceholder media={hero.media} priority sizes="(min-width: 1024px) 40vw, 100vw" />
      </Container>
    </section>
  );
}
