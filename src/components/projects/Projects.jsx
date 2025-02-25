export default function Projects() {
  // Data proyek dalam bentuk array objek
  const projects = [
    {
      id: 1,
      title: "Website Portfolio",
      description: "Website portofolio dengan desain modern dan responsif.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      id: 2,
      title: "E-Commerce App",
      description: "Aplikasi e-commerce untuk menjual produk digital.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      id: 3,
      title: "Game Mobile",
      description: "Game mobile dengan mekanik unik dan grafik menarik.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 dark:bg-gray-900 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Judul */}
        <h2 className="mb-12 text-center text-4xl font-extrabold text-gray-900 dark:text-white">
          Proyek Saya
          <span className="block mt-2 h-1 w-16 bg-blue-500 mx-auto"></span>
        </h2>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              {/* Gambar */}
              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Konten */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-block text-blue-500 font-medium transition-all duration-300 hover:underline hover:text-blue-600"
                >
                  Lihat Detail →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
