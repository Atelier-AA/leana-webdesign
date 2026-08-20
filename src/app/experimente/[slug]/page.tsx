import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { CtaBand } from "@/components/sections/CtaBand";
import { renderRichText } from "@/lib/richtext";

export function generateStaticParams() {
  return siteConfig.experiments.items.map((item) => ({ slug: item.slug }));
}

function findExperiment(slug: string) {
  return siteConfig.experiments.items.find((item) => item.slug === slug);
}

export async function generateMetadata(
  props: PageProps<"/experimente/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const experiment = findExperiment(slug);
  if (!experiment) return {};

  return {
    title: experiment.title,
    description: experiment.experimentQuestion,
    alternates: { canonical: `/experimente/${experiment.slug}` },
    openGraph: { title: experiment.title, description: experiment.experimentQuestion },
  };
}

export default async function ExperimentDetailPage(props: PageProps<"/experimente/[slug]">) {
  const { slug } = await props.params;
  const experiment = findExperiment(slug);

  if (!experiment) {
    notFound();
  }

  const { contactSection, hero } = siteConfig;

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Experimente", href: "/experimente" }, { label: experiment.title }]}
      />

      <section className="pb-16 pt-14 md:pb-20 md:pt-16">
        <Container>
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {experiment.title}
          </p>
          <h1 className="max-w-3xl text-balance font-display text-4xl font-medium leading-[1.1]">
            {experiment.experimentQuestion}
          </h1>
        </Container>

        <Container className="mt-12">
          <MediaPlaceholder
            media={{ ...experiment.media, aspectRatio: "16 / 9" }}
            priority
            sizes="100vw"
          />
        </Container>

        <Container className="mt-12 max-w-3xl space-y-4 text-pretty text-lg text-muted-foreground">
          {experiment.content.map((paragraph) => (
            <p key={paragraph}>{renderRichText(paragraph)}</p>
          ))}
        </Container>

        <Container className="mt-12 flex flex-wrap items-center gap-4">
          <Button href="/kontakt">{hero.ctaPrimary.label}</Button>
          <Link
            href="/experimente"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
          >
            ← Alle Experimente
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
