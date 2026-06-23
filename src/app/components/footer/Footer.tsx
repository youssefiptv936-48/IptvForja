import P from "../HtmlTools/P";
import PGray from "../HtmlTools/PGray";
import H2 from "../HtmlTools/H2";
import LinkRed from "../HtmlTools/LinkRed";
import LinkNormal from "../HtmlTools/LinkNormal";
import LinkGray from "../HtmlTools/LinkGray";
import Border_Row from "../HtmlTools/Border_Row";
import FeatureCard from "./FeatureCard";
import ButtonRed from "../HtmlTools/ButtonRed";
import SocialMedia from "./Socialmedia";
import { IoIosLock } from "react-icons/io";
import StatsCard from "./StatsCard";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaX,
} from "react-icons/fa6";
import { homeContent } from "@/app/Data_Home/HomeContent";

import Image from "next/image";

import {
  Gift,
  ShieldCheck,
  Zap,
  Headphones,
  Hd,
  RadioTower,
  Goal,
  Users,
  CirclePlay,
  Tv,
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

      <div className=" w-full  flex justify-between flex-wrap ">
        <div className=" flex  justify-center flex-col  min-w-25 bg-amber-400">
          <H2>روابط سريعة</H2>
          <Border_Row width="w-30" />
          <LinkNormal href="">الصفحه الرئيسيه</LinkNormal>
          <LinkNormal href="">الاشتراكات</LinkNormal>
          <LinkNormal href="">القنوات</LinkNormal>
          <LinkNormal href="">التجربه المجانيه</LinkNormal>
          <LinkNormal href="">اتصل بنا</LinkNormal>
        </div>

        <div className=" flex  justify-center flex-col  min-w-25">
          <H2>خدمه العملاء</H2>
          <Border_Row width="w-30" />
          <LinkNormal href="">مركز المساعده</LinkNormal>
          <LinkNormal href="">الاسئله الشائعه</LinkNormal>
          <LinkNormal href="">سياسه الخصوصيه</LinkNormal>
          <LinkNormal href="">شروط والاحكام</LinkNormal>
          <LinkNormal href="">استرجاع الاموال</LinkNormal>
        </div>

        <div className=" flex  justify-center flex-col  min-w-25">
          <H2>خدمات IPTV</H2>
          <Border_Row width="w-30" />
          <LinkNormal href="">IPTV المغرب</LinkNormal>
          <LinkNormal href="">القنوات الرياضيه</LinkNormal>
          <LinkNormal href="">الأفلام والمسلسلات</LinkNormal>
          <LinkNormal href="">قنوات الأطفال</LinkNormal>
          <LinkNormal href="">الأجهزه المدعومه</LinkNormal>
        </div>
        <div className=" flex  justify-center flex-col  min-w-25">
          <H2>خدمات IPTV</H2>
          <Border_Row width="w-30" />
          <LinkNormal href="">IPTV المغرب</LinkNormal>
          <LinkNormal href="">القنوات الرياضيه</LinkNormal>
          <LinkNormal href="">الأفلام والمسلسلات</LinkNormal>
          <LinkNormal href="">قنوات الأطفال</LinkNormal>
          <LinkNormal href="">الأجهزه المدعومه</LinkNormal>
        </div>

        <section
          className="
      min-w-25
      bg-amber-800
        text-white
        flex
        flex-col
        items-center
        justify-center
        p-2
        text-center
      "
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

        
        </section>
      </div>
     
      <div className=" border-y border-red-600 border-solid flex flex-wrap gap-10 p-5  w-full">
        <LinkGray href="/اشتراك-iptv-المغرب">اشتراك IPTV المغرب</LinkGray>

        <LinkGray href="/أفضل-اشتراك-iptv-في-المغرب">
          أفضل اشتراك IPTV في المغرب
        </LinkGray>

        <LinkGray href="/شراء-اشتراك-iptv">شراء اشتراك IPTV</LinkGray>

        <LinkGray href="/iptv-4k-المغرب">IPTV 4K المغرب</LinkGray>

        <LinkGray href="/اشتراك-iptv-للتلفاز-الذكي">
          اشتراك IPTV للتلفاز الذكي
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
