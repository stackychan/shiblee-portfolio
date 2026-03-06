"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function ContactSection() {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section id="contact" className="grid-bg relative py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Contact Card */}
        <div
          ref={ref}
          className={`contact-animate relative rounded-[3rem] p-16 md:p-24 text-center border overflow-hidden ${
            isVisible ? "visible" : ""
          }`}
          style={{
            background: "var(--bg-secondary)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {/* Radial glow */}
          <div
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)",
            }}
          />

          <span
            className="relative inline-block px-4 py-1.5 rounded-full text-[0.7rem] font-bold tracking-[0.15em] uppercase mb-6"
            style={{ background: "var(--accent-bg)", color: "var(--accent)" }}
          >
            Get in touch
          </span>

          <h2
            className="relative text-4xl md:text-6xl font-bold tracking-tight mb-5"
            style={{ color: "var(--text)" }}
          >
            Let&apos;s Work{" "}
            <em className="font-serif italic">Together</em>
          </h2>

          <p
            className="relative text-lg leading-relaxed max-w-lg mx-auto mb-10"
            style={{ color: "var(--text-muted)" }}
          >
            Have a project in mind or want to collaborate? I&apos;m currently
            open to new opportunities and would love to hear from you.
          </p>

          <a
            href="mailto:shibleeshowkat@gmail.com"
            className="relative inline-flex items-center gap-3 px-10 py-4 rounded-[1.25rem] text-base font-bold transition-all hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background: "var(--text)",
              color: "var(--bg)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            Start a Conversation
            <svg
              className="transition-transform group-hover:translate-x-1"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 448 512"
              width="16"
              height="16"
            >
              <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <footer
          className="mt-16 pt-8 border-t flex justify-between items-center flex-wrap gap-6"
          style={{ borderColor: "var(--border)" }}
        >
          <div>
            <strong
              className="block text-base font-bold mb-1"
              style={{ color: "var(--text)" }}
            >
              Shiblee Showkat
            </strong>
            <a
              href="mailto:shibleeshowkat@gmail.com"
              className="font-mono text-sm transition-colors hover:text-[var(--accent)]"
              style={{ color: "var(--text-muted)" }}
            >
              shibleeshowkat@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-end gap-2">
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>
              © 2026 Shiblee Showkat • All rights reserved.
            </p>
            <div className="flex gap-6">
              {[
                { label: "GitHub", href: "https://github.com/stackychan" },
                {
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/in/shibleeshowkat",
                },
                { label: "Twitter", href: "https://x.com/stackychan_" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className="text-xs transition-colors hover:text-[var(--text)]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
