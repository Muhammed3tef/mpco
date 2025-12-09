import React from 'react'
import pansuImage from "../../../../public/pansuImage.svg"

const Section1 = () => {
  return <>
 <div className='container mx-auto pt-23 flex flex-col md:flex-row justify-around items-start md:items-start px-4 gap-10'>

<div className='container mx-auto pt-23 flex flex-col lg:flex-row justify-around items-start px-4 gap-10'>

  <div className='flex justify-center lg:block w-full lg:w-auto'>
    <img 
      src={pansuImage} 
      alt="" 
      className='w-full max-w-sm lg:max-w-full'
      loading='lazy'
    />
  </div>
        
  <div className='pt-15 flex flex-col gap-10 text-center lg:text-right w-full lg:w-auto'>
    <h className='text-5xl font-bold'>
      مع شركة اللؤلؤ الحديث، كل <br />زاوية في منزلك تتألق بالنظافة
    </h>

    <p className='md:text-4xl '>
      اكتشفي عالم منظفات بانسي، حيث تلتقي <br />
      الجودة والفعالية لتمنح منزلك إشراقاً ونقاءً <br />
      دائمين. منتجاتنا مصممة بعناية لتلبية <br />
      احتياجاتك اليومية وتسهيل روتين التنظيف <br />
      مع لمسة من التألق والانتعاش.
    </p>

    <div>
     <a href="https://heyzine.com/flip-book/11a82c540a.html" target='_blank'> <button
        className="
          md:px-30 md:py-2 
          px-26
          p-3
          rounded-md 
          text-white 
          text-2xl
          font-medium
          bg-linear-to-r 
          from-[#0D4C75] 
          via-[#F59E0B] 
          to-[#C2410C]
          hover:opacity-90
          transition
          cursor-pointer
        "
      >
        عرض الكتالوج
      </button></a>
    </div>
  </div>

</div>


</div>

  
  
  </>
}

export default Section1