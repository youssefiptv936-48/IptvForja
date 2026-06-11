export const Home_schema = {
  "@context": "https://schema.org",
  "@graph": [
    /* =========================
       🟢 المؤسسة (المصدر الرئيسي)
    ========================= */
    {
      "@type": "Organization",
      "@id": "https://iptvforja.com/#org",
      "name": "IPTV FORJA",
      "url": "https://iptvforja.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://iptvforja.com/logo.png"
      },
      "sameAs": [
        "https://facebook.com/brand",
        "https://instagram.com/brand",
        "https://youtube.com/brand"
      ]
    },

    /* =========================
       🌐 الموقع الإلكتروني (البحث والتنقل)
    ========================= */
    {
      "@type": "WebSite",
      "@id": "https://iptvforja.com/#site",
      "name": "IPTV FORJA",
      "url": "https://iptvforja.com",
      "publisher": { "@id": "https://iptvforja.com/#org" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://iptvforja.com/search?q={search_term}",
        "query-input": "required name=search_term"
      }
    },

    /* =========================
       📄 الصفحة الرئيسية (محور الربط)
    ========================= */
    {
      "@type": "WebPage",
      "@id": "https://iptvforja.com/#home",
      "name": "IPTV FORJA - أفضل خدمة اشتراك IPTV للمشاهدة بدون تقطيع",
      "url": "https://iptvforja.com",
      "isPartOf": { "@id": "https://iptvforja.com/#site" },
      "about": { "@id": "https://iptvforja.com/#org" },
      "description": "اشترك الآن في IPTV FORJA واستمتع بمشاهدة القنوات المباشرة، الأفلام، والمسلسلات بجودة عالية وبدون تقطيع.",
      "breadcrumb": { "@id": "https://iptvforja.com/#breadcrumb" },
      "mainEntity": { "@id": "https://iptvforja.com/#faq" }
    },

    /* =========================
       ⚙️ الخدمة الأساسية
    ========================= */
    {
      "@type": "Service",
      "@id": "https://iptvforja.com/#service",
      "name": "خدمة بث وتلفزيون عبر الإنترنت (IPTV)",
      "provider": { "@id": "https://iptvforja.com/#org" },
      "description": "خدمة اشتراك IPTV توفر قنوات تلفزيونية بث مباشر ومكتبة ضخمة من الأفلام والمسلسلات (VOD)."
    },

    /* =========================
       ❓ الأسئلة الشائعة (تعزيز SEO)
    ========================= */
    {
      "@type": "FAQPage",
      "@id": "https://iptvforja.com/#faq",
      "isPartOf": { "@id": "https://iptvforja.com/#home" },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "ما هو IPTV؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "IPTV هو تلفزيون عبر الإنترنت يوفر القنوات المباشرة والأفلام والمسلسلات."
          }
        },
        {
          "@type": "Question",
          "name": "هل الخدمة تعمل 24/7؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "نعم، الخدمة تعمل بشكل مستمر طوال اليوم بدون توقف."
          }
        }
      ]
    },

    /* =========================
       🧭 مسار التنقل (Breadcrumb)
    ========================= */
    {
      "@type": "BreadcrumbList",
      "@id": "https://iptvforja.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "الرئيسية",
          "item": "https://iptvforja.com"
        }
      ]
    },

    /* =========================
       📦 المنتج التجاري (العرض والسعر)
    ========================= */
    {
      "@type": "Product",
      "@id": "https://iptvforja.com/#product",
      "name": "اشتراك IPTV المتميز",
      "description": "احصل على أفضل اشتراك IPTV لمشاهدة جميع القنوات العالمية والعربية بدقة عالية وثبات تام.",
      "brand": { "@id": "https://iptvforja.com/#org" },
      "offers": {
        "@type": "Offer",
        "price": "10.00",
        "priceCurrency": "EUR",
        "priceValidUntil": "2027-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://iptvforja.com"
      }
    }
  ]
};