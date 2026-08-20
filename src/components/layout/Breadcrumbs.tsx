import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site.config";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const baseUrl = siteConfig.business.url.replace(/\/$/, "");
  const trail: Crumb[] = [{ label: "Start", href: "/" }, ...items];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${baseUrl}${item.href === "/" ? "" : item.href}` } : {}),
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b border-border">
      <Container>
        <ol className="flex flex-wrap items-center gap-2 py-4 text-sm text-muted-foreground">
          {trail.map((item, index) => (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {item.href && index < trail.length - 1 ? (
                <Link href={item.href} className="hover:text-foreground">
                  {item.label}
                </Link>
              ) : (
                <span aria-current="page" className="text-foreground">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </nav>
  );
}
