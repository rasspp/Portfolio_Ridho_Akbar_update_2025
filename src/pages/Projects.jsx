import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Daftar kategori filter
  const filters = ["All", "Web", "Game"];

  // Data proyek dengan properti tambahan
  const projects = [
    {
      id: 1,
      title: "Website Portfolio",
      description: "Website portofolio dengan desain modern dan responsif.",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "#",
      category: "Web",
      isPrivate: false,
      githubLink: "https://github.com/username/website-portfolio",
      tags: ["React", "Tailwind", "JavaScript"],
    },
    {
      id: 2,
      title: "E-Commerce App",
      description: "Aplikasi e-commerce untuk menjual produk digital.",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "#",
      category: "Web",
      isPrivate: false,
      githubLink: "https://github.com/username/e-commerce-app",
      tags: ["React", "Node.js", "Express"],
    },
    {
      id: 3,
      title: "Game Mobile",
      description: "Game mobile dengan mekanik unik dan grafik menarik.",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "#",
      category: "Game",
      isPrivate: true,
      githubLink: null, // Karena proyek private, tidak ada link GitHub
      tags: ["Unity", "C#"],
    },
    {
      id: 4,
      title: "Mobile App Design",
      description:
        "Desain antarmuka aplikasi mobile dengan user experience yang maksimal.",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "#",
      category: "Game",
      isPrivate: false,
      githubLink: "https://github.com/username/mobile-app-design",
      tags: ["Figma", "UI/UX"],
    },
    {
      id: 5,
      title: "Mobile App Design",
      description:
        "Desain antarmuka aplikasi mobile dengan user experience yang maksimal.",
      image:
        "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3",
      link: "#",
      category: "Game",
      isPrivate: false,
      githubLink: "https://github.com/username/mobile-app-design2",
      tags: ["Sketch", "Prototyping"],
    },
    // Tambahkan proyek lain sesuai kebutuhan...
  ];

  // Filter proyek berdasarkan kategori yang dipilih
  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  return (
    <section id="projects" className="bg-gray-100 dark:bg-gray-900 px-6 pt-5 pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex">
          {/* Vertical Filter Navbar (hanya tampil di desktop) */}
          <div className="hidden md:block md:w-1/12">
            <VerticalFilter
              filters={filters}
              selectedFilter={selectedFilter}
              onFilterChange={setSelectedFilter}
            />
          </div>

          {/* Area Proyek */}
          <div className="w-full md:w-11/12">
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 lg:grid-cols-5">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const VerticalFilter = ({ filters, selectedFilter, onFilterChange }) => {
  return (
    <nav className="bg-gray-900 shadow-lg rounded p-2 sticky top-5">
      <ul className="flex flex-col space-y-2">
        {filters.map((filter) => (
          <li key={filter}>
            <button
              onClick={() => onFilterChange(filter)}
              className={`w-full text-left px-3 py-2 rounded transition-all duration-300 hover:scale-105 ${
                selectedFilter === filter
                  ? "border-l-4 border-blue-300 bg-gradient-to-r from-blue-950 to-blue-900"
                  : "border-l-4 border-transparent"
              }`}
            >
              <span className="text-xs font-semibold text-blue-300">{filter}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      {/* Gambar */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full object-cover transition-transform duration-300 group-hover:filter saturate-100 hover:saturate-50"
      />
      {/* Konten */}
      <div className="p-2">
        <h3 className="mb-2 text-base font-semibold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mb-2 text-xs text-gray-600 dark:text-gray-300">{project.description}</p>
        {/* Daftar Tags */}
        {project.tags && (
          <div className="flex flex-wrap gap-1 mb-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {/* Icon untuk Detail dan GitHub */}
        <div className="flex gap-3">
          {/* Icon Detail */}
          <a
            href={project.link}
            className="text-blue-500 transition-all duration-300 hover:text-blue-600"
            title="Detail Proyek"
          >
            <FaExternalLinkAlt size={14} />
          </a>
          {/* Tampilkan icon GitHub jika proyek tidak private */}
          {!project.isPrivate && project.githubLink && (
            <a
              href={project.githubLink}
              className="text-blue-500 transition-all duration-300 hover:text-blue-600"
              title="Lihat Repository"
            >
              <FaGithub size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
