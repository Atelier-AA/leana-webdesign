import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { renderRichText } from "@/lib/richtext";

export function Contact({ showHeading = true }: { showHeading?: boolean }) {
  const { contactSection, contact } = siteConfig;

  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          {showHeading ? (
            <SectionHeading
              eyebrow={contactSection.eyebrow}
              title={contactSection.title}
              subtitle={contactSection.subtitle}
            />
          ) : null}

          {contactSection.body.length > 0 ? (
            <div className="mt-6 space-y-4 text-pretty text-muted-foreground">
              {contactSection.body.map((paragraph) => (
                <p key={paragraph}>{renderRichText(paragraph)}</p>
              ))}
            </div>
          ) : null}

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="font-medium text-foreground">E-Mail</dt>
              <dd className="mt-1 text-muted-foreground">
                <a href={`mailto:${contact.email}`} className="hover:text-foreground">
                  {contact.email}
                </a>
              </dd>
            </div>
            {contact.phoneDisplay ? (
              <div>
                <dt className="font-medium text-foreground">Telefon</dt>
                <dd className="mt-1 text-muted-foreground">
                  <a href={`tel:${contact.phone}`} className="hover:text-foreground">
                    {contact.phoneDisplay}
                  </a>
                </dd>
              </div>
            ) : null}
            <div>
              <dt className="font-medium text-foreground">Standort</dt>
              <dd className="mt-1 text-muted-foreground">
                {contact.address.city}
                {contact.address.region ? ` ${contact.address.region}` : ""}
              </dd>
            </div>
            {contactSection.responseTime ? (
              <div>
                <dt className="font-medium text-foreground">Antwortzeit</dt>
                <dd className="mt-1 text-muted-foreground">{contactSection.responseTime}</dd>
              </div>
            ) : null}
          </dl>
        </div>

        <div className="rounded-lg border border-border p-8 md:p-10">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
