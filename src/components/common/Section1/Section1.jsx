import React from 'react'
import pansuImage from "../../../../public/pansuImage.svg"

const Section1 = () => {
  return <>
 <div className='container mx-auto pt-23 flex flex-col md:flex-row justify-around items-start md:items-start px-4 gap-10'>

  <div className='flex justify-center md:block w-full md:w-auto'>
    <img 
      src={pansuImage} 
      alt="" 
      className='w-full max-w-sm md:max-w-full'
    />
  </div>
        
  <div className='pt-15 flex flex-col gap-10 text-center md:text-right w-full md:w-auto'>
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

    <div >
      <button
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
    </button>
    </div>
  </div>

</div>

  
  
  </>
}

export default Section1