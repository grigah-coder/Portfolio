import { ArrowDown } from "lucide-react";
import { site } from "../data/site";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";

const stack = [
  {
    label: "Languages",
    items: ["C", "Java", "C#", "Python", "PHP", "JavaScript", "SQL"],
  },
  {
    label: "Web",
    items: ["HTML", "CSS", "Vanilla JS"],
  },
  {
    label: "Databases",
    items: ["PostgreSQL"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "VS Code", "NetBeans", "Visual Studio"],
  },
];

export function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1440px] border-x border-b border-line"
    >
      <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <SectionHeader
          index="02 / 03"
          label="About"
          title={
            <>
              Data model first.
              <br />
              <span className="text-muted">Interface second.</span>
            </>
          }
          description="Software Engineering Student building clean interfaces and robust backends."
        />
      </div>

      <div className="grid border-t border-line lg:grid-cols-12">
        <aside className="border-b border-line p-5 sm:p-8 lg:col-span-4 lg:border-r lg:border-b-0 lg:p-12">
          <div className="lg:sticky lg:top-24">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
              Currently
            </p>
            <p className="mt-3 max-w-[260px] text-sm leading-6 text-bone">
              Building this portfolio with React 19, TypeScript, Tailwind CSS
              and Framer Motion.
            </p>

            <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-muted">
              Based in
            </p>
            <p className="mt-2 text-sm text-bone">Morocco</p>

            <a
              href={site.cv}
              download
              className="group mt-10 inline-flex items-center gap-2 border-b border-line pb-1 text-[10px] uppercase tracking-[0.18em] text-bone transition-colors hover:border-acid hover:text-acid"
            >
              Download CV
              <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </aside>

        <div className="p-5 sm:p-8 lg:col-span-8 lg:p-12">
          <Reveal>
            <p className="max-w-2xl text-sm leading-7 text-bone sm:text-base sm:leading-8">
              I am a 2nd-year BTS Software Engineering student from Morocco. I
              focus on backend development, object-oriented programming (OOP),
              and database management. My core stack includes C, Java, C#,
              Python, and PostgreSQL. I am currently expanding my skills in
              PHP. I enjoy building robust desktop applications and structured
              web backends.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-12">
            <div className="grid gap-px border border-line bg-line sm:grid-cols-3">
              {stack.map((group) => (
                <div key={group.label} className="bg-ink p-5">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted">
                    {group.label}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {group.items.map((entry) => (
                      <li
                        key={entry}
                        className="text-[11px] tracking-[0.02em] text-bone"
                      >
                        {entry}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
