import { z } from "zod";

/**
 * Shared between the client form (inline validation as the user types)
 * and the server action (authoritative validation). Keeping one schema
 * means the two layers can never silently drift apart.
 */
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Bitte gib deinen Namen ein (mind. 2 Zeichen)."),
  email: z.string().trim().email("Bitte gib eine gültige E-Mail-Adresse ein."),
  message: z
    .string()
    .trim()
    .min(10, "Deine Nachricht sollte mindestens 10 Zeichen umfassen.")
    .max(2000, "Deine Nachricht ist zu lang (max. 2000 Zeichen)."),
  // Honeypot: a real visitor never sees or fills this field.
  website: z.string().max(0, "Ungültige Eingabe.").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
export type ContactFormFieldErrors = Partial<
  Record<keyof ContactFormValues, string[]>
>;
