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
  verification: {
    google: "OkqHs7_K6PNrVe48SSwGtBv8YVuj6ocCMLn7gg5V5no",
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
        {/* Microsoft Clarity Script Placeholder */}
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
      <body className="bg-[#fafafa] text-[#333] font-vazirmatn flex flex-col min-h-[100dvh] pt-[82px] md:pt-[82px]">
        <Header />
        <main id="main" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
