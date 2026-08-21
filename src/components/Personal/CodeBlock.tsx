import { useState } from "react";
import { Copy, Check } from "lucide-react";

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
  variant?: "default" | "light";
}

const CodeBlock = ({ code, language = "tsx", tabs, variant = "default" }: CodeBlockProps) => {
  const hasTabs = tabs && tabs.length > 0;
  const initialCode = hasTabs ? tabs[0].code : (code || "");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const activeCode = hasTabs ? tabs[activeTabIndex].code : initialCode;
  const activeLanguage = hasTabs ? tabs[activeTabIndex].language : language;
  const isLight = variant === "light";

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative flex flex-col w-full rounded-xl overflow-hidden ${isLight ? "border-[3px] border-black bg-white shadow-[4px_4px_0_0_rgba(0,0,0,1)]" : "bg-white dark:bg-zinc-800"}`}>
      <div className={`flex items-center justify-between border-b-[4px] border-black px-4 py-3 ${isLight ? "bg-black" : "bg-neo-blue dark:border-white"}`}>
        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          {hasTabs ? (
            <div className="flex gap-2">
              {tabs.map((tab, index) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTabIndex(index)}
                  className={`text-sm font-bold font-comic uppercase tracking-wider px-3 py-1 rounded-lg border-2 border-black transition-all whitespace-nowrap ${
                    activeTabIndex === index 
                      ? "bg-neo-yellow text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -translate-y-0.5" 
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow-none translate-y-0"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          ) : (
            <span className={`text-sm font-bold font-comic uppercase tracking-wider ${isLight ? "text-white" : "text-black"}`}>{activeLanguage}</span>
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className={`flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-lg bg-white text-black border-2 border-black transition-all hover:-translate-y-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] shrink-0 ml-4 ${isLight ? "hover:bg-gray-200" : "hover:bg-neo-yellow"}`}
        >
          {copied ? <Check size={14} className="text-neo-green" /> : <Copy size={14} />}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className={`p-6 overflow-x-auto w-full ${isLight ? "bg-white" : "bg-[#1e1e1e]"}`}>
        <pre className="m-0">
          <code className={`text-sm font-mono leading-loose whitespace-pre ${isLight ? "text-black" : "text-neo-green"}`}>{activeCode}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
