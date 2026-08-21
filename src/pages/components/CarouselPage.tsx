import React, { useState, useEffect } from 'react';
import gsap from "gsap";
import { Check, Copy, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";
import ComponentDemo from '../ComponentsDemo';
import { customCarouselCodes } from '@/components/CustomCarouselCodes';
import {
  CarouselDemo,
  CarouselSize,
  CarouselSpacing,
  CarouselOrientation,
  CarouselDApiDemo,
  CarouselPlugin,
  CarouselRtl,
  TeamMemberCarousel,
  AvatarImageCarousel,
  HorizontalImageCarousel
} from '@/components/CarouselDemos';
import PropsTable from '@/components/Personal/PropsTable';

const CarouselPage: React.FC = () => {
  const navigate = useNavigate();
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [copiedImport, setCopiedImport] = useState(false);
  const [copiedUsage, setCopiedUsage] = useState(false);
  const [copiedPage, setCopiedPage] = useState(false);
  const [installTab, setInstallTab] = useState("Command");

  useEffect(() => {
    gsap.fromTo(
      ".page-header",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );
    gsap.fromTo(
      ".page-section",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  const copyToClipboard = (text: string, setter: (val: boolean) => void) => {
    navigator.clipboard.writeText(text).then(() => {
      setter(true);
      setTimeout(() => setter(false), 2000);
    });
  };

  const allExamplesCode = `import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@prem_gaikwad/easeui"

export function App() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
        <CarouselItem>...</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`;

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <header className="page-header mb-8 opacity-0">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div className="space-y-4">
            <h1 className="text-5xl font-comic font-black uppercase tracking-widest text-black dark:text-white inline-block relative">
              Carousel
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-neo-yellow"></span>
            </h1>
            <p className="text-xl font-bold text-gray-700 dark:text-gray-300 border-l-[4px] border-neo-pink pl-4 max-w-xl">
              A carousel with motion and swipe built using Embla.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => copyToClipboard(allExamplesCode, setCopiedPage)}
              className="neo-box text-sm font-bold bg-white text-black px-4 py-2 flex items-center gap-2 border-2 border-black hover:-translate-y-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
            >
              {copiedPage ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />} 
              {copiedPage ? "Copied!" : "Copy Page"}
            </button>
            <div className="flex items-center gap-2">
              <button onClick={() => navigate("/components/navbar")} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => navigate("/components/layout")} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Component Preview */}
      <section className="page-section opacity-0">
        <ComponentDemo code={customCarouselCodes.CarouselDemo.react}>
          <CarouselDemo />
        </ComponentDemo>
      </section>

      {/* Installation Section */}
      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Installation</h2>
        
        <div className="flex gap-4 font-bold border-b-[3px] border-black dark:border-zinc-700 mb-4 text-sm">
          <button 
            onClick={() => setInstallTab("Command")} 
            className={`pb-2 transition-all ${installTab === "Command" ? "border-b-[4px] border-neo-pink text-neo-pink" : "text-gray-500 hover:text-black dark:hover:text-white"}`}
          >
            Command
          </button>
          <button 
            onClick={() => setInstallTab("Manual")} 
            className={`pb-2 transition-all ${installTab === "Manual" ? "border-b-[4px] border-neo-pink text-neo-pink" : "text-gray-500 hover:text-black dark:hover:text-white"}`}
          >
            Manual
          </button>
        </div>

        {installTab === "Command" ? (
          <div className="relative group">
            <pre className="bg-black text-neo-green p-4 rounded-none border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-mono text-sm overflow-x-auto">
              <code>npm install embla-carousel-react embla-carousel-autoplay</code>
            </pre>
            <button
              onClick={() => copyToClipboard("npm install embla-carousel-react embla-carousel-autoplay", setCopiedInstall)}
              className="absolute top-3 right-3 p-2 bg-white text-black border-[2px] border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all"
            >
              {copiedInstall ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
             <div className="relative group">
              <pre className="bg-black text-neo-green p-4 rounded-none border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-mono text-sm overflow-x-auto">
                <code>npm install embla-carousel-react embla-carousel-autoplay</code>
              </pre>
              <button
                onClick={() => copyToClipboard("npm install embla-carousel-react embla-carousel-autoplay", setCopiedInstall)}
                className="absolute top-3 right-3 p-2 bg-white text-black border-[2px] border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all"
              >
                {copiedInstall ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
              </button>
            </div>
            <p className="font-bold text-gray-700 dark:text-gray-300">Copy the code from the component file directly.</p>
          </div>
        )}
      </section>

      {/* Usage Section */}
      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Usage</h2>
        
        <div className="space-y-4">
          <p className="font-bold text-gray-700 dark:text-gray-300 border-l-[4px] border-neo-blue pl-4">1. Import the components:</p>
          <div className="relative group">
            <pre className="bg-black text-neo-blue p-4 rounded-none border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-mono text-sm overflow-x-auto">
              <code>{`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@prem_gaikwad/easeui"`}</code>
            </pre>
            <button
              onClick={() => copyToClipboard(`import {\n  Carousel,\n  CarouselContent,\n  CarouselItem,\n  CarouselNext,\n  CarouselPrevious,\n} from "@prem_gaikwad/easeui"`, setCopiedImport)}
              className="absolute top-3 right-3 p-2 bg-white text-black border-[2px] border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all"
            >
              {copiedImport ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
            </button>
          </div>

          <p className="font-bold text-gray-700 dark:text-gray-300 border-l-[4px] border-neo-yellow pl-4 mt-6">2. Render the components:</p>
          <div className="relative group">
            <pre className="bg-black text-neo-yellow p-4 rounded-none border-[3px] border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] font-mono text-sm overflow-x-auto">
              <code>{`<Carousel>
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}</code>
            </pre>
            <button
              onClick={() => copyToClipboard(`<Carousel>\n  <CarouselContent>\n    <CarouselItem>...</CarouselItem>\n    <CarouselItem>...</CarouselItem>\n    <CarouselItem>...</CarouselItem>\n  </CarouselContent>\n  <CarouselPrevious />\n  <CarouselNext />\n</Carousel>`, setCopiedUsage)}
              className="absolute top-3 right-3 p-2 bg-white text-black border-[2px] border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-none transition-all"
            >
              {copiedUsage ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
            </button>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="page-section space-y-12 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white border-b-4 border-neo-purple inline-block pb-2">Examples</h2>
        
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neo-yellow border-2 border-black flex items-center justify-center font-bold">1</div>
            <h3 className="text-2xl font-bold">Sizes</h3>
          </div>
          <ComponentDemo code={customCarouselCodes.CarouselSize.react}>
            <CarouselSize />
          </ComponentDemo>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neo-pink border-2 border-black flex items-center justify-center font-bold">2</div>
            <h3 className="text-2xl font-bold">Spacing</h3>
          </div>
          <ComponentDemo code={customCarouselCodes.CarouselSpacing.react}>
            <CarouselSpacing />
          </ComponentDemo>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neo-blue border-2 border-black flex items-center justify-center font-bold text-white">3</div>
            <h3 className="text-2xl font-bold">Orientation</h3>
          </div>
          <ComponentDemo code={customCarouselCodes.CarouselOrientation.react}>
            <CarouselOrientation />
          </ComponentDemo>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neo-green border-2 border-black flex items-center justify-center font-bold">4</div>
            <h3 className="text-2xl font-bold">API</h3>
          </div>
          <ComponentDemo code={customCarouselCodes.CarouselDApiDemo.react}>
            <CarouselDApiDemo />
          </ComponentDemo>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neo-orange border-2 border-black flex items-center justify-center font-bold">5</div>
            <h3 className="text-2xl font-bold">Plugins (Autoplay)</h3>
          </div>
          <ComponentDemo code={customCarouselCodes.CarouselPlugin.react}>
            <CarouselPlugin />
          </ComponentDemo>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-neo-purple border-2 border-black flex items-center justify-center font-bold text-white">6</div>
            <h3 className="text-2xl font-bold">RTL Support</h3>
          </div>
          <ComponentDemo code={customCarouselCodes.CarouselRtl.react}>
            <CarouselRtl />
          </ComponentDemo>
        </div>
      </section>

      {/* Advanced Examples */}
      <section className="page-section space-y-12 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white border-b-4 border-neo-red inline-block pb-2">Custom Prebuilt Carousels</h2>
        
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold">Team Member Profile Carousel</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-medium">An interactive carousel where the center item expands to show more details.</p>
          <ComponentDemo 
            tabs={[
              { name: "React", code: customCarouselCodes.TeamMemberCarousel.react, language: "tsx" },
              { name: "HTML", code: customCarouselCodes.TeamMemberCarousel.html || "", language: "html" }
            ]}
          >
            <div className="w-full">
              <TeamMemberCarousel />
            </div>
          </ComponentDemo>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold">Avatar Image Carousel Slider</h3>
          </div>
          <ComponentDemo 
            tabs={[
              { name: "React", code: customCarouselCodes.AvatarImageCarousel.react, language: "tsx" },
              { name: "HTML", code: customCarouselCodes.AvatarImageCarousel.html || "", language: "html" }
            ]}
          >
            <div className="w-full">
              <AvatarImageCarousel />
            </div>
          </ComponentDemo>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold">Responsive Horizontal Image Carousel</h3>
          </div>
          <ComponentDemo 
            tabs={[
              { name: "React", code: customCarouselCodes.HorizontalImageCarousel.react, language: "tsx" },
              { name: "HTML", code: customCarouselCodes.HorizontalImageCarousel.html || "", language: "html" }
            ]}
          >
            <div className="w-full">
              <HorizontalImageCarousel />
            </div>
          </ComponentDemo>
        </div>
      </section>

      {/* Props Reference */}
      <section className="page-section opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Props Reference</h2>
        <PropsTable 
          data={[
            {
              prop: "opts",
              type: "CarouselOptions",
              default: "{}",
              description: "Embla Carousel options (e.g. align, loop).",
            },
            {
              prop: "plugins",
              type: "CarouselPlugin",
              default: "[]",
              description: "Embla Carousel plugins (e.g. Autoplay).",
            },
            {
              prop: "orientation",
              type: '"horizontal" | "vertical"',
              default: '"horizontal"',
              description: "The orientation of the carousel.",
            },
            {
              prop: "setApi",
              type: "(api: CarouselApi) => void",
              default: "-",
              description: "A callback to get the Embla Carousel API instance.",
            }
          ]} 
        />
      </section>
    </div>
  );
};

export default CarouselPage;
