"use client";

import { useActionState, useMemo, useState } from "react";
import { submitContactForm, type ContactFormState } from "@/actions/contact";
import { contactFormSchema } from "@/lib/validation";
import { cn } from "@/lib/utils";

type FieldName = "name" | "email" | "message";

const initialValues: Record<FieldName, string> = {
  name: "",
  email: "",
  message: "",
};

const initialContactFormState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialContactFormState,
  );
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({});

  const clientErrors = useMemo(() => {
    const parsed = contactFormSchema.safeParse(values);
    return parsed.success ? {} : parsed.error.flatten().fieldErrors;
  }, [values]);

  function errorsFor(field: FieldName) {
    if (state.status === "error" && state.fieldErrors?.[field]?.length) {
      return state.fieldErrors[field];
    }
    return touched[field] ? clientErrors[field] : undefined;
  }

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-lg border border-border bg-muted p-8 text-center">
        <p className="font-display text-lg font-medium">Nachricht gesendet</p>
        <p className="mt-2 text-sm text-muted-foreground">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-6">
      {/* Honeypot: hidden from sighted and screen-reader users, but visible to naive bots that fill every field. */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website (nicht ausfüllen)</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <TextField
        id="name"
        label="Name"
        autoComplete="name"
        value={values.name}
        errors={errorsFor("name")}
        onChange={(v) => setValues((prev) => ({ ...prev, name: v }))}
        onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
      />

      <TextField
        id="email"
        label="E-Mail"
        type="email"
        autoComplete="email"
        value={values.email}
        errors={errorsFor("email")}
        onChange={(v) => setValues((prev) => ({ ...prev, email: v }))}
        onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
      />

      <TextField
        id="message"
        label="Deine Nachricht"
        as="textarea"
        rows={5}
        value={values.message}
        errors={errorsFor("message")}
        onChange={(v) => setValues((prev) => ({ ...prev, message: v }))}
        onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
      />

      <div role="status" aria-live="polite">
        {state.status === "error" && state.message ? (
          <p className="text-sm text-red-700">{state.message}</p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:pointer-events-none disabled:opacity-50 sm:w-auto"
      >
        {isPending ? "Wird gesendet…" : "Nachricht senden"}
      </button>
    </form>
  );
}

function TextField({
  id,
  label,
  value,
  errors,
  onChange,
  onBlur,
  type = "text",
  as = "input",
  rows,
  autoComplete,
}: {
  id: FieldName;
  label: string;
  value: string;
  errors?: string[];
  onChange: (value: string) => void;
  onBlur: () => void;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
  autoComplete?: string;
}) {
  const errorId = `${id}-error`;
  const hasError = Boolean(errors?.length);
  const sharedProps = {
    id,
    name: id,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
    onBlur,
    "aria-invalid": hasError,
    "aria-describedby": hasError ? errorId : undefined,
    className: cn(
      "w-full rounded-md border bg-background px-4 py-3 text-sm outline-none transition-colors",
      "focus-visible:border-ring",
      hasError ? "border-red-500" : "border-border",
    ),
  };

  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea {...sharedProps} rows={rows} />
      ) : (
        <input {...sharedProps} type={type} autoComplete={autoComplete} />
      )}
      {hasError ? (
        <p id={errorId} className="mt-2 text-sm text-red-700">
          {errors?.[0]}
        </p>
      ) : null}
    </div>
  );
}
