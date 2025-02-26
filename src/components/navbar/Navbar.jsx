import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link dari react-router-dom
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaInfoCircle } from "react-icons/fa";

export default function BottomNavbar() {
  const [active, setActive] = useState("Home");

  const navItems = [
    { title: "Home", href: "#home", icon: <FaHome /> },
    { title: "About", href: "/about", icon: <FaInfoCircle /> },
    { title: "Projects", href: "/projects", icon: <FaBriefcase /> },
    { title: "Contact", href: "/contact", icon: <FaEnvelope /> },
    { title: "Profile", href: "/profile", icon: <FaUser /> },
  ];

  return (
    <>
      <nav className="fixed z-10 bottom-0 left-0 w-full bg-gray-900 shadow-lg">
        <div className="flex justify-around items-center">
          {navItems.map((item) => (
            <NavItem
              key={item.title}
              to={item.href} // Ganti href menjadi to
              icon={item.icon}
              title={item.title}
              active={active === item.title}
              onClick={() => setActive(item.title)}
            />
          ))}
        </div>
      </nav>

    </>
  );
}

const NavItem = ({ to, icon, title, active, onClick }) => {
  return (
    <Link
      to={to} // Ganti href menjadi to
      onClick={onClick}
      className={`w-full h-full group block px-3 py-3 transition-all duration-300 border-2  ${
        active ? " border-blue-300 " : "border-transparent"
      }`}
    >
      <div className="relative flex gap-2 justify-center items-center text-blue-300">
        <div className="relative">
          <span className="text-xl">{icon}</span>
          <div className="absolute inset-0 bg-blue-300 opacity-20 rounded-full blur-md"></div>
        </div>
        <span className="mt-1 text-sm font-semibold">{title}</span>
      </div>
    </Link>
  );
};