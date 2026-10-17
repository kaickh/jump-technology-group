import Image from "next/image";

/**
 * Official lockup. Navy wordmark is for light backgrounds.
 * The icon alone is for tight spaces and the favicon.
 */
export function Wordmark({
  compact = false,
  priority = false,
}: {
  compact?: boolean;
  priority?: boolean;
}) {
  if (compact) {
    return (
      <Image
        src="/brand/jump-icon.png"
        alt=""
        width={252}
        height={300}
        priority={priority}
        className="h-9 w-auto"
      />
    );
  }

  return (
    <Image
      src="/brand/jump-lockup-navy.png"
      alt=""
      width={628}
      height={220}
      priority={priority}
      className="h-10 w-auto sm:h-11"
    />
  );
}
