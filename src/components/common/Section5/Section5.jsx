import React from 'react'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdMailOutline } from "react-icons/md";
import { GrLocation } from "react-icons/gr";


const Section5 = () => {
  return (
 <div className='py-15 px-5 md:px-20 bgGrop 
    flex flex-col md:flex-row 
    justify-center 
    items-stretch md:items-end 
    gap-0 md:gap-0'
>

    {/* الكارت الشمال */}
    <div className='bg-secondary-yellow-500 
        rounded-t-xl md:rounded-t-none md:rounded-l-xl 
        shadow-xl 
        w-full md:w-[354.7887268066406px] 
        h-auto md:h-[220px] 
        flex flex-col justify-center items-center 
        p-6'
    >
        <h2 className='text-2xl font-bold py-2'>انقر للعرض</h2>

        <div className="items-center gap-2 text-green-600 text-lg">
            <div className='flex items-center gap-2'>
                <IoLogoWhatsapp className='text-[27px]' />
                <a href="tel:+962796989278" className='text-[27px] text-white'>
                    +9627 9698 9278
                </a>
            </div>

            <div className='flex items-center gap-2 mt-3'>
                <MdMailOutline className='text-[27px] text-primary-400' />
                <a href="mailto:info@mpcojo.com" className='text-[27px] text-white'>
                    info@mpcojo.com
                </a>
            </div>
        </div>
    </div>

    {/* الكارت اليمين */}
    <div className='bg-white khdmat 
        rounded-b-xl md:rounded-b-none md:rounded-r-xl 
        shadow-xl 
        w-full md:w-[793.2394409179688px] 
        h-auto md:h-[220px] 
        p-6'
    >
        <h2 className='text-5xl text-secondary-yellow-500 font-bold text-center md:text-right'>
            تواصل معنا
        </h2>

        <p className='py-5 text-2xl text-center md:text-right'>
            تريد أن تتواصل معنا؟ راسلنا على واتساب أو راسلنا على البريد الالكتروني
        </p>

        <div className='flex flex-col md:flex-row items-center gap-3'>
            <GrLocation className='w-[40px] h-[48px] text-secondary-yellow-500' />
            <p className='text-2xl text-center md:text-right'>
                ابو علنده , عمان ,الاردن
            </p>
        </div>
    </div>

</div>





  )
}

export default Section5