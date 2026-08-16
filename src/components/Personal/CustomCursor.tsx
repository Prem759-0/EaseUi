import { useEffect, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Add global class to hide default cursor on desktop
    document.documentElement.classList.add("hide-default-cursor");

    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.classList.remove("hide-default-cursor");
    };
  }, []);

  useEffect(() => {
    // Fast dot
    gsap.to(".custom-cursor-dot", {
      x: position.x,
      y: position.y,
      duration: 0.05,
      ease: "none",
    });

    // Trailing brutalist square
    gsap.to(".custom-cursor-outline", {
      x: position.x,
      y: position.y,
      duration: 0.3,
      ease: "power3.out",
    });
  }, [position]);

  return (
    <>
      {/* Trailing Outer Square */}
      <div
        className={`custom-cursor-outline fixed top-0 left-0 w-10 h-10 border-[3px] border-black bg-transparent pointer-events-none z-[9998] transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 ${
          isHovering ? "scale-150 bg-neo-pink rotate-45 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "scale-100 rotate-0 shadow-none bg-neo-yellow/30"
        } hidden md:block`}
        style={{ transformOrigin: "center center" }}
      />
      {/* Fast Inner Crosshair/Dot */}
      <div
        className={`custom-cursor-dot fixed top-0 left-0 w-3 h-3 bg-black pointer-events-none z-[9999] transition-all duration-200 transform -translate-x-1/2 -translate-y-1/2 ${
          isHovering ? "bg-white scale-0" : "scale-100"
        } hidden md:block`}
        style={{ transformOrigin: "center center" }}
      >
        {!isHovering && (
          <>
            <div className="absolute top-1/2 left-[-6px] w-[24px] h-[2px] bg-black -translate-y-1/2"></div>
            <div className="absolute left-1/2 top-[-6px] h-[24px] w-[2px] bg-black -translate-x-1/2"></div>
          </>
        )}
      </div>
    </>
  );
};

export default CustomCursor;
