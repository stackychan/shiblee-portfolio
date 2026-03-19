"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { projects } from "@/data";

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof projects)[0];
  delay: number;
}) {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`card-animate flex flex-col rounded-[2rem] overflow-hidden border hover:-translate-y-1.5 transition-all duration-500 ${
        isVisible ? "visible" : ""
      }`}
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border)",
        boxShadow: "var(--shadow)",
        transitionDelay: `${delay}s`,
      }}
    >
      {/* Thumb */}
      <div
        className="h-[200px] flex flex-col items-center justify-center gap-2 text-lg font-bold tracking-[0.12em] uppercase relative overflow-hidden"
        style={project.thumbStyle}
      >
        <span>{project.thumbText}</span>
        {project.badge && (
          <span className="text-[0.65rem] tracking-[0.1em] font-bold opacity-80">
            {project.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5 pb-3 flex-1">
        <h3
          className="text-lg font-bold mb-2 transition-colors duration-200 group-hover:text-[var(--accent)]"
          style={{ color: "var(--text)" }}
        >
          {project.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          {project.description}
        </p>
      </div>

      {/* Footer */}
      <div className="px-5 pb-5">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener"
            className="block w-full py-2.5 rounded-[0.85rem] text-center text-xs font-bold tracking-[0.1em] uppercase transition-all hover:opacity-85 active:scale-[0.98]"
            style={{
              background: "var(--text)",
              color: "var(--bg)",
            }}
          >
            View
          </a>
        ) : (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener"
            className="block w-full py-2.5 rounded-[0.85rem] text-center text-xs font-bold tracking-[0.1em] uppercase transition-all hover:opacity-85 active:scale-[0.98]"
            style={{
              background: "var(--text)",
              color: "var(--bg)",
            }}
          >
            View Repository
          </a>
        )}
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const { ref: headerRef, isVisible: headerVisible } =
    useIntersectionObserver();

  return (
    <section id="projects" className="grid-bg relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headerRef} className={headerVisible ? "visible" : ""}>
          <span
            className={`section-label-animate inline-block px-4 py-1.5 rounded-full text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-4 ${
              headerVisible ? "visible" : ""
            }`}
            style={{
              background: "var(--accent-bg)",
              color: "var(--accent)",
            }}
          >
            Work Gallery
          </span>
          <h2
            className={`section-animate text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6 ${
              headerVisible ? "visible" : ""
            }`}
            style={{ color: "var(--text)", transitionDelay: "0.1s" }}
          >
            Selected <em className="font-serif italic">Projects</em>
          </h2>
          <p
            className={`section-animate text-lg leading-relaxed max-w-xl ${
              headerVisible ? "visible" : ""
            }`}
            style={{ color: "var(--text-muted)", transitionDelay: "0.2s" }}
          >
            A showcase of my recent work, blending technical excellence with
            elegant design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
