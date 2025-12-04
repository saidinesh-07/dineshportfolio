import { useEffect, useState } from "react";

export function FluidCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const gradientX = (mousePosition.x / window.innerWidth) * 100;
  const gradientY = (mousePosition.y / window.innerHeight) * 100;

  return (
    <div
      className="fixed inset-0 pointer-events-none transition-all duration-300 ease-out"
      style={{
        background: `radial-gradient(circle at ${gradientX}% ${gradientY}%, hsl(var(--glow-primary) / 0.15), transparent 50%)`,
      }}
    />
  );
}
