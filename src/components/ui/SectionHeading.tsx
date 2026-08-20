import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as = "h2",
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  const Heading = as;

  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-3xl font-display font-medium leading-[1.1] text-balance">
        {title}
      </Heading>
      {subtitle ? (
        <p className="mt-4 text-lg text-muted-foreground text-pretty">{subtitle}</p>
      ) : null}
    </div>
  );
}
