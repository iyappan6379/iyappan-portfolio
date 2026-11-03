import Reveal, { SectionHeading } from "./Reveal";
import { GraduationCap } from "lucide-react";
export default function Education() {
  return (
    <section className="py-24 sm:py-28" aria-label="Education">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <SectionHeading kicker="06 — Education" title="EDUCATION." />
        <Reveal delay={0.1}>
          <div className="mt-10 glass rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row gap-6 sm:items-center">
            <span className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8f1748] to-[#477bff] flex items-center justify-center"><GraduationCap /></span>
            <div>
              <h3 className="font-display text-2xl font-bold">B.Sc. Computer Science with Cyber Security</h3>
              <p className="mt-1 text-[#a1a1aa]">Erode Arts and Science College</p>
              <p className="mt-2 font-mono text-xs tracking-[0.25em] text-[#477bff]">JUNE 2023 – APRIL 2026</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
