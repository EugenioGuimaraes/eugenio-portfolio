export default function SectionLabel({ index, title }) {
  return (
    <div className="mb-10 flex items-center gap-4">
      <span className="font-mono text-xs text-gold">[{index}]</span>
      <h2 className="font-mono text-xl font-bold uppercase tracking-[0.2em] text-fg md:text-2xl">
        {title}
      </h2>
      <div className="h-px flex-1 bg-line" />
    </div>
  );
}
