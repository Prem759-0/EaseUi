import re

with open('src/pages/components/CardPage.tsx', 'r', encoding='utf-8') as f:
    page = f.read()

# Make sure state for Installation and Usage tabs exist
if 'const [installTab, setInstallTab] = useState("Command");' not in page:
    state_injection = '''  const [installTab, setInstallTab] = useState("Command");
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [copiedImport, setCopiedImport] = useState(false);
  const [copiedUsage, setCopiedUsage] = useState(false);
'''
    page = page.replace('const [copiedPage, setCopiedPage] = useState(false);', 'const [copiedPage, setCopiedPage] = useState(false);\n' + state_injection)

# Add Installation and Usage HTML right before More Card Examples
install_and_usage = '''
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
                <span className="text-neo-yellow">npx</span> @prem_gaikwad/easeui add card
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
            <p>1. Ensure you have installed EaseUI core via <code className="bg-neo-yellow text-black px-1 border border-black">npx @prem_gaikwad/easeui init</code></p>
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
               onClick={() => copyToClipboard('<Card title="Hello" description="World"></Card>', setCopiedUsage)}
               className="text-gray-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 p-2 rounded-lg border border-zinc-600 transition-colors ml-4" 
               title="Copy"
             >
               {copiedUsage ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />}
             </button>
          </div>
        </div>
      </section>

      <section className="page-section space-y-12 opacity-0 pt-12 border-t-4 border-black dark:border-white">
'''
if '{/* Installation Section */}' not in page:
    page = page.replace('<section className="page-section space-y-12 opacity-0 pt-12 border-t-4 border-black dark:border-white">', install_and_usage)

# Fix API reference H2
page = page.replace(
    '<h2 className="text-3xl font-comic font-black uppercase text-black dark:text-white bg-neo-yellow inline-block px-3 py-1 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">API Reference</h2>',
    '<h2 className="text-3xl font-comic font-black text-black dark:text-white mb-6">API Reference</h2>'
)

# Extract and move Dark Variant to top preview
dark_variant_pattern = r'<div className="space-y-4">\s*<h3 className="text-2xl font-bold text-black dark:text-white">Dark Variant</h3>\s*<ComponentDemo tabs=\{tabsDark\}>.*?</ComponentDemo>\s*</div>'
match = re.search(dark_variant_pattern, page, re.DOTALL)
if match and '{/* Component Preview */}' not in page:
    dark_block = match.group(0)
    page = page.replace(dark_block, '')
    
    preview_block = re.search(r'<ComponentDemo tabs=\{tabsDark\}>.*?</ComponentDemo>', dark_block, re.DOTALL).group(0)
    
    main_preview = f'''
      {{/* Component Preview */}}
      <section className="page-section opacity-0">
        <div className="flex justify-center">
          {preview_block}
        </div>
      </section>
'''
    page = page.replace('</header>', '</header>\n' + main_preview)

with open('src/pages/components/CardPage.tsx', 'w', encoding='utf-8') as f:
    f.write(page)
print('Updated CardPage completely')
