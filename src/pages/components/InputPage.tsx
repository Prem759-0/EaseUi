import { useEffect, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router";
import ComponentDemo from "@/pages/ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Input } from "@/components";
import { PasswordInput } from "@/components/Input/PasswordInput";
import {
  AnimatedInput,
  FloatingLabelInput,
  InputWithIcon,
  NumberInput,
} from "@/components/Input";
import { Search, Check, Copy, ChevronLeft, ChevronRight } from "lucide-react";

const InputPage = () => {
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

  const reactCodeNormal = `import { Input } from "@/components/Input";

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <Input label="Full Name" placeholder="Enter your name" size="sm" />
      <Input label="Email" type="email" placeholder="Enter your email" size="md" />
      <Input label="Email" type="email" placeholder="Enter your email" size="lg" />
    </div>
  )
}`;

  const htmlCodeNormal = `<!-- Tailwind CSS HTML equivalent -->
<div class="flex flex-col gap-4 w-full max-w-sm">
  <div class="flex flex-col gap-1">
    <label class="font-bold text-sm">Full Name</label>
    <input class="border-[3px] border-black p-2 text-sm focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all" placeholder="Enter your name" />
  </div>
  <div class="flex flex-col gap-1">
    <label class="font-bold text-base">Email</label>
    <input type="email" class="border-[3px] border-black p-3 text-base focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all" placeholder="Enter your email" />
  </div>
</div>`;

  const tabsNormal = [
    { name: "React", language: "tsx", code: reactCodeNormal },
    { name: "HTML", language: "html", code: htmlCodeNormal }
  ];

  const reactCodeAdvanced = `import { AnimatedInput, FloatingLabelInput, InputWithIcon, PasswordInput, NumberInput } from "@/components/Input";
import { Search, Check, Copy, ChevronLeft, ChevronRight } from "lucide-react";

export default function App() {
  return (
    <div className="flex flex-col gap-4">
      <AnimatedInput label="Animated" placeholder="Focus me" />
      <FloatingLabelInput label="Floating" placeholder="" />
      <InputWithIcon label="Search" icon={<Search />} />
      <PasswordInput label="Password" />
      <NumberInput label="Age" />
    </div>
  )
}`;

  const htmlCodeAdvanced = `<!-- Basic Tailwind representations for advanced inputs -->
<div class="flex flex-col gap-4 w-full max-w-sm">
  <div class="relative">
    <input type="password" class="w-full border-[3px] border-black p-3 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all pr-10" placeholder="Password" />
    <button class="absolute right-3 top-1/2 -translate-y-1/2 font-bold">👁</button>
  </div>
</div>`;

  const tabsAdvanced = [
    { name: "React", language: "tsx", code: reactCodeAdvanced },
    { name: "HTML", language: "html", code: htmlCodeAdvanced }
  ];

  const propsData = [
    {
      prop: "placeholder",
      type: "string",
      default: "undefined",
      description: "Placeholder text inside the input",
    },
    {
      prop: "type",
      type: "string",
      default: '"text"',
      description: "Input type (text, password, email, etc.)",
    },
    {
      prop: "value",
      type: "string",
      default: "undefined",
      description: "Value of the input",
    },
    {
      prop: "onChange",
      type: "(e: React.ChangeEvent<HTMLInputElement>) => void",
      default: "undefined",
      description: "Change event handler",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
            <header className="page-header mb-8 opacity-0">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div className="space-y-4">
            <h1 className="text-5xl font-comic font-black uppercase tracking-widest text-black dark:text-white inline-block relative">
              Input
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-neo-pink"></span>
            </h1>
            <p className="text-xl font-bold text-gray-700 dark:text-gray-300 border-l-[4px] border-neo-blue pl-4 max-w-xl">
              Input component for user forms with standard styling and easy customization.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => copyToClipboard("import { " + "Input" + " } from '@base-ui/react'", setCopiedPage)}
              className="neo-box text-sm font-bold bg-white text-black px-4 py-2 flex items-center gap-2 border-2 border-black hover:-translate-y-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
            >
              {copiedPage ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />} 
              {copiedPage ? "Copied!" : "Copy Page"}
            </button>
            <div className="flex items-center gap-2">
              <button onClick={() => navigate("/components/tooltip")} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => navigate("/components/modal")} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
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
                <span className="text-neo-yellow">npx</span> @prem_gaikwad/easeui add input
              </span>
            </div>
            <button 
              onClick={() => copyToClipboard("npx @prem_gaikwad/easeui add input", setCopiedInstall)}
              className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4 self-start sm:self-center" 
              title="Copy"
            >
               {copiedInstall ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
            </button>
          </div>
        ) : (
          <div className="p-4 border-[3px] border-black bg-white dark:bg-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black dark:text-white font-bold">
            <p>1. Install via <code className="bg-neo-yellow text-black px-1 border border-black">npx @prem_gaikwad/easeui init</code></p>
            <p className="mt-2">2. Add the component to your project <code className="bg-neo-blue text-black px-1 border border-black">components/ui/input.tsx</code></p>
          </div>
        )}
      </section>

      {/* Usage Section */}
      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Usage</h2>
        
        <div className="space-y-4">
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
             <span className="overflow-x-auto">
               <span className="text-neo-pink">import</span> {'{'} Input {'}'} <span className="text-neo-pink">from</span> <span className="text-neo-yellow">"@/components/ui/input"</span>
             </span>
             <button 
               onClick={() => copyToClipboard('import { Input } from "@/components/ui/input"', setCopiedImport)}
               className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4" 
               title="Copy"
             >
               {copiedImport ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
             </button>
          </div>
          
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
             <span className="overflow-x-auto text-gray-300">
               <Input label="Full Name" placeholder="Enter your name" size="md" />
             </span>
             <button 
               onClick={() => copyToClipboard('<Input label="Full Name" placeholder="Enter your name" size="md" />', setCopiedUsage)}
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
          <p className="text-lg text-gray-700 dark:text-gray-300 font-bold">Various custom standalone input examples with unique styles.</p>
        </div>
      </section>


      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Examples</h2>
        
        <div className="space-y-4 mt-8">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Normal Inputs</h3>
          <ComponentDemo tabs={tabsNormal}>
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Input
                label="Full Name"
                placeholder="Enter your name"
                size="sm"
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                size="md"
              />
              <Input
                label="Email"
                type="email"
                placeholder="Enter your email"
                size="lg"
              />
            </div>
          </ComponentDemo>
        </div>

        <div className="space-y-4 mt-12">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Advanced Types</h3>
          <ComponentDemo tabs={tabsAdvanced}>
            <div className="flex flex-col gap-6 w-full max-w-sm">
              <AnimatedInput label="Animated" placeholder="Focus me" />
              <FloatingLabelInput label="Floating" placeholder="" />
              <InputWithIcon label="Search" icon={<Search />} />
              <PasswordInput label="Password" />
              <NumberInput label="Age" onChange={(v) => console.log(v)} />
            </div>
          </ComponentDemo>
        </div>
      </section>

      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default InputPage;
