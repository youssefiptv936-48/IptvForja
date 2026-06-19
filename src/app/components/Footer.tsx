import P from "./HtmlTools/P";
import H2 from "./HtmlTools/H2";
import LinkRed from "./HtmlTools/LinkRed";

import Image from "next/image";
import ButtonRed from "./HtmlTools/ButtonRed";
import { imageOptimizer } from "next/dist/server/image-optimizer";

export default function Footer() {
  // الحصول على السنة الحالية تلقائياً لجعل المحتوى يبدو "محدثاً" دائماً أمام جوجل
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-auto bg-black" role="contentinfo">
      <div className="bg-amber-400 w-full h-36 flex">
       
      {/* المحتوى فوق الصورة */}
      <div className=" w-1/2 bg-black/10 ">
        <H2>
          ابدأ تجربتك <LinkRed href="/abonnement-iptv"> الآن</LinkRed>
        </H2>
        <P>جرب أقوى خدمة IPTV بجودة عالية واستمتع بمحتوى لا محدود</P>
        <ButtonRed LinkText="HHHHHHH" href="#" />
      </div>
       <div className="relative h-36 w-1/2 overflow-hidden">
        {/* الصورة في الخلفية */}
        <Image
          src="/images/chat.png"
          alt="خلفية الفوتر"
          fill
          className="object-cover w-1/2"
        />
      </div>
      </div>
    </footer>
  );
}
