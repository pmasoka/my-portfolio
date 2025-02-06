import {
  HiHome,
  HiMiniCubeTransparent,
  HiMiniCog,
  HiMiniNewspaper,
  HiMiniUserCircle,
} from "react-icons/hi2";

import ProjectImg4 from "@/public/img/project11.png";
import ProjectImg5 from "@/public/img/project12.png";
import ProjectImg6 from "@/public/img/project13.png";
import Logo1 from "@/public/img/logo1.png";
import Logo2 from "@/public/img/logo2.png";
import Logo3 from "@/public/img/logo3.png";
import Avatar1 from "@/public/img/avatar1.png";
import Avatar2 from "@/public/img/avatar2.png";
import Avatar3 from "@/public/img/avatar3.png";
import Avatar4 from "@/public/img/avatar4.png";
import Laravel from "@/public/svg/laravel.svg";
import React from "@/public/svg/react.svg";
import Vue from "@/public/svg/vue-9.svg";
import ViteJS from "@/public/svg/vitejs.svg";
import Python from "@/public/svg/python.svg";
import Node from "@/public/svg/node.svg";

export const navItems = [
  {
    name: "Home",
    href: "#home",
    icon: HiHome,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: HiMiniCubeTransparent,
  },
  {
    name: "Services",
    href: "#services",
    icon: HiMiniCog,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: HiMiniNewspaper,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: HiMiniUserCircle,
  },
];

export const projectsItems = [
  {
    title: "Metbank Internet Banking",
    image: ProjectImg4,
    slug: "metbank-internet-banking",
    description: "Metbank Internet Banking is a secure, user-focused web application that allows customers to manage their bank accounts from anywhere in the world",
    languages: ["Laravel 10", "JavaScript", "React", "Node.js"] 
  },
  {
    title: "Netflix Clone",
    image: ProjectImg5,
    slug: "netflix-clone",
    description: "Netflix Clone is a web application that replicates the core features of the popular streaming platform Netflix. The system has got 2 sides the frontend which is the user side and the backend side which is the admin side",
    languages: ["Laravel 11", "Filament", "Tailwind CSS", "mySQL"] 
  },
  {
    title: "OFF-Campus Housing Reservation System",
    image: ProjectImg6,
    slug: "off-campus-housing-reservation-system",
    description: "OFF-Campus Housing Reservation System is a platform designed to assist students in finding and reserving off-campus housing efficiently in Zimbabwe.",
    languages: ["Laravel 10", "Javascript", "mySQL", "Tailwind CSS"] 
  },
];


export const skillsItems = [
  {
    name: "Laravel",
    description:
      "Proficient in both back-end and front-end Laravel development.",
    logo: Laravel,
  },
  {
    name: "React",
    description:
      "Proficient in both back-end and front-end React development.",
    logo: React,
  },
  {
    name: "Vue",
    description:
      "I have basic knowledge of Vue.",
    logo: Vue,
  },
  {
    name: "ViteJS",
    description:
      "Proficient in ViteJS for building web applications..",
    logo: ViteJS,
  },
  {
    name: "Python",
    description:
      "I have basic knowledge of Python.",
    logo: Python,
  },
  {
    name: "NextJS",
    description:
      "Proficient in NextJS for building web applications.",
    logo: Python,
  },
];

export const servicesItems = [
  {
    title: "Web Development",
    description:
      "Experienced in full-stack development using Laravel, React, and ViteJS, with additional knowledge of Vue and NextJS.",
    logo: Logo1,
  },
  {
    title: "Mobile Development",
    description:
      "I have foundational knowledge of Flutter, enabling the creation of basic applications with features like login, registration and so on.",
    logo: Logo2,
  },
  {
    title: "Blockchain",
    description:
      "Familiar with blockchain concepts and Solidity, capable of developing smart contracts.",
    logo: Logo3,
  },
];

export const testimonialsItems = [
  {
    name: "Gomwe",
    review:
      "As a busy entrepreneur, I needed a website that was both professional and easy for me to update. I was impressed with Patrick's ability to understand my vision and deliver a site that perfectly reflects my brand. He was also incredibly patient in training me on how to manage the content myself. Highly recommend!",
    image: Avatar1,
  },
  {
    name: "Brighton Dube, Supervisor",
    review:
      "I have had the pleasure of supervising Patrick, and I can confidently say that he consistently delivers high-quality websites that meet deadlines. His attention to detail and commitment to client satisfaction are truly commendable. I highly recommend his services for anyone looking for a talented and reliable web developer.",
    image: Avatar2,
  },
  {
    name: "Tawanda",
    review:
      "I was struggling to create a portfolio website that would stand out to potential employers. The developer I worked with were incredibly helpful in guiding me through the design process and incorporating my feedback. The end result is a sleek and modern website that I'm proud to share with recruiters. Thanks to them, I landed my dream job!.",
    image: Avatar3,
  },
  {
    name: "Lizwe",
    review:
      "I was overwhelmed building an online rental system for my final year project. He guided me through the process, offering expertise and suggestions. I passed with flying colors and learned a lot. I'm incredibly grateful for his support",
    image: Avatar4,
  },
];
