"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { experiences } from "@/data";

function ExperienceCard({
  exp,
  delay,
}: {
  exp: (typeof experiences)[0];
  delay: number;
}) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`exp-animate group relative rounded-[2rem] p-8 md:p-10 mb-6 border overflow-hidden transition-all duration-300 hover:shadow-lg ${
        isVisible ? "visible" : ""
      }`}
      style={{
        background: "var(--bg-secondary)",
        borderColor: "var(--border)",
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Hover gradient overlay */}
      <div
        className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(37,99,235,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="relative flex justify-between items-start flex-wrap gap-4 mb-4">
        <div>
          <div
            className="text-xl font-bold mb-1 group-hover:text-[var(--accent)] transition-colors duration-200"
            style={{ color: "var(--text)" }}
          >
            {exp.title}
          </div>
          <div
            className="text-sm font-medium"
            style={{ color: "var(--text-secondary)" }}
          >
            {exp.company}
            <span className="mx-2" style={{ color: "var(--text-muted)" }}>
              •
            </span>
            {exp.location}
          </div>
        </div>

        <div
          className="inline-flex items-center px-4 py-1.5 rounded-full border font-mono text-[0.78rem] whitespace-nowrap flex-shrink-0"
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
            color: "var(--text-muted)",
          }}
        >
          {exp.date}
        </div>
      </div>

      <p
        className="relative text-sm leading-relaxed mb-5"
        style={{ color: "var(--text-muted)" }}
      >
        {exp.description}
      </p>

      <div className="relative flex flex-wrap gap-2">
        {exp.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-lg border text-xs font-semibold group-hover:border-blue-500/20 transition-colors"
            style={{
              background: "var(--tag-bg)",
              color: "var(--tag-text)",
              borderColor: "var(--border)",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver();

  return (
    <section id="experience" className="grid-bg relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef}>
          <span
            className={`section-label-animate inline-block px-4 py-1.5 rounded-full text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-4 ${
              headerVisible ? "visible" : ""
            }`}
            style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
          >
            Journey
          </span>
          <h2
            className={`section-animate text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6 ${
              headerVisible ? "visible" : ""
            }`}
            style={{ color: "var(--text)", transitionDelay: "0.1s" }}
          >
            Professional{" "}
            <em className="font-serif italic">Experience</em>
          </h2>
          <p
            className={`section-animate text-lg leading-relaxed max-w-xl ${
              headerVisible ? "visible" : ""
            }`}
            style={{ color: "var(--text-muted)", transitionDelay: "0.2s" }}
          >
            My professional journey in software development, building impact
            one ship at a time.
          </p>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
