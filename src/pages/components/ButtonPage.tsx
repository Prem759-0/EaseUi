import { useEffect } from "react";
import gsap from "gsap";
import { Button } from "@/components/Button/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const ButtonPage = () => {
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

  const reactCode = `import { Button } from "@/components/Button/Button"

export default function App() {
  return (
    <div className="flex gap-6 flex-wrap justify-center">
      <Button animation="scaleIn" variant="primary" hoverAnimation="jiggle" size="sm">Jiggle</Button>
      <Button animation="slideUp" variant="secondary" hoverAnimation="bounce" size="lg">Bounce</Button>
      <Button animation="fadeIn" variant="outline" hoverAnimation="scale" size="xl">Scale</Button>
      <Button animation="bounceIn" variant="dark" hoverAnimation="none" size="sm">Dark</Button>
    </div>
  )
}`;

  const htmlCode = `<!-- Tailwind CSS HTML equivalent -->
<div class="flex gap-6 flex-wrap justify-center">
  <button class="bg-neo-blue border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2 font-bold text-black hover:-translate-y-1 transition-transform">
    Jiggle
  </button>
  <button class="bg-neo-pink border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-8 py-3 font-bold text-black hover:-translate-y-1 transition-transform">
    Bounce
  </button>
  <button class="bg-transparent border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-10 py-4 font-bold text-black hover:-translate-y-1 transition-transform">
    Scale
  </button>
  <button class="bg-black border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2 font-bold text-white hover:-translate-y-1 transition-transform">
    Dark
  </button>
</div>`;

  const tabs = [
    { name: "React", language: "tsx", code: reactCode },
    { name: "HTML", language: "html", code: htmlCode }
  ];

  const propsData = [
    {
      prop: "variant",
      type: '"primary" | "secondary" | "outline" | "destructive" | "ghost" | "dark" | "ok" | "link"',
      default: '"primary"',
      description: "The visual style variant of the button",
    },
    {
      prop: "size",
      type: '"sm" | "lg" | "xl" | "icon" | "auto" | "full"',
      default: '"lg"',
      description: "The size of the button",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"none"',
      description: "Animation when mounting",
    },
    {
      prop: "hoverAnimation",
      type: '"jiggle" | "scale" | "bounce" | "none"',
      default: '"none"',
      description: "hovering on element animation",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <header className="page-header space-y-4 mb-10 border-b-[4px] border-black dark:border-white pb-8 opacity-0">
        <h1 className="text-5xl font-comic font-black uppercase tracking-widest text-black dark:text-white inline-block relative">
          Button
          <span className="absolute -bottom-2 left-0 w-full h-2 bg-neo-yellow"></span>
        </h1>
        <p className="text-xl font-bold text-gray-700 dark:text-gray-300 mt-6 border-l-[4px] border-neo-pink pl-4">
          Displays a button or a component that looks like a button.
        </p>
      </header>

      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black uppercase text-black dark:text-white bg-neo-blue inline-block px-3 py-1 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Usage</h2>
        <ComponentDemo tabs={tabs}>
          <div className="flex gap-6 flex-wrap justify-center">
            <Button
              animation="scaleIn"
              variant="primary"
              hoverAnimation="jiggle"
              size="sm"
            >
              Jiggle
            </Button>
            <Button
              animation="slideUp"
              variant="secondary"
              hoverAnimation="bounce"
              size="lg"
            >
              Bounce
            </Button>
            <Button
              animation="fadeIn"
              variant="outline"
              hoverAnimation="scale"
              size="xl"
            >
              Scale
            </Button>
            <Button
              animation="bounceIn"
              hoverAnimation="none"
              variant="dark"
              size="sm"
            >
              Dark
            </Button>
          </div>
        </ComponentDemo>
      </section>

      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black uppercase text-black dark:text-white bg-neo-green inline-block px-3 py-1 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default ButtonPage;
