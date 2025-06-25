"use client";
import { SectionWrapper } from "../common/section-wrapper.jsx";
import { SkillItem } from "../common/skill-item.jsx";
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiBootstrap, 
  SiPython, 
  SiDjango, 
  SiMysql, 
  SiMongodb, 
  SiGit, 
  SiGooglechrome,
  SiLighthouse 
} from "react-icons/si";
import { FaCode } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { motion } from "motion/react"

// Skill data with categories and proficiency levels
const skillsData = {
  frontend: {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: SiReact, level: "Intermediate" },
      { name: "Next.js", icon: SiNextdotjs, level: "Basic" },
      { name: "JavaScript ES6+", icon: SiJavascript, level: "Intermediate" },
      { name: "HTML5", icon: SiHtml5, level: "Advanced" },
      { name: "CSS3", icon: SiCss3, level: "Advanced" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Intermediate" },
      { name: "Bootstrap 5", icon: SiBootstrap, level: "Advanced" }
    ]
  },
  backend: {
    title: "Backend Development",
    skills: [
      { name: "Python", icon: SiPython, level: "Basic" },
      { name: "Django", icon: SiDjango, level: "Basic" },
      { name: "MySQL", icon: SiMysql, level: "Basic" },
      { name: "MongoDB", icon: SiMongodb, level: "Basic" },
      { name: "RESTful APIs", icon: FaCode, level: "Basic" }
    ]
  },
  tools: {
    title: "Development Tools",
    skills: [
      { name: "Git", icon: SiGit, level: "Intermediate" },
      { name: "VS Code", icon: VscVscode, level: "Advanced" },
      { name: "Chrome DevTools", icon: SiGooglechrome, level: "Advanced" },
      { name: "Lighthouse Testing", icon: SiLighthouse, level: "Advanced" }
    ]
  }
};

const containerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
const headingVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
};
const descriptionVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] } },
};
const categoryVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] } },
};

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="bg-secondary/30">
      <div className="text-center max-w-6xl mx-auto px-4">
        <motion.h2
          className="font-headline text-4xl font-bold text-primary md:text-5xl"
          variants={headingVariants}
          initial="initial"
          animate="animate"
        >
          My Skills
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-foreground/80"
          variants={descriptionVariants}
          initial="initial"
          animate="animate"
        >
          Technologies I work with
        </motion.p>
        <motion.div
          className="mt-16 space-y-16"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={categoryVariants} className="skill-category">
            <div className="relative">
              <h3 className="text-2xl font-semibold text-primary mb-8">
                {skillsData.frontend.title}
              </h3>
              <div className="absolute top-1/2 left-0 w-full h-px bg-primary/20 -z-10" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
              {skillsData.frontend.skills.map((skill, index) => (
                <SkillItem
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                  index={index}
                  isHighlighted={skill.level === "Expert"}
                />
              ))}
            </div>
          </motion.div>
          {/* <motion.div variants={categoryVariants} className="skill-category">
            <div className="relative">
              <h3 className="text-2xl font-semibold text-primary mb-8">
                {skillsData.backend.title}
              </h3>
              <div className="absolute top-1/2 left-0 w-full h-px bg-primary/20 -z-10" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
              {skillsData.backend.skills.map((skill, index) => (
                <SkillItem
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                  index={index}
                  isHighlighted={skill.level === "Expert"}
                />
              ))}
            </div>
          </motion.div> */}
          <motion.div variants={categoryVariants} className="skill-category">
            <div className="relative">
              <h3 className="text-2xl font-semibold text-primary mb-8">
                {skillsData.tools.title}
              </h3>
              <div className="absolute top-1/2 left-0 w-full h-px bg-primary/20 -z-10" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
              {skillsData.tools.skills.map((skill, index) => (
                <SkillItem
                  key={skill.name}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                  index={index}
                  isHighlighted={skill.level === "Expert"}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
