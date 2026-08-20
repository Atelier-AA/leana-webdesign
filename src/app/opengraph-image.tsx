import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site.config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const { business, theme } = siteConfig;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: theme.colors.primary,
          color: theme.colors.primaryForeground,
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 4, textTransform: "uppercase", opacity: 0.7 }}>
          {business.name}
        </div>
        <div style={{ display: "flex", fontSize: 68, marginTop: 24, maxWidth: 900 }}>
          {business.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
