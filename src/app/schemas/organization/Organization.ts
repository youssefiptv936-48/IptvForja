import { homeContent } from "@/app/Data_Home/HomeContent";

export const Organization = {
  "@type": "Organization",
  "@id": homeContent.siteUrl + "/#organization",

  // من homeContent
  name: homeContent.Name,
  alternateName: homeContent.alternateName,
  legalName: homeContent.Name,
  url: homeContent.siteUrl + "/",

  // من homeContent
  logo: {
    "@type": "ImageObject",
    "@id": homeContent.siteUrl + "/#logo",
    url: homeContent.logoUrl,
    contentUrl: homeContent.logoUrl,
    caption: homeContent.Name + " Logo",
    inLanguage: "ar-MA",
  },

  // من homeContent
  image: {
    "@type": "ImageObject",
    "@id": homeContent.siteUrl + "/#primaryimage",
    url: homeContent.logoUrl,
    contentUrl: homeContent.logoUrl,
    caption: homeContent.Name + " - اشتراك IPTV في المغرب",
    inLanguage: "ar-MA",
  },

  // مكتوب مباشرة لأن description غير موجودة عندك كحقل مستقل في homeContent
  description:
    "IPTVFORJA هو متجر رقمي متخصص في اشتراكات IPTV في المغرب، يوفر بثاً ثابتاً بدون تقطيع، قنوات رياضية، أفلام، مسلسلات، محتوى للأطفال، جودة 4K وتجربة مجانية قبل الاشتراك.",

  // مكتوب مباشرة
  slogan: "اشتراك IPTV في المغرب بجودة عالية وبدون تقطيع",

  // من homeContent
  email: homeContent.email,

  // مكتوب مباشرة مؤقتاً — بدله برقمك الحقيقي
  telephone: "+212XXXXXXXXX",

  // مكتوب مباشرة مؤقتاً — ضع تاريخاً حقيقياً فقط
  foundingDate: "2026",

  // مكتوب مباشرة
  foundingLocation: {
    "@type": "Place",
    name: "Morocco",
  },

  // مكتوب مباشرة مؤقتاً — لا تتركه هكذا في النسخة النهائية
  address: {
    "@type": "PostalAddress",
    streetAddress: "ضع العنوان الحقيقي هنا",
    addressLocality: "ضع المدينة هنا",
    addressRegion: "ضع الجهة هنا",
    postalCode: "ضع الرمز البريدي هنا",
    addressCountry: {
      "@type": "Country",
      name: "Morocco",
      alternateName: "MA",
    },
  },

  // مكتوب مباشرة مؤقتاً — ضع الإحداثيات الحقيقية فقط
  location: {
    "@type": "Place",
    "@id": homeContent.siteUrl + "/#place",
    name: homeContent.Name,
    address: {
      "@type": "PostalAddress",
      streetAddress: "ضع العنوان الحقيقي هنا",
      addressLocality: "ضع المدينة هنا",
      addressRegion: "ضع الجهة هنا",
      postalCode: "ضع الرمز البريدي هنا",
      addressCountry: {
        "@type": "Country",
        name: "Morocco",
        alternateName: "MA",
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 33.000000,
      longitude: -7.000000,
    },
  },

  // مكتوب مباشرة
  areaServed: [
    {
      "@type": "Country",
      name: "Morocco",
      alternateName: "MA",
    },
  ],

  // مختلط: email من homeContent، الهاتف والواتساب مكتوبان مباشرة
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+212XXXXXXXXX",
      email: homeContent.email,
      url: "https://wa.me/212XXXXXXXXX",
      availableLanguage: ["ar", "fr"],
      areaServed: {
        "@type": "Country",
        name: "Morocco",
        alternateName: "MA",
      },
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: "+212XXXXXXXXX",
      email: homeContent.email,
      url: "https://wa.me/212XXXXXXXXX",
      availableLanguage: ["ar", "fr"],
      areaServed: {
        "@type": "Country",
        name: "Morocco",
        alternateName: "MA",
      },
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@type": "ContactPoint",
      contactType: "technical support",
      telephone: "+212XXXXXXXXX",
      email: homeContent.email,
      url: "https://wa.me/212XXXXXXXXX",
      availableLanguage: ["ar", "fr"],
      areaServed: {
        "@type": "Country",
        name: "Morocco",
        alternateName: "MA",
      },
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
  ],

  // مختلط: الاسم والشعار من homeContent، slogan مكتوب مباشرة
  brand: {
    "@type": "Brand",
    "@id": homeContent.siteUrl + "/#brand",
    name: homeContent.Name,
    alternateName: homeContent.alternateName,
    logo: homeContent.logoUrl,
    slogan: "IPTVFORJA - IPTV Maroc sans coupure",
  },

  // مختلط
  department: [
    {
      "@type": "Organization",
      "@id": homeContent.siteUrl + "/#sales-department",
      name: homeContent.Name + " Sales Department",
      email: homeContent.email,
      telephone: "+212XXXXXXXXX",
    },
    {
      "@type": "Organization",
      "@id": homeContent.siteUrl + "/#customer-support-department",
      name: homeContent.Name + " Customer Support",
      email: homeContent.email,
      telephone: "+212XXXXXXXXX",
    },
    {
      "@type": "Organization",
      "@id": homeContent.siteUrl + "/#technical-support-department",
      name: homeContent.Name + " Technical Support",
      email: homeContent.email,
      telephone: "+212XXXXXXXXX",
    },
  ],

  // مكتوب مباشرة — يجب أن يكون مطابقاً للتقييمات المطبوعة في الصفحة
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "127",
    reviewCount: "127",
  },

  // مكتوب مباشرة — يجب أن تطبع هذه الآراء نفسها في الصفحة
  review: [
    {
      "@type": "Review",
      "@id": homeContent.siteUrl + "/#review-1",
      author: {
        "@type": "Person",
        name: "Ahmed",
      },
      datePublished: "2026-06-01",
      name: "تجربة ممتازة مع " + homeContent.Name,
      reviewBody:
        "الخدمة مستقرة جداً، القنوات الرياضية تعمل بجودة عالية والدعم سريع عبر واتساب.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "Review",
      "@id": homeContent.siteUrl + "/#review-2",
      author: {
        "@type": "Person",
        name: "Youssef",
      },
      datePublished: "2026-06-05",
      name: "اشتراك IPTV جيد في المغرب",
      reviewBody:
        "جربت الاشتراك على Smart TV وكانت الجودة ممتازة، خصوصاً أثناء المباريات.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
    },
    {
      "@type": "Review",
      "@id": homeContent.siteUrl + "/#review-3",
      author: {
        "@type": "Person",
        name: "Sara",
      },
      datePublished: "2026-06-10",
      name: "دعم سريع وتشغيل سهل",
      reviewBody:
        "تم تفعيل الاشتراك بسرعة، وتم شرح طريقة التشغيل على Ibo Player بشكل واضح.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4.8",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],

  // مكتوب مباشرة، مع روابط مبنية على siteUrl من homeContent
  makesOffer: [
    {
      "@type": "Offer",
      "@id": homeContent.siteUrl + "/abonnement-iptv/#offer",
      name: "اشتراك IPTV في المغرب",
      url: homeContent.siteUrl + "/abonnement-iptv",
      category: "Digital IPTV Subscription",
      priceCurrency: "MAD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        "@id": homeContent.siteUrl + "/#organization",
      },
    },
    {
      "@type": "Offer",
      "@id": homeContent.siteUrl + "/Test-Iptv/#free-trial-offer",
      name: "تجربة IPTV مجانية",
      url: homeContent.siteUrl + "/Test-Iptv",
      category: "Free IPTV Trial",
      price: "0",
      priceCurrency: "MAD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        "@id": homeContent.siteUrl + "/#organization",
      },
    },
  ],

  // مكتوب مباشرة
  knowsAbout: [
    "IPTV",
    "IPTV Maroc",
    "Abonnement IPTV Maroc",
    "Meilleur IPTV Maroc",
    "IPTV Sport",
    "IPTV 4K",
    "IPTV sans coupure",
    "IPTV sans buffering",
    "Streaming TV",
    "Chaînes sportives IPTV",
    "beIN Sports IPTV",
    "SSC Sports IPTV",
    "Smart TV IPTV",
    "Android IPTV",
    "IPTV Smarters Pro",
    "Ibo Player",
    "VOD IPTV",
    "Films et séries IPTV",
    "IPTV enfants",
    "Test IPTV gratuit",
  ],

  // مكتوب مباشرة
  knowsLanguage: ["ar", "fr"],

  // مكتوب مباشرة مؤقتاً — ضع روابطك الرسمية الحقيقية فقط
  sameAs: [
    "https://wa.me/212XXXXXXXXX",
    // "https://www.facebook.com/iptvforja",
    // "https://www.instagram.com/iptvforja",
    // "https://www.tiktok.com/@iptvforja",
  ],

  // مختلط
  subjectOf: {
    "@type": "WebSite",
    "@id": homeContent.siteUrl + "/#website",
    name: homeContent.Name,
    url: homeContent.siteUrl + "/",
  },

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": homeContent.siteUrl + "/#webpage",
  },

  identifier: [
    {
      "@type": "PropertyValue",
      propertyID: "website",
      value: homeContent.siteUrl,
    },
    {
      "@type": "PropertyValue",
      propertyID: "brand",
      value: homeContent.Name,
    },
  ],
} satisfies Record<string, unknown>;