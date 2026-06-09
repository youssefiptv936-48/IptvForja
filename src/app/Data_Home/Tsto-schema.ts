// data_seo/olive_home_schema.ts

export const HomeSchema = {
  "@context": "https://schema.org",

  "@graph": [

    /* =========================================================
       🌳 ORGANIZATION TREE (Arbre de l'organisation)
       🔗 SOURCE PATH:
       Thing
         → Organization
       🔽 CHILDREN OUTPUT:
       WebSite, Service, Person
    ========================================================= */
    {
      "@type": "Organization",
      "@id": "https://olive.com/#organization",
      "name": "Olive Farm Morocco",
      "url": "https://olive.com",
      "logo": "https://olive.com/logo.png",
      "sameAs": [
        "https://facebook.com/olivefarm",
        "https://instagram.com/olivefarm"
      ]
    },

    /* =========================================================
       🌳 WEBSITE TREE (Arbre du site web)
       🔗 SOURCE PATH:
       Thing
         → CreativeWork
           → WebSite
       🔽 CHILDREN OUTPUT:
       WebPage, SearchAction
    ========================================================= */
    {
      "@type": "WebSite",
      "@id": "https://olive.com/#website",
      "url": "https://olive.com",
      "name": "Olive Farm Morocco",
      "publisher": {
        "@id": "https://olive.com/#organization"
      },

      /*
      =============================================== 🌳 ACTION TREE (Arbre des actions)
         🔗 SOURCE PATH:
         Thing
           → Action
             → SearchAction
         🔽 OUTPUT:
         Search داخل الموقع 
         =========================================================*/
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://olive.com/search?q={search_term}",
        "query-input": "required name=search_term"
      }
    },

    /* =========================================================
       🌳 WEBPAGE TREE (Arbre des pages)
       🔗 SOURCE PATH:
       Thing
         → CreativeWork
           → WebPage
       🔽 CHILDREN OUTPUT:
       FAQPage, AboutPage, ContentPages
    ========================================================= */
    {
      "@type": "WebPage",
      "@id": "https://olive.com/#homepage",
      "url": "https://olive.com",
      "name": "Home - Olive Farm Morocco",
      "isPartOf": {
        "@id": "https://olive.com/#website"
      },
      "about": {
        "@id": "https://olive.com/#organization"
      }
    },

    /* =========================================================
       🌳 SERVICE TREE (Arbre du service)
       🔗 SOURCE PATH:
       Thing
         → Service
       🔽 CHILDREN OUTPUT:
       OfferCatalog, Offer, Action, Review
    ========================================================= */
    {
      "@type": "Service",
      "@id": "https://olive.com/#service",
      "name": "Olive & Olive Oil Sales",
      "description": "Production and sale of olives and extra virgin olive oil",
      "provider": {
        "@id": "https://olive.com/#organization"
      },

      /* 🌳 OFFER TREE (Arbre des offres)
         🔗 SOURCE PATH:
         Thing
           → Product/Service
             → Offer
         🔽 OUTPUT:
         Products (Oil + Olives) */
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Products",

        "itemListElement": [

          {
            "@type": "Offer",
            "name": "Extra Virgin Olive Oil",
            "price": "15",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "url": "https://olive.com/order/olive-oil"
          },

          {
            "@type": "Offer",
            "name": "Fresh Olives",
            "price": "5",
            "priceCurrency": "EUR",
            "availability": "https://schema.org/InStock",
            "url": "https://olive.com/order/olives"
          }

        ]
      }
    },

    /* =========================================================
       🌳 FAQ TREE (Arbre FAQ)
       🔗 SOURCE PATH:
       Thing
         → CreativeWork
           → WebPage
             → FAQPage
       🔽 CHILDREN OUTPUT:
       Question → Answer
    ========================================================= */
    {
      "@type": "FAQPage",
      "@id": "https://olive.com/#faq",
      "mainEntity": [

        {
          "@type": "Question",
          "name": "How is olive oil produced?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Olive oil is produced by cold pressing fresh olives."
          }
        },

        {
          "@type": "Question",
          "name": "Where are your olives grown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Our olives are grown in Morocco using traditional farming methods."
          }
        }

      ]
    },

    /* =========================================================
       🌳 RATING TREE (Arbre de confiance)
       🔗 SOURCE PATH:
       Thing
         → AggregateRating
       🔽 CHILDREN OUTPUT:
       ratingValue, reviewCount
    ========================================================= */
    {
      "@type": "AggregateRating",
      "@id": "https://olive.com/#rating",
      "ratingValue": "4.9",
      "reviewCount": "250"
    },

    /* =========================================================
       🌳 PERSON TREE (Arbre du fondateur)
       🔗 SOURCE PATH:
       Thing
         → Person
       🔽 CHILDREN OUTPUT:
       worksFor → Organization
    ========================================================= */
    {
      "@type": "Person",
      "@id": "https://olive.com/#author",
      "name": "Ahmed",
      "jobTitle": "Farm Owner",
      "worksFor": {
        "@id": "https://olive.com/#organization"
      }
    }

  ]
};