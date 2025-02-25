import { useState } from "react";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaInfoCircle } from "react-icons/fa";

export default function BottomNavbar() {
  const [active, setActive] = useState("Home");

  const navItems = [
    { title: "Home", href: "#home", icon: <FaHome /> },
    { title: "About", href: "#about", icon: <FaInfoCircle /> },
    { title: "Projects", href: "#projects", icon: <FaBriefcase /> },
    { title: "Contact", href: "#contact", icon: <FaEnvelope /> },
    { title: "Profile", href: "#profile", icon: <FaUser /> },
  ];

  return (
    <>
      <nav className="fixed z-10 bottom-0 left-0 w-full bg-gray-900 shadow-lg">
        <div className="flex justify-around items-center py-3">
          {navItems.map((item) => (
            <NavItem
              key={item.title}
              href={item.href}
              icon={item.icon}
              title={item.title}
              active={active === item.title}
              onClick={() => setActive(item.title)}
            />
          ))}
        </div>
      </nav>

      {/* CSS untuk animasi active glow */}
      <style jsx>{`
        @keyframes activeGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 255, 255, 0);
          }
          20% {
            box-shadow: 0 0 8px 4px rgba(0, 255, 255, 0.7);
          }
          40% {
            box-shadow: 0 0 0 0 rgba(0, 255, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 255, 255, 0);
          }
        }
        .active {
          animation: activeGlow 4s infinite;
        }
      `}</style>
    </>
  );
}

const NavItem = ({ href, icon, title, active, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group block px-3 py-2 rounded transition-all duration-300 hover:scale-110 ${
        active ? "active" : ""
      }`}
    >
      <div className="relative flex flex-col items-center text-blue-300">
        <div className="relative">
          <span className="text-2xl">{icon}</span>
          <div className="absolute inset-0 bg-blue-300 opacity-20 rounded-full blur-md"></div>
        </div>
        <span className="mt-1 text-sm font-semibold">{title}</span>
      </div>
    </a>
  );
};
