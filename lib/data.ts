import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Developer",
    location: "xxx – Bandar Lampung",
    description: [
      "Developed a web application using SQL Server and PHP, reducing transaction processing time by 30%.",
      "Conducted comprehensive System Integration Testing (SIT) and User Acceptance Testing (UAT) to ensure system quality and security.",
      "Created detailed system documentation to support future maintenance and development.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 – Present",
  },
  {
    title: "Sekretaris",
    location: "ASIAFI Lampung – Bandar Lampung",
    description: [
      "Verified the identities of involved parties and ensured signatures were provided voluntarily and lawfully.",
      "Provided legal advice and guidance to clients regarding the documents to be drafted.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2020 – Jan 2023",
  },
  {
    title: "Asisten Notaris",
    location: "Notaris – Bandar Lampung",
    description: [
      "Assisted the notary in drafting deeds and organizing legal documents.",
      "Managed notarial archives, including deeds and registers, while ensuring confidentiality.",
      "Acted as a liaison between the notary and clients, maintaining effective communication.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Sept 2014 – Sept 2015",
  },
  {
    title: "Bidang Pembudayaan Olahraga (Internship)",
    location: "DISPORA – Prov. Lampung",
    description: [
      "Prepared necessary tools and materials to ensure the smooth execution of meetings.",
      "Compiled archive reports and maintained documentation of vehicle rentals.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2020 – Jan 2023",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Strong communication & teamwork",
  "PHP",
  "Server Management Studio (SSMS)",
  "Problem-solving",
  "Analytical thinking",
] as const;
