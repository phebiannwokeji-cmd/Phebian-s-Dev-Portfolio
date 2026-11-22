type Props = { index: string; name: string; note: string; dark?: boolean };

export default function SectionLabel({ index, name, note, dark = false }: Props) {
  return (
    <div className={`mono-label flex items-center gap-3 ${dark ? "text-paper-light/70" : "text-ink/70"}`}>
      <span className="whitespace-nowrap">
        {index} / {name}
      </span>
      <span className={`h-px flex-1 ${dark ? "bg-paper-light/30" : "bg-ink/30"}`} aria-hidden="true" />
      <span className="whitespace-nowrap text-right">{note}</span>
    </div>
  );
}
