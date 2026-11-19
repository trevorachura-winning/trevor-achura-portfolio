import Image from "next/image";
import type { Organisation } from "@/lib/types";

/**
 * Shows an approved, locally stored logo when one exists. Otherwise renders a
 * neutral typographic placeholder — never a fabricated logo.
 */
export function OrgMark({ organisation, size = "md" }: { organisation: Organisation; size?: "md" | "lg" }) {
  const box = size === "lg" ? "h-14 w-14 text-base" : "h-12 w-12 text-[0.85rem]";

  if (organisation.logo) {
    return (
      <span className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-[14px] border border-line bg-white p-2 ${box}`}>
        <Image
          src={organisation.logo.src}
          alt={organisation.logo.alt}
          width={organisation.logo.width}
          height={organisation.logo.height}
          className="h-full w-full object-contain"
        />
      </span>
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-[14px] border border-line bg-ice/70 font-semibold tracking-[-0.02em] text-navy ${box}`}
    >
      {organisation.mark}
    </span>
  );
}
