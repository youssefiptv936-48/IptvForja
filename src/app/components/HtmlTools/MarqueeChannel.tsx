import React from 'react';

// 1. قمنا بتسمية الخاصية imgSrc وجعلنا نوعها ReactNode لتقبل أيقوناتك الجاهزة مثل <BeinSportLogo/>
interface MarqueeItem {
  imgSrc: React.ReactNode; 
  title: string;           
}

interface MarqueeProps {
  channels: MarqueeItem[]; 
}

export default function MarqueeChannel({ channels }: MarqueeProps) {
  if (!channels || channels.length === 0) return null;

  return (
    /* الإطار الخارجي الثابت للماركي */
    <div className="relative flex w-full overflow-hidden border-b border-t  py-6 [direction:ltr]">
      
      {/* المجموعة الأولى - الـ 10 قنوات الأصلية المفتوحة لعناكب الـ SEO وقوقل */}
      <div className="animate-marquee whitespace-nowrap flex gap-12 pr-12">
        {channels.map((channel, index) => (
          <div key={`origin-${index}`} className="shrink-0">
            
            {/* تصميم الكرت المبني على صورتك الأنيقة */}
            <div className="relative flex flex-col items-center justify-between bg-[#0d0f12] border border-zinc-800 rounded-xl  w-24 h-24 shadow-lg text-center select-none">
              
              {/* شارة LIVE الحمراء بالأعلى */}
              

              {/* رندرة الأيقونة الجاهزة الممررة من الـ Grid */}
              <div className="flex-1 flex items-center justify-center mt-4 w-full h-20 text-white [&>svg]:w-full [&>svg]:h-full [&>svg]:object-contain">
                {channel.imgSrc} 
              </div>

              {/* العنوان داخل وسم H3 الذي طلبته خصيصاً لتحسين محركات البحث SEO */}
              <h3 className="text-xs font-medium text-zinc-400 mt-2 truncate w-full">
                {channel.title}
              </h3>

            </div>

          </div>
        ))}
      </div>

      {/* المجموعة الثانية - التوأم المكرر (محجوب عن السيو عبر aria-hidden لمنع عقوبة المحتوى المكرر) */}
      <div aria-hidden="true" className="absolute top-6 animate-marquee2 whitespace-nowrap flex gap-12 pr-12">
        {channels.map((channel, index) => (
          <div key={`clone-${index}`} className="shrink-0">
            
            <div className="relative flex flex-col items-center justify-between bg-[#0d0f12] border border-zinc-800 rounded-xl  w-24 h-24 shadow-lg text-center select-none">
            

              <div className="flex-1 flex items-center justify-center mt-4 w-full h-20 text-white [&>svg]:w-full [&>svg]:h-full [&>svg]:object-contain">
                {channel.imgSrc}
              </div>

              <h3 className="text-xs font-medium text-zinc-400 mt-2 truncate w-full">
                {channel.title}
              </h3>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}