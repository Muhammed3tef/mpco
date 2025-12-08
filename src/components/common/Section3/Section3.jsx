import React from 'react'
import image7 from '../../../../public/image7.svg'
import image6 from '../../../../public/image6.svg'
import image8 from '../../../../public/image8.svg'
import image9 from '../../../../public/image9.svg'

const Section3 = () => {
  return (
   <div className='flex flex-col md:flex-row justify-center items-center gap-10 flex-wrap'>

    <div className='shadow-xl w-[312px] p-4 h-[302px] rounded-xl flex flex-col justify-center gap-6 items-center'>
        <div>
            <img src={image7} alt="" />
        </div>
        <h2 className='text-4xl font-bold '>+120</h2>
        <p className='text-[32px]'>منتجاتنا</p>
    </div>

    <div className='shadow-xl p-4 w-[312px] h-[302px] rounded-xl flex flex-col justify-center gap-6 items-center'>
        <div>
            <img src={image8} alt="" />
        </div>
        <h2 className='text-4xl font-bold '>+20</h2>
        <p className='text-[32px]'>خبرتنا</p>
    </div>

    <div className='shadow-xl p-4 w-[312px] h-[302px] rounded-xl flex flex-col justify-center gap-6 items-center'>
        <div>
            <img src={image9} alt="" />
        </div>
        <h2 className='text-4xl font-bold '>+27</h2>
        <p className='text-[32px]'>عملاؤنا الكرام</p>
    </div>

    <div className='shadow-xl p-4 w-[312px] h-[302px] rounded-xl flex flex-col justify-center gap-6 items-center'>
        <div>
            <img src={image6} alt="" />
        </div>
        <h2 className='text-4xl font-bold '>+19</h2>
        <p className='text-[32px]'>مشاريعنا الحالية</p>
    </div>

</div>
 )
}

export default Section3