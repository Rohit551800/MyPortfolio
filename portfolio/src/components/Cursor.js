import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0, rx = 0, ry = 0;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${mx - 6}px, ${my - 6}px)`;
      }
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ring.current) {
        ring.current.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', move);
    animate();

    const grow = () => { if (dot.current) dot.current.style.transform += ' scale(2.5)'; };
    const shrink = () => {};
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div className="cursor" ref={dot} />
      <div className="cursor-ring" ref={ring} />
    </>
  );
}