import { profile } from "../data/profile";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-12">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row gap-8 md:items-end justify-between">
        <div>
          <p className="font-display text-3xl font-extrabold">IYAPPAN <span className="text-[#477bff]">S.</span></p>
          <p className="mt-2 text-sm text-[#a1a1aa]">Forward Deployed Engineer | AI Integration | Full Stack | DevOps</p>
          <p className="mt-4 text-xs text-zinc-500">© {new Date().getFullYear()} Iyappan S. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 rounded-full border border-white/15 hover:border-[#477bff] transition"><GithubIcon /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 rounded-full border border-white/15 hover:border-[#477bff] transition"><LinkedinIcon /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="p-3 rounded-full border border-white/15 hover:border-[#477bff] transition"><Mail size={18} /></a>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="p-3 rounded-full bg-gradient-to-br from-[#8f1748] to-[#477bff] hover:opacity-90 transition"><ArrowUp size={18} /></button>
        </div>
      </div>
    </footer>
  );
}
