"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { techRow1, techRow2 } from "@/data";
import type { TechItem } from "@/types";

function TechPill({ tech }: { tech: TechItem }) {
  return (
    <div
      className="flex items-center gap-2 px-4 py-2.5 rounded-full border whitespace-nowrap text-[0.82rem] font-medium flex-shrink-0"
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border)",
        color: "var(--text)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      <svg
        fill={tech.color}
        viewBox="0 0 24 24"
        className="w-4 h-4 flex-shrink-0"
        dangerouslySetInnerHTML={{ __html: tech.svg }}
      />
      <span>{tech.name}</span>
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: TechItem[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-1.5">
      <div
        className={`flex gap-3 w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((tech, i) => (
          <TechPill key={`${tech.name}-${i}`} tech={tech} />
        ))}
      </div>
    </div>
  );
}

export default function TechStackSection() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver();
  const { ref: marqueeRef, isVisible: marqueeVisible } = useIntersectionObserver();

  return (
    <section id="tools" className="grid-bg relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef}>
          <span
            className={`section-label-animate inline-block px-4 py-1.5 rounded-full text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-4 ${
              headerVisible ? "visible" : ""
            }`}
            style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
          >
            Tech Stack
          </span>
          <h2
            className={`section-animate text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6 ${
              headerVisible ? "visible" : ""
            }`}
            style={{ color: "var(--text)", transitionDelay: "0.1s" }}
          >
            Tools &{" "}
            <em className="font-serif italic">Technologies</em>
          </h2>
          <p
            className={`section-animate text-lg leading-relaxed max-w-xl ${
              headerVisible ? "visible" : ""
            }`}
            style={{ color: "var(--text-muted)", transitionDelay: "0.2s" }}
          >
            The technologies I work with daily to build fast, scalable, and
            beautiful applications.
          </p>
        </div>

        {/* Marquee */}
        <div
          ref={marqueeRef}
          className={`section-animate relative rounded-3xl overflow-hidden mt-10 ${
            marqueeVisible ? "visible" : ""
          }`}
        >
          {/* Fade edges */}
          <div
            className="absolute top-0 bottom-0 left-0 w-20 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, var(--bg), transparent)",
            }}
          />
          <div
            className="absolute top-0 bottom-0 right-0 w-20 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to left, var(--bg), transparent)",
            }}
          />

          <MarqueeRow items={techRow1} />
          <MarqueeRow items={techRow2} reverse />
        </div>
      </div>
    </section>
  );
}
