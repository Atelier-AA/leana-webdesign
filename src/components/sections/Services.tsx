import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Services({
  showHeading = true,
  footerLink,
}: {
  showHeading?: boolean;
  footerLink?: { label: string; href: string };
}) {
  const { services } = siteConfig;

  return (
    <section className="py-20 md:py-28">
      <Container>
        {showHeading ? (
          <SectionHeading
            eyebrow={services.eyebrow}
            title={services.title}
            subtitle={services.subtitle}
          />
        ) : null}

        <div
          className={`grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4 ${
            showHeading ? "mt-14" : ""
          }`}
        >
          {services.items.map((item, index) => (
            <RevealOnScroll key={item.title} delay={index * 60} className="bg-background">
              <div className="flex h-full flex-col gap-4 p-8">
                <DynamicIcon name={item.icon} className="size-6 text-accent" />
                <h3 className="font-display text-lg font-medium">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
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
