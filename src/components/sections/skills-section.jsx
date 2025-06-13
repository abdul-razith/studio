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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

// Skill data with categories and proficiency levels
const skillsData = {
  frontend: {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: SiReact, level: "Expert" },
      { name: "Next.js", icon: SiNextdotjs, level: "Expert" },
      { name: "JavaScript ES6+", icon: SiJavascript, level: "Expert" },
      { name: "HTML5", icon: SiHtml5, level: "Advanced" },
      { name: "CSS3", icon: SiCss3, level: "Advanced" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" },
      { name: "Bootstrap 5", icon: SiBootstrap, level: "Advanced" }
    ]
  },
  backend: {
    title: "Backend Development",
    skills: [
      { name: "Python", icon: SiPython, level: "Advanced" },
      { name: "Django", icon: SiDjango, level: "Advanced" },
      { name: "MySQL", icon: SiMysql, level: "Intermediate" },
      { name: "MongoDB", icon: SiMongodb, level: "Intermediate" },
      { name: "RESTful APIs", icon: FaCode, level: "Basic" }
    ]
  },
  tools: {
    title: "Development Tools",
    skills: [
      { name: "Git", icon: SiGit, level: "Advanced" },
      { name: "VS Code", icon: VscVscode, level: "Advanced" },
      { name: "Chrome DevTools", icon: SiGooglechrome, level: "Advanced" },
      { name: "Lighthouse Testing", icon: SiLighthouse, level: "Intermediate" }
    ]
  }
};

export function SkillsSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const toolsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        }
      });

      // Animate main heading and description
      tl.fromTo([headingRef.current, descriptionRef.current],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2 }
      );

      // Animate each category
      const categoryRefs = [frontendRef.current, backendRef.current, toolsRef.current];
      categoryRefs.forEach((ref, index) => {
        if (ref) {
          tl.fromTo(ref,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6 },
            0.4 + (index * 0.2)
          );
        }
      });
    }, sectionRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper ref={sectionRef} id="skills" className="bg-secondary/30">
      <div className="text-center max-w-6xl mx-auto px-4">
        <h2 ref={headingRef} className="font-headline text-4xl font-bold text-primary md:text-5xl">
          My Skills
        </h2>
        <p ref={descriptionRef} className="mt-4 text-lg text-foreground/80">
          Technologies I work with
        </p>

        <div className="mt-16 space-y-16">
          <div ref={frontendRef} className="skill-category">
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
          </div>

          <div ref={backendRef} className="skill-category">
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
          </div>

          <div ref={toolsRef} className="skill-category">
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
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
