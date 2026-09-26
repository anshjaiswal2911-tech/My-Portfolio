import { useState } from "react";
import OverlayMenu from "./overlaymenue";
import Logo from "../assets/Logo.webp";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-8 py-3.5 sm:py-4 z-50 bg-black/60 backdrop-blur-xl border-b border-white/5 transition-all duration-300">

        {/* LEFT - Logo + Ansh */}
        <a href="#home" className="flex items-center gap-2 sm:gap-3 group">
          <img
            src={Logo}
            alt="Ansh Logo"
            className="w-7 h-7 sm:w-8 sm:h-8 transition-transform group-hover:scale-110"
          />

          <span className="text-lg sm:text-xl font-bold text-white tracking-tight">
            Ansh
          </span>
        </a>

        {/* CENTER - Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="absolute left-1/2 -translate-x-1/2 text-white p-2 rounded-full hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center cursor-pointer"
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>

        {/* RIGHT - Reach Out */}
        <a
          href="#contact"
          className="bg-linear-to-r from-pink-500 to-blue-500 text-white px-3.5 sm:px-6 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm shadow-md sm:shadow-lg hover:opacity-90 active:scale-95 transition-all duration-300 whitespace-nowrap"
        >
          Reach Out
        </a>

      </nav>

      {/* FULL SCREEN MENU */}
      <OverlayMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
}