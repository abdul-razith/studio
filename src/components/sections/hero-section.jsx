"use client";
import { Button } from "../ui/button.jsx";
import Link from "next/link";
import { SectionWrapper } from "../common/section-wrapper.jsx";
import SplitText from "../common/SplitText.jsx";
import { ArrowDown, Github } from "lucide-react";
import { motion } from "framer-motion";
import Particles from "../common/Particles.jsx";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const headingVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: [0.23, 1, 0.32, 1], staggerChildren: 0.1 } },
};
const subHeadingVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] } },
};
const descriptionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.7, ease: [0.23, 1, 0.32, 1] } },
};
const buttonsVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2, delayChildren: 0.9 } },
};
const buttonItem = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
};

const jobTitles = [
  "React Developer",
  "Frontend Developer",
  "UI Developer",
  "Web Developer"
];

function Typewriter({ words, speed = 80, pause = 1200 }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing) {
      if (displayed.length < words[index].length) {
        timeout = setTimeout(() => {
          setDisplayed(words[index].slice(0, displayed.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setTyping(false), pause);
      }
    } else {
      timeout = setTimeout(() => {
        setDisplayed("");
        setTyping(true);
        setIndex((prev) => (prev + 1) % words.length);
      }, 400);
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, index, words, speed, pause]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={index}
        className="font-bold text-primary job-title-animation"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {displayed}
        <span className="blinking-cursor">|</span>
      </motion.span>
    </AnimatePresence>
  );
}

export function HeroSection() {
  return (
    <SectionWrapper id="hero" className="relative flex min-h-[calc(100vh-4rem)] items-center">
      <Particles
        className="absolute inset-0 -z-10"
        particleColors={['#00E5E5', '#00AFFF', '#F0F0F0']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <div className="relative z-0 mx-auto max-w-3xl text-center">
        <motion.h1
          className="font-headline font-bold tracking-tight text-primary flex flex-col items-center md:flex-row md:items-baseline md:justify-center md:gap-x-2 text-3xl min-[375px]:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
          variants={headingVariants}
          initial="initial"
          animate="animate"
        >
          <span className="block md:inline static-hero-text">Hello, I'm&nbsp;</span>
          <SplitText
            text="Abdul Razith"
            className="align-baseline"
            delay={80}
            duration={0.7}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 50, scale: 0.8, skewX: "15deg" }}
            to={{ opacity: 1, y: 0, scale: 1, skewX: "0deg" }}
            threshold={0.1}
            rootMargin="-50px"
          />
        </motion.h1>
        <motion.p
          className="mt-6 font-headline text-xl leading-8 text-foreground/90 md:text-2xl lg:text-3xl"
          variants={subHeadingVariants}
          initial="initial"
          animate="animate"
        >
          <span className="static-subheading">A Creative </span>
          <Typewriter words={jobTitles} />
        </motion.p>
        <motion.p
          className="mt-4 text-base text-foreground/80 md:text-lg"
          variants={descriptionVariants}
          initial="initial"
          animate="animate"
        >
          I build modern, artistic, and minimalist web experiences that captivate and engage.
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-y-0 md:gap-x-6"
          variants={buttonsVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={buttonItem}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90" data-interactive="true">
              <a href="https://github.com/abdul-razith" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub Profile
              </a>
            </Button>
          </motion.div>
          <motion.div variants={buttonItem}>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10" data-interactive="true">
              <a href="https://drive.google.com/file/d/1YI0TtxD-7tmqRHp_VdOcEWxTnoZUzL_H/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Download My Resume <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
