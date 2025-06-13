"use client";
import { useLayoutEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SkillItem({ icon: Icon, name, level, index, isHighlighted }) {
  const itemRef = useRef(null);
  const iconRef = useRef(null);

  const setupAnimations = useCallback(() => {
    if (!itemRef.current) return;

    const enterAnimation = () => {
      gsap.to(itemRef.current, {
        y: -5,
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
      });
      const tooltip = itemRef.current.querySelector('.tooltip');
      if (tooltip) {
        gsap.to(tooltip, {
          opacity: 1,
          y: 0,
          duration: 0.2
        });
      }
    };

    const leaveAnimation = () => {
      gsap.to(itemRef.current, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      const tooltip = itemRef.current.querySelector('.tooltip');
      if (tooltip) {
        gsap.to(tooltip, {
          opacity: 0,
          y: 10,
          duration: 0.2
        });
      }
    };

    itemRef.current.addEventListener("mouseenter", enterAnimation);
    itemRef.current.addEventListener("mouseleave", leaveAnimation);

    return () => {
      if (itemRef.current) {
        itemRef.current.removeEventListener("mouseenter", enterAnimation);
        itemRef.current.removeEventListener("mouseleave", leaveAnimation);
      }
    };
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation when coming into view
      gsap.fromTo(itemRef.current,
        {
          opacity: 0,
          scale: 0.5,
          y: 50
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: itemRef.current,
            start: "top bottom-=50",
            end: "bottom top+=50",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Continuous icon animation for expert skills
      if (isHighlighted && iconRef.current) {
        gsap.to(iconRef.current, {
          rotation: 10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
      }

      const cleanup = setupAnimations();
      return () => {
        cleanup?.();
      };
    }, itemRef);

    return () => ctx.revert();
  }, [index, isHighlighted, setupAnimations]);

  const containerClasses = `
    relative flex flex-col items-center justify-center w-24 h-24 rounded-xl
    transition-colors cursor-pointer
    ${isHighlighted 
      ? 'bg-primary/10 hover:bg-primary/20 ring-2 ring-primary/20' 
      : 'bg-secondary/20 hover:bg-secondary/30'}
  `;

  const iconClasses = `
    text-primary transition-colors hover:text-primary/80
    ${isHighlighted ? 'scale-110' : ''}
  `;

  return (
    <div ref={itemRef} className={containerClasses}>
      <div ref={iconRef} className="relative">
        <Icon 
          size={44} 
          className={iconClasses}
        />
      </div>
      {/* Tooltip */}
      <div className="tooltip absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 translate-y-10 bg-background/90 text-foreground px-2 py-1 rounded text-sm whitespace-nowrap pointer-events-none z-10">
        <span className="font-medium">{name}</span>
        <span className="text-primary/80"> • {level}</span>
      </div>
    </div>
  );
} 