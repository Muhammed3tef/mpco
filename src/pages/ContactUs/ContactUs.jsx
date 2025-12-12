import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";

const ContactUs = () => {
  return (
    <div className='min-h-screen flex justify-center items-center bgGrop px-5 lg:px-20'>

      <div className='flex flex-col md:flex-row w-full max-w-[1150px]'>

        
        <div className='bg-secondary-yellow-500 rounded-t-xl md:rounded-t-none md:rounded-l-xl shadow-xl w-full md:w-[354px] h-auto md:h-[220px] flex flex-col justify-center items-center p-4 md:p-6'>
          <h2 className='text-base md:text-2xl font-bold py-1 md:py-2'>انقر للعرض</h2>

          <div className="items-center gap-2 text-green-600 text-sm md:text-lg">
            <div className='flex items-center gap-2'>
              <IoLogoWhatsapp className='text-[24px] md:text-[27px]' />
              <a href="tel:+962796989278" className='text-[16px] md:text-[27px] text-white'>
                +9627 9698 9278
              </a>
            </div>

            <div className='flex items-center gap-2 mt-2 md:mt-3'>
              <MdMailOutline className='text-[24px] md:text-[27px] text-primary-400' />
              <a href="mailto:info@mpcojo.com" className='text-[16px] md:text-[27px] text-white'>
                info@mpcojo.com
              </a>
            </div>
          </div>
        </div>

      
        <div className='bg-white khdmat rounded-b-xl md:rounded-b-none md:rounded-r-xl shadow-xl w-full md:w-[793px] h-auto md:h-[220px] p-4 md:p-6'>
          <h2 className='text-lg md:text-5xl text-secondary-yellow-500 font-bold text-center md:text-right'>
            تواصل معنا
          </h2>

          <p className='py-2 md:py-5 text-[14px] md:text-2xl text-center md:text-right'>
            تريد أن تتواصل معنا؟ راسلنا على واتساب أو راسلنا على البريد الالكتروني
          </p>

          <div className='flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 w-full'>
            <GrLocation className='w-[24px] h-[24px] md:w-[40px] md:h-[48px] text-secondary-yellow-500' />
            <p className='text-[14px] md:text-2xl text-center md:text-right flex-1'>
              ابو علنده , عمان , الاردن
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default ContactUs
