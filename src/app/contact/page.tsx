// app/components/ContactForm.tsx
"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center gap-6  bg-[#111] text-white px-6 py-12 md:px-16">
      <div className="w-full max-w-xl bg-gray-900 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">Contact Me</h2>
        <form
          action="https://formsubmit.co/kebriaei.malihe@gmail.com"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-yellow-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-2 rounded hover:bg-yellow-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="flex flex-col gap-2 text-gray-700">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faMobileAlt} />
          <span>+49 176 4229 5138</span>
        </div>
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>kebriaei.malihe@gmail.com</span>
        </div>
      </div>
    </section>
  );
}
