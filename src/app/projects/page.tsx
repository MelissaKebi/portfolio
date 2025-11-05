"use client";
import { link } from "fs";

// app/components/Experience.tsx
const experiences = [
  {
    role: " Accounting App",
    company: "Deep-Care.de",
    description: "Next.js, React, JWT, Tailwind Css",
    link: "https://accounting-app-olive.vercel.app/",
  },
  {
    role: " Final-Project",
    company: "DCI- Course",
    description: "Next.js, React, MongoDB + Mongoose, JWT, Tailwind Css",
    link: "https://liefrik.vercel.app/",
  },
  {
    role: " FullStack-Project",
    company: "DCI- Course",
    description: "Next.js, React, MongoDB + Mongoose, JWT, Tailwind Css",
    link: "https://be-final-project-opal.vercel.app/",
  },
  {
    role: " WeatherApp",
    company: "DCI- Course",
    description: "Html5, JavaScript, Css",
    link: "https://weather-app-beta-one-31.vercel.app/",
  },
  {
    role: " HoroscopeApp.js-Project",
    company: "DCI- Course",
    description: "JavaScript, npm",
    link: "https://github.com/MelissaKebi/horoscopeApp-js.git",
  },
  {
    role: " Astrology-html-Project",
    company: "DCI- Course",
    description: "html, css, scss",
    link: "https://astrologie.vercel.app/",
  },
];

export default function Experience() {
  return (
    <section className="min-h-screen w-full flex flex-col gap-16  bg-[#111] text-white px-6 py-12 md:px-16">
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-yellow-400 font-bold mb-2">
          — Experience and Projects
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
          Where are I have some Experiences?
        </h3>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-5 rounded shadow">
              <h3 className="text-xl font-semibold">
                <a href={exp.link} target="_blank">
                  {exp.role}- {exp.company}
                </a>
              </h3>
              {/* <span className="text-sm text-gray-400">{exp.period}</span> */}
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
