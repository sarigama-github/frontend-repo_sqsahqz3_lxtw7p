import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-colors ${solid ? "bg-black/50 backdrop-blur border-b border-white/10" : "bg-transparent"}`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-wide">SAKAH</a>

        <div className="hidden sm:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors">Hire me</a>
        </div>

        <button className="sm:hidden text-white" onClick={() => setOpen((o) => !o)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="sm:hidden px-6 pb-6">
          <div className="rounded-2xl bg-white/10 border border-white/10 backdrop-blur p-4 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-white/90 py-2">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
