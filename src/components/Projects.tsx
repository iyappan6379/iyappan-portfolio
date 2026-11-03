import Reveal, { SectionHeading } from "./Reveal";
import { projects } from "../data/profile";
import { ArrowUpRight } from "lucide-react";
export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading kicker="04 — Projects" title="SELECTED WORK." />
        <div className="mt-14 space-y-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className="group grid lg:grid-cols-5 rounded-3xl overflow-hidden border border-white/8 bg-[#111] hover:border-white/20 transition">
                <div className={`lg:col-span-2 min-h-52 bg-gradient-to-br ${p.hue} relative flex items-end p-7 overflow-hidden`}>
                  <span className="font-display font-extrabold text-[7rem] leading-none text-white/10 group-hover:scale-110 transition duration-700" aria-hidden>{p.index}</span>
                  <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_80%_10%,rgba(255,255,255,.14),transparent)]" aria-hidden />
                </div>
                <div className="lg:col-span-3 p-7 sm:p-10">
                  <p className="font-mono text-xs tracking-[0.3em] text-[#a1a1aa]">PROJECT {p.index}</p>
                  <h3 className="font-display text-2xl sm:text-4xl font-bold mt-3 group-hover:grad-text transition">{p.title}</h3>
                  <p className="mt-4 text-[#a1a1aa] leading-relaxed max-w-2xl">{p.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">{p.tech.map((t) => (<span key={t} className="rounded-full border border-white/12 px-3 py-1 text-xs text-white/85">{t}</span>))}</div>
                  <p className="mt-7 inline-flex items-center gap-1 text-sm text-[#a1a1aa]">Case study available on request <ArrowUpRight size={16} /></p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal><p className="mt-8 text-sm text-[#a1a1aa]">More work — including ZYNA, Namma Loco and P2G League — will be showcased here once verified details and screenshots are added.</p></Reveal>
      </div>
    </section>
  );
}
