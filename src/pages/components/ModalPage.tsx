import { useState, useEffect } from "react";
import gsap from "gsap";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";

const ModalPage = () => {
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
import { Button } from "@/components/Button/Button";
import { Modal } from "@/components/Modal/Modal";

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
      <header className="page-header space-y-4 mb-10 border-b-[4px] border-black dark:border-white pb-8 opacity-0">
        <h1 className="text-5xl font-comic font-black uppercase tracking-widest text-black dark:text-white inline-block relative">
          Modal
          <span className="absolute -bottom-2 left-0 w-full h-2 bg-neo-blue"></span>
        </h1>
        <p className="text-xl font-bold text-gray-700 dark:text-gray-300 mt-6 border-l-[4px] border-neo-yellow pl-4">
          The Modal component is used to display content in a focused overlay.
        </p>
      </header>

      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black uppercase text-black dark:text-white bg-neo-pink inline-block px-3 py-1 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Usage</h2>
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
        <h2 className="text-3xl font-comic font-black uppercase text-black dark:text-white bg-neo-yellow inline-block px-3 py-1 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default ModalPage;
