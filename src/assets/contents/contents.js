import {
  c,
  cplusplus,
  csharp,
  java,
  javascript,
  selenium,
  appium,
  cucumber,
  apachemaven,
  playwright,
  tailwindcss,
  react,
  express,
  node,
  mongodb,
  mysql,
  git,
  arduino,
  photoshop,
  html5,
  css3,
  bootstrap,
  vite,
  eatwellwebsite,
  gifsharewebsite,
  onlinepalabawebsite,
  chowviwebsite
} from "./images";

export const pages = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "CONTACT", href: "/contact" },
];

export const socials = {
  linkedin: "https://linkedin.com/in/melchorcallos/",
  github: "https://github.com/melchie04",
  facebook: "https://facebook.com/melchorcallos",
};

export const home = {
  introduction: "Hi, I am ",
  nickname: "Mel.",
  typewriter: {
    words: ["A software tester", "A website developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  },
};

export const about = {
  title: "About Me",
  subtitle: "Who Am I?",
};

export const profile = {
  description:
    "Hey there! I'm a passionate developer and experienced tester who loves building cool stuff.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Melchor B. Callos",
    },
    {
      fieldName: "Position",
      fieldValue: "Software Tester",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ years",
    },
    {
      fieldName: "Skype",
      fieldValue: "melchorcallos04",
    },
    {
      fieldName: "Email",
      fieldValue: "melchorcallos04@gmail.com",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Filipino",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Tagalog",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
  ],
};

export const experiences = {
  description:
    "I've got a solid background with 5+ years in testing and development, plus tons of programming experience.",
  companies: [
    {
      name: "Leekie Enterprises, Inc.",
      position: "Software QA Tester",
      duration: "July 2023 - Present",
    },
    {
      name: "Alsons/Aws Information Systems, Inc.",
      position: "Software QA Engineer",
      duration: "August 2019 - August 2021",
    },
    {
      name: "Vertere Global Solutions, Inc.",
      position: "Programmer Analyst",
      duration: "January 2019 - May 2019",
    },
    {
      name: "JIO MHW Global Channel Manufacturing Corp.",
      position: "R&D Programmer",
      duration: "December 2017 - November 2018",
    },
  ],
};

export const education = {
  description:
    "I've had the amazing opportunity to gather knowledge from these great institutions and programs.",
  institutions: [
    {
      name: "Polytechnic University of the Philippines",
      degree: "BS in Information Technology",
      duration: "2014 - 2018",
    },
  ],
};

export const skills = {
  description:
    "I've built a strong foundation with these core skills and tools. ",
  skillList: [
    {
      icon: c,
      name: "C",
    },
    {
      icon: cplusplus,
      name: "C++",
    },
    {
      icon: csharp,
      name: "C#",
    },
    {
      icon: java,
      name: "Java",
    },
    {
      icon: javascript,
      name: "JavaScript",
    },
    {
      icon: selenium,
      name: "Selenium",
    },
    {
      icon: appium,
      name: "Appium",
    },
    {
      icon: cucumber,
      name: "Cucumber",
    },
    {
      icon: apachemaven,
      name: "Apache Maven",
    },
    {
      icon: playwright,
      name: "Playwright",
    },
    {
      icon: html5,
      name: "HTML5",
    },
    {
      icon: css3,
      name: "CSS3",
    },
    {
      icon: bootstrap,
      name: "Bootstrap",
    },
    {
      icon: tailwindcss,
      name: "Tailwind CSS",
    },
    {
      icon: vite,
      name: "Vite",
    },
    {
      icon: react,
      name: "React.JS",
    },
    {
      icon: node,
      name: "Node.js",
    },
    {
      icon: express,
      name: "Express.js",
    },
    {
      icon: mongodb,
      name: "MongoDB",
    },
    {
      icon: mysql,
      name: "MySQL",
    },
    {
      icon: arduino,
      name: "Arduino",
    },
    {
      icon: git,
      name: "Git",
    },
    {
      icon: photoshop,
      name: "Photoshop",
    },
  ],
};

export const portfolio = {
  title: "My Projects",
  subtitle: "What Have I Developed?",
};

export const projects = [
  {
    name: "EatWell",
    description:"Food Recipe Website",
    github: "https://github.com/melchie04/food-recipe-website",
    demo: "https://melchie04-eatwell.netlify.app/",
    image: eatwellwebsite,
  },
  {
    name: "GifShare",
    description:
      "GIF Sharing Website",
    github: "https://github.com/melchie04/gif-sharing-website",
    demo: "https://melchie04-gifshare.netlify.app/",
    image: gifsharewebsite,
  },
  {
    name: "Online Palaba",
    description:
      "Online Laundry Landing Page",
    github: "https://github.com/melchie04/online-palaba-website",
    demo: "https://melchie04-online-palaba.netlify.app/",
    image: onlinepalabawebsite,
  },
  {
    name: "ChowVi",
    description:
      "Food Delivery Landing Page",
    github: "https://github.com/melchie04/chowvi-website",
    demo: "https://melchie04-chowvi.netlify.app/",
    image: chowviwebsite,
  },
];

export const contact = {
  title: "Contact Me",
  subtitle: "Get In Touch?",
};
