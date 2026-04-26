"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  children: ReactNode;
  className?: string;
  as?: "a" | "button";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

const MagneticButton = ({ children, className = "", as = "button", href, onClick, type, disabled }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) * 0.3;
    const y = (e.clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative overflow-hidden group ${className}`}
      >
        <span className="absolute inset-0 bg-primary/10 scale-0 group-hover:scale-100 rounded-xl transition-transform duration-500 origin-center" />
        <span className="relative z-10">{children}</span>
      </motion.div>
    </motion.div>
  );

  if (as === "a" && href) {
    const isInternal = href.startsWith("/") || href.startsWith("#");
    if (isInternal) {
      return (
        <Link href={href} onClick={onClick} className="inline-block">
          {inner}
        </Link>
      );
    }
    return <a href={href} onClick={onClick} target="_blank" rel="noopener noreferrer" className="inline-block">{inner}</a>;
  }

  return <button onClick={onClick} type={type} disabled={disabled} className="inline-block">{inner}</button>;
};

export default MagneticButton;
