import Link from "next/link";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  const { business, contact, footer } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className={`grid gap-10 py-16 ${contact.socials.length > 0 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
        <div>
          <p className="font-display text-lg font-medium">{business.name}</p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">{business.tagline}</p>
        </div>

        <div className="text-sm text-muted-foreground">
          <p className="font-medium text-foreground">Kontakt</p>
          <address className="mt-3 not-italic leading-relaxed">
            {contact.address.city}
            {contact.address.region ? ` ${contact.address.region}` : ""}
            <br />
            <a href={`mailto:${contact.email}`} className="hover:text-foreground">
              {contact.email}
            </a>
            {contact.phoneDisplay ? (
              <>
                <br />
                <a href={`tel:${contact.phone}`} className="hover:text-foreground">
                  {contact.phoneDisplay}
                </a>
              </>
            ) : null}
          </address>
        </div>

        {contact.socials.length > 0 ? (
          <div className="text-sm text-muted-foreground">
            <p className="font-medium text-foreground">Folgen Sie mir</p>
            <ul className="mt-3 space-y-2">
              {contact.socials.map((social) => (
                <li key={social.platform}>
                  <a href={social.href} className="hover:text-foreground">
                    {social.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Container>

      <Container className="flex flex-col gap-4 border-t border-border py-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {footer.copyrightName}. Alle Rechte vorbehalten.
        </p>
        <ul className="flex gap-6">
          {footer.legalLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-foreground">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
