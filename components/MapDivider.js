export default function MapDivider({ label }) {
  return (
    <div
      aria-hidden="true"
      className="mx-auto flex max-w-content items-center gap-5 px-8"
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-hairline to-transparent" />
      {label && (
        <span className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.25em] text-goldDim">
          {label}
        </span>
      )}
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-hairline to-transparent" />
    </div>
  );
}
