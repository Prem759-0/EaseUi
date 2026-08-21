import { ArrowLeft, ArrowRight, Terminal } from "lucide-react";
import { useNavigate } from "react-router";
import CodeBlock from "@/components/Personal/CodeBlock";

const CliPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 pb-20 animate-fadeIn max-w-3xl">
      {/* Header */}
      <div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-black dark:text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.1)] dark:drop-shadow-[2px_2px_0_rgba(255,255,255,0.2)]">
          CLI
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 font-bold mb-6">
          Use the EaseUI CLI to instantly add components to your project.
        </p>
      </div>

      {/* Intro */}
      <div className="neo-box bg-white dark:bg-zinc-800 p-6 border-[3px] border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-black uppercase mb-4 text-black dark:text-white flex items-center gap-2">
          <Terminal className="text-neo-pink" />
          The CLI
        </h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-4">
          EaseUI provides a command-line interface that allows you to copy components directly into your codebase without any copy-pasting. 
        </p>
        <CodeBlock code="npx easeui --help" language="bash" showLineNumbers={false} />
      </div>

      {/* Init Command */}
      <div>
        <h2 className="text-3xl font-black uppercase tracking-tight mb-6 text-black dark:text-white border-b-4 border-black pb-2 inline-block">
          init
        </h2>
        <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
          Use the <code>init</code> command to initialize configuration and dependencies for an existing project. It configures CSS variables and sets up the Neo-Brutalist utility classes.
        </p>
        <CodeBlock code="npx easeui init" language="bash" showLineNumbers={false} />
      </div>

      {/* Add Command */}
      <div>
        <h2 className="text-3xl font-black uppercase tracking-tight mb-6 text-black dark:text-white border-b-4 border-black pb-2 inline-block">
          add
        </h2>
        <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
          Use the <code>add</code> command to pull a specific component's source code directly into your <code>components/</code> directory.
        </p>
        <CodeBlock code="npx easeui add button" language="bash" showLineNumbers={false} />
        
        <div className="mt-6 neo-box bg-neo-green p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <p className="text-black font-bold">
            💡 Pro Tip: Once the component is added, you own the code! Feel free to modify the TSX or styles exactly as you need them.
          </p>
        </div>
      </div>

      {/* Navigation */}
      <div className="pt-8 flex justify-between items-center border-t-4 border-black dark:border-white">
        <button
          onClick={() => navigate("/components/theming")}
          className="neo-box bg-white dark:bg-zinc-800 text-black dark:text-white px-6 py-3 border-[3px] border-black flex items-center gap-3 font-black uppercase tracking-wider shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform group cursor-pointer"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Previous
        </button>
        <button
          onClick={() => navigate("/components/changelog")}
          className="neo-box bg-white dark:bg-zinc-800 text-black dark:text-white px-6 py-3 border-[3px] border-black flex items-center gap-3 font-black uppercase tracking-wider shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform group cursor-pointer"
        >
          Next: Changelog
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default CliPage;
