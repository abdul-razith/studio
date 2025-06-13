"use client";
import { SectionWrapper } from "../common/section-wrapper.jsx";
import { ProjectCard } from "../project-card.jsx";
import { motion } from "motion/react";
import { cn } from "../../lib/utils.js";

const containerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
};

const headingVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
  }
};

const descriptionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }
  }
};

const projectCardVariants = {
  initial: { opacity: 0, y: 50, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
  }
};

const projectsData = [
  {
    id: "1",
    title: "FitLife360",
    description: "A dynamic and responsive blog application built using HTML, Tailwind CSS, Next.js, and MongoDB. Features include a hero slider, category filters, and search functionality, with top scores in performance, accessibility, and SEO.",
    imageUrl: "/fitlife360.png",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "MongoDB"],
    liveLink: "https://www.fitlife360.life/",
    githubLink: "https://github.com/abdul-razith/blog-app",
  },
  {
    id: "2",
    title: "VibeSky",
    description: "A responsive single-page weather app built with React.js, utilizing the OpenWeatherMap API and other web technologies. This app allows users to search for current weather conditions, view 5-day and next 24 hours forecasts, and check air quality in cities worldwide.",
    imageUrl: "/vibesky.png",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Firebase"],
    liveLink: "https://vibe-sky.web.app/",
    githubLink: "https://github.com/abdul-razith/VibeSky",
  },
  {
    id: "3",
    title: "GreenPlate",
    description: "A simple and responsive multi-page food restaurant application built using React.js and modern web technologies. This app is designed as a frontend-only solution, allowing users to explore various food options, add them to their cart, and proceed to checkout.",
    imageUrl: "/greenplate.png",
    technologies: ["React", "JavaScript", "CSS", "HTML", "Firebase"],
    liveLink: "https://green--plate.web.app/",
    githubLink: "https://github.com/abdul-razith/GreenPlate"
  },
];

export function ProjectsShowcaseSection() {
  return (
    <SectionWrapper id="projects" className="bg-background">
      <motion.div 
        className="text-center"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="font-headline text-4xl font-bold text-primary md:text-5xl"
          variants={headingVariants}
        >
          My Projects
        </motion.h2>
        <motion.p 
          className="mt-4 text-lg text-foreground/80"
          variants={descriptionVariants}
        >
          A selection of my work, showcasing my skills in web development.
        </motion.p>
      </motion.div>
      <motion.div 
        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projectsData.map((project, index) => (
          <motion.div 
            key={project.id} 
            variants={projectCardVariants}
            className={cn(
              "w-full",
              projectsData.length % 2 !== 0 && index === projectsData.length - 1 ? "md:col-span-2 flex justify-center" : ""
            )}
          >
            <div className={cn("w-full", projectsData.length % 2 !== 0 && index === projectsData.length - 1 ? "max-w-lg" : "")}> 
              <ProjectCard project={project} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
