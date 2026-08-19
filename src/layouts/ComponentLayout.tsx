import { useState, useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router";
import { Menu, X, Search } from "lucide-react";
import gsap from "gsap";

type Props = {};

const ComponentLayout = ({ }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebarRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sidebarRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, ease: "power2.out", delay: 0.2 }
    );
  }, []);

  const componentGroups = [
    {
      name: "Getting Started",
      items: ["Installation"],
    },
    {
      name: "Elements",
      items: ["Button", "Card", "Input"],
    },
    {
      name: "Overlays",
      items: ["Modal", "Tooltip"],
    },
    {
      name: "Navigation & Data",
      items: ["Navbar", "Carousel"],
    },
    {
      name: "Layout",
      items: ["Layout"],
    }
  ];

  return (
    <div className="flex min-h-[calc(100vh-5rem)] relative">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        ref={sidebarRef}
        className={`
          ${sidebarOpen ? "flex" : "hidden"} md:flex
          w-full md:w-72 p-6 flex-col
          border-r-[3px] border-black dark:border-white bg-gray-50 dark:bg-zinc-900
          fixed md:sticky top-20 left-0 h-[calc(100vh-5rem)] z-30 md:self-start
          overflow-y-auto
        `}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-comic font-black uppercase tracking-widest bg-neo-yellow text-black px-3 py-1 neo-box-no-hover inline-block border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            Index
          </h2>
          <button
            className="md:hidden neo-box p-1 bg-neo-red text-black"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Fake Search UI */}
        <div className="mb-6 neo-box-no-hover bg-white dark:bg-zinc-800 border-[3px] border-black dark:border-white flex items-center px-3 py-2">
          <Search size={18} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent outline-none ml-2 font-bold text-sm text-black dark:text-white"
          />
        </div>

        <div className="flex flex-col gap-8 pb-10">
          {componentGroups.map((group, gIdx) => (
            <div key={gIdx} className="flex flex-col gap-3">
              <h3 className="font-comic font-bold text-lg text-gray-600 dark:text-gray-400 uppercase tracking-widest">
                {group.name}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => {
                  const isActive = location.pathname.includes(`/components/${item.toLowerCase()}`);
                  return (
                    <li
                      onClick={() => {
                        navigate(item.toLowerCase());
                        setSidebarOpen(false);
                      }}
                      key={item}
                      className={`
                        cursor-pointer text-lg font-bold px-4 py-2 transition-all duration-200 ease-in-out
                        neo-box border-[3px]
                        ${isActive
                          ? "bg-neo-blue text-black border-black translate-x-2"
                          : "bg-gray-100 text-black hover:bg-neo-pink hover:translate-x-1 dark:bg-zinc-800 dark:text-white dark:border-white"}
                      `}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </aside>

      <div className="flex-1 w-full max-w-7xl mx-auto overflow-hidden p-6 md:p-10 relative">
        <button
          className="md:hidden mb-6 neo-box p-2 bg-neo-yellow text-black flex items-center justify-center w-12 h-12"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>

        <div className="animate-fadeIn w-full max-w-4xl mx-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ComponentLayout;
