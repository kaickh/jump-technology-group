import { site } from "@/content/site";

/**
 * Text identity until an official logo file is provided.
 * Replace the contents of this component with the logo image.
 */
export function Wordmark() {
  return (
    <span className="flex flex-col">
      <span className="font-serif text-[1.65rem] leading-none tracking-[-0.03em]">{site.shortName}</span>
      <span className="mt-1 text-[0.62rem] uppercase tracking-[0.18em] text-muted">Technology Group</span>
    </span>
  );
}
