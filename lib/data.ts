import React from "react";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap, LuGlobe } from "react-icons/lu";
import Chatup from "@/public/chatup.png";
import Litt from "@/public/litt.png";
import Tensorboard from "@/public/tensorboard.png";
import Eset from "@/public/eset.png";
import EsetScienceAward from "@/public/eset-science-award.png";
import Builderio from "@/public/builderio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
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
    title: "Bachelor's Degree",
    location: "Bratislava, Slovakia",
    description:
      "I graduated with a Bachelor's degree in Computer Science from the Slovak University of Technology in Bratislava, Faculty of Electrical Engineering and Information Technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "ICT Support",
    location: "Bratislava, Slovakia",
    description:
      "Part-time ICT Support at Deutsche Telekom Pan-Net. I resolved technical issues with clients, deployed hardware via imaging, troubleshooted Wi-Fi and various operating systems, and maintained documentation.",
    icon: React.createElement(HiOutlineDevicePhoneMobile),
    date: "2020 - 2024",
  },
  {
    title: "Summer School",
    location: "Tainan, Taiwan",
    description:
      "I attended the 2022 Worldwide Universities Summer School at National Cheng Kung University, studying Sustainability and Semiconductor Manufacturing Technology.",
    icon: React.createElement(LuGlobe),
    date: "2022",
  },
  {
    title: "Engineer's Degree",
    location: "Bratislava, Slovakia",
    description:
      "I completed an Engineer's (Master's) degree in Computer Science at the Faculty of Electrical Engineering and Information Technology, Slovak University of Technology in Bratislava.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2024",
  },
  {
    title: "Front-End Developer",
    location: "Bratislava, Slovakia",
    description:
      "Frontend Developer at Zurich Insurance. I developed and maintained the UI for a web application using Vue, Nuxt and Vuetify, implemented tests, and tracked tasks in Jira.",
    icon: React.createElement(FaVuejs),
    date: "2023 - 2024",
  },
  {
    title: "Front-End Developer",
    location: "Bratislava, Slovakia",
    description:
      "Frontend Developer at ESET. I work on modern web applications, build reusable UI components, and collaborate with teams to deliver secure and performant user-facing features.",
    icon: React.createElement("img", {
      src: Eset.src,
      alt: "ESET",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        borderRadius: "9999px",
      },
    }),
    date: "2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "ESET Science Award Platform",
    description:
      "Full stack work on the ESET Science Award platform, covering the admin UI and scientist nomination forms.",
    tags: ["PHP", "Laravel"],
    imageUrl: EsetScienceAward,
  },
  {
    title: "ESET CMS Platform",
    description:
      "Built and maintained the admin UI for ESET's internal CMS, powering content across multiple web apps.",
    tags: ["GraphQL", "PHP", "Nuxt"],
    imageUrl: Eset,
  },
  {
    title: "Builder.io Web Platform",
    description:
      "Web platform built with Next.js, using the Builder.io API for visual, headless content management and page building.",
    tags: ["Next.js", "Builder.io"],
    imageUrl: Builderio,
  },
  {
    title: "Deep CNN",
    description:
      "I challenged myself with sport detection from images using deep learning techniques and CNN models.",
    tags: ["Python", "Keras", "Tensorflow", "pandas", "scikit-learn"],
    imageUrl: Tensorboard,
  },
  {
    title: "LITT GUI",
    description:
      "I contributed extensively to LITT's frontend development at Zurich Insurance.",
    tags: ["Vue", "Vuetify", "CSS", "Git", "Python", "Nuxt"],
    imageUrl: Litt,
  },
  {
    title: "ChatUp",
    description:
      "Developing the front-end of a chat application with real-time messaging functionality. I also explored parts of backend API.",
    tags: ["React", "Python", "MySQL", "Tailwind", "Git", "Flask"],
    imageUrl: Chatup,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MySQL",
  "Python",
  "Vue",
  "Vuetify",
  "Nuxt",
  "shadcn/ui",
  "GraphQL",
  "PHP",
  "Laravel",
  "Builder.io",
] as const;