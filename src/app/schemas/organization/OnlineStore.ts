import { homeContent } from "@/app/Data_Home/HomeContent";

export const OnlineStore = {
  "@type": ["OnlineStore", "OnlineBusiness"],
  "@id": homeContent.siteUrl + "/#online-store",

  name: homeContent.Name + " Online Store",

  alternateName: [
    "IPTVFORJA",
    "IPTV Forja",
    "IPTV Forja Maroc",
    "IPTV Store Maroc",
    "Abonnement IPTV Maroc",
    "IPTV Maroc",
  ],

  url: homeContent.siteUrl + "/",

  description:
    "IPTVFORJA هو متجر إلكتروني متخصص في اشتراكات IPTV في المغرب، يوفر بثاً مستقراً، قنوات رياضية، أفلام، مسلسلات، محتوى للأطفال، جودة 4K وتجربة مجانية قبل الاشتراك.",

  image: homeContent.logoUrl,

  logo: {
    "@type": "ImageObject",
    "@id": homeContent.siteUrl + "/#online-store-logo",
    url: homeContent.logoUrl,
    contentUrl: homeContent.logoUrl,
    caption: homeContent.Name + " Online Store",
  },

  parentOrganization: {
    "@type": "Organization",
    "@id": homeContent.siteUrl + "/#organization",
    name: homeContent.Name,
  },

  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: homeContent.email,
    availableLanguage: ["ar", "fr"],
    areaServed: {
      "@type": "Country",
      name: "Morocco",
      alternateName: "MA",
    },
  },

  areaServed: {
    "@type": "Country",
    name: "Morocco",
    alternateName: "MA",
  },

  hasOfferCatalog: {
    "@type": "OfferCatalog",
    "@id": homeContent.siteUrl + "/#iptv-offer-catalog",
    name: "IPTVFORJA IPTV Subscription Offers",
    itemListElement: [
      {
        "@type": "Offer",
        "@id": homeContent.siteUrl + "/abonnement-iptv/#iptv-subscription-offer",
        name: "اشتراك IPTV في المغرب",
        url: homeContent.siteUrl + "/abonnement-iptv",
        category: "Digital IPTV Subscription",
        itemOffered: {
          "@type": "Service",
          name: "Abonnement IPTV Maroc",
          serviceType: "IPTV Subscription",
          areaServed: {
            "@type": "Country",
            name: "Morocco",
            alternateName: "MA",
          },
        },
      },
      {
        "@type": "Offer",
        "@id": homeContent.siteUrl + "/Test-Iptv/#free-trial-offer",
        name: "تجربة IPTV مجانية",
        url: homeContent.siteUrl + "/Test-Iptv",
        category: "Free IPTV Trial",
        itemOffered: {
          "@type": "Service",
          name: "تجربة IPTV مجانية",
          serviceType: "IPTV Free Trial",
          areaServed: {
            "@type": "Country",
            name: "Morocco",
            alternateName: "MA",
          },
        },
      },
    ],
  },

  knowsAbout: [
    "IPTV Maroc",
    "Abonnement IPTV Maroc",
    "IPTV 4K",
    "IPTV Sport",
    "IPTV sans coupure",
    "IPTV beIN Sports",
    "IPTV Smart TV",
    "IPTV Android",
    "IPTV Smarters Pro",
    "Ibo Player",
    "Streaming TV",
    "Chaînes sportives IPTV",
    "Films et séries IPTV",
    "VOD IPTV",
    "IPTV sans buffering",
  ],

  availableLanguage: ["ar", "fr"],

  sameAs: [
    // ضع فقط روابطك الحقيقية هنا
    // "https://www.facebook.com/iptvforja",
    // "https://www.instagram.com/iptvforja",
    // "https://www.tiktok.com/@iptvforja",
    // "https://wa.me/212XXXXXXXXX"
  ],
} satisfies Record<string, unknown>;