import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Experiments({
  showHeading = true,
  limit,
  footerLink,
}: {
  showHeading?: boolean;
  limit?: number;
  footerLink?: { label: string; href: string };
}) {
  const { experiments } = siteConfig;
  const items =
    typeof limit === "number" ? experiments.items.slice(0, limit) : experiments.items;

  return (
    <section className="py-20 md:py-28">
      <Container>
        {showHeading ? (
          <SectionHeading
            eyebrow={experiments.eyebrow}
            title={experiments.title}
            subtitle={experiments.subtitle}
          />
        ) : null}

        <div className={`grid gap-10 sm:grid-cols-2 ${showHeading ? "mt-14" : "mt-8"}`}>
          {items.map((item, index) => (
            <RevealOnScroll key={item.slug} delay={index * 60}>
              <Link href={`/experimente/${item.slug}`} className="group block">
                <div className="overflow-hidden rounded-lg">
                  <div className="transition-transform duration-(--duration-slow) ease-(--ease-premium) group-hover:scale-[1.03]">
                    <MediaPlaceholder
                      media={item.media}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </div>
                <p className="mt-4 text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground">
                  {item.title}
                </p>
                <p className="mt-1 font-display text-lg font-medium leading-snug">
                  {item.experimentQuestion}
                </p>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        {footerLink ? (
          <div className="mt-12 flex justify-center">
            <Button href={footerLink.href} variant="outline">
              {footerLink.label}
            </Button>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
