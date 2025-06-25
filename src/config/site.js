import { Github, Linkedin, Newspaper, User2, Code2, FolderKanban, Mail } from 'lucide-react';

export const navItems = [
  { title: 'About', href: '#about', icon: User2 },
  { title: 'Skills', href: '#skills', icon: Code2 },
  { title: 'Projects', href: '#projects', icon: FolderKanban },
  { title: 'Blog', href: 'https://medium.com/@razith01', icon: Newspaper, external: true },
  { title: 'Contact', href: '#contact', icon: Mail },
];

export const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/abdul-razith', icon: Github },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abdul-razith/', icon: Linkedin },
];

export const siteConfig = {
  name: "Abdul Razith",
  description: "A modern, artistic, and minimalist single-page portfolio for Abdul Razith, a React developer.",
  resumeUrl: "https://drive.google.com/file/d/1YI0TtxD-7tmqRHp_VdOcEWxTnoZUzL_H/view?usp=sharing", 
};
