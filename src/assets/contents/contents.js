import {
  eatwellwebsite,
  gifsharewebsite,
  onlinepalabawebsite,
  chowviwebsite,
} from "./images";

export const pages = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "WORKS", href: "/works" },
  { name: "CONTACT", href: "/contact" },
];

export const socials = {
  linkedin: "https://linkedin.com/in/melchorcallos/",
  github: "https://github.com/melchie04",
  gmail: "mailto:melchorcallos04@gmail.com",
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
      name: "Octagon Express Group",
      position: "Software Quality Tester - Automation",
      duration: "July 2023 - Present",
      details: [
        "Engineered and managed automated test scripts using Selenium, Appium, and Playwright for end-to-end testing across web and mobile platforms.",
        "Optimized quality monitoring by integrating tests into Jenkins, resulting in faster analysis and detailed issue reporting for all project stakeholders.",
      ],
    },
    {
      name: "Alsons/Aws Information Systems, Inc.",
      position: "Software QA Engineer",
      duration: "August 2019 - August 2021",
      details: [
        "Functioned as a unit tester, performing detailed white box testing and achieving high code coverage using industry tools like CoverageMaster winAMS.",
        "Contributed to the full testing lifecycle by analyzing specifications and designing test cases, resulting in improved bug reporting and overall test planning.",
      ],
    },
    {
      name: "Vertere Global Solutions, Inc.",
      position: "Programmer Analyst",
      duration: "January 2019 - May 2019",
      details: [
        "Joined a bootcamp to gain hands-on experience in mainframe programming, establishing a technical foundation for enterprise software development.",
      ],
    },
    {
      name: "JIO MHW Global Channel Manufacturing Corp.",
      position: "R&D Programmer",
      duration: "August 2018 - November 2018",
      details: [
        "Developed and maintained a desktop application while researching ways to improve its performance, resulting in enhanced application features.",
      ],
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
      duration: "June 2014 - April 2018",
      details: [
        "Capstone: Enrollment & Billing System - Child Formation Center, Santa Rosa City, Laguna",
        "Grade: General Weighted Average (GWA): 2.071",
        "1st Place in Programming Language Contest in IT Week of PUP Santa Rosa (2015)",
        "2nd Place in Programming Language Contest in IT Week of PUP Santa Rosa (2016)",
      ],
    },
  ],
};

export const skills = {
  description:
    "I've built a strong foundation with these core skills and tools. ",
  skillList: [
    {
      name: "Java",
    },
    {
      name: "JavaScript",
    },
    {
      name: "TypeScript",
    },
    {
      name: "C#",
    },
    {
      name: "C",
    },
    {
      name: "C++",
    },
    {
      name: "Selenium",
    },
    {
      name: "Playwright",
    },
    {
      name: "Appium",
    },
    {
      name: "Cucumber",
    },
    {
      name: "Jenkins",
    },
    {
      name: "GitHub",
    },
    {
      name: "React.Js",
    },
    {
      name: "Node.Js",
    },
    {
      name: "Express.Js",
    },
    {
      name: "MySQL",
    },
    {
      name: "Arduino",
    },
    {
      name: "MS Excel",
    },
    {
      name: "N8N",
    },
  ],
};

export const works = {
  title: "My Works",
  subtitle: "What Have I Developed?",
};

export const projects = [
  {
    name: "EatWell",
    description: "Food Recipe Website",
    github: "https://github.com/melchie04/food-recipe-website",
    demo: "https://melchie04-eatwell.netlify.app/",
    image: eatwellwebsite,
    tools: ["React", "Material UI", "TheMealDB API", "Vite"],
    details:
      "This is a food recipe website that helps users find a variety of delicious meals and learn how to create them. Each recipe includes a list of ingredients, step-by-step instructions, and videos to help the user make the dish they want.",
  },
  {
    name: "GifShare",
    description: "GIF Sharing Website",
    github: "https://github.com/melchie04/gif-sharing-website",
    demo: "https://melchie04-gifshare.netlify.app/",
    image: gifsharewebsite,
    tools: ["React", "Material UI", "Giphy API", "Vite"],
    details:
      "This is a GIF sharing website that allows users to share animated images, also known as GIFs, with their friends and family by posting them on social media sites like Facebook and Twitter.",
  },
  {
    name: "Online Palaba",
    description: "Online Laundry Landing Page",
    github: "https://github.com/melchie04/online-palaba-website",
    demo: "https://melchie04-online-palaba.netlify.app/",
    image: onlinepalabawebsite,
    tools: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    details:
      "This is a landing page website that showcases what the brand is all about and gives a glimpse into the type of experience customers can expect when they visit us. Online Palaba is a laundry services and logistics business concept that my friend and I have always dreamed of building someday.",
  },
  {
    name: "ChowVi",
    description: "Food Delivery Landing Page",
    github: "https://github.com/melchie04/chowvi-website",
    demo: "https://melchie04-chowvi.netlify.app/",
    image: chowviwebsite,
    tools: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    details:
      "This is a landing page website that showcases what the brand is all about and gives a glimpse into the type of experience customers can expect when they visit us. Chowvi is a food delivery and fast food business concept that I have always dreamed of building someday.",
  },
];

export const contact = {
  title: "Contact Me",
  subtitle: "Get In Touch?",
};
