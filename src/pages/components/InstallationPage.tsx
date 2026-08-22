import { Package, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import CodeBlock from "@/components/Personal/CodeBlock";

const tailwindConfigCode = `/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;

const indexCssCode = `@tailwind base;
@tailwind components;
@tailwind utilities;`;

const fontCode = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">`;

const tsconfigCode = `{
  "compilerOptions": {
    // ... other options
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/libs/*": ["./src/libs/*"]
    }
  }
}`;

const viteConfigCode = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`;

const InstallationPage = () => {
  return (
    <div className="flex flex-col gap-8 pb-32 animate-fadeIn">
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

      {/* Step 1: Create Project */}
      <div className="flex flex-col gap-4 mt-4">
        <h2 className="text-2xl font-black uppercase tracking-wider flex items-center gap-2">
          <span className="bg-black text-white dark:bg-white dark:text-black w-8 h-8 inline-flex items-center justify-center rounded-full font-sans text-xl">
            1
          </span>
          Create a new project
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Start by creating a new React project using Vite. If you already have a project, you can skip this step.
        </p>

        <CodeBlock
          language="bash"
          variant="docs"
          code="npm create vite@latest my-app -- --template react-ts
cd my-app
npm install"
        />
      </div>

      <hr className="border-t-[3px] border-dashed border-gray-300 dark:border-zinc-700 my-4" />

      {/* Step 2: Tailwind CSS */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-black uppercase tracking-wider flex items-center gap-2">
          <span className="bg-black text-white dark:bg-white dark:text-black w-8 h-8 inline-flex items-center justify-center rounded-full font-sans text-xl">
            2
          </span>
          Install Tailwind CSS
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          EaseUI components are styled using Tailwind CSS. Install it and its peer dependencies.
        </p>

        <CodeBlock
          language="bash"
          variant="docs"
          code="npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p"
        />

        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          Add your template paths to <code className="bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded font-mono font-bold text-black dark:text-white border-2 border-black dark:border-white neo-box-no-hover text-sm">tailwind.config.js</code>. We also highly recommend adding <code className="bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded font-mono font-bold text-black dark:text-white border-2 border-black dark:border-white neo-box-no-hover text-sm">darkMode: ["class"]</code> to support our dark mode components:
        </p>
        <CodeBlock language="javascript" code={tailwindConfigCode} variant="docs" />

        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          Add the Tailwind directives to your <code className="bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded font-mono font-bold text-black dark:text-white border-2 border-black dark:border-white neo-box-no-hover text-sm">src/index.css</code> file:
        </p>
        <CodeBlock language="css" code={indexCssCode} variant="docs" />
      </div>

      <hr className="border-t-[3px] border-dashed border-gray-300 dark:border-zinc-700 my-4" />

      {/* Step 3: Typography */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-black uppercase tracking-wider flex items-center gap-2">
          <span className="bg-black text-white dark:bg-white dark:text-black w-8 h-8 inline-flex items-center justify-center rounded-full font-sans text-xl">
            3
          </span>
          Setup Typography
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Neo-Brutalist design relies on strong typography. We highly recommend using a thick geometric font like <b>Space Grotesk</b> or <b>Archivo</b>.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          Add the following to the <code className="bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded font-mono font-bold text-black dark:text-white border-2 border-black dark:border-white neo-box-no-hover text-sm">&lt;head&gt;</code> of your <code className="bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded font-mono font-bold text-black dark:text-white border-2 border-black dark:border-white neo-box-no-hover text-sm">index.html</code>:
        </p>
        <CodeBlock language="html" code={fontCode} variant="docs" />
      </div>

      <hr className="border-t-[3px] border-dashed border-gray-300 dark:border-zinc-700 my-4" />

      {/* Step 4: Path Aliases */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-black uppercase tracking-wider flex items-center gap-2">
          <span className="bg-black text-white dark:bg-white dark:text-black w-8 h-8 inline-flex items-center justify-center rounded-full font-sans text-xl">
            4
          </span>
          Configure Path Aliases
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          EaseUI uses absolute paths like <code className="bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded font-mono font-bold text-black dark:text-white border-2 border-black dark:border-white neo-box-no-hover text-sm">@/components</code> to ensure imports never break.
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          First, configure your <code className="bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded font-mono font-bold text-black dark:text-white border-2 border-black dark:border-white neo-box-no-hover text-sm">tsconfig.json</code>:
        </p>
        <CodeBlock language="json" code={tsconfigCode} variant="docs" />

        <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
          Next, install Node types and configure your <code className="bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded font-mono font-bold text-black dark:text-white border-2 border-black dark:border-white neo-box-no-hover text-sm">vite.config.ts</code>:
        </p>
        <CodeBlock language="bash" code="npm install -D @types/node" variant="docs" />
        <CodeBlock language="typescript" code={viteConfigCode} variant="docs" />
      </div>

      <hr className="border-t-[3px] border-dashed border-gray-300 dark:border-zinc-700 my-4" />

      {/* Step 5: Init */}
      <div className="flex flex-col gap-4 mt-4">
        <h2 className="text-2xl font-black uppercase tracking-wider flex items-center gap-2">
          <span className="bg-black text-white dark:bg-white dark:text-black w-8 h-8 inline-flex items-center justify-center rounded-full font-sans text-xl">
            5
          </span>
          Initialize the CLI
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Run the <code className="bg-gray-200 dark:bg-zinc-800 px-2 py-1 rounded font-mono font-bold text-black dark:text-white border-2 border-black dark:border-white neo-box-no-hover text-sm">init</code> command to setup your project. This will ask you where you want to save components, install necessary dependencies (like Tailwind-merge, clsx, and GSAP), copy over utility and animation files, and automatically inject the Neo-Brutalist CSS tokens into your global stylesheet.
        </p>

        <CodeBlock language="bash" code="npx @prem_gaikwad/easeui@latest init" variant="docs" />
      </div>

      <hr className="border-t-[3px] border-dashed border-gray-300 dark:border-zinc-700 my-4" />

      {/* Step 6: Add Components */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-black uppercase tracking-wider flex items-center gap-2">
          <span className="bg-black text-white dark:bg-white dark:text-black w-8 h-8 inline-flex items-center justify-center rounded-full font-sans text-xl">
            6
          </span>
          Add Components
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Add specific components to your project one-by-one. The CLI will download the source code and place it directly into your configured components folder.
        </p>

        <CodeBlock language="bash" code="npx @prem_gaikwad/easeui@latest add button" variant="docs" />
      </div>

      {/* Step 7: Add All */}
      <div className="neo-box bg-neo-pink text-black p-6 mt-6 border-4 border-black">
        <h3 className="text-2xl font-black uppercase tracking-wider flex items-center gap-2 mb-3">
          <Package className="shrink-0" size={28} />
          The "Add All" Super Command
        </h3>
        <p className="text-lg font-medium mb-4">
          Don't want to add components one by one? You can instantly download the <b>entire library</b> at once by passing the <code className="bg-black text-white px-2 py-0.5 mx-1 font-mono">all</code> flag.
        </p>

        <CodeBlock language="bash" code="npx @prem_gaikwad/easeui@latest add all" variant="docs" />
      </div>

      <hr className="border-t-[3px] border-dashed border-gray-300 dark:border-zinc-700 my-8" />

      {/* Done */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-black uppercase tracking-wider flex items-center gap-2">
          <span className="bg-black text-white dark:bg-white dark:text-black w-8 h-8 inline-flex items-center justify-center rounded-full font-sans text-xl">
            8
          </span>
          That's it!
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          You can now start using the components in your application. Because the source code is downloaded directly into your project, you have complete control to customize and tweak the components to match your exact design requirements.
        </p>

        {/* Call to Action */}
        <Link
          to="/components/button"
          className="group inline-flex items-center gap-3 bg-neo-yellow text-black font-black uppercase tracking-wider px-8 py-4 border-4 border-black rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all w-max mt-6 text-lg"
        >
          Browse Components
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

    </div>
  );
};

export default InstallationPage;
