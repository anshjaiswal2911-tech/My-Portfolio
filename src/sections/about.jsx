import React from "react";
import { motion } from "framer-motion";
import avatar from "../assets/P.webp";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* ================= BACKGROUND GLOWS ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[80px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/20
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-180px]
          bottom-[-100px]
          h-[550px]
          w-[550px]
          rounded-full
          bg-cyan-500/20
          blur-[140px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[35%]
          top-[40%]
          h-[250px]
          w-[250px]
          rounded-full
          bg-purple-500/10
          blur-[120px]
        "
      />

      {/* ================= MAIN CONTAINER ================= */}

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 py-16 sm:py-24">

        {/* ================= PROFILE ================= */}

        <motion.div
          className="
            flex
            flex-col
            items-center
            text-center
            md:text-left
            gap-6
            sm:gap-8
            md:flex-row
            md:items-start
          "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* ================= PROFILE IMAGE ================= */}

          <div className="shrink-0">
            <img
              src={avatar}
              alt="Ansh Jaiswal"
              loading="lazy"
              decoding="async"
              className="
                h-32
                w-32
                sm:h-40
                sm:w-40
                rounded-2xl
                border
                border-cyan-400/30
                object-cover
                shadow-[0_0_35px_rgba(34,211,238,0.15)]
              "
            />
          </div>

          {/* ================= PROFILE DETAILS ================= */}

          <div className="flex-1 w-full">

            {/* NAME */}

            <h2
              className="
                mb-2
                text-3xl
                sm:text-4xl
                font-bold
                tracking-tight
                text-cyan-400
                md:text-5xl
              "
            >
              Ansh Jaiswal
            </h2>

            {/* ROLE */}

            <h3 className="mb-4 sm:mb-5 text-lg sm:text-xl font-semibold md:text-2xl text-gray-200">
              Full Stack Developer
            </h3>

            {/* DESCRIPTION */}

            <p
              className="
                max-w-3xl
                text-sm
                sm:text-base
                leading-relaxed
                text-gray-300
                md:text-lg
              "
            >
              I'm a Computer Engineering student and aspiring Software
              Engineer passionate about building modern web applications,
              solving problems with code, and turning ideas into
              real-world products.
            </p>

            <p
              className="
                mt-3
                max-w-3xl
                text-sm
                sm:text-base
                leading-relaxed
                text-gray-300
                md:text-lg
              "
            >
              I enjoy working with Java, JavaScript, React, and modern
              web technologies while continuously improving my development
              and problem-solving skills.
            </p>

            {/* ================= INFO CARDS ================= */}

            <div
              className="
                mt-6
                sm:mt-7
                grid
                grid-cols-1
                gap-3
                sm:gap-4
                sm:grid-cols-3
              "
            >

              {/* EXPERIENCE CARD */}

              <div
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  sm:px-5
                  py-4
                  sm:py-5
                  text-center
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:bg-white/[0.05]
                "
              >
                <p className="text-xs sm:text-sm text-gray-400">
                  Experience
                </p>

                <p className="mt-1 font-bold text-sm sm:text-base text-white">
                  Full Stack Intern
                </p>
              </div>

              {/* SPECIALITY CARD */}

              <div
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  sm:px-5
                  py-4
                  sm:py-5
                  text-center
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:bg-white/[0.05]
                "
              >
                <p className="text-xs sm:text-sm text-gray-400">
                  Speciality
                </p>

                <p className="mt-1 font-bold text-sm sm:text-base text-white">
                  Web Development
                </p>
              </div>

              {/* FOCUS CARD */}

              <div
                className="
                  rounded-xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-4
                  sm:px-5
                  py-4
                  sm:py-5
                  text-center
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:bg-white/[0.05]
                "
              >
                <p className="text-xs sm:text-sm text-gray-400">
                  Focus
                </p>

                <p className="mt-1 font-bold text-sm sm:text-base text-white">
                  DSA & Software Dev
                </p>
              </div>

            </div>

            {/* ================= BUTTONS ================= */}

            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">

              {/* VIEW PROJECTS */}

              <a
                href="#projects"
                className="
                  rounded-lg
                  bg-white
                  px-5
                  sm:px-6
                  py-2.5
                  sm:py-3
                  font-semibold
                  text-sm
                  sm:text-base
                  text-black
                  transition-transform
                  duration-300
                  hover:scale-105
                  active:scale-95
                  text-center
                "
              >
                View Projects
              </a>

              {/* GET IN TOUCH */}

              <a
                href="#contact"
                className="
                  rounded-lg
                  border
                  border-white/20
                  bg-white/[0.03]
                  px-5
                  sm:px-6
                  py-2.5
                  sm:py-3
                  font-semibold
                  text-sm
                  sm:text-base
                  text-white
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:bg-white/10
                  active:scale-95
                  text-center
                "
              >
                Get in Touch
              </a>

            </div>

          </div>
        </motion.div>

        {/* ================= ABOUT ME ================= */}

        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >

          {/* ABOUT HEADING */}

          <h2
            className="
              mb-5
              text-3xl
              font-bold
              md:text-4xl
            "
          >
            About Me
          </h2>

          {/* PARAGRAPH 1 */}

          <p
            className="
              max-w-4xl
              text-base
              leading-relaxed
              text-gray-300
              md:text-lg
            "
          >
            I'm a B.Tech Computer Engineering student at{" "}
            <span className="font-semibold text-white">
              Shree L. R. Tiwari College of Engineering
            </span>
            , focused on software development, web technologies,
            and Data Structures & Algorithms.
          </p>

          {/* PARAGRAPH 2 */}

          <p
            className="
              mt-4
              max-w-4xl
              text-base
              leading-relaxed
              text-gray-300
              md:text-lg
            "
          >
            I enjoy building practical projects, participating in
            hackathons, and exploring new technologies through
            hands-on development. My goal is to keep learning,
            build useful products, and grow as a software engineer.
          </p>

          {/* PARAGRAPH 3 */}

          <p
            className="
              mt-4
              max-w-4xl
              text-base
              leading-relaxed
              text-gray-300
              md:text-lg
            "
          >
            Alongside development, I'm involved in the student
            developer community as a{" "}
            <span className="font-semibold text-white">
              Microsoft Associate Ambassador
            </span>{" "}
            and{" "}
            <span className="font-semibold text-white">
              GeeksforGeeks Campus Mantri
            </span>
            . I also actively participate in hackathons and
            community-driven technology initiatives.
          </p>

        </motion.div>

      </div>
    </section>
  );
}