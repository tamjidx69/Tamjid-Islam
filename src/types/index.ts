export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  url?: string;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
}
