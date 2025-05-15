import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "/logo.png";
import { icons } from "../../utils/icons";
import { IoMenuSharp } from "react-icons/io5";
import { TbXboxX } from "react-icons/tb";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const icon = icons;
  const [burger, setBurger] = useState(false);
  const { t, i18n } = useTranslation();

  const handBurger = () => setBurger(!burger);

  const handleLangChange = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", burger);
  }, [burger]);

  return (
    <>
      <header className="mx-auto sticky top-0 left-0 bg-gray-50 w-full z-50 transition-all duration-300">
        <div className="kontainer px-[16px] py-[16px]">
          <nav className="flex items-center justify-between">
            <Link to={"/"}>
              <img className="w-[60px] h-[49px]" src={logo} alt="logo image" />
            </Link>

            <ul className="max-md:hidden flex items-center justify-center gap-[32px] text-[15px] font-normal">
              <li className="hover:text-gray-500 font-inter font-medium text-[14px]">
                <NavLink to="/">{t("nav.home")}</NavLink>
              </li>
              <li className="hover:text-gray-500 font-inter font-medium text-[14px]">
                <NavLink to="/catalog">{t("nav.catalog")}</NavLink>
              </li>
              <li className="hover:text-gray-500 font-inter font-medium text-[14px]">
                <NavLink to="/about">{t("nav.about")}</NavLink>
              </li>
              <li className="hover:text-gray-500 font-inter font-medium text-[14px]">
                <NavLink to="/news">{t("nav.news")}</NavLink>
              </li>
              <li className="hover:text-gray-500 font-inter font-medium text-[14px]">
                <NavLink to="/contact">{t("nav.contact")}</NavLink>
              </li>
            </ul>

            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-3.5 text-[13px]">
                {["en", "ru", "de"].map((lng) => (
                  <span
                    key={lng}
                    onClick={() => handleLangChange(lng)}
                    className={`cursor-pointer py-0.5 px-2 rounded ${
                      i18n.language === lng ? "bg-black text-white" : "hover:bg-gray-100"
                    }`}
                  >
                    {lng.toUpperCase()}
                  </span>
                ))}
                <NavLink to={"/cart"}>{icon.ShoppingBagIcon}</NavLink>
              </div>
              <button className="hidden max-md:block" onClick={handBurger}>
                <IoMenuSharp className="w-[20px] h-[20px]" />
              </button>
            </div>
          </nav>
        </div>

        <div
          onClick={handBurger}
          className={`fixed top-0 backdrop-blur left-0 w-full h-screen z-10 bg-opacity-50 transition-opacity duration-300 ${
            burger ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        ></div>

        {/* Mobile menu */}
        <div
          className={`fixed top-0 right-0 w-[70%] h-screen bg-white z-20 p-4 transition-transform duration-500 ${
            burger ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button className="fixed top-[33px] right-[17px]" onClick={handBurger}>
            <TbXboxX className="w-[20px] h-[20px]" />
          </button>

          <ul className="flex flex-col gap-6 text-[15px] font-normal mt-[52px]">
            <li className="hover:text-gray-500 font-inter font-medium text-[14px]">
              <NavLink onClick={handBurger} to="/">{t("nav.home")}</NavLink>
            </li>
            <li className="hover:text-gray-500 font-inter font-medium text-[14px]">
              <NavLink onClick={handBurger} to="/catalog">{t("nav.catalog")}</NavLink>
            </li>
            <li className="hover:text-gray-500 font-inter font-medium text-[14px]">
              <NavLink onClick={handBurger} to="/about">{t("nav.about")}</NavLink>
            </li>
            <li className="hover:text-gray-500 font-inter font-medium text-[14px]">
              <NavLink onClick={handBurger} to="/news">{t("nav.news")}</NavLink>
            </li>
            <li className="hover:text-gray-500 font-inter font-medium text-[14px]">
              <NavLink onClick={handBurger} to="/contact">{t("nav.contact")}</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
