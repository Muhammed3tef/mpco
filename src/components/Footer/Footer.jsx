import React from 'react'
import { GrLocation } from 'react-icons/gr'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdMailOutline } from 'react-icons/md'
import { HiOutlineChevronLeft } from "react-icons/hi";
import logoFooter from '../../../public/logoFooter.svg'
import { Link } from 'react-router-dom';

const Footer =  () => {
  return (
   <div className="w-full bg-primary-500 text-white px-6 py-12">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">

  
    <div className="flex flex-col gap-4 text-center md:text-right">
      <h2 className="text-2xl font-bold mb-4">تواصل معنا</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-3 justify-center md:justify-end">
        <p className="text-xl">أبو علنده – عمان – الأردن</p>
        <GrLocation className="w-[32px] h-[38px]" />
      </div>

      <div className="flex items-center justify-center md:justify-end gap-2">
        <a href="mailto:info@mpcojo.com" className="text-2xl">
          info@mpcojo.com
        </a>
        <MdMailOutline className="text-[27px] text-primary-400" />
      </div>

      <div className="flex items-center justify-center md:justify-end gap-2">
        <a href="tel:+962796989278" className="text-2xl">
          +9627 9698 9278
        </a>
        <IoLogoWhatsapp className="text-[27px]" />
      </div>
    </div>


<div className="flex flex-col gap-4 items-center text-center md:text-right">
  <h2 className="text-2xl ps-10 font-bold mb-4">روابط سريعة</h2>

  <div className="flex flex-col gap-2 text-xl w-full max-w-[200px]">
    <div className="flex items-center justify-end gap-1 transition duration-200 ease-in-out hover:text-primary-400 hover:scale-105 cursor-pointer">
      <Link to="/"><h3>الرئيسية</h3></Link>
      <HiOutlineChevronLeft />
    </div>

    <div className="flex items-center justify-end gap-1 transition duration-200 ease-in-out hover:text-primary-400 hover:scale-105 cursor-pointer">
      <a target='_blank' href="https://heyzine.com/flip-book/11a82c540a.html"><h3>الكتالوج</h3></a>
      <HiOutlineChevronLeft />
    </div>

    <div className="flex items-center justify-end gap-1 transition duration-200 ease-in-out hover:text-primary-400 hover:scale-105 cursor-pointer">
      <Link to="/contactus"><h3>اتصل بنا</h3></Link>
      <HiOutlineChevronLeft />
    </div>

    <div className="flex items-center justify-end gap-1 transition duration-200 ease-in-out hover:text-primary-400 hover:scale-105 cursor-pointer">
      <Link to={'/moreinfo'}><h3>سياسة الخصوصية</h3></Link>
      <HiOutlineChevronLeft />
    </div>

    <div className="flex items-center justify-end gap-1 transition duration-200 ease-in-out hover:text-primary-400 hover:scale-105 cursor-pointer">
      <Link to={'/termsandconditions'}><h3>الشروط و الأحكام</h3></Link>
      <HiOutlineChevronLeft />
    </div>
  </div>
</div>





    
    <div className="flex flex-col items-center md:items-end gap-4 text-center md:text-right">
      <img src={logoFooter} className="w-[180px]" alt="Logo" />
      <p className="text-xl leading-relaxed max-w-[260px]">
        شركة اللؤلؤ الحديث، كل زاوية في منزلك تتألق بالنظافة
      </p>
    </div>

  </div>

 
  <div className="w-full border-t border-white/20 mt-10 pt-4">
    <p className="text-center text-sm opacity-80">
      جميع الحقوق محفوظة © 2025 شركة اللؤلؤ الحديث
    </p>
  </div>
</div>

  )
}

export default Footer