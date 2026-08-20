import re

with open('src/pages/components/CardPage.tsx', 'r', encoding='utf-8') as f:
    page = f.read()

# 1. Imports
if 'import { useState }' not in page:
    page = page.replace('import { useEffect } from "react";', 'import { useEffect, useState } from "react";')
if 'import { Copy' not in page:
    page = page.replace('import gsap from "gsap";', 'import gsap from "gsap";\nimport { Copy, Check, ChevronLeft, ChevronRight } from "lucide-react";\nimport { useNavigate } from "react-router";')

# 2. State & Functions
if 'const navigate = useNavigate();' not in page:
    state_injection = '''  const navigate = useNavigate();
  const [copiedPage, setCopiedPage] = useState(false);

  const copyToClipboard = (text: string, setter: (val: boolean) => void) => {
    navigator.clipboard.writeText(text).then(() => {
      setter(true);
      setTimeout(() => setter(false), 2000);
    });
  };

'''
    page = page.replace('const CardPage = () => {\n  useEffect(() => {', 'const CardPage = () => {\n' + state_injection + '  useEffect(() => {')

# 3. Header replacement
old_header_pattern = r'<header className="page-header.*?<\/header>'
new_header = '''<header className="page-header mb-8 opacity-0 border-b-[4px] border-black dark:border-white pb-8">
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
          
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <button 
              onClick={() => copyToClipboard(reactCodeDark, setCopiedPage)}
              className="neo-box text-sm font-bold bg-white text-black px-4 py-2 flex items-center gap-2 border-2 border-black hover:-translate-y-1 shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition-all"
            >
              {copiedPage ? <Check size={16} className="text-neo-green" /> : <Copy size={16} />} 
              {copiedPage ? "Copied!" : "Copy Page"}
            </button>
            <div className="flex items-center gap-2">
              <button onClick={() => navigate("/components/button")} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => navigate("/components/badge")} className="neo-box bg-white text-black p-2 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>'''

page = re.sub(old_header_pattern, new_header, page, flags=re.DOTALL)

with open('src/pages/components/CardPage.tsx', 'w', encoding='utf-8') as f:
    f.write(page)
print('Updated CardPage.tsx')
