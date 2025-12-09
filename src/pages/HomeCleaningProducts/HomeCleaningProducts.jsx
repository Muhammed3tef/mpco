import cleaning from "../../../public/cleaning.svg"
import iexam from "../../../public/iexam.svg"
import box from "../../../public/box.svg"

const HomeCleaningProducts = () => {
  return (
    <div className='py-30 px-4 md:px-20' dir='rtl'>
      <div>
        <h2 className='text-center text-2xl md:text-3xl text-primary-950 font-bold'>
      تصنيع المنظفات المنزلية
        </h2>
      </div>

      {/* Boxes Section */}
      <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Box 1 */}
        <div className='w-full rounded-md shadow-md'>
          <div className='flex items-center gap-2 bg-neutral-100 p-3 rounded-xl'>
            <img src={cleaning} alt='' />
            <h3 className='font-bold text-[18px]'>أنواع المنظفات</h3>
          </div>
          <p className='p-3 text-[16px] text-primary-950 text-right break-words'>
        نوفر مجموعة واسعه من جميع المنظفات ومنتجات العنايه الشخصيه بانواعها ..تشمل منتجات العنايه بالمنزل والاقمشه ومنتجات العنايه بالشعر والجسم والمطهرات . مصممة بعناية لتوفر نظافة ممتازه .. وعناية فائقة وفق أحدث المواصفات العالمية بقيمة مثالية.
          </p>
        </div>

        {/* Box 2 */}
        <div className='w-full rounded-md shadow-md'>
          <div className='flex items-center gap-2 bg-neutral-100 p-3 rounded-xl'>
            <img src={iexam} alt='' />
            <h3 className='font-bold text-[18px]'>تصنيع حسب المواصفات المطلوبة</h3>
          </div>
          <p className='p-3 text-[16px] text-primary-950 text-right break-words'>
نقدم خدمة تصميم تركيبات خاصة تناسب متطلبات العملاء المختلفة سواء من حيث العطور، الكثافة، أو نوع الاستخدام، مع ضمان الفاعلية العالية للمنتجات وتوافقها مع المعايير الصحية.
          </p>
        </div>

        {/* Box 3 */}
        <div className='w-full md:col-span-2 lg:col-span-1 rounded-md shadow-md'>
          <div className='flex items-center gap-2 bg-neutral-100 p-3 rounded-xl'>
            <img src={box} alt='' />
            <h3 className='font-bold text-[18px]'>التعبئة والتغليف الاحترافي</h3>
          </div>
          <p className='p-3 text-[16px] text-primary-950 text-right break-words'>
نوفر خدمات التعبئة والتغليف المرنة بمقاسات وأشكال متعددة تناسب السوق المحلي والتصدير، بما في ذلك إمكانية وضع العلامة التجارية الخاصة بالعميل (Private Label).
          </p>
        </div>
      </div>

      <div>
        <p className='text-xl md:text-2xl leading-relaxed text-primary-950 text-right'>
تعمل <span className='text-primary-600 font-bold'>شركة اللؤلؤ الحديث</span> لصناعة المنظفات على توفير منتجات عالية الجودة تواكب احتياجات السوق وتلبي توقعات العملاء من حيث الكفاءة، التنوع، والسعر المناسب، مع الالتزام بمعايير السلامة والابتكار المستمر في تطوير منتجات جديدة.
        </p>
      </div>
    </div>
  )
}

export default HomeCleaningProducts;