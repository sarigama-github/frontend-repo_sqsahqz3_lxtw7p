import { motion } from "framer-motion";
import { Code2, Boxes, Sparkles } from "lucide-react";

const Card = ({ title, desc, icon: Icon, hue }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.3 }}
    className="relative rounded-3xl p-6 bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur overflow-hidden"
  >
    <div className={`absolute -right-10 -top-10 w-48 h-48 rounded-full blur-3xl ${hue}`} />
    <div className="relative z-10">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 border border-white/20 text-white">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-white/80">{desc}</p>
    </div>
  </motion.div>
);

export default function Showcase() {
  return (
    <section id="work" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_10%_10%,rgba(14,165,233,0.15),transparent_60%),radial-gradient(60%_40%_at_90%_10%,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Signature Work</h2>
          <p className="mt-3 text-white/80">Pieces that blend code, craft and choreography.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Responsive Design Systems"
            desc="Design libraries engineered for speed with pixel-perfect consistency."
            icon={Boxes}
            hue="bg-sky-400/20"
          />
          <Card
            title="Creative Web Apps"
            desc="Interactive experiences powered by real-time data and WebGL magic."
            icon={Sparkles}
            hue="bg-fuchsia-400/20"
          />
          <Card
            title="Robust Backends"
            desc="Reliable APIs with thoughtful data models and battle-tested security."
            icon={Code2}
            hue="bg-emerald-400/20"
          />
        </div>
      </div>
    </section>
  );
}
