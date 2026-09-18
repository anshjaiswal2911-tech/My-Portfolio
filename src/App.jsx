import { useState } from "react";

import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomUser";
import IntroAnimation from "./components/introanimation";

import About from "./sections/about";
import Contact from "./sections/contact";
import Experience from "./sections/experience";
import Footer from "./sections/footer";
import Home from "./sections/home";
import Projects from "./sections/project";
import Skills from "./sections/skills";
import Testimonials from "./sections/testimonial";

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="relative bg-black text-white min-h-screen selection:bg-cyan-500 selection:text-black">
      {/* Intro Animation */}
      {!introFinished && (
        <IntroAnimation
          onFinish={() => setIntroFinished(true)}
        />
      )}

      {/* Main Website */}
      <div
        className={
          introFinished
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }
      >
        <CustomCursor />

        <Navbar />

        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}