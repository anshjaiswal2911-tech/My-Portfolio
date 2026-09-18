import { useState } from "react";
import OverlayMenu from "./overlaymenue";
import Logo from "../assets/Logo.png";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-50">

        {/* LEFT - Logo + Ansh */}
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="Ansh Logo"
            className="w-8 h-8"
          />

          <span className="text-xl font-bold text-white">
            Ansh
          </span>
        </div>

        {/* CENTER - Menu Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="absolute left-1/2 -translate-x-1/2 text-white"
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>

        {/* RIGHT - Reach Out */}
        <a
          href="#contact"
          className="bg-linear-to-r from-pink-500 to-blue-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity duration-300"
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