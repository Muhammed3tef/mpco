import { useState, useRef, useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiChevronDown, HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import MPCOLogo from "../../../public/MPCOLogo.svg";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const dropdownRef = useRef(null);

  const closeMobileMenu = () => {
    setOpenMobile(false);
    setOpenDropdown(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="w-full bg-white shadow-sm p-3 fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between md:justify-around">

        {/* WhatsApp — hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 text-green-600 text-lg">
          <IoLogoWhatsapp />
          <a href="tel:+962796989278">+9627 9698 9278</a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-medium">

          <li className="hover:bg-primary-200 transition-all px-1 py-1 rounded-md">
            <Link to="/contactus">تواصل معنا</Link>
          </li>

          <li className="hover:bg-primary-200 transition-all px-1 py-1 rounded-md">
            <Link to="/aboutus">من نحن</Link>
          </li>

          {/* Dropdown (Desktop Only) */}
          <li
            className="relative hover:bg-primary-200 transition-all rounded-md"
            ref={dropdownRef}
          >
            <div
              className="flex items-center gap-1 cursor-pointer px-1 py-1 rounded-lg transition-all duration-300"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              الخدمات
              <HiChevronDown
                className={`transition-transform duration-300 ${
                  openDropdown ? "rotate-180" : ""
                }`}
              />
            </div>

            {openDropdown && (
              <div className="absolute right-0 mt-2 w-52 bg-[#105b89] text-white shadow-lg rounded-2xl overflow-hidden text-right">
                <Link
                  className="block px-5 py-3 hover:bg-neutral-50 hover:text-black"
                  to="/privatelabelservices"
                >
                  خدمات التعبئة والتغليف للغير (Private Label)
                </Link>
                <Link
                  className="block px-5 py-3 hover:bg-neutral-50 hover:text-black"
                  to="/innovativeformulations"
                >
                  تطوير تركيبات مبتكرة
                </Link>
                <Link
                  className="block px-5 py-3 hover:bg-neutral-50 hover:text-black"
                  to="/homecleaningproducts"
                >
                  تصنيع المنظفات المنزلية
                </Link>
              </div>
            )}
          </li>

          <li className="hover:bg-primary-200 transition-all px-1 py-1 rounded-md">
            <Link to="/">الرئيسة</Link>
          </li>
        </ul>

        {/* Logo */}
        <div>
          <img src={MPCOLogo} alt="logo" className="h-12" />
        </div>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-3xl cursor-pointer"
          onClick={() => setOpenMobile(!openMobile)}
        >
          <HiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {openMobile && (
        <div className="md:hidden bg-white shadow-inner mt-3 rounded p-4 text-right space-y-4 text-lg">

          <Link
            to="/contactus"
            onClick={closeMobileMenu}
            className="block hover:bg-primary-200 transition-all px-1 py-1 rounded-md"
          >
            تواصل معنا
          </Link>

          <Link
            to="/aboutus"
            onClick={closeMobileMenu}
            className="block"
          >
            من نحن
          </Link>

          <Link
            to="/"
            onClick={closeMobileMenu}
            className="block"
          >
            الرئيسة
          </Link>

          {/* Mobile Dropdown */}
          <div className="mt-2" ref={dropdownRef}>
            <div
              className="flex items-center gap-1 cursor-pointer pb-2 justify-end p-2 rounded-lg transition-all duration-300"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              الخدمات
              <HiChevronDown
                className={`transition-transform duration-300 ${
                  openDropdown ? "rotate-180" : ""
                }`}
              />
            </div>

            {openDropdown && (
              <div className="mt-2 bg-[#105b89] text-white shadow-lg rounded-2xl overflow-hidden text-right">
                <Link
                  to="/privatelabelservices"
                  onClick={closeMobileMenu}
                  className="block px-5 py-3 hover:bg-neutral-50 hover:text-black"
                >
                  خدمات التعبئة والتغليف للغير (Private Label)
                </Link>
                <Link
                  to="/innovativeformulations"
                  onClick={closeMobileMenu}
                  className="block px-5 py-3 hover:bg-neutral-50 hover:text-black"
                >
                  تطوير تركيبات مبتكرة
                </Link>
                <Link
                  to="/homecleaningproducts"
                  onClick={closeMobileMenu}
                  className="block px-5 py-3 hover:bg-neutral-50 hover:text-black"
                >
                  تصنيع المنظفات المنزلية
                </Link>
              </div>
            )}
          </div>

        </div>
      )}
    </nav>
  );
}
