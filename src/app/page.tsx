// app/components/Hero.tsx
"use client";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="h-screen w-screen flex bg-[#111] text-white px-4">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-4xl space-y-4  flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-4 text-center md:text-left">
            <span className="bg-gray-800 text-yellow-400 px-3 py-1 rounded-full inline-block">
              Hi there 👋 My name is
            </span>
            <h1 className="text-4xl font-extrabold text-yellow-500">
              M. Kebriaei
            </h1>
            <h2 className="text-lg font-semibold text-white">
              Web-Developer | Software Engineer
            </h2>
            <p className="text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0 p-2">
              A junior web developer with a passion for both team and individual
              projects, currently gaining practical experience through an online
              Weiterbildung course at DCI (Digital Career Institute)...
            </p>
          </div>
          <div className="flex gap-4 text-2xl justify-center md:justify-start mt-4">
            <a
              href="https://linkedin.com/in/meli-ssa-a7474b274"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 cursor-pointer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/MelissaKebi"
              target="_blank"
              className="hover:text-yellow-400 cursor-pointer"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:kebriaei.malihe@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-400 cursor-pointer"
            >
              <FaEnvelope />
            </a>
          </div>
          <div>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2 bg-yellow-500 text-black rounded shadow hover:shadow-lg mt-6 font-semibold"
            >
              Download Resume ⬇️
            </a>
          </div>
        </div>

        <div className="relative">
          {/* Bild nur auf kleinen Bildschirmen (unter 768px), oben und zentriert */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-40 h-40 md:hidden">
            <div className="w-full h-full rounded-full border-4 border-yellow-500 overflow-hidden">
              <Image
                src="/Profilefoto.jpg"
                alt="Profilbild"
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Bild nur auf mittleren und großen Bildschirmen (ab 768px), rechts positioniert */}
          <div className="hidden md:flex md:justify-end md:items-start md:w-full md:h-auto">
            <div className="w-60 h-60 rounded-full border-4 border-yellow-500 overflow-hidden">
              <Image
                src="/Profilefoto.jpg"
                alt="Profilbild"
                width={240}
                height={240}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
