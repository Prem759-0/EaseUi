import os
import re

card_page_path = r'd:\Downloads\linkden post\task\Easeui-project\src\pages\components\CardPage.tsx'

with open(card_page_path, 'r', encoding='utf-8') as f:
    original = f.read()

# We need to extract the tabsDark, tabsOutline, tabsLight arrays from the original
# And we need to extract the propsData array.
# And we need to extract the huge block of new ComponentDemos (from "Login to your account" to "Gradient Glow")

# Extract new ComponentDemos
# In the original, they are inside:
#           <div className="space-y-4">
#             <ComponentDemo
#               title="Login to your account"

start_new_demos = original.find('<ComponentDemo\\n              title="Login to your account"')
if start_new_demos == -1:
    start_new_demos = original.find('<ComponentDemo\\n              title=\\"Login to your account\\"')

# Find the end of the new demos. The last one is Gradient Glow.
end_gradient = original.find('title="Gradient Glow"')
if end_gradient == -1:
    end_gradient = original.find('title=\\"Gradient Glow\\"')
end_new_demos = original.find('</ComponentDemo>', end_gradient) + len('</ComponentDemo>')

new_demos_code = original[start_new_demos:end_new_demos]
# We need to wrap each new ComponentDemo in <div className="space-y-4">
# Wait, they are currently NOT wrapped individually in my previous script? 
# Ah, looking at the previous script, they were all inside one big <div className="space-y-4">!
# But in ButtonPage.tsx, each ComponentDemo is wrapped in:
#         <div className="space-y-4">
#           <h3 className="text-2xl font-bold text-black dark:text-white">Example Name</h3>
#           <ComponentDemo ...>
#             ...
#           </ComponentDemo>
#         </div>
# 
# Wait, the new ComponentDemos ALREADY have the 	itle and description prop on them:
# <ComponentDemo title="Login to your account" description="...">
# ButtonPage's ComponentDemo doesn't have 	itle and description props, wait, does it?
# In ButtonPage.tsx:
#           <ComponentDemo tabs={[{ name: "React", language: "tsx", code: '...' }]}>
#             <Button variant="primary">Primary</Button>
#           </ComponentDemo>
# So it doesn't use 	itle prop. But CardPage.tsx DOES use the title prop? 
# Yes, because in CustomCardCodes it was generated that way.

# Let's rebuild the entire file carefully.

new_content = '''import { useEffect, useState } from "react";
import gsap from "gsap";
import { Card } from "@/components/Card/Card";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";
import { Copy, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components";

import { cardsComponents } from "@/components/CustomCardCodes";
import * as CardDemos from "@/components/CardDemos";

const CardPage = () => {
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

  const reactCodeDark = import { Card } from "@/components/Card/Card";
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
};

  const htmlCodeDark = <!-- Tailwind CSS HTML equivalent -->
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
</div>;

  const tabsDark = [
    { name: "React", language: "tsx", code: reactCodeDark },
    { name: "HTML", language: "html", code: htmlCodeDark }
  ];

  const reactCodeOutline = import { Card } from "@/components/Card/Card";
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
};

  const htmlCodeOutline = <!-- Tailwind CSS HTML equivalent -->
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
</div>;

  const tabsOutline = [
    { name: "React", language: "tsx", code: reactCodeOutline },
    { name: "HTML", language: "html", code: htmlCodeOutline }
  ];

  const reactCodeLight = import { Card } from "@/components/Card/Card";
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
};

  const htmlCodeLight = <!-- Tailwind CSS HTML equivalent -->
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
</div>;

  const tabsLight = [
    { name: "React", language: "tsx", code: reactCodeLight },
    { name: "HTML", language: "html", code: htmlCodeLight }
  ];

  const propsData = [
    {
      prop: "variant",
      type: '"light" | "dark" | "outline"',
      default: '"light"',
      description: "Defines the visual style of the card background and border.",
    },
    {
      prop: "hoverAnimation",
      type: '"none" | "jiggle" | "scale" | "shadowPulse" | "float3D" | "wobbleFollow"',
      default: '"none"',
      description: "Specifies the GSAP-powered hover animation for interactive motion effects.",
    },
    {
      prop: "animate",
      type: "boolean",
      default: "false",
      description: "When true, the card will apply an entrance animation defined by \nimationType\.",
    },
    {
      prop: "animationType",
      type: '"fadeIn" | "slideUp" | "zoomIn"',
      default: '"fadeIn"',
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
      type: '"sm" | "md" | "lg"',
      default: '"md"',
      description: "Controls the internal padding and text size of the card content.",
    },
    {
      prop: "footer",
      type: "React.ReactNode",
      default: "-",
      description: "Optional footer content (e.g., buttons or links) rendered at the bottom of the card.",
    },
  ];

  const copyToClipboard = (text: string, setter: (val: boolean) => void) => {
    navigator.clipboard.writeText(text).then(() => {
      setter(true);
      setTimeout(() => setter(false), 2000);
    });
  };

  const allExamplesCode = import { Card } from "@/components/ui/card"

export function AllCardExamples() {
  return (
    <div className="flex flex-col gap-4">
      <Card variant="light" title="Light Card" description="This is a light card." />
      <Card variant="dark" title="Dark Card" description="This is a dark card." />
      <Card variant="outline" title="Outline Card" description="This is an outline card." />
    </div>
  )
};

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <header className="page-header mb-8 opacity-0">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div className="space-y-4">
            <h1 className="text-5xl font-comic font-black uppercase tracking-widest text-black dark:text-white inline-block relative">
              Card
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-neo-green"></span>
            </h1>
            <p className="text-xl font-bold text-gray-700 dark:text-gray-300 border-l-[4px] border-neo-red pl-4 max-w-xl">
              The Card component is a container for grouping content with a bold border and padding.
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
              <button onClick={() => navigate("/components/button")} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => navigate("/components/carousel")} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Component Preview */}
      <section className="page-section opacity-0">
        <ComponentDemo tabs={tabsDark}>
          <div className="w-full max-w-sm mx-auto">
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
          </div>
        </ComponentDemo>
      </section>

      {/* Installation Section */}
      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Installation</h2>
        
        <div className="flex gap-4 font-bold border-b-[3px] border-black dark:border-zinc-700 mb-4 text-sm">
          <button 
            onClick={() => setInstallTab("Command")} 
            className={\\ pb-2 px-1\}
          >
            Command
          </button>
          <button 
            onClick={() => setInstallTab("Manual")} 
            className={\\ pb-2 px-1\}
          >
            Manual
          </button>
        </div>

        {installTab === "Command" ? (
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center relative overflow-hidden group shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex gap-2">
                 <button className="bg-neo-green text-black px-2 py-0.5 rounded font-black border-2 border-black text-xs">npx</button>
              </div>
              <span className="text-gray-300 mt-2 sm:mt-0">
                <span className="text-neo-green">npx</span> @prem_gaikwad/easeui add card
              </span>
            </div>
            <button 
              onClick={() => copyToClipboard("npx @prem_gaikwad/easeui add card", setCopiedInstall)}
              className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4 self-start sm:self-center" 
              title="Copy"
            >
               {copiedInstall ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
            </button>
          </div>
        ) : (
          <div className="p-4 border-[3px] border-black bg-white dark:bg-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black dark:text-white font-bold">
            <p>1. Ensure you have installed EaseUI core via <code className="bg-neo-green text-black px-1 border border-black">npx @prem_gaikwad/easeui init</code></p>
            <p className="mt-2">2. Copy the card component code from the repository and paste it into <code className="bg-neo-blue text-black px-1 border border-black">components/ui/card.tsx</code></p>
          </div>
        )}
      </section>

      {/* Usage Section */}
      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Usage</h2>
        
        <div className="space-y-4">
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
             <span className="overflow-x-auto">
               <span className="text-neo-pink">import</span> {'{'} Card {'}'} <span className="text-neo-pink">from</span> <span className="text-neo-yellow">"@/components/ui/card"</span>
             </span>
             <button 
               onClick={() => copyToClipboard('import { Card } from "@/components/ui/card"', setCopiedImport)}
               className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4" 
               title="Copy"
             >
               {copiedImport ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
             </button>
          </div>
          
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
             <span className="overflow-x-auto">
               <span className="text-gray-400">{'<'}</span><span className="text-neo-blue">Card</span> <span className="text-neo-green">title</span>=<span className="text-neo-yellow">"Hello"</span> <span className="text-neo-green">description</span>=<span className="text-neo-yellow">"World"</span> <span className="text-gray-400">{'>'}</span><span className="text-gray-400">{'</'}</span><span className="text-neo-blue">Card</span><span className="text-gray-400">{'>'}</span>
             </span>
             <button 
               onClick={() => copyToClipboard('<Card title="Hello" description="World" />', setCopiedUsage)}
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
          <p className="text-lg text-gray-700 dark:text-gray-300 font-bold">Various configurations of the Card component.</p>
        </div>
        
        {/* Dark Variant */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Dark Variant</h3>
          <ComponentDemo tabs={tabsDark}>
            <div className="w-full max-w-sm mx-auto">
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
            </div>
          </ComponentDemo>
        </div>

        {/* Outline Variant */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Outline Styled Card</h3>
          <ComponentDemo tabs={tabsOutline}>
            <div className="w-full max-w-sm mx-auto">
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
            </div>
          </ComponentDemo>
        </div>

        {/* Light Variant */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">Light Animated Card</h3>
          <ComponentDemo tabs={tabsLight}>
            <div className="w-full max-w-sm mx-auto">
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
            </div>
          </ComponentDemo>
        </div>
      </section>

      {/* More Custom Examples Section */}
      <section className="page-section space-y-12 opacity-0 pt-12 border-t-4 border-black dark:border-white">
        <div>
          <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-2">More Custom Examples</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-bold">Various custom standalone card examples with unique styles.</p>
        </div>
        
        <div className="space-y-12">
'''

# Wait, instead of just appending new_demos_code, I need to wrap each of them in:
#         <div className="space-y-4">
#           <h3 className="text-2xl font-bold text-black dark:text-white">{title}</h3>
#           <ComponentDemo ... />
#         </div>

# We can parse the ComponentDemos from new_demos_code using regex.
import re

demos = re.split(r'(<ComponentDemo)', new_demos_code)
# This gives us chunks.
formatted_demos = ""
for i in range(1, len(demos), 2):
    demo_tag = demos[i]
    demo_content = demos[i+1]
    full_demo = demo_tag + demo_content
    
    # We must find the closing </ComponentDemo> in full_demo to make sure we don't accidentally grab garbage
    end_tag_idx = full_demo.find('</ComponentDemo>')
    if end_tag_idx != -1:
        full_demo = full_demo[:end_tag_idx + len('</ComponentDemo>')]
    
    # extract title
    title_match = re.search(r'title="([^"]+)"', full_demo)
    if not title_match:
        title_match = re.search(r'title=\{\\?"([^"]+)\\?"\}', full_demo)
    
    if title_match:
        title = title_match.group(1)
        # We need to remove title and description props from the ComponentDemo if it's there
        # Wait, if we keep them it's fine, but in ButtonPage they use a wrapping <h3>. Let's just keep the title prop on ComponentDemo if it's already there (it might look double, but let's check ButtonPage).
        # Actually ButtonPage DOES NOT use the 	itle prop on ComponentDemo. It uses the <h3> outside it.
        # Let's remove the 	itle and description props from the ComponentDemo string.
        clean_demo = re.sub(r'\s*title="[^"]+"', '', full_demo)
        clean_demo = re.sub(r'\s*description="[^"]+"', '', clean_demo)
        
        formatted_demos += f'''
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black dark:text-white">{title}</h3>
{clean_demo}
        </div>
'''
    else:
        # fallback
        formatted_demos += full_demo

new_content += formatted_demos
new_content += '''
        </div>
      </section>

      {/* API Reference */}
      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default CardPage;
'''

with open(card_page_path, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("SUCCESS")
