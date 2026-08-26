export interface AppConfig {
  name: string;
  owner: string;
  roleTitle: string;
  subTitle: string;
  roles: string[];
  location: string;
  bioHeadline: string;
  bioSubheadline: string;
  bioParagraph1: string;
  bioPrinciples: {
    title: string;
    description: string;
  }[];
  bioParagraph2: string;
  heroImage: string;
  logoImage: string;
  aboutImage: string;
  sleepingFrogImage: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactConfig {
  headline: string;
  subheadline: string;
  email: string;
  github: string;
  instagram: string;
  linkedin: string;
  location: string;
  openFor: string[];
}
