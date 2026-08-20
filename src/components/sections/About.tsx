import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { renderRichText } from "@/lib/richtext";

export function About({
  showHeading = true,
  mode = "full",
  cta,
}: {
  showHeading?: boolean;
  mode?: "teaser" | "full";
  cta?: { label: string; href: string };
}) {
  const { about } = siteConfig;
  const isTeaser = mode === "teaser";
  const paragraphs = isTeaser && about.excerpt ? [about.excerpt] : about.body;

  return (
    <section className="py-20 md:py-28">
      <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
        <MediaPlaceholder
          media={about.media}
          sizes="(min-width: 1024px) 40vw, 100vw"
          focalPoint="top"
          className={isTeaser ? undefined : "lg:sticky lg:top-28"}
        />

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
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{renderRichText(paragraph)}</p>
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
