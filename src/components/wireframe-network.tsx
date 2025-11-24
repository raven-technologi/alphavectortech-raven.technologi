"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";

export function WireframeNetwork({ className }: { className?: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xTransform = useTransform(x, [0, 1], [-20, 20]);
  const yTransform = useTransform(y, [0, 1], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      x.set((event.clientX - rect.left) / rect.width);
      y.set((event.clientY - rect.top) / rect.height);
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      style={{ perspective: "800px" }}
    >
      <motion.div
        style={{
          translateX: xTransform,
          translateY: yTransform,
          rotateX: useTransform(y, [0, 1], [10, -10]),
          rotateY: useTransform(x, [0, 1], [-10, 10]),
        }}
      >
        <motion.svg
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          width="100%"
          height="100%"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <g strokeWidth="0.5">
            <motion.line x1="100" y1="100" x2="400" y2="200" stroke="url(#grad1)" />
            <motion.line x1="400" y1="200" x2="700" y2="100" stroke="url(#grad2)" />
            <motion.line x1="400" y1="200" x2="150" y2="350" stroke="url(#grad1)" />
            <motion.line x1="400" y1="200" x2="650" y2="350" stroke="url(#grad2)" />
          </g>

          <g>
            <motion.circle cx="400" cy="200" r="5" fill="hsl(var(--primary))" />
            <motion.circle cx="100" cy="100" r="3" fill="hsl(var(--secondary))" />
            <motion.circle cx="700" cy="100" r="3" fill="hsl(var(--secondary))" />
            <motion.circle cx="150" cy="350" r="3" fill="hsl(var(--secondary))" />
            <motion.circle cx="650" cy="350" r="3" fill="hsl(var(--secondary))" />
          </g>
        </motion.svg>
      </motion.div>
    </motion.div>
  );
}
