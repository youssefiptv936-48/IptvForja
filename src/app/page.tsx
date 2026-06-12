


// ضروري لاستخدام useAccordion
// Stop-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess -Force
import Grid from "./components/HtmlTools/Grid";
// حل مشكلة المسار: تأكد أن الملف موجود في مجلد app باسم globals.css أو قم بتسميته Style.css في نفس المجلد
import { HomeMeta } from "./Data_Home/Home_seo";
import { HomeSchema } from "./Data_Home/Home_seo";

import Accordion from "./components/Accordion";
import H2 from "./components/HtmlTools/H2";
import P from "./components/HtmlTools/P";
import DivScreen from "./components/HtmlTools/DivScreen";
import My_List from "./components/ChannelList/My_List";
import { homeContent } from "./Data_Home/HomeContent";
import Organization from "./schemas/organization/organization";


 

{
  /** */
}
interface FAQEntity {
  name: string;
  acceptedAnswer: {
    text: string;
  };
}



export default function Home() {
  const { sports } = homeContent;
  const { news } = homeContent;
  const { movies } = homeContent;
  const { kids } = homeContent;
  const faqData = (HomeSchema["@graph"][1] as { mainEntity: FAQEntity[] })
    .mainEntity;
  return (
    <main className="  relative overflow-x-auto">
      
     <Organization/>
  
      <DivScreen></DivScreen>

      <My_List />
      {/**<My_List /> */}
      {/* --- القسم الأول: Menu_right --- */}

      <Grid alt={sports.alt} src="/images/sanae.png" title={sports.title} paragraph={sports.paragraph} titlechannel={sports.titlechannel} channelsports={sports.channel} parachannel={sports.parachannel} />
      <Grid alt={news.alt} src="/images/ghazza.webp" title={news.title} paragraph={news.paragraph} titlechannel={news.titlechannel} channelsports={news.channela} parachannel={sports.parachannel} />
      <Grid alt={movies.alt} src="/images/ghazza.webp" title={movies.title} paragraph={movies.paragraph} titlechannel={movies.titlechannel} channelsports={movies.channel} parachannel={sports.parachannel} />
      <Grid alt={kids.alt} src="/images/ghazza.webp" title={kids.title} paragraph={kids.paragraph} titlechannel={kids.titlechannel} channelsports={kids.channel} parachannel={kids.parachannel} />







      {/* --- الأسئلة الشائعة --- */}
      <div className="py-10 text-center   px-4">
        <H2>الأسئلة الشائعة حول اشتراك IPTV</H2>

        <Accordion title="كم سعر اشتراك iptv؟">
          <P>تعتمد تكلفة الاشتراك على:</P>
          <P>• مدة الاشتراك (3 أشهر / سنة)</P>
          <P>يمكنك اختيار ما يناسبك… مع توفير كبير عند الاشتراك السنوي.</P>
        </Accordion>

        <Accordion title="ما هو iptv وكيف يعمل؟">
          <P>
            هو تلفزيون يعمل عبر الإنترنت بدلاً من الأقمار الصناعية. مع اشتراك
            iptv بدون تقطيع تستطيع مشاهدة:
          </P>
          <P>
            ✓ القنوات المباشرة ✓ القنوات المشفرة ✓ الأفلام ✓ المسلسلات ✓ المحتوى
            عند الطلب من أي مكان في العالم.
          </P>
        </Accordion>

        <Accordion title="ما هو اشتراك iptv">
          <P>
            هو اشتراك واحد يشمل: قناة تلفزيونية مباشرة، قنوات رياضية مشفرة، بث
            عالمي، باقات حسب الدولة، قنوات السعودية، مكتبة VOD ضخمة، بدون تقطيع.
          </P>
        </Accordion>

        <Accordion title="ما هو أفضل موقع اشتراكات iptv؟">
          <P>
            نحن نقدم: أفضل سيرفر iptv، ثبات عالي، أكثر من 46565 قناة، أكثر من 95
            باقة، دعم على مدار الساعة، تجارب مجانية حقيقية.
          </P>
        </Accordion>

        <Accordion title="كيف يتم الاشتراك في iptv؟">
          <P>
            اطلب التجربة المجانية 12 ساعة، اختر الباقة، ادفع عبر البطاقة، يصلك
            الاشتراك تلقائياً خلال دقائق.
          </P>
        </Accordion>

        <Accordion title="هل يمكن تشغيل اشتراكات iptv على اكثر من جهاز؟">
          <P>
            يمكن توصيل الاشتراك بعدة أجهزة، لكن جهاز واحد فقط يمكنه المشاهدة في
            نفس الوقت لضمان استقرار البث.
          </P>
        </Accordion>

        <Accordion title="هل لا يوجد اشتراك IPTV يعمل على جهازين؟">
          <P>
            نعم، بعض الاشتراكات تسمح بذلك لكن البث يكون ضعيفاً. نوصي بجهاز واحد
            لضمان جودة 4K المستقرة.
          </P>
        </Accordion>
      </div>
    </main>
  );
}
