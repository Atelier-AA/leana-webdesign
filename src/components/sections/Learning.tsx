import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Learning({ showHeading = true }: { showHeading?: boolean }) {
  const { learning } = siteConfig;

  if (learning.items.length === 0) return null;

  return (
    <section className="py-20 md:py-28">
      <Container>
        {showHeading ? (
          <SectionHeading eyebrow={learning.eyebrow} title={learning.title} subtitle={learning.subtitle} />
        ) : null}

        <div className={`grid gap-6 sm:grid-cols-2 ${showHeading ? "mt-14" : ""}`}>
          {learning.items.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 60}>
              <div className="flex h-full flex-col gap-3 rounded-lg border border-border p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-base font-medium leading-snug">{item.title}</h3>
                  <span className="shrink-0 rounded-full border border-border px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    bald
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{item.teaser}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
