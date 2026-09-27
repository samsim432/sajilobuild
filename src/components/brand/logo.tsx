interface LogoProps {
  showText?: boolean;
  className?: string;
  animated?: boolean;
  light?: boolean;
}

function Logo({
  showText = true,
  className = "",
  animated = false,
  light = false,
}: LogoProps) {
  return (
    <div
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="SajiloBuild"
    >
      <svg
        width="38"
        height="38"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={`shrink-0 ${animated ? "sajilo-logo" : ""}`}
      >
        <path
          className="sajilo-logo-blue"
          d="M22 28L50 12L78 28V42L50 26L22 42V28Z"
          fill="#2563EB"
        />

        <path
          className="sajilo-logo-blue"
          d="M22 58L50 74L78 58V72L50 88L22 72V58Z"
          fill="#2563EB"
        />

        <path
          className="sajilo-logo-blue"
          d="M22 28L50 44L50 58L22 42V28Z"
          fill="#2563EB"
        />

        <path
          className="sajilo-logo-blue"
          d="M78 72L50 56V42L78 58V72Z"
          fill="#2563EB"
        />

        <path
          className="sajilo-logo-green sajilo-logo-command"
          d="M43 35L68 49L43 63V52L56 49L43 46V35Z"
          fill="#16A34A"
        />
      </svg>

      {showText && (
        <span
          className={`sajilo-wordmark text-[20px] font-bold tracking-[-0.025em] ${
            light ? "text-white" : "text-slate-950"
          }`}
        >
          <span className="sajilo-text">Sajilo</span>
          <span className="sajilo-build-text">Build</span>
        </span>
      )}
    </div>
  );
}

export default Logo;