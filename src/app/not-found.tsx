import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center py-24">
      <Container className="flex flex-col items-start gap-6">
        <p className="text-sm font-medium uppercase tracking-[0.14em] text-accent">Fehler 404</p>
        <h1 className="max-w-xl text-balance font-display text-4xl font-medium leading-[1.05]">
          Diese Seite konnte nicht gefunden werden.
        </h1>
        <p className="max-w-lg text-muted-foreground">
          Möglicherweise wurde der Link falsch eingegeben oder die Seite wurde verschoben.
        </p>
        <Button href="/">Zur Startseite</Button>
      </Container>
    </section>
  );
}
