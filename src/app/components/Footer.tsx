import P from "./HtmlTools/P";
import H2 from "./HtmlTools/H2";
import LinkRed from "./HtmlTools/LinkRed";
import LinkNormal from "./HtmlTools/LinkNormal";
import { Gift, ShieldCheck } from "lucide-react";
import Border_Row from "./HtmlTools/Border_Row";
import Border_col from "./HtmlTools/Border_col";

import Image from "next/image";
import ButtonRed from "./HtmlTools/ButtonRed";
import { imageOptimizer } from "next/dist/server/image-optimizer";

export default function Footer() {
  // الحصول على السنة الحالية تلقائياً لجعل المحتوى يبدو "محدثاً" دائماً أمام جوجل
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="h-auto bg-black flex flex-col items-center"
      role="contentinfo"
    >
      <div className=" m-1 border border-solid border-red-600 rounded-2xl overflow-hidden min-h-40  md:h-20 md:w-[95%] p-1    lg:w-[80%] flex  flex-row ">
        {/* المحتوى فوق الصورة */}
        <div className=" w-1/2 lg:w-[70%] md:w-[80%] h-auto md:flex md:flex-row-reverse md:justify-around p-2    ">
          <div className=" md:w-1/2">
            <H2>
              ابدأ تجربتك <LinkRed href="/abonnement-iptv"> الآن</LinkRed>
            </H2>
            <P>جرب أقوى خدمة IPTV بجودة عالية واستمتع بمحتوى لا محدود</P>
            <div className="mt-2 flex items-center gap-2 text-sm text-white/80">
              <ShieldCheck size={16} />
              <span>لا تحتاج لبطاقة ائتمان</span>
            </div>
          </div>
          <div className="flex flex-col justify-center  md:px-10 md:w-1/2">
            <ButtonRed
              LinkText="ابدأ تجربة مجانية"
              href="/Test-Iptv"
              icon={<Gift />}
            />
          </div>
        </div>
        <div className="relative min-h-40 md:h-20 w-1/2 lg:w-[30%] md:w-[20%] overflow-hidden">
          <Image
            src="/images/tv.webp"
            alt="الأجهزة المدعومة لخدمة IPTV"
            fill
            className=" object-fill md:object-contain "
          />
        </div>
      </div>
      <div className=" w-full grid grid-cols-2 grid-rows-2 gap-2 pr-10 md:grid-rows-1 md:grid-cols-4 ">
        <div className="  flex flex-col">
          <H2>روابط سريعة</H2>
          <Border_Row width="w-30" />
          <LinkNormal href="">الصفحه الرئيسيه</LinkNormal>
          <LinkNormal href="">الاشتراكات</LinkNormal>
          <LinkNormal href="">القنوات</LinkNormal>
          <LinkNormal href="">التجربه المجانيه</LinkNormal>
          <LinkNormal href="">اتصل بنا</LinkNormal>
        </div>
        <div className=" flex flex-col">
          <H2>خدمه العملاء</H2>
           <Border_Row width="w-30" />
          <LinkNormal href="">مركز المساعده</LinkNormal>
          <LinkNormal href="">الاسئله الشائعه</LinkNormal>
          <LinkNormal href="">سياسه الخصوصيه</LinkNormal>
          <LinkNormal href="">شروط والاحكام</LinkNormal>
          <LinkNormal href="">استرجاع الاموال</LinkNormal>
        </div>

        <div className=" flex flex-col">
          <H2>خدمه العملاء</H2>
         <Border_Row width="w-30" />
          <LinkNormal href="">مركز المساعده</LinkNormal>
          <LinkNormal href="">الاسئله الشائعه</LinkNormal>
          <LinkNormal href="">سياسه الخصوصيه</LinkNormal>
          <LinkNormal href="">شروط والاحكام</LinkNormal>
          <LinkNormal href="">استرجاع الاموال</LinkNormal>
        </div>
        <div className=" flex flex-col">
          <H2>خدمه العملاء</H2>
            <Border_Row width="w-30" /> 
          <LinkNormal href="">مركز المساعده</LinkNormal>
          <LinkNormal href="">الاسئله الشائعه</LinkNormal>
          <LinkNormal href="">سياسه الخصوصيه</LinkNormal>
          <LinkNormal href="">شروط والاحكام</LinkNormal>
          <LinkNormal href="">استرجاع الاموال</LinkNormal>
        </div>
      </div>
    </footer>
  );
}
