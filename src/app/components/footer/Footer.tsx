import P from "../HtmlTools/P";
import H2 from "../HtmlTools/H2";
import LinkRed from "../HtmlTools/LinkRed";
import LinkNormal from "../HtmlTools/LinkNormal";
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

      <div className=" w-full  grid grid-cols-2 grid-rows-2 gap-2  md:grid-rows-1 md:grid-cols-4 lg:grid-cols-6 lg:grid-rows-1 ">
        <div className=" flex  justify-center flex-col pr-5">
          <H2>روابط سريعة</H2>
          <Border_Row width="w-30" />
          <LinkNormal href="">الصفحه الرئيسيه</LinkNormal>
          <LinkNormal href="">الاشتراكات</LinkNormal>
          <LinkNormal href="">القنوات</LinkNormal>
          <LinkNormal href="">التجربه المجانيه</LinkNormal>
          <LinkNormal href="">اتصل بنا</LinkNormal>
        </div>

        <div className=" flex  justify-center flex-col pr-5">
          <H2>خدمه العملاء</H2>
          <Border_Row width="w-30" />
          <LinkNormal href="">مركز المساعده</LinkNormal>
          <LinkNormal href="">الاسئله الشائعه</LinkNormal>
          <LinkNormal href="">سياسه الخصوصيه</LinkNormal>
          <LinkNormal href="">شروط والاحكام</LinkNormal>
          <LinkNormal href="">استرجاع الاموال</LinkNormal>
        </div>

       <div className=" flex  justify-center flex-col pr-5">
          <H2>خدمات IPTV</H2>
          <Border_Row width="w-30" />
          <LinkNormal href="">IPTV المغرب</LinkNormal>
          <LinkNormal href="">القنوات الرياضيه</LinkNormal>
          <LinkNormal href="">الأفلام والمسلسلات</LinkNormal>
          <LinkNormal href="">قنوات الأطفال</LinkNormal>
          <LinkNormal href="">الأجهزه المدعومه</LinkNormal>
        </div>
         <div className=" flex  justify-center flex-col pr-5">
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
      lg:col-span-2
      col-span-2
        md:col-span-4
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

         <Border_Row width="w-[90%]"/>
         

          {/* Stats */}
          <div
            className="
          w-full
          max-w-105
          grid
          grid-cols-3
          items-center
          text-center
          
        "
          >
             <StatsCard description="مشترك راضٍ" number={+5000}><Users/></StatsCard>
              <StatsCard description="محتوى متنوع" number={+150000}><CirclePlay/></StatsCard>
               <StatsCard description="قناة مباشرة" number={+46000}><Tv/></StatsCard>
                
           

            
          </div>
        </section>
      </div>
      <section className="my-6 mx-2 grid md:grid-cols-2 md:grid-rows-2 gap-2 lg:grid-cols-4 lg:grid-rows-1">
        <FeatureCard
          icon={<RadioTower size={34} strokeWidth={1.8} />}
          title="بث مباشر سريع"
          description="قنوات مستقرة بدون تقطيع وبأسرع السيرفرات."
        />
        <FeatureCard
          icon={<Hd size={34} strokeWidth={1.8} />}
          title="4K / FHD"
          description="جودة صورة فائقة الوضوح لمشاهدة لا تُضاهى."
        />
        <FeatureCard
          icon={<Headphones size={34} strokeWidth={1.8} />}
          title="دعم فني 24/7"
          description="فريق دعم محترف متاح على مدار الساعة لخدمتك."
        />
        <FeatureCard
          icon={<Zap size={34} strokeWidth={1.8} />}
          title="تفعيل فوري"
          description="بعد الدفع يتم تفعيل اشتراكك بشكل فوري."
        />
        <FeatureCard
          description="جميع معاملاتك محمية بتقنية تشفير متقدمة"
          title="الدفع آمن %100"
          icon={<IoIosLock />}
        />
        <FeatureCard
          description=" جميع حقوق الطبع والنشر محفوظة © 2026"
          title="IPTVFORJA"
          icon=" ©"
        />

        <nav
          aria-label="روابط التواصل الاجتماعي"
          className="   grid w-full grid-cols-5 grid-rows-2 place-items-center gap-2 rounded-xl
        border border-red-600/50 h-auto "
        >
          <div className="col-span-full">
            <H2>تابعنا على</H2>
            <Border_Row width="30" />
          </div>
          <SocialMedia
            ariaLabel="تابعنا على فيسبوك"
            href={homeContent.SocialMedia.facebook}
          >
            <FaFacebookF aria-hidden="true" />
          </SocialMedia>

          <SocialMedia
            ariaLabel="تابعنا على إنستغرام،"
            href={homeContent.SocialMedia.instagram}
          >
            <FaInstagram aria-hidden="true" />
          </SocialMedia>

          <SocialMedia
            ariaLabel="تابعنا على إكس"
            href={homeContent.SocialMedia.x}
          >
            <FaX aria-hidden="true" />
          </SocialMedia>

          <SocialMedia
            ariaLabel="تابعنا على يوتيوب"
            href={homeContent.SocialMedia.youtube}
          >
            <FaYoutube aria-hidden="true" />
          </SocialMedia>

          <SocialMedia
            ariaLabel=" تابعنا على تيك توك"
            href={homeContent.SocialMedia.tiktok}
          >
            <FaTiktok aria-hidden="true" />
          </SocialMedia>
        </nav>
        <div className=" rounded-xl border border-red-600/50 w-full flex flex-col shrink-0 items-center min-h-24  ">
          <H2>طرق دفع المتاحة</H2>

          <div className=" relative w-full h-12">
            <Image
              alt=""
              src={"/images/paymantt.webp"}
              fill
              className=" object-contain"
            />
          </div>
        </div>
      </section>
    </footer>
  );
}
