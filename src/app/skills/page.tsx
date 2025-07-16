// app/components/Skills.tsx
"use client";
import { link } from "fs";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiSass,
  SiNextdotjs,
  SiFigma,
  SiMongodb,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 color="#E44D26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#264de4" /> },
  { name: "JavaScript", icon: <FaJs color="#f0db4f" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss color="#06B6D4" /> },
  { name: "SASS", icon: <SiSass color="#cc6699" /> },
  { name: "ReactJS", icon: <FaReact color="#61DBFB" /> },
  { name: "NextJS", icon: <SiNextdotjs color="white" /> },
  { name: "TypeScript", icon: <SiTypescript color="#007acc" /> },
  { name: "NPM/Yarn", icon: <FaNpm color="#CB3837" /> },
  { name: "MongoDB", icon: <SiMongodb color="#563d7c" /> },
  { name: "Git", icon: <FaGitAlt color="#f1502f" /> },
  { name: "Figma", icon: <SiFigma color="#A259FF" /> },
];

const Knowledge = [
  {
    role: "Web Developer",
    company: "DCI-(Digital Career Institute)",
    period: "Sep-2024 - Present",
    description:
      "Having successfully completed a full web development program, I am now well-prepared to begin my career as a Junior Web Developer",
    link: "https://digitalcareerinstitute.org/de/",
  },
  {
    role: "Computer Software Engineering",
    company: "Azad-Uni in Iran",
    period: "Sep 2007 -April 2012",
    description:
      "Bachelor's degree in Computer Engineering, specialized in Software Engineering",
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen w-full flex flex-col gap-16  bg-[#111] text-white px-6 py-12 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-yellow-400 font-bold mb-2">
          — My Knowledge and Skills Development
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
          What tools am I working right now?
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mt-4 md:items-start md:text-left md:text-xs">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-3 bg-gray-800 rounded-md shadow hover:scale-105 transition"
            >
              <div className="text-2xl md:text-left md:text-xs">
                {skill.icon}
              </div>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-yellow-400 font-bold mb-2">— Experience</h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
          Where have I worked or studied?
        </h3>
        <div className="space-y-6">
          {Knowledge.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800 p-5 rounded-md shadow-md hover:shadow-lg transition"
            >
              <h4 className="text-xl font-semibold">
                <a href={exp.link} target="_blank">
                  {exp.role}- {exp.company}
                </a>
              </h4>
              <span className="text-sm text-gray-400">{exp.period}</span>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
