export function AscendingMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`text-clay ${className}`}
      width="28"
      height="16"
      viewBox="0 0 28 16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 13.5H8.5L13 8.5H18.5L26 2" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}
