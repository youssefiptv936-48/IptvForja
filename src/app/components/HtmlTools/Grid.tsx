import { ReactNode } from "react";
import Image from "next/image";
import BeinSportLogo from "../wikimedia/beinsport";

interface Props {
  children: ReactNode;
}

export default function Grid({ children }: Props) {
  return (
    <section className=" relative w-full min-h-[50vh] md:bg-cyan-900 md:min-h-[70vh]    ">
      <div className=" relative h-[40vh] md:min-h-[60vh] flex   ">
        
           <Image
          src="/images/sanae.png"
          // 1. تحسين النص البديل ليكون وصفياً (مهم جداً لجوجل)
          alt="واجهة تشغيل أفضل اشتراك IPTV في المغرب 2026 بجودة عالية وسيرفرات ثابتة"
          // 2. إضافة العنوان (تحسين تجربة المستخدم وسياق الصورة)
          title="اشتراك IPTV المغرب - جودة 4K"
          fill
          priority
          
          // 3. ضغط الحجم (مهم جداً لسرعة الصفحة وتصنيف الأداء)
          quality={80}
          // 4. منع انزياح المحتوى (تحسين مقياس CLS الذي يحبه جوجل)
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
          className=" object-contain object-right md:object-cover      "
        />
        
       

        <article className="absolute left-0  w-1/2 text-amber-50  h-full p-2 flex flex-col  justify-center items-center sm:w-1/2 md:bg-blue-800   ">
          {children}
        </article>
      </div>
      <ul className=" w-full h-[10vh]  text-slate-200   absolute bottom-0 flex justify-around">
        
        <li className="w-[20%] flex justify-center items-center flex-col ">
          <BeinSportLogo />
          <span>BeinSprt </span>
        </li>
        <li className="w-[20%] flex justify-center items-center flex-col ">
          <BeinSportLogo />
          <span>BeinSprt </span>
        </li>
        <li className="w-[20%] flex justify-center items-center flex-col ">
          <BeinSportLogo />
          <span>BeinSprt </span>
        </li>
        <li className="w-[20%] flex justify-center items-center flex-col ">
          <BeinSportLogo />
          <span>BeinSprt </span>
        </li>
      </ul>
    </section>
  );
}
