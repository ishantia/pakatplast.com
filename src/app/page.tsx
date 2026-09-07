import Link from "next/link";
import { Check, ShieldAlert, Printer, Flag, Leaf, Award } from "lucide-react";
import { Slider } from "@/components/Slider";

export default function Home() {
  return (
    <>
      <section className="hero-gradient relative text-white text-center overflow-hidden px-5 pt-[150px] pb-[100px] md:pt-[190px] md:pb-[130px]">
        <div className="absolute inset-0 bg-[#0f3460]/35 z-0" />
        <div className="container mx-auto max-w-[1100px] relative z-10">
          <h1 className="text-[clamp(2.4rem,6vw,4.2rem)] font-black leading-[1.25] mb-5 drop-shadow-md">
            چاپ پوشه‌های تبلیغاتی و اختصاصی
          </h1>
          <p className="text-[clamp(1.1rem,2.5vw,1.55rem)] max-w-[900px] mx-auto">
            تولید اختصاصی انواع پوشه‌های دکمه‌دار، بگ‌شاپ، پاکت سند و پاکت پرونده بیمار
          </p>
          
          <div className="flex flex-wrap justify-center gap-5 text-[1.15rem] my-12" aria-label="ویژگی‌های اصلی">
            <span className="flex items-center gap-2.5 bg-white/15 rounded-full px-5 py-3 w-full md:w-auto justify-center">
              <Check className="text-[#b8ffc7]" size={22} aria-hidden="true" />
              ۱۰۰٪ ضدآب و مقاوم
            </span>
            <span className="flex items-center gap-2.5 bg-white/15 rounded-full px-5 py-3 w-full md:w-auto justify-center">
              <Check className="text-[#b8ffc7]" size={22} aria-hidden="true" />
              چاپ طرح اختصاصی
            </span>
            <span className="flex items-center gap-2.5 bg-white/15 rounded-full px-5 py-3 w-full md:w-auto justify-center">
              <Check className="text-[#b8ffc7]" size={22} aria-hidden="true" />
              ارسال به سراسر کشور
            </span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 my-14">
            <Link 
              href="/products" 
              className="bg-white text-dark text-xl font-bold rounded-full px-10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-transform w-full md:w-auto min-w-[250px]"
            >
              مشاهده همه محصولات
            </Link>
            <Link 
              href="/contact" 
              className="bg-transparent border-[3px] border-white text-white hover:bg-white hover:text-dark text-xl font-bold rounded-full px-10 py-4 transition-all hover:-translate-y-1 w-full md:w-auto min-w-[250px]"
            >
              درخواست مشاوره رایگان
            </Link>
          </div>
          
          <p className="text-[1.35rem]">
            بیش از <strong className="text-[#b8ffc7] font-black text-[1.8rem]">۹۲۰ مشتری فعال</strong> در سراسر ایران به ما اعتماد کرده‌اند
          </p>
        </div>
      </section>

      <section className="bg-light py-20 md:py-[90px]" aria-labelledby="slider-title">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <h2 id="slider-title" className="text-dark text-[clamp(2rem,4vw,2.6rem)] text-center leading-snug mb-14">
            محصولات پاکت پلاست
          </h2>
          <Slider />
        </div>
      </section>

      <section className="py-20 md:py-[90px]" aria-labelledby="why-title">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <h2 id="why-title" className="text-dark text-[clamp(2rem,4vw,2.6rem)] text-center leading-snug mb-14">
            چرا پاکت پلاست؟
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            <article className="bg-white rounded-[18px] p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_46px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all">
              <ShieldAlert className="text-primary-strong mx-auto mb-5" size={54} />
              <h3 className="text-dark text-xl font-bold">۱۰۰٪ ضدآب</h3>
            </article>
            <article className="bg-white rounded-[18px] p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_46px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all">
              <Printer className="text-primary-strong mx-auto mb-5" size={54} />
              <h3 className="text-dark text-xl font-bold">چاپ اختصاصی</h3>
            </article>
            <article className="bg-white rounded-[18px] p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_46px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all">
              <Flag className="text-primary-strong mx-auto mb-5" size={54} />
              <h3 className="text-dark text-xl font-bold">تولید ۱۰۰٪ داخلی</h3>
            </article>
            <article className="bg-white rounded-[18px] p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_46px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all">
              <Leaf className="text-primary-strong mx-auto mb-5" size={54} />
              <h3 className="text-dark text-xl font-bold">دوست‌دار محیط زیست</h3>
            </article>
            <article className="bg-white rounded-[18px] p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_46px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all">
              <Award className="text-primary-strong mx-auto mb-5" size={54} />
              <h3 className="text-dark text-xl font-bold">کیفیت تضمینی</h3>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
