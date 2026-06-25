export default function SectionLabel({ index, title }) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      <span className="font-mono text-[13px] tracking-[0.1em] text-goldDim">{index}</span>
      <h2 className="font-serif text-[clamp(28px,4vw,40px)] font-medium tracking-[-0.01em] text-ink">
        {title}
      </h2>
    </div>
  );
}
