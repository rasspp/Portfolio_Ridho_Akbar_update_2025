import { FaUser, FaTools, FaLaptopCode, FaMedal } from "react-icons/fa";

export default function Profile() {
  return (
    <section id="profile" className="bg-gray-50 dark:bg-gray-900 min-h-screen px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row">
          {/* Vertical Navbar */}
          <div className="md:w-1/4 mb-8 md:mb-0">
            <ProfileNav />
          </div>

          {/* Main Content */}
          <div className="md:w-3/4 space-y-16">
            <ProfileHeader />
            <AboutSection />
            <SkillsSection />
            <TechStackSection />
            <AchievementsSection />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfileNav() {
  const navItems = [
    { label: "Profile", href: "#profile-header", icon: <FaUser /> },
    { label: "About", href: "#about", icon: <FaUser /> },
    { label: "Skills", href: "#skills", icon: <FaTools /> },
    { label: "Tech Stack", href: "#tech-stack", icon: <FaLaptopCode /> },
    { label: "Achievements", href: "#achievements", icon: <FaMedal /> },
  ];

  return (
    <nav className="sticky top-10 bg-gray-900 rounded-lg p-4 shadow-lg">
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="flex items-center gap-2 text-blue-300 hover:text-blue-500 transition-colors"
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-sm font-semibold">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ProfileHeader() {
  return (
    <div id="profile-header" className="text-center">
      <img
        src="/path-to-your-profile-photo.jpg"
        alt="Profil Saya"
        className="mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-500 shadow-xl transition-transform duration-300 hover:scale-105"
      />
      <h1 className="mt-4 text-3xl font-extrabold text-gray-900 dark:text-white">
        [Nama Anda]
      </h1>
      <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
        [Tagline atau profesi Anda]
      </p>
    </div>
  );
}

function AboutSection() {
  return (
    <section id="about" className="px-4">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        Tentang Saya
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
        [Deskripsi singkat tentang diri Anda, pengalaman, dan keahlian. Ceritakan kisah Anda dengan nada personal namun profesional, sehingga pengunjung langsung mengenal siapa Anda dan apa yang Anda tawarkan.]
      </p>
    </section>
  );
}

function SkillsSection() {
  const skills = ["UI/UX Design", "React", "Tailwind CSS", "JavaScript", "Node.js"];
  return (
    <section id="skills" className="px-4">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        Skills
      </h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, idx) => (
          <span
            key={idx}
            className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function TechStackSection() {
  const techStack = ["React", "Next.js", "Node.js", "GraphQL", "Tailwind CSS"];
  return (
    <section id="tech-stack" className="px-4">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        Tech Stack Unggulan
      </h2>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        {techStack.map((tech, idx) => (
          <li key={idx} className="text-sm">
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}

function AchievementsSection() {
  const achievements = [
    "Pemenang Lomba Desain 2023",
    "5+ tahun pengalaman di industri kreatif",
    "Portfolio dengan klien internasional",
  ];
  return (
    <section id="achievements" className="px-4">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
        Prestasi & Pencapaian
      </h2>
      <ul className="space-y-2 text-gray-700 dark:text-gray-300">
        {achievements.map((ach, idx) => (
          <li key={idx} className="text-sm">• {ach}</li>
        ))}
      </ul>
    </section>
  );
}
