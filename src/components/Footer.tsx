import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1440px] border-x border-line">
      <div className="flex flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-12">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
            Hamza Grigah / Portfolio 2026
          </p>
          <p className="mt-3 text-sm text-bone">
            Built with React, TypeScript, Tailwind CSS and Framer Motion.
          </p>
        </div>

        <a
          href="#top"
          className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-acid"
        >
          Back to top
          <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="flex flex-col gap-2 border-t border-line px-5 py-5 text-[10px] uppercase tracking-[0.16em] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <span>© {new Date().getFullYear()} Hamza Grigah</span>
        <span>Morocco / Africa-Kenitra</span>
      </div>
    </footer>
  );
}
