import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { CtaBand } from "@/components/sections/CtaBand";

export function generateStaticParams() {
  return siteConfig.projects.items.map((item) => ({ slug: item.slug }));
}

function findProject(slug: string) {
  return siteConfig.projects.items.find((item) => item.slug === slug);
}

export async function generateMetadata(
  props: PageProps<"/projekte/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = findProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projekte/${project.slug}` },
    openGraph: { title: project.title, description: project.description },
  };
}

export default async function ProjectDetailPage(props: PageProps<"/projekte/[slug]">) {
  const { slug } = await props.params;
  const project = findProject(slug);

  if (!project) {
    notFound();
  }

  const { contactSection, hero, projects } = siteConfig;

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Projekte", href: "/projekte" }, { label: project.title }]}
      />

      <section className="pb-16 pt-14 md:pb-20 md:pt-16">
        <Container>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-accent">
            {project.category}
          </p>
          <h1 className="max-w-3xl text-balance font-display text-4xl font-medium leading-[1.05]">
            {project.title}
          </h1>
        </Container>

        <Container className="mt-12">
          <MediaPlaceholder
            media={{ ...project.media, aspectRatio: "16 / 9" }}
            priority
            sizes="100vw"
          />
        </Container>

        <Container className="mt-12 max-w-3xl space-y-4 text-pretty text-lg text-muted-foreground">
          {(project.content && project.content.length > 0
            ? project.content
            : project.description
              ? [project.description]
              : []
          ).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {projects.note ? (
            <p className="text-sm italic text-muted-foreground/80">{projects.note}</p>
          ) : null}
        </Container>

        <Container className="mt-12 flex flex-wrap items-center gap-4">
          <Button href="/kontakt">{hero.ctaPrimary.label}</Button>
          <Link
            href="/projekte"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            ← Alle Projekte
          </Link>
        </Container>
      </section>

      <CtaBand
        title={contactSection.title}
        subtitle={contactSection.subtitle}
        ctaLabel={hero.ctaPrimary.label}
        ctaHref="/kontakt"
      />
    </>
  );
}
