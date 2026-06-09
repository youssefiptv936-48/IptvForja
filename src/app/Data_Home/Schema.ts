export const Schema ={
  "@context": "https://schema.org",
  "@graph": [

    /* =========================================================
       🌳 1. ORGANIZATION TREE (هوية الشركة)
       ROOT ENTITY - جميع الأشياء تتفرع منه
    ========================================================= */
    {
      "@type": "Organization",
      "@id": "#org",
      "name": "IPTV FORJA",
      "url": "https://example.com",
      "logo": "https://example.com/logo.png"
    },

    {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "availableLanguage": ["en", "fr", "ar"],
      "areaServed": "Worldwide",
      "parent": { "@id": "#org" }
    },

    {
      "@type": "Organization",
      "@id": "#org-social",
      "sameAs": [
        "https://facebook.com/brand",
        "https://instagram.com/brand",
        "https://youtube.com/brand"
      ],
      "parent": { "@id": "#org" }
    },

    /* =========================================================
       🌳 2. WEBSITE TREE (هيكل الموقع)
       ROOT OF NAVIGATION + SEARCH
    ========================================================= */
    {
      "@type": "WebSite",
      "@id": "#site",
      "name": "IPTV FORJA",
      "url": "https://example.com",
      "publisher": { "@id": "#org" },

      /* 🔍 SEARCH ACTION (داخل الموقع) */
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://example.com/search?q={search_term}",
        "query-input": "required name=search_term"
      }
    },

    /* =========================================================
       🌳 3. WEBPAGE TREE (صفحة الموقع الرئيسية)
    ========================================================= */
    {
      "@type": "WebPage",
      "@id": "#faq-page",
      "name": "FAQ IPTV",
      "isPartOf": { "@id": "#site" },
      "about": { "@id": "#org" }
    },

    /* =========================================================
       🌳 4. CREATIVEWORK TREE (المحتوى التعليمي)
    ========================================================= */
    {
      "@type": "CreativeWork",
      "@id": "#content",
      "name": "IPTV FAQ Content",
      "isPartOf": { "@id": "#faq-page" },
      "author": {
        "@type": "Person",
        "name": "Support Team IPTV FORJA"
      },
      "publisher": { "@id": "#org" }
    },

    /* =========================================================
       🌳 5. FAQ TREE (الأسئلة والأجوبة)
    ========================================================= */
    {
      "@type": "FAQPage",
      "@id": "#faq",
      "mainEntity": [

        {
          "@type": "Question",
          "name": "كم سعر اشتراك IPTV؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "يعتمد السعر على مدة الاشتراك (3 أشهر أو سنة) مع خصومات على الاشتراك السنوي."
          }
        },

        {
          "@type": "Question",
          "name": "ما هو IPTV وكيف يعمل؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "هو تلفزيون عبر الإنترنت يوفر قنوات مباشرة وأفلام ومسلسلات عبر الشبكة."
          }
        }

      ]
    },

    /* =========================================================
       🌳 6. SERVICE TREE (الخدمة الأساسية)
    ========================================================= */
    {
      "@type": "Service",
      "@id": "#service",
      "name": "IPTV Streaming Service",
      "provider": { "@id": "#org" },
      "description": "Digital IPTV subscription service with live channels and VOD"
    },

    /* =========================================================
       🌳 7. PRODUCT TREE (المنتج الأساسي)
    ========================================================= */
    {
      "@type": "Product",
      "@id": "#product",
      "name": "IPTV Subscription",
      "description": "اشتراك IPTV يتيح مشاهدة القنوات والأفلام والمسلسلات",
      "brand": { "@id": "#org" },

      "offers": {
        "@type": "Offer",
        "price": "10",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": "https://example.com/order"
      }
    },

    /* =========================================================
       🌳 8. OFFER CATALOG TREE (الباقات)
    ========================================================= */
    {
      "@type": "OfferCatalog",
      "@id": "#catalog",
      "name": "IPTV Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Basic Plan",
          "price": "10",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "name": "Premium Plan",
          "price": "20",
          "priceCurrency": "EUR"
        }
      ]
    },

    /* =========================================================
       🌳 9. ACTION TREE (التفاعل والتحويل)
    ========================================================= */
    {
      "@type": "Action",
      "@id": "#actions",
      "potentialAction": [

        {
          "@type": "ViewAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://example.com"
          }
        },

        {
          "@type": "OrderAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://example.com"
          }
        },

        {
          "@type": "SubscribeAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://example.com"
          }
        }

      ]
    },

    /* =========================================================
       🌳 10. BREADCRUMB TREE (التنقل داخل الموقع)
    ========================================================= */
    {
      "@type": "BreadcrumbList",
      "@id": "#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://example.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "FAQ IPTV",
          "item": "https://example.com/faq"
        }
      ]
    },

    /* =========================================================
       🌳 11. TRUST TREE (الثقة والتقييم)
    ========================================================= */
    {
      "@type": "AggregateRating",
      "@id": "#rating",
      "ratingValue": "4.8",
      "reviewCount": "120"
    },

    /* =========================================================
       🌳 12. IMAGE TREE (الهوية البصرية)
    ========================================================= */
    {
      "@type": "ImageObject",
      "@id": "#image",
      "contentUrl": "https://example.com/banner.jpg",
      "creator": { "@id": "#org" }
    }

  ]
}