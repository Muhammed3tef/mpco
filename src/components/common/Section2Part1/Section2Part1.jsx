import React from 'react'
import pointsImage from '../../../../public/points.svg'
import filled from "../../../../public/filled.svg"
import filled2 from "../../../../public/filled2.svg"

const Section2Part1 = () => {
  return (
   <div className='py-8 md:py-12 lg:py-16 px-10'>
  <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
      
      <div className='w-full h-[195px] bg-primary-100 rounded-xl border border-primary-400 flex items-center justify-center gap-3 p-4'>
        <h2 className='text-primary-400 text-xl md:text-2xl font-medium'>المصداقية</h2>
        <span><img src={pointsImage} alt="المصداقية" className='w-12 h-12 md:w-16 md:h-16' /></span>
      </div>
      
      <div className='w-full h-[195px] bg-secondary-100 rounded-xl border border-secondary-400 flex items-center justify-center gap-3 p-4'>
        <h2 className='text-secondary-700 text-xl md:text-2xl font-medium'>الكفاءة</h2>
        <span><img src={filled} alt="المصداقية" className='w-12 h-12 md:w-16 md:h-16' /></span>
      </div>
      
      <div className='w-full h-[195px] bg-secondary-yellow-50 rounded-xl border border-secondary-yellow-400 flex items-center justify-center gap-3 p-4'>
        <h2 className='text-secondary-yellow-400 text-xl md:text-2xl font-medium'>الخبرة</h2>
        <span><img src={filled2} alt="المصداقية" className='w-12 h-12 md:w-16 md:h-16' /></span>
      </div>
      
    </div>
  </div>
</div>
  )
}

export default Section2Part1