import React from "react";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Chatup from "@/public/chatup.png";
import Litt from "@/public/litt.png";
import Tensorboard from "@/public/tensorboard.png";

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
      "I graduated with a Bachelor of Computer Science from the Slovak University of Technology in Bratislava, Faculty of Informatics and Information Technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "ICT Support",
    location: "Bratislava, Slovakia",
    description:
      "I am working as ICT Support for 3 years. I am responsible for the maintenance of the company's IT infrastructure.",
    icon: React.createElement(HiOutlineDevicePhoneMobile),
    date: "2020 - present",
  },
  {
    title: "Master's Degree",
    location: "Bratislava, Slovakia",
    description:
      "I am currently studying for a Master's degree in Computer Science at the Slovak University of Technology in Bratislava, Faculty of Informatics and Information Technologies.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  {
    title: "Front-End Developer",
    location: "Bratislava, Slovakia",
    description:
      "I am also now working as a front-end developer. I worked with Vue,Nuxt and Vuetify library.",
    icon: React.createElement(FaVuejs),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ChatUp",
    description:
      "Developing the front-end of a chat application with real-time messaging functionality. I also explored parts of backend API.",
    tags: ["React", "Python", "MySQL", "Tailwind", "Git", "Flask"],
    imageUrl: Chatup,
  },
  {
    title: "LITT GUI",
    description:
      "I contributed extensively to LITT's frontend development at Zurich Insurance.",
    tags: ["Vue", "Vuetify", "CSS", "Git", "Python", "Nuxt"],
    imageUrl: Litt,
  },
  {
    title: "Deep CNN",
    description:
      "I challenged myself with sport detection from images. This involved deep learning models.",
    tags: ["Python", "Keras", "Tensorflow", "pandas", "scikit-learn"],
    imageUrl: Tensorboard,
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
] as const;
