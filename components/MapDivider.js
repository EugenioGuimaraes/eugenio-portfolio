export default function MapDivider({ label }) {
  return (
    <div
      aria-hidden="true"
      className="mx-auto flex w-full items-center gap-5 px-8 md:max-w-[90%]"
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
