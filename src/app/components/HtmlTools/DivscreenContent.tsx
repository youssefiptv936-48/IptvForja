import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import Crown from "../heroicons/Crown";
import Gift from "../heroicons/Gift";

interface MarqueeItem {
  title: string;
}

interface Props {
  alt: string;
  src: string;
  title: string[];
 
  paragraph: string;

}

// 1. استيراد المكون الخاص بشعار BeinSport (تأكد من صحة مساره في مجلدك)


export default function DivscreenContent({ src, alt, title, paragraph,   }: Props) {





  return (
    <section className="relative w-full  md:h-screen  pt-5  ">
      <div className="relative  h-[50vh] md:min-h-screen flex ">
        <div className="relative h-full w-full md:w-1/2">
        <Image
          src={src}
          alt={alt}
          title="اشتراك IPTV المغرب - جودة 4K"
          fill
          priority
          quality={75}
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
          className="object-contain object-right  "
        />
        </div>
        

        <div className="absolute left-0 w-[60%] text-amber-50 h-full p-3 flex flex-col justify-center items-center sm:w-1/2 ">
          <h2 className="text-3xl font-bold">
            <span>{title[0]}</span>
            <br />
            <span className="text-red-600"> {title[1]}</span>
            <br />
            <span className="text-red-600">{title[2]}</span>
          </h2>

          <p className="m-1 pr-4 text-[16px] text-slate-200 leading-tight font-bold">
            {paragraph}
          </p>
          <Link
            href="/abonnement-iptv"
            className="bg-red-600 py-1.5 w-full mt-1 rounded-md border-2 border-red-600 flex justify-center gap-2"
          >
            <Crown />
            اشترك الان
          </Link>
          <Link
            href="/Test-Iptv"
            className="py-1.5 w-full mt-1 rounded-md border-2 border-red-600 flex justify-center gap-2"
          >
            <Gift />
            شاهد مجانا
          </Link>
        </div>
      </div>




  
    </section>
  );
}