import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import Crown from "../heroicons/Crown";
import Gift from "../heroicons/Gift";

interface MarqueeItem {
  title: string;
}

interface Props {
  

  title: string[];
 
  description: string;
  slogan: string;

}

// 1. استيراد المكون الخاص بشعار BeinSport (تأكد من صحة مساره في مجلدك)


export default function DivscreenContent({   title, description,slogan   }: Props) {





  return (
    <section className=" w-full flex items-center justify-center  md:h-screen  pt-5   ">
    
        
        

        <div className=" w-full md:w-[70%] text-amber-50 h-full p-3 flex flex-col justify-center items-center   ">
          <h2 className="text-3xl font-bold">
           {title}
          </h2>
            <p className="m-1 pr-4 text-[14px] text-slate-200 leading-tight font-light">
            {slogan}
          </p>
          <p className="m-1 pr-4 text-[14px] text-slate-200 leading-tight font-light">
            {description}
          </p>
         <div className=" w-full md:flex md:gap-3 ">
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