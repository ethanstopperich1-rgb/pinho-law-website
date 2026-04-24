import { ImageResponse } from "next/og";

// Sitewide default OG image — 1200×630. Designed social card:
// navy field, subtle gold halo, attorney credentialing line, firm
// wordmark, rating row. Overrides the per-page ones via metadata
// until we ship per-route ImageResponse variants.

export const runtime = "edge";
export const alt =
  "Pinho Law — Immigration & Business Law in Orlando, FL · Dra. Izi Pinho, Florida Bar #126610";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "radial-gradient(ellipse at top right, rgba(201,169,97,0.18) 0%, transparent 55%), linear-gradient(135deg, #0E1B2E 0%, #162639 100%)",
          color: "#F5F1E8",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        {/* Top rail — wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 48,
              height: 48,
              borderRadius: 8,
              border: "1.5px solid #C9A961",
              color: "#C9A961",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            P
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#F5F1E8",
            }}
          >
            Pinho Law
          </div>
        </div>

        {/* Center — the pitch */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#C9A961",
            }}
          >
            Immigration & Business Law · Orlando, FL
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#F5F1E8",
              maxWidth: 960,
            }}
          >
            Trusted legal counsel for Brazilians, in Portuguese.
          </div>
          <div
            style={{
              fontSize: 24,
              lineHeight: 1.4,
              color: "rgba(245,241,232,0.72)",
              maxWidth: 880,
            }}
          >
            Dra. Izi Pinho, Esq. — Florida Bar #126610 · AILA member · Stetson Law
            magna cum laude. 500+ approved cases · 4.6★ on Google.
          </div>
        </div>

        {/* Bottom rail — authority + rating */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(201,169,97,0.3)",
            paddingTop: 24,
            fontSize: 20,
          }}
        >
          <div style={{ color: "rgba(245,241,232,0.55)" }}>
            Cited by Harvard Law Forum · Best Lawyers 2021–2026
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              color: "#C9A961",
              fontWeight: 600,
            }}
          >
            ★★★★★ 4.6 · 111 reviews
          </div>
        </div>
      </div>
    ),
    size,
  );
}
