"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Code } from "lucide-react";
import { Button } from "../ui/button.jsx";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/sheet.jsx";
import { navItems, siteConfig } from "../../config/site.js";
import { cn } from "../../lib/utils.js";
import { gsap } from "gsap";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const navLinksRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    if (headerRef.current) {
      gsap.fromTo(headerRef.current, 
        { y: -100, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
      );
    }
    
    navLinksRef.current.forEach((link, index) => {
      if (link) {
        gsap.fromTo(link,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5, delay: 0.5 + index * 0.1, ease: "power2.out" }
        );
      }
    });


    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavLinkHover = (e) => {
    gsap.to(e.currentTarget, { color: "hsl(var(--accent))", duration: 0.3 });
  };

  const handleNavLinkLeave = (e) => {
     gsap.to(e.currentTarget, { color: "hsl(var(--foreground)/0.8))", duration: 0.3 });
  };


  return (
    <header
      ref={headerRef}
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

        <nav className="hidden space-x-6 md:flex">
          {navItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              ref={el => navLinksRef.current[index] = el}
              className="font-medium text-foreground/80 transition-colors hover:text-primary"
              data-interactive="true"
              onMouseEnter={handleNavLinkHover}
              onMouseLeave={handleNavLinkLeave}
            >
              {item.title}
            </Link>
          ))}
        </nav>

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
                {navItems.map((item) => (
                  <SheetClose asChild key={item.title}>
                    <Link
                      href={item.href}
                      className="rounded-md px-3 py-2 text-lg font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                       data-interactive="true"
                    >
                      {item.title}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
