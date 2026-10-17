export function PortraitFrame({ label }: { label: string }) {
  return (
    <figure className="relative pr-4 pt-4">
      <div
        className="pointer-events-none absolute right-0 top-0 h-[calc(100%-1rem)] w-[calc(100%-1rem)] rounded-3xl border border-blue"
        aria-hidden="true"
      />
      <div className="relative flex aspect-[4/5] items-end rounded-3xl bg-white p-5">
        <figcaption className="max-w-[14rem] text-sm leading-snug text-muted">{label}</figcaption>
      </div>
    </figure>
  );
}
