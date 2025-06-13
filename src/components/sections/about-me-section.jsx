
"use client";
import Image from "next/image";
import { SectionWrapper } from "../common/section-wrapper.jsx";
import { siteConfig } from "../../config/site.js";
import { Button } from "../ui/button.jsx";
import { DownloadCloud } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export function AboutMeSection() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const contentRefs = useRef([]);
  const buttonRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", 
          toggleActions: "play none none none",
        }
      });

      if (imageRef.current) {
        tl.fromTo(imageRef.current, 
          { opacity: 0, x: -50 }, 
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" }, 
        0);
      }
      if (headingRef.current) {
        tl.fromTo(headingRef.current, 
          { opacity: 0, y: 50 }, 
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, 
        0.2);
      }
      contentRefs.current.forEach((el, index) => {
        if (el) {
          tl.fromTo(el, 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 
          0.3 + index * 0.15);
        }
      });
      if (buttonRef.current) {
         tl.fromTo(buttonRef.current, 
            { opacity: 0, y: 30 }, 
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }, 
          0.3 + contentRefs.current.length * 0.15);
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper ref={sectionRef} id="about" className="bg-background">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div ref={imageRef} className="relative aspect-square w-full max-w-md overflow-hidden rounded-lg shadow-xl md:order-last">
          <Image
            src="/pic1.jpg"
            alt="Abdul Razith - React Developer"
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 hover:scale-105"
            data-ai-hint="professional portrait"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div>
          <h2 ref={headingRef} className="font-headline text-4xl font-bold text-primary md:text-5xl">About Me</h2>
          <p ref={el => contentRefs.current[0] = el} className="mt-6 text-lg leading-relaxed text-foreground/80">
            I'm a passionate and creative frontend web developer with a strong focus on React. My goal is to craft beautiful, intuitive, and high-performing user interfaces that solve real-world problems and delight users.
          </p>
          <p ref={el => contentRefs.current[1] = el} className="mt-4 text-lg leading-relaxed text-foreground/80">
            With a keen eye for design and a dedication to clean, efficient code, I strive to build web applications that are not only functional but also aesthetically pleasing. I'm constantly exploring new technologies and techniques to push the boundaries of what's possible on the web.
          </p>
          <p ref={el => contentRefs.current[2] = el} className="mt-4 text-lg leading-relaxed text-foreground/80">
            When I'm not coding, you can find me exploring minimalist art, experimenting with new creative tools, or contributing to open-source projects.
          </p>
           <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90" data-interactive="true">
            <Link ref={buttonRef} href={siteConfig.resumeUrl} target="_blank" download>
              <DownloadCloud className="mr-2 h-5 w-5" />
              Download My CV
            </Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
