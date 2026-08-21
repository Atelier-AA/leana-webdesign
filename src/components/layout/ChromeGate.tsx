"use client";

import { usePathname } from "next/navigation";

/**
 * Hides the standard site chrome (header/footer) on standalone,
 * fully custom-styled routes such as /vorschlag.
 */
export function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith("/vorschlag")) return null;
  return <>{children}</>;
}
