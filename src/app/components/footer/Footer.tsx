import P from "../HtmlTools/P";
import PGray from "../HtmlTools/PGray";
import H2 from "../HtmlTools/H2";
import LinkRed from "../HtmlTools/LinkRed";
import LinkNormal from "../HtmlTools/LinkNormal";
import LinkGray from "../HtmlTools/LinkButton";
import Border_Row from "../HtmlTools/Border_Row";
import ButtonRed from "../HtmlTools/ButtonRed";
import SocialMedia from "./Socialmedia";


import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaX,
} from "react-icons/fa6";

import Image from "next/image";

import {
  Gift,
  ShieldCheck,
 
} from "lucide-react";
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

      <div className=" w-full  p-2  flex justify-around flex-wrap ">
        <div className=" flex  justify-center flex-col  min-w-40 ">
    <H2>روابط مهمة</H2>
    <Border_Row width="w-30" />

    <LinkNormal href="/">الصفحة الرئيسية</LinkNormal>
    <LinkNormal href="/about">من نحن</LinkNormal>
    <LinkNormal href="/pricing">باقات IPTV والأسعار</LinkNormal>
    <LinkNormal href="/free-trial">التجربة المجانية</LinkNormal>
    <LinkNormal href="/contact">اتصل بنا</LinkNormal>
  </div>

  <div className=" flex  p-2 justify-center flex-col  min-w-40">
    <H2>خدمات IPTV</H2>
    <Border_Row width="w-30" />

    <LinkNormal href="/iptv-morocco">
      اشتراك IPTV المغرب
    </LinkNormal>

    <LinkNormal href="/sports-channels">
      القنوات الرياضية
    </LinkNormal>

    <LinkNormal href="/movies-series">
      الأفلام والمسلسلات
    </LinkNormal>

    <LinkNormal href="/kids-channels">
      قنوات الأطفال
    </LinkNormal>

    <LinkNormal href="/supported-devices">
      الأجهزة المدعومة
    </LinkNormal>
  </div>

  <div className=" flex  justify-center flex-col p-2  min-w-40">
    <H2>الدليل والمحتوى</H2>
    <Border_Row width="w-30" />

    <LinkNormal href="/blog">المدونة</LinkNormal>

    <LinkNormal href="/installation-guide">
      دليل التثبيت
    </LinkNormal>

    <LinkNormal href="/channel-list">
      قائمة القنوات
    </LinkNormal>

    <LinkNormal href="/faq">
      الأسئلة الشائعة
    </LinkNormal>

    <LinkNormal href="/reviews">
      آراء العملاء
    </LinkNormal>
  </div>

  <div className=" flex  justify-center flex-col p-2  min-w-40">
    <H2>السياسات القانونية</H2>
    <Border_Row width="w-30" />

    <LinkNormal href="/privacy-policy">
      سياسة الخصوصية
    </LinkNormal>

    <LinkNormal href="/terms-and-conditions">
      الشروط والأحكام
    </LinkNormal>

    <LinkNormal href="/refund-policy">
      سياسة استرجاع الأموال
    </LinkNormal>

    <LinkNormal href="/acceptable-use-policy">
      سياسة الاستخدام المقبول
    </LinkNormal>

    <LinkNormal href="/cookie-policy">
      سياسة ملفات تعريف الارتباط
    </LinkNormal>
  </div>

        <section
          className="w-96  text-white flex flex-col items-center justify-center p-2 text-center"
        >
          {/* Logo */}
          <div className="relative w-50 h-18  ">
            <Image
              src="/iptvforjaa.webp"
              alt="IPTV FORJA Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Description */}
          <p
            className="
          max-w-2xl
          text-slate-300
          text-[16px]
          
      
        "
          >
            IPTVFORJA هي وجهتك الأولى لمشاهدة القنوات العالمية والمحتوى الترفيهي
            بجودة عالية وثبات لا مثيل له. استمتع بتجربة مشاهدة احترافية في أي
            وقت ومن أي مكان.
          </p>

          <Border_Row width="w-[90%]" />
         <div className="flex gap-2">
  <SocialMedia ariaLabel="Facebook" href="https://www.facebook.com/profile.php?id=61588986598921">
    <FaFacebookF />
  </SocialMedia>

  <SocialMedia ariaLabel="Instagram" href="https://www.instagram.com/iptvforja?igsh=MW5qaWhjbjN2MmFvNQ==">
    <FaInstagram />
  </SocialMedia>

  <SocialMedia ariaLabel="YouTube" href="https://www.youtube.com/channel/UCDIvL4bm2Hel87bC8gxyaOw">
    <FaYoutube />
  </SocialMedia>

  <SocialMedia ariaLabel="TikTok" href="https://www.tiktok.com/@iptvforja">
    <FaTiktok />
  </SocialMedia>

  <SocialMedia ariaLabel="X" href="https://x.com/IptvForja">
    <FaX />
  </SocialMedia>
</div>
        </section>
      </div>

      <div className=" border-y  border-red-600 border-solid flex items-center justify-center flex-wrap gap-1  p-5  w-full">
       <LinkGray href="/abonnement-iptv">
  شراء اشتراك IPTV
</LinkGray>

<LinkGray href="/abonnement-iptv">
  طلب اشتراك IPTV
</LinkGray>

<LinkGray href="/abonnement-iptv">
  أفضل اشتراك IPTV
</LinkGray>

<LinkGray href="/abonnement-iptv">
  شراء IPTV بسعر مناسب
</LinkGray>

<LinkGray href="/abonnement-iptv">
  أفضل سعر اشتراك IPTV
</LinkGray>

<LinkGray href="/abonnement-iptv">
  اشتراك IPTV فوري التفعيل
</LinkGray>

<LinkGray href="/abonnement-iptv">
  شراء اشتراك IPTV سنوي
</LinkGray>

<LinkGray href="/abonnement-iptv">
  اشتراك IPTV لمدة 12 شهراً
</LinkGray>

<LinkGray href="/abonnement-iptv">
  شراء IPTV بجودة 4K
</LinkGray>

<LinkGray href="/abonnement-iptv">
  شراء IPTV للتلفاز الذكي
</LinkGray>

<LinkGray href="/abonnement-iptv">
  شراء IPTV لأجهزة Android TV
</LinkGray>

<LinkGray href="/abonnement-iptv">
  اشتراك IPTV لجميع الأجهزة
</LinkGray>
      </div>
      <section className="text-center p-10 md:px-10 lg:px-35">
        <PGray>
          IPTVFORJA لا يملك أو يدير أي قنوات تلفزيونية أو محتوى محمي بحقوق
          النشر. جميع العلامات التجارية والأسماء والشعارات المذكورة في هذا
          الموقع تعود إلى أصحابها الشرعيين. توفر IPTVFORJA خدمة تقنية تساعد
          المستخدمين على إدارة وتشغيل المحتوى الذي يملكون حق الوصول إليه. يتحمل
          المستخدم وحده مسؤولية استخدام الخدمة بما يتوافق مع القوانين المحلية
          وحقوق الملكية الفكرية المعمول بها في بلده. إذا كنت صاحب حقوق وترغب في
          الإبلاغ عن أي محتوى أو استفسار متعلق بحقوق النشر، يرجى التواصل معنا
          عبر صفحة اتصل بنا. باستخدامك لهذا الموقع فإنك توافق على سياسة الخصوصية
          وشروط الاستخدام الخاصة بنا.
        </PGray>
      </section>
    </footer>
  );
}
