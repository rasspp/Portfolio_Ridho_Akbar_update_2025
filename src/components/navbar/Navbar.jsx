import { FaHome, FaGamepad, FaShoppingCart, FaUser, FaFire } from "react-icons/fa";

export default function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-700 to-purple-700 shadow-lg">
      <div className="flex justify-around items-center py-3">
        {/* Home */}
        <NavItem icon={<FaHome />} title="Home" />
        {/* Battle */}
        <NavItem icon={<FaFire />} title="Battle" />
        {/* Shop */}
        <NavItem icon={<FaShoppingCart />} title="Shop" />
        {/* Heroes */}
        <NavItem icon={<FaGamepad />} title="Heroes" />
        {/* Profile */}
        <NavItem icon={<FaUser />} title="Profile" />
      </div>
    </nav>
  );
}

const NavItem = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center text-white cursor-pointer transition-all duration-300 hover:scale-110">
      <div className="relative">
        <span className="text-2xl">{icon}</span>
        <div className="absolute inset-0 bg-blue-500 opacity-20 rounded-full blur-md"></div>
      </div>
      <span className="mt-1 text-sm font-semibold">{title}</span>
    </div>
  );
};
