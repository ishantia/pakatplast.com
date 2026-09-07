import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import productsData from "@/data/products.json";

export const metadata: Metadata = {
  title: "محصولات پاکت پلاست | پاکت سند، MRI، A4 و بگ‌شاپ",
  description: "مشاهده محصولات پاکت پلاست شامل پوشه دکمه‌دار، پاکت سند، پاکت رادیولوژی، پاکت MRI، پاکت پرونده بیمار، پاکت A4 و بگ‌شاپ تبلیغاتی.",
  alternates: {
    canonical: "https://pakatplast.com/products",
  },
  openGraph: {
    title: "محصولات پاکت پلاست",
    description: "انواع پاکت و پوشه ضدآب با چاپ اختصاصی.",
    url: "https://pakatplast.com/products",
  },
};

export default function Products() {
  return (
    <>
      <section className="hero-gradient-small text-white text-center px-5 py-[95px] md:py-[120px]">
        <div className="container mx-auto max-w-[1100px]">
          <h1 className="text-[clamp(2.4rem,6vw,4.2rem)] font-black leading-[1.25] mb-5 drop-shadow-md">محصولات پاکت پلاست</h1>
          <p className="text-[clamp(1.1rem,2.5vw,1.55rem)] max-w-[900px] mx-auto">
            برای دریافت قیمت و مشاوره روی دکمه استعلام قیمت هر محصول کلیک کنید.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-[90px]" aria-labelledby="products-grid-title">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <h2 className="sr-only" id="products-grid-title">فهرست محصولات</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {productsData.map((product, index) => {
              // Ensure path has leading slash
              const imagePath = product.image.startsWith("/") ? product.image : `/${product.image.replace("assets/", "")}`;
              
              return (
                <article key={index} className="bg-white rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex flex-col min-h-full overflow-hidden hover:shadow-[0_18px_46px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all">
                  <div className="relative w-full aspect-[10/7]">
                    <Image
                      src={imagePath}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-dark text-xl font-bold px-[18px] pt-5 pb-2">{product.title}</h3>
                  <p className="text-muted flex-grow px-[18px] pb-5">{product.desc}</p>
                  <div className="px-[18px] pb-6 flex justify-center">
                    <Link 
                      href="/contact"
                      className="bg-primary-strong text-white hover:bg-dark text-[1rem] font-bold rounded-full px-6 py-3 transition-colors text-center w-full sm:w-auto min-w-[150px]"
                    >
                      استعلام قیمت
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
