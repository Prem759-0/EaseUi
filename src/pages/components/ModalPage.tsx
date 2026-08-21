import { useState, useEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router";
import { Check, Copy, ChevronLeft, ChevronRight } from "lucide-react";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";

const ModalPage = () => {
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
  const [lightModal, setLightModal] = useState(false);
  const [darkModal, setDarkModal] = useState(false);
  const [outlineModal, setOutlineModal] = useState(false);

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

  const reactCode = `import { useState } from "react";
import { Button } from "@prem_gaikwad/easeui";
import { Modal } from "@prem_gaikwad/easeui";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setIsOpen(true)}>Open Modal</Button>
      
      <Modal variant="light" size="sm" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-lg font-bold font-comic">Modal Title</h2>
        <p className="mt-2 font-bold text-gray-600">This is modal content inside a brutalist window.</p>
        <div className="mt-6 flex justify-end">
          <Button variant="outline" size="sm" onClick={() => setIsOpen(false)}>Close</Button>
        </div>
      </Modal>
    </>
  )
}`;

  const htmlCode = `<!-- Tailwind CSS HTML equivalent (requires JS to toggle classes) -->
<button class="bg-neo-blue border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2 font-bold text-black hover:-translate-y-1 transition-transform">
  Open Modal
</button>

<!-- Modal Overlay -->
<div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
  <!-- Modal Content -->
  <div class="bg-white border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] max-w-md w-full relative">
    <!-- Header -->
    <div class="flex items-center justify-between border-b-[4px] border-black p-4 bg-neo-yellow">
      <h2 class="text-xl font-bold font-comic">Modal Title</h2>
      <button class="w-8 h-8 flex items-center justify-center bg-white border-2 border-black hover:bg-neo-red hover:text-white transition-colors">✕</button>
    </div>
    <!-- Body -->
    <div class="p-6">
      <p class="font-bold text-gray-600">This is modal content inside a brutalist window.</p>
      <div class="mt-6 flex justify-end">
        <button class="bg-transparent border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-4 py-2 font-bold text-black hover:-translate-y-1 transition-transform">
          Close
        </button>
      </div>
    </div>
  </div>
</div>`;

  const tabs = [
    { name: "React", language: "tsx", code: reactCode },
    { name: "HTML", language: "html", code: htmlCode }
  ];

  const propsData = [
    {
      prop: "isOpen",
      type: "boolean",
      default: "false",
      description: "Controls modal visibility",
    },
    {
      prop: "variant",
      type: '"light" | "dark" | "outline"',
      default: '"light"',
      description: "The visual style variant of the Modal",
    },
    {
      prop: "size",
      type: '"sm" | "md" | "lg" | "xl" | "full"',
      default: '"md"',
      description: "The maximum width of the modal",
    },
    {
      prop: "onClose",
      type: "() => void",
      default: "-",
      description: "Callback when modal closes",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "Content inside the modal",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
            <header className="page-header mb-8 opacity-0">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div className="space-y-4">
            <h1 className="text-5xl font-comic font-black uppercase tracking-widest text-black dark:text-white inline-block relative">
              Modal
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-neo-green"></span>
            </h1>
            <p className="text-xl font-bold text-gray-700 dark:text-gray-300 border-l-[4px] border-neo-red pl-4 max-w-xl">
              A dialog window that overlays the main content with brutalist styling.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => copyToClipboard("import { " + "Modal" + " } from '@base-ui/react'", setCopiedPage)}
              className="neo-box text-sm font-bold bg-white text-black px-4 py-2 flex items-center gap-2 border-2 border-black hover:-translate-y-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
            >
              {copiedPage ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />} 
              {copiedPage ? "Copied!" : "Copy Page"}
            </button>
            <div className="flex items-center gap-2">
              <button onClick={() => navigate("/components/input")} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => navigate("/components/navbar")} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
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
                <span className="text-neo-yellow">npx</span> @prem_gaikwad/easeui add modal
              </span>
            </div>
            <button 
              onClick={() => copyToClipboard("npx @prem_gaikwad/easeui add modal", setCopiedInstall)}
              className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4 self-start sm:self-center" 
              title="Copy"
            >
               {copiedInstall ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
            </button>
          </div>
        ) : (
          <div className="p-4 border-[3px] border-black bg-white dark:bg-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black dark:text-white font-bold">
            <p>1. Install via <code className="bg-neo-yellow text-black px-1 border border-black">npx @prem_gaikwad/easeui init</code></p>
            <p className="mt-2">2. Add the component to your project <code className="bg-neo-blue text-black px-1 border border-black">components/ui/modal.tsx</code></p>
          </div>
        )}
      </section>

      {/* Usage Section */}
      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Usage</h2>
        
        <div className="space-y-4">
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
             <span className="overflow-x-auto">
               <span className="text-neo-pink">import</span> {'{'} Modal {'}'} <span className="text-neo-pink">from</span> <span className="text-neo-yellow">"@prem_gaikwad/easeui"</span>
             </span>
             <button 
               onClick={() => copyToClipboard('import { Modal } from "@prem_gaikwad/easeui"', setCopiedImport)}
               className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4" 
               title="Copy"
             >
               {copiedImport ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
             </button>
          </div>
          
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
             <span className="overflow-x-auto text-gray-300">
               <Modal isOpen={false} onClose={() => {}}><p>Hello</p></Modal>
             </span>
             <button 
               onClick={() => copyToClipboard('<Modal isOpen={false} onClose={() => {}}><p>Hello</p></Modal>', setCopiedUsage)}
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
          <p className="text-lg text-gray-700 dark:text-gray-300 font-bold">Various custom standalone modal examples with unique styles.</p>
        </div>
      </section>


      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Usage</h2>
        <ComponentDemo tabs={tabs}>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button
              variant="primary"
              onClick={() => setLightModal(true)}
            >
              Light Modal
            </Button>
            <Modal
              variant="light"
              size="sm"
              isOpen={lightModal}
              onClose={() => setLightModal(false)}
            >
              <h2 className="text-xl font-bold font-comic">Modal Title</h2>
              <p className="mt-2 font-bold text-gray-600">This is modal content in a light brutalist style.</p>
              <div className="mt-6 flex justify-end">
                <Button variant="outline" size="sm" onClick={() => setLightModal(false)}>Close</Button>
              </div>
            </Modal>

            <Button
              variant="dark"
              onClick={() => setDarkModal(true)}
            >
              Dark Modal
            </Button>
            <Modal
              variant="dark"
              size="md"
              isOpen={darkModal}
              onClose={() => setDarkModal(false)}
            >
              <h2 className="text-xl font-bold font-comic text-white">Modal Title</h2>
              <p className="mt-2 font-bold text-gray-300">This is modal content in a dark brutalist style.</p>
              <div className="mt-6 flex justify-end">
                <Button variant="primary" size="sm" onClick={() => setDarkModal(false)}>Close</Button>
              </div>
            </Modal>

            <Button variant="outline" onClick={() => setOutlineModal(true)}>
              Outline Modal
            </Button>
            <Modal
              variant="outline"
              size="sm"
              isOpen={outlineModal}
              onClose={() => setOutlineModal(false)}
            >
              <h2 className="text-xl font-bold font-comic">Modal Title</h2>
              <p className="mt-2 font-bold text-gray-600">This is modal content in a transparent brutalist style.</p>
              <div className="mt-6 flex justify-end">
                <Button variant="dark" size="sm" onClick={() => setOutlineModal(false)}>Close</Button>
              </div>
            </Modal>
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

export default ModalPage;
