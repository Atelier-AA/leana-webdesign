"use server";

import { contactFormSchema, type ContactFormFieldErrors } from "@/lib/validation";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: ContactFormFieldErrors;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const honeypot = formData.get("website");
  if (typeof honeypot === "string" && honeypot.length > 0) {
    // A filled honeypot means a bot. Report success without doing any work,
    // so the bot has no signal to iterate against.
    return { status: "success", message: "Vielen Dank für deine Nachricht." };
  }

  const parsed = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Bitte überprüfe deine Eingaben.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  try {
    await deliverContactMessage(parsed.data);
  } catch {
    return {
      status: "error",
      message: "Deine Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut.",
    };
  }

  return {
    status: "success",
    message: "Danke für deine Nachricht! Ich melde mich so schnell wie möglich bei dir.",
  };
}

/**
 * Boilerplate delivery stub — wire this up to a provider of choice
 * (Resend, Postmark, ein E-Mail-Weiterleitungsdienst, ...) before going live.
 */
async function deliverContactMessage(data: { name: string; email: string; message: string }) {
  console.log("[contact-form] new submission", data);
}
