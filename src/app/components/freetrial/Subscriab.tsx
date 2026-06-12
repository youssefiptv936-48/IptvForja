
import H1 from "../HtmlTools/H1";
import H2 from "../HtmlTools/H2";
import P from "../HtmlTools/P";
import ButtonRed from "../HtmlTools/ButtonRed";


export default function Test() {
  return (
    <div className=" text-slate-200    flex flex-col p-3 justify-center items-center w-full h-screen  ">

      <h1 className="text-3xl font-black" >
        كأس العالم 2026 بدأ!
      </h1>


      <h2 className="text-2xl font-black" >
        التجارب المجانية متوقفة مؤقتاً خلال البطولة

      </h2>
      <p
  className=" text-center"
      >  مع انطلاق كأس العالم 2026 و104 مباراة تاريخية ينتظرها الملايين، تم إيقاف التجارب المجانية مؤقتاً لضمان أفضل جودة مشاهدة واستقرار لمشتركينا الحاليين خلال البطولة. لا تفوّت أي لحظة من الحدث الرياضي الأكبر في العالم، وابدأ اشتراكك الآن للاستمتاع بجميع المباريات بجودة عالية جداً وبدون تقطيع، مع عروض كأس العالم الخاصة لفترة محدودة.

      </p>



      <ButtonRed  href="/abonnement-iptv" LinkText="شاهد عروض كأس العالم الآن" />
    </div>
  );
}
