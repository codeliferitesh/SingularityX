/**
 * SingularityX — Team Configuration & Content File
 * 
 * TO UPDATE MEMBERS:
 * 1. Place their photo files into the `public/team/` folder (e.g. `public/team/ritesh.jpg`)
 * 2. Update `photoUrl` to point to the file (e.g. `'/team/ritesh.jpg'`)
 * 3. Replace the placeholder `linkedInUrl` with their actual LinkedIn profile URL.
 * 
 * If photoUrl is empty ('') or fails to load, a clean minimalist initials avatar
 * will automatically be shown as a graceful fallback.
 */

export interface TeamMember {
  id: string;
  name: string;
  initials: string;
  photoUrl: string;
  linkedInUrl: string;
  objectPosition?: string;
}

export interface WhatWeBuildItem {
  number: string;
  title: string;
  description: string;
  code: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  link?: string;
  status?: string;
}

export interface FooterContactLink {
  label: string;
  email: string;
}

export interface SiteConfig {
  teamName: string;
  tagline: string;
  introBadge: string;
  contactEmail: string;
  contactEmails: string[];
  footerContacts: FooterContactLink[];
  heroHeading: string;
  heroText: string;
  identityStrip: string[];
  aboutText: string;
  whatWeBuild: WhatWeBuildItem[];
  currentlyExploring: string[];
  projects: ProjectItem[];
  members: TeamMember[];
}

export const siteConfig: SiteConfig = {
  teamName: "SingularityX",
  tagline: "Building things. Breaking limits.",
  introBadge: "INDEPENDENT DEV TEAM / INDIA",
  contactEmail: "mercsyntax@gmail.com",
  contactEmails: [
    "mercsyntax@gmail.com",
    "stacksolveofficial@gmail.com",
    "tarumani24@gmail.com",
  ],
  footerContacts: [
    {
      label: "Contact Ayush Singh",
      email: "mercsyntax@gmail.com",
    },
    {
      label: "Contact Ritesh K Verma",
      email: "stacksolveofficial@gmail.com",
    },
    {
      label: "Contact Tarun Mani",
      email: "tarumani24@gmail.com",
    },
  ],

  heroHeading: "Hey, we're SingularityX.",
  heroText: "We're five friends who build software, experiment with hardware, and spend our time turning ideas into working projects.",

  identityStrip: [
    "05 MEMBERS",
    "SOFTWARE + HARDWARE",
    "HACKATHONS & SIDE PROJECTS",
    "BUILT IN INDIA",
  ],

  whatWeBuild: [
    {
      number: "01",
      title: "Software",
      description: "Websites, applications, and digital tools built to solve real problems.",
      code: "SYS://DEV.APP",
    },
    {
      number: "02",
      title: "Hardware",
      description: "Electronics, embedded systems, and ideas that connect code with the physical world.",
      code: "EMB://CIRCUIT.IO",
    },
    {
      number: "03",
      title: "Experiments",
      description: "Side projects, prototypes, and the things we learn by trying.",
      code: "LAB://PROTOTYPE.V1",
    },
  ],

  currentlyExploring: [
    "Building side projects",
    "Experimenting with hardware",
    "Exploring new ideas",
    "Preparing for hackathons",
  ],

  projects: [
    // Real projects can easily be added here:
    // {
    //   id: "p1",
    //   title: "Project Alpha",
    //   category: "Hardware + Software",
    //   description: "Autonomous sensor hub for low-power edge nodes.",
    //   status: "In progress"
    // }
  ],

  aboutText: "SingularityX is a team of five friends interested in building things that live between software and hardware. We learn by experimenting, build by collaborating, and enjoy taking ideas from a rough sketch to something that actually works.",

  members: [
    {
      id: "ritesh",
      name: "Ritesh Kumar Verma",
      initials: "RKV",
      photoUrl: "/team/ritesh.jpg",
      objectPosition: "center 35%",
      linkedInUrl: "https://www.linkedin.com/in/riteshvermadev",
    },
    {
      id: "ayush",
      name: "Ayush Singh",
      initials: "AS",
      photoUrl: "/team/ayush.jpeg",
      objectPosition: "center 22%",
      linkedInUrl: "https://www.linkedin.com/in/maiayushsingh",
    },
    {
      id: "tarun",
      name: "Tarun Mani",
      initials: "TM",
      photoUrl: "/team/tarun.jpg",
      objectPosition: "45% 30%",
      linkedInUrl: "https://www.linkedin.com/in/tarun-mani-63bb093b9",
    },
    {
      id: "rishav",
      name: "Rishav Raj",
      initials: "RR",
      photoUrl: "/team/rishav.jpeg",
      objectPosition: "center 15%",
      linkedInUrl: "https://www.linkedin.com/in/rishav-raj-95bba1382",
    },
    {
      id: "aman",
      name: "Aman Agarwal",
      initials: "AA",
      photoUrl: "/team/aman.jpg",
      objectPosition: "center 18%",
      linkedInUrl: "https://www.linkedin.com/in/aman-agarwal-2b03b8370",
    },
  ],
};
