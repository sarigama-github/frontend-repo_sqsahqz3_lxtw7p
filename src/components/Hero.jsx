import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, MapPin, Github, Linkedin, Mail } from "lucide-react";
import Spline from "@splinetool/react-spline";

const ExternalLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors backdrop-blur border border-white/20"
  >
    {children}
  </a>
);

export default function Hero({ profile }) {
  const name = profile?.name || "Abdulrahman Sakah";
  const title = profile?.title || "Full‑Stack Developer";
  const location = profile?.location || "Karlskrona, Sweden";
  const summary =
    profile?.summary ||
    "Creative full‑stack engineer crafting immersive web experiences.";

  const [showSpline, setShowSpline] = useState(true);
  const splineUrl = import.meta.env.VITE_SPLINE_SCENE;

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic background (Spline if available, graceful fallback if not) */}
      <div className="absolute inset-0 -z-10 opacity-90 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(80%_40%_at_50%_0%,rgba(56,189,248,0.40),rgba(99,102,241,0.20)_40%,transparent_70%)]" />
        <div className="absolute -right-40 -top-40 w-[700px] h-[700px] bg-gradient-to-br from-indigo-500/40 via-fuchsia-500/30 to-cyan-400/30 rounded-full blur-3xl" />
        <div className="absolute -left-40 -bottom-40 w-[700px] h-[700px] bg-gradient-to-tr from-emerald-400/30 via-teal-400/30 to-sky-500/40 rounded-full blur-3xl" />
        {splineUrl && showSpline ? (
          <div className="absolute inset-0">
            <Spline
              scene={splineUrl}
              onError={() => setShowSpline(false)}
            />
          </div>
        ) : null}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-white text-sm">
            <Sparkles className="w-4 h-4" />
            Available for ambitious projects
          </div>

          <h1 className="mt-6 text-5xl sm:text-7xl font-extrabold tracking-tight text-white drop-shadow leading-[1.05]">
            {name}
          </h1>
          <p className="mt-4 text-xl sm:text-2xl text-white/90 font-medium">
            {title}
          </p>

          <p className="mt-6 max-w-3xl mx-auto text-white/80">
            {summary}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 text-white/80">
            <MapPin className="w-4 h-4" /> {location}
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
            >
              Start a project
            </a>
            {profile?.links?.github && (
              <ExternalLink href={profile.links.github}>
                <Github className="w-4 h-4" /> GitHub
              </ExternalLink>
            )}
            {profile?.links?.linkedin && (
              <ExternalLink href={profile.links.linkedin}>
                <Linkedin className="w-4 h-4" /> LinkedIn
              </ExternalLink>
            )}
            {profile?.links?.email && (
              <ExternalLink href={profile.links.email}>
                <Mail className="w-4 h-4" /> Email
              </ExternalLink>
            )}
          </div>
        </motion.div>
      </div>

      {/* subtle aurora overlay */}
      <div className="pointer-events-none absolute inset-0 mix-blend-soft-light bg-[radial-gradient(60%_50%_at_50%_10%,rgba(255,255,255,0.12),transparent_70%)]" />
    </section>
  );
}
