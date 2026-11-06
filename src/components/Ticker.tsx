const items = [
  "C#",
  "Python",
  "JavaScript",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Git",
];

function TickerRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={hidden ? "true" : undefined}
    >
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.2em]"
        >
          {item}
          <span className="mx-5 inline-block h-1 w-1 bg-ink sm:mx-7" />
        </span>
      ))}
    </div>
  );
}

export function Ticker() {
  return (
    <div className="mx-auto max-w-[1440px] overflow-hidden border-x border-b border-line bg-acid py-3 text-ink">
      <div className="marquee flex w-max">
        <TickerRow />
        <TickerRow hidden />
      </div>
    </div>
  );
}
