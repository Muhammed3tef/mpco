import service from "../../../public/service.svg"
import training from "../../../public/training.svg"
import flask from "../../../public/flask.svg"

const InnovativeFormulations = () => {
  return (
    <div className='py-30 px-4 md:px-20' dir='rtl'>
      <div>
        <h2 className='text-center text-2xl md:text-3xl text-primary-950 font-bold'>
          تطوير تركيبات مبتكرة
        </h2>
      </div>

      {/* Boxes Section */}
      <div className='py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Box 1 */}
        <div className='w-full rounded-md shadow-md'>
          <div className='flex items-center gap-2 bg-neutral-100 p-3 rounded-xl'>
            <img src={service} alt='' />
            <h3 className='font-bold text-[18px]'>خدمة حسب المواصفات</h3>
          </div>
          <p className='p-3 text-[16px] text-primary-950 text-right break-words'>
            نوفر حلول تصنيع مخصصة تتيح للعميل اختيار المكونات بما يتناسب مع احتياجاته في الأسواق المحلية أو العالمية، بما في ذلك تطوير منتجات مخصصة للعلامات التجارية الخاصة.
          </p>
        </div>

        {/* Box 2 */}
        <div className='w-full rounded-md shadow-md'>
          <div className='flex items-center gap-2 bg-neutral-100 p-3 rounded-xl'>
            <img src={training} alt='' />
            <h3 className='font-bold text-[18px]'>اختبارات وضمان جودة</h3>
          </div>
          <p className='p-3 text-[16px] text-primary-950 text-right break-words'>
            نقوم بإجراء اختبارات دقيقة على جميع التركيبات لضمان فعاليتها، ثباتها وسلامتها على المستهلك، مع الالتزام بالمعايير الصحية والبيئية الدولية.
          </p>
        </div>

        {/* Box 3 */}
        <div className='w-full md:col-span-2 lg:col-span-1 rounded-md shadow-md'>
          <div className='flex items-center gap-2 bg-neutral-100 p-3 rounded-xl'>
            <img src={flask} alt='' />
            <h3 className='font-bold text-[18px]'>تطوير تركيبات مبتكرة</h3>
          </div>
          <p className='p-3 text-[16px] text-primary-950 text-right break-words'>
           نساعد عملاءنا في تطوير تركيبات منظفات فريدة، تلبي متطلباتهم الخاصة سواء من حيث الرائحة، اللون، الكثافة أو طبيعة الاستخدام. نعمل على دمج خبرتنا في الكيمياء الصناعية مع أحدث التقنيات لضمان فعالية عالية وسلامة كاملة في المنتجات النهائية.
          </p>
        </div>
      </div>

      <div>
        <p className='text-xl md:text-2xl leading-relaxed text-primary-950 text-right'>
         تقدم  <span className='text-primary-600 font-bold'>شركة اللؤلؤ الحديث</span> لصناعة المنظفات خدمة تصميم تركيبات خاصة تمكّن العملاء من الحصول على منتجات حصرية بجودة عالية، مع مرونة في التعديل والتطوير وفق احتياجاتهم التسويقية والإنتاجية.
        </p>
      </div>
    </div>
  )
}

export default InnovativeFormulations;