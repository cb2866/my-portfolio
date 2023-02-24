import React, { useRef } from "react";
import { Button } from "@mui/material";
import { useInView } from "framer-motion";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import ContactPage from "./ContactPage";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function FadeIn({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const Home = () => {
  return (
    <>
      <FadeIn>
        <Hero />
      </FadeIn>
      <FadeIn>
        <About />
      </FadeIn>
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn>
        <ContactPage />
      </FadeIn>
      <Button
        onClick={() => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }}
        id="scroll-to-top"
      >
        <ArrowUpwardIcon />
      </Button>
    </>
  );
};

export default Home;
