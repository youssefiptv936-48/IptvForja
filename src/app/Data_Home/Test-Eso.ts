// data_seo/home_seo.ts

export const HomeSchema = {
  "@context": "https://schema.org",

  /* =========================
     1. ORGANIZATION (الهوية)
     ========================= */
  "@type": "Organization",
  "name": "Brand IPTV",
  "url": "https://site.com",
  "logo": "https://site.com/logo.png",
  "sameAs": [
    "https://facebook.com/brand",
    "https://instagram.com/brand"
  ],

  /* =========================
     2. WEBSITE (الموقع كامل)
     ========================= */
  "mainEntityOfPage": {
    "@type": "WebSite",
    "url": "https://site.com",
    "name": "Brand IPTV",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://site.com/search?q={search_term}",
      "query-input": "required name=search_term"
    }
  },

  /* =========================
     3. WEB PAGES (الصفحات)
     ========================= */
  "hasPart": [
    {
      "@type": "WebPage",
      "name": "Home",
      "url": "https://site.com"
    },
    {
      "@type": "WebPage",
      "name": "Pricing",
      "url": "https://site.com/pricing"
    },
    {
      "@type": "FAQPage",
      "url": "https://site.com/faq"
    },
    {
      "@type": "WebPage",
      "name": "Contact",
      "url": "https://site.com/contact"
    },
    {
      "@type": "WebPage",
      "name": "Blog",
      "url": "https://site.com/blog"
    }
  ],

  /* =========================
     4. SERVICE (الخدمة الأساسية)
     ========================= */
  "makesOffer": {
    "@type": "Service",
    "name": "IPTV Subscription",
    "description": "Digital streaming subscription service",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Basic Plan",
          "price": "10",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "Premium Plan",
          "price": "20",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      ]
    }
  },

  /* =========================
     5. REVIEWS (الثقة)
     ========================= */
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "120"
  },

  /* =========================
     6. PERSON (صاحب المشروع)
     ========================= */
  "author": {
    "@type": "Person",
    "name": "Youssef",
    "jobTitle": "Founder"
  },

  /* =========================
     7. CONTENT (SEO TRAFFIC)
     ========================= */
  "subjectOf": {
    "@type": "Blog",
    "hasPart": [
      {
        "@type": "BlogPosting",
        "name": "Best IPTV Guide 2026"
      },
      {
        "@type": "TechArticle",
        "name": "How IPTV Works"
      }
    ]
  },

  /* =========================
     8. BREADCRUMB
     ========================= */
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://site.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Pricing",
        "item": "https://site.com/pricing"
      }
    ]
  }
};