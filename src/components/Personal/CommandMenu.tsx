import React, { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useNavigate } from "react-router";
import { Search, FileText, Component, Box, AppWindow, Square, ArrowRight, View, PanelsTopLeft, CreditCard, Paintbrush, Terminal, Rocket } from "lucide-react";
import { componentGroups } from "@/config/docs";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    
    const handleOpenSearch = () => setOpen(true);
    window.addEventListener("open-search", handleOpenSearch);
    
    return () => {
      document.removeEventListener("keydown", down);
      window.removeEventListener("open-search", handleOpenSearch);
    };
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  const getIcon = (itemName: string) => {
    switch (itemName.toLowerCase()) {
      case 'about': return <FileText size={22} />;
      case 'introduction': return <FileText size={22} />;
      case 'installation': return <Box size={22} />;
      case 'theming': return <Paintbrush size={22} />;
      case 'cli': return <Terminal size={22} />;
      case 'changelog': return <Rocket size={22} />;
      case 'button': return <Square size={22} />;
      case 'card': return <CreditCard size={22} />;
      case 'modal': return <AppWindow size={22} />;
      case 'input': return <View size={22} />;
      case 'navbar': return <PanelsTopLeft size={22} />;
      case 'tooltip': return <Component size={22} />;
      case 'carousel': return <ArrowRight size={22} />;
      default: return <Component size={22} />;
    }
  };

  return (
    <>
      <Command.Dialog 
        open={open} 
        onOpenChange={setOpen}
        label="Global Command Menu"
        className="fixed inset-0 z-[200] flex items-start justify-center pt-[10vh] sm:pt-[15vh]"
      >
        {/* Overlay with a subtle dot pattern for a premium brutalist feel */}
        <div 
          className="fixed inset-0 bg-white/40 dark:bg-black/60 backdrop-blur-[4px] -z-10"
          style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
          onClick={() => setOpen(false)}
        />
        
        {/* Main Modal Container */}
        <div className="w-full max-w-2xl bg-white dark:bg-zinc-900 border-[4px] border-black overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] rounded-xl flex flex-col animate-in fade-in slide-in-from-top-4 zoom-in-[0.98] duration-200 relative mx-4">
          
          {/* Brutalist Window Header */}
          <div className="h-10 bg-neo-yellow border-b-[4px] border-black flex items-center px-4 gap-2 shrink-0">
            <div className="w-3.5 h-3.5 rounded-full bg-neo-red border-2 border-black" />
            <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-black" />
            <div className="w-3.5 h-3.5 rounded-full bg-neo-green border-2 border-black" />
            <span className="ml-auto font-comic font-black text-xs uppercase tracking-widest text-black">
              Search
            </span>
          </div>

          {/* Search Input Area */}
          <div className="flex items-center border-b-[4px] border-black px-5 py-5 bg-white dark:bg-zinc-800">
            <Search size={28} className="text-black dark:text-white mr-4 shrink-0" />
            <Command.Input 
              placeholder="What do you need?" 
              className="flex-1 bg-transparent text-2xl font-black uppercase tracking-wider outline-none placeholder:text-gray-300 dark:placeholder:text-zinc-600 dark:text-white"
            />
            <kbd className="hidden sm:inline-flex ml-auto pointer-events-none h-7 select-none items-center gap-1 rounded-md border-[3px] border-black bg-gray-100 dark:bg-zinc-700 px-2 font-mono text-[11px] font-black text-black dark:text-white">
              ESC
            </kbd>
          </div>
          
          {/* Results List */}
          <Command.List className="max-h-[50vh] overflow-y-auto p-4 font-bold text-lg bg-gray-50 dark:bg-zinc-900 custom-scrollbar">
            <Command.Empty className="py-16 text-center font-black text-xl text-gray-400 dark:text-zinc-600 uppercase tracking-widest flex flex-col items-center gap-4">
              <Search size={48} className="opacity-20" />
              Nothing found.
            </Command.Empty>
            <Command.Group heading="General" className="mb-4">
              <Command.Item 
                onSelect={() => runCommand(() => navigate('/about'))}
                className="flex items-center gap-4 px-4 py-3.5 cursor-pointer border-[3px] border-transparent rounded-lg data-[selected=true]:border-black data-[selected=true]:bg-neo-blue data-[selected=true]:text-black transition-all mb-2 shadow-none data-[selected=true]:shadow-[4px_4px_0_0_rgba(0,0,0,1)] data-[selected=true]:-translate-y-0.5"
              >
                <FileText size={22} />
                <span className="uppercase tracking-wider mt-0.5">About</span>
              </Command.Item>
            </Command.Group>
            {componentGroups.map((group) => (
              <Command.Group key={group.name} heading={group.name} className="mb-4">
                {group.items.map((item) => (
                  <Command.Item 
                    key={item}
                    onSelect={() => runCommand(() => navigate(`/components/${item.toLowerCase()}`))}
                    className="flex items-center gap-4 px-4 py-3.5 cursor-pointer border-[3px] border-transparent rounded-lg data-[selected=true]:border-black data-[selected=true]:bg-neo-pink data-[selected=true]:text-black transition-all mb-2 shadow-none data-[selected=true]:shadow-[4px_4px_0_0_rgba(0,0,0,1)] data-[selected=true]:-translate-y-0.5"
                  >
                    {getIcon(item)}
                    <span className="uppercase tracking-wider mt-0.5">{item}</span>
                  </Command.Item>
                ))}
              </Command.Group>
            ))}
          </Command.List>
        </div>
        
        <style dangerouslySetInnerHTML={{__html: `
          [cmdk-group-heading] {
            padding: 8px 16px 12px;
            color: #9ca3af;
            font-size: 14px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 0.15em;
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #000;
            border: 3px solid #f9fafb;
            border-radius: 10px;
          }
          .dark .custom-scrollbar::-webkit-scrollbar-thumb {
            border-color: #18181b;
            background-color: #52525b;
          }
        `}} />
      </Command.Dialog>
    </>
  );
}
