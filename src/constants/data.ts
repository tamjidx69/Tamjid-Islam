import { Project, Service, SocialLink, Step, Skill } from '@/src/types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Professional Gaming Thumbnail',
    category: 'YouTube Strategy',
    image: '/input_file_1.png',
    description: 'High-conversion thumbnails crafted for elite creators in any gaming niche, focusing on narrative tension.'
  },
  {
    id: '2',
    title: 'Premium Product Poster',
    category: 'Product Design',
    image: '/input_file_2.png',
    description: 'Cinematic brand layouts for any product line, combining luxury aesthetics with strategic lighting.'
  },
  {
    id: '3',
    title: 'Tech Visualization Poster',
    category: 'Poster Design',
    image: '/input_file_3.png',
    description: 'Ultra-realistic product visualizations and promotional posters for conceptual brand launches.'
  },
  {
    id: '4',
    title: 'Brand Identity Design',
    category: 'Logo Design',
    image: '/input_file_4.png',
    description: 'Unique, scalable, and memorable visual identities designed for each and every brand in any niche.'
  }
];

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Thumbnail Design',
    description: 'I design thumbnails for every niche, psychologically engineered to dominate the digital feed and skyrocket your CTR.',
    icon: 'Youtube',
    url: 'https://drive.google.com/drive/folders/1epRmUgfuINXWe7Flg9UDtfoQp7g_bW4-?usp=drive_link'
  },
  {
    id: '2',
    title: 'Poster Design',
    description: 'I sell product posters for every product, combining editorial layout with premium visual storytelling for any brand.',
    icon: 'Image',
    url: 'https://drive.google.com/drive/folders/123fbxZB6Usi9fjbP8OPVcJt2uldSAlF5?usp=sharing'
  },
  {
    id: '3',
    title: 'Logo Design',
    description: 'I create logos for each and every brand in every niche, crafting unique visual identities that establish authority.',
    icon: 'Layers',
    url: 'https://drive.google.com/drive/folders/1XROjaG-Nb-rMXFStNld15woDnVXTbP_r?usp=sharing'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { id: '1', name: 'Instagram', url: 'https://www.instagram.com/__tamjid.__/', icon: 'Instagram' },
  { id: '2', name: 'Behance', url: 'https://www.behance.net/tamjidislam5', icon: 'Layout' },
  { id: '3', name: 'LinkedIn', url: 'https://www.linkedin.com/in/tamjidislamx/', icon: 'Linkedin' },
  { id: '4', name: 'Facebook', url: 'https://www.facebook.com/tamjidislamx1', icon: 'Facebook' },
  { id: '5', name: 'WhatsApp', url: 'https://wa.me/8801631950874', icon: 'MessageCircle' }
];

export const PROCESS_STEPS: Step[] = [
  { id: '1', title: 'Discovery', description: 'Deep dive into your brand goals and audience.' },
  { id: '2', title: 'Research', description: 'Analyzing market trends and competitor visuals.' },
  { id: '3', title: 'Concept', description: 'Drafting initial creative directions and sketches.' },
  { id: '4', title: 'Design', description: 'Crafting the final visual with surgical precision.' },
  { id: '5', title: 'Refinement', description: 'Iterative polishing based on your feedback.' },
  { id: '6', title: 'Delivery', description: 'High-quality assets ready for the world.' }
];

export const SKILLS: Skill[] = [
  { id: '1', name: 'Photoshop', level: 95 },
  { id: '2', name: 'Illustrator', level: 85 },
  { id: '3', name: 'Canva', level: 90 },
  { id: '4', name: 'Premiere Pro', level: 80 },
  { id: '5', name: 'Visual Strategy', level: 90 },
  { id: '6', name: 'Brand Identity', level: 85 }
];
