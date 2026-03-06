"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useTheme } from "./ThemeProvider";
import Image from "next/image";

export default function ActivitySection() {
  const { dark } = useTheme();
  const { ref: wrapRef, isVisible: wrapVisible } = useIntersectionObserver();

  const graphSrc = dark
    ? `https://ghchart.rshah.org/60a5fa/stackychan`
    : `https://ghchart.rshah.org/2563eb/stackychan`;

  return (
    <section id="activity" className="grid-bg relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4"
            style={{ color: "var(--text)" }}
          >
            Activity <em className="font-serif italic">Graph</em>
          </h2>
          <p
            className="text-lg leading-relaxed mx-auto max-w-xl"
            style={{ color: "var(--text-muted)" }}
          >
            A visual representation of my open-source journey and consistency.
          </p>
        </div>

        <div
          ref={wrapRef}
          className={`section-animate rounded-[2rem] p-6 border overflow-hidden ${
            wrapVisible ? "visible" : ""
          }`}
          style={{
            background: "var(--bg-card)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={graphSrc}
            alt="Shiblee Showkat GitHub Contributions"
            className="w-full rounded-2xl block"
          />

          <div
            className="flex justify-between items-center mt-6 pt-6 text-[0.78rem] border-t"
            style={{
              borderColor: "var(--border)",
              color: "var(--text-muted)",
            }}
          >
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full bg-green-500 animate-pulse-dot"
                style={{ boxShadow: "0 0 8px rgba(34,197,94,0.6)" }}
              />
              <span>Live from GitHub — @stackychan</span>
            </div>

            <div className="flex items-center gap-1.5">
              <span>Less</span>
              {["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"].map(
                (color) => (
                  <div
                    key={color}
                    className="w-3 h-3 rounded-sm"
                    style={{ background: color }}
                  />
                )
              )}
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
