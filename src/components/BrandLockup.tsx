export function BrandLockup({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div className={`brand-lockup brand-lockup-${size}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/lyft-wordmark.png"
        alt="Lyft"
        className="brand-lyft"
        width={250}
        height={169}
      />
      <span className="brand-times" aria-hidden>
        ×
      </span>
      <span className="brand-sxai" aria-label="SpaceXAI">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/spacexai.svg"
          alt=""
          aria-hidden
          width={1294}
          height={158}
        />
        <span className="brand-ai" aria-hidden>
          AI
        </span>
      </span>
    </div>
  );
}
