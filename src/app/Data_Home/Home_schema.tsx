

export const Home_schema = {
  "@context": "https://schema.org",
  "@graph":[
    /* =========================================================
       🌳 1. ORGANIZATION TREE (هوية الشركة)
       ROOT ENTITY - جميع الأشياء تتفرع منه
    ========================================================= */
{
  "@type": "Organization", 
  // هذا يعني: هذا الكيان هو "شركة / مشروع / علامة تجارية"

  "@id": "#org",
  // هذا "معرف داخلي" (ID) نستعمله لربط هذا العنصر بباقي السكيمة

  "name": "IPTV FORJA",
  // اسم الشركة أو المشروع (اسم العلامة التجارية)

  "url": "https://example.com",
  // الرابط الرسمي للموقع (الصفحة الرئيسية للشركة)

  "logo": "https://example.com/logo.png",
  // رابط صورة الشعار (Logo) الذي يمثل الشركة

  "description": "IPTV subscription service providing live TV channels and VOD content",
  // وصف بسيط: ماذا تقدم الشركة (خدمة IPTV + قنوات + فيديو حسب الطلب)

  "foundingDate": "2024",
  // سنة تأسيس المشروع (مهم لإعطاء ثقة أنه مشروع حقيقي)

  "areaServed": "Worldwide",
  // المناطق التي تخدمها الشركة (هنا: العالم كامل)

  "contactPoint": {
    "@type": "ContactPoint",
    // هذا يعني: طريقة أو نقطة الاتصال مع الشركة

    "contactType": "customer support",
    // نوع الاتصال: هنا دعم العملاء (customer support)

    "availableLanguage": ["en", "fr", "ar"]
    // اللغات التي يمكن التواصل بها مع الدعم
  }
}
  ]
  
}
