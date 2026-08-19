import { Terminal, Copy, Check, Package, Zap } from "lucide-react";
import { useState } from "react";

const InstallationPage = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyCommand = (command: string, id: string) => {
    navigator.clipboard.writeText(command).then(() => {
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    });
  };

  return (
    <div className="flex flex-col gap-8 pb-20 animate-fadeIn">
      {/* Header */}
      <div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-black dark:text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.1)] dark:drop-shadow-[2px_2px_0_rgba(255,255,255,0.2)]">
          Installation
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl font-medium">
          How to install dependencies and structure your app using the powerful EaseUI CLI.
        </p>
      </div>

      <hr className="border-t-4 border-black dark:border-white" />

      {/* Intro Box */}
      <div className="neo-box bg-neo-yellow text-black p-6 font-medium">
        <div className="flex items-start gap-3">
          <Zap className="shrink-0 mt-1" />
          <p>
            EaseUI uses a powerful CLI to automatically inject components, utility functions, animations, and CSS variables directly into your React project. You do not install EaseUI as a heavy npm dependency; instead, you own the code!
          </p>
        </div>
      </div>

      {/* Step 1: Init */}
      <div className="flex flex-col gap-4 mt-4">
        <h2 className="text-2xl font-black uppercase tracking-wider flex items-center gap-2">
          <span className="bg-black text-white dark:bg-white dark:text-black w-8 h-8 inline-flex items-center justify-center rounded-full font-sans text-xl">
            1
          </span>
          Initialize the CLI
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Run the <code className="bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded font-mono font-bold text-black dark:text-white border-2 border-black dark:border-white neo-box-no-hover text-sm">init</code> command to setup your project. This will ask you where you want to save components, install necessary dependencies (like Tailwind-merge, clsx, and GSAP), copy over utility and animation files, and automatically inject the Neo-Brutalist CSS tokens into your global stylesheet.
        </p>

        <div className="neo-box-no-hover bg-black text-white p-4 font-mono text-sm sm:text-base flex justify-between items-center group relative overflow-hidden">
          <div className="flex items-center gap-3 relative z-10">
            <Terminal size={18} className="text-neo-pink" />
            <span className="text-gray-300">npx <span className="text-white font-bold">@prem_gaikwad/easeui@latest</span> init</span>
          </div>
          <button
            onClick={() => copyCommand("npx @prem_gaikwad/easeui@latest init", "init")}
            className="text-gray-400 hover:text-white transition-colors relative z-10 p-2 hover:bg-zinc-800 rounded-md"
            aria-label="Copy code"
          >
            {copied === "init" ? <Check size={20} className="text-neo-green" /> : <Copy size={20} />}
          </button>
        </div>
      </div>

      <hr className="border-t-[3px] border-dashed border-gray-300 dark:border-zinc-700 my-4" />

      {/* Step 2: Add Components */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-black uppercase tracking-wider flex items-center gap-2">
          <span className="bg-black text-white dark:bg-white dark:text-black w-8 h-8 inline-flex items-center justify-center rounded-full font-sans text-xl">
            2
          </span>
          Add Components
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Add specific components to your project one-by-one. The CLI will download the source code and place it directly into your configured components folder.
        </p>

        <div className="neo-box-no-hover bg-black text-white p-4 font-mono text-sm sm:text-base flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Terminal size={18} className="text-neo-blue" />
            <span className="text-gray-300">npx <span className="text-white font-bold">@prem_gaikwad/easeui@latest</span> add button</span>
          </div>
          <button
            onClick={() => copyCommand("npx @prem_gaikwad/easeui@latest add button", "add-btn")}
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-zinc-800 rounded-md"
            aria-label="Copy code"
          >
            {copied === "add-btn" ? <Check size={20} className="text-neo-green" /> : <Copy size={20} />}
          </button>
        </div>
      </div>
      
      {/* Step 3: Add All */}
      <div className="neo-box bg-neo-pink text-black p-6 mt-6 border-4 border-black">
        <h3 className="text-2xl font-black uppercase tracking-wider flex items-center gap-2 mb-3">
          <Package className="shrink-0" size={28} />
          The "Add All" Super Command
        </h3>
        <p className="text-lg font-medium mb-4">
          Don't want to add components one by one? You can instantly download the <b>entire library</b> at once by passing the <code className="bg-black text-white px-2 py-0.5 mx-1 font-mono">all</code> flag.
        </p>

        <div className="neo-box-no-hover bg-white text-black p-4 font-mono text-sm sm:text-base flex justify-between items-center border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
          <div className="flex items-center gap-3">
            <Terminal size={18} className="text-black" />
            <span>npx <span className="font-bold">@prem_gaikwad/easeui@latest</span> add all</span>
          </div>
          <button
            onClick={() => copyCommand("npx @prem_gaikwad/easeui@latest add all", "add-all")}
            className="text-gray-600 hover:text-black transition-colors p-2 hover:bg-gray-200 rounded-md"
            aria-label="Copy code"
          >
            {copied === "add-all" ? <Check size={20} className="text-neo-green" /> : <Copy size={20} />}
          </button>
        </div>
      </div>
      
      <hr className="border-t-[3px] border-dashed border-gray-300 dark:border-zinc-700 my-4" />

      {/* Done */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-black uppercase tracking-wider flex items-center gap-2">
          <span className="bg-black text-white dark:bg-white dark:text-black w-8 h-8 inline-flex items-center justify-center rounded-full font-sans text-xl">
            3
          </span>
          That's it!
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          You can now start using the components in your application. Because the source code is downloaded directly into your project, you have complete control to customize and tweak the components to match your exact design requirements.
        </p>
      </div>

    </div>
  );
};

export default InstallationPage;
