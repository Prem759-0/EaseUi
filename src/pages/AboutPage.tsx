import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Heart, Zap, Code2, Palette, Globe, Star, Package, GitFork } from "lucide-react";
import { useNavigate } from "react-router";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-hero-title",
        { y: 80, opacity: 0, rotate: -3 },
        { y: 0, opacity: 1, rotate: 0, duration: 0.9, ease: "back.out(1.7)" }
      );
      gsap.fromTo(
        ".about-hero-sub",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.3 }
      );
      gsap.fromTo(
        ".stat-card",
        { y: 60, opacity: 0, scale: 0.9 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.12, ease: "back.out(1.5)",
          scrollTrigger: { trigger: ".stats-grid", start: "top 80%" }
        }
      );
      gsap.fromTo(
        ".mission-card",
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power2.out",
          scrollTrigger: { trigger: ".mission-grid", start: "top 75%" }
        }
      );
      gsap.fromTo(
        ".tech-item",
        { scale: 0, opacity: 0, rotate: -10 },
        {
          scale: 1, opacity: 1, rotate: 0, duration: 0.5, stagger: 0.08, ease: "back.out(2)",
          scrollTrigger: { trigger: ".tech-grid", start: "top 80%" }
        }
      );
      gsap.fromTo(
        ".team-card",
        { y: 80, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, stagger: 0.2, ease: "back.out(1.5)",
          scrollTrigger: { trigger: ".team-grid", start: "top 80%" }
        }
      );
      gsap.to(".about-shape-1", { y: -25, rotation: 15, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".about-shape-2", { y: 30, rotation: -20, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
      gsap.to(".about-shape-3", { scale: 1.3, rotation: 30, duration: 3.5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { label: "Components", value: "30+", icon: <Package size={32} />, color: "bg-neo-blue" },
    { label: "GitHub Stars", value: "1.2k", icon: <Star size={32} />, color: "bg-neo-yellow" },
    { label: "Weekly Downloads", value: "5k+", icon: <Globe size={32} />, color: "bg-neo-pink" },
    { label: "Contributors", value: "12", icon: <GitFork size={32} />, color: "bg-neo-green" },
  ];

  const missions = [
    {
      icon: <Palette size={36} />,
      title: "Bold by Default",
      desc: "We believe UI should make a statement. Our Neo-Brutalist aesthetic is intentional — thick borders, hard shadows, and vivid colors that demand attention.",
      color: "bg-neo-pink",
    },
    {
      icon: <Zap size={36} />,
      title: "Animation First",
      desc: "Every component ships with GSAP-powered animations out of the box. No configuration needed — just install and watch your UI come alive.",
      color: "bg-neo-yellow",
    },
    {
      icon: <Code2 size={36} />,
      title: "You Own the Code",
      desc: "Unlike traditional npm packages, EaseUI copies source code directly into your project. No black boxes — full ownership and customization freedom.",
      color: "bg-neo-blue",
    },
    {
      icon: <Heart size={36} />,
      title: "Open Source Forever",
      desc: "EaseUI is and always will be free and open source. Built by developers, for developers, with community contributions welcomed and celebrated.",
      color: "bg-neo-green",
    },
  ];

  const techStack = [
    { name: "React", emoji: "⚛️", bg: "bg-neo-blue" },
    { name: "TypeScript", emoji: "🔷", bg: "bg-neo-blue" },
    { name: "GSAP", emoji: "🎬", bg: "bg-neo-green" },
    { name: "Tailwind CSS", emoji: "🎨", bg: "bg-neo-pink" },
    { name: "Radix UI", emoji: "🔲", bg: "bg-neo-yellow" },
    { name: "CVA", emoji: "⚡", bg: "bg-neo-pink" },
    { name: "Vite", emoji: "🚀", bg: "bg-neo-green" },
    { name: "npm", emoji: "📦", bg: "bg-neo-yellow" },
  ];

  const team = [
    {
      name: "Prem Gaikwad",
      role: "Creator & Lead Dev",
      emoji: "👨‍💻",
      bio: "Full-stack developer passionate about design systems, open source, and pushing the boundaries of UI aesthetics.",
      github: "Prem759-0",
      linkedin: "in/prem-gaikwad-64a417370",
      color: "bg-neo-pink",
    },
  ];

  const timeline = [
    { date: "Jan 2026", event: "Idea Born", desc: "Frustrated with boring UI libraries, decided to build something bold.", color: "bg-neo-yellow" },
    { date: "Mar 2026", event: "v0.1 Alpha", desc: "First 5 components released — Button, Card, Input, Modal, Navbar.", color: "bg-neo-blue" },
    { date: "May 2026", event: "CLI Launched", desc: "The npx installer went live, making copy-paste seamless.", color: "bg-neo-pink" },
    { date: "Jul 2026", event: "1k Stars 🎉", desc: "Crossed 1,000 GitHub stars and 10+ contributors.", color: "bg-neo-green" },
    { date: "Aug 2026", event: "v1.0.7 Stable", desc: "30+ components, full dark mode, improved animations.", color: "bg-neo-yellow" },
  ];

  return (
    <div ref={containerRef} className="w-full relative overflow-hidden bg-neo-bg dark:bg-zinc-950 min-h-screen">

      {/* HERO */}
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="absolute top-16 left-8 about-shape-1 hidden lg:block opacity-40">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            <path d="M50 0L61.2257 38.7743L100 50L61.2257 61.2257L50 100L38.7743 61.2257L0 50L38.7743 38.7743L50 0Z" fill="#f472b6" stroke="black" strokeWidth="4"/>
          </svg>
        </div>
        <div className="absolute top-32 right-12 about-shape-2 hidden lg:block opacity-40">
          <svg width="70" height="70" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" fill="#60a5fa" stroke="black" strokeWidth="4" strokeDasharray="10 10"/>
          </svg>
        </div>
        <div className="absolute bottom-8 left-1/3 about-shape-3 hidden lg:block opacity-40">
          <svg width="50" height="50" viewBox="0 0 100 100" fill="none">
            <rect x="10" y="10" width="80" height="80" fill="#4ade80" stroke="black" strokeWidth="4" transform="rotate(20 50 50)"/>
          </svg>
        </div>
        <div className="inline-block mb-6 neo-box-no-hover bg-neo-green px-4 py-2 font-bold font-comic text-black transform rotate-1 border-2 border-black">
          Open Source & Free Forever 💚
        </div>
        <h1 className="about-hero-title text-6xl md:text-8xl font-black uppercase tracking-tight text-black dark:text-white leading-tight mb-6">
          ABOUT
          <span className="block mt-2">
            <span className="inline-block bg-neo-pink text-black px-4 neo-box-no-hover transform -rotate-1 border-4 border-black">
              EASE UI
            </span>
          </span>
        </h1>
        <p className="about-hero-sub text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          A bold, comic-inspired component library built for developers who refuse to settle for boring interfaces.
          Copy the code. Own the code. Customize everything.
        </p>
      </div>

      {/* STATS */}
      <div className="w-full py-16 px-6 bg-black border-y-4 border-black">
        <div className="max-w-5xl mx-auto stats-grid grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className={`stat-card ${stat.color} neo-box border-4 border-black p-6 flex flex-col items-center text-center text-black`}>
              <div className="mb-3">{stat.icon}</div>
              <div className="text-4xl font-black">{stat.value}</div>
              <div className="text-sm font-bold uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MISSION */}
      <div className="w-full py-24 px-6 bg-white dark:bg-zinc-900 border-b-4 border-black dark:border-white relative">
        <div className="comic-bg"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase text-black dark:text-white inline-block relative">
              Our Mission
              <span className="absolute -bottom-4 left-0 w-full h-2 bg-neo-pink"></span>
            </h2>
          </div>
          <div className="mission-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {missions.map((m, i) => (
              <div key={i} className={`mission-card neo-box ${m.color} p-8 border-4 border-black text-black group hover:-translate-y-1 transition-transform`}>
                <div className="neo-box-no-hover bg-white w-16 h-16 flex items-center justify-center border-4 border-black mb-6 group-hover:rotate-12 transition-transform">
                  {m.icon}
                </div>
                <h3 className="text-2xl font-black uppercase mb-3">{m.title}</h3>
                <p className="font-bold text-lg leading-relaxed opacity-90">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TIMELINE */}
      <div className="w-full py-24 px-6 bg-neo-bg dark:bg-zinc-950 border-b-4 border-black dark:border-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase text-black dark:text-white inline-block relative">
              Our Journey
              <span className="absolute -bottom-4 left-0 w-full h-2 bg-neo-yellow"></span>
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-black dark:bg-white transform md:-translate-x-0.5"></div>
            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-start gap-6`}>
                  <div className={`absolute left-4 md:left-1/2 transform -translate-x-1/2 w-6 h-6 ${item.color} border-4 border-black rounded-full z-10 mt-2`}></div>
                  <div className={`ml-14 md:ml-0 ${i % 2 === 0 ? "md:mr-auto md:pr-16 md:w-1/2" : "md:ml-auto md:pl-16 md:w-1/2"}`}>
                    <div className={`neo-box ${item.color} border-4 border-black p-6 text-black`}>
                      <span className="font-comic font-bold text-sm uppercase tracking-widest opacity-70">{item.date}</span>
                      <h3 className="text-xl font-black uppercase mt-1 mb-2">{item.event}</h3>
                      <p className="font-bold opacity-80">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TECH STACK */}
      <div className="w-full py-24 px-6 bg-white dark:bg-zinc-900 border-b-4 border-black dark:border-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase text-black dark:text-white inline-block relative">
              Built With
              <span className="absolute -bottom-4 left-0 w-full h-2 bg-neo-blue"></span>
            </h2>
          </div>
          <div className="tech-grid flex flex-wrap justify-center gap-5">
            {techStack.map((tech, i) => (
              <div key={i} className={`tech-item neo-box ${tech.bg} border-4 border-black px-6 py-4 text-black font-black text-xl flex items-center gap-3 hover:-translate-y-2 transition-transform cursor-default`}>
                <span className="text-3xl">{tech.emoji}</span>
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TEAM */}
      <div className="w-full py-24 px-6 bg-neo-bg dark:bg-zinc-950 border-b-4 border-black dark:border-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase text-black dark:text-white inline-block relative">
              The Team
              <span className="absolute -bottom-4 left-0 w-full h-2 bg-neo-green"></span>
            </h2>
            <p className="mt-8 font-bold text-lg text-gray-700 dark:text-gray-300">
              Started by one developer. Grown with the community. 💪
            </p>
          </div>
          <div className="team-grid flex justify-center">
            {team.map((member, i) => (
              <div key={i} className={`team-card neo-box ${member.color} border-4 border-black p-8 text-black max-w-md w-full flex flex-col items-center text-center`}>
                <div className="neo-box-no-hover bg-white border-4 border-black w-28 h-28 flex items-center justify-center text-6xl mb-6 rounded-xl">
                  {member.emoji}
                </div>
                <h3 className="text-2xl font-black uppercase">{member.name}</h3>
                <p className="font-comic font-bold text-sm uppercase tracking-widest mt-1 mb-4 opacity-70">{member.role}</p>
                <p className="font-bold text-lg leading-relaxed opacity-90 mb-6">{member.bio}</p>
                <div className="flex gap-4">
                  <a
                    href={`https://github.com/${member.github}`}
                    target="_blank"
                    rel="noreferrer"
                    className="neo-box bg-black text-white px-4 py-2 font-bold flex items-center gap-2 border-4 border-black hover:bg-white hover:text-black transition-colors"
                  >
                    <Github size={18} /> GitHub
                  </a>
                  <a
                    href={`https://www.linkedin.com/${member.linkedin}`}
                    target="_blank"
                    rel="noreferrer"
                    className="neo-box bg-white text-black px-4 py-2 font-bold flex items-center gap-2 border-4 border-black hover:bg-neo-blue transition-colors"
                  >
                    <Linkedin size={18} /> LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTRIBUTE */}
      <div className="w-full py-24 px-6 bg-black border-b-4 border-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-white mb-6">
            WANT TO <span className="text-neo-yellow">CONTRIBUTE?</span>
          </h2>
          <p className="text-xl font-bold text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            EaseUI thrives on community contributions. Whether it's a new component, bug fix, or design improvement — every PR is welcome!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/Prem759-0/EaseUi.git"
              target="_blank"
              rel="noreferrer"
              className="neo-box bg-neo-yellow text-black hover:bg-white text-xl font-black px-8 py-4 flex items-center gap-3 justify-center border-4 border-white transition-colors"
            >
              <Github size={26} /> View on GitHub
            </a>
            <button
              onClick={() => navigate("/components/installation")}
              className="neo-box bg-neo-pink text-black hover:bg-neo-blue text-xl font-black px-8 py-4 flex items-center gap-3 justify-center border-4 border-white transition-colors"
            >
              <Code2 size={26} /> Start Using EaseUI
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-neo-yellow border-t-[8px] border-black pt-16 pb-10 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase text-black mb-6 tracking-tighter">
            JOIN THE<br/>COMMUNITY
          </h2>
          <p className="font-bold text-black/70 text-xl mb-8 max-w-2xl">
            Star us on GitHub, share your builds, and help shape the future of EaseUI.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://github.com/Prem759-0/EaseUi.git" target="_blank" rel="noreferrer"
              className="neo-box bg-black text-white hover:bg-neo-pink hover:text-black text-xl font-black px-8 py-4 flex items-center gap-3 border-4 border-black transition-colors"
            >
              <Star size={24} /> Star on GitHub
            </a>
            <a href="https://www.linkedin.com/in/prem-gaikwad-64a417370/" target="_blank" rel="noreferrer"
              className="neo-box bg-white text-black hover:bg-neo-blue text-xl font-black px-8 py-4 flex items-center gap-3 border-4 border-black transition-colors"
            >
              <Linkedin size={24} /> Connect on LinkedIn
            </a>
          </div>
          <div className="mt-16 pt-8 border-t-4 border-black w-full flex flex-col md:flex-row justify-between items-center font-bold text-black gap-4 text-lg">
            <p>© 2026 EaseUI. Created by Prem Gaikwad.</p>
            <div className="flex gap-6">
              <a href="https://github.com/Prem759-0/EaseUi.git" target="_blank" rel="noreferrer" className="hover:text-neo-blue underline decoration-4 underline-offset-4">GitHub</a>
              <a href="https://www.linkedin.com/in/prem-gaikwad-64a417370/" target="_blank" rel="noreferrer" className="hover:text-neo-pink underline decoration-4 underline-offset-4">LinkedIn</a>
              <a href="https://www.npmjs.com/package/@prem_gaikwad/easeui" target="_blank" rel="noreferrer" className="hover:text-neo-green underline decoration-4 underline-offset-4">npm</a>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black text-black/5 whitespace-nowrap z-0 pointer-events-none select-none">
          EASE UI
        </div>
      </footer>

    </div>
  );
};

export default AboutPage;
