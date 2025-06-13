"use client";

import React, { useLayoutEffect, useRef } from "react";
import { SectionWrapper } from "../common/section-wrapper.jsx";
import { Button } from "../ui/button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card.jsx";
import { siteConfig } from "../../config/site.js";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiLinkedin } from "react-icons/si";
import { MdEmail } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export function ContactFormSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const contactDetailsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
          once: true
        }
      });

      if (headingRef.current) {
        tl.fromTo(headingRef.current, 
          { opacity: 0, y: 50 }, 
          { opacity: 1, y: 0, duration: 0.6 }
        );
      }
      if (descriptionRef.current) {
        tl.fromTo(descriptionRef.current, 
          { opacity: 0, y: 50 }, 
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        );
      }
      if (contactDetailsRef.current) {
        tl.fromTo(contactDetailsRef.current, 
          { opacity: 0, y: 30, scale: 0.95 }, 
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power2.out" },
          "-=0.4"
        );
      }
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <SectionWrapper ref={sectionRef} id="contact" className="bg-secondary/30">
      <div className="mx-auto max-w-3xl text-center">
        <h2 ref={headingRef} className="font-headline text-4xl font-bold text-primary md:text-5xl">Get In Touch</h2>
        <p ref={descriptionRef} className="mt-4 text-lg text-foreground/80">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <div ref={contactDetailsRef} className="w-full max-w-md">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-center">Contact Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex flex-col items-center space-y-2">
                  <MdEmail className="h-8 w-8 text-primary" />
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-accent hover:underline transition-colors" 
                    data-interactive="true"
                  >
                    your.email@example.com
                  </a>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <SiLinkedin className="h-8 w-8 text-primary" />
                  <h4 className="font-semibold text-foreground">LinkedIn</h4>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild 
                    className="border-primary/50 text-primary hover:bg-primary/10" 
                    data-interactive="true"
                  >
                    <Link 
                      href="https://linkedin.com/in/yourusername" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Connect on LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}
