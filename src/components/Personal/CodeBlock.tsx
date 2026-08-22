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
  variant?: "default" | "docs";
}

const CodeBlock = ({ code, language = "tsx", tabs, variant = "default" }: CodeBlockProps) => {
  const hasTabs = tabs && tabs.length > 0;
  const initialCode = hasTabs ? tabs[0].code : (code || "");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeCode = hasTabs ? tabs[activeTabIndex].code : initialCode;
  const activeLanguage = hasTabs ? tabs[activeTabIndex].language : language;
  const isDocs = variant === "docs";

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative flex flex-col w-full rounded-xl overflow-hidden ${isDocs ? "border border-zinc-200 bg-zinc-950 shadow-sm mt-4" : "bg-white dark:bg-zinc-800"}`}>
      <div className={`flex items-center justify-between ${isDocs ? "border-b border-zinc-800/50 bg-zinc-900 px-4 py-2.5" : "bg-neo-blue border-b-[4px] border-black dark:border-white px-4 py-3"}`}>
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          {hasTabs ? (
            <div className="flex gap-2">
              {tabs.map((tab, index) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTabIndex(index)}
                  className={`transition-all whitespace-nowrap ${isDocs ? "text-xs font-medium px-3 py-1.5 rounded-md" : "text-sm font-bold font-comic uppercase tracking-wider px-3 py-1 rounded-lg border-2 border-black"} ${
                    activeTabIndex === index
                      ? isDocs ? "bg-zinc-800 text-zinc-100 shadow-sm" : "bg-neo-yellow text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5"
                      : isDocs ? "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50" : "bg-white text-gray-700 hover:bg-gray-100 shadow-none translate-y-0"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          ) : (
            isDocs ? (
              <div className="flex items-center gap-2">
                <Terminal size={14} className="text-zinc-400" />
                <span className="text-xs font-medium lowercase tracking-wide text-zinc-400">{activeLanguage}</span>
              </div>
            ) : (
              <span className="text-sm font-bold font-comic text-black uppercase tracking-wider">{activeLanguage}</span>
            )
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className={`shrink-0 ml-4 transition-colors ${isDocs ? "flex items-center justify-center w-8 h-8 rounded-md text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800" : "flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-lg bg-white text-black border-2 border-black hover:bg-neo-yellow transition-all hover:-translate-y-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"}`}
          aria-label="Copy code"
          title="Copy code"
        >
          {copied ? <Check size={14} className={isDocs ? "text-emerald-400" : "text-neo-green"} /> : <Copy size={14} />}
          {!isDocs && (copied ? "Copied!" : "Copy")}
        </button>
      </div>
      <div className={`overflow-x-auto w-full ${isDocs ? "bg-zinc-950 p-4" : "bg-[#1e1e1e] p-6"}`}>
        <pre className="m-0">
          <code className={`font-mono whitespace-pre ${isDocs ? "text-[13px] leading-relaxed text-zinc-300" : "text-sm leading-loose text-neo-green"}`}>{activeCode}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
