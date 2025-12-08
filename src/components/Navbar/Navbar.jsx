import { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiChevronDown, HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import MPCOLogo from "../../../public/MPCOLogo.svg";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

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

          <li><Link>تواصل معنا</Link></li>
          <li><Link to='/aboutus'>من نحن</Link></li>

          {/* Dropdown (Desktop Only) */}
          <li
            className="relative"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer">
              الخدمات <HiChevronDown />
            </div>

            {openDropdown && (
              <div className="absolute right-0 bg-white shadow-lg rounded-md mt-2 w-40 text-right py-2 animate-fadeIn">
                <Link className="block px-4 py-2 hover:bg-gray-100">منتجات الغسيل</Link>
                <Link className="block px-4 py-2 hover:bg-gray-100">منتجات التنظيف</Link>
                <Link className="block px-4 py-2 hover:bg-gray-100">منتجات المنزل</Link>
              </div>
            )}
          </li>

          <li><Link>الرئيسة</Link></li>
        </ul>

        {/* Logo */}
        <div>
          <img src={MPCOLogo} alt="logo" className="h-12" />
        </div>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpenMobile(!openMobile)}
        >
          <HiMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
{openMobile && (
  <div className="md:hidden bg-white shadow-inner mt-3 rounded p-4 text-right space-y-4 text-lg">

    <Link className="block">تواصل معنا</Link>
    <Link className="block" to='/aboutus'>من نحن</Link>
    <Link className="block" to="/">الرئيسة</Link>

    {/* Mobile Dropdown — aligned right */}
    <div className="mt-2">
      <div
        className="flex items-center gap-1 cursor-pointer pb-2 justify-end"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        الخدمات <HiChevronDown />
      </div>

      {openDropdown && (
        <div className="mt-2 space-y-2 pr-4 text-gray-700">
          <Link className="block">منتجات الغسيل</Link>
          <Link className="block">منتجات التنظيف</Link>
          <Link className="block">منتجات المنزل</Link>
        </div>
      )}
    </div>

  </div>
)}

    </nav>
  );
}
