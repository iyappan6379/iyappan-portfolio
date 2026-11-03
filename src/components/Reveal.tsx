import { motion } from "framer-motion";
import type { ReactNode } from "react";
export default function Reveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}
export function SectionHeading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal>
      <p className="font-mono text-xs tracking-[0.35em] text-[#477bff] uppercase mb-4">{kicker}</p>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.02] tracking-tight">{title}</h2>
    </Reveal>
  );
}
