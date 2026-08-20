import re
import os

pages = [
    {
        "file": "src/pages/components/InputPage.tsx",
        "name": "Input",
        "desc": "Input component for user forms with standard styling and easy customization.",
        "component_import": 'import { Input } from "@/components/ui/input"',
        "component_tag": '<Input label="Full Name" placeholder="Enter your name" size="md" />',
        "cmd": "input",
        "prev": "tooltip",
        "next": "modal",
        "underline": "bg-neo-pink",
        "border": "border-neo-blue"
    },
    {
        "file": "src/pages/components/ModalPage.tsx",
        "name": "Modal",
        "desc": "A dialog window that overlays the main content with brutalist styling.",
        "component_import": 'import { Modal } from "@/components/ui/modal"',
        "component_tag": '<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}><p>Hello</p></Modal>',
        "cmd": "modal",
        "prev": "input",
        "next": "navbar",
        "underline": "bg-neo-green",
        "border": "border-neo-red"
    },
    {
        "file": "src/pages/components/NavbarPage.tsx",
        "name": "Navbar",
        "desc": "A top navigation bar for your application layout.",
        "component_import": 'import { Navbar } from "@/components/ui/navbar"',
        "component_tag": '<Navbar variant="light" size="default" />',
        "cmd": "navbar",
        "prev": "modal",
        "next": "installation",
        "underline": "bg-neo-yellow",
        "border": "border-neo-pink"
    }
]

for page_info in pages:
    file_path = page_info["file"]
    if not os.path.exists(file_path):
        continue
    
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    # Add missing imports
    if "lucide-react" not in content:
        content = content.replace('import gsap from "gsap";', 'import gsap from "gsap";\nimport { Check, Copy, ChevronLeft, ChevronRight } from "lucide-react";')
    if "react-router" not in content:
        content = content.replace('import gsap from "gsap";', 'import gsap from "gsap";\nimport { useNavigate } from "react-router";')

    # Add states
    if "const [installTab" not in content:
        states = '''  const navigate = useNavigate();
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
'''
        # Inject right after component definition start
        match = re.search(r'const [a-zA-Z]+ = \(\) => {\n', content)
        if match:
            content = content[:match.end()] + states + content[match.end():]
        else:
            match = re.search(r'const [a-zA-Z]+: React\.FC = \(\) => {\n', content)
            if match:
                content = content[:match.end()] + states + content[match.end():]

    # Rewrite Header
    new_header = f'''      <header className="page-header mb-8 opacity-0">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div className="space-y-4">
            <h1 className="text-5xl font-comic font-black uppercase tracking-widest text-black dark:text-white inline-block relative">
              {page_info["name"]}
              <span className="absolute -bottom-2 left-0 w-full h-2 {page_info["underline"]}"></span>
            </h1>
            <p className="text-xl font-bold text-gray-700 dark:text-gray-300 border-l-[4px] {page_info["border"]} pl-4 max-w-xl">
              {page_info["desc"]}
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={{() => copyToClipboard("import {{ " + page_info["name"] + " }} from '@base-ui/react'", setCopiedPage)}}
              className="neo-box text-sm font-bold bg-white text-black px-4 py-2 flex items-center gap-2 border-2 border-black hover:-translate-y-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
            >
              {{copiedPage ? <Check size={{16}} className="text-neo-green" /> : <Copy size={{16}} />}} 
              {{copiedPage ? "Copied!" : "Copy Page"}}
            </button>
            <div className="flex items-center gap-2">
              <button onClick={{() => navigate("/components/{page_info["prev"]}")}} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <ChevronLeft size={{20}} />
              </button>
              <button onClick={{() => navigate("/components/{page_info["next"]}")}} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <ChevronRight size={{20}} />
              </button>
            </div>
          </div>
        </div>
      </header>'''
    
    header_pattern = r'<header.*?</header>'
    content = re.sub(header_pattern, new_header, content, flags=re.DOTALL)

    # Insert Installation and Usage if missing
    if "{/* Installation Section */}" not in content:
        install_usage = f'''
      {{/* Installation Section */}}
      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Installation</h2>
        
        <div className="flex gap-4 font-bold border-b-[3px] border-black dark:border-zinc-700 mb-4 text-sm">
          <button 
            onClick={{() => setInstallTab("Command")}} 
            className={{`${{installTab === "Command" ? "text-black dark:text-white border-b-4 border-black dark:border-white -mb-[3px]" : "text-gray-500 hover:text-black dark:hover:text-white"}} pb-2 px-1`}}
          >
            Command
          </button>
          <button 
            onClick={{() => setInstallTab("Manual")}} 
            className={{`${{installTab === "Manual" ? "text-black dark:text-white border-b-4 border-black dark:border-white -mb-[3px]" : "text-gray-500 hover:text-black dark:hover:text-white"}} pb-2 px-1`}}
          >
            Manual
          </button>
        </div>

        {{installTab === "Command" ? (
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center relative overflow-hidden group shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none transition-all hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex gap-2">
                 <button className="bg-neo-yellow text-black px-2 py-0.5 rounded font-black border-2 border-black text-xs">npx</button>
              </div>
              <span className="text-gray-300 mt-2 sm:mt-0">
                <span className="text-neo-yellow">npx</span> @prem_gaikwad/easeui add {page_info["cmd"]}
              </span>
            </div>
            <button 
              onClick={{() => copyToClipboard("npx @prem_gaikwad/easeui add {page_info["cmd"]}", setCopiedInstall)}}
              className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4 self-start sm:self-center" 
              title="Copy"
            >
               {{copiedInstall ? <Check size={{16}} className="text-neo-green" /> : <Copy size={{16}} />}}
            </button>
          </div>
        ) : (
          <div className="p-4 border-[3px] border-black bg-white dark:bg-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black dark:text-white font-bold">
            <p>1. Install via <code className="bg-neo-yellow text-black px-1 border border-black">npx @prem_gaikwad/easeui init</code></p>
            <p className="mt-2">2. Add the component to your project <code className="bg-neo-blue text-black px-1 border border-black">components/ui/{page_info["cmd"]}.tsx</code></p>
          </div>
        )}}
      </section>

      {{/* Usage Section */}}
      <section className="page-section space-y-6 opacity-0">
        <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">Usage</h2>
        
        <div className="space-y-4">
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
             <span className="overflow-x-auto">
               <span className="text-neo-pink">import</span> {{'{'}} {page_info["name"]} {{'}'}} <span className="text-neo-pink">from</span> <span className="text-neo-yellow">"@/components/ui/{page_info["cmd"]}"</span>
             </span>
             <button 
               onClick={{() => copyToClipboard('{page_info["component_import"]}', setCopiedImport)}}
               className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4" 
               title="Copy"
             >
               {{copiedImport ? <Check size={{16}} className="text-neo-green" /> : <Copy size={{16}} />}}
             </button>
          </div>
          
          <div className="bg-[#0d1117] text-white p-5 font-mono text-sm border-4 border-black dark:border-zinc-700 rounded-xl flex justify-between items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-none hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all">
             <span className="overflow-x-auto text-gray-300">
               {page_info["component_tag"]}
             </span>
             <button 
               onClick={{() => copyToClipboard('{page_info["component_tag"]}', setCopiedUsage)}}
               className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4" 
               title="Copy"
             >
               {{copiedUsage ? <Check size={{16}} className="text-neo-green" /> : <Copy size={{16}} />}}
             </button>
          </div>
        </div>
      </section>

      {{/* More Custom Examples */}}
      <section className="page-section space-y-12 opacity-0 pt-12 border-t-4 border-black dark:border-white">
        <div>
          <h2 className="text-3xl font-comic font-black text-black dark:text-white mb-2">More Custom Examples</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-bold">Various custom standalone {page_info["cmd"]} examples with unique styles.</p>
        </div>
'''
        # find the first section with <h2 class="... bg-neo-something ..."> or "API Reference" or "Usage"
        section_pattern = r'<section[^>]*>(.*?<h2.*?</section>)'
        match = re.search(section_pattern, content, re.DOTALL)
        if match:
            # We want to replace the FIRST section's opening tag area or insert before it.
            # Actually, let's just insert it after the header
            parts = content.split('</header>')
            content = parts[0] + '</header>\n' + install_usage + parts[1]
        else:
             content = content + install_usage

    # Standardize H2s
    # Replace any `<h2 className="text-3xl ... bg-neo-* ...">Title</h2>` with clean ones
    h2_pattern = r'<h2 className="text-3xl font-comic font-black uppercase text-black dark:text-white bg-neo-\w+ inline-block px-3 py-1 border-\[3px\] border-black shadow-\[4px_4px_0px_0px_rgba\(0,0,0,1\)\]">(.*?)</h2>'
    content = re.sub(h2_pattern, r'<h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">\1</h2>', content)

    # Clean out weird giant box borders on `<section>`
    section_pattern_border = r'<section className="page-section space-y-6 opacity-0 bg-white dark:bg-zinc-800 border-\[3px\] border-black dark:border-white shadow-\[4px_4px_0px_0px_rgba\(0,0,0,1\)\] dark:shadow-\[4px_4px_0px_0px_rgba\(255,255,255,1\)\] p-8">'
    content = re.sub(section_pattern_border, r'<section className="page-section space-y-6 opacity-0">', content)
    
    # InputPage specific fix
    content = content.replace('<h3 className="text-2xl font-comic font-bold text-black dark:text-white border-b-[3px] border-black dark:border-white pb-2 inline-block">', '<h3 className="text-2xl font-bold text-black dark:text-white mb-2">')

    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
