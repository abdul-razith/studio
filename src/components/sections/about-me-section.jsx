"use client";
import { SectionWrapper } from "../common/section-wrapper.jsx";
import { Button } from "../ui/button.jsx";
import { siteConfig } from "@/config/site.js";
import { DownloadCloud } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const containerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const imageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
};
const headingVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] } },
};
const contentVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
};
const buttonVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
};

export function AboutMeSection() {
  return (
    <SectionWrapper id="about" className="bg-background">
      <motion.div
        className="grid items-center gap-12 md:grid-cols-2 w-full"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="relative aspect-square w-full overflow-hidden rounded-lg shadow-xl md:order-last justify-self-center"
          variants={imageVariants}
        >
          <DotLottieReact
            src="/animation.lottie"
            loop
            autoplay
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="justify-self-center">
          <motion.h2
            className="font-headline text-4xl font-bold text-primary md:text-5xl"
            variants={headingVariants}
          >
            About Me
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-relaxed text-foreground/80"
            variants={contentVariants}
          >
            I'm Abdul Razith, a passionate React developer with a Computer Science background. My tech journey began in 2017 with my first laptop, transforming from gaming to discovering programming during my final school days.
          </motion.p>
          <motion.p
            className="mt-4 text-lg leading-relaxed text-foreground/80"
            variants={contentVariants}
          >
            I specialize in React, Next.js, JavaScript, HTML5, CSS3, and Tailwind CSS, with experience in Python, Django, and MySQL. Currently, I'm exploring AI coding tools to write more efficient code and stay ahead of industry trends. My gaming background has sharpened my attention to detail and user experience skills.
          </motion.p>
          <motion.p
            className="mt-4 text-lg leading-relaxed text-foreground/80"
            variants={contentVariants}
          >
            When I'm not coding, I enjoy home workouts, tech podcasts, and exploring with friends. As an introvert, I bring thoughtful analysis and deep focus to every project.
          </motion.p>
          <motion.p
            className="mt-4 text-lg leading-relaxed text-foreground/80"
            variants={contentVariants}
          >
            I'm actively seeking opportunities as a React Developer to contribute to meaningful projects and grow in web development.
          </motion.p>
          <motion.div variants={buttonVariants} className="mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90" data-interactive="true">
              <Link href={siteConfig.resumeUrl} target="_blank" download>
                <DownloadCloud className="mr-2 h-5 w-5" />
                Download My CV
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
