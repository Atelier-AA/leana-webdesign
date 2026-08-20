import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function CtaBand({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
}: {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <section className="border-t border-border bg-muted py-20 md:py-28">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-balance font-display text-3xl font-medium leading-[1.1]">
          {title}
        </h2>
        {subtitle ? (
          <p className="max-w-xl text-pretty text-muted-foreground">{subtitle}</p>
        ) : null}
        <Button href={ctaHref}>{ctaLabel}</Button>
      </Container>
    </section>
  );
}
