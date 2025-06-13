"use client";
import { SectionWrapper } from "../common/section-wrapper.jsx";
import { ProjectCard } from "../project-card.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { cn } from "../../lib/utils.js";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const projectCardsContainerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      });

      if (headingRef.current) {
        tl.fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6 }, 0);
      }
      if (descriptionRef.current) {
        tl.fromTo(descriptionRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6 }, 0.2);
      }
      if (projectCardsContainerRef.current) {
        const cards = Array.from(projectCardsContainerRef.current.children).map(
          (childDiv) => childDiv.querySelector('[data-interactive="true"]') 
        ).filter(Boolean);

        if (cards.length > 0) {
          tl.fromTo(cards, 
            { opacity: 0, y: 50, scale: 0.95 }, 
            { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.2, ease: "power2.out" }, 
          0.3);
        }
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper ref={sectionRef} id="projects" className="bg-background">
      <div className="text-center">
        <h2 ref={headingRef} className="font-headline text-4xl font-bold text-primary md:text-5xl">My Projects</h2>
        <p ref={descriptionRef} className="mt-4 text-lg text-foreground/80">
          A selection of my work, showcasing my skills in web development.
        </p>
      </div>
      <div ref={projectCardsContainerRef} className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <div 
            key={project.id} 
            className={cn(
              "w-full",
              projectsData.length % 2 !== 0 && index === projectsData.length - 1 ? "md:col-span-2 flex justify-center" : ""
            )}
          >
            <div className={cn("w-full", projectsData.length % 2 !== 0 && index === projectsData.length - 1 ? "max-w-lg" : "")}> 
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
