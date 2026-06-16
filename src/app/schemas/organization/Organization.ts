import { homeContent } from "@/app/Data_Home/HomeContent";

export const OrganizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "OnlineBusiness"],
      "@id": "https://iptvforja.com/#organization",
      "name": homeContent.Name,
      "alternateName": homeContent.alternateName,
      "url": "https://iptvforja.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://iptvforja.com/#logo",
        "url": "https://iptvforja.com/IptvForja.svg",
        "contentUrl": "https://iptvforja.com/IptvForja.svg",
        "caption": homeContent.Name
      },
      "image": {
        "@type": "ImageObject",
        "@id": "https://iptvforja.com/#primaryimage",
        "url": "https://iptvforja.com/abonnement-iptv.webp"
      },
      "slogan": homeContent.slogan,
      "description": `${homeContent.Name} هو متجر رقمي متخصص في بيع اشتراكات IPTV وخدمات رقمية عبر الإنترنت، مع دعم فني لمساعدة العملاء في التفعيل، الإعداد، وتجربة الخدمة على مختلف الأجهزة المتوافقة.`,
      "email": homeContent.email,
      "telephone": homeContent.telephone,
      "foundingDate": "2020",
      "areaServed": [
        {
          "@type": "Country",
          "name": "Morocco"
        },
        {
          "@type": "Place",
          "name": "Worldwide"
        }
      ],
      "availableLanguage": ["ar", "fr"],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": homeContent.telephone,
          "email": homeContent.email,
          "contactType": "customer support",
          "areaServed": "MA",
          "availableLanguage": ["ar", "fr"]
        },
        {
          "@type": "ContactPoint",
          "telephone": homeContent.telephone,
          "email": homeContent.email,
          "contactType": "sales",
          "areaServed": "MA",
          "availableLanguage": ["ar", "fr"]
        }
      ],
      "sameAs": [
        "https://www.facebook.com/yourpage",
        "https://www.instagram.com/yourpage",
        "https://www.tiktok.com/@yourpage",
        "https://www.youtube.com/@yourchannel"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://iptvforja.com/#website",
      "url": "https://iptvforja.com/",
      "name": homeContent.Name,
      "description": "متجر رقمي لبيع اشتراكات IPTV وخدمات رقمية عبر الإنترنت.",
      "inLanguage": "ar",
      "publisher": {
        "@id": "https://iptvforja.com/#organization"
      }
    }
  ]
};