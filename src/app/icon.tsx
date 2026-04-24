import { ImageResponse } from "next/og";

// Next.js 15 App Router auto-wires this to /icon as favicon.
// Generates the Pinho Law "P" monogram at multiple sizes via the OG
// image runtime. Navy field, gold serif P, subtle gold border — reads
// at 16x16, crisp at 512x512.

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0E1B2E 0%, #162639 50%, #0E1B2E 100%)",
          border: "1px solid #C9A961",
          borderRadius: 6,
          fontSize: 22,
          fontWeight: 700,
          color: "#C9A961",
          fontFamily: "Georgia, 'Times New Roman', serif",
          letterSpacing: "-0.02em",
        }}
      >
        P
      </div>
    ),
    size,
  );
}
