import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "../data/profile";
const links = [["Home", "#home"], ["About", "#about"], ["Skills", "#skills"], ["Experience", "#experience"], ["Projects", "#projects"], ["Contact", "#contact"]] as const;
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      for (const [, href] of [...links].reverse()) {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top <= 160) { setActive(href.slice(1)); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? "glass" : "bg-transparent"}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4" aria-label="Main">
        <a href="#home" className="font-display font-extrabold tracking-wide text-lg">IYAPPAN <span className="text-[#477bff]">S.</span></a>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map(([label, href]) => (
            <li key={href}><a href={href} className={`transition ${active === href.slice(1) ? "text-white" : "text-[#a1a1aa] hover:text-white"}`}>{label}{active === href.slice(1) && <span className="block h-px bg-gradient-to-r from-[#8f1748] to-[#477bff] mt-1" />}</a></li>
          ))}
        </ul>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-1 rounded-full border border-white/20 px-4 py-2 text-sm hover:border-[#477bff] transition">Let's Connect <ArrowUpRight size={16} /></a>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <ul className="md:hidden glass px-6 py-4 space-y-3">
          {links.map(([label, href]) => (<li key={href}><a href={href} onClick={() => setOpen(false)} className="block py-1 text-lg">{label}</a></li>))}
        </ul>
      )}
    </header>
  );
}
