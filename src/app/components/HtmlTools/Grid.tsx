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
    <section className="relative w-full h-[61vh]  md:bg-cyan-900 md:min-h-[70vh]">
      <div className="relative h-[50vh] md:min-h-[60vh] flex">
        <Image
          src="/images/sanae.png"
          alt="واجهة تشغيل أفضل اشتراك IPTV في المغرب 2026 بجودة عالية وسيرفرات ثابتة"
          title="اشتراك IPTV المغرب - جودة 4K"
          fill
          priority
          quality={80}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
          className="object-contain object-right md:object-cover"
        />

        <div className="absolute left-0 w-1/2 text-amber-50 h-full p-3 flex flex-col justify-center items-center sm:w-1/2 md:bg-blue-800">
          <h2 className="text-3xl font-bold">
            <span>استمتع باقوى </span>
            <br />
            <span className="text-red-600"> البث المباشر</span>
            <br />
            <span className="text-red-600">مباريات اليوم</span>
          </h2>

          <p className="m-1 text-[14px] text-slate-200 leading-tight font-light">
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

      <h2 className=" mr-3 pr-2   text-xl font-bold border-r-2 text-slate-200 border-red-600">قنوات رياضيه عالميه</h2>
      <ul className=" w-full   text-slate-200 absolute bottom-0 flex justify-around">
        <li className="w-[20%] flex justify-center items-center flex-col">
          <BeinSportLogo />
          <span>BeinSprt</span>
        </li>
        <li className="w-[20%] flex justify-center items-center flex-col">
          <BeinSportLogo />
          <span>BeinSprt</span>
        </li>
        <li className="w-[20%] flex justify-center items-center flex-col">
          <BeinSportLogo />
          <span>BeinSprt</span>
        </li>
        <li className="w-[20%] flex justify-center items-center flex-col">
          <BeinSportLogo />
          <span>BeinSprt</span>
        </li>
      </ul>
    </section>
  );
}