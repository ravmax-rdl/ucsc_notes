"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import type { SubjectWithPdf } from "../data/catalog";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
};

type Edge = { a: number; b: number };

function buildLinks(count: number): Edge[] {
  if (count < 2) return [];
  const edges: Edge[] = [];
  for (let i = 0; i < count; i++) {
    edges.push({ a: i, b: (i + 1) % count });
    if (count > 3) {
      edges.push({ a: i, b: (i + 2) % count });
    }
  }
  return edges;
}

function cssVar(name: string, fallback: string) {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  return value || fallback;
}

export function TopicNetworkViz({
  subjects,
  label = "Active compilation",
}: {
  subjects: SubjectWithPdf[];
  label?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let raf = 0;
    let running = true;

    const nodes: Node[] = subjects.map((s, i) => {
      const angle = (i / Math.max(subjects.length, 1)) * Math.PI * 2 - Math.PI / 2;
      return {
        id: s.slug,
        label: s.code ?? s.title.split(" ")[0] ?? s.title,
        x: Math.cos(angle),
        y: Math.sin(angle),
      };
    });

    const edges = buildLinks(nodes.length);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      if (!running) return;
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const cx = w * 0.5;
      const cy = h * 0.5;
      const radius = Math.min(w, h) * 0.32;
      const textColor = cssVar("--color-cf-text", "#f2f2f0");
      const muted = cssVar("--color-cf-text-muted", "#a3a3a3");

      ctx.clearRect(0, 0, w, h);

      if (!reduce) {
        frame += 1;
        const t = frame * 0.008;
        nodes.forEach((node, i) => {
          const base = (i / nodes.length) * Math.PI * 2 - Math.PI / 2;
          node.x = Math.cos(base + Math.sin(t + i) * 0.08);
          node.y = Math.sin(base + Math.cos(t * 0.9 + i) * 0.08);
        });
      }

      ctx.strokeStyle = "rgba(255, 94, 31, 0.28)";
      ctx.lineWidth = 1;
      for (const edge of edges) {
        const a = nodes[edge.a];
        const b = nodes[edge.b];
        if (!a || !b) continue;
        ctx.beginPath();
        ctx.moveTo(cx + a.x * radius, cy + a.y * radius);
        ctx.lineTo(cx + b.x * radius, cy + b.y * radius);
        ctx.stroke();
      }

      nodes.forEach((node, i) => {
        const x = cx + node.x * radius;
        const y = cy + node.y * radius;
        const available = subjects[i]?.url != null;

        ctx.beginPath();
        ctx.fillStyle = available ? "#ff5e1f" : muted;
        ctx.arc(x, y, 7, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.strokeStyle = available
          ? "rgba(255, 94, 31, 0.3)"
          : "rgba(163, 163, 163, 0.35)";
        ctx.lineWidth = 1;
        ctx.arc(
          x,
          y,
          16 + (reduce ? 0 : Math.sin(frame * 0.04 + i) * 2),
          0,
          Math.PI * 2,
        );
        ctx.stroke();

        ctx.fillStyle = textColor;
        ctx.font = "500 12px 'Space Grotesk', sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(node.label, x, y + 32);
      });

      if (!reduce) {
        raf = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [subjects, reduce]);

  return (
    <section
      id="visualization"
      className="border-b border-cf-border bg-cf-surface"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8 md:py-28">
        <h2 className="max-w-xl text-3xl font-medium tracking-[-0.03em] text-cf-text md:text-4xl">
          {subjects.length} subjects in {label}
        </h2>
        <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-cf-text-muted">
          Modules in the selected compilation, linked by shared ideas across
          math, systems, and software practice.
        </p>
        <div className="mt-10 h-[360px] w-full md:h-[440px]">
          <canvas
            ref={canvasRef}
            className="h-full w-full"
            role="img"
            aria-label={`Animated network of subjects in ${label}`}
          />
        </div>
      </div>
    </section>
  );
}
