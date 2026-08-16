import { useEffect } from "react";
import gsap from "gsap";
import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
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
      <header className="page-header space-y-4 mb-10 border-b-[4px] border-black dark:border-white pb-8 opacity-0">
        <h1 className="text-5xl font-comic font-black uppercase tracking-widest text-black dark:text-white inline-block relative">
          Navbar
          <span className="absolute -bottom-2 left-0 w-full h-2 bg-neo-yellow"></span>
        </h1>
        <p className="text-xl font-bold text-gray-700 dark:text-gray-300 mt-6 border-l-[4px] border-neo-red pl-4">
          A top navigation bar for your application layout.
        </p>
      </header>

      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black uppercase text-black dark:text-white bg-neo-pink inline-block px-3 py-1 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Usage</h2>
        <ComponentDemo tabs={tabs}>
          <div className="w-full flex flex-col gap-6 p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-zinc-700">
            <Navbar variant="light" size="default" />
            <Navbar variant="dark" size="default" />
          </div>
        </ComponentDemo>
      </section>

      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black uppercase text-black dark:text-white bg-neo-blue inline-block px-3 py-1 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default NavbarPage;
