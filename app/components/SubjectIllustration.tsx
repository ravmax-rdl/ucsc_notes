"use client";

import { motion, useReducedMotion } from "motion/react";
import type { SubjectIllustration as IllustrationId } from "../data/catalog";

const ease = [0.19, 1, 0.22, 1] as const;

function Frame({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div
      className="relative aspect-square w-full max-w-[140px] overflow-hidden rounded-sm border border-cf-border bg-cf-surface"
      role="img"
      aria-label={title}
    >
      <svg viewBox="0 0 120 120" className="h-full w-full" fill="none">
        {children}
      </svg>
    </div>
  );
}

export function SubjectIllustration({
  id,
  title,
}: {
  id: IllustrationId;
  title: string;
}) {
  const reduce = useReducedMotion();

  const pulse = reduce
    ? undefined
    : {
        opacity: [0.45, 1, 0.45],
        transition: { duration: 2.4, repeat: Infinity, ease },
      };

  const drift = reduce
    ? undefined
    : {
        y: [0, -3, 0],
        transition: { duration: 3.2, repeat: Infinity, ease },
      };

  switch (id) {
    case "lab":
      return (
        <Frame title={title}>
          <motion.rect
            x="22"
            y="28"
            width="76"
            height="54"
            rx="2"
            stroke="var(--color-cf-primary)"
            strokeWidth="2"
            animate={drift}
          />
          <motion.path
            d="M34 48h20M34 58h36M34 68h28"
            stroke="var(--color-cf-text-muted)"
            strokeWidth="2"
            strokeLinecap="round"
            animate={pulse}
          />
          <circle cx="32" cy="36" r="2.5" fill="var(--color-cf-primary)" />
          <circle cx="42" cy="36" r="2.5" fill="var(--color-cf-text-muted)" />
        </Frame>
      );
    case "c-structures":
      return (
        <Frame title={title}>
          <motion.circle
            cx="60"
            cy="34"
            r="10"
            stroke="var(--color-cf-primary)"
            strokeWidth="2"
            animate={drift}
          />
          <path
            d="M60 44v14M46 72v0M74 72v0M60 58l-14 14M60 58l14 14"
            stroke="var(--color-cf-text-muted)"
            strokeWidth="2"
          />
          <motion.circle
            cx="46"
            cy="78"
            r="8"
            stroke="var(--color-cf-primary)"
            strokeWidth="2"
            animate={pulse}
          />
          <motion.circle
            cx="74"
            cy="78"
            r="8"
            stroke="var(--color-cf-primary)"
            strokeWidth="2"
            animate={pulse}
          />
        </Frame>
      );
    case "systems":
      return (
        <Frame title={title}>
          <motion.rect
            x="30"
            y="30"
            width="60"
            height="60"
            rx="2"
            stroke="var(--color-cf-primary)"
            strokeWidth="2"
            animate={drift}
          />
          {[42, 54, 66].map((y) => (
            <motion.line
              key={y}
              x1="20"
              y1={y}
              x2="30"
              y2={y}
              stroke="var(--color-cf-text-muted)"
              strokeWidth="2"
              animate={pulse}
            />
          ))}
          {[42, 54, 66].map((y) => (
            <line
              key={`r-${y}`}
              x1="90"
              y1={y}
              x2="100"
              y2={y}
              stroke="var(--color-cf-text-muted)"
              strokeWidth="2"
            />
          ))}
          <rect
            x="44"
            y="44"
            width="32"
            height="32"
            stroke="var(--color-cf-accent)"
            strokeWidth="1.5"
          />
        </Frame>
      );
    case "discrete":
      return (
        <Frame title={title}>
          <motion.path
            d="M28 70c16-28 48-28 64 0"
            stroke="var(--color-cf-primary)"
            strokeWidth="2.5"
            animate={drift}
          />
          <motion.circle
            cx="40"
            cy="42"
            r="7"
            stroke="var(--color-cf-text)"
            strokeWidth="2"
            animate={pulse}
          />
          <motion.circle
            cx="80"
            cy="42"
            r="7"
            stroke="var(--color-cf-text)"
            strokeWidth="2"
            animate={pulse}
          />
          <path
            d="M52 78h16M60 70v16"
            stroke="var(--color-cf-text-muted)"
            strokeWidth="2"
          />
        </Frame>
      );
    case "algebra":
      return (
        <Frame title={title}>
          <motion.g animate={drift}>
            <path
              d="M34 34v52M86 34v52"
              stroke="var(--color-cf-primary)"
              strokeWidth="2.5"
            />
            {[44, 60, 76].map((y, i) =>
              [42, 58, 74].map((x, j) => (
                <circle
                  key={`${x}-${y}`}
                  cx={x}
                  cy={y}
                  r="3"
                  fill={
                    i === j
                      ? "var(--color-cf-primary)"
                      : "var(--color-cf-text-muted)"
                  }
                />
              )),
            )}
          </motion.g>
        </Frame>
      );
    case "probability":
      return (
        <Frame title={title}>
          <motion.path
            d="M20 82 C36 82, 40 28, 60 28 C80 28, 84 82, 100 82"
            stroke="var(--color-cf-primary)"
            strokeWidth="2.5"
            animate={drift}
          />
          <motion.line
            x1="60"
            y1="28"
            x2="60"
            y2="82"
            stroke="var(--color-cf-text-muted)"
            strokeWidth="1.5"
            strokeDasharray="3 3"
            animate={pulse}
          />
          <line
            x1="18"
            y1="84"
            x2="102"
            y2="84"
            stroke="var(--color-cf-border)"
            strokeWidth="2"
          />
        </Frame>
      );
    case "algorithms":
      return (
        <Frame title={title}>
          <motion.circle
            cx="60"
            cy="28"
            r="8"
            stroke="var(--color-cf-primary)"
            strokeWidth="2"
            animate={drift}
          />
          <path
            d="M60 36v16M48 68v0M72 68v0M60 52l-12 16M60 52l12 16M48 76v16M72 76v16"
            stroke="var(--color-cf-text-muted)"
            strokeWidth="2"
          />
          <motion.circle
            cx="48"
            cy="76"
            r="7"
            stroke="var(--color-cf-primary)"
            strokeWidth="2"
            animate={pulse}
          />
          <motion.circle
            cx="72"
            cy="76"
            r="7"
            stroke="var(--color-cf-accent)"
            strokeWidth="2"
            animate={pulse}
          />
        </Frame>
      );
    case "engineering":
      return (
        <Frame title={title}>
          {[28, 50, 72].map((y, i) => (
            <motion.rect
              key={y}
              x="28"
              y={y}
              width="64"
              height="16"
              rx="1"
              stroke="var(--color-cf-primary)"
              strokeWidth="2"
              animate={
                reduce
                  ? undefined
                  : {
                      x: [28, 28 + (i % 2 === 0 ? 2 : -2), 28],
                      transition: {
                        duration: 2.8,
                        delay: i * 0.15,
                        repeat: Infinity,
                        ease,
                      },
                    }
              }
            />
          ))}
        </Frame>
      );
    default:
      return (
        <Frame title={title}>
          <circle
            cx="60"
            cy="60"
            r="20"
            stroke="var(--color-cf-primary)"
            strokeWidth="2"
          />
        </Frame>
      );
  }
}
