import React from 'react'
import image1 from "../../../../public/image1.svg"
import image2 from "../../../../public/image2.svg"
import image3 from "../../../../public/image3.svg"
import { Link } from 'react-router-dom'


const Section2Part2 = () => {
  return (
<div className='py-12 md:py-16 lg:py-20  px-11    '>
  <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
    <div className='text-right mb-8 md:mb-12'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-secondary-500 mb-2'>خدماتنا</h2>
      <p className='text-base md:text-lg lg:text-xl text-gray-600'>حلول تمكينية لمستقبل تجريبي</p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
      
      {/* Card 1 */}
      <div className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col'>
        <div className='relative h-64 md:h-72 overflow-hidden'>
          <img 
            src={image1} 
            alt='تصنيع المنظفات المنزلية'
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
          />
        </div>
        
        <div className='p-6 text-right flex flex-col grow'>
          <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
            تصنيع المنظفات المنزلية
          </h3>
          <p className='text-sm md:text-base text-gray-700 leading-relaxed mb-6 grow'>
            تعمل شركة اللؤلؤ الحديث لصناعة المنظفات على توفير منتجات عالية الجودة تواكب احتياجات السوق وتلبي توقعات العملاء من حيث الكفاءة، التنوع، والسعر المناسب، مع الالتزام بمعايير السلامة والابتكار المستمر في تطوير منتجات جديدة.
          </p>
          <Link to={'/homecleaningproducts'}>
          <button className='cursor-pointer w-full border border-gray-300 rounded-md py-3 px-4 flex items-center justify-center gap-2 text-gray-700 hover:bg-primary-500 hover:text-white font-medium transition-colors'>
            <svg 
              className='w-5 h-5' 
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24'
            >
              <path 
                strokeLinecap='round' 
                strokeLinejoin='round' 
                strokeWidth={2} 
                d='M10 19l-7-7m0 0l7-7m-7 7h18' 
              />
            </svg>
            <span>قراءة المزيد</span>
          </button>
          </Link>
        </div>
      </div>

      {/* Card 2 */}
      <div className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col'>
        <div className='relative h-64 md:h-72 overflow-hidden'>
          <img 
            src={image2} 
            alt='تطوير تركيبات مبتكرة'
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
          />
        </div>
        
        <div className='p-6 text-right flex flex-col grow'>
          <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
            تطوير تركيبات مبتكرة
          </h3>
          <p className='text-sm md:text-base text-gray-700 leading-relaxed mb-6 grow'>
            تقدم شركة اللؤلؤ الحديث لصناعة المنظفات خدمة تصميم تركيبات خاصة تمكن العملاء من الحصول على منتجات حصرية بجودة عالية مع مرونة التعديل والتطوير وفق احتياجاتهم للتميز في السوقية والإنتاجية.
          </p>
          <Link to={'/innovativeformulations'}>
          <button className='cursor-pointer w-full border border-gray-300 rounded-md py-3 px-4 flex items-center justify-center gap-2 text-gray-700 hover:bg-primary-500 hover:text-white font-medium transition-colors'>
            <svg 
              className='w-5 h-5' 
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24'
            >
              <path 
                strokeLinecap='round' 
                strokeLinejoin='round' 
                strokeWidth={2} 
                d='M10 19l-7-7m0 0l7-7m-7 7h18' 
              />
            </svg>
            <span>قراءة المزيد</span>
          </button>
          </Link>
        </div>
      </div>

      {/* Card 3 */}
      <div className='bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col'>
        <div className='relative h-64 md:h-72 overflow-hidden'>
          <img 
            src={image3} 
            alt='خدمات التعبئة والتغليف للغير'
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
          />
        </div>
        
        <div className='p-6 text-right flex flex-col grow'>
          <h3 className='text-xl md:text-2xl font-bold text-gray-900 mb-4'>
            خدمات التعبئة والتغليف للغير (Private Label)
          </h3>
          <p className='text-sm md:text-base text-gray-700 leading-relaxed mb-6 grow'>
            تقدم شركة اللؤلؤ الحديث لصناعة المنظفات خدمة Private Label لتمكين العملاء من إطلاق علاماتهم الخاصة بجودة احترافية من خلال تصنيع منتجات متخصصة مع دعم كامل في مراحل التعبئة والتغليف والتصدير.
          </p>
          <Link to={'/privatelabelservices'}>
          <button className='cursor-pointer w-full border border-gray-300 rounded-md py-3 px-4 flex items-center justify-center gap-2 text-gray-700 hover:bg-primary-500 hover:text-white font-medium transition-colors'>
            <svg 
              className='w-5 h-5' 
              fill='none' 
              stroke='currentColor' 
              viewBox='0 0 24 24'
            >
              <path 
                strokeLinecap='round' 
                strokeLinejoin='round' 
                strokeWidth={2} 
                d='M10 19l-7-7m0 0l7-7m-7 7h18' 
              />
            </svg>
            <span>قراءة المزيد</span>
          </button>
          </Link>
        </div>
      </div>

    </div>
  </div>
</div>
  )
}

export default Section2Part2