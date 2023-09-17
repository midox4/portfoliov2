import React from "react";

import {
  FaPhoneAlt,
  FaUser,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";

import { BsDiscord } from "react-icons/bs";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";
import github from "../src/components/container/Skills/img/github.png";
import nextjs from "../src/components/container/Skills/img/nextjs.png";
import node from "../src/components/container/Skills/img/node.png";
import tailwind from "../src/components/container/Skills/img/tailwind.png";
import javascript from "../src/components/container/Skills/img/javascript.png";
import reactt from "../src/components/container/Skills/img/reactt.png";
import figma from "../src/components/container/Skills/img/figma.png";
import mongo from "../src/components/container/Skills/img/mongo.png";
import firebase from "../src/components/container/Skills/img/firebase.png";
import mui from "../src/components/container/Skills/img/mui.png";

export const navLinks = ["home", "about", "skills", "portfolio", "contact"];

export const socialIcons = [
<a href="https://github.com/midox4">  <FaGithub size={30}  /></a>, 
<a href="https://www.linkedin.com/in/hafsi-ahmed-91919460">  <FaLinkedin size={30}/></a>,
<a href="https://www.facebook.com/geniouspo">  <FaFacebook size={30} /></a>,
<a href="https://discord.com/channels/@me/1055028448516644884">  <BsDiscord size={30} /></a>,
];


export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Hafsi Ahmed",
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+216.99.148.651",
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "hafsi.ahmed@hotmail.fr",
  },
];


export const experiences = [
  {
    id: 1,
    year: "2023",
    position: "Back End Developer 🔬",
    company: "Tunisian Post",
  },
  {
    di: 2,
    year: "2021",
    position: "Front End Developer 💻",
    company: "Tunisian Post",
  },
  {
    id: 3,
    year: "2019",
    position: "Intern Web Developer",
    company: "TicApps-TBTI",
  },
];
export const finishes = [
  {
    id: 1,
    number: "3+",
    itemName: "Years Of Experience",
  },
  {
    id: 2,
    number: "150+",
    itemName: "Satisfied Customers",
  },
  {
    id: 3,
    number: "200+",
    itemName: "Designed Items",
  },
  {
    id: 4,
    number: "100+",
    itemName: "Clients Served",
  },
];
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "project 1",
    category: "web",
    git: 'https://github.com/midox4',
    demo: 'https://pandora-web.netlify.app/'

  },
  {
    id: 2,
    img: work2,
    name: "project 2",
    category: "web",
    git: 'https://github.com/midox4',
    demo: 'https://pandora-web.netlify.app/'
  },
  {
    id: 3,
    img: work3,
    name: "project 3",
    category: "web",
    git: 'https://github.com/midox4',

  },
  {
    id: 4,
    img: work4,
    name: "project 4",
    category: "app",
    git: 'https://github.com/midox4',

  },
  {
    id: 5,
    img: work5,
    name: "project 5",
    category: "app",
    git: 'https://github.com/midox4',

  },
  {
    id: 6,
    img: work6,
    name: "project 6",
    category: "design",
    git: 'https://github.com/midox4',

  },
];

export const workNavs = ["All", "Web", "App", "Design"];

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "05 Road 20 March, Kairouan Tunisia",
    url:'https://google.com'
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "hafsi.ahmed@hotmail.fr",
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+216.99.148.651",
  },
];

export const Images = [
  {
    id: 1,
    img: github,
  },
  {
    id: 2,
    img: nextjs,
  },
  {
    id: 3,
    img: node,
  },
  {
    id: 4,
    img: tailwind,
  },
  {
    id: 5,
    img: reactt,
  },
  {
    id: 6,
    img: javascript,
  },
  {
    id: 7,
    img: figma,
  },
  {
    id: 8,
    img: mui,
  },
  {
    id: 9,
    img: mongo,
  },
  {
    id: 10,
    img: firebase,
  },
];
