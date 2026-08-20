import { useEffect, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router";
import { Check, Copy, ChevronLeft, ChevronRight } from "lucide-react";
import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const navigate = useNavigate();
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [copiedImport, setCopiedImport] = useState(false);
  const [copiedUsage, setCopiedUsage] = useState(false);
  const [copiedPage, setCopiedPage] = useState(false);
  const [installTab, setInstallTab] = useState("Command");

  const copyToClipboard = (text: string, setter: (val: boolean) => void) => {
    navigator.clipboard.writeText(text).then(() => {
      setter(true);
      setTimeout(() => setter(false), 2000);
    });
  };
  useEffect(() => {
    gsap.fromTo(
      ".page-header",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
    gsap.fromTo(
      ".page-section",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const reactCode = `import { Navbar } from "@/components/navbar";

export default function App() {
  return (
    <div className="w-full flex flex-col gap-6">
      <Navbar variant="light" size="default" animation="fadeIn" />
      <Navbar variant="dark" size="default" animation="slideUp" />
    </div>
  )
}`;

  const htmlCode = `<!-- Tailwind CSS HTML equivalent for a simple brutalist navbar -->
<div class="w-full flex flex-col gap-6">
  <!-- Light Navbar -->
  <nav class="w-full flex items-center justify-between px-6 py-4 bg-white border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
    <h1 class="font-black text-2xl font-comic">Logo</h1>
    <div class="flex gap-5 font-bold">
      <a href="#" class="hover:text-neo-blue transition-colors">Home</a>
      <a href="#" class="hover:text-neo-pink transition-colors">About</a>
      <a href="#" class="hover:text-neo-green transition-colors">Customer</a>
    </div>
    <button class="bg-neo-yellow border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 py-2 font-bold text-black hover:-translate-y-1 transition-transform">
      Profile
    </button>
  </nav>

  <!-- Dark Navbar -->
  <nav class="w-full flex items-center justify-between px-6 py-4 bg-zinc-900 border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-white">
    <h1 class="font-black text-2xl font-comic text-white">Logo</h1>
    <div class="flex gap-5 font-bold text-gray-300">
      <a href="#" class="hover:text-white transition-colors">Home</a>
      <a href="#" class="hover:text-white transition-colors">About</a>
      <a href="#" class="hover:text-white transition-colors">Customer</a>
    </div>
    <button class="bg-neo-blue border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 py-2 font-bold text-black hover:-translate-y-1 transition-transform">
      Profile
    </button>
  </nav>
</div>`;

  const tabs = [
    { name: "React", language: "tsx", code: reactCode },
    { name: "HTML", language: "html", code: htmlCode }
  ];

  const propsData = [
    {
      prop: "variant",
      type: '"dark" | "light" | "primary" | "glass"',
      default: '"light"',
      description: "Visual style variant of the navbar",
    },
    {
      prop: "size",
      type: '"default" | "sm" | "lg" | "xl"',
      default: '"default"',
      description: "Height of the navbar",
    },
    {
      prop: "animation",
      type: "string",
      default: '"fadeIn"',
      description: "Entrance animation type from entranceAnimations",
    },
    {
      prop: "hoverAnimation",
      type: "string",
      default: '"none"',
      description: "Hover animation effect on the entire navbar container",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
            <header className="page-header mb-8 opacity-0">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div className="space-y-4">
            <h1 className="text-5xl font-comic font-black uppercase tracking-widest text-black dark:text-white inline-block relative">
              Navbar
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-neo-yellow"></span>
            </h1>
            <p className="text-xl font-bold text-gray-700 dark:text-gray-300 border-l-[4px] border-neo-pink pl-4 max-w-xl">
              A top navigation bar for your application layout.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => copyToClipboard("import { " + "Navbar" + " } from '@base-ui/react'", setCopiedPage)}
              className="neo-box text-sm font-bold bg-white text-black px-4 py-2 flex items-center gap-2 border-2 border-black hover:-translate-y-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
            >
              {copiedPage ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />} 
              {copiedPage ? "Copied!" : "Copy Page"}
            </button>
            <div className="flex items-center gap-2">
              <button onClick={() => navigate("/components/modal")} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => navigate("/components/installation")} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Installation Section */}
      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Installation</h2>
        
        <div className="flex gap-4 font-bold border-b-[3px] border-black dark:border-zinc-700 mb-4 text-sm">
          <button 
            onClick={() => setInstallTab("Command")} 
            className={`${installTab === "Command" ? "text-black dark:text-white border-b-4 border-black dark:border-white -mb-[3px]" : "text-gray-500 hover:text-black dark:hover:text-white"} pb-2 px-1`}
          >
            Command
          </button>
          <button 
            onClick={() => setInstallTab("Manual")} 
            className={`${installTab === "Manual" ? "text-black dark:text-white border-b-4 border-black dark:border-white -mb-[3px]" : "text-gray-500 hover:text-black dark:hover:text-white"} pb-2 px-1`}
          >
            Manual
          </button>
        </div>

        {installTab === "Command" ? (
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center relative overflow-hidden group shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex gap-2">
                 <button className="bg-neo-yellow text-black px-2 py-0.5 rounded font-black border-2 border-black text-xs">npx</button>
              </div>
              <span className="text-gray-300 mt-2 sm:mt-0">
                <span className="text-neo-yellow">npx</span> @prem_gaikwad/easeui add navbar
              </span>
            </div>
            <button 
              onClick={() => copyToClipboard("npx @prem_gaikwad/easeui add navbar", setCopiedInstall)}
              className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4 self-start sm:self-center" 
              title="Copy"
            >
               {copiedInstall ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
            </button>
          </div>
        ) : (
          <div className="p-4 border-[3px] border-black bg-white dark:bg-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black dark:text-white font-bold">
            <p>1. Install via <code className="bg-neo-yellow text-black px-1 border border-black">npx @prem_gaikwad/easeui init</code></p>
            <p className="mt-2">2. Add the component to your project <code className="bg-neo-blue text-black px-1 border border-black">components/ui/navbar.tsx</code></p>
          </div>
        )}
      </section>

      {/* Usage Section */}
      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Usage</h2>
        
        <div className="space-y-4">
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
             <span className="overflow-x-auto">
               <span className="text-neo-pink">import</span> {'{'} Navbar {'}'} <span className="text-neo-pink">from</span> <span className="text-neo-yellow">"@/components/ui/navbar"</span>
             </span>
             <button 
               onClick={() => copyToClipboard('import { Navbar } from "@/components/ui/navbar"', setCopiedImport)}
               className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4" 
               title="Copy"
             >
               {copiedImport ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
             </button>
          </div>
          
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
             <span className="overflow-x-auto text-gray-300">
               <Navbar variant="light" size="default" />
             </span>
             <button 
               onClick={() => copyToClipboard('<Navbar variant="light" size="default" />', setCopiedUsage)}
               className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4" 
               title="Copy"
             >
               {copiedUsage ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
             </button>
          </div>
        </div>
      </section>

      {/* More Custom Examples */}
      <section className="page-section space-y-12 opacity-0 pt-12 border-t-4 border-black dark:border-white">
        <div>
          <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-2">More Custom Examples</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-bold">Various custom standalone navbar examples with unique styles.</p>
        </div>
      </section>


      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Usage</h2>
        <ComponentDemo tabs={tabs}>
          <div className="w-full flex flex-col gap-6 p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-zinc-700">
            <Navbar variant="light" size="default" />
            <Navbar variant="dark" size="default" />
          </div>
        </ComponentDemo>
      </section>

      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default NavbarPage;
