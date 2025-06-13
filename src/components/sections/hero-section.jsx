
"use client";
import { Button } from "../ui/button.jsx";
import Link from "next/link";
import { SectionWrapper } from "../common/section-wrapper.jsx";
import SplitText from "../common/SplitText.jsx";
import { ArrowDown } from "lucide-react";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Particles from "../common/Particles.jsx";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export function HeroSection() {
  const heroRef = useRef(null);
  const headingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  // const jobTitleRef = useRef(null); // Not used, can be removed

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        const staticParts = headingRef.current.querySelectorAll('.static-hero-text');
        if (staticParts.length > 0) {
          gsap.fromTo(staticParts,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: "power3.out", stagger: 0.1 }
          );
        }
      }
      if (subHeadingRef.current) {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
        const jobTitles = ["React Developer", "frontend developer", "UI developer", "web developer"];
        const jobTitleElement = subHeadingRef.current.querySelector('.job-title-animation');

        gsap.fromTo(subHeadingRef.current.querySelector('.static-subheading'),
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: "power3.out" }
        );

        if (jobTitleElement) { // Check if element exists
          jobTitles.forEach((title, index) => {
            tl.to(jobTitleElement, {
              duration: 1,
              text: title,
              ease: "none",
              delay: index === 0 ? 1 : 0.5 // Initial delay for the first title
            })
            .to(jobTitleElement, { // Optional: add a brief pause before clearing
              duration: 0.5,
              text: "", // GSAP TextPlugin will clear the text
              ease: "none",
              delay: 1.5 // Pause duration
            }); // Terminate the tl.to().to() statement
          }); // Close forEach loop (block and method call)
        }
      }
      if (descriptionRef.current) {
        gsap.fromTo(descriptionRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.7, ease: "power3.out" }
        );
      }
      if (buttonsRef.current) {
        gsap.fromTo(buttonsRef.current.children,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.9, stagger: 0.2, ease: "power3.out" }
        );
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper ref={heroRef} id="hero" className="relative flex min-h-[calc(100vh-4rem)] items-center">
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
        <h1
          ref={headingRef}
          className="font-headline font-bold tracking-tight text-primary
                     flex flex-col items-center 
                     md:flex-row md:items-baseline md:justify-center md:gap-x-2
                     text-3xl min-[375px]:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
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
        </h1>
        <p ref={subHeadingRef} className="mt-6 font-headline text-xl leading-8 text-foreground/90 md:text-2xl lg:text-3xl">
          <span className="static-subheading">A Creative </span><span className="font-bold text-primary job-title-animation"></span>
        </p>
        <p ref={descriptionRef} className="mt-4 text-base text-foreground/80 md:text-lg">
          I build modern, artistic, and minimalist web experiences that captivate and engage.
        </p>
        <div ref={buttonsRef} className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90" data-interactive="true">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10" data-interactive="true">
            <Link href="#contact">Get In Touch <ArrowDown className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
