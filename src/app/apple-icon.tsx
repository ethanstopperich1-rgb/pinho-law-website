import { ImageResponse } from "next/og";

// Apple home-screen icon (180×180). Same P monogram but with more
// generous padding + rounded iOS-style corners baked in.

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 128,
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
