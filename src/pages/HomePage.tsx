import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { ArrowRight, Code, Palette, Zap, Copy, Check } from "lucide-react";
import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      const tl = gsap.timeline();
      
      tl.fromTo(
        ".hero-badge",
        { y: -50, opacity: 0, rotation: -10 },
        { y: 0, opacity: 1, rotation: -2, duration: 0.6, ease: "back.out(2)" }
      )
      .fromTo(
        ".hero-title-word",
        { y: 100, opacity: 0, skewY: 10 },
        { y: 0, opacity: 1, skewY: 0, duration: 0.8, stagger: 0.1, ease: "power4.out" },
        "-=0.2"
      )
      .fromTo(
        ".hero-desc",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "-=0.4"
      )
      .fromTo(
        ".hero-btn",
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.5)" },
        "-=0.2"
      )
      .fromTo(
        ".hero-code-window",
        { x: 100, opacity: 0, rotation: 5 },
        { x: 0, opacity: 1, rotation: 2, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );

      // ScrollTrigger Animations
      gsap.fromTo(
        ".trusted-by",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ".trusted-by",
            start: "top 80%",
          }
        }
      );

      gsap.fromTo(
        ".feature-card",
        { y: 100, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.15, 
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 75%",
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(`npm i easeui-react`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const features = [
    {
      icon: <Palette size={40} />,
      title: "Neo-Brutalist",
      desc: "Bold colors, hard shadows, and thick borders that make your UI visually striking.",
      color: "bg-neo-pink"
    },
    {
      icon: <Zap size={40} />,
      title: "Lightning Fast",
      desc: "Built on Vite and React for incredible performance and developer experience.",
      color: "bg-neo-yellow"
    },
    {
      icon: <Code size={40} />,
      title: "Copy & Paste",
      desc: "No heavy npm installs required. Just copy the code and paste it into your project.",
      color: "bg-neo-green"
    }
  ];

  return (
    <div ref={containerRef} className="w-full flex flex-col items-center min-h-[calc(100vh-5rem)] relative overflow-x-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-neo-blue rounded-full border-[4px] border-black neo-box-no-hover hidden lg:block animate-bounce opacity-80" style={{ animationDuration: '4s' }}></div>
      <div className="absolute top-60 right-10 w-16 h-16 bg-neo-yellow border-[4px] border-black rotate-45 neo-box-no-hover hidden lg:block animate-pulse opacity-80"></div>
      <div className="absolute bottom-40 left-20 w-32 h-32 bg-neo-green border-[4px] border-black rotate-12 neo-box-no-hover hidden lg:block opacity-50"></div>
      
      {/* Hero Section */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-16 md:pt-24 lg:pt-32 pb-20 relative z-10 flex flex-col lg:flex-row items-center gap-12">
        
        <div className="flex-1 text-center lg:text-left">
          <div className="hero-badge inline-block mb-6">
            <span className="neo-box-no-hover bg-neo-yellow px-4 py-2 font-bold text-sm md:text-base border-[3px] border-black inline-flex items-center gap-2 text-black transform -rotate-2">
              <span className="w-3 h-3 rounded-full bg-neo-red border border-black animate-pulse"></span>
              v1.0 Ready for Production
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-comic font-black mb-6 leading-[1.1] text-black dark:text-white uppercase tracking-tight overflow-hidden">
            <div className="hero-title-word inline-block mr-2 sm:mr-4">BUILD</div>
            <div className="hero-title-word inline-block mr-2 sm:mr-4">UIs</div>
            <div className="hero-title-word inline-block mr-2 sm:mr-4">THAT</div>
            <br className="hidden lg:block" />
            <div className="hero-title-word inline-block text-white dark:text-black bg-black dark:bg-white px-3 sm:px-4 py-1 relative mt-2 -rotate-2 border-[3px] sm:border-4 border-transparent dark:border-black shadow-[4px_4px_0px_0px_rgba(96,165,250,1)] sm:shadow-[8px_8px_0px_0px_rgba(96,165,250,1)] dark:shadow-[4px_4px_0px_0px_rgba(244,114,182,1)] sm:dark:shadow-[8px_8px_0px_0px_rgba(244,114,182,1)]">
              STAND OUT.
            </div>
          </h1>
          
          <p className="hero-desc text-lg sm:text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
            Stop building boring websites. Grab these copy-and-paste components with a bold, comic-inspired Neo-Brutalist aesthetic.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <button 
              onClick={() => navigate("/components/button")}
              className="hero-btn neo-box bg-neo-blue hover:bg-neo-yellow text-black text-xl font-bold px-8 py-4 flex items-center gap-3 w-full sm:w-auto justify-center border-4"
            >
              Start Building <ArrowRight size={24} />
            </button>
            
            <button 
              className="hero-btn neo-box bg-white dark:bg-zinc-800 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-700 text-black text-xl font-bold px-8 py-4 w-full sm:w-auto border-4"
            >
              Documentation
            </button>
          </div>
        </div>

        {/* Floating Code Preview Window */}
        <div className="hero-code-window hidden md:block flex-1 w-full max-w-lg transform rotate-2">
          <div className="neo-box-no-hover border-[4px] border-black dark:border-white bg-[#1e1e1e] rounded-xl overflow-hidden shadow-[12px_12px_0px_0px_rgba(244,114,182,1)]">
            <div className="flex items-center justify-between px-4 py-3 border-b-[4px] border-black dark:border-white bg-neo-green">
              <div className="flex gap-2">
                <div className="w-4 h-4 rounded-full border-2 border-black bg-neo-red"></div>
                <div className="w-4 h-4 rounded-full border-2 border-black bg-neo-yellow"></div>
                <div className="w-4 h-4 rounded-full border-2 border-black bg-neo-blue"></div>
              </div>
              <span className="font-comic font-bold text-black tracking-wider uppercase text-sm">Button.tsx</span>
            </div>
            <div className="p-6 text-left relative group">
              <pre className="text-neo-green font-mono text-sm leading-relaxed overflow-x-auto">
                <code className="text-neo-pink">import</code> {'{'} Button {'}'} <code className="text-neo-pink">from</code> <code className="text-neo-yellow">"@easeui/react"</code>;<br/><br/>
                <code className="text-neo-blue">export default</code> <code className="text-neo-pink">function</code> <code className="text-neo-yellow">App</code>() {'{'}<br/>
                {'  '}<code className="text-neo-pink">return</code> (<br/>
                {'    '}&lt;<code className="text-neo-blue">Button</code><br/>
                {'      '}<code className="text-neo-yellow">variant</code>=<code className="text-neo-green">"neo-brutalist"</code><br/>
                {'      '}<code className="text-neo-yellow">size</code>=<code className="text-neo-green">"lg"</code><br/>
                {'    '}&gt;<br/>
                {'      '}Click Me!<br/>
                {'    '}&lt;/<code className="text-neo-blue">Button</code>&gt;<br/>
                {'  '});<br/>
                {'}'}
              </pre>
              <button 
                onClick={copyCode}
                className="absolute top-4 right-4 neo-box p-2 bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {copied ? <Check size={20} className="text-neo-green" /> : <Copy size={20} />}
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Trusted By Marquee */}
      <div className="trusted-by w-full bg-white dark:bg-zinc-900 border-y-[4px] border-black dark:border-white py-12 relative z-10 flex flex-col items-center justify-center">
        <p className="font-comic font-bold text-xl uppercase mb-8 bg-black text-white px-4 py-1 -rotate-2 neo-box-no-hover shadow-[4px_4px_0px_0px_rgba(253,224,71,1)]">
          Trusted By (Absolutely Nobody Yet)
        </p>
        <div className="w-full overflow-hidden flex">
          <div className="animate-marquee flex items-center justify-around whitespace-nowrap min-w-full gap-10 sm:gap-20 px-4 sm:px-10">
            <span className="text-2xl sm:text-4xl font-black text-gray-300 dark:text-gray-700">ACME CORP</span>
            <span className="text-2xl sm:text-4xl font-black text-gray-300 dark:text-gray-700">GLOBEX</span>
            <span className="text-2xl sm:text-4xl font-black text-gray-300 dark:text-gray-700">SOYUZ</span>
            <span className="text-2xl sm:text-4xl font-black text-gray-300 dark:text-gray-700">STARK IND</span>
            <span className="text-2xl sm:text-4xl font-black text-gray-300 dark:text-gray-700">WAYNE ENT</span>
          </div>
          <div className="animate-marquee flex items-center justify-around whitespace-nowrap min-w-full gap-10 sm:gap-20 px-4 sm:px-10">
             <span className="text-2xl sm:text-4xl font-black text-gray-300 dark:text-gray-700">ACME CORP</span>
            <span className="text-2xl sm:text-4xl font-black text-gray-300 dark:text-gray-700">GLOBEX</span>
            <span className="text-2xl sm:text-4xl font-black text-gray-300 dark:text-gray-700">SOYUZ</span>
            <span className="text-2xl sm:text-4xl font-black text-gray-300 dark:text-gray-700">STARK IND</span>
            <span className="text-2xl sm:text-4xl font-black text-gray-300 dark:text-gray-700">WAYNE ENT</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-grid max-w-7xl mx-auto w-full py-24 md:py-32 px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
        {features.map((feature, idx) => (
          <div key={idx} className="feature-card neo-box bg-white dark:bg-zinc-800 p-10 flex flex-col gap-6 border-[4px] border-black dark:border-white relative group">
            <div className={`w-20 h-20 neo-box-no-hover ${feature.color} flex items-center justify-center text-black border-[4px] border-black absolute -top-10 -right-6 group-hover:rotate-12 transition-transform duration-300`}>
              {feature.icon}
            </div>
            <h3 className="text-4xl font-comic font-black text-black dark:text-white tracking-wide uppercase mt-4">{feature.title}</h3>
            <div className="h-1 w-20 bg-black dark:bg-white"></div>
            <p className="font-bold text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default HomePage;
