import P from "./HtmlTools/P";
import H2 from "./HtmlTools/H2";
import LinkRed from "./HtmlTools/LinkRed";
import { Gift,ShieldCheck } from "lucide-react";

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
      <div className=" m-1 border border-solid border-red-600 rounded-2xl overflow-hidden min-h-40 md:h-20 p-1   md:w-[80%] flex  flex-row">
        {/* المحتوى فوق الصورة */}
        <div className=" w-1/2 md:w-[70%] h-auto md:flex md:flex-row-reverse md:justify-around    ">
          <div className=" flex justify-center flex-col">
            <H2>
            ابدأ تجربتك <LinkRed href="/abonnement-iptv"> الآن</LinkRed>
          </H2>
          <P>جرب أقوى خدمة IPTV بجودة عالية واستمتع بمحتوى لا محدود</P>
          </div>
          <div className="flex flex-col justify-center">
           <ButtonRed
            LinkText="ابدأ تجربة مجانية"
            href="/Test-Iptv"
            icon={<Gift />}
          />

          <div className="mt-2 flex items-center gap-2 text-sm text-white/80">
            <ShieldCheck size={16} />
            <span>لا تحتاج لبطاقة ائتمان</span>
          </div>
          </div>
          
        </div>
        <div className="relative min-h-40 md:h-20 w-1/2 md:w-[30%]  overflow-hidden">
          <Image
            src="/images/tv.webp"
            alt="الأجهزة المدعومة لخدمة IPTV"
           fill
            className=" object-fill md:object-contain "
          />
        </div>
      </div>
    </footer>
  );
}
