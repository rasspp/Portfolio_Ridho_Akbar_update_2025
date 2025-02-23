export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
        <div className="bg-white bg-opacity-75 dark:bg-gray-800 dark:bg-opacity-75 p-10 rounded-lg shadow-lg text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Halo, Saya [Nama Anda]</h1>
          <p className="text-lg md:text-2xl mb-6">[Profesi atau keahlian Anda]</p>
          <a href="#projects" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">Lihat Proyek Saya</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 md:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Tentang Saya</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            [Deskripsi singkat tentang diri Anda, pengalaman, dan keahlian.]
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-100 dark:bg-gray-800 px-4 md:px-0">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">Proyek Saya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <img src="/path-to-project-image.jpg" alt="Proyek 1" className="w-full h-56 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Judul Proyek 1</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Deskripsi singkat tentang proyek ini.</p>
                <a href="#" className="text-blue-500 hover:underline">Lihat Detail</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Kontak</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">Ingin bekerja sama? Hubungi saya melalui form di bawah ini.</p>
          <form className="space-y-4">
            <div>
              <input type="text" placeholder="Nama" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" />
            </div>
            <div>
              <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" />
            </div>
            <div>
              <textarea placeholder="Pesan" className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition-colors duration-300">Kirim</button>
          </form>
        </div>
      </section>
    </div>
  );
}
