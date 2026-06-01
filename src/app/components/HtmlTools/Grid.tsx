import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import Crown from "../heroicons/Crown";
import Gift from "../heroicons/Gift";
import MarqueeChannel from "./MarqueeChannel";

// 1. استيراد المكون الخاص بشعار BeinSport (تأكد من صحة مساره في مجلدك)
import BeinSportLogo from "../wikimedia/beinsport";
export default function Grid() {
  
  // 2. قمنا بتعريف المصفوفة هنا داخل المكون وقبل الـ return ليتعرف عليها الكود ✅
 const sportsData = [
    { imgSrc: <BeinSportLogo/>, title: 'beIN Sports HD' },
    { imgSrc: <BeinSportLogo/>, title: 'SSC Sports HD' },
    { imgSrc:<BeinSportLogo/>, title: 'Sky Sports HD' },
    { imgSrc: <BeinSportLogo/>, title: 'Canal+ HD' },
    { imgSrc: <BeinSportLogo/>, title: 'ESPN HD' },
    { imgSrc:<BeinSportLogo/>, title: 'beIN Sports 2 HD' },
    { imgSrc: <BeinSportLogo/>, title: 'SSC Extra HD' },
    { imgSrc: <BeinSportLogo/>, title: 'Sky Action HD' },
    { imgSrc: <BeinSportLogo/>, title: 'Canal+ Sport' },
    { imgSrc: <BeinSportLogo/>, title: 'ESPN 2 HD' },
  ];

  return (
    <section className="relative w-full min-h-[90vh] ">
      <div className="relative  h-[40vh] md:min-h-[60vh] flex">
        <Image
          src="/images/sanae.png"
          alt="واجهة تشغيل أفضل اشتراك IPTV في المغرب 2026 بجودة عالية وسيرفرات ثابتة"
          title="اشتراك IPTV المغرب - جودة 4K"
          fill
          priority
          quality={80}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
          className="object-contain object-right "
        />

        <div className="absolute left-0 w-[60%] text-amber-50 h-full p-3 flex flex-col justify-center items-center sm:w-1/2 md:bg-blue-800">
          <h2 className="text-3xl font-bold">
            <span>استمتع باقوى </span>
            <br />
            <span className="text-red-600"> البث المباشر</span>
            <br />
            <span className="text-red-600">مباريات اليوم</span>
          </h2>

          <p className="m-1 pr-4 text-[14px] text-slate-200 leading-tight font-light">
            جميع القنوات الرياضيه العالميه بجوده عاليه وثبات قوي بدون تقطيع
          </p>
          <Link
            href=""
            className="bg-red-600 py-1.5 w-full mt-1 rounded-md border-2 border-red-600 flex justify-center gap-2"
          >
            <Crown />
            اشترك الان
          </Link>
          <Link
            href=""
            className="py-1.5 w-full mt-1 rounded-md border-2 border-red-600 flex justify-center gap-2"
          >
            <Gift />
            شاهد مجانا
          </Link>
        </div>
      </div>

      <h2 className="mr-3 pr-2 text-xl font-bold border-r-2 text-slate-200 border-red-600 my-4">
        قنوات رياضيه عالميه
      </h2>
      
     
     <MarqueeChannel   channels={sportsData} />
      
    </section>
  );
}