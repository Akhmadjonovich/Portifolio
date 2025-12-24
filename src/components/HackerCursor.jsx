"use client";
import { useEffect } from "react";

export default function HackerCursor() {
  useEffect(() => {
    const cursor = document.getElementById("hc");

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      id="hc"
      className="pointer-events-none fixed z-50
      w-10 h-10 -translate-x-1/2 -translate-y-1/2
      border border-green-400/50
      animate-pulse"
    >
      <div className="absolute inset-[-10px] border border-green-400/20 animate-ping" />
    </div>
  );
}
