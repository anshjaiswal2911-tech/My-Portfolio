import { useEffect, useRef } from "react";
import {
  FaJava,
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaFigma,
  FaPalette,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiMongodb,
  SiTailwindcss,
  SiVercel,
  SiMysql,
} from "react-icons/si";


// =====================================================
// SKILLS DATA
// =====================================================

const skills = [
  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "C++",
    icon: <SiCplusplus />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    name: "HTML",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
  {
    name: "Docker",
    icon: <FaDocker />,
  },
  {
    name: "Figma",
    icon: <FaFigma />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "Canva",
    icon: <FaPalette />,
  },
  {
    name: "Vercel",
    icon: <SiVercel />,
  },
];


// =====================================================
// SINGLE SKILL
// =====================================================

function SkillItem({ skill }) {
  return (
    <div className="skill-item">

      <div className="skill-icon">
        {skill.icon}
      </div>

      <span className="skill-name">
        {skill.name}
      </span>

    </div>
  );
}


// =====================================================
// SKILLS SECTION
// =====================================================

export default function Skills() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let direction = 1; // 1: Right to Left (Scroll Down), -1: Left to Right (Scroll Up)
    let lastScrollY = window.scrollY;
    let animationFrameId;
    let lastTime = performance.now();
    const speed = 55; // Pixels per second

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY;

      if (Math.abs(diff) > 3) {
        if (diff > 0) {
          // Scrolling Top to Bottom -> Move Right to Left
          direction = 1;
        } else {
          // Scrolling Bottom to Top -> Move Left to Right
          direction = -1;
        }
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = (currentTime) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      const halfWidth = track.scrollWidth / 2;

      if (halfWidth > 0) {
        if (direction === 1) {
          // Right to Left
          x -= speed * deltaTime;
          if (x <= -halfWidth) {
            x += halfWidth;
          }
        } else {
          // Left to Right
          x += speed * deltaTime;
          if (x >= 0) {
            x -= halfWidth;
          }
        }
        track.style.transform = `translate3d(${x}px, 0, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section
      id="skills"
      className="skills-section"
    >

      {/* ==========================================
          BACKGROUND GLOW
      ========================================== */}

      <div className="skill-glow skill-glow-left" />

      <div className="skill-glow skill-glow-center" />

      <div className="skill-glow skill-glow-right" />


      {/* ==========================================
          HEADING
      ========================================== */}

      <div className="skills-heading">

        <h2>
          My <span>Skills</span>
        </h2>

        <p>
          Modern Applications | Modern Technologies
        </p>

      </div>


      {/* ==========================================
          MOVING SKILLS
      ========================================== */}

      <div className="skills-wrapper">

        {/* Left Fade */}
        <div className="skills-fade-left" />

        {/* Right Fade */}
        <div className="skills-fade-right" />


        {/* Moving Track */}
        <div className="skills-track" ref={trackRef}>

          {/* First Row */}
          <div className="skills-list">

            {skills.map((skill, index) => (
              <SkillItem
                key={`skill-first-${index}`}
                skill={skill}
              />
            ))}

          </div>


          {/* Duplicate Row */}
          <div
            className="skills-list"
            aria-hidden="true"
          >

            {skills.map((skill, index) => (
              <SkillItem
                key={`skill-second-${index}`}
                skill={skill}
              />
            ))}

          </div>

        </div>

      </div>


      {/* ==========================================
          SECTION CSS
      ========================================== */}

      <style>{`

        /* =================================================
           MAIN SECTION
        ================================================= */

        .skills-section {
          position: relative;

          width: 100%;

          margin: 0;
          padding: 55px 0 55px 0;

          overflow: hidden;

          background: #000000;

          color: #ffffff;

          isolation: isolate;
        }


        /* =================================================
           BACKGROUND GLOWS
        ================================================= */

        .skill-glow {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;

          z-index: -1;

          filter: blur(80px);
        }


        .skill-glow-left {
          width: 360px;
          height: 360px;

          left: -200px;
          top: -80px;

          background: rgba(0, 190, 180, 0.24);
        }


        .skill-glow-center {
          width: 300px;
          height: 300px;

          left: 43%;
          top: 90px;

          background: rgba(120, 20, 170, 0.16);
        }


        .skill-glow-right {
          width: 420px;
          height: 420px;

          right: -230px;
          bottom: -170px;

          background: rgba(0, 190, 180, 0.22);
        }


        /* =================================================
           HEADING
        ================================================= */

        .skills-heading {
          position: relative;

          z-index: 2;

          width: 100%;

          margin: 0 0 32px 0;

          padding: 0 20px;

          text-align: center;
        }


        .skills-heading h2 {
          margin: 0;

          padding: 0;

          color: #ffffff;

          font-size: 46px;

          line-height: 1.1;

          font-weight: 700;

          letter-spacing: -1px;
        }


        .skills-heading h2 span {
          color: #22d3ee;

          text-shadow:
            0 0 18px rgba(34, 211, 238, 0.25);
        }


        .skills-heading p {
          margin: 12px 0 0 0;

          padding: 0;

          color: #d1d5db;

          font-size: 15px;

          line-height: 1.5;
        }


        /* =================================================
           SLIDER WRAPPER
        ================================================= */

        .skills-wrapper {
          position: relative;

          width: 100%;

          margin: 0;
          padding: 18px 0;

          overflow: hidden;
        }


        /* =================================================
           MOVING TRACK
        ================================================= */

        .skills-track {
          display: flex;

          width: max-content;

          margin: 0;
          padding: 0;

          will-change: transform;
        }


        /* =================================================
           LIST
        ================================================= */

        .skills-list {
          display: flex;

          align-items: center;

          gap: 55px;

          margin: 0;

          padding: 0 55px 0 0;

          flex-shrink: 0;
        }


        /* =================================================
           SKILL ITEM
        ================================================= */

        .skill-item {
          width: 100px;

          min-width: 100px;

          height: 100px;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          gap: 9px;

          flex-shrink: 0;

          transition:
            transform 0.3s ease,
            opacity 0.3s ease;
        }


        .skill-item:hover {
          transform: translateY(-6px) scale(1.05);
        }


        /* =================================================
           ICON
        ================================================= */

        .skill-icon {
          display: flex;

          align-items: center;

          justify-content: center;

          font-size: 45px;

          color: #22d3ee;

          filter:
            drop-shadow(
              0 0 8px
              rgba(34, 211, 238, 0.25)
            );

          transition:
            transform 0.3s ease,
            filter 0.3s ease;
        }


        .skill-item:hover .skill-icon {
          transform: scale(1.1);

          filter:
            drop-shadow(
              0 0 16px
              rgba(34, 211, 238, 0.65)
            );
        }


        /* =================================================
           SKILL NAME
        ================================================= */

        .skill-name {
          color: #d1d5db;

          font-size: 13px;

          font-weight: 500;

          line-height: 1.2;

          white-space: nowrap;

          text-align: center;
        }


        /* =================================================
           LEFT BLACK FADE
        ================================================= */

        .skills-fade-left {
          position: absolute;

          left: 0;
          top: 0;
          bottom: 0;

          width: 140px;

          z-index: 10;

          pointer-events: none;

          background:
            linear-gradient(
              to right,
              #000000 0%,
              rgba(0, 0, 0, 0.95) 25%,
              rgba(0, 0, 0, 0.65) 55%,
              transparent 100%
            );
        }


        /* =================================================
           RIGHT BLACK FADE
        ================================================= */

        .skills-fade-right {
          position: absolute;

          right: 0;
          top: 0;
          bottom: 0;

          width: 140px;

          z-index: 10;

          pointer-events: none;

          background:
            linear-gradient(
              to left,
              #000000 0%,
              rgba(0, 0, 0, 0.95) 25%,
              rgba(0, 0, 0, 0.65) 55%,
              transparent 100%
            );
        }


        /* =================================================
           MOBILE
        ================================================= */

        @media (max-width: 768px) {

          .skills-section {
            padding-top: 40px;
            padding-bottom: 40px;
          }


          .skills-heading {
            margin-bottom: 22px;
          }


          .skills-heading h2 {
            font-size: 34px;
          }


          .skills-heading p {
            font-size: 13px;
          }


          .skills-list {
            gap: 28px;

            padding-right: 28px;
          }


          .skill-item {
            width: 76px;

            min-width: 76px;

            height: 84px;
          }


          .skill-icon {
            font-size: 32px;
          }


          .skill-name {
            font-size: 11px;
          }


          .skills-fade-left,
          .skills-fade-right {
            width: 40px;
          }

        }

        @media (max-width: 480px) {
          .skills-heading h2 {
            font-size: 28px;
          }

          .skills-list {
            gap: 22px;
            padding-right: 22px;
          }

          .skill-item {
            width: 68px;
            min-width: 68px;
            height: 78px;
          }

          .skill-icon {
            font-size: 28px;
          }

          .skill-name {
            font-size: 10px;
          }

          .skills-fade-left,
          .skills-fade-right {
            width: 25px;
          }
        }


        /* =================================================
           REDUCE MOTION
        ================================================= */

        @media (prefers-reduced-motion: reduce) {

          .skills-track {
            animation: none;
          }

        }

      `}</style>

    </section>
  );
}