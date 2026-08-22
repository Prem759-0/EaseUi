import { useEffect, useState } from "react";
import gsap from "gsap";
import { Button } from "@/components/Button/Button";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Copy, Check, ChevronLeft, ChevronRight, ArrowUp, ArrowUpRight, GitBranch, GitFork } from "lucide-react";
import { useNavigate } from "react-router";
import { ButtonLoading, ButtonGroupDemo, ButtonRender, ButtonRtl, BaseButtonIcon } from "@/components/BaseButtonDemos";
import {
  EasyAccessButtons,
  CommunicationButtons,
  BorderedButtons,
  ButtonBottomBorderAnimation,
  TextRollingAnimationButton,
  ButtonCircleBorderAnimation,
  ButtonDualBorderAnimation,
  DownloadButton,
  PremiumButtons,
  ButtonGlassAnimation,
  QuickActionButton,
  ButtonColorfulBorderAnimation,
  ButtonVariants,
  FlatEdgeButtons,
  GlowingButtonHoverEffect,
  CompactMsgButtons,
  ActionButtons,
} from "@/components/CustomButtonDemos";

import {
  easyAccessButtonsCode,
  communicationButtonsCode,
  borderedButtonsCode,
  buttonBottomBorderAnimationCode,
  textRollingAnimationButtonCode,
  buttonCircleBorderAnimationCode,
  buttonDualBorderAnimationCode,
  downloadButtonCode,
  premiumButtonsCode,
  buttonGlassAnimationCode,
  quickActionButtonCode,
  buttonColorfulBorderAnimationCode,
  buttonVariantsCode,
  flatEdgeButtonsCode,
  glowingButtonHoverEffectCode,
  compactMsgButtonsCode,
  actionButtonsCode,
} from "@/components/CustomButtonCodes";

const ButtonPage = () => {
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

  const reactCode = `import { Button } from "@/components/easeui/Button"

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

  const allExamplesCode = `import { Button } from "@/components/easeui/Button"
import { ChevronRight } from "lucide-react"

export function AllButtonExamples() {
  return (
    <div className="flex flex-col gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline" size="icon">
        <ChevronRight size={24} />
      </Button>
    </div>
  )
}`;

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

  const copyToClipboard = (text: string, setter: (val: boolean) => void) => {
    navigator.clipboard.writeText(text).then(() => {
      setter(true);
      setTimeout(() => setter(false), 2000);
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <header className="page-header mb-8 opacity-0">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div className="space-y-4">
            <h1 className="text-5xl font-comic font-black uppercase tracking-widest text-black dark:text-white inline-block relative">
              Button
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-neo-yellow"></span>
            </h1>
            <p className="text-xl font-bold text-gray-700 dark:text-gray-300 border-l-[4px] border-neo-pink pl-4 max-w-xl">
              Displays a button or a component that looks like a button.
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
              <button onClick={() => navigate("/components/installation")} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => navigate("/components/card")} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Component Preview */}
      <section className="page-section opacity-0">
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
                <span className="text-neo-yellow">npx</span> @prem_gaikwad/easeui add button
              </span>
            </div>
            <button 
              onClick={() => copyToClipboard("npx @prem_gaikwad/easeui add button", setCopiedInstall)}
              className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4 self-start sm:self-center" 
              title="Copy"
            >
               {copiedInstall ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
            </button>
          </div>
        ) : (
          <div className="p-4 border-[3px] border-black bg-white dark:bg-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black dark:text-white font-bold">
            <p>1. Ensure you have installed EaseUI core via <code className="bg-neo-yellow text-black px-1 border border-black">npx @prem_gaikwad/easeui init</code></p>
            <p className="mt-2">2. Copy the button component code from the repository and paste it into <code className="bg-neo-blue text-black px-1 border border-black">components/ui/button.tsx</code></p>
          </div>
        )}
      </section>

      {/* Usage Section */}
      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Usage</h2>
        
        <div className="space-y-4">
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
             <span className="overflow-x-auto">
               <span className="text-neo-pink">import</span> {'{'} Button {'}'} <span className="text-neo-pink">from</span> <span className="text-neo-yellow">"@/components/easeui/Button"</span>
             </span>
             <button 
               onClick={() => copyToClipboard('import { Button } from "@/components/easeui/Button"', setCopiedImport)}
               className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4" 
               title="Copy"
             >
               {copiedImport ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
             </button>
          </div>
          
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
             <span className="overflow-x-auto">
               <span className="text-gray-400">{'<'}</span><span className="text-neo-blue">Button</span> <span className="text-neo-green">variant</span>=<span className="text-neo-yellow">"outline"</span><span className="text-gray-400">{'>'}</span>Button<span className="text-gray-400">{'</'}</span><span className="text-neo-blue">Button</span><span className="text-gray-400">{'>'}</span>
             </span>
             <button 
               onClick={() => copyToClipboard('<Button variant="outline">Button</Button>', setCopiedUsage)}
               className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4" 
               title="Copy"
             >
               {copiedUsage ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
             </button>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section className="page-section space-y-12 opacity-0">
        <div>
          <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-2">Examples</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-bold">Various configurations of the Button component.</p>
        </div>
        
        {/* Primary Example */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Primary</h3>
          <ComponentDemo tabs={[{ name: "React", language: "tsx", code: 'import { Button } from "@/components/easeui/Button"\n\nexport function ButtonDemo() {\n  return <Button variant="primary">Primary</Button>\n}' }]}>
            <Button variant="primary">Primary</Button>
          </ComponentDemo>
        </div>

        {/* Secondary Example */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Secondary</h3>
          <ComponentDemo tabs={[{ name: "React", language: "tsx", code: 'import { Button } from "@/components/easeui/Button"\n\nexport function ButtonSecondary() {\n  return <Button variant="secondary">Secondary</Button>\n}' }]}>
            <Button variant="secondary">Secondary</Button>
          </ComponentDemo>
        </div>

        {/* Destructive Example */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Destructive</h3>
          <ComponentDemo tabs={[{ name: "React", language: "tsx", code: 'import { Button } from "@/components/easeui/Button"\n\nexport function ButtonDestructive() {\n  return <Button variant="destructive">Destructive</Button>\n}' }]}>
            <Button variant="destructive">Destructive</Button>
          </ComponentDemo>
        </div>

        {/* Outline Example */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Outline</h3>
          <ComponentDemo tabs={[{ name: "React", language: "tsx", code: 'import { Button } from "@/components/easeui/Button"\n\nexport function ButtonOutline() {\n  return <Button variant="outline">Outline</Button>\n}' }]}>
            <Button variant="outline">Outline</Button>
          </ComponentDemo>
        </div>

        {/* Ghost Example */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Ghost</h3>
          <ComponentDemo tabs={[{ name: "React", language: "tsx", code: 'import { Button } from "@/components/easeui/Button"\n\nexport function ButtonGhost() {\n  return <Button variant="ghost">Ghost</Button>\n}' }]}>
            <Button variant="ghost">Ghost</Button>
          </ComponentDemo>
        </div>

        {/* Link Example */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Link</h3>
          <ComponentDemo tabs={[{ name: "React", language: "tsx", code: 'import { Button } from "@/components/easeui/Button"\n\nexport function ButtonLink() {\n  return <Button variant="link">Link</Button>\n}' }]}>
            <Button variant="link">Link</Button>
          </ComponentDemo>
        </div>

        {/* Icon Example */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Icon</h3>
          <ComponentDemo tabs={[{ name: "React", language: "tsx", code: 'import { Button } from "@/components/easeui/Button"\nimport { ChevronRight } from "lucide-react"\n\nexport function ButtonIcon() {\n  return (\n    <Button variant="outline" size="icon">\n      <ChevronRight size={24} />\n    </Button>\n  )\n}' }]}>
            <Button variant="outline" size="icon">
              <ChevronRight size={24} />
            </Button>
          </ComponentDemo>
        </div>

        {/* Sizes Example */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Sizes</h3>
          <ComponentDemo tabs={[{ name: "React", language: "tsx", code: 'import { Button } from "@/components/easeui/Button"\nimport { ArrowUpRight } from "lucide-react"\n\nexport function ButtonSize() {\n  return (\n    <div className="flex flex-col items-start gap-4 sm:flex-row">\n      <div className="flex items-start gap-2">\n        <Button size="sm" variant="outline">Small</Button>\n        <Button size="icon" variant="outline"><ArrowUpRight /></Button>\n      </div>\n      <div className="flex items-start gap-2">\n        <Button variant="outline">Default</Button>\n        <Button size="icon" variant="outline"><ArrowUpRight /></Button>\n      </div>\n      <div className="flex items-start gap-2">\n        <Button size="lg" variant="outline">Large</Button>\n        <Button size="icon" variant="outline"><ArrowUpRight /></Button>\n      </div>\n      <div className="flex items-start gap-2">\n        <Button size="xl" variant="outline">Extra Large</Button>\n        <Button size="icon" variant="outline"><ArrowUpRight /></Button>\n      </div>\n    </div>\n  )\n}' }]}>
            <div className="flex flex-col items-center gap-4 sm:flex-row flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline">Small</Button>
                <Button size="icon" variant="outline"><ArrowUpRight /></Button>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline">Default</Button>
                <Button size="icon" variant="outline"><ArrowUpRight /></Button>
              </div>
              <div className="flex items-center gap-2">
                <Button size="lg" variant="outline">Large</Button>
                <Button size="icon" variant="outline"><ArrowUpRight /></Button>
              </div>
              <div className="flex items-center gap-2">
                <Button size="xl" variant="outline">Extra Large</Button>
                <Button size="icon" variant="outline"><ArrowUpRight /></Button>
              </div>
            </div>
          </ComponentDemo>
        </div>

        {/* With Icon Example */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">With Icon</h3>
          <ComponentDemo tabs={[{ name: "React", language: "tsx", code: 'import { Button } from "@/components/easeui/Button"\nimport { GitBranch, GitFork } from "lucide-react"\n\nexport function ButtonWithIcon() {\n  return (\n    <div className="flex gap-2">\n      <Button variant="outline">\n        <GitBranch /> New Branch\n      </Button>\n      <Button variant="outline">\n        Fork <GitFork />\n      </Button>\n    </div>\n  )\n}' }]}>
            <div className="flex gap-4 justify-center">
              <Button variant="outline">
                <GitBranch /> New Branch
              </Button>
              <Button variant="outline">
                Fork <GitFork />
              </Button>
            </div>
          </ComponentDemo>
        </div>

        {/* Rounded Example */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Rounded</h3>
          <ComponentDemo tabs={[{ name: "React", language: "tsx", code: 'import { Button } from "@/components/easeui/Button"\nimport { ArrowUp } from "lucide-react"\n\nexport function ButtonRounded() {\n  return (\n    <div className="flex gap-2">\n      <Button className="rounded-full">Get Started</Button>\n      <Button variant="outline" size="icon" className="rounded-full">\n        <ArrowUp />\n      </Button>\n    </div>\n  )\n}' }]}>
            <div className="flex gap-4 justify-center">
              <Button className="rounded-full">Get Started</Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <ArrowUp />
              </Button>
            </div>
          </ComponentDemo>
        </div>
      </section>

      {/* Base UI Button Examples Section */}
      <section className="page-section space-y-12 opacity-0 pt-12 border-t-4 border-black dark:border-white">
        <div>
          <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-2">Base UI Button</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-bold">Standard Base UI / Shadcn style variants using the separate BaseButton component.</p>
        </div>
        
        {/* Loading Example */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Loading State</h3>
          <ComponentDemo tabs={[{ name: "React", language: "tsx", code: 'import { BaseButton } from "@/components/easeui/Button"\nimport { Spinner } from "@/components/easeui/Button"\n\nexport function ButtonLoading() {\n  return (\n    <div className="flex gap-2">\n      <BaseButton variant="outline" disabled>\n        <Spinner data-icon="inline-start" />\n        Generating\n      </BaseButton>\n      <BaseButton variant="secondary" disabled>\n        Downloading\n        <Spinner data-icon="inline-start" />\n      </BaseButton>\n    </div>\n  )\n}' }]}>
            <ButtonLoading />
          </ComponentDemo>
        </div>

        {/* Icon Example */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Icon Example</h3>
          <ComponentDemo tabs={[{ name: "React", language: "tsx", code: 'import { ChevronLeft, ChevronRight } from "lucide-react"\nimport { BaseButton } from "@/components/easeui/Button"\n\nexport function ButtonIcon() {\n  return (\n    <div className="flex gap-4 justify-center">\n      <BaseButton variant="outline" size="icon">\n        <ChevronLeft />\n      </BaseButton>\n      <BaseButton variant="outline" size="icon">\n        <ChevronRight />\n      </BaseButton>\n    </div>\n  )\n}' }]}>
            <BaseButtonIcon />
          </ComponentDemo>
        </div>

        {/* Button Group Example */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Button Group</h3>
          <ComponentDemo tabs={[{ name: "React", language: "tsx", code: 'import { BaseButton } from "@/components/easeui/Button"\nimport { ButtonGroup } from "@/components/easeui/Button"\nimport { DropdownMenu, ... } from "@/components/easeui/Button"\n\nexport function ButtonGroupDemo() {\n  // (Implementation in source code)\n}' }]}>
             <ButtonGroupDemo />
          </ComponentDemo>
        </div>

        {/* As Link Example */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">As Link</h3>
          <ComponentDemo tabs={[{ name: "React", language: "tsx", code: 'import { baseButtonVariants } from "@/components/easeui/Button"\n\nexport function ButtonRender() {\n  return (\n    <a\n      href="#"\n      className={baseButtonVariants({ variant: "secondary", size: "sm" })}\n    >\n      Login\n    </a>\n  )\n}' }]}>
            <div className="flex justify-center">
              <ButtonRender />
            </div>
          </ComponentDemo>
        </div>

        {/* RTL Example */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">RTL Support</h3>
          <ComponentDemo tabs={[{ name: "React", language: "tsx", code: 'import { BaseButton } from "@/components/easeui/Button"\nimport { useTranslation } from "@/components/language-selector"\n\nexport function ButtonRtl() {\n  // (Implementation in source code)\n}' }]}>
             <ButtonRtl />
          </ComponentDemo>
        </div>
      </section>

      {/* More Custom Examples Section */}
      <section className="page-section space-y-12 opacity-0 pt-12 border-t-4 border-black dark:border-white">
        <div>
          <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-2">More Custom Examples</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-bold">Various custom standalone button examples with unique animations and styles.</p>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Easy Access Buttons</h3>
          <ComponentDemo tabs={easyAccessButtonsCode}>
             <EasyAccessButtons />
          </ComponentDemo>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Communication Buttons</h3>
          <ComponentDemo tabs={communicationButtonsCode}>
             <CommunicationButtons />
          </ComponentDemo>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Bordered Buttons</h3>
          <ComponentDemo tabs={borderedButtonsCode}>
             <BorderedButtons />
          </ComponentDemo>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Bottom Border Animation</h3>
          <ComponentDemo tabs={buttonBottomBorderAnimationCode}>
             <ButtonBottomBorderAnimation />
          </ComponentDemo>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Text Rolling Animation</h3>
          <ComponentDemo tabs={textRollingAnimationButtonCode}>
             <TextRollingAnimationButton />
          </ComponentDemo>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Circle Border Animation</h3>
          <ComponentDemo tabs={buttonCircleBorderAnimationCode}>
             <ButtonCircleBorderAnimation />
          </ComponentDemo>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Dual Border Animation</h3>
          <ComponentDemo tabs={buttonDualBorderAnimationCode}>
             <ButtonDualBorderAnimation />
          </ComponentDemo>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Download Buttons</h3>
          <ComponentDemo tabs={downloadButtonCode}>
             <DownloadButton />
          </ComponentDemo>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Premium Buttons</h3>
          <ComponentDemo tabs={premiumButtonsCode}>
             <PremiumButtons />
          </ComponentDemo>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Glass Animation</h3>
          <ComponentDemo tabs={buttonGlassAnimationCode}>
             <ButtonGlassAnimation />
          </ComponentDemo>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Quick Action Buttons</h3>
          <ComponentDemo tabs={quickActionButtonCode}>
             <QuickActionButton />
          </ComponentDemo>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Colorful Border Animation</h3>
          <ComponentDemo tabs={buttonColorfulBorderAnimationCode}>
             <ButtonColorfulBorderAnimation />
          </ComponentDemo>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Button Variants</h3>
          <ComponentDemo tabs={buttonVariantsCode}>
             <ButtonVariants />
          </ComponentDemo>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Flat Edge Buttons</h3>
          <ComponentDemo tabs={flatEdgeButtonsCode}>
             <FlatEdgeButtons />
          </ComponentDemo>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Glowing Hover Effect</h3>
          <ComponentDemo tabs={glowingButtonHoverEffectCode}>
             <GlowingButtonHoverEffect />
          </ComponentDemo>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Compact Message Buttons</h3>
          <ComponentDemo tabs={compactMsgButtonsCode}>
             <CompactMsgButtons />
          </ComponentDemo>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Action Buttons</h3>
          <ComponentDemo tabs={actionButtonsCode}>
             <ActionButtons />
          </ComponentDemo>
        </div>
      </section>

      {/* Extra Info Section */}
      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Cursor</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 font-bold leading-relaxed">
          In Neo-Brutalism, interactive elements feel responsive and alive. EaseUI button components use <code className="bg-gray-200 dark:bg-zinc-800 px-1 border border-black dark:border-zinc-600 text-black dark:text-white">cursor: pointer</code> to ensure it behaves exactly how users expect.
        </p>
      </section>

      {/* API Reference */}
      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default ButtonPage;
