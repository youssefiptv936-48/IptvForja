import Image from "next/image";
import Link from "next/link";

import Crown from "../heroicons/Crown";
import Gift from "../heroicons/Gift";
import MarqueeChannel from "./MarqueeChannel";

interface MarqueeItem {
  title: string;
}

interface Props {
  alt: string;
  src: string;
  title: string[];
  titlechannel: string;
  paragraph: string;
  parachannel: string;
  channelsports: MarqueeItem[];
}

export default function Grid({
  src,
  alt,
  title,
  paragraph,
  titlechannel,
  channelsports,
  parachannel,
}: Props) {
  return (
    <section className="relative w-full min-h-[80vh] md:h-screen pt-5">
      <div className="relative h-[50vh] md:min-h-[60vh] flex">
        <div className="relative h-full w-full md:w-1/2">
          <Image
            src={src}
            alt={alt}
            title="اشتراك IPTV المغرب - جودة 4K"
            fill
            priority
            quality={75}
            sizes="(max-width: 768px) 100vw, 50vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg=="
            className="object-contain object-right md:object-cover"
          />
        </div>

        <div className="absolute left-0 w-[60%] text-amber-50 h-full p-3 flex flex-col justify-center items-center sm:w-1/2">
          <h2 className="text-3xl font-bold">
            <span>{title[0]}</span>
            <br />
            <span className="text-red-600"> {title[1]}</span>
            <br />
            <span className="text-red-600">{title[2]}</span>
          </h2>

          <p className="m-1 pr-4 text-[14px] text-slate-200 leading-tight font-light">
            {paragraph}
          </p>

          <Link
            href="/abonnement-iptv"
            className="bg-red-600 py-1.5 w-full mt-1 rounded-md border-2 border-red-600 flex justify-center gap-2"
          >
            <Crown />
            اشترك الان
          </Link>

          <Link
            href="/Test-Iptv"
            className="py-1.5 w-full mt-1 rounded-md border-2 border-red-600 flex justify-center gap-2"
          >
            <Gift />
            شاهد مجانا
          </Link>
        </div>
      </div>

      <h2 className="mr-3 pr-2 text-xl font-bold border-r-2 text-slate-200 border-red-600 my-4">
        {titlechannel}
      </h2>

      <MarqueeChannel channels={channelsports} />

      <p className="text-slate-200 text-center p-2">{parachannel}</p>

      <div className="w-full px-5 h-auto">
        <Link
          href="/Test-Iptv"
          className="py-1.5 w-full mt-1 rounded-md border-2 text-xl text-slate-200 font-bold bg-red-600 border-red-600 flex justify-center gap-2"
        >
          <Gift />
          شاهد مجانا
        </Link>
      </div>
    </section>
  );
}