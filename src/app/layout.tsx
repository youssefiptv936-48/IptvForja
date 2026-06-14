import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// هذا الجزء هو الذي سيصلح الـ SEO فوراً
export const metadata: Metadata = {
  title: "أفضل اشتراك IPTV في المغرب 2026 – سيرفرات بدون تقطيع ودعم فني",
  description: "استمتع بأقوى سيرفرات IPTV في المغرب مع دعم فني مستمر وجودة 4K فائقة السرعة.",
 icons: {
  icon: [
    { url: "/favicon/iptvforja.png", sizes: "any" },
    { url: "/favicon/iptvforja-48x48.png", sizes: "48x48", type: "image/png" },
    { url: "/favicon/iptvforja-96x96.png", sizes: "96x96", type: "image/png" },
    { url: "/favicon/iptvforja-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "/favicon/iptvforja-512x512.png", sizes: "512x512", type: "image/png" },
  ],
  apple: [
    { url: "/favicon/iptvforja-180x180.png", sizes: "180x180", type: "image/png" },
  ],
},
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      {/* ستقوم Next.js بحقن الـ Title والـ Description تلقائياً هنا من كائن metadata */}
      <body className="bg-black antialiased overflow-x-hidden font-sans">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}