import { ReactNode } from "react";
import Image from "next/image";
import BeinSportLogo from "../wikimedia/beinsport";
import Link from "next/link";
import H2 from "./H2";
import PGray from "./PGray";
import SpanBold from "./SpanBold";
import Crown from "../heroicons/Crown";
import Gift from "../heroicons/Gift";

export default function Grid() {
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

        <article className="absolute left-0  w-1/2 text-amber-50  h-full p-6 flex flex-col  justify-center items-center sm:w-1/2 md:bg-blue-800   ">
        <h2 className="text-3xl font-bold">
          <span className="">استمتع باقوى </span>
          <br/>
          <span className=" text-red-600"> البث المباشر</span>
          <br/>
          <span className=" text-red-600">مباريات اليوم</span>

        </h2>

          <p className="m-1   text-[14px]   text-slate-200 leading-tight font-light">
            جميع القنوات الرياضيه العالميه بجوده عاليه وثبات قوي بدون تقطيع
          </p>
          <Link href={""} className="bg-red-600 py-1.5 w-full mt-1 rounded-md border-2 border-red-600 flex justify-center gap-2">
          <Crown/>
           اشترك الان
          </Link>
           <Link href={""} className=" py-1.5 w-full mt-1 rounded-md border-2 border-red-600 flex justify-center gap-2">
           <Gift/>
           شاهد مجانا
          </Link>
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
