import Link from "next/link";
import { cn } from "@/lib/utils";

const baseStyles =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md px-6 py-3 text-sm font-medium tracking-wide transition-all duration-(--duration-fast) ease-(--ease-premium) disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary: "bg-primary text-primary-foreground hover:opacity-90 active:opacity-80",
  outline: "border border-border text-foreground hover:bg-muted active:bg-muted/80",
  ghost: "text-foreground hover:bg-muted",
};

type ButtonProps = {
  href: string;
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<typeof Link>, "href" | "className">;

export function Button({ href, variant = "primary", className, children, ...rest }: ButtonProps) {
  return (
    <Link href={href} className={cn(baseStyles, variants[variant], className)} {...rest}>
      {children}
    </Link>
  );
}
