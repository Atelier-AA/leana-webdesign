import { Container } from "@/components/ui/Container";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { ProcessStep } from "@/types/config";

export function ProcessSteps({ items }: { items: ProcessStep[] }) {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container>
        <h2 className="max-w-2xl text-balance font-display text-3xl font-medium leading-[1.1]">
          So läuft eine Zusammenarbeit ab
        </h2>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((step, index) => (
            <RevealOnScroll key={step.title} delay={index * 60}>
              <li className="flex flex-col gap-3 border-t border-border pt-6">
                <span className="font-display text-sm text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-medium">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            </RevealOnScroll>
          ))}
        </ol>
      </Container>
    </section>
  );
}
