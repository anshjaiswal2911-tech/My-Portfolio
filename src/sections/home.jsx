import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";

import ParticlesBackground from "../components/particlebackground";
import avator from "../assets/avator.webp";

const roles = [
  "Web Developer",
  "Software Developer",
  "Frontend Developer",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[index];

    const timeout = setTimeout(
      () => {
        if (!deleting && subIndex < currentRole.length) {
          setSubIndex((prev) => prev + 1);
        } else if (!deleting && subIndex === currentRole.length) {
          setDeleting(true);
        } else if (deleting && subIndex > 0) {
          setSubIndex((prev) => prev - 1);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      },
      deleting
        ? 60
        : subIndex === currentRole.length
        ? 1200
        : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <section
      id="home"
      className="
        relative
        w-full
        min-h-screen
        bg-black
        overflow-hidden
      "
    >

      {/* ================= BACKGROUND ================= */}

      <ParticlesBackground />

      {/* LEFT GLOW */}

      <div
        className="
          absolute
          top-0
          left-0
          w-[70vw]
          sm:w-[50vw]
          md:w-[40vw]
          h-[70vh]
          sm:h-[50vh]
          md:h-[40vh]
          max-w-[500px]
          max-h-[500px]
          rounded-full
          bg-gradient-to-r
          from-[#302b63]
          via-[#00b8f8]
          to-[#1cd8d2]
          opacity-30
          sm:opacity-20
          md:opacity-10
          blur-[100px]
          sm:blur-[130px]
          md:blur-[150px]
          animate-pulse
          pointer-events-none
        "
      />

      {/* RIGHT GLOW */}

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[70vw]
          sm:w-[50vw]
          md:w-[40vw]
          h-[70vh]
          sm:h-[50vh]
          md:h-[40vh]
          max-w-[500px]
          max-h-[500px]
          rounded-full
          bg-gradient-to-r
          from-[#302b63]
          via-[#00b8f8]
          to-[#1cd8d2]
          opacity-30
          sm:opacity-20
          md:opacity-10
          blur-[100px]
          sm:blur-[130px]
          md:blur-[150px]
          animate-pulse
          pointer-events-none
        "
      />

      {/* ================= HERO CONTAINER ================= */}

      <div
        className="
          relative
          z-10
          w-full
          min-h-screen
          max-w-7xl
          mx-auto
          px-6
          sm:px-10
          md:px-16
          lg:px-20
          flex
          items-center
        "
      >

        {/* ================= MAIN ROW ================= */}

        <div
          className="
            w-full
            flex
            items-center
            justify-between
            gap-8
            lg:gap-12
          "
        >

          {/* ================= LEFT CONTENT ================= */}

          <div
            className="
              w-full
              lg:w-[58%]
              xl:w-[60%]
            "
          >

            {/* ================= ROLE ================= */}

            <motion.div
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-4xl
                font-semibold
                text-white
                tracking-tight
                min-h-[1.2em]
              "
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >
              {roles[index].substring(0, subIndex)}

              <span
                className="
                  inline-block
                  w-[2px]
                  h-[1em]
                  ml-1
                  bg-white
                  animate-pulse
                  align-middle
                "
              />
            </motion.div>

            {/* ================= MAIN HEADING ================= */}

            <motion.h1
              className="
                mt-4
                tracking-tight
                leading-[0.95]
              "
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
            >

              {/* HELLO I'M */}

              <motion.span
                className="
                  block
                  text-3xl
                  sm:text-5xl
                  md:text-6xl
                  lg:text-7xl
                  xl:text-8xl
                  font-bold
                  text-[#27d3d3]
                "
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                }}
              >
                Hello I'm
              </motion.span>

              {/* NAME */}

              <motion.span
                className="
                  block
                  text-white
                  text-4xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-7xl
                  xl:text-8xl
                  font-bold
                  tracking-tight
                "
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                }}
              >
                Ansh Jaiswal
              </motion.span>

            </motion.h1>

            {/* ================= PARAGRAPH ================= */}

            <motion.p
              className="
                mt-4
                sm:mt-6
                text-sm
                sm:text-lg
                md:text-xl
                text-gray-300
                max-w-2xl
                leading-relaxed
              "
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.7,
                duration: 0.8,
              }}
            >
              I turn complex ideas into seamless, high-impact web
              experiences — building modern, scalable, and
              lightning-fast applications that make a difference.
            </motion.p>

            {/* ================= BUTTONS ================= */}

            <motion.div
              className="
                mt-8
                sm:mt-10
                flex
                flex-wrap
                items-center
                justify-start
                gap-3
                sm:gap-4
              "
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.9,
                duration: 0.8,
              }}
            >

              {/* VIEW MY WORK */}

              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  px-5
                  sm:px-6
                  py-2.5
                  sm:py-3
                  rounded-full
                  font-semibold
                  text-sm
                  sm:text-base
                  text-white
                  bg-gradient-to-r
                  from-[#1cd8d2]
                  via-[#00b8f8]
                  to-[#302b63]
                  shadow-lg
                  hover:shadow-[0_0_30px_rgba(0,184,248,0.45)]
                  transition-all
                  duration-300
                "
              >
                View My Work
              </motion.a>

              {/* RESUME */}

              <motion.a
                href="/Resume.pdf"
                download="Ansh-Jaiswal-Resume.pdf"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  px-5
                  sm:px-6
                  py-2.5
                  sm:py-3
                  rounded-full
                  font-semibold
                  text-sm
                  sm:text-base
                  text-black
                  bg-white
                  hover:bg-gray-200
                  shadow-lg
                  hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]
                  transition-all
                  duration-300
                "
              >
                My Resume
              </motion.a>

            </motion.div>

            {/* ================= SOCIAL ICONS ================= */}

            <motion.div
              className="
                mt-7
                flex
                items-center
                gap-4
              "
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.1,
                duration: 0.8,
              }}
            >

              {/* X */}

              <motion.a
                href="https://x.com/AnshJaiswa62344"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                whileHover={{
                  scale: 1.18,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="
                  w-11
                  h-11
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-white
                  text-xl
                  hover:border-white/40
                  hover:bg-white/10
                  hover:shadow-[0_0_25px_rgba(255,255,255,0.45)]
                  transition-all
                  duration-300
                "
              >
                <FaXTwitter />
              </motion.a>

              {/* LINKEDIN */}

              <motion.a
                href="https://www.linkedin.com/in/ansh-jaiswal-4bb5243a2"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{
                  scale: 1.18,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="
                  w-11
                  h-11
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-white
                  text-xl
                  hover:text-[#0A66C2]
                  hover:border-[#0A66C2]/50
                  hover:bg-[#0A66C2]/10
                  hover:shadow-[0_0_25px_rgba(10,102,194,0.6)]
                  transition-all
                  duration-300
                "
              >
                <FaLinkedinIn />
              </motion.a>

              {/* GITHUB */}

              <motion.a
                href="https://github.com/anshjaiswal2911-tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                whileHover={{
                  scale: 1.18,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                className="
                  w-11
                  h-11
                  flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-white
                  text-xl
                  hover:border-white/40
                  hover:bg-white/10
                  hover:shadow-[0_0_25px_rgba(255,255,255,0.45)]
                  transition-all
                  duration-300
                "
              >
                <FaGithub />
              </motion.a>

            </motion.div>

          </div>

          {/* ================= RIGHT AVATOR ================= */}

          <motion.div
            className="
              hidden
              lg:flex
              lg:w-[42%]
              xl:w-[40%]
              items-center
              justify-center
              relative
            "
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: "easeOut",
            }}
          >

            {/* AVATOR GLOW */}

            <motion.div
              className="
                absolute
                w-[300px]
                h-[300px]
                xl:w-[430px]
                xl:h-[430px]
                rounded-full
                bg-[#00b8f8]
                opacity-10
                blur-[100px]
                pointer-events-none
              "
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.08, 0.14, 0.08],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* AVATOR IMAGE */}

            <motion.img
              src={avator}
              alt="Ansh Jaiswal"
              loading="eager"
              decoding="async"
              className="
                relative
                z-10
                w-[360px]
                lg:w-[390px]
                xl:w-[480px]
                object-contain
                drop-shadow-[0_0_35px_rgba(0,184,248,0.25)]
              "
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

          </motion.div>

        </div>
      </div>
    </section>
  );
}