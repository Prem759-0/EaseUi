import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

export type CodeTab = {
  name: string;
  language: string;
  code: string;
};

interface CodeBlockProps {
  code?: string;
  language?: string;
  tabs?: CodeTab[];
  showLineNumbers?: boolean;
}

const CodeBlock = ({ code, language = "tsx", tabs }: CodeBlockProps) => {
  const hasTabs = tabs && tabs.length > 0;
  const initialCode = hasTabs ? tabs[0].code : (code || "");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeCode = hasTabs ? tabs[activeTabIndex].code : initialCode;
  const activeLanguage = hasTabs ? tabs[activeTabIndex].language : language;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative flex flex-col w-full rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 shadow-sm mt-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800/50">
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          {hasTabs ? (
            <div className="flex gap-1">
              {tabs.map((tab, index) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTabIndex(index)}
                  className={`text-xs font-medium px-3 py-1.5 rounded-md transition-all whitespace-nowrap ${
                    activeTabIndex === index 
                      ? "bg-zinc-800 text-zinc-100 shadow-sm" 
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Terminal size={14} className="text-zinc-400" />
              <span className="text-xs font-medium text-zinc-400 lowercase tracking-wide">{activeLanguage}</span>
            </div>
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center w-8 h-8 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition-colors shrink-0 ml-4"
          title="Copy code"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
        </button>
      </div>
      
      {/* Code Area */}
      <div className="p-4 overflow-x-auto w-full bg-zinc-950">
        <pre className="m-0">
          <code className="text-[13px] font-mono text-zinc-300 leading-relaxed whitespace-pre">
            {activeCode}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
