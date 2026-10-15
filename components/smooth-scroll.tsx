"use client";

import { ReactLenis } from "lenis/react";
import { useEffect, useState, type ReactNode } from "react";

export function SmoothScroll({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const update = () => setEnabled(!motionPreference.matches);

    update();
    motionPreference.addEventListener("change", update);

    return () => motionPreference.removeEventListener("change", update);
  }, []);

  if (!enabled) return children;

  return (
    <ReactLenis root options={{ anchors: true, lerp: 0.1 }}>
      {children}
    </ReactLenis>
  );
}
