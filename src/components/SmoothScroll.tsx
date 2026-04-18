"use client";

import { ReactLenis } from "lenis/react";
import { ReactNode } from "react";

/**
 * Lenis smooth scroll wrapper.
 * lerp 0.08 = snappy but smooth.
 * duration 1.2 = not over-dragged.
 */
export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        // Do not override touch scroll — keep native on mobile
        prevent: (node: Element) => node.id === "modal-scroll",
      }}
    >
      {children}
    </ReactLenis>
  );
}
