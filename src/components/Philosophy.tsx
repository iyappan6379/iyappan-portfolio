import Reveal, { SectionHeading } from "./Reveal";
import { philosophy } from "../data/profile";
export default function Philosophy() {
  return (
    <section className="py-24 sm:py-32 bg-[#0b0b0b]" aria-label="Engineering philosophy">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading kicker="05 — Philosophy" title="THINK. BUILD. INTEGRATE. DEPLOY." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {philosophy.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="group h-full rounded-3xl bg-[#111] border border-white/8 p-7 hover:bg-gradient-to-b hover:from-[#8f1748]/25 hover:to-[#477bff]/15 hover:-translate-y-2 transition duration-500">
                <p className="font-mono text-sm text-[#477bff]">{s.n}</p>
                <h3 className="font-display text-3xl font-extrabold mt-8">{s.title}</h3>
                <p className="mt-3 text-[#a1a1aa] leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
