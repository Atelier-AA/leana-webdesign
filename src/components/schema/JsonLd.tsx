import { siteConfig } from "@/config/site.config";

export function JsonLd() {
  const { business, contact } = siteConfig;

  const data = {
    "@context": "https://schema.org",
    "@type": business.jsonLdType,
    name: business.name,
    description: business.description,
    url: business.url,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: contact.address.city,
      addressRegion: contact.address.region,
      addressCountry: contact.address.countryCode,
    },
    ...(contact.socials.length > 0 ? { sameAs: contact.socials.map((s) => s.href) } : {}),
  };

  return (
    <script
      type="application/ld+json"
      // Content is fully developer-controlled (site.config.ts), not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
