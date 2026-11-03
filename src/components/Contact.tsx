import { useState } from "react";
import Reveal, { SectionHeading } from "./Reveal";
import { profile } from "../data/profile";
import { Mail, Phone, Download, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(form.subject || "Portfolio enquiry")}&body=${body}`;
  };
  const input = "w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-[#477bff] transition placeholder:text-zinc-500";
  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#0b0b0b]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14">
        <div>
          <SectionHeading kicker="07 — Contact" title="HAVE AN IDEA? LET'S BUILD IT." />
          <Reveal delay={0.1}>
            <p className="mt-6 text-[#a1a1aa] max-w-md leading-relaxed">Have a project, an interesting opportunity, or a challenging problem? Let's connect and create something meaningful.</p>
            <ul className="mt-9 space-y-4 text-[15px]">
              <li><a className="inline-flex gap-3 items-center hover:text-[#477bff] transition" href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a></li>
              <li><a className="inline-flex gap-3 items-center hover:text-[#477bff] transition" href={`tel:${profile.phone.replace(/\s/g, "")}`}><Phone size={18} /> {profile.phone}</a></li>
              <li><a className="inline-flex gap-3 items-center hover:text-[#477bff] transition" href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> linkedin.com/in/iyappan-s0511</a></li>
              <li><a className="inline-flex gap-3 items-center hover:text-[#477bff] transition" href={profile.github} target="_blank" rel="noreferrer"><GithubIcon /> github.com/iyappan6379</a></li>
            </ul>
            <a href={profile.resumeRequestUrl} className="mt-9 inline-flex items-center gap-2 rounded-full bg-white text-black font-semibold px-6 py-3 hover:bg-[#477bff] hover:text-white transition"><Download size={18} /> Request Resume</a>
            <p className="mt-4 text-xs text-[#a1a1aa]">The form opens your email app addressed to Iyappan — no message is sent until you press send there.</p>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <form onSubmit={submit} className="glass rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input required value={form.name} onChange={set("name")} placeholder="Your name" aria-label="Name" className={input} />
              <input required type="email" value={form.email} onChange={set("email")} placeholder="Your email" aria-label="Email" className={input} />
            </div>
            <input required value={form.subject} onChange={set("subject")} placeholder="Subject" aria-label="Subject" className={input} />
            <textarea required rows={6} value={form.message} onChange={set("message")} placeholder="Tell me about your project or opportunity…" aria-label="Message" className={input} />
            <button type="submit" className="w-full inline-flex justify-center items-center gap-2 rounded-full bg-gradient-to-r from-[#8f1748] to-[#477bff] font-semibold py-3.5 hover:opacity-90 transition"><Send size={17} /> Send via Email</button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
