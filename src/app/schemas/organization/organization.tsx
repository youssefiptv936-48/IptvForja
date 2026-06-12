import { homeContent } from "@/app/Data_Home/HomeContent";

export default function Organization() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://example.com/#organization",

    name: homeContent.Name,
    url: homeContent.siteUrl,

    logo: {
      "@type": "ImageObject",
      url: homeContent.logoUrl,
    },

    description: "متجر متخصص في بيع المنتجات الرقمية.",
    email: homeContent.email,

    sameAs: [
      "https://www.facebook.com/your-page",
      "https://www.instagram.com/your-page",
      "https://www.linkedin.com/company/your-company",
    ],
  } satisfies Record<string, unknown>;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}