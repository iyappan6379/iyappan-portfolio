import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowDown, Download, FolderOpen } from "lucide-react";
import { profile } from "../data/profile";
function NetworkCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d"); if (!ctx) return;
    let w = 0, h = 0, raf = 0; const mouse = { x: -9999, y: -9999 };
    const resize = () => { w = canvas.width = canvas.offsetWidth; h = canvas.height = canvas.offsetHeight; };
    resize(); window.addEventListener("resize", resize);
    const pts = Array.from({ length: window.innerWidth < 768 ? 36 : 70 }, () => ({ x: Math.random(), y: Math.random(), vx: (Math.random() - .5) * .0006, vy: (Math.random() - .5) * .0006 }));
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > 1) p.vx *= -1; if (p.y < 0 || p.y > 1) p.vy *= -1;
        const x = p.x * w, y = p.y * h;
        ctx.beginPath(); ctx.arc(x, y, 1.4, 0, Math.PI * 2); ctx.fillStyle = "rgba(71,123,255,.7)"; ctx.fill();
        for (const q of pts) { const dx = x - q.x * w, dy = y - q.y * h, d = Math.hypot(dx, dy); if (d < 130) { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(q.x * w, q.y * h); ctx.strokeStyle = `rgba(143,23,72,${(1 - d / 130) * .25})`; ctx.stroke(); } }
        const md = Math.hypot(x - mouse.x, y - mouse.y);
        if (md < 180) { ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(mouse.x, mouse.y); ctx.strokeStyle = "rgba(71,123,255,.35)"; ctx.stroke(); }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    const move = (e: PointerEvent) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    window.addEventListener("pointermove", move);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", move); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full opacity-60" aria-hidden />;
}
export default function Hero() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (nameRef.current) gsap.fromTo(nameRef.current.querySelectorAll(".hero-line"), { yPercent: 110 }, { yPercent: 0, duration: 1, stagger: 0.12, delay: 1.5, ease: "power4.out" });
  }, []);
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_10%,rgba(143,23,72,.28),transparent),radial-gradient(50%_40%_at_85%_80%,rgba(71,123,255,.22),transparent)]" aria-hidden />
      <NetworkCanvas />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-24 w-full">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.7 }} className="font-mono text-xs sm:text-sm tracking-[0.4em] text-[#a1a1aa]">HELLO, I'M — {profile.location.toUpperCase()}</motion.p>
        <h1 ref={nameRef} className="font-display font-extrabold leading-[0.95] mt-4 text-[17vw] sm:text-[13vw] lg:text-[9.5rem]">
          <span className="block overflow-hidden"><span className="hero-line block">IYAPPAN</span></span>
          <span className="block overflow-hidden"><span className="hero-line block grad-text">S.</span></span>
        </h1>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2, duration: .7 }}>
          <p className="mt-6 font-display text-xl sm:text-3xl font-bold leading-snug">I BUILD INTELLIGENT SYSTEMS.<br /><span className="text-[#a1a1aa]">I ENGINEER DIGITAL EXPERIENCES.</span></p>
          <p className="mt-4 max-w-xl text-[#a1a1aa]">Forward Deployed Engineer specializing in AI integration, full-stack engineering, automation, and cloud infrastructure.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white text-black font-semibold px-6 py-3 hover:bg-[#477bff] hover:text-white transition"><FolderOpen size={18} /> Explore My Work</a>
            <a href={profile.resumeRequestUrl} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 hover:border-[#8f1748] transition"><Download size={18} /> Request Resume</a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[#a1a1aa] hover:text-white transition">Let's Connect →</a>
          </div>
        </motion.div>
      </div>
      <motion.a href="#about" aria-label="Scroll to About" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#a1a1aa]" animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}><ArrowDown /></motion.a>
    </section>
  );
}
