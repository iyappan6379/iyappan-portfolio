import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export default function Loader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(100, Math.round(((t - start) / 1400) * 100));
      setCount(p);
      if (p < 100) raf = requestAnimationFrame(tick); else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div className="fixed inset-0 z-[100] bg-[#080808] flex flex-col items-center justify-center" exit={{ y: "-100%" }} transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }} aria-hidden>
          <div className="flex overflow-hidden">
            {"IYAPPAN S.".split("").map((c, i) => (
              <motion.span key={i} initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ delay: i * 0.05, duration: 0.5 }} className="font-display text-4xl sm:text-6xl font-extrabold">{c === " " ? "\u00A0" : c}</motion.span>
            ))}
          </div>
          <div className="mt-8 w-56 h-px bg-white/15"><div className="h-full bg-gradient-to-r from-[#8f1748] to-[#477bff]" style={{ width: `${count}%` }} /></div>
          <p className="mt-4 font-mono text-sm text-[#a1a1aa]">{count}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
