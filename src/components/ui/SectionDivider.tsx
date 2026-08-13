export function SectionDivider() {
  return (
    <div
      className="relative mx-auto w-full max-w-6xl px-6"
      aria-hidden="true"
    >
      <div className="flex items-center gap-4">
        {/* Left marker */}
        <span className="h-1.5 w-1.5 bg-[var(--accent)] opacity-70" />

        {/* Main line */}
        <div className="h-px flex-1 bg-gradient-to-r from-[var(--accent)]/50 via-[var(--accent)]/20 to-transparent" />

        {/* Center technical marker */}
        <div className="flex items-center gap-1.5">
          <span className="h-px w-4 bg-[var(--accent)]/30" />
          <span className="h-1 w-1 bg-[var(--accent)]/60" />
          <span className="h-px w-4 bg-[var(--accent)]/30" />
        </div>

        {/* Main line */}
        <div className="h-px flex-1 bg-gradient-to-l from-[var(--accent)]/50 via-[var(--accent)]/20 to-transparent" />

        {/* Right marker */}
        <span className="h-1.5 w-1.5 bg-[var(--accent)] opacity-70" />
      </div>
    </div>
  );
}