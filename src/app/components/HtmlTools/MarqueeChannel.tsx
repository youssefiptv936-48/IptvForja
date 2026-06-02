import React from 'react';

// تم إبقاء الـ title فقط وحذف الـ imgSrc تماماً
interface MarqueeItem {
  title: string;           
}

interface MarqueeProps {
  channels: MarqueeItem[]; 
}

export default function MarqueeChannel({ channels }: MarqueeProps) {
  if (!channels || channels.length === 0) return null;

  return (
    /* الإطار الخارجي الثابت للماركي */
    <div className="relative flex w-full overflow-hidden border-b border-t py-6 [direction:ltr]">
      
      {/* المجموعة الأولى - عناوين القنوات الأصلية المفتوحة لعناكب الـ SEO وقوقل */}
      <div className="animate-marquee whitespace-nowrap flex gap-5 ">
        {channels.map((channel, index) => (
          <div key={`origin-${index}`} className="shrink-0">
            
            {/* تصميم الكرت المبني ليعرض العنوان بوضوح في المنتصف */}
            <div className="relative flex flex-col items-center justify-center     h-24  text-center select-none px-2">
              
              {/* العنوان داخل وسم H3 الذي طلبته خصيصاً لتحسين محركات البحث SEO */}
             <h3 className="text-4xl font-bold text-zinc-200  w-full ">
                {channel.title}
              </h3>

            </div>

          </div>
        ))}
      </div>

      {/* المجموعة الثانية - التوأم المكرر للأنيميشن (محجوب عن السيو عبر aria-hidden لمنع عقوبة المحتوى المكرر) */}
      <div aria-hidden="true" className="absolute top-6 animate-marquee2 whitespace-nowrap flex gap-5">
        {channels.map((channel, index) => (
          <div key={`clone-${index}`} className="shrink-0">
            
            <div className="relative flex flex-col items-center justify-center  h-24  text-center select-none px-2 ">
              
              <h3 className="text-4xl font-bold text-zinc-200  w-full  ">
                {channel.title}
              </h3>
              
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}