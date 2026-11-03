import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal, { SectionHeading } from "./Reveal";
import { skillCategories } from "../data/profile";
export default function Skills() {
  const [active, setActive] = useState(2);
  const cat = skillCategories[active];
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading kicker="02 — Expertise" title="MY TECHNOLOGY STACK." />
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
            {skillCategories.map((c, i) => (
              <button key={c.title} role="tab" aria-selected={i === active} onClick={() => setActive(i)} className={`rounded-full px-5 py-2.5 text-sm border transition ${i === active ? "bg-gradient-to-r from-[#8f1748] to-[#477bff] border-transparent text-white" : "border-white/15 text-[#a1a1aa] hover:text-white"}`}>{c.title}</button>
            ))}
          </div>
        </Reveal>
        <AnimatePresence mode="wait">
          <motion.div key={cat.title} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }} className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {cat.skills.map((s, i) => (
              <motion.div key={s} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} className="group rounded-2xl bg-[#111] border border-white/8 px-5 py-6 hover:border-[#477bff]/60 hover:-translate-y-1 transition">
                <p className="font-mono text-[11px] text-[#a1a1aa]">{cat.title.toUpperCase()} / {String(i + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-display font-bold text-lg group-hover:grad-text">{s}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
