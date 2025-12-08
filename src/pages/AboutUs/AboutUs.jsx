import { Eye, Target, CheckCircle, ScrollText } from "lucide-react";
import image1 from "../../../public/image1.svg"; // عدّل المسار حسب مشروعك

 function AboutUs() {
  return (
    <div className="container mx-auto py-20 px-6 md:px-20  " dir="rtl">

      {/* =======================  من نحن  ======================= */}
      <div className="mb-16">
        <h2 className="text-[32px] md:text-[40px] text-secondary-yellow-500 font-bold mb-4">
          من نحن:
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* النص */}
          <p className="text-[18px] md:text-[22px] leading-relaxed flex-1">
            شركة اللؤلؤ الحديث لصناعة المنظفات هي شركة متخصصة في إنتاج وتصنيع جميع أنواع المنظفات
            السائلة والصلبة عالية الجودة، بما يشمل منتجات العناية الشخصية، العناية بالشعر، مسحوق الغسيل،
            سائل الجلي والجلايات، معطرات الجو والأثاث، منظفات الأرضيات والأسطح، منظفات وملينات الملابس
            والمطهرات وغيرها من المنتجات المنزلية والصناعية.
            <br /><br />
            نحرص على استخدام أفضل المواد الأولية وتقنيات الإنتاج الحديثة لتقديم منتجات فعّالة وآمنة تلبي
            احتياجات السوق المحلي وأسواق التصدير. كما نلتزم بتطوير منتجاتنا بشكل مستمر لضمان رضا العملاء
            وتعزيز ثقتهم.
          </p>

          {/* الصورة */}
          <div className="flex justify-center md:justify-end flex-1">
            <img
              src={image1}
              className="w-[280px] md:w-[420px] lg:w-[500px] object-contain"
              alt="من نحن"
            />
          </div>

        </div>
      </div>

      {/* =======================  الكروت الأربعة  ======================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* رؤيتنا */}
        <div className=" rounded-xl p-6 shadow-md w-[648px] h-[436px] bg-white">
          <div className="flex items-center gap-2 text-orange-500 font-bold text-xl mb-3">
            <Eye size={32} />
            <span className="text-[32px]">رؤيتنا</span>
          </div>
          <p className="text-gray-700 text-2xl py-2 leading-relaxed">
            نحن المورد الأفضل في تطوير وصناعة جميع أنواع المنظفات وفق أحدث المواصفات العالمية
            بجودة عالية وبأسعار مناسبة.
          </p>
        </div>

        {/* رسالتنا */}
        <div className=" rounded-xl p-6 shadow-md w-[648px] h-[436px] bg-white">
          <div className="flex items-center gap-2 text-orange-500 font-bold text-xl mb-3">
            <ScrollText size={32} />
            <span className="text-[32px]">رسالتنا</span>
          </div>
          <p className="text-gray-700 text-2xl py-2 leading-relaxed ">
            توفير حلول تنظيف مبتكرة وموثوقة من خلال تصنيع منتجات فعّالة وآمنة، مع التركيز على تلبية
            احتياجات العملاء المتنوعة وتقديم قيمة حقيقية تضيف إلى جودة حياتهم اليومية.
          </p>
        </div>

 

        {/* هدفنا */}
        <div className=" rounded-xl p-6 shadow-md w-[648px] h-[436px] bg-white">
          <div className="flex items-center gap-2 text-orange-500 font-bold text-xl mb-3">
            <Target size={32} />
            <span className="text-[32px]">هدفنا</span>
          </div>

          <p className="text-gray-700 text-2xl leading-relaxed mb-2">
            تصنيع منتجات بجودة عالمية تنافسية تلبي متطلبات السوق المحلي والإقليمي.
          </p>

          <p className="text-gray-700 text-2xl leading-relaxed mb-2">
            دعم العملاء في تطوير علاماتهم التجارية من خلال خدمات التعبئة والتغليف الخاصة (Private Label).
          </p>

          <p className="text-gray-700 text-2xl leading-relaxed">
            المساهمة في رفع مستوى صناعة المنظفات محليًا وعربيًا عبر الالتزام بالمعايير الصحية والبيئية.
          </p>
        </div>
               {/* قيمنا */}
        <div className=" rounded-xl p-6 shadow-md w-[648px] h-[436px] bg-white">
          <div className="flex items-center gap-2 text-orange-500 font-bold text-xl mb-3">
            <CheckCircle size={32} />
            <span className="text-[32px]">قيمنا</span>
          </div>

          <ul className="text-gray-700 text-2xl leading-relaxed space-y-2">
            <li>• الجودة: الالتزام بأعلى معايير الجودة في كل مرحلة من مراحل التصنيع.</li>
            <li>• الابتكار: تطوير منتجات تلبي متطلبات السوق وتواكب الاتجاهات الحديثة.</li>
            <li>• الموثوقية: بناء علاقات طويلة الأمد قائمة على الثقة مع العملاء وشركائنا.</li>
            <li>• الاستدامة: التركيز على حلول صديقة للبيئة وعمليات إنتاج مستدامة.</li>
          </ul>
        </div>

      </div>

    </div>
  );
}
export default AboutUs;