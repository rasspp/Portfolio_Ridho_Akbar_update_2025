export default function About() {
  return (
    <section id="about" className="relative px-6 py-20 md:px-0 bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-5xl text-center">
        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img 
              src="/path-to-your-image.jpg" 
              alt="Profil Saya"
              className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              [Deskripsi singkat tentang diri Anda, pengalaman, dan keahlian.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}