"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { cn } from '../../lib/utils.js';

export function CustomCursor() {
  const cursorDotRef = useRef(null);
  const cursorOutlineRef = useRef(null);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  const [isPointer, setIsPointer] = useState(false); 
  const [isVisible, setIsVisible] = useState(false); 

  const requestRef = useRef();
  const previousTimeRef = useRef();
  const mousePosition = useRef({ x: 0, y: 0 });
  const smoothMousePosition = useRef({ x: 0, y: 0 });

  // Handle cursor visibility and animation
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      mousePosition.current = { x: clientX, y: clientY };
      
      // Only set visibility once when mouse first moves
      if (!isVisible) {
        setIsVisible(true);
      }
    };

    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        smoothMousePosition.current.x = gsap.utils.interpolate(
          smoothMousePosition.current.x,
          mousePosition.current.x,
          0.2 
        );
        smoothMousePosition.current.y = gsap.utils.interpolate(
          smoothMousePosition.current.y,
          mousePosition.current.y,
          0.2
        );

        if (cursorDotRef.current) {
          cursorDotRef.current.style.transform = `translate3d(${mousePosition.current.x}px, ${mousePosition.current.y}px, 0)`;
        }
        if (cursorOutlineRef.current) {
          cursorOutlineRef.current.style.transform = `translate3d(${smoothMousePosition.current.x}px, ${smoothMousePosition.current.y}px, 0)`;
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []); // Remove isVisible dependency

  // Handle interactive elements
  useEffect(() => {
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, [data-interactive="true"]'
    );

    const onMouseEnterInteractive = (e) => {
      setIsHoveringInteractive(true);
      if (window.getComputedStyle(e.target).cursor === 'pointer') {
        setIsPointer(true);
      }
    };

    const onMouseLeaveInteractive = () => {
      setIsHoveringInteractive(false);
      setIsPointer(false);
    };

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, []); // Run only once on mount

  // Handle cursor style
  useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []); // Run only once on mount

  return (
    <>
      <div
        ref={cursorDotRef}
        className={cn(
          'fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2',
          'bg-accent',
          'transition-transform duration-75 ease-out',
          isVisible ? 'opacity-100' : 'opacity-0',
          isHoveringInteractive ? 'w-3 h-3 opacity-75' : 'w-2 h-2',
          isPointer ? 'hidden' : '' 
        )}
      />
      <div
        ref={cursorOutlineRef}
        className={cn(
          'fixed top-0 left-0 rounded-full border-2 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2',
          'border-accent',
          'transition-all duration-200 ease-out',
          isVisible ? 'opacity-100' : 'opacity-0',
          isHoveringInteractive ? 'w-10 h-10 opacity-50 border-primary' : 'w-8 h-8',
          isPointer ? 'hidden' : '' 
        )}
      />
    </>
  );
}
