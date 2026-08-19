import { useState, useRef, useEffect } from "react";
import { Code } from "lucide-react";
import CodeBlock, { type CodeTab } from "@/components/Personal/CodeBlock";
import gsap from "gsap";

interface ComponentDemoProps {
  children?: React.ReactNode;
  code?: string;
  tabs?: CodeTab[];
}

const ComponentDemo = ({ children, code, tabs }: ComponentDemoProps) => {
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const codeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!codeContainerRef.current) return;

    if (isCodeVisible) {
      gsap.to(codeContainerRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(codeContainerRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isCodeVisible]);

  return (
    <div className="neo-box-no-hover rounded-xl overflow-hidden bg-white dark:bg-zinc-800 mb-8 mt-4 border-[3px] border-black dark:border-white">
      <div className="flex items-center justify-between px-4 py-2 border-b-[4px] border-black dark:border-white bg-gray-300 dark:bg-zinc-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5 mr-4">
            <div className="w-3.5 h-3.5 rounded-full border-2 border-black bg-neo-red"></div>
            <div className="w-3.5 h-3.5 rounded-full border-2 border-black bg-neo-yellow"></div>
            <div className="w-3.5 h-3.5 rounded-full border-2 border-black bg-neo-green"></div>
          </div>
          <span className="text-sm font-bold font-comic text-black dark:text-white uppercase tracking-wider bg-white dark:bg-zinc-900 border-2 border-black px-3 py-0.5 transform -skew-x-12">
            <span className="block transform skew-x-12">Preview</span>
          </span>
        </div>
        <button
          onClick={() => setIsCodeVisible(!isCodeVisible)}
          className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold rounded-lg bg-white text-black border-2 border-black hover:bg-neo-pink transition-colors neo-box-no-hover hover:-translate-y-0.5 active:translate-y-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
        >
          <Code size={14} />
          {isCodeVisible ? "Hide Code" : "View Code"}
        </button>
      </div>

      <div className="py-24 px-6 flex flex-col items-center justify-center bg-gray-50 dark:bg-zinc-900 relative">
        <div className="comic-bg absolute inset-0 z-0"></div>
        <div className="z-10 w-full flex justify-center">{children}</div>
      </div>

      <div
        ref={codeContainerRef}
        className="border-black dark:border-white overflow-hidden h-0 opacity-0"
        style={{ borderTopWidth: isCodeVisible ? '3px' : '0px' }}
      >
        <CodeBlock code={code} tabs={tabs} />
      </div>
    </div>
  );
};

export default ComponentDemo;
