"use client";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card.jsx";
import { Button } from "./ui/button.jsx";
import { motion } from "motion/react";
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiTailwindcss, 
  SiMongodb,
  SiFirebase,
  SiGithub
} from "react-icons/si";
import { BsBoxArrowUpRight } from "react-icons/bs";

// Map technology names to their corresponding icon components
const techIconMap = {
  "next.js": SiNextdotjs,
  "js": SiJavascript,
  "javascript": SiJavascript,
  "tailwind css": SiTailwindcss,
  "react": SiReact,
  "css": SiCss3,
  "html": SiHtml5,
  "firebase": SiFirebase,
  "mongodb": SiMongodb
};

const cardVariants = {
  initial: { y: 0, scale: 1, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" },
  hover: {
    y: -10,
    scale: 1.02,
    boxShadow: "0px 12px 25px -5px hsla(var(--primary), 0.15)",
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export function ProjectCard({ project }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
    >
      <Card className="group flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-2xl" data-interactive="true">
        <CardHeader className="p-0">
          <motion.div 
            className="relative aspect-video w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </CardHeader>
        <CardContent className="flex-grow p-6 flex flex-col">
          <CardTitle className="font-headline text-2xl text-primary">{project.title}</CardTitle>
          
          <div className="mt-3 mb-3 flex flex-wrap items-center gap-3">
            {project.technologies.map((tech) => {
              const IconComponent = techIconMap[tech.toLowerCase()];
              if (!IconComponent) return null;
              
              return (
                <motion.div 
                  key={tech} 
                  className="group/icon relative" 
                  data-interactive="true" 
                  title={tech}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent 
                    size={24}
                    className="text-foreground/70 transition-colors duration-200 ease-in-out group-hover/icon:text-accent"
                  />
                </motion.div>
              );
            })}
          </div>

          <CardDescription className="text-foreground/80 line-clamp-4 flex-grow">
            {project.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-end gap-3 p-6 pt-4">
          {project.githubLink && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="sm" asChild className="border-foreground/50 text-foreground/80 hover:bg-muted hover:text-primary" data-interactive="true">
                <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <SiGithub className="mr-2 h-4 w-4" /> GitHub
                </Link>
              </Button>
            </motion.div>
          )}
          {project.liveLink && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="default" size="sm" asChild className="bg-primary hover:bg-primary/90" data-interactive="true">
                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <BsBoxArrowUpRight className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
            </motion.div>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
} 