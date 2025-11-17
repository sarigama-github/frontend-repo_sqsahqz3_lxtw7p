import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    setStatus("loading");

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ""}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok) setStatus("success");
      else throw new Error(data?.detail || "Something went wrong");
    } catch (e) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_40%_at_50%_0%,rgba(34,197,94,0.12),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s build something breathtaking</h2>
          <p className="mt-3 text-white/80">Tell me about your idea and I’ll get back to you.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid sm:grid-cols-2 gap-4 bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur"
        >
          <input name="name" placeholder="Your name" required className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/60 outline-none focus:border-white/30" />
          <input name="email" type="email" placeholder="Email" required className="px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/60 outline-none focus:border-white/30" />
          <input name="subject" placeholder="Subject" className="sm:col-span-2 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/60 outline-none focus:border-white/30" />
          <textarea name="message" placeholder="Tell me about your project" required rows={5} className="sm:col-span-2 px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-white/60 outline-none focus:border-white/30" />

          <div className="sm:col-span-2 flex items-center gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors disabled:opacity-70"
            >
              <Send className="w-4 h-4" />
              {status === "loading" ? "Sending..." : "Send message"}
            </button>
            {status === "success" && <span className="text-emerald-300">Thanks! I’ll be in touch.</span>}
            {status === "error" && <span className="text-rose-300">Something went wrong. Try again.</span>}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
