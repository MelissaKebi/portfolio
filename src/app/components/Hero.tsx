// app/components/Hero.tsx
"use client";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen w-full bg-[#111] text-white px-6 py-12 md:px-8 flex items-center">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        {/* 📱 تصویر در بالا در موبایل، در راست در دسکتاپ */}
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-yellow-500 overflow-hidden md:order-2">
          <Image
            src="/Profilefoto.jpg"
            alt="Profilbild"
            width={240}
            height={240}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex-1 text-center md:text-left space-y-6 md:order-1">
          <div className="space-y-4">
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
          <div className="flex justify-center md:justify-start gap-4 text-2xl mt-4">
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
      </div>
    </section>
  );
}
