import siteContent from "../data/siteContent.json";
import {
  eatwellwebsite,
  gifsharewebsite,
  onlinepalabawebsite,
  chowviwebsite,
} from "./images";

const imageMap = {
  eatwellwebsite,
  gifsharewebsite,
  onlinepalabawebsite,
  chowviwebsite,
};

export const pages = siteContent.pages;
export const socials = siteContent.socials;
export const home = siteContent.home;
export const about = siteContent.about;
export const profile = siteContent.profile;
export const experiences = siteContent.experiences;
export const education = siteContent.education;
export const skills = siteContent.skills;
export const works = siteContent.works;
export const contact = siteContent.contact;

export const projects = siteContent.projects.map((project) => ({
  ...project,
  image: imageMap[project.imageKey],
}));
