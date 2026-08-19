import { toggleTheme } from "@/features/ThemeSlice";
import { Moon, Search, Sun, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { mode } = useSelector(
    (state: { theme: { mode: string } }) => state.theme
  );

  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <nav ref={navRef} className="h-20 w-full flex items-center justify-between px-4 md:px-10 bg-white dark:bg-zinc-900 border-b-[3px] border-black dark:border-white z-50 sticky top-0 shadow-[0_2px_0_0_rgba(0,0,0,1)]">
        <div className="flex items-center gap-6 md:gap-10">
          <h1
            onClick={() => navigate("/")}
            className="font-comic font-bold text-2xl md:text-4xl cursor-pointer hover:-translate-y-1 transition-transform"
          >
            EaseUi<span className="text-neo-pink">.</span>
          </h1>

          <div className="hidden md:flex items-center bg-white dark:bg-zinc-800 px-3 py-2 neo-box">
            <Search size={20} className="text-black dark:text-white" />
            <input
              type="text"
              placeholder="Search components"
              className="ml-2 bg-transparent outline-none text-base font-bold placeholder-gray-500 dark:text-white w-full"
            />
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-8 font-bold text-lg">
          <li
            onClick={() => navigate("/components/button")}
            className="cursor-pointer hover:text-neo-blue transition-colors hover:-translate-y-1 relative group"
          >
            Components
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-neo-blue transition-all group-hover:w-full"></span>
          </li>
          <li
            onClick={() => navigate("/about")}
            className="cursor-pointer hover:text-neo-pink transition-colors hover:-translate-y-1 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-neo-pink transition-all group-hover:w-full"></span>
          </li>
          <li className="cursor-pointer hover:text-neo-green transition-colors hover:-translate-y-1 relative group">
            Templates
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-neo-green transition-all group-hover:w-full"></span>
          </li>
          
          <li className="ml-4 flex items-center gap-4">
            <a 
              href="https://github.com/Prem759-0/EaseUi.git" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 neo-box bg-white dark:bg-zinc-800 px-3 py-1.5 hover:bg-neo-pink dark:hover:bg-neo-pink transition-colors text-black dark:text-white dark:hover:text-black group"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              Star 
              <span className="bg-neo-yellow text-black px-1.5 py-0.5 text-sm font-black border-l-2 border-black -my-1 -mr-2 ml-1">
                1.2k
              </span>
            </a>

            <button
              className="cursor-pointer p-2 rounded-full neo-box bg-neo-yellow hover:bg-neo-blue transition-colors flex items-center justify-center text-black"
              onClick={() => dispatch(toggleTheme())}
            >
              {mode === "dark" ? <Sun size={22} /> : <Moon size={22} />}
            </button>
          </li>
        </ul>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            className="cursor-pointer p-2 rounded-full neo-box bg-neo-yellow text-black"
            onClick={() => dispatch(toggleTheme())}
          >
            {mode === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button 
            className="text-black neo-box p-1.5 bg-neo-green"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="block font-bold text-xl leading-none">☰</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-neo-blue z-[100] border-b-[4px] border-black transition-transform duration-300 transform ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"} md:hidden flex flex-col`}
      >
        <div className="h-20 w-full flex items-center justify-between px-4 border-b-[3px] border-black bg-white dark:bg-zinc-900">
          <h1 className="font-comic font-bold text-2xl">
            EaseUi<span className="text-neo-pink">.</span>
          </h1>
          <button 
            className="neo-box p-1.5 bg-neo-red text-black"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex-1 flex flex-col p-6 gap-6 bg-neo-bg dark:bg-zinc-900">
          <div className="flex items-center bg-white dark:bg-zinc-800 px-3 py-3 neo-box w-full mb-4">
            <Search size={20} className="text-black dark:text-white" />
            <input
              type="text"
              placeholder="Search components"
              className="ml-2 bg-transparent outline-none text-base font-bold placeholder-gray-500 dark:text-white w-full"
            />
          </div>
          
          <ul className="flex flex-col gap-4 font-black text-3xl font-comic">
            <li
              onClick={() => {
                setMobileMenuOpen(false);
                navigate("/components/button");
              }}
              className="cursor-pointer hover:text-neo-pink w-max border-b-4 border-transparent hover:border-black transition-all"
            >
              Components
            </li>
            <li
              onClick={() => {
                setMobileMenuOpen(false);
                navigate("/about");
              }}
              className="cursor-pointer hover:text-neo-yellow w-max border-b-4 border-transparent hover:border-black transition-all"
            >About</li>
            <li className="cursor-pointer hover:text-neo-green w-max border-b-4 border-transparent hover:border-black transition-all">Templates</li>
          </ul>

          <div className="mt-auto pb-4">
            <a 
              href="https://github.com/Prem759-0/EaseUi.git" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center justify-center gap-2 neo-box bg-white dark:bg-zinc-800 px-6 py-4 text-black dark:text-white text-xl font-bold w-full"
            >
              <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              Star on GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
