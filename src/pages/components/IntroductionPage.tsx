import { ArrowRight, Code, Layers, Sparkles, Terminal } from "lucide-react";
import { useNavigate } from "react-router";

const IntroductionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 pb-20 animate-fadeIn max-w-3xl">
      {/* Header */}
      <div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-black dark:text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.1)] dark:drop-shadow-[2px_2px_0_rgba(255,255,255,0.2)]">
          Introduction
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 font-bold mb-6">
          EaseUI is a set of beautifully-designed, Neo-Brutalist components and a code distribution platform.
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
          This is <span className="font-bold underline decoration-neo-red decoration-4">not</span> a component library. It is how you build your component library.
        </p>
      </div>

      {/* The Problem */}
      <div className="neo-box bg-white dark:bg-zinc-800 p-6 border-[3px] border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-black uppercase mb-4 text-black dark:text-white flex items-center gap-2">
          <Terminal className="text-neo-blue" />
          The Problem
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-4">
          You know how most traditional component libraries work: you install a package from NPM, import the components, and use them in your app.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
          This approach works well until you need to customize a component to fit your design system or require one that isn't included in the library. Often, you end up wrapping library components, writing workarounds to override styles, or fighting with incompatible APIs.
        </p>
      </div>

      {/* The Solution (Core Principles) */}
      <div>
        <h2 className="text-3xl font-black uppercase tracking-tight mb-6 text-black dark:text-white border-b-4 border-black pb-2 inline-block">
          Core Principles
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Principle 1 */}
          <div className="neo-box bg-neo-yellow p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-black uppercase mb-2 text-black flex items-center gap-2">
              <Code size={20} /> Open Code
            </h3>
            <p className="text-black font-medium">
              EaseUI hands you the actual component code. You have full control to customize and extend the components to your exact needs. No black boxes.
            </p>
          </div>

          {/* Principle 2 */}
          <div className="neo-box bg-neo-pink p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-black uppercase mb-2 text-black flex items-center gap-2">
              <Layers size={20} /> Composition
            </h3>
            <p className="text-black font-medium">
              Every component uses a common, composable interface, making them predictable for your team to learn and adapt.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="neo-box bg-neo-green p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-black uppercase mb-2 text-black flex items-center gap-2">
              <Terminal size={20} /> Distribution CLI
            </h3>
            <p className="text-black font-medium">
              A command-line tool makes it extremely easy to distribute and install components directly into your project's source code.
            </p>
          </div>

          {/* Principle 4 */}
          <div className="neo-box bg-neo-blue p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-xl font-black uppercase mb-2 text-black flex items-center gap-2">
              <Sparkles size={20} /> Beautiful Defaults
            </h3>
            <p className="text-black font-medium">
              Aggressive, Neo-Brutalist styles out-of-the-box. Bold colors, thick borders, and hard shadows give your UI a premium, punchy look immediately.
            </p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="pt-8 flex justify-between items-center border-t-4 border-black dark:border-white">
        <div></div>
        <button
          onClick={() => navigate("/components/installation")}
          className="neo-box bg-white dark:bg-zinc-800 text-black dark:text-white px-6 py-3 border-[3px] border-black flex items-center gap-3 font-black uppercase tracking-wider shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform group cursor-pointer"
        >
          Next: Installation
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default IntroductionPage;
