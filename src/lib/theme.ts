import type { SiteConfig } from "@/types/config";

/**
 * Serializes `theme.colors` from the config into the CSS custom properties
 * declared in `globals.css`. This is the one runtime bridge between the
 * config file and the stylesheet — every color a client needs to change
 * lives in `config/site.config.ts`, never in CSS.
 */
export function buildThemeStyleTag(theme: SiteConfig["theme"]) {
  const { colors, radius } = theme;
  return `:root{--background:${colors.background};--foreground:${colors.foreground};--primary:${colors.primary};--primary-foreground:${colors.primaryForeground};--accent:${colors.accent};--accent-foreground:${colors.accentForeground};--muted:${colors.muted};--muted-foreground:${colors.mutedForeground};--border:${colors.border};--ring:${colors.ring};--radius:${radius};}`;
}
