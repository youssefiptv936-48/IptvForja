import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Crown,
  Globe,
  Radio,
  Tv,
} from "lucide-react";

const channels = [
  {
    name: "beIN Sports HD",
    logo: "/channels/bein.webp",
  },
  {
    name: "SSC Sports HD",
    logo: "/channels/ssc.webp",
  },
  {
    name: "Sky Sports HD",
    logo: "/channels/sky.webp",
  },
  {
    name: "Canal+ HD",
    logo: "/channels/canal.webp",
  },
  {
    name: "ESPN HD",
    logo: "/channels/espn.webp",
  },
];

export default function Ai() {
  return (
    <section
      aria-label="القنوات الرياضية"
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* الخلفية */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black" />

      <div className="container mx-auto px-4 py-10 lg:py-16">
        {/* Grid */}
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* المحتوى */}
          <div className="relative z-10 text-center lg:text-right">
            {/* Live Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-600/40 bg-red-600/10 px-4 py-2 text-sm text-red-500">
              <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
              مباشر الآن
            </div>

            {/* العنوان */}
            <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight lg:text-6xl">
              استمتع بأقوى
              <span className="block text-red-600">
                المباريات
              </span>
              <span className="block text-red-600">
                اليوم
              </span>
            </h1>

            {/* الوصف */}
            <p className="mt-5 max-w-lg text-base leading-8 text-gray-300 lg:mr-auto">
              جميع القنوات الرياضية العالمية بجودة عالية
              وثبات قوي بدون تقطيع مع دعم فني متواصل 24/7.
            </p>

            {/* الأزرار */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="/subscribe"
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-bold transition hover:scale-105 hover:bg-red-700"
              >
                <Play size={18} />
                جرب الآن
              </Link>

              <Link
                href="/plans"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-7 py-4 font-bold backdrop-blur-md transition hover:border-red-500 hover:bg-red-600/10"
              >
                <Crown size={18} />
                اشترك الآن
              </Link>
            </div>

            {/* المميزات */}
            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              <Feature
                icon={<Tv size={20} />}
                title="4K"
                text="جودة عالية"
              />

              <Feature
                icon={<Radio size={20} />}
                title="بدون تقطيع"
                text="ثبات قوي"
              />

              <Feature
                icon={<Globe size={20} />}
                title="عالمية"
                text="قنوات عالمية"
              />

              <Feature
                icon={<Crown size={20} />}
                title="24/7"
                text="دعم فني"
              />
            </div>
          </div>

          {/* الصورة */}
          <div className="relative flex justify-center">
            {/* Glow */}
            <div className="absolute bottom-10 h-72 w-72 rounded-full bg-red-600/20 blur-3xl" />

            <Image
              src="/images/ronaldo.webp"
              alt="لاعب كرة قدم"
              width={620}
              height={760}
              priority
              className="relative z-10 h-auto w-full max-w-lg object-contain"
            />
          </div>
        </div>

        {/* القنوات */}
        <div className="mt-16">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-7 w-1 rounded-full bg-red-600" />

            <h2 className="text-2xl font-bold">
              القنوات الرياضية المتوفرة
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {channels.map((channel) => (
              <article
                key={channel.name}
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition hover:border-red-600/40 hover:bg-white/10"
              >
                {/* LIVE */}
                <div className="mb-4 inline-flex rounded-md bg-red-600 px-2 py-1 text-xs font-bold">
                  LIVE
                </div>

                {/* Logo */}
                <div className="relative mb-4 h-10 w-full">
                  <Image
                    src={channel.logo}
                    alt={channel.name}
                    fill
                    loading="lazy"
                    className="object-contain"
                  />
                </div>

                {/* الاسم */}
                <h3 className="text-sm font-medium text-gray-300">
                  {channel.name}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Feature Item */
function Feature({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-md">
      <div className="mb-2 flex justify-center text-red-500">
        {icon}
      </div>

      <h3 className="text-sm font-bold">
        {title}
      </h3>

      <p className="mt-1 text-xs text-gray-400">
        {text}
      </p>
    </div>
  );
}