"use client";

import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import type { NavItem } from "@/types/config";

export function MobileNav({
  navigation,
  ctaLabel,
  ctaHref,
}: {
  navigation: NavItem[];
  ctaLabel: string;
  ctaHref: string;
}) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label="Menü öffnen"
        >
          <Menu className="size-6" aria-hidden="true" strokeWidth={1.5} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-primary/40 backdrop-blur-sm data-[state=open]:[animation:overlay-in_var(--duration-fast)_var(--ease-premium)]" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-background p-6 shadow-elevated outline-none data-[state=open]:[animation:panel-in_var(--duration-base)_var(--ease-premium)]"
        >
          <div className="flex items-center justify-between">
            <Dialog.Title className="font-display text-lg font-medium">Menü</Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-md text-foreground"
                aria-label="Menü schliessen"
              >
                <X className="size-6" aria-hidden="true" strokeWidth={1.5} />
              </button>
            </Dialog.Close>
          </div>

          <nav className="mt-10 flex flex-1 flex-col gap-1" aria-label="Hauptnavigation, mobil">
            {navigation.map((item) => (
              <Dialog.Close asChild key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-3 text-xl font-display hover:bg-muted"
                >
                  {item.label}
                </Link>
              </Dialog.Close>
            ))}
          </nav>

          <Dialog.Close asChild>
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              {ctaLabel}
            </Link>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
