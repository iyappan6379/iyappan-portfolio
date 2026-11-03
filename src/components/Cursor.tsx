import { useEffect, useRef } from "react";
export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    document.body.classList.add("cursor-none-desktop");
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0;
    const move = (e: PointerEvent) => { x = e.clientX; y = e.clientY; if (dot.current) dot.current.style.transform = `translate(${x}px,${y}px)`; };
    const loop = () => { rx += (x - rx) * 0.16; ry += (y - ry) * 0.16; if (ring.current) ring.current.style.transform = `translate(${rx}px,${ry}px)`; raf = requestAnimationFrame(loop); };
    loop(); window.addEventListener("pointermove", move);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("pointermove", move); document.body.classList.remove("cursor-none-desktop"); };
  }, []);
  return (<div className="hidden md:block" aria-hidden>
    <div ref={ring} className="fixed top-0 left-0 z-[90] pointer-events-none"><span className="block -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-[#477bff]/70" /></div>
    <div ref={dot} className="fixed top-0 left-0 z-[90] pointer-events-none"><span className="block -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#ff5c8a]" /></div>
  </div>);
}
