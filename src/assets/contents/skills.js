import c from "../images/skill/c.png";
import cplusplus from "../images/skill/cplusplus.png";
import csharp from "../images/skill/csharp.png";
import java from "../images/skill/java.png";
import javascript from "../images/skill/javascript.png";
import selenium from "../images/skill/selenium.png";
import appium from "../images/skill/appium.png";
import cucumber from "../images/skill/cucumber.png";
import apachemaven from "../images/skill/apachemaven.png";
import tailwindcss from "../images/skill/tailwindcss.png";
import react from "../images/skill/react.png";
import express from "../images/skill/express.png";
import node from "../images/skill/node.png";
import mongodb from "../images/skill/mongodb.png";
import mysql from "../images/skill/mysql.png";
import git from "../images/skill/git.png";
import arduino from "../images/skill/arduino.png";
import photoshop from "../images/skill/photoshop.png";
import php from "../images/skill/php.png";
import html5 from "../images/skill/html5.png";
import css3 from "../images/skill/css3.png";
import bootstrap from "../images/skill/bootstrap.png";
import materialui from "../images/skill/materialui.png";
import framermotion from "../images/skill/framermotion.png";
import vite from "../images/skill/vite.png";

export const skills = [
  {
    name: "My Programming Skills",
    tools: [
      { name: "C", img: c, level: 60, color: "bg-blue-600" },
      { name: "C++", img: cplusplus, level: 75, color: "bg-blue-700" },
      { name: "C#", img: csharp, level: 80, color: "bg-purple-600" },
      { name: "Java", img: java, level: 90, color: "bg-red-600" },
      {
        name: "JavaScript",
        img: javascript,
        level: 80,
        color: "bg-yellow-500",
      },
    ],
  },
  {
    name: "My Automation Test Skills",
    tools: [
      { name: "Selenium", img: selenium, level: 85, color: "bg-green-600" },
      { name: "Appium", img: appium, level: 75, color: "bg-teal-600" },
      { name: "Cucumber", img: cucumber, level: 85, color: "bg-green-700" },
      {
        name: "Apache Maven",
        img: apachemaven,
        level: 60,
        color: "bg-red-700",
      },
    ],
  },
  {
    name: "My Web Development Skills",
    tools: [
      {
        name: "Tailwind CSS",
        img: tailwindcss,
        level: 85,
        color: "bg-teal-500",
      },
      { name: "React", img: react, level: 90, color: "bg-blue-400" },
      { name: "Express", img: express, level: 60, color: "bg-gray-400" },
      { name: "Node", img: node, level: 60, color: "bg-green-700" },
      { name: "MongoDB", img: mongodb, level: 60, color: "bg-green-500" },
      { name: "MySQL", img: mysql, level: 60, color: "bg-blue-600" },
    ],
  },
  {
    name: "My Other Skills",
    tools: [
      { name: "Git", img: git, level: 85, color: "bg-orange-600" },
      { name: "Arduino", img: arduino, level: 65, color: "bg-blue-800" },
      { name: "Photoshop", img: photoshop, level: 65, color: "bg-blue-300" },
    ],
  },
];
