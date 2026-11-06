import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
};

export function SectionHeader({
  index,
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <Reveal>
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-muted">
        <span className="tabular-nums">{index}</span>
        <span>{label}</span>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-12">
        <h2 className="text-[clamp(2.6rem,7vw,6.5rem)] leading-[0.88] font-medium tracking-[-0.06em] uppercase">
          {title}
        </h2>
        {description ? (
          <p className="max-w-sm text-sm leading-6 text-muted">{description}</p>
        ) : null}
      </div>
    </Reveal>
  );
}
