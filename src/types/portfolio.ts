export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  type: string;
  location?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  schoolOrDepartment?: string;
  period?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ProjectCaseStudy {
  challenge: string;
  approach: string;
  deliverable: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  summary?: string;
  caseStudy?: ProjectCaseStudy;
  year: string;
  category: string;
  tags: string[];
  image: string;
  link?: string;
  featured?: boolean;
}

export interface ArtItem {
  id: string;
  title: string;
  year: string;
  category: string;
  tags: string[];
  image: string;
  link?: string;
  featured?: boolean;
}