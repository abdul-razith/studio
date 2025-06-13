
"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

const SplitText = ({
  text,
  className = "",
  delay = 100,
  duration = 0.6,
  ease = "power3.out",
  splitType = "chars",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "left", // Default to left, parent can override
  onAnimationComplete, // Renamed for clarity
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const absoluteLines = splitType === "lines";
    if (absoluteLines) el.style.position = "relative";

    const splitter = new GSAPSplitText(el, {
      type: splitType,
      absolute: absoluteLines,
      linesClass: "split-line", // Keep if you style lines
    });

    let targets;
    switch (splitType) {
      case "lines":
        targets = splitter.lines;
        break;
      case "words":
        targets = splitter.words;
        break;
      case "words, chars":
      case "chars, words": // Added for flexibility
        targets = [...splitter.words, ...splitter.chars];
        break;
      default: // "chars"
        targets = splitter.chars;
    }

    targets.forEach((t) => {
      if (t) t.style.willChange = "transform, opacity";
    });

    const startPct = (1 - threshold) * 100;
    const m = /^(-?\d+)px$/.exec(rootMargin);
    const raw = m ? parseInt(m[1], 10) : 0;
    const sign = raw < 0 ? `-=${Math.abs(raw)}px` : `+=${raw}px`;
    const start = `top ${startPct}%${sign}`;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
        once: true,
      },
      smoothChildTiming: true,
      onComplete: onAnimationComplete,
    });

    tl.set(targets, { ...from, immediateRender: false, force3D: true });
    tl.to(targets, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      force3D: true,
    });

    return () => {
      tl.kill();
      // Only kill ScrollTriggers associated with this timeline/element if necessary
      // ScrollTrigger.getAll().forEach((t) => { if (t.trigger === el) t.kill(); });
      gsap.killTweensOf(targets);
      if (splitter && typeof splitter.revert === 'function') {
        splitter.revert();
      }
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    JSON.stringify(from), // Stringify objects for dependency array
    JSON.stringify(to),   // Stringify objects for dependency array
    threshold,
    rootMargin,
    onAnimationComplete,
    // ref is stable, no need to include
  ]);

  return (
    <span // Changed from p to span for inline usage
      ref={ref}
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
      style={{
        textAlign,
        // wordWrap: "break-word", // Not always needed for span
      }}
    >
      {text}
    </span>
  );
};

export default SplitText;
