import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { site } from "../data/site";
import { SectionHeader } from "./SectionHeader";

const list: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const row: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const quietOnHover =
  "text-muted transition-colors group-hover:text-ink/60 group-focus-visible:text-ink/60";

export function Work() {
  const reduce = useReducedMotion();

  return (
    <section
      id="work"
      className="mx-auto max-w-[1440px] border-x border-b border-line"
    >
      <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <SectionHeader
          index="01 / 03"
          label="Index"
          title="Selected work"
          description="Six projects across desktop and web, from management tools to focused browser apps."
        />
      </div>

      <motion.ul
        className="border-b border-line"
        variants={list}
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "show"}
        viewport={{ once: true, margin: "-60px" }}
      >
        {projects.map((project) => {
          const href = project.href ?? project.github;
          const isMailto = href.startsWith("mailto:");

          return (
            <motion.li key={project.index} variants={row}>
              <a
                href={href}
                target={isMailto ? undefined : "_blank"}
                rel={isMailto ? undefined : "noopener noreferrer"}
                className="group grid grid-cols-[32px_minmax(0,1fr)_20px] items-start gap-4 border-t border-line px-5 py-7 text-bone transition-colors duration-200 hover:bg-acid hover:text-ink focus-visible:bg-acid focus-visible:text-ink sm:grid-cols-[48px_minmax(0,1fr)_24px] sm:px-8 lg:grid-cols-[72px_minmax(0,1fr)_320px_24px] lg:items-center lg:gap-8 lg:px-12 lg:py-9"
              >
                <span className={`pt-1 text-[10px] tabular-nums ${quietOnHover}`}>
                  {project.index}
                </span>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-xl font-medium tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 sm:text-2xl lg:text-3xl">
                      {project.title}
                    </h3>
                    <span
                      className={`text-[10px] uppercase tracking-[0.16em] ${quietOnHover}`}
                    >
                      {project.format}
                    </span>
                  </div>

                  <p className="mt-2 max-w-xl text-xs leading-5 text-muted transition-colors group-hover:text-ink/75 group-focus-visible:text-ink/75 sm:text-sm">
                    {project.summary}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 lg:hidden">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`text-[10px] uppercase tracking-[0.14em] ${quietOnHover}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="mt-3 inline-block text-[10px] uppercase tracking-[0.14em] text-acid transition-colors group-hover:text-ink group-focus-visible:text-ink lg:hidden">
                    {project.action}
                  </span>
                </div>

                <div className="hidden lg:block">
                  <p
                    className={`text-[10px] uppercase tracking-[0.14em] ${quietOnHover}`}
                  >
                    {project.path}
                  </p>
                  <p className="mt-2 text-[11px] tracking-[0.02em] text-bone transition-colors group-hover:text-ink group-focus-visible:text-ink">
                    {project.stack.join(" · ")}
                  </p>
                  <p className="mt-3 text-[10px] uppercase tracking-[0.14em] text-acid transition-colors group-hover:text-ink group-focus-visible:text-ink">
                    {project.action}
                  </p>
                </div>

                <ArrowUpRight
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink group-focus-visible:text-ink lg:mt-0"
                />
              </a>
            </motion.li>
          );
        })}
      </motion.ul>

      <div className="flex flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
          Desktop and web projects · source on GitHub
        </p>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-bone transition-colors hover:text-acid"
        >
          More on GitHub
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </section>
  );
}
