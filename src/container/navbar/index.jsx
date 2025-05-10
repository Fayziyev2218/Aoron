import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import { icons } from "../../utils/icons";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const icon = icons;
  return (
    <>
      <header
        className={`px-[16px]  mx-auto sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/50 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="kontainer py-[16px]">
          <nav className="flex items-center justify-between">
            <Link to={"/"}>
              <img className="w-[60px] h-[49px]" src={logo} alt="logo image" />
            </Link>

            <ul className="flex items-center justify-center gap-[32px] text-[15px] font-normal">
              <li className="hover:text-gray-500 font-inter font-medium text-[14px]">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="hover:text-gray-500 font-inter font-medium text-[14px]">
                <NavLink to={"/catalog"}>Catalog</NavLink>
              </li>
              <li className="hover:text-gray-500 font-inter font-medium text-[14px]">
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li className="hover:text-gray-500 font-inter font-medium text-[14px]">
                <NavLink to={"/news"}>News</NavLink>
              </li>
              <li className="hover:text-gray-500 font-inter font-medium text-[14px]">
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>

            <div className="flex items-center gap-3.5 text-[13px]">
              <span className="bg-black text-white px-2 py-0.5 rounded">
                EN
              </span>
              <span className="hover:bg-gray-100 cursor-pointer py-0.5 px-2 rounded">
                RU
              </span>
              <span className="hover:bg-gray-100 cursor-pointer py-0.5 px-2 rounded">
                DE
              </span>
              <NavLink to={"/cart"}>{icon.ShoppingBagIcon}</NavLink>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
