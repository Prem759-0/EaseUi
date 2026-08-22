import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Box, Copy, Palette, Zap, Check, Code, Layers,
  MousePointerClick, Star, Users, Package, Github, Linkedin,
  Sparkles, Shield, Rocket, Heart
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate } from "react-router";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const containerRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      const tl = gsap.timeline();
      tl.fromTo(".hero-badge", { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "back.out(2)" })
        .fromTo(".hero-title", { y: 100, opacity: 0, rotate: -5 }, { y: 0, opacity: 1, rotate: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.2")
        .fromTo(".hero-desc", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .fromTo(".hero-btn", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(2)" }, "-=0.2")
        .fromTo(".hero-code-window", { x: 100, opacity: 0, rotate: 10 }, { x: 0, opacity: 1, rotate: 2, duration: 0.8, ease: "power3.out" }, "-=0.6");

      // Floating shapes
      gsap.to(".float-shape-1", { y: -30, x: 20, rotation: 15, duration: 4, repeat: -1, yoyo: true, ease: "sine.inOut" });
      gsap.to(".float-shape-2", { y: 40, x: -20, rotation: -20, duration: 5, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 1 });
      gsap.to(".float-shape-3", { scale: 1.2, rotation: 45, duration: 3, repeat: -1, yoyo: true, ease: "sine.inOut", delay: 0.5 });

      // Scroll animations
      gsap.fromTo(".feature-card", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.5)",
        scrollTrigger: { trigger: ".features-grid", start: "top 80%" }
      });
      gsap.fromTo(".step-card", { x: -50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.5, stagger: 0.2, ease: "power2.out",
        scrollTrigger: { trigger: ".steps-container", start: "top 75%" }
      });
      gsap.fromTo(".component-preview-card", { y: 60, opacity: 0, scale: 0.92 }, {
        y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.5)",
        scrollTrigger: { trigger: ".component-previews", start: "top 80%" }
      });
      gsap.fromTo(".stat-item", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out",
        scrollTrigger: { trigger: ".stats-row", start: "top 85%" }
      });
      gsap.fromTo(".testimonial-card", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".testimonials-grid", start: "top 80%" }
      });
      gsap.fromTo(".open-source-content", { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: "power2.out",
        scrollTrigger: { trigger: ".open-source-section", start: "top 75%" }
      });

      // Marquee parallax
      gsap.to(".marquee-container", {
        x: "-20%", ease: "none",
        scrollTrigger: { trigger: ".marquee-wrapper", start: "top bottom", end: "bottom top", scrub: 1 }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const copyCode = (cmd: string) => {
    navigator.clipboard.writeText(cmd).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const features = [
    {
      icon: <Palette size={40} />,
      title: "Neo-Brutalist",
      desc: "Bold colors, hard shadows, and thick borders that make your UI visually striking and impossible to ignore.",
      color: "bg-neo-pink"
    },
    {
      icon: <Zap size={40} />,
      title: "GSAP Powered",
      desc: "Smooth, professional-grade animations powered by GSAP built directly into the components.",
      color: "bg-neo-yellow"
    },
    {
      icon: <Code size={40} />,
      title: "Copy & Paste",
      desc: "You own the code. No bloated npm packages. Run the CLI and the component is injected into your app.",
      color: "bg-neo-blue"
    },
    {
      icon: <Shield size={40} />,
      title: "TypeScript Ready",
      desc: "Full TypeScript support with proper types, generics, and interface definitions out of the box.",
      color: "bg-neo-green"
    },
    {
      icon: <Layers size={40} />,
      title: "Accessible",
      desc: "Built on Radix UI primitives ensuring ARIA compliance, keyboard navigation, and screen reader support.",
      color: "bg-neo-yellow"
    },
    {
      icon: <Rocket size={40} />,
      title: "Lightweight CLI",
      desc: "One command to set up, another to add any component. No bloat, no registry, no lock-in.",
      color: "bg-neo-pink"
    },
  ];

  const componentsList = [
    "Button", "Card", "Input", "Modal", "Navbar", "Floating Label",
    "Animated Input", "Password Input", "Number Input", "Tooltip", "Badge", "Alert"
  ];

  const allComponents = [
    { name: "Button", category: "Elements", path: "button" },
    { name: "Card", category: "Elements", path: "card" },
    { name: "Input", category: "Forms", path: "input" },
    { name: "Modal", category: "Overlays", path: "modal" },
    { name: "Navbar", category: "Navigation", path: "navbar" },
    { name: "Tooltip", category: "Overlays", path: "button" },
    { name: "Badge", category: "Elements", path: "button" },
    { name: "Alert", category: "Overlays", path: "button" },
    { name: "Carousel", category: "Navigation", path: "button" },
    { name: "Avatar", category: "Elements", path: "button" },
    { name: "Dropdown", category: "Overlays", path: "button" },
    { name: "Switch", category: "Forms", path: "input" },
    { name: "Checkbox", category: "Forms", path: "input" },
    { name: "Select", category: "Forms", path: "input" },
    { name: "Tabs", category: "Navigation", path: "button" },
    { name: "Accordion", category: "Elements", path: "button" },
    { name: "Progress", category: "Elements", path: "button" },
    { name: "Skeleton", category: "Elements", path: "button" },
    { name: "Drawer", category: "Overlays", path: "button" },
    { name: "Toast", category: "Overlays", path: "button" },
  ];

  const codeTabs = [
    {
      label: "Install",
      code: `# Initialize EaseUI in your project
npx @prem_gaikwad/easeui@latest init

> EaseUI initialized successfully!
> Injected CSS variables...
> Added GSAP animations...`
    },
    {
      label: "Add",
      code: `# Add specific components
npx @prem_gaikwad/easeui add button

# Or add everything at once
npx @prem_gaikwad/easeui add all

> 9 components added!`
    },
    {
      label: "Use",
      code: `import { Button } from "@/components/easeui/Button";

function App() {
  return (
    <Button variant="primary" animation="pop">
      Hello EaseUI!
    </Button>
  );
}`
    }
  ];

  const stats = [
    { label: "Components", value: "30+", icon: <Package size={28} />, color: "text-neo-blue" },
    { label: "GitHub Stars", value: "1.2k", icon: <Star size={28} />, color: "text-neo-yellow" },
    { label: "Weekly Downloads", value: "5k+", icon: <MousePointerClick size={28} />, color: "text-neo-pink" },
    { label: "Contributors", value: "12", icon: <Users size={28} />, color: "text-neo-green" },
  ];

  const testimonials = [
    {
      quote: "EaseUI is the most unique component library I've used. The neo-brutalist style is exactly what my portfolio needed!",
      name: "Alex Chen",
      role: "Frontend Developer",
      emoji: "\uD83D\uDE0E",
      color: "bg-neo-blue",
    },
    {
      quote: "The GSAP animations are buttery smooth and the CLI is ridiculously easy to use. 10/10 would recommend.",
      name: "Priya Sharma",
      role: "UI/UX Designer",
      emoji: "\uD83C\uDFA8",
      color: "bg-neo-pink",
    },
    {
      quote: "Finally a library that doesn't look like every other website. My clients love the bold aesthetic.",
      name: "Marcus Johnson",
      role: "Indie Hacker",
      emoji: "\uD83D\uDE80",
      color: "bg-neo-green",
    },
  ];

  return (
    <div ref={containerRef} className="w-full relative overflow-hidden bg-neo-bg dark:bg-zinc-950 min-h-screen">

      {/* --- HERO SECTION --- */}
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-32 md:pt-32 md:pb-40 flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-5rem)]">

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 float-shape-1 hidden lg:block z-0 opacity-50">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <path d="M50 0L61.2257 38.7743L100 50L61.2257 61.2257L50 100L38.7743 61.2257L0 50L38.7743 38.7743L50 0Z" fill="#f472b6" stroke="black" strokeWidth="4"/>
          </svg>
        </div>
        <div className="absolute bottom-40 left-1/2 float-shape-2 hidden lg:block z-0 opacity-50">
          <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="40" fill="#60a5fa" stroke="black" strokeWidth="4" strokeDasharray="10 10"/>
          </svg>
        </div>
        <div className="absolute top-40 right-20 float-shape-3 hidden lg:block z-0 opacity-50">
          <svg width="60" height="60" viewBox="0 0 100 100" fill="none">
            <rect x="10" y="10" width="80" height="80" fill="#4ade80" stroke="black" strokeWidth="4" transform="rotate(20 50 50)"/>
          </svg>
        </div>

        <div className="flex-1 w-full relative z-10">
          <div className="hero-badge inline-flex items-center gap-2 mb-6 neo-box-no-hover bg-neo-yellow px-4 py-2 font-bold font-comic text-black transform -rotate-2 border-2 border-black">
            <Sparkles size={16} /> v1.0.7 is out now!
          </div>
          <h1 className="hero-title text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-black dark:text-white leading-[1.1] mb-6 drop-shadow-[4px_4px_0_rgba(0,0,0,0.1)] dark:drop-shadow-[4px_4px_0_rgba(255,255,255,0.2)]">
            UI COMPONENTS THAT <br/>
            <div className="inline-block bg-neo-pink text-black px-4 neo-box-no-hover transform rotate-1 border-4 border-black mt-2">
              STAND OUT.
            </div>
          </h1>

          <p className="hero-desc text-lg sm:text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
            Stop building boring websites. Grab these copy-and-paste React components with a bold, comic-inspired Neo-Brutalist aesthetic.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full">
            <button
              type="button"
              onClick={() => navigate("/components/installation")}
              id="hero-start-btn"
              className="hero-btn neo-box bg-neo-blue hover:bg-neo-yellow text-black text-xl font-bold px-8 py-4 flex items-center gap-3 w-full sm:w-auto justify-center border-4"
            >
              Start Building <ArrowRight size={24} />
            </button>
            <button
              type="button"
              onClick={() => navigate("/components/button")}
              id="hero-docs-btn"
              className="hero-btn neo-box bg-white dark:bg-zinc-800 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700 text-black text-xl font-bold px-8 py-4 w-full sm:w-auto border-4"
            >
              Documentation
            </button>
          </div>

          {/* Quick Install Bar */}
          <div className="mt-8 flex items-center gap-3 neo-box-no-hover bg-white dark:bg-zinc-800 border-4 border-black px-5 py-3 w-full sm:w-auto max-w-lg">
            <span className="text-neo-green font-mono font-bold text-sm">$</span>
            <span className="font-mono font-bold text-sm text-gray-700 dark:text-gray-300 flex-1">
              npx @prem_gaikwad/easeui@latest init
            </span>
            <button
              type="button"
              id="copy-install-btn"
              onClick={() => copyCode("npx @prem_gaikwad/easeui@latest init")}
              className="neo-box bg-neo-yellow text-black p-1.5 border-2 hover:bg-neo-green transition-colors"
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>
        </div>

        {/* Floating Terminal Window */}
        <div className="hero-code-window hidden md:block flex-1 w-full max-w-lg transform rotate-2 z-10 relative">
          <div className="absolute -inset-4 bg-neo-yellow transform -rotate-3 rounded-xl border-4 border-black dark:border-white -z-10 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"></div>
          <div className="neo-box-no-hover border-[4px] border-black dark:border-white bg-[#0d1117] rounded-xl overflow-hidden shadow-none">
            {/* Tab Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b-[4px] border-black dark:border-white bg-white dark:bg-zinc-800">
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full border-2 border-black bg-neo-red"></div>
                <div className="w-4 h-4 rounded-full border-2 border-black bg-neo-yellow"></div>
                <div className="w-4 h-4 rounded-full border-2 border-black bg-neo-green"></div>
              </div>
              <span className="font-comic font-bold text-black dark:text-white tracking-wider uppercase text-sm">Terminal</span>
            </div>
            <div className="p-6 text-left font-mono text-sm leading-relaxed h-64 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-neo-green font-bold">$</span>
                <span className="text-white">
                  <span className="text-neo-blue">npx</span>
                  {' '}<span className="text-neo-yellow">@prem_gaikwad/easeui</span>
                  {' '}<span className="text-neo-pink">init</span>
                </span>
              </div>
              <div className="space-y-2 pl-4 text-xs font-medium">
                <p className="text-neo-green">{">"} EaseUI initialized successfully!</p>
                <p className="text-gray-400">{">"} Injected CSS variables...</p>
                <p className="text-gray-400">{">"} Added GSAP animations...</p>
                <p className="text-neo-green mt-3">{">"} Ready! Add components:</p>
                <div className="flex items-center gap-2 mt-2 bg-white/10 p-2 rounded border border-white/20">
                  <span className="text-neo-green font-bold">$</span>
                  <span className="text-white">
                    <span className="text-neo-blue">npx</span>
                    {' '}<span className="text-neo-yellow">@prem_gaikwad/easeui</span>
                    {' '}<span className="text-neo-pink">add all</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- STATS ROW --- */}
      <div className="w-full py-10 px-6 bg-black border-y-4 border-black">
        <div className="max-w-5xl mx-auto stats-row grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className={`stat-item flex flex-col items-center text-center py-4`}>
              <div className={`${stat.color} mb-2`}>{stat.icon}</div>
              <div className="text-4xl font-black text-white">{stat.value}</div>
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MARQUEE --- */}
      <div className="marquee-wrapper w-full bg-neo-pink py-4 border-y-4 border-black overflow-hidden relative z-20">
        <div className="marquee-container flex whitespace-nowrap gap-8 w-[200%] text-black font-black uppercase text-2xl tracking-widest font-comic">
          {[...componentsList, ...componentsList, ...componentsList].map((comp, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span>{comp}</span>
              <span className="text-black/30 text-3xl mb-1">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* ─── COMPONENT SHOWCASE ─── */}
      <div className="w-full py-24 px-6 bg-white dark:bg-zinc-950 border-b-4 border-black dark:border-zinc-800">
        <div className="max-w-7xl mx-auto">

          {/* ── Section Header ── */}
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-5 bg-neo-yellow border-2 border-black dark:border-white px-4 py-1.5 font-comic font-bold text-black text-sm transform -rotate-1">
                <Sparkles size={14} className="text-black"/> Component Showcase
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase text-black dark:text-white leading-[1.1]">
                BUILT FOR <br/>
                <span className="inline-block bg-neo-green text-black px-4 py-1 neo-box-no-hover transform -rotate-2 border-4 border-black mt-2">
                  BUILDERS.
                </span>
              </h2>
              <p className="mt-6 font-bold text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                Every component is animated, accessible, and copy-paste ready. Yours to own and customize.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={() => navigate('/components/installation')}
                className="flex items-center gap-2 bg-neo-yellow text-black font-black text-base px-6 py-3 rounded-xl border-2 border-black hover:bg-white transition-colors shadow-[4px_4px_0_0_rgba(0,0,0,0.8)]"
              >
                <Rocket size={18}/> Get Started
              </button>
              <button
                type="button"
                onClick={() => navigate('/components/button')}
                className="flex items-center gap-2 bg-black/5 dark:bg-white/10 text-black dark:text-white font-black text-base px-6 py-3 rounded-xl border-2 border-black/10 dark:border-white/20 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
              >
                <Box size={18}/> View Docs
              </button>
            </div>
          </div>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">

            {/* Button */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => navigate('/components/button')}
              onKeyDown={(e) => e.key === 'Enter' && navigate('/components/button')}
              className="bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-neo-yellow dark:hover:border-neo-yellow cursor-pointer group overflow-hidden transition-all hover:shadow-[0_4px_20px_rgba(253,224,71,0.15)] hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-zinc-500 bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded-md">Elements</span>
                  <span className="text-2xl">&#x1F5B1;</span>
                </div>
                <h3 className="text-xl font-black text-black dark:text-white mb-1">Button</h3>
                <p className="text-gray-600 dark:text-zinc-400 text-sm font-bold leading-relaxed mb-5">9 variants, pop/bounce/shake animations, icon slots, loading states.</p>
                <div className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-xl p-4 flex flex-wrap gap-2 group-hover:border-neo-yellow/30 transition-colors">
                  {[{l:'Primary',c:'bg-neo-blue'},{l:'Outline',c:'bg-white dark:bg-zinc-800 dark:text-white text-black'},{l:'Ghost',c:'bg-neo-pink'},{l:'Warn',c:'bg-neo-yellow'},{l:'Done',c:'bg-neo-green'}].map(b => (
                    <span key={b.l} className={`${b.c} text-black font-black text-xs px-3 py-1.5 rounded-lg border border-black shadow-[2px_2px_0_0_rgba(0,0,0,0.7)]`}>{b.l}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => navigate('/components/card')}
              onKeyDown={(e) => e.key === 'Enter' && navigate('/components/card')}
              className="bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-neo-pink dark:hover:border-neo-pink cursor-pointer group overflow-hidden transition-all hover:shadow-[0_4px_20px_rgba(244,114,182,0.15)] hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-zinc-500 bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded-md">Elements</span>
                  <span className="text-2xl">&#x1F3A8;</span>
                </div>
                <h3 className="text-xl font-black text-black dark:text-white mb-1">Card</h3>
                <p className="text-gray-600 dark:text-zinc-400 text-sm font-bold leading-relaxed mb-5">Hover tilt, glassmorphism variant, customizable header / footer slots.</p>
                <div className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-xl p-4 group-hover:border-neo-pink/30 transition-colors flex items-center justify-center">
                  <div className="bg-white dark:bg-zinc-900 rounded-xl border border-gray-200 dark:border-zinc-700 p-3 shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,0.1)] group-hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.2)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all w-full">
                    <div className="w-full h-8 bg-gradient-to-r from-blue-400 to-pink-400 rounded-lg mb-2"></div>
                    <div className="font-black text-xs text-black dark:text-white mb-0.5">Card Title</div>
                    <div className="text-[10px] text-gray-500 dark:text-zinc-500 font-bold mb-2">Animated. Accessible.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => navigate('/components/input')}
              onKeyDown={(e) => e.key === 'Enter' && navigate('/components/input')}
              className="bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-neo-green dark:hover:border-neo-green cursor-pointer group overflow-hidden transition-all hover:shadow-[0_4px_20px_rgba(74,222,128,0.15)] hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-zinc-500 bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded-md">Forms</span>
                  <span className="text-2xl">&#x270F;</span>
                </div>
                <h3 className="text-xl font-black text-black dark:text-white mb-1">Input</h3>
                <p className="text-gray-600 dark:text-zinc-400 text-sm font-bold leading-relaxed mb-5">Floating labels, password toggle, number stepper, inline validation.</p>
                <div className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-xl p-4 space-y-2 group-hover:border-neo-green/30 transition-colors">
                  <div className="bg-gray-50 dark:bg-zinc-900 rounded-lg px-3 py-2 border border-gray-200 dark:border-zinc-700">
                    <div className="text-[9px] font-black text-blue-500 uppercase tracking-widest mb-0.5">Email</div>
                    <div className="text-xs text-gray-500 dark:text-zinc-400 font-bold">you@example.com</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-zinc-900 rounded-lg px-3 py-2 border border-gray-200 dark:border-zinc-700 flex justify-between items-center">
                    <div>
                      <div className="text-[9px] font-black text-pink-500 uppercase tracking-widest mb-0.5">Password</div>
                      <div className="text-xs font-black tracking-[0.4em] text-gray-600 dark:text-zinc-300">&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;&#x2022;</div>
                    </div>
                    <span className="text-gray-400 text-sm">&#128065;</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => navigate('/components/modal')}
              onKeyDown={(e) => e.key === 'Enter' && navigate('/components/modal')}
              className="bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-neo-yellow dark:hover:border-neo-yellow cursor-pointer group overflow-hidden transition-all hover:shadow-[0_4px_20px_rgba(253,224,71,0.15)] hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-zinc-500 bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded-md">Overlays</span>
                  <span className="text-2xl">&#x1FA9F;</span>
                </div>
                <h3 className="text-xl font-black text-black dark:text-white mb-1">Modal</h3>
                <p className="text-gray-600 dark:text-zinc-400 text-sm font-bold leading-relaxed mb-5">Radix portal, focus trap, GSAP open/close animations, custom backdrop.</p>
                <div className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-xl p-4 relative min-h-[90px] flex items-center justify-center group-hover:border-neo-yellow/30 transition-colors">
                  <div className="absolute inset-0 bg-gray-100/50 dark:bg-black/40 rounded-xl"></div>
                  <div className="relative bg-white dark:bg-zinc-900 rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,0.2)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,0.1)] p-3 w-full max-w-[180px] z-10 border border-gray-200 dark:border-zinc-700">
                    <div className="flex justify-between items-center border-b border-gray-100 dark:border-zinc-800 pb-1.5 mb-2">
                      <span className="font-black text-xs text-black dark:text-white">Confirm?</span>
                      <span className="text-[10px] font-black text-red-500">&#x2715;</span>
                    </div>
                    <div className="flex gap-1.5">
                      <div className="flex-1 bg-gray-100 dark:bg-zinc-800 text-[10px] text-gray-600 dark:text-gray-300 font-black py-1 text-center rounded-lg border border-gray-200 dark:border-zinc-700">No</div>
                      <div className="flex-1 bg-black dark:bg-white text-white dark:text-black text-[10px] font-black py-1 text-center rounded-lg">Yes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navbar */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => navigate('/components/navbar')}
              onKeyDown={(e) => e.key === 'Enter' && navigate('/components/navbar')}
              className="bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-neo-blue dark:hover:border-neo-blue cursor-pointer group overflow-hidden transition-all hover:shadow-[0_4px_20px_rgba(96,165,250,0.15)] hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-zinc-500 bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded-md">Navigation</span>
                  <span className="text-2xl">&#x1F9ED;</span>
                </div>
                <h3 className="text-xl font-black text-black dark:text-white mb-1">Navbar</h3>
                <p className="text-gray-600 dark:text-zinc-400 text-sm font-bold leading-relaxed mb-5">4 style variants, responsive hamburger, GSAP slide-down entrance.</p>
                <div className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-xl p-3 space-y-2 group-hover:border-neo-blue/30 transition-colors">
                  <div className="bg-black dark:bg-zinc-900 flex items-center justify-between px-3 py-2 rounded-xl border border-transparent dark:border-zinc-700">
                    <span className="text-white font-black text-[10px]">EaseUI</span>
                    <div className="flex gap-2">{['Home','Docs','About'].map(l => <span key={l} className="text-gray-400 dark:text-zinc-500 text-[9px] font-bold">{l}</span>)}</div>
                  </div>
                  <div className="bg-gray-50 dark:bg-zinc-900 flex items-center justify-between px-3 py-2 rounded-xl border border-gray-200 dark:border-zinc-700">
                    <span className="text-black dark:text-white font-black text-[10px]">EaseUI</span>
                    <div className="flex gap-2">{['Home','Docs'].map(l => <span key={l} className="text-gray-500 dark:text-zinc-400 text-[9px] font-bold">{l}</span>)}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Badge + Alert */}
            <div className="bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 hover:border-neo-pink dark:hover:border-neo-pink cursor-pointer group overflow-hidden transition-all hover:shadow-[0_4px_20px_rgba(244,114,182,0.15)] hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black uppercase tracking-widest text-gray-500 dark:text-zinc-500 bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded-md">Elements</span>
                  <span className="text-2xl">&#x1F3F7;</span>
                </div>
                <h3 className="text-xl font-black text-black dark:text-white mb-1">Badge &amp; Alert</h3>
                <p className="text-gray-600 dark:text-zinc-400 text-sm font-bold leading-relaxed mb-5">8 badge colors, dot indicators, 4 dismissible alert types with icons.</p>
                <div className="bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-800 rounded-xl p-4 space-y-3 group-hover:border-neo-pink/30 transition-colors">
                  <div className="flex flex-wrap gap-2">
                    {[{l:'New',c:'bg-neo-blue text-black'},{l:'Beta',c:'bg-neo-yellow text-black'},{l:'Pro',c:'bg-black dark:bg-white text-white dark:text-black'},{l:'Live',c:'bg-neo-green text-black'}].map(b => (
                      <span key={b.l} className={`${b.c} text-[10px] font-black px-2.5 py-1 rounded-full border border-black dark:border-zinc-700`}>{b.l}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-600/40 px-3 py-2 rounded-xl">
                    <span className="text-green-600 dark:text-green-400 font-black text-xs">&#x2713;</span>
                    <span className="text-green-800 dark:text-green-300 text-[10px] font-bold">Saved successfully!</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* All Components Browser Panel */}
          <div className="bg-gray-50 dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-zinc-800 overflow-hidden">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-5 border-b border-gray-200 dark:border-zinc-800 gap-4">
              <div>
                <span className="inline-block mb-1.5 bg-neo-yellow text-black font-black text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-black">Full Library</span>
                <h3 className="text-xl font-black text-black dark:text-white">All 30+ Components</h3>
              </div>
              <button
                type="button"
                onClick={() => navigate('/components/button')}
                className="flex items-center gap-2 bg-neo-yellow text-black font-black text-sm px-5 py-2.5 rounded-xl border-2 border-black hover:bg-white transition-colors shadow-[3px_3px_0_0_rgba(0,0,0,0.8)] flex-shrink-0"
              >
                <Layers size={15}/> Browse All Docs
              </button>
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2">
                {allComponents.map((comp) => (
                  <button
                    type="button"
                    key={comp.name}
                    onClick={() => navigate(`/components/${comp.path}`)}
                    className="flex items-center gap-1.5 bg-white dark:bg-zinc-950 hover:bg-neo-yellow dark:hover:bg-neo-yellow dark:hover:text-black hover:border-black text-gray-700 dark:text-zinc-300 text-xs font-bold px-3 py-1.5 rounded-xl border border-gray-300 dark:border-zinc-700 transition-all"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neo-yellow flex-shrink-0 border border-black/20"></span>
                    {comp.name}
                  </button>
                ))}
                <span className="flex items-center text-zinc-600 text-xs font-bold px-3 py-1.5 rounded-xl border border-dashed border-zinc-700">
                  + 10 more soon
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* --- INTERACTIVE CLI SECTION --- */}
      <div className="w-full py-24 px-6 bg-neo-bg dark:bg-zinc-950 border-b-4 border-black dark:border-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 neo-box-no-hover bg-neo-green px-4 py-1.5 font-bold font-comic text-black border-2 border-black transform rotate-1">
              Simple Setup
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-black dark:text-white inline-block relative">
              How It Works
              <span className="absolute -bottom-4 left-0 w-full h-2 bg-neo-blue"></span>
            </h2>
          </div>

          <div className="neo-box-no-hover border-4 border-black dark:border-white bg-[#0d1117] overflow-hidden">
            {/* Tab Bar */}
            <div className="flex border-b-4 border-black dark:border-white bg-white dark:bg-zinc-800">
              {codeTabs.map((tab, i) => (
                <button
                  type="button"
                  key={tab.label}
                  id={`code-tab-${tab.label.toLowerCase()}`}
                  onClick={() => setActiveTab(i)}
                  className={`px-6 py-3 font-black text-base uppercase tracking-wide border-r-4 border-black dark:border-white transition-colors ${
                    activeTab === i ? "bg-neo-yellow text-black" : "text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            {/* Code content */}
            <div className="p-8">
              <pre className="font-mono text-sm text-gray-200 leading-relaxed whitespace-pre-wrap">{codeTabs[activeTab].code}</pre>
            </div>
          </div>
        </div>
      </div>

      {/* --- HOW IT WORKS STEPS --- */}
      <div className="w-full py-24 px-6 relative z-10 bg-white dark:bg-zinc-900 border-b-4 border-black dark:border-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase text-black dark:text-white inline-block relative">
              3 Steps to Start
              <span className="absolute -bottom-4 left-0 w-full h-2 bg-neo-pink"></span>
            </h2>
          </div>
          <div className="steps-container grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { step: "1", title: "Initialize", desc: "Run the init command to inject CSS variables and setup GSAP.", code: "npx @prem_gaikwad/easeui init", color: "bg-neo-blue" },
              { step: "2", title: "Add Components", desc: "Pick what you need, or download the entire library at once.", code: "npx @prem_gaikwad/easeui add all", color: "bg-neo-pink" },
              { step: "3", title: "Customize", desc: "The code is yours. Change the Tailwind classes or GSAP logic.", code: "// Hack the source code!", color: "bg-neo-green" }
            ].map((s, idx) => (
              <div key={idx} className={`step-card neo-box ${s.color} p-8 flex flex-col relative border-4 border-black`}>
                <div className="absolute -top-6 -left-6 w-12 h-12 bg-white border-4 border-black rounded-full flex items-center justify-center font-black text-2xl text-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                  {s.step}
                </div>
                <h3 className="text-2xl font-black uppercase text-black mb-4 mt-2">{s.title}</h3>
                <p className="font-bold text-black/80 mb-6 flex-1 text-lg">{s.desc}</p>
                <div className="bg-black text-white p-3 font-mono text-sm border-2 border-black rounded-md">
                  {s.code}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- FEATURES GRID --- */}
      <div className="w-full py-24 px-6 relative z-10 bg-neo-bg dark:bg-zinc-950 border-b-4 border-black dark:border-white">
        <div className="comic-bg"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-4 mb-16">
            <Box size={48} className="text-black dark:text-white" />
            <h2 className="text-4xl md:text-6xl font-black uppercase text-black dark:text-white">
              Why EaseUI?
            </h2>
          </div>
          <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`feature-card neo-box ${feature.color} p-8 text-black relative group border-4 border-black transition-all hover:-translate-y-2`}
              >
                <div className="mb-6 neo-box-no-hover bg-white w-16 h-16 flex items-center justify-center border-4 border-black group-hover:rotate-12 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black uppercase mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-lg font-bold leading-relaxed opacity-90">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── TESTIMONIALS ─── */}
      <div className="w-full py-24 px-6 bg-white dark:bg-zinc-900 border-b-4 border-black dark:border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 neo-box-no-hover bg-neo-yellow px-4 py-1.5 font-bold font-comic text-black border-2 border-black dark:border-white transform -rotate-1">
              Loved by Devs
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-black dark:text-white inline-block relative">
              What Devs Say
              <span className="absolute -bottom-4 left-0 w-full h-2 bg-neo-green"></span>
            </h2>
          </div>
          <div className="testimonials-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className={`testimonial-card neo-box ${t.color} border-4 border-black dark:border-white p-6 rounded-3xl text-black flex flex-col gap-5 shadow-[6px_6px_0_0_rgba(0,0,0,1)] dark:shadow-[6px_6px_0_0_rgba(255,255,255,1)]`}>
                <div className="bg-white/90 dark:bg-zinc-900/90 border-2 border-black dark:border-zinc-500 p-5 flex-1 rounded-2xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,0.2)]">
                  <p className="font-bold text-lg leading-relaxed dark:text-gray-200">"{t.quote}"</p>
                </div>
                <div className="flex items-center justify-between gap-4 mt-2 px-1">
                  <div>
                    <p className="font-black text-lg leading-tight dark:text-white">{t.name}</p>
                    <p className="font-bold opacity-80 text-sm mt-0.5 dark:text-gray-300">{t.role}</p>
                  </div>
                  <div className="neo-box-no-hover bg-white dark:bg-zinc-800 border-2 border-black dark:border-zinc-500 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 shadow-[4px_4px_0_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_0_rgba(255,255,255,0.2)]">
                    {t.emoji}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- OPEN SOURCE BANNER --- */}
      <div className="open-source-section w-full py-20 px-6 bg-black border-b-4 border-black">
        <div className="max-w-4xl mx-auto open-source-content text-center">
          <div className="inline-flex items-center gap-2 mb-6 neo-box-no-hover bg-neo-green px-4 py-2 font-bold font-comic text-black border-2 border-white">
            <Heart size={16} className="fill-black" /> 100% Open Source
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-white mb-6">
            FREE. FOREVER. <span className="text-neo-yellow">YOURS.</span>
          </h2>
          <p className="font-bold text-gray-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            EaseUI is open source under the MIT license. Fork it, modify it, ship it. No subscriptions, no paywalls, no limits.
          </p>
          <a
            href="https://github.com/Prem759-0/EaseUi.git"
            target="_blank"
            rel="noreferrer"
            id="github-star-btn"
            className="inline-flex items-center gap-3 neo-box bg-white text-black hover:bg-neo-yellow text-xl font-black px-10 py-5 border-4 border-white transition-colors"
          >
            <Github size={26} /> Star on GitHub
            <span className="neo-box-no-hover bg-neo-yellow text-black px-3 py-1 text-base border-2 border-black -my-1 -mr-3 font-black">1.2k ⭐</span>
          </a>
        </div>
      </div>

      {/* ─── FOOTER CTA ─── */}
      <footer className="w-full bg-neo-yellow border-t-[8px] border-black pt-20 pb-10 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
          <h2 className="text-6xl md:text-9xl font-black uppercase text-black mb-8 tracking-tighter">
            READY TO<br/>BUILD?
          </h2>
          <button
            onClick={() => navigate("/components/installation")}
            id="footer-cta-btn"
            className="neo-box bg-black text-white hover:bg-neo-pink hover:text-black text-2xl md:text-3xl font-black px-12 py-6 flex items-center gap-4 border-4 border-black transition-colors"
          >
            GET STARTED <ArrowRight size={32} />
          </button>

          <div className="mt-20 pt-8 border-t-4 border-black w-full flex flex-col md:flex-row justify-between items-center font-bold text-black gap-4 text-lg">
            <p>© 2026 EaseUI. Created by Prem Gaikwad.</p>
            <div className="flex gap-6">
              <a href="https://github.com/Prem759-0/EaseUi.git" target="_blank" rel="noreferrer" className="hover:text-neo-blue underline decoration-4 underline-offset-4 flex items-center gap-1"><Github size={18} /> GitHub</a>
              <a href="https://www.linkedin.com/in/prem-gaikwad-64a417370/" target="_blank" rel="noreferrer" className="hover:text-neo-pink underline decoration-4 underline-offset-4 flex items-center gap-1"><Linkedin size={18} /> LinkedIn</a>
              <a href="https://www.npmjs.com/package/@prem_gaikwad/easeui" target="_blank" rel="noreferrer" className="hover:text-neo-green underline decoration-4 underline-offset-4 flex items-center gap-1"><Package size={18} /> npm</a>
            </div>
          </div>
        </div>
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-black/5 whitespace-nowrap z-0 pointer-events-none select-none">
          EASE UI
        </div>
      </footer>

    </div>
  );
};

export default HomePage;
