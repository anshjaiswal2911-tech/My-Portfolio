


import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Sparkles, ArrowUpRight, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import collabnestImg from "../assets/collabnest.png";
import gramvoiceImg from "../assets/gramvoice.png";
import taskflowImg from "../assets/taskflow.png";

// =====================================================
// PROJECTS DATA
// =====================================================

const projects = [
  {
    id: 1,
    num: "01",
    title: "CollabNest",
    tagline: "AI-Powered Developer & Resource Intelligence Hub",
    category: "AI Team Matching & Collaboration",
    description:
      "An intelligent matchmaking platform connecting college developers, designers, and hackathon builders through AI skill analysis, smart compatibility scoring, and curated developer resources.",
    tech: ["React.js", "Tailwind CSS", "Gemini AI", "Node.js", "Vercel"],
    liveUrl: "https://find-teammates.vercel.app",
    githubUrl: "https://github.com/anshjaiswal2911-tech/find-teammates",
    image: collabnestImg,
    badge: "Hackathon Platform",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentColor: "#22d3ee",
  },
  {
    id: 2,
    num: "02",
    title: "GramVoice AI",
    tagline: "Voice-Powered Business Guidance for Rural Entrepreneurs",
    category: "Voice AI & Regional Empowerment",
    description:
      "A voice-first AI assistant allowing rural entrepreneurs to speak naturally in Indian regional languages to get simple, actionable business advice, market insights, and government schemes (PM Mudra Yojana).",
    tech: ["React.js", "Google Gemini AI", "Web Speech API", "Tailwind CSS", "Vercel"],
    liveUrl: "https://gram-voice-ai.vercel.app",
    githubUrl: "https://github.com/anshjaiswal2911-tech/GramVoice-Ai",
    image: gramvoiceImg,
    badge: "AI Voice Assistant",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentColor: "#38bdf8",
  },
  {
    id: 3,
    num: "03",
    title: "TaskFlow Pro",
    tagline: "Precision Workflow & Task Management Dashboard",
    category: "Productivity & SaaS Analytics",
    description:
      "A modern task management dashboard featuring real-time task status analytics, priority categorization, dark/light theme switcher, search filters, and smooth local persistence.",
    tech: ["React.js", "TypeScript", "Tailwind CSS", "Lucide Icons", "Vercel"],
    liveUrl: "https://taskflow-dashboard-kohl.vercel.app",
    githubUrl: "https://github.com/anshjaiswal2911-tech/taskflow-dashboard",
    image: taskflowImg,
    badge: "SaaS Dashboard",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    accentColor: "#c084fc",
  },
];

// =====================================================
// INDIVIDUAL PROJECT CARD (Sticky Scroll Stack)
// =====================================================

function ProjectCard({ project, index, total, range, targetScale, progress }) {
  const containerRef = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="relative lg:sticky lg:top-24 flex items-center justify-center w-full mb-8 sm:mb-14 lg:mb-20"
      style={{
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
        }}
        className="w-full max-w-5xl mx-auto rounded-2xl bg-zinc-950/90 border border-cyan-500/25 p-5 sm:p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop-blur-xl relative overflow-hidden transition-shadow duration-500 hover:shadow-[0_0_60px_rgba(34,211,238,0.2)] hover:border-cyan-400/40"
      >
        {/* Glow ambient inside card */}
        <div
          className={`absolute -top-32 -right-32 w-80 h-80 rounded-full bg-gradient-to-br ${project.gradient} blur-3xl pointer-events-none`}
        />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          {/* LEFT COLUMN: Project Details */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-4 sm:space-y-5">
            {/* Header / Number & Category */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-cyan-400 font-mono text-xs sm:text-sm tracking-widest uppercase font-bold flex items-center gap-1.5">
                  <Sparkles size={13} className="animate-pulse" />
                  {project.badge}
                </span>
                <span className="text-gray-500 font-mono text-xs sm:text-sm font-semibold">
                  {project.num} / 0{total}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight hover:text-cyan-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm font-medium text-cyan-400/80 mt-1">
                {project.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              {project.tech.map((item, i) => (
                <span
                  key={i}
                  className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium rounded-full bg-cyan-950/60 text-cyan-300 border border-cyan-500/20 backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-2 sm:pt-3">
              {/* Live Preview Button */}
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm text-black bg-gradient-to-r from-cyan-400 to-blue-400 hover:from-cyan-300 hover:to-blue-300 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_28px_rgba(34,211,238,0.6)] active:scale-95 flex-1 sm:flex-initial text-center"
              >
                <Globe size={15} />
                Live Demo
                <ArrowUpRight size={15} />
              </a>

              {/* GitHub Repo Button */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm text-gray-200 bg-zinc-900/80 border border-zinc-700/80 hover:border-cyan-400/60 hover:text-white hover:bg-zinc-800 transition-all active:scale-95 flex-1 sm:flex-initial text-center"
              >
                <FaGithub size={15} />
                Source Code
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Live Mockup Preview */}
          <div className="lg:col-span-7">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative rounded-xl overflow-hidden border border-zinc-700/60 bg-zinc-900/90 shadow-2xl transition-all duration-500 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
            >
              {/* Browser Window Mockup Top Bar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[11px] font-mono text-gray-400 bg-zinc-950/80 px-3 py-0.5 rounded-md border border-zinc-800 flex items-center gap-1.5 truncate max-w-[200px] sm:max-w-[280px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {project.liveUrl.replace("https://", "")}
                </div>
                <div className="text-gray-500">
                  <ExternalLink size={14} className="group-hover:text-cyan-400 transition-colors" />
                </div>
              </div>

              {/* Project Screenshot Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Hover Overlay with Pill */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-cyan-500/90 backdrop-blur-md shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    Open Live Deployment <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// =====================================================
// MAIN PROJECTS SECTION (Sticky Scroll)
// =====================================================

export default function Projects() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ================= BACKGROUND GLOWS ================= */}
      <div className="pointer-events-none absolute left-[-200px] top-[10%] h-[550px] w-[550px] rounded-full bg-cyan-500/15 blur-[150px]" />
      <div className="pointer-events-none absolute right-[-200px] top-[40%] h-[500px] w-[500px] rounded-full bg-purple-500/15 blur-[150px]" />
      <div className="pointer-events-none absolute left-[30%] bottom-[5%] h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[130px]" />

      {/* ================= SECTION HEADER ================= */}
      <div className="relative z-10 mx-auto max-w-5xl text-center mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold tracking-wider uppercase mb-4">
            <Sparkles size={14} />
            Portfolio Showcase
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            My <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.45)]">Work</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Explore live deployed web applications, AI tools, and production-ready platforms built with modern technology stacks.
          </p>
        </motion.div>
      </div>

      {/* ================= STACKED SCROLLING CARDS ================= */}
      <div className="relative z-10 mx-auto max-w-5xl">
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - index) * 0.04;
          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
              range={[index * (1 / projects.length), 1]}
              targetScale={targetScale}
              progress={scrollYProgress}
            />
          );
        })}
      </div>

      {/* ================= GITHUB REPOSITORIES CTA ================= */}
      <div className="relative z-10 mx-auto max-w-3xl text-center mt-12 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 rounded-2xl bg-zinc-950/60 border border-zinc-800/80 backdrop-blur-sm"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Want to see more projects?
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Check out my GitHub for more open-source repositories, experiments, and ongoing projects.
          </p>
          <a
            href="https://github.com/anshjaiswal2911-tech?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-white bg-zinc-900 border border-cyan-500/40 hover:bg-cyan-950/50 hover:border-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] hover:scale-105 active:scale-95"
          >
            <FaGithub size={18} />
            Explore All Repositories on GitHub
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
