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
    <div className="relative flex w-full flex-col overflow-hidden rounded-none border-[4px] border-black bg-zinc-950 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.65)]">
      <div className="flex items-center justify-between border-b-[4px] border-black bg-neo-yellow px-4 py-2 dark:border-white">
        <div className="flex min-w-0 items-center gap-3 overflow-x-auto no-scrollbar">
          <div className="hidden gap-1.5 sm:flex">
            <span className="h-3.5 w-3.5 rounded-full border-2 border-black bg-neo-red" />
            <span className="h-3.5 w-3.5 rounded-full border-2 border-black bg-neo-blue" />
            <span className="h-3.5 w-3.5 rounded-full border-2 border-black bg-neo-green" />
          </div>
          {hasTabs ? (
            <div className="flex gap-2">
              {tabs.map((tab, index) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveTabIndex(index)}
                  className={`whitespace-nowrap border-2 border-black px-3 py-1 text-xs font-black uppercase tracking-wide text-black transition-transform hover:-translate-y-0.5 ${
                    activeTabIndex === index
                      ? "bg-neo-pink shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                      : "bg-white hover:bg-neo-blue"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-2 border-2 border-black bg-white px-3 py-1 text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Terminal size={14} />
              <span className="text-xs font-black uppercase tracking-wide">{activeLanguage}</span>
            </div>
          )}
        </div>
        <button
          onClick={copyToClipboard}
          className="ml-4 flex h-9 w-9 shrink-0 items-center justify-center border-2 border-black bg-white text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 hover:bg-neo-green active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          title="Copy code"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>

      <div className="w-full overflow-x-auto bg-zinc-950 p-4">
        <pre className="m-0">
          <code className="whitespace-pre font-mono text-[13px] leading-relaxed text-zinc-100">
            {activeCode}
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
