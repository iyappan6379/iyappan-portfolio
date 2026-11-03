import Reveal, { SectionHeading } from "./Reveal";
import { profile } from "../data/profile";
import { Download, MapPin } from "lucide-react";
const highlights = ["Full-Stack Development", "AI Agent Integration", "DevOps & Production Deployments", "Business Automation"];
export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <SectionHeading kicker="01 — About" title="ENGINEERING IDEAS INTO REALITY." />
          <Reveal delay={0.1}>
            <p className="mt-6 text-[#a1a1aa] leading-relaxed">I am a technology engineer passionate about building practical software solutions that connect applications, AI systems, automation, and cloud infrastructure.</p>
            <p className="mt-4 text-[#a1a1aa] leading-relaxed">My experience spans full-stack development, AI agent integration, DevOps engineering, and production deployments. I enjoy solving complex problems, connecting different systems, and turning ideas into working products.</p>
            <p className="mt-4 text-white/90 italic">“I transform business requirements into real-world technology solutions.”</p>
            <p className="mt-5 inline-flex items-center gap-2 text-sm text-[#a1a1aa]"><MapPin size={16} /> {profile.location}</p>
            <div className="mt-7"><a href={profile.resumeRequestUrl} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-5 py-2.5 hover:border-[#477bff] transition"><Download size={16} /> Request Resume</a></div>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div className="glass rounded-3xl p-6 sm:p-8 font-mono text-sm leading-7" aria-label="Technical visual">
            <p className="text-[#a1a1aa]">~/iyappan — whoami</p>
            <p><span className="text-[#ff5c8a]">const</span> <span className="text-[#477bff]">engineer</span> = {"{"}</p>
            <p className="pl-5">build: <span className="text-emerald-300">"full-stack apps"</span>,</p>
            <p className="pl-5">integrate: <span className="text-emerald-300">"AI agents · APIs · CRM"</span>,</p>
            <p className="pl-5">automate: <span className="text-emerald-300">"n8n · Python"</span>,</p>
            <p className="pl-5">deploy: <span className="text-emerald-300">"AWS · Docker · Nginx"</span>,</p>
            <p>{"}"};</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 font-body">
              {highlights.map((h) => (<div key={h} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm">{h}</div>))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
