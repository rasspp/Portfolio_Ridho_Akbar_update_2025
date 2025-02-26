import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 py-20 bg-gray-100 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-3xl text-center">
        {/* Grid ikon kontak */}
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

        {/* Area tambahan untuk mengisi ruang kosong */}
        <div className="mt-12 flex flex-col items-center">
          <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">
            Ingin mendapatkan update terbaru? Daftarkan email Anda!
          </p>
          <div className="w-full max-w-sm flex">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="w-full rounded-l-lg border border-gray-300 bg-white p-3 text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:outline-none"
            />
            <button className="rounded-r-lg bg-blue-500 px-4 py-3 text-white transition-all duration-300 hover:bg-blue-600">
              Daftar
            </button>
          </div>
        </div>
      </div>
      {/* Opsional: Tambahkan elemen dekoratif di background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/path-to-pattern.svg')] bg-repeat" />
    </section>
  );
}
