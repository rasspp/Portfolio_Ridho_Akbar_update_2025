import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-20 bg-gray-100 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl text-center">
        {/* Judul */}
        <h2 className="mb-6 text-4xl font-extrabold text-gray-900 dark:text-white">
          Hubungi Saya
          <span className="block mt-2 h-1 w-16 bg-blue-500 mx-auto"></span>
        </h2>
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          Tersedia di berbagai platform, silakan pilih yang paling nyaman bagi Anda.
        </p>

        {/* List Kontak */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Email */}
          <a
            href="mailto:email@example.com"
            className="flex items-center gap-3 rounded-lg bg-white px-6 py-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-800 dark:text-white"
          >
            <FaEnvelope className="text-blue-500 text-xl" />
            <span>Email</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg bg-white px-6 py-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-800 dark:text-white"
          >
            <FaWhatsapp className="text-green-500 text-xl" />
            <span>WhatsApp</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg bg-white px-6 py-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-800 dark:text-white"
          >
            <FaLinkedin className="text-blue-700 text-xl" />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg bg-white px-6 py-3 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-800 dark:text-white"
          >
            <FaGithub className="text-gray-900 dark:text-white text-xl" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
