"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Code } from "lucide-react";
import { Button } from "../ui/button.jsx";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/sheet.jsx";
import { navItems, siteConfig } from "../../config/site.js";
import { cn } from "../../lib/utils.js";
import { motion } from "motion/react";
import { ThemeToggle } from '../theme/theme-toggle.jsx';

const navLinkVariants = {
  initial: { opacity: 0, y: -20 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5 + index * 0.1,
      ease: [0.23, 1, 0.32, 1]
    }
  })
};

const headerVariants = {
  initial: { y: -100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: [0.23, 1, 0.32, 1]
    }
  }
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial="initial"
      animate="animate"
      variants={headerVariants}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold text-primary" data-interactive="true">
          <Code className="h-7 w-7" />
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <nav className="hidden space-x-6 md:flex">
            {navItems.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={navLinkVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={item.href}
                  className="font-medium text-foreground/80 transition-colors hover:text-primary"
                  data-interactive="true"
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" data-interactive="true">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background p-6">
              <div className="mb-8 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold text-primary" data-interactive="true">
                  <Code className="h-6 w-6" />
                  {siteConfig.name}
                </Link>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" data-interactive="true">
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </SheetClose>
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <SheetClose asChild key={item.title}>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="rounded-md px-3 py-2 text-lg font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                        data-interactive="true"
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
