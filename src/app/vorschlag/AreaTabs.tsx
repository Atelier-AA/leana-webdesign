"use client";

import { useState } from "react";
import type { SiteConfig } from "@/types/config";

export function AreaTabs({ items }: { items: SiteConfig["areas"]["items"] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-10 md:grid-cols-2 md:gap-16">
      <ul className="space-y-3">
        {items.map((item, index) => {
          const isActive = index === active;
          return (
            <li key={item.title}>
              <button
                type="button"
                onClick={() => setActive(index)}
                className="group flex w-full items-baseline gap-4 text-left"
              >
                <span
                  className="font-display text-xs italic"
                  style={{ color: isActive ? "#1a1712" : "#b5ac9e" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className="font-display text-3xl transition-colors md:text-4xl"
                  style={{ color: isActive ? "#1a1712" : "#b5ac9e" }}
                >
                  {item.title}
                </span>
              </button>
              {isActive ? (
                <p className="mt-3 max-w-md pl-9 text-sm leading-relaxed" style={{ color: "#6b6357" }}>
                  {item.description}
                </p>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
