"use client";

import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [showCursor, setShowCursor] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);
  const positionRef = useRef({ x: 0, y: 0 });
  const trailRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const isTouch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    if (isTouch) return;
    setShowCursor(true);
    document.body.classList.add("custom-cursor-active");

    const handleMove = (e) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    const handleOver = (e) => {
      const target = e.target;
      const interactive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[role='button']");
      setIsPointer(!!interactive);
    };

    const animate = () => {
      const pos = positionRef.current;
      const tr = trailRef.current;
      const nx = tr.x + (pos.x - tr.x) * 0.2;
      const ny = tr.y + (pos.y - tr.y) * 0.2;
      trailRef.current = { x: nx, y: ny };
      setTrail({ x: nx, y: ny });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    document.body.addEventListener("mouseleave", handleLeave);
    document.body.addEventListener("mouseenter", handleEnter);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      document.body.removeEventListener("mouseleave", handleLeave);
      document.body.removeEventListener("mouseenter", handleEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!showCursor) return null;

  // Small size so cursor isn’t oversized (paper plane .cur scaled down)
  const sizePx = isPointer ? 22 : 18;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-opacity duration-200"
      style={{
        left: trail.x,
        top: trail.y,
        width: sizePx,
        height: sizePx,
        transform: "translate(-25%, -25%)",
        opacity: visible ? 1 : 0,
      }}
      aria-hidden
    >
      {imgFailed ? (
        <div
          className="w-full h-full rounded-full bg-[#fafaf8]"
          style={{ opacity: 0.9 }}
        />
      ) : (
        <img
          src="/paper-plane.cur"
          alt=""
          width={sizePx}
          height={sizePx}
          className="block w-full h-full object-contain"
          style={{ pointerEvents: "none" }}
          onError={() => setImgFailed(true)}
        />
      )}
    </div>
  );
}
