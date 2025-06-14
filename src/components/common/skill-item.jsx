"use client";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export function SkillItem({ icon: Icon, name, level, index, isHighlighted }) {
  const [isHovered, setIsHovered] = useState(false);

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
    <motion.div
      className={containerClasses}
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
      whileHover={{ 
        y: -5, 
        scale: 1.1,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="relative"
        animate={{
          rotate: [0, 10, -10, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }
        }}
      >
        <Icon 
          size={44} 
          className={iconClasses}
        />
      </motion.div>
      {/* Tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.05 }}
            className="tooltip absolute -bottom-8 left-1/2 -translate-x-1/2 bg-background/90 text-foreground px-2 py-1 rounded text-sm whitespace-nowrap pointer-events-none z-10"
          >
            <span className="font-medium">{name}</span>
            <span className="text-primary/80"> • {level}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 