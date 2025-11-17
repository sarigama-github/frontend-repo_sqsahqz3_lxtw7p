import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";

function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ""}/api/profile`);
        const data = await res.json();
        setProfile(data);
      } catch {}
    }
    load();
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b13] text-white">
      <Nav />
      <main>
        <Hero profile={profile} />
        <Showcase />
        <Contact />
      </main>
      <footer className="py-12 text-center text-white/60">
        © {new Date().getFullYear()} Abdulrahman Sakah. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
