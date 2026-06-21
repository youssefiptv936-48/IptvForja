import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import { Organization } from "./schemas/organization/Organization";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iptvforja.com"),

  title: "أفضل اشتراك IPTV في المغرب 2026 – سيرفرات بدون تقطيع ودعم فني",

  description:
    "استمتع بأقوى سيرفرات IPTV في المغرب مع دعم فني مستمر وجودة 4K فائقة السرعة.",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/iptvforja.png", sizes: "any" },
      {
        url: "/iptvforja-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/iptvforja-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/iptvforja-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/iptvforja-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/iptvforja-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="ar" dir="rtl">
      <body className="bg-black antialiased overflow-x-hidden font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(Organization).replace(/</g, "\\u003c"),
          }}
        />

        <Navbar />

        <main >{children}</main>

        <Footer />

        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}