export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}
    >
      {/* Overlay Blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center text-white px-6 md:px-12">
        <h1 className="mb-4 text-5xl font-extrabold md:text-6xl animate-fade-in">
          Halo, Saya <span className="text-blue-400">Ridho Akbar</span>
        </h1>
        <p className="mb-6 text-lg md:text-2xl text-gray-200 animate-slide-up">
          FullStack Developer (MERN Stack)
        </p>
        <a
          href="#projects"
          className="inline-block rounded-lg bg-blue-500 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105 animate-fade-in"
        >
          Lihat Proyek Saya
        </a>
      </div>
    </section>
  );
}
