import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

export function About({
  showHeading = true,
  cta,
}: {
  showHeading?: boolean;
  cta?: { label: string; href: string };
}) {
  const { about } = siteConfig;

  return (
    <section className="py-20 md:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <MediaPlaceholder media={about.media} sizes="(min-width: 1024px) 40vw, 100vw" />

        <div>
          {showHeading ? (
            <>
              {about.eyebrow ? (
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-accent">
                  {about.eyebrow}
                </p>
              ) : null}
              <h2 className="text-balance text-3xl font-display font-medium leading-[1.1]">
                {about.title}
              </h2>
            </>
          ) : null}
          <div className="mt-6 space-y-4 text-pretty text-muted-foreground">
            {about.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {about.values.length > 0 ? (
            <dl className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {about.values.map((value) => (
                <div key={value.title}>
                  <dt className="font-display text-base font-medium">{value.title}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{value.description}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          {cta ? (
            <div className="mt-10">
              <Button href={cta.href} variant="outline">
                {cta.label}
              </Button>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
