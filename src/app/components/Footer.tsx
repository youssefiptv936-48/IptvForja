import P from "./HtmlTools/P";
import H2 from "./HtmlTools/H2";
import LinkRed from "./HtmlTools/LinkRed";
import LinkNormal from "./HtmlTools/LinkNormal";
import Border_Row from "./HtmlTools/Border_Row";
import FeatureCard from "./HtmlTools/FeatureCard";
import ButtonRed from "./HtmlTools/ButtonRed";

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
      <section
        dir="rtl"
        className="
        w-full
        bg-black
        text-white
        flex
        flex-col
        items-center
        justify-center
        px-4
        py-10
        text-center
      "
      >
        {/* Logo */}
        <div className="relative w-50 h-30  ">
          <Image
            src="/iptvforja.webp"
            alt="IPTV FORJA Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Description */}
        <p
          className="
          max-w-105
          text-slate-300
          text-[16px]
          leading-2
          mb-7
        "
        >
          IPTVFORJA هي وجهتك الأولى لمشاهدة القنوات العالمية والمحتوى الترفيهي
          بجودة عالية وثبات لا مثيل له. استمتع بتجربة مشاهدة احترافية في أي وقت
          ومن أي مكان.
        </p>

        <div className="w-full max-w-120 flex items-center justify-center mb-7">
          <div className="h-px flex-1 bg-red-600/70"></div>

          <div
            className="
            mx-4
            w-8
            h-8
            rounded-full
            flex
            items-center
            justify-center
            text-red-600
            border
            border-red-600/70
            shadow-[0_0_18px_#ff000080]
          "
          >
            <Goal size={18} strokeWidth={2.2} />
          </div>

          <div className="h-px flex-1 bg-red-600/70"></div>
        </div>

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
          <div className="flex flex-col items-center justify-center px-3">
            <h3 className="text-red-600 text-2xl font-extrabold mb-1">
              +50,000
            </h3>
            <p className="text-slate-200 text-sm mb-3">مشترك راضٍ</p>
            <Users className="text-red-600" size={28} strokeWidth={1.8} />
          </div>

          <div
            className="
            flex
            flex-col
            items-center
            justify-center
            px-3
            border-x
            border-dashed
            border-white/20
          "
          >
            <h3 className="text-red-600 text-2xl font-extrabold mb-1">
              +150,000
            </h3>
            <p className="text-slate-200 text-sm mb-3">محتوى متنوع</p>
            <CirclePlay className="text-red-600" size={28} strokeWidth={1.8} />
          </div>

          <div className="flex flex-col items-center justify-center px-3">
            <h3 className="text-red-600 text-2xl font-extrabold mb-1">
              +20,000
            </h3>
            <p className="text-slate-200 text-sm mb-3">قناة مباشرة</p>
            <Tv className="text-red-600" size={30} strokeWidth={1.8} />
          </div>
        </div>
      </section>
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
    <H2>خدمات IPTV</H2>
    <Border_Row width="w-30" />
    <LinkNormal href="">IPTV المغرب</LinkNormal>
    <LinkNormal href="">القنوات الرياضيه</LinkNormal>
    <LinkNormal href="">الأفلام والمسلسلات</LinkNormal>
    <LinkNormal href="">قنوات الأطفال</LinkNormal>
    <LinkNormal href="">الأجهزه المدعومه</LinkNormal>
  </div>

  <div className=" flex flex-col">
    <H2>معلومات مهمه</H2>
    <Border_Row width="w-30" />
    <LinkNormal href="">طريقه التشغيل</LinkNormal>
    <LinkNormal href="">طرق الدفع</LinkNormal>
    <LinkNormal href="">تفعيل الاشتراك</LinkNormal>
    <LinkNormal href="">جوده البث</LinkNormal>
    <LinkNormal href="">الدعم الفني</LinkNormal>
  </div>
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
      </section>
      <section className="border border-t  border-red-600 w-full grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1">
        <div className="bg-amber-500">A</div>
        <div className="bg-amber-950">A</div>
        <div className="bg-amber-500">A</div>
        <div className="bg-blue-900">A</div>
      </section>
    </footer>
  );
}
