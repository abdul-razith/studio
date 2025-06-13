"use client";
import { motion } from "motion/react";

export function SkillItem({ icon: Icon, name, level, index, isHighlighted }) {
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
        transition: { duration: 0.3, ease: "easeOut" },
        '--tooltip-opacity': 1,
        '--tooltip-y': 0,
      }}
      whileTap={{
        '--tooltip-opacity': 0,
        '--tooltip-y': 10,
      }}
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
      <motion.div
        className="tooltip absolute -bottom-8 left-1/2 -translate-x-1/2 bg-background/90 text-foreground px-2 py-1 rounded text-sm whitespace-nowrap pointer-events-none z-10"
        style={{ opacity: 'var(--tooltip-opacity, 0)', y: 'var(--tooltip-y, 10px)' }}
        transition={{ duration: 0.2 }}
      >
        <span className="font-medium">{name}</span>
        <span className="text-primary/80"> • {level}</span>
      </motion.div>
    </motion.div>
  );
} 