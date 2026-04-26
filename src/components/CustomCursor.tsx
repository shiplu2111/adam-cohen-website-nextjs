"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide on touch devices
    if ("ontouchstart" in window) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
      gsap.to(dotRef.current, { x: e.clientX, y: e.clientY, duration: 0.1, ease: "power2.out" });
      gsap.to(ringRef.current, { x: e.clientX, y: e.clientY, duration: 0.35, ease: "power2.out" });
    };

    const interactiveSelectors = "a, button, [role='button'], input, textarea, .hero-btn, .hero-btn-outline, .glass-card, .magnetic-btn";

    const onEnter = () => setHovering(true);
    const onLeave = () => setHovering(false);
    const onMouseLeave = () => setVisible(false);
    const onMouseEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    const addListeners = () => {
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      observer.disconnect();
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [visible]);

  if ("ontouchstart" in globalThis) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-[width,height,background] duration-300"
        style={{
          width: hovering ? 12 : 6,
          height: hovering ? 12 : 6,
          borderRadius: "50%",
          background: hovering ? "hsl(38, 80%, 55%)" : "#fff",
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-300"
        style={{
          width: hovering ? 56 : 36,
          height: hovering ? 56 : 36,
          borderColor: hovering ? "hsl(38, 80%, 55%)" : "rgba(255,255,255,0.3)",
          borderWidth: hovering ? 2 : 1,
          opacity: visible ? 1 : 0,
          background: hovering ? "hsla(38, 80%, 55%, 0.06)" : "transparent",
        }}
      />
      <style>{`* { cursor: none !important; } @media (pointer: coarse) { * { cursor: auto !important; } }`}</style>
    </>
  );
};

export default CustomCursor;
