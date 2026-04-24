import { cn } from "@/lib/utils";
import { FIRM } from "@/lib/constants";

// WhatsApp green brand CTA — #25D366 bg, white text, official glyph.
// Use instead of `<Button variant="secondary">WhatsApp</Button>` on
// every page so the CTA carries universal brand-recognition color.
// Accepts children for custom label text (default: "WhatsApp"), and
// optional prefill text via `text` prop (appended as ?text= query).

export function WhatsAppButton({
  children = "WhatsApp",
  text,
  className,
  size = "lg",
}: {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const href = text
    ? `https://wa.me/${FIRM.whatsapp}?text=${encodeURIComponent(text)}`
    : `https://wa.me/${FIRM.whatsapp}`;

  const sizeClasses = {
    sm: "h-9 px-4 text-sm gap-1.5",
    md: "h-10 px-5 text-sm gap-2",
    lg: "h-12 px-6 text-base gap-2",
  };

  const iconSize = size === "sm" ? "h-4 w-4" : size === "md" ? "h-4 w-4" : "h-5 w-5";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-[var(--radius-md)] border-0 bg-[#25D366] font-semibold text-white shadow-sm transition-colors hover:bg-[#20BD5A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]",
        sizeClasses[size],
        className,
      )}
    >
      <WhatsAppIcon className={iconSize} />
      <span>{children}</span>
    </a>
  );
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.843 12.843 0 0 0-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.693.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.057 21.785h-.008a9.87 9.87 0 0 1-5.03-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.001-5.45 4.436-9.884 9.893-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zm8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}
