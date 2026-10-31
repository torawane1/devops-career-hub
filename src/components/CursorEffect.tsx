import { useEffect, useRef } from 'react';

const CursorEffect = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Touch screens have no cursor to follow
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    const handleMove = (event: PointerEvent) => {
      glow.style.background = `radial-gradient(420px circle at ${event.clientX}px ${event.clientY}px, hsl(var(--primary) / 0.14), transparent 70%)`;
      glow.style.opacity = '1';
    };

    const handleLeave = () => {
      glow.style.opacity = '0';
    };

    window.addEventListener('pointermove', handleMove);
    document.documentElement.addEventListener('pointerleave', handleLeave);

    return () => {
      window.removeEventListener('pointermove', handleMove);
      document.documentElement.removeEventListener('pointerleave', handleLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-[5] opacity-0 transition-opacity duration-300"
    />
  );
};

export default CursorEffect;
