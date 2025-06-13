"use client";

import React from "react";
import { SectionWrapper } from "../common/section-wrapper.jsx";
import { Button } from "../ui/button.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card.jsx";
import { siteConfig } from "../../config/site.js";
import Link from "next/link";
import { motion } from "motion/react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { DownloadCloud } from "lucide-react";

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

const contactCardVariants = {
  initial: { opacity: 0, y: 30, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] }
  }
};

export function ContactFormSection() {
  return (
    <SectionWrapper id="contact" className="bg-secondary/30">
      <motion.div 
        className="mx-auto max-w-3xl text-center"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2 
          className="font-headline text-4xl font-bold text-primary md:text-5xl"
          variants={headingVariants}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="mt-4 text-lg text-foreground/80"
          variants={descriptionVariants}
        >
          Have a project in mind or just want to say hi? Feel free to reach out!
        </motion.p>
      </motion.div>

      <motion.div 
        className="mt-12 flex justify-center"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div 
          className="w-full max-w-md lg:max-w-5xl"
          variants={contactCardVariants}
        >
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-center">Contact Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 md:gap-y-8 md:gap-x-8 w-full">
                <div className="flex flex-col items-center space-y-2">
                  <MdEmail className="h-8 w-8 text-primary" />
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild 
                    className="border-primary/50 text-primary hover:bg-primary/10" 
                    data-interactive="true"
                  >
                    <a 
                      href="mailto:razith01@gmail.com" 
                      className="truncate"
                    >
                      razith01@gmail.com
                    </a>
                  </Button>
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
                    <a 
                      href="https://www.linkedin.com/in/abdul-razith/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <SiGithub className="h-8 w-8 text-primary" />
                  <h4 className="font-semibold text-foreground">GitHub</h4>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild 
                    className="border-primary/50 text-primary hover:bg-primary/10" 
                    data-interactive="true"
                  >
                    <a 
                      href="https://github.com/abdul-razith" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View GitHub Profile
                    </a>
                  </Button>
                </div>

                <div className="flex flex-col items-center space-y-2">
                  <DownloadCloud className="h-8 w-8 text-primary" />
                  <h4 className="font-semibold text-foreground">Resume</h4>
                  <Button 
                    variant="outline"
                    size="sm" 
                    asChild 
                    className="border-primary/50 text-primary hover:bg-primary/10" 
                    data-interactive="true"
                  >
                    <a 
                      href="https://drive.google.com/file/d/1YI0TtxD-7tmqRHp_VdOcEWxTnoZUzL_H/view?usp=sharing" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
