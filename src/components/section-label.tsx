import { AscendingMark } from "@/components/ascending-mark";

export function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <p className="flex items-center gap-3 text-sm text-muted">
      <AscendingMark />
      <span className="num text-base text-ink">{number}</span>
      <span>{label}</span>
    </p>
  );
}
