import vector from "../../../public/Vector.svg"
import size from "../../../public/size.svg"
import silver from "../../../public/silver.svg"

const PrivateLabelServices = () => {
  return (
    <div className='py-30 px-4 md:px-20' dir='rtl'>
      <div>
        <h2 className='text-center text-2xl md:text-3xl text-primary-950 font-bold'>
          خدمات التعبئة والتغليف للغير (Private Label)
        </h2>
      </div>

      {/* Boxes Section */}
      <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Box 1 */}
        <div className='w-full rounded-md shadow-md'>
          <div className='flex items-center gap-2 bg-neutral-100 p-3 rounded-xl'>
            <img src={vector} alt='' />
            <h3 className='font-bold text-[18px]'>تعبئة احترافية بعلامتك التجارية</h3>
          </div>
          <p className='p-3 text-[16px] text-primary-950 text-right break-words'>
            نوفر خدمة متكاملة لتعبئة المنظفات بعلامة العميل التجارية، حيث نساعد الشركات والمتاجر
            في إطلاق منتجات تحمل هويتها الخاصة بجودة عالية ومعايير تصنيع عالمية.
          </p>
        </div>

        {/* Box 2 */}
        <div className='w-full rounded-md shadow-md'>
          <div className='flex items-center gap-2 bg-neutral-100 p-3 rounded-xl'>
            <img src={size} alt='' />
            <h3 className='font-bold text-[18px]'>مرونة في الأحجام والعبوات</h3>
          </div>
          <p className='p-3 text-[16px] text-primary-950 text-right break-words'>
            نقدم خيارات متنوعة من العبوات والأحجام، بدءًا من العبوات الصغيرة المخصصة للأفراد وحتى
            العبوات الكبيرة المخصصة للمؤسسات والأسواق التجارية، مع إمكانية تخصيص التصميم ليناسب
            متطلبات السوق المستهدف.
          </p>
        </div>

        {/* Box 3 */}
        <div className='w-full md:col-span-2 lg:col-span-1 rounded-md shadow-md'>
          <div className='flex items-center gap-2 bg-neutral-100 p-3 rounded-xl'>
            <img src={silver} alt='' />
            <h3 className='font-bold text-[18px]'>حلول جاهزة للتصدير والتوزيع</h3>
          </div>
          <p className='p-3 text-[16px] text-primary-950 text-right break-words'>
            نوفر خدمات تعبئة متوافقة مع معايير التصدير، بما يتيح لشركائنا دخول أسواق جديدة بسهولة
            واحترافية، مع دعم كامل من حيث الاستشارات اللوجستية والتعبئة المطابقة للمعايير البيئية
            والصحية.
          </p>
        </div>
      </div>

      <div>
        <p className='text-xl md:text-2xl leading-relaxed text-primary-950 text-right'>
          تتيح
          <span className='text-primary-600 font-bold'> شركة اللؤلؤ الحديث </span>
          لصناعة المنظفات خدمة Private Label لتمكين العملاء من إطلاق منتجاتهم الخاصة بجودة موثوقة
          وتصميمات مخصصة، مع دعم كامل في مراحل التعبئة والتغليف والتصدير.
        </p>
      </div>
    </div>
  )
}

export default PrivateLabelServices;