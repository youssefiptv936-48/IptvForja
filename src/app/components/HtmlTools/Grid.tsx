import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import Crown from "../heroicons/Crown";
import Gift from "../heroicons/Gift";
import MarqueeChannel from "./MarqueeChannel";
import { homeContent } from "@/app/Data_Home/HomeContent";
 interface MarqueeItem {
  title: string;
}

interface Props {
  alt: string;
  src: string;
  title: string[];
  titlechannel: string;
  paragraph: string;
  parachannel: string;
  channelsports: MarqueeItem[]; // ✅ هذا هو التصحيح
}

// 1. استيراد المكون الخاص بشعار BeinSport (تأكد من صحة مساره في مجلدك)


export default function Grid({src,alt,title,paragraph,titlechannel,channelsports,parachannel}:Props) {

 const {sports}=homeContent;



  return (
    <section className="relative w-full min-h-[80vh]  pt-5   ">
      <div className="relative  h-[50vh] md:min-h-[60vh] flex ">
        <Image
          src={src}
          alt={alt}
          title="اشتراك IPTV المغرب - جودة 4K"
          fill
          priority
          quality={80}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
          className="object-contain object-right "
        />

        <div className="absolute left-0 w-[60%] text-amber-50 h-full p-3 flex flex-col justify-center items-center sm:w-1/2 ">
          <h2 className="text-3xl font-bold">
            <span>{title[0]}</span>
            <br />
            <span className="text-red-600"> {title[1]}</span>
            <br />
            <span className="text-red-600">{title[2]}</span>
          </h2>

          <p className="m-1 pr-4 text-[14px] text-slate-200 leading-tight font-light">
           {paragraph}
          </p>
          <Link
            href="/Subscriptions"
            className="bg-red-600 py-1.5 w-full mt-1 rounded-md border-2 border-red-600 flex justify-center gap-2"
          >
            <Crown />
            اشترك الان
          </Link>
          <Link
            href="/freetrial"
            className="py-1.5 w-full mt-1 rounded-md border-2 border-red-600 flex justify-center gap-2"
          >
            <Gift />
            شاهد مجانا
          </Link>
        </div>
      </div>

      <h2 className="mr-3 pr-2 text-xl font-bold border-r-2 text-slate-200 border-red-600 my-4">
        {titlechannel}
      </h2>




      <MarqueeChannel channels={sports.channel} />


      <p className="text-slate-200 text-center p-2">
        {parachannel}

      </p>
    </section>
  );
}