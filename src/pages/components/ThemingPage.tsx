import { ArrowLeft, ArrowRight, Paintbrush } from "lucide-react";
import { useNavigate } from "react-router";
import CodeBlock from "@/components/Personal/CodeBlock";

const ThemingPage = () => {
  const navigate = useNavigate();

  const cssCode = `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --neo-bg: #fdfbf7;
    --neo-text: #000000;
    --neo-border: #000000;
    
    /* Neo-Brutalist Color Palette */
    --neo-yellow: #ffc700;
    --neo-pink: #ff90e8;
    --neo-blue: #90f4ff;
    --neo-green: #23a094;
    --neo-red: #ff5e5e;
  }

  .dark {
    --neo-bg: #18181b;
    --neo-text: #ffffff;
    --neo-border: #ffffff;
    
    /* Slightly muted colors for dark mode if desired */
    --neo-yellow: #eab308;
    --neo-pink: #e879f9;
  }
}`;

  return (
    <div className="flex flex-col gap-10 pb-20 animate-fadeIn max-w-3xl">
      {/* Header */}
      <div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-black dark:text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.1)] dark:drop-shadow-[2px_2px_0_rgba(255,255,255,0.2)]">
          Theming
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 font-bold mb-6">
          Using CSS variables to customize the aggressive, Neo-Brutalist look.
        </p>
      </div>

      {/* Philosophy */}
      <div className="neo-box bg-neo-yellow p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
        <h2 className="text-2xl font-black uppercase mb-4 text-black flex items-center gap-2">
          <Paintbrush size={24} /> Token Convention
        </h2>
        <p className="text-black font-medium mb-4">
          We use semantic CSS variables mapped to Tailwind configurations. In Neo-Brutalism, colors are meant to clash beautifully. By default, EaseUI exposes primary colors like <code>neo-yellow</code>, <code>neo-pink</code>, and <code>neo-blue</code>.
        </p>
        <p className="text-black font-medium">
          Override these tokens in your <code>index.css</code> to completely change the look of your app without rewriting any component classes.
        </p>
      </div>

      {/* Global CSS */}
      <div>
        <h2 className="text-2xl font-black uppercase tracking-tight mb-4 text-black dark:text-white border-b-4 border-black pb-2 inline-block">
          Theme Tokens
        </h2>
        <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
          These tokens live in your CSS file under <code>:root</code> and <code>.dark</code>.
        </p>
        <CodeBlock code={cssCode} language="css" showLineNumbers={false} variant="docs" />
      </div>

      {/* Adding New Tokens */}
      <div className="neo-box bg-white dark:bg-zinc-800 p-6 border-[3px] border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <h3 className="text-xl font-black uppercase mb-4 text-black dark:text-white">
          Dark Mode Integration
        </h3>
        <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
          Dark mode works by overriding the same tokens inside a <code>.dark</code> selector. EaseUI uses <strong>Redux Toolkit</strong> to manage the global theme state.
        </p>
        <p className="text-gray-700 dark:text-gray-300 font-medium">
          When the user toggles dark mode, the <code>dark</code> class is appended to the HTML body, instantly swapping all variables and applying the high-contrast dark theme without any JavaScript flicker.
        </p>
      </div>

      {/* Navigation */}
      <div className="pt-8 flex justify-between items-center border-t-4 border-black dark:border-white">
        <button
          onClick={() => navigate("/components/installation")}
          className="neo-box bg-white dark:bg-zinc-800 text-black dark:text-white px-6 py-3 border-[3px] border-black flex items-center gap-3 font-black uppercase tracking-wider shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform group cursor-pointer"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Previous
        </button>
        <button
          onClick={() => navigate("/components/cli")}
          className="neo-box bg-white dark:bg-zinc-800 text-black dark:text-white px-6 py-3 border-[3px] border-black flex items-center gap-3 font-black uppercase tracking-wider shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform group cursor-pointer"
        >
          Next: CLI
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ThemingPage;
