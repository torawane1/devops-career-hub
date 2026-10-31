import { useEffect, useRef } from 'react';

const STAR_COUNT = 220;

const Starfield = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random(),
      y: Math.random(),
      depth: 0.2 + Math.random() * 0.8,
      phase: Math.random() * Math.PI * 2,
    }));
    let frame = 0;

    const draw = (time: number) => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (const star of stars) {
        const y = (star.y + (time / 900000) * star.depth) % 1;
        const twinkle = 0.75 + 0.25 * Math.sin(time / 1200 + star.phase);
        context.globalAlpha = star.depth * 0.6 * twinkle;
        context.fillStyle = star.depth > 0.85 ? '#9fe9f5' : '#dbe7f0';
        context.fillRect(star.x * canvas.width, y * canvas.height, star.depth * 1.6, star.depth * 1.6);
      }
    };

    const loop = (time: number) => {
      draw(time);
      frame = requestAnimationFrame(loop);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (reducedMotion) draw(0);
    };

    resize();
    window.addEventListener('resize', resize);
    if (!reducedMotion) frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10" />;
};

export default Starfield;
