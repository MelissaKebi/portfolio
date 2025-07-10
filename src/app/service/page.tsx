// app/components/Services.tsx
import {
  FaCode,
  FaChalkboardTeacher,
  FaBook,
  FaLaptopCode,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-yellow-400 text-2xl" />,
    title: "Develop webapps based ReactJS/NextJS",
    description:
      "If you have a React-based project and quality is important to you, Contact me.",
  },
  {
    icon: <FaLaptopCode className="text-yellow-400 text-2xl" />,
    title: "Implement website templates",
    description: "Do you have any pure/HTML projects? contact to me.",
  },
  {
    icon: <FaBook className="text-yellow-400 text-2xl" />,
    title: "Create content and knowledge sharing",
    description:
      "Creating effective content for , German, English, and Farsi-speaking communities.",
  },
  {
    icon: <FaChalkboardTeacher className="text-yellow-400 text-2xl" />,
    title: "Mentorship sessions",
    description: "Mentoring front-end developers to grow and improve.",
  },
];

export default function Services() {
  return (
    <section className="min-h-screen w-full flex flex-col gap-16  bg-[#111] text-white px-6 py-12 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-yellow-400 font-bold mb-2">— Services</h2>
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
          What tasks am I doing right now?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-5 rounded-xl border border-gray-700 shadow hover:shadow-lg transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#222] rounded-full p-2">{service.icon}</div>
                <span className="text-lg font-semibold text-white">
                  {service.title}
                </span>
              </div>
              <p className="text-sm text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
