export const Home_schema = {
  "@context": "https://schema.org",
  "@graph": [
    /* =========================
       🟢 ORGANIZATION (ROOT)
    ========================= */
    {
      "@type": "Organization",
      "@id": "#org",
      name: "IPTV FORJA",
      url: "https://iptvforja.com",

      logo: {
        "@type": "ImageObject",
        url: "https://iptvforja.com/logo.png"
      },

      sameAs: [
        "https://facebook.com/brand",
        "https://instagram.com/brand",
        "https://youtube.com/brand"
      ]
    },

    /* =========================
       🌐 WEBSITE (SEARCH + NAV)
    ========================= */
    {
      "@type": "WebSite",
      "@id": "#site",
      name: "IPTV FORJA",
      url: "https://iptvforja.com",
      publisher: { "@id": "#org" },

      potentialAction: {
        "@type": "SearchAction",
        target: "https://iptvforja.com/search?q={search_term}",
        "query-input": "required name=search_term"
      }
    },

    /* =========================
       📄 HOMEPAGE
    ========================= */
    {
      "@type": "WebPage",
      "@id": "#home",
      name: "IPTV FORJA - Home",
      url: "https://iptvforja.com",
      isPartOf: { "@id": "#site" },
      about: { "@id": "#org" }
    },

    /* =========================
       ⚙️ SERVICE (CORE BUSINESS)
    ========================= */
    {
      "@type": "Service",
      "@id": "#service",
      name: "IPTV Streaming Service",
      provider: { "@id": "#org" },
      description:
        "IPTV subscription service providing live TV channels and VOD content"
    },

    /* =========================
       ❓ FAQ (SEO BOOST)
    ========================= */
    {
      "@type": "FAQPage",
      "@id": "#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "ما هو IPTV؟",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "IPTV هو تلفزيون عبر الإنترنت يوفر القنوات المباشرة والأفلام والمسلسلات."
          }
        },
        {
          "@type": "Question",
          name: "هل الخدمة تعمل 24/7؟",
          acceptedAnswer: {
            "@type": "Answer",
            text: "نعم، الخدمة تعمل بشكل مستمر طوال اليوم بدون توقف."
          }
        }
      ]
    },

    /* =========================
       🧭 BREADCRUMB
    ========================= */
    {
      "@type": "BreadcrumbList",
      "@id": "#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://iptvforja.com"
        }
      ]
    },

    /* =========================
       📦 PRODUCT (OPTIONAL BUT STRONG)
    ========================= */
    {
      "@type": "Product",
      "@id": "#product",
      name: "IPTV Subscription",
      brand: { "@id": "#org" },

      offers: {
        "@type": "Offer",
        price: "10",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: "https://iptvforja.com"
      }
    }
  ]
};