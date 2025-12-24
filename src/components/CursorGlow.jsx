import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-40"
      style={{
        left: pos.x - 120,
        top: pos.y - 120,
        width: 240,
        height: 240,
        background:
          "radial-gradient(circle, rgba(0,255,136,0.35), transparent 60%)",
        filter: "blur(20px)",
      }}
    />
  );
}
