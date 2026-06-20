import P from "./HtmlTools/P";
import H2 from "./HtmlTools/H2";
import LinkRed from "./HtmlTools/LinkRed";
import { Gift } from "lucide-react";

import Image from "next/image";
import ButtonRed from "./HtmlTools/ButtonRed";
import { imageOptimizer } from "next/dist/server/image-optimizer";

export default function Footer() {
  // الحصول على السنة الحالية تلقائياً لجعل المحتوى يبدو "محدثاً" دائماً أمام جوجل
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-auto bg-black" role="contentinfo">
      <div className=" m-1 border border-solid border-red-600 rounded-2xl overflow-hidden min-h-40 p-1  flex justify-center">
       
      {/* المحتوى فوق الصورة */}
      <div className=" w-[40%] bg-black/10 ">
        <H2>
          ابدأ تجربتك <LinkRed href="/abonnement-iptv"> الآن</LinkRed>
        </H2>
        <P>جرب أقوى خدمة IPTV بجودة عالية واستمتع بمحتوى لا محدود</P>
        <ButtonRed LinkText="ابدأ تجربة مجانية" href="/Test-Iptv" icon={<Gift/>}/>
      </div>
      <div className="relative min-h-40  w-[60%] overflow-hidden bg-black">
  <Image
    src="/images/sky.png"
    alt="الأجهزة المدعومة لخدمة IPTV"
   fill
  
    className="object-contain"
  />
</div>
      </div>
    </footer>
  );
}
