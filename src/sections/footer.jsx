


import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-black py-14 sm:py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      {/* Ambient center glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-blue-600/15 blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        
        {/* Large Prominent Name */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 sm:mb-8"
        >
          Ansh Jaiswal
        </motion.h2>

        {/* Social Icons Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex items-center gap-5 sm:gap-6 text-xl sm:text-2xl text-gray-400 mb-6 sm:mb-8"
        >
          <a
            href="https://x.com/AnshJaiswa62344"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-white transition-colors duration-200 hover:scale-110 active:scale-95 transform"
            aria-label="Twitter / X"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/ansh-jaiswal-4bb5243a2/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-cyan-400 transition-colors duration-200 hover:scale-110 active:scale-95 transform"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/anshjaiswal2911-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-white transition-colors duration-200 hover:scale-110 active:scale-95 transform"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-xs sm:text-sm text-gray-400 italic mb-4 max-w-md"
        >
          "Success is when preparation meets opportunity."
        </motion.p>

        {/* Copyright */}
        <p className="text-[11px] sm:text-xs text-gray-500">
          © {currentYear} Ansh Jaiswal. All rights reserved.
        </p>

      </div>
    </footer>
  );
}


