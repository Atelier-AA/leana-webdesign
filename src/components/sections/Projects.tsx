import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function Projects({
  showHeading = true,
  limit,
  footerLink,
}: {
  showHeading?: boolean;
  limit?: number;
  footerLink?: { label: string; href: string };
}) {
  const { projects } = siteConfig;
  const items = typeof limit === "number" ? projects.items.slice(0, limit) : projects.items;

  return (
    <section className="py-20 md:py-28">
      <Container>
        {showHeading ? (
          <SectionHeading
            eyebrow={projects.eyebrow}
            title={projects.title}
            subtitle={projects.subtitle}
          />
        ) : null}

        {projects.note ? (
          <p className="mt-4 max-w-2xl text-sm italic text-muted-foreground">{projects.note}</p>
        ) : null}

        <div className={`grid gap-8 sm:grid-cols-2 ${showHeading ? "mt-14" : "mt-8"}`}>
          {items.map((project, index) => (
            <RevealOnScroll key={project.slug} delay={index * 60}>
              <Link href={`/projekte/${project.slug}`} className="group block">
                <div className="overflow-hidden rounded-lg">
                  <div className="transition-transform duration-(--duration-slow) ease-(--ease-premium) group-hover:scale-[1.03]">
                    <MediaPlaceholder
                      media={project.media}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  </div>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-medium">{project.title}</h3>
                    {project.description ? (
                      <p className="mt-1 text-sm text-muted-foreground">
                        {project.description}
                      </p>
                    ) : null}
                  </div>
                  <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {project.category}
                  </span>
                </div>
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
