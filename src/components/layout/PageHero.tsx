import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import type { Media } from "@/types/config";

/**
 * Shared top-of-page banner for every inner page. Renders the page's single
 * <h1> — pages using this component should not render another <h1> anywhere else.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  banner,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  banner?: Media;
  align?: "left" | "center";
}) {
  return (
    <section className="pb-16 pt-14 md:pb-20 md:pt-16">
      <Container>
        <SectionHeading
          as="h1"
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          align={align}
          className={align === "center" ? "mx-auto" : undefined}
        />
      </Container>
      {banner ? (
        <Container className="mt-12">
          <MediaPlaceholder media={banner} priority sizes="100vw" />
        </Container>
      ) : null}
    </section>
  );
}
