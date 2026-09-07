import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "پاکت پلاست | تولیدکننده پاکت و پوشه ضدآب با چاپ اختصاصی",
  description: "پاکت پلاست تولیدکننده پوشه دکمه دار، پاکت سند، پاکت رادیولوژی، پاکت MRI، پاکت پرونده بیمار، پاکت A4 و بگ‌شاپ ضدآب با چاپ اختصاصی است.",
  manifest: "/images/site.webmanifest",
  icons: {
    icon: [
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/images/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://pakatplast.com/",
  },
  openGraph: {
    title: "پاکت پلاست | تولید پاکت و پوشه ضدآب",
    description: "تولید مستقیم پاکت و پوشه ضدآب با چاپ اختصاصی و ارسال به سراسر کشور.",
    url: "https://pakatplast.com/",
    siteName: "پاکت پلاست",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: "https://pakatplast.com/images/logo.webp",
        width: 1200,
        height: 630,
        alt: "پاکت پلاست",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "پاکت پلاست",
    description: "تولید پاکت و پوشه ضدآب با چاپ اختصاصی.",
    images: ["https://pakatplast.com/images/logo.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} scroll-smooth`}>
      <head>
        {/* Google Site Verification - Hardcoded as requested to ensure it works */}
        <meta name="google-site-verification" content="OkqHs7_K6PNrVe48SSwGtBv8YVuj6ocCMLn7gg5V5no" />
        
        {/* Microsoft Clarity Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+"yeqf0sq1h1";
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "yeqf0sq1h1");
            `,
          }}
        />
      </head>
      <body className="bg-slate-50 text-slate-800 font-vazirmatn flex flex-col min-h-[100dvh] antialiased selection:bg-cyan-500 selection:text-white relative">
        <Header />
        <main id="main" className="flex-grow pt-28">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
