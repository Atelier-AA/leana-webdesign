import { z } from "zod";

/**
 * Single source of truth for the shape of `config/site.config.ts`.
 * Every field is validated at build/runtime via `SiteConfigSchema.parse(...)`,
 * so a malformed config fails fast instead of rendering a broken page.
 */

const linkSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

const navItemSchema = z.object({
  label: z.string().min(1),
  href: z.string().min(1),
});

const mediaSchema = z.object({
  type: z.enum(["image", "video", "placeholder"]),
  src: z.string().optional(),
  alt: z.string().default(""),
  aspectRatio: z.string().default("4 / 5"),
});

const heroSchema = z.object({
  eyebrow: z.string().optional(),
  headline: z.string().min(1),
  subheadline: z.string().min(1),
  tagline: z.string().optional(),
  ctaPrimary: linkSchema,
  ctaSecondary: linkSchema.optional(),
  media: mediaSchema,
});

const areaItemSchema = z.object({
  icon: z.string().min(1),
  title: z.string().min(1),
  description: z.string().min(1),
});

const areasSchema = z.object({
  eyebrow: z.string().optional(),
  title: z.string().min(1),
  subtitle: z.string().optional(),
  items: z.array(areaItemSchema).min(1),
  note: z.string().optional(),
});

const valueItemSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

const aboutSchema = z.object({
  eyebrow: z.string().optional(),
  title: z.string().min(1),
  subtitle: z.string().optional(),
  excerpt: z.string().optional(),
  body: z.array(z.string().min(1)).min(1),
  media: mediaSchema,
  values: z.array(valueItemSchema).default([]),
});

const experimentItemSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  experimentQuestion: z.string().min(1),
  content: z.array(z.string().min(1)).min(1),
  media: mediaSchema,
  liveUrl: linkSchema.optional(),
});

const experimentsSchema = z.object({
  eyebrow: z.string().optional(),
  title: z.string().min(1),
  subtitle: z.string().optional(),
  intro: z.array(z.string().min(1)).default([]),
  note: z.string().optional(),
  items: z.array(experimentItemSchema).min(1),
});

const learningItemSchema = z.object({
  title: z.string().min(1),
  teaser: z.string().min(1),
});

const learningSchema = z.object({
  eyebrow: z.string().optional(),
  title: z.string().min(1),
  subtitle: z.string().optional(),
  items: z.array(learningItemSchema).default([]),
});

const reasonItemSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
});

const reasonsSchema = z.object({
  eyebrow: z.string().optional(),
  title: z.string().min(1),
  items: z.array(reasonItemSchema).min(1),
});

const contactSchema = z.object({
  eyebrow: z.string().optional(),
  title: z.string().min(1),
  subtitle: z.string().optional(),
  body: z.array(z.string().min(1)).default([]),
  responseTime: z.string().optional(),
});

const addressSchema = z.object({
  street: z.string().optional(),
  postalCode: z.string().optional(),
  city: z.string().min(1),
  region: z.string().optional(),
  country: z.string().min(1),
  countryCode: z.string().length(2),
});

const socialLinkSchema = z.object({
  platform: z.string().min(1),
  href: z.string().url(),
});

const contactInfoSchema = z.object({
  email: z.string().email(),
  phone: z.string().optional(),
  phoneDisplay: z.string().optional(),
  address: addressSchema,
  socials: z.array(socialLinkSchema).default([]),
});

const themeSchema = z.object({
  colors: z.object({
    background: z.string(),
    foreground: z.string(),
    primary: z.string(),
    primaryForeground: z.string(),
    accent: z.string(),
    accentForeground: z.string(),
    muted: z.string(),
    mutedForeground: z.string(),
    border: z.string(),
    ring: z.string(),
  }),
  radius: z.string().default("0.5rem"),
});

const featuresSchema = z.object({
  areas: z.boolean().default(true),
  about: z.boolean().default(true),
  experiments: z.boolean().default(true),
  learning: z.boolean().default(true),
  reasons: z.boolean().default(true),
  contact: z.boolean().default(true),
});

const footerSchema = z.object({
  legalLinks: z.array(linkSchema).default([]),
  copyrightName: z.string().min(1),
});

const seoSchema = z.object({
  twitterHandle: z.string().optional(),
  keywords: z.array(z.string()).default([]),
});

const legalSectionSchema = z.object({
  heading: z.string().min(1),
  paragraphs: z.array(z.string().min(1)).min(1),
});

const legalPageSchema = z.object({
  title: z.string().min(1),
  updated: z.string().min(1),
  sections: z.array(legalSectionSchema).min(1),
});

const legalSchema = z.object({
  impressum: legalPageSchema,
  datenschutz: legalPageSchema,
});

const businessSchema = z.object({
  name: z.string().min(1),
  legalName: z.string().min(1),
  tagline: z.string().min(1),
  description: z.string().min(1),
  url: z.string().url(),
  locale: z.string().default("de-CH"),
  jsonLdType: z.enum(["Person", "Organization"]).default("Person"),
});

export const SiteConfigSchema = z.object({
  business: businessSchema,
  contact: contactInfoSchema,
  theme: themeSchema,
  features: featuresSchema,
  navigation: z.array(navItemSchema).min(1),
  hero: heroSchema,
  areas: areasSchema,
  about: aboutSchema,
  experiments: experimentsSchema,
  learning: learningSchema,
  reasons: reasonsSchema,
  contactSection: contactSchema,
  footer: footerSchema,
  seo: seoSchema,
  legal: legalSchema,
});

export type SiteConfig = z.infer<typeof SiteConfigSchema>;
export type NavItem = z.infer<typeof navItemSchema>;
export type Media = z.infer<typeof mediaSchema>;
export type AreaItem = z.infer<typeof areaItemSchema>;
export type ValueItem = z.infer<typeof valueItemSchema>;
export type ExperimentItem = z.infer<typeof experimentItemSchema>;
export type LearningItem = z.infer<typeof learningItemSchema>;
export type ReasonItem = z.infer<typeof reasonItemSchema>;
export type Address = z.infer<typeof addressSchema>;
export type SocialLink = z.infer<typeof socialLinkSchema>;
export type LegalSection = z.infer<typeof legalSectionSchema>;
export type LegalPage = z.infer<typeof legalPageSchema>;
