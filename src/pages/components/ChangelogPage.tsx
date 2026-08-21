import { ArrowLeft, Rocket } from "lucide-react";
import { useNavigate } from "react-router";

const ChangelogPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-10 pb-20 animate-fadeIn max-w-3xl">
      {/* Header */}
      <div>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4 text-black dark:text-white drop-shadow-[2px_2px_0_rgba(0,0,0,0.1)] dark:drop-shadow-[2px_2px_0_rgba(255,255,255,0.2)]">
          Changelog
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 font-bold mb-6">
          Latest updates and announcements for EaseUI.
        </p>
      </div>

      {/* Release List */}
      <div className="flex flex-col gap-8">
        {/* V1 Release */}
        <div className="relative pl-8 border-l-4 border-black dark:border-white">
          <div className="absolute -left-[14px] top-0 w-6 h-6 bg-neo-yellow border-[3px] border-black rounded-full" />
          
          <h2 className="text-2xl font-black uppercase mb-2 text-black dark:text-white">
            August 2026 - v1.0 Initial Release
          </h2>
          
          <div className="neo-box bg-white dark:bg-zinc-800 p-6 border-[3px] border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mt-4">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-black dark:text-white">
              <Rocket className="text-neo-red" /> The Genesis
            </h3>
            <p className="text-gray-700 dark:text-gray-300 font-medium mb-4">
              EaseUI is officially live! We've launched the first version of our aggressively styled, Neo-Brutalist component library.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 font-medium space-y-2">
              <li>Core Architecture: Open Code and CLI distribution pattern.</li>
              <li>Elements: Button, Card, Input.</li>
              <li>Overlays: Modal, Tooltip.</li>
              <li>Navigation: Navbar, Carousel.</li>
              <li>Global Command Menu: Fully functional Shadcn-style search palette.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="pt-8 flex justify-between items-center border-t-4 border-black dark:border-white">
        <button
          onClick={() => navigate("/components/cli")}
          className="neo-box bg-white dark:bg-zinc-800 text-black dark:text-white px-6 py-3 border-[3px] border-black flex items-center gap-3 font-black uppercase tracking-wider shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform group cursor-pointer"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Previous
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default ChangelogPage;
