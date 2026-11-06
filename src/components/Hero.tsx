import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { site } from "../data/site";

const facts = [
  { label: "Role", value: "Software Engineering Student" },
  { label: "Base", value: "Morocco" },
  { label: "Stack", value: "C · Java · C# · Python · PHP · JS" },
  { label: "Now", value: "React + TypeScript" },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="mx-auto max-w-[1440px] border-x border-line">
      <div className="flex items-center justify-between border-b border-line px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-muted sm:px-8 lg:px-12">
        <span>Portfolio / 2026</span>
          <span>Software Engineering Student / Morocco</span>
      </div>

      <motion.div
        className="px-5 pt-12 pb-10 sm:px-8 lg:px-12 lg:pt-20 lg:pb-14"
        variants={container}
        initial={reduce ? false : "hidden"}
        animate="show"
      >
        <motion.p
          variants={item}
          className="flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-muted"
        >
          <span className="h-px w-8 bg-acid" aria-hidden="true" />
          Software Engineering Student
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 text-[clamp(3.6rem,18vw,13rem)] leading-[0.82] font-semibold tracking-[-0.075em] uppercase"
        >
          <span className="block">Hamza</span>
          <span className="block">
            <span className="text-outline">Grigah</span>
            <span
              className="cursor-block ml-2 inline-block h-[0.58em] w-[0.1em] translate-y-[0.03em] bg-acid sm:ml-4"
              aria-hidden="true"
            />
          </span>
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-10 grid gap-10 border-t border-line pt-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-16"
        >
          <div className="flex flex-col justify-between gap-8">
            <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
              I build clean interfaces and robust backends. My main stack
              spans Java, C#, Python, PHP, JavaScript, HTML and CSS, with
              React and TypeScript for the frontend. A strong foundation in
              OOP and algorithms shapes how I build.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-3 bg-acid px-6 py-3.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-bone"
              >
                View work
                <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={site.cv}
                download
                className="group inline-flex items-center gap-3 border border-line px-6 py-3.5 text-[10px] uppercase tracking-[0.18em] text-bone transition-colors hover:border-acid hover:text-acid"
              >
                Download CV
                <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 px-2 py-3.5 text-[10px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-acid"
              >
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-px border border-line bg-line lg:grid-cols-1">
            {facts.map((fact) => (
              <div key={fact.label} className="bg-ink px-4 py-3">
                <dt className="text-[10px] uppercase tracking-[0.18em] text-muted">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-[11px] tracking-[0.02em] text-bone">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </motion.div>
    </section>
  );
}
