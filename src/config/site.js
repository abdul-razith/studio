
// export type NavItem = {
//   title: string;
//   href: string;
//   external?: boolean;
// };

// export type SocialLink = {
//   name: string;
//   href: string;
//   icon: React.ComponentType<{ className?: string }>;
// };

import { Github, Linkedin, Twitter } from 'lucide-react'; 

export const navItems = [
  { title: 'About', href: '#about' },
  { title: 'Skills', href: '#skills' },
  { title: 'Projects', href: '#projects' },
  { title: 'Contact', href: '#contact' },
];

export const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/yourusername', icon: Twitter },
];

export const siteConfig = {
  name: "Abdul Razith",
  description: "A modern, artistic, and minimalist single-page portfolio for Abdul Razith, a React developer.",
  resumeUrl: "/Abdul_Razith_CV.pdf", 
};
