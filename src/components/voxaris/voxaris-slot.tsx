import { voxarisConfig } from "@/lib/voxaris/config";

interface VoxarisSlotProps {
  type: "vface" | "vteams";
  page?: string;
  locale?: string;
  trigger?: "scroll-cta" | "manual" | "after-hours";
}

/**
 * Voxaris integration placeholder.
 * Renders nothing until Voxaris is enabled via feature flags.
 * When activated, this component will load the Voxaris SDK
 * and render the appropriate widget.
 */
export function VoxarisSlot({ type }: VoxarisSlotProps) {
  if (!voxarisConfig.enabled) {
    return null;
  }

  if (type === "vface" && !voxarisConfig.vface.enabled) {
    return null;
  }

  if (type === "vteams" && !voxarisConfig.vteams.enabled) {
    return null;
  }

  // Future: Load Voxaris SDK and render widget
  return <div className="voxaris-anchor" data-voxaris-type={type} />;
}
