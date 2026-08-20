import React, { useState, useEffect } from 'react';
import gsap from "gsap";
import { Check, Copy, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";
import ComponentDemo from '../ComponentsDemo';
import { customTooltipCodes } from '@/components/CustomTooltipCodes';
import { TooltipDemo, TooltipSides, TooltipKeyboard, TooltipDisabled, TooltipRtl, SocialMediaTooltips, InteractiveDirectionalTooltips } from '@/components/TooltipDemos';
import PropsTable from '@/components/Personal/PropsTable';

const TooltipPage: React.FC = () => {
  const navigate = useNavigate();
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [copiedImport, setCopiedImport] = useState(false);
  const [copiedUsage, setCopiedUsage] = useState(false);
  const [copiedPage, setCopiedPage] = useState(false);
  const [installTab, setInstallTab] = useState("Command");

  useEffect(() => {
    gsap.fromTo(
      ".page-header",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
    gsap.fromTo(
      ".page-section",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const copyToClipboard = (text: string, setter: (val: boolean) => void) => {
    navigator.clipboard.writeText(text).then(() => {
      setter(true);
      setTimeout(() => setter(false), 2000);
    });
  };

  const allExamplesCode = `import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip"

export function App() {
  return (
    <TooltipProvider delay={0}>
      <Tooltip>
        <TooltipTrigger render={<button>Hover</button>} />
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}`;

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <header className="page-header mb-8 opacity-0">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div className="space-y-4">
            <h1 className="text-5xl font-comic font-black uppercase tracking-widest text-black dark:text-white inline-block relative">
              Tooltip
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-neo-yellow"></span>
            </h1>
            <p className="text-xl font-bold text-gray-700 dark:text-gray-300 border-l-[4px] border-neo-pink pl-4 max-w-xl">
              A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => copyToClipboard(allExamplesCode, setCopiedPage)}
              className="neo-box text-sm font-bold bg-white text-black px-4 py-2 flex items-center gap-2 border-2 border-black hover:-translate-y-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
            >
              {copiedPage ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />} 
              {copiedPage ? "Copied!" : "Copy Page"}
            </button>
            <div className="flex items-center gap-2">
              <button onClick={() => navigate("/components/modal")} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => navigate("/components/navbar")} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Component Preview */}
      <section className="page-section opacity-0">
        <ComponentDemo code={customTooltipCodes.TooltipDemo.react}>
          <TooltipDemo />
        </ComponentDemo>
      </section>

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
                <span className="text-neo-yellow">npx</span> @prem_gaikwad/easeui add tooltip
              </span>
            </div>
            <button 
              onClick={() => copyToClipboard("npx @prem_gaikwad/easeui add tooltip", setCopiedInstall)}
              className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4 self-start sm:self-center" 
              title="Copy"
            >
               {copiedInstall ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
            </button>
          </div>
        ) : (
          <div className="p-4 border-[3px] border-black bg-white dark:bg-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black dark:text-white font-bold">
            <p>1. Install the following dependencies: <code className="bg-neo-yellow text-black px-1 border border-black">npm install @base-ui/react</code></p>
            <p className="mt-2">2. Copy the tooltip component code from the repository and paste it into <code className="bg-neo-blue text-black px-1 border border-black">components/ui/tooltip.tsx</code></p>
            <p className="mt-2">3. Make sure to add <code className="bg-neo-pink text-black px-1 border border-black">{'<TooltipProvider>'}</code> at the root of your app.</p>
          </div>
        )}
      </section>

      {/* Usage Section */}
      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Usage</h2>
        
        <div className="space-y-4">
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
             <span className="overflow-x-auto">
               <span className="text-neo-pink">import</span> {'{'} Tooltip, TooltipContent, TooltipTrigger {'}'} <span className="text-neo-pink">from</span> <span className="text-neo-yellow">"@/components/ui/tooltip"</span>
             </span>
             <button 
               onClick={() => copyToClipboard('import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"', setCopiedImport)}
               className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4" 
               title="Copy"
             >
               {copiedImport ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
             </button>
          </div>
          
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
             <span className="overflow-x-auto whitespace-pre">
               <span className="text-gray-400">{'<'}</span><span className="text-neo-blue">Tooltip</span><span className="text-gray-400">{'>\n'}</span>
               <span className="text-gray-400">{'  <'}</span><span className="text-neo-blue">TooltipTrigger</span> <span className="text-neo-green">render</span>=<span className="text-gray-400">{'{<button>'}</span>Hover<span className="text-gray-400">{'</button>}'}</span> <span className="text-gray-400">{'>'}</span><span className="text-gray-400">{'\n'}</span>
               <span className="text-gray-400">{'  <'}</span><span className="text-neo-blue">TooltipContent</span><span className="text-gray-400">{'>\n'}</span>
               <span className="text-gray-400">{'    <p>'}</span>Add to library<span className="text-gray-400">{'</p>\n'}</span>
               <span className="text-gray-400">{'  </'}</span><span className="text-neo-blue">TooltipContent</span><span className="text-gray-400">{'>\n'}</span>
               <span className="text-gray-400">{'</'}</span><span className="text-neo-blue">Tooltip</span><span className="text-gray-400">{'>'}</span>
             </span>
             <button 
               onClick={() => copyToClipboard('<Tooltip>\n  <TooltipTrigger render={<button>Hover</button>} />\n  <TooltipContent>\n    <p>Add to library</p>\n  </TooltipContent>\n</Tooltip>', setCopiedUsage)}
               className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4 self-start" 
               title="Copy"
             >
               {copiedUsage ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
             </button>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="page-section opacity-0 space-y-12">
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Sides</h3>
            <p className="text-muted-foreground mb-4">Tooltips can be positioned on any side of the trigger using the side prop.</p>
          </div>
          <ComponentDemo code={customTooltipCodes.TooltipSides.react}>
            <TooltipSides />
          </ComponentDemo>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Keyboard Shortcut</h3>
            <p className="text-muted-foreground mb-4">Tooltips can display keyboard shortcuts using the Kbd component.</p>
          </div>
          <ComponentDemo code={customTooltipCodes.TooltipKeyboard.react}>
            <TooltipKeyboard />
          </ComponentDemo>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Disabled Element</h3>
            <p className="text-muted-foreground mb-4">To show a tooltip on a disabled element, wrap the element in a span.</p>
          </div>
          <ComponentDemo code={customTooltipCodes.TooltipDisabled.react}>
            <TooltipDisabled />
          </ComponentDemo>
        </div>
      </section>

      {/* RTL Support */}
      <section className="page-section opacity-0 space-y-12">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">RTL Support</h2>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-muted-foreground mb-4">Tooltip components fully support Right-to-Left (RTL) layouts and language switching.</p>
          </div>
          <ComponentDemo code={customTooltipCodes.TooltipRtl.react}>
            <TooltipRtl />
          </ComponentDemo>
        </div>
      </section>

      {/* Custom Implementations */}
      <section className="page-section opacity-0 space-y-12">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Custom Implementations</h2>
        
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Social Media Tooltips</h3>
            <p className="text-muted-foreground mb-4">Custom animated tooltips for social media icons using HTML/CSS or React.</p>
          </div>
          <ComponentDemo 
            tabs={[
              { name: "React", language: "tsx", code: customTooltipCodes.SocialMediaTooltips.react },
              { name: "HTML", language: "html", code: customTooltipCodes.SocialMediaTooltips.html! }
            ]}
          >
            <SocialMediaTooltips />
          </ComponentDemo>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Interactive Directional Tooltips</h3>
            <p className="text-muted-foreground mb-4">Custom tooltips with directional arrows using HTML/CSS or React.</p>
          </div>
          <ComponentDemo 
            tabs={[
              { name: "React", language: "tsx", code: customTooltipCodes.InteractiveDirectionalTooltips.react },
              { name: "HTML", language: "html", code: customTooltipCodes.InteractiveDirectionalTooltips.html! }
            ]}
          >
            <InteractiveDirectionalTooltips />
          </ComponentDemo>
        </div>
      </section>

      {/* Props */}
      <section className="page-section opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Props</h2>
        <PropsTable
          data={[
            {
              prop: "side",
              type: "left | top | bottom | right",
              description: "The preferred side of the trigger to render against when open.",
              default: "top"
            },
            {
              prop: "sideOffset",
              type: "number",
              description: "The distance in pixels from the trigger.",
              default: "4"
            },
            {
              prop: "align",
              type: "start | center | end",
              description: "The preferred alignment against the trigger.",
              default: "center"
            },
            {
              prop: "delay",
              type: "number",
              description: "The duration from when the mouse enters a tooltip trigger until the tooltip opens.",
              default: "0"
            }
          ]}
        />
      </section>
    </div>
  );
};

export default TooltipPage;
