import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, Copy } from "lucide-react";
import { channels, site } from "../data/site";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      if (timer.current) window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-[1440px] border-x border-b border-line"
    >
      <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <SectionHeader
          index="03 / 03"
          label="Contact"
          title={
            <>
              Let&apos;s talk<span className="text-acid">.</span>
            </>
          }
          description="For work, collaboration or a question, email is the fastest route."
        />
      </div>

      <div className="grid border-t border-line lg:grid-cols-12">
        <div className="p-5 sm:p-8 lg:col-span-8 lg:border-r lg:p-12">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
            Email
          </p>

          <a
            href={`mailto:${site.email}`}
            className="group mt-4 flex items-center justify-between gap-6 border-y border-line py-6 transition-colors hover:bg-acid hover:text-ink focus-visible:bg-acid focus-visible:text-ink"
          >
            <span className="min-w-0 break-all text-[clamp(0.95rem,3.4vw,2.6rem)] tracking-[-0.03em]">
              {site.email}
            </span>
            <ArrowUpRight
              aria-hidden="true"
              className="h-6 w-6 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ink group-focus-visible:text-ink"
            />
          </a>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={copyEmail}
              className="group inline-flex items-center gap-3 border border-line px-5 py-3 text-[10px] uppercase tracking-[0.16em] text-bone transition-colors hover:border-acid hover:text-acid"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              ) : (
                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
              )}
              {copied ? "Copied" : "Copy address"}
            </button>

            <a
              href={site.cv}
              download
              className="group inline-flex items-center gap-3 border border-line px-5 py-3 text-[10px] uppercase tracking-[0.16em] text-bone transition-colors hover:border-acid hover:text-acid"
            >
              Download CV
              <ArrowDown
                className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </a>

            <span aria-live="polite" className="sr-only">
              {copied ? "Email address copied to clipboard" : ""}
            </span>
          </div>

          <p className="mt-12 max-w-md text-xs leading-6 text-muted">
            I read every message. If you prefer a direct line, WhatsApp is also
            open the number is on the right.
          </p>
        </div>

        <div className="border-t border-line p-5 sm:p-8 lg:col-span-4 lg:border-t-0 lg:p-12">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
            Elsewhere
          </p>

          <ul className="mt-4 border-t border-line">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 border-b border-line py-4 text-bone transition-colors hover:text-acid"
                >
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.18em]">
                      {channel.label}
                    </span>
                    <span className="mt-1 block text-[10px] text-muted">
                      {channel.detail}
                    </span>
                  </span>
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-acid"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
