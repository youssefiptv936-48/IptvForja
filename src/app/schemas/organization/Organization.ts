import { homeContent } from "@/app/Data_Home/HomeContent";

export const Organization = {
 

  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "OnlineBusiness"],
      "@id": "https://example.com/#organization",
      "name": homeContent.Name,
      "alternateName": homeContent.alternateName,
      "url": "https://iptvforja.com/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://iptvforja.com/#logo",
        "url": "https://example.com/assets/logo.png",
        "contentUrl": "https://example.com/assets/logo.png",
        "caption": "[اسم الموقع] Logo"
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://example.com/assets/cover.jpg"
      },
      "slogan": "اشتراكات IPTV وخدمات رقمية موثوقة عبر الإنترنت",
      "description": "[اسم الموقع] هو متجر رقمي متخصص في بيع اشتراكات IPTV وخدمات رقمية عبر الإنترنت، مع دعم فني لمساعدة العملاء في التفعيل، الإعداد، وتجربة الخدمة على مختلف الأجهزة المتوافقة.",
      "email": "contact@example.com",
      "telephone": "+212600000000",
      "foundingDate": "2024",
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
      "availableLanguage": [
        "Arabic",
        "French",
        "English"
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+212600000000",
          "email": "contact@example.com",
          "contactType": "customer support",
          "areaServed": "MA",
          "availableLanguage": [
            "Arabic",
            "French",
            "English"
          ]
        },
        {
          "@type": "ContactPoint",
          "telephone": "+212600000000",
          "contactType": "sales",
          "areaServed": "MA",
          "availableLanguage": [
            "Arabic",
            "French"
          ]
        }
      ],
      "sameAs": [
        "https://www.facebook.com/yourpage",
        "https://www.instagram.com/yourpage",
        "https://www.tiktok.com/@yourpage",
        "https://www.youtube.com/@yourchannel"
      ],
      "makesOffer": {
        "@id": "https://example.com/#iptv-offer-catalog"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://example.com/#website",
      "url": "https://example.com/",
      "name": "[اسم الموقع]",
      "description": "متجر رقمي لبيع اشتراكات IPTV وخدمات رقمية عبر الإنترنت.",
      "inLanguage": "ar",
      "publisher": {
        "@id": "https://example.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://example.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Service",
      "@id": "https://example.com/#iptv-service",
      "name": "اشتراكات IPTV",
      "alternateName": "IPTV Subscription Service",
      "serviceType": "Digital IPTV subscription service",
      "category": "Digital Services",
      "url": "https://example.com/iptv-subscriptions",
      "description": "خدمة اشتراكات IPTV رقمية يتم تفعيلها عن بعد، مع دعم فني لمساعدة العملاء في الإعداد والتشغيل على الأجهزة المتوافقة.",
      "provider": {
        "@id": "https://example.com/#organization"
      },
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
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": "https://example.com/contact",
        "availableLanguage": [
          "Arabic",
          "French",
          "English"
        ]
      },
      "offers": {
        "@id": "https://example.com/#iptv-offer-catalog"
      }
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://example.com/#iptv-offer-catalog",
      "name": "باقات اشتراكات IPTV",
      "description": "كتالوج باقات IPTV الرقمية المتاحة للشراء عبر الموقع.",
      "itemListElement": [
        {
          "@type": "Offer",
          "@id": "https://example.com/#iptv-1-month",
          "name": "اشتراك IPTV لمدة شهر",
          "url": "https://example.com/iptv-1-month",
          "price": "9.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": {
            "@id": "https://example.com/#organization"
          },
          "itemOffered": {
            "@type": "Service",
            "name": "اشتراك IPTV لمدة شهر",
            "serviceType": "IPTV subscription"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://example.com/#iptv-3-months",
          "name": "اشتراك IPTV لمدة 3 أشهر",
          "url": "https://example.com/iptv-3-months",
          "price": "19.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": {
            "@id": "https://example.com/#organization"
          },
          "itemOffered": {
            "@type": "Service",
            "name": "اشتراك IPTV لمدة 3 أشهر",
            "serviceType": "IPTV subscription"
          }
        },
        {
          "@type": "Offer",
          "@id": "https://example.com/#iptv-12-months",
          "name": "اشتراك IPTV لمدة 12 شهر",
          "url": "https://example.com/iptv-12-months",
          "price": "49.99",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "itemCondition": "https://schema.org/NewCondition",
          "seller": {
            "@id": "https://example.com/#organization"
          },
          "itemOffered": {
            "@type": "Service",
            "name": "اشتراك IPTV لمدة 12 شهر",
            "serviceType": "IPTV subscription"
          }
        }
      ]
    }
  ]
}

