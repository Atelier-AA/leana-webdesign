import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Reasons() {
  const { reasons } = siteConfig;

  return (
    <section className="bg-muted py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow={reasons.eyebrow} title={reasons.title} align="center" className="mx-auto" />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.items.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 60}>
              <div className="flex h-full flex-col gap-3 rounded-lg border border-border bg-background p-8">
                <h3 className="font-display text-lg font-medium">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
