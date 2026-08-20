import { Layout, Image as ImageIcon, PenLine, Bot, Sparkles, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  layout: Layout,
  image: ImageIcon,
  "pen-line": PenLine,
  bot: Bot,
};

export function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = icons[name] ?? Sparkles;
  return <Icon className={className} aria-hidden="true" strokeWidth={1.5} />;
}
