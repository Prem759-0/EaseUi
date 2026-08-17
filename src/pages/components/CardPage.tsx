import { useEffect } from "react";
import gsap from "gsap";
import { Card } from "@/components/Card/Card";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Button } from "@/components";

const CardPage = () => {
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

  const reactCodeDark = `import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";

export default function App() {
  return (
    <Card
      title="Modern Animated Card"
      description="This card fades in and jiggles on hover!"
      image="https://images.unsplash.com/photo-1761198047035-577c8a197375?auto=format&fit=crop&q=80&w=1015"
      variant="dark"
      size="md"
      animate
      hoverAnimation="jiggle"
      footer={
        <Button animation="scaleIn" variant="primary" hoverAnimation="jiggle" size="sm">
          Jiggle
        </Button>
      }
    />
  )
}`;

  const htmlCodeDark = `<!-- Tailwind CSS HTML equivalent -->
<div class="bg-zinc-900 border-[4px] border-black text-white p-6 max-w-sm flex flex-col gap-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-rotate-2 transition-transform cursor-pointer">
  <img src="https://images.unsplash.com/photo-1761198047035-577c8a197375" class="w-full aspect-[16/9] object-cover border-[3px] border-black" />
  <div class="flex flex-col gap-2">
    <h3 class="text-2xl font-black font-comic">Modern Animated Card</h3>
    <p class="text-gray-300 font-bold">This card fades in and jiggles on hover!</p>
  </div>
  <div class="mt-4">
    <button class="bg-neo-blue border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2 font-bold text-black hover:-translate-y-1 transition-transform w-full">
      Jiggle
    </button>
  </div>
</div>`;

  const tabsDark = [
    { name: "React", language: "tsx", code: reactCodeDark },
    { name: "HTML", language: "html", code: htmlCodeDark }
  ];

  const reactCodeOutline = `import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";

export default function App() {
  return (
    <Card
      title="Outline Styled Card"
      description="This card uses transparent background with brutalist borders."
      image="https://images.unsplash.com/photo-1761198047035-577c8a197375?auto=format&fit=crop&q=80&w=1015"
      variant="outline"
      size="md"
      animate
      hoverAnimation="bounce"
      footer={
        <Button animation="scaleIn" variant="primary" hoverAnimation="jiggle" size="sm">
          Jiggle
        </Button>
      }
    />
  )
}`;

  const htmlCodeOutline = `<!-- Tailwind CSS HTML equivalent -->
<div class="bg-transparent border-[4px] border-black text-black p-6 max-w-sm flex flex-col gap-4 hover:-translate-y-2 transition-transform cursor-pointer">
  <img src="https://images.unsplash.com/photo-1761198047035-577c8a197375" class="w-full aspect-[16/9] object-cover border-[3px] border-black" />
  <div class="flex flex-col gap-2">
    <h3 class="text-2xl font-black font-comic">Outline Styled Card</h3>
    <p class="text-gray-600 font-bold">This card uses transparent background with brutalist borders.</p>
  </div>
  <div class="mt-4">
    <button class="bg-neo-blue border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2 font-bold text-black hover:-translate-y-1 transition-transform w-full">
      Jiggle
    </button>
  </div>
</div>`;

  const tabsOutline = [
    { name: "React", language: "tsx", code: reactCodeOutline },
    { name: "HTML", language: "html", code: htmlCodeOutline }
  ];

  const reactCodeLight = `import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";

export default function App() {
  return (
    <Card
      title="Light Animated Card"
      description="This card uses float3D animation!"
      image="https://images.unsplash.com/photo-1761198047035-577c8a197375?auto=format&fit=crop&q=80&w=1015"
      variant="light"
      size="md"
      animate
      hoverAnimation="float3D"
      footer={
        <Button animation="scaleIn" variant="primary" hoverAnimation="jiggle" size="sm">
          Jiggle
        </Button>
      }
    />
  )
}`;

  const htmlCodeLight = `<!-- Tailwind CSS HTML equivalent -->
<div class="bg-white border-[4px] border-black text-black p-6 max-w-sm flex flex-col gap-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-rotate-2 transition-transform cursor-pointer">
  <img src="https://images.unsplash.com/photo-1761198047035-577c8a197375" class="w-full aspect-[16/9] object-cover border-[3px] border-black" />
  <div class="flex flex-col gap-2">
    <h3 class="text-2xl font-black font-comic">Light Animated Card</h3>
    <p class="text-gray-600 font-bold">This card uses float3D animation!</p>
  </div>
  <div class="mt-4">
    <button class="bg-neo-blue border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-2 font-bold text-black hover:-translate-y-1 transition-transform w-full">
      Jiggle
    </button>
  </div>
</div>`;

  const tabsLight = [
    { name: "React", language: "tsx", code: reactCodeLight },
    { name: "HTML", language: "html", code: htmlCodeLight }
  ];

  const propsData = [
    {
      prop: "variant",
      type: `"light" | "dark" | "outline"`,
      default: `"light"`,
      description: "Defines the visual style of the card background and border.",
    },
    {
      prop: "hoverAnimation",
      type: `"none" | "jiggle" | "scale" | "shadowPulse" | "float3D" | "wobbleFollow"`,
      default: `"none"`,
      description: "Specifies the GSAP-powered hover animation for interactive motion effects.",
    },
    {
      prop: "animate",
      type: "boolean",
      default: "false",
      description: "When true, the card will apply an entrance animation defined by `animationType`.",
    },
    {
      prop: "animationType",
      type: `"fadeIn" | "slideUp" | "zoomIn"`,
      default: `"fadeIn"`,
      description: "Specifies which entrance animation to use when card mounts.",
    },
    {
      prop: "title",
      type: "string",
      default: "-",
      description: "Optional title displayed at the top of the card.",
    },
    {
      prop: "description",
      type: "string",
      default: "-",
      description: "Optional description text displayed below the title.",
    },
    {
      prop: "image",
      type: "string",
      default: "-",
      description: "URL of an image displayed at the top of the card with aspect ratio control.",
    },
    {
      prop: "size",
      type: `"sm" | "md" | "lg"`,
      default: `"md"`,
      description: "Controls the internal padding and text size of the card content.",
    },
    {
      prop: "footer",
      type: "React.ReactNode",
      default: "-",
      description: "Optional footer content (e.g., buttons or links) rendered at the bottom of the card.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <header className="page-header space-y-4 mb-10 border-b-[4px] border-black dark:border-white pb-8 opacity-0">
        <h1 className="text-5xl font-comic font-black uppercase tracking-widest text-black dark:text-white inline-block relative">
          Card
          <span className="absolute -bottom-2 left-0 w-full h-2 bg-neo-green"></span>
        </h1>
        <p className="text-xl font-bold text-gray-700 dark:text-gray-300 mt-6 border-l-[4px] border-neo-red pl-4">
          The Card component is a container for grouping content with a bold border and padding.
        </p>
      </header>

      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black uppercase text-black dark:text-white bg-neo-blue inline-block px-3 py-1 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">Usage</h2>
        <div className="flex flex-col gap-12 mt-8">

          <div className="space-y-4">
            <h3 className="text-2xl font-comic font-bold text-black dark:text-white border-b-[3px] border-black pb-2 inline-block">Dark Variant</h3>
            <ComponentDemo tabs={tabsDark}>
              <div className="w-full max-w-sm">
                <Card
                  title="Modern Animated Card"
                  description="This card fades in and jiggles on hover!"
                  image="https://images.unsplash.com/photo-1761198047035-577c8a197375?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1015"
                  variant="dark"
                  size="md"
                  animate
                  hoverAnimation="jiggle"
                  footer={
                    <Button
                      animation="scaleIn"
                      variant="primary"
                      hoverAnimation="jiggle"
                      size="sm"
                    >
                      Jiggle
                    </Button>
                  }
                />
              </div>
            </ComponentDemo>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-comic font-bold text-black dark:text-white border-b-[3px] border-black pb-2 inline-block">Outline Variant</h3>
            <ComponentDemo tabs={tabsOutline}>
              <div className="w-full max-w-sm">
                <Card
                  title="Outline Styled Card"
                  description="This card uses transparent background with brutalist borders."
                  image="https://images.unsplash.com/photo-1761198047035-577c8a197375?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1015"
                  variant="outline"
                  size="md"
                  animate
                  hoverAnimation="bounce"
                  footer={
                    <Button
                      animation="scaleIn"
                      variant="primary"
                      hoverAnimation="jiggle"
                      size="sm"
                    >
                      Jiggle
                    </Button>
                  }
                />
              </div>
            </ComponentDemo>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-comic font-bold text-black dark:text-white border-b-[3px] border-black pb-2 inline-block">Light Variant (Float3D)</h3>
            <ComponentDemo tabs={tabsLight}>
              <div className="w-full max-w-sm">
                <Card
                  title="Light Animated Card"
                  description="This card uses float3D animation!"
                  image="https://images.unsplash.com/photo-1761198047035-577c8a197375?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1015"
                  variant="light"
                  size="md"
                  animate
                  hoverAnimation="float3D"
                  footer={
                    <Button
                      animation="scaleIn"
                      variant="primary"
                      hoverAnimation="jiggle"
                      size="sm"
                    >
                      Jiggle
                    </Button>
                  }
                />
              </div>
            </ComponentDemo>
          </div>

        </div>
      </section>

      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black uppercase text-black dark:text-white bg-neo-yellow inline-block px-3 py-1 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default CardPage;
