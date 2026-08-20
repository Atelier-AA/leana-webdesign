import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Media } from "@/types/config";

/**
 * Renders the configured image. Every media slot on this site points at a
 * real (AI-generated, people-free) image under /public/images — see
 * README for how to regenerate or replace them with real photography.
 * If a slot is ever left without `src`, this falls back to a tasteful
 * gradient built from the active theme tokens instead of a broken image.
 */
export function MediaPlaceholder({
  media,
  className,
  priority = false,
  sizes,
  focalPoint = "center",
}: {
  media: Media;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Which part of the image to keep when the container crops it. */
  focalPoint?: "center" | "top";
}) {
  const hasImage = media.type !== "placeholder" && Boolean(media.src);

  return (
    <div
      className={cn("relative overflow-hidden rounded-lg bg-muted", className)}
      style={{ aspectRatio: media.aspectRatio }}
    >
      {hasImage ? (
        <Image
          src={media.src!}
          alt={media.alt}
          fill
          priority={priority}
          sizes={sizes ?? "100vw"}
          className={cn("object-cover", focalPoint === "top" && "object-top")}
        />
      ) : (
        <div
          role="img"
          aria-label={media.alt}
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, color-mix(in srgb, var(--color-primary) 85%, transparent), color-mix(in srgb, var(--color-accent) 55%, transparent) 55%, var(--color-muted) 100%)",
          }}
        />
      )}
    </div>
  );
}
