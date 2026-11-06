import { useEffect, useState } from "react";
import { navItems } from "../data/site";

function useLocalTime() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  const time = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Africa/Casablanca",
  }).format(now);

  return { time, iso: now.toISOString() };
}

export function Nav() {
  const { time, iso } = useLocalTime();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between border-x border-line px-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center border border-line text-[11px] font-semibold tracking-[0.08em] text-acid">
            HG
          </span>
          <span className="hidden sm:block">
            <span className="block text-[10px] uppercase tracking-[0.18em] text-bone">
              Hamza Grigah
            </span>
            <span className="mt-0.5 block text-[10px] uppercase tracking-[0.18em] text-muted">
              Software Engineering Student
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="flex items-center gap-4 sm:gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group flex items-baseline gap-1.5 py-2 text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-acid sm:gap-2"
            >
              <span className="hidden text-[10px] text-muted transition-colors group-hover:text-acid/60 sm:inline">
                {item.index}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted md:flex">
          <span className="h-1.5 w-1.5 bg-acid" aria-hidden="true" />
          <span>Morocco</span>
          <time dateTime={iso} className="tabular-nums text-bone">
            {time}
          </time>
        </div>
      </div>
    </header>
  );
}
