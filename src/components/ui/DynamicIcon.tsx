import {
  Layout,
  Rocket,
  RefreshCw,
  Wrench,
  GraduationCap,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  layout: Layout,
  rocket: Rocket,
  "refresh-cw": RefreshCw,
  wrench: Wrench,
  "graduation-cap": GraduationCap,
};

export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Sparkles;
  return <Icon className={className} aria-hidden="true" strokeWidth={1.5} />;
}
