"use client";
import Script from "next/script";

/**
 * Voxaris Guide — AI-powered virtual assistant.
 * Loads the Voxaris SDK after page interactive.
 * Currently a placeholder until the SDK endpoint is live.
 */
export function VoxarisGuide() {
  // Uncomment when Voxaris SDK is ready
  // return (
  //   <Script
  //     src="https://cdn.voxaris.io/vguide.js"
  //     strategy="afterInteractive"
  //     onLoad={() => {
  //       // @ts-expect-error — Voxaris global not typed yet
  //       window.Voxaris?.init({
  //         persona: "DraIziPinho",
  //         languages: ["pt-br", "en", "es"],
  //         disclaimer:
  //           "The hiring of a lawyer is an important decision that should not be based solely on advertisements.",
  //       });
  //     }}
  //   />
  // );

  return null;
}
