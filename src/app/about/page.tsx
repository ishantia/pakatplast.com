import Image from "next/image";
import { Users, CalendarDays, Box, Truck, Gem, Heart, Lightbulb } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "درباره ما | پاکت پلاست",
  description: "پاکت پلاست از سال ۱۳۹۵ تولیدکننده انواع پوشه و پاکت ضدآب با چاپ اختصاصی برای کسب‌وکارها، مراکز درمانی و سازمان‌ها است.",
  alternates: {
    canonical: "https://pakatplast.com/about",
  },
  openGraph: {
    title: "درباره پاکت پلاست",
    description: "تولیدکننده تخصصی پاکت‌های ضدآب با بیش از ۱۰ سال تجربه.",
    url: "https://pakatplast.com/about",
  },
};

export default function About() {
  return (
    <>
      <section className="about-hero relative text-white text-center overflow-hidden px-5 py-[95px] md:py-[120px]">
        <div className="container mx-auto max-w-[1100px] relative z-10">
          <h1 className="text-[clamp(2.4rem,6vw,4.2rem)] font-black leading-[1.25] mb-5 drop-shadow-md">ما کی هستیم؟</h1>
          <p className="text-[clamp(1.1rem,2.5vw,1.55rem)] max-w-[900px] mx-auto">
            تولیدکننده تخصصی پاکت‌های ضدآب با بیش از ۱۰ سال تجربه در صنعت بسته‌بندی
          </p>
        </div>
      </section>

      <section className="py-20 md:py-[90px]" aria-labelledby="story-title">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1">
              <h2 id="story-title" className="text-dark text-[clamp(2rem,4vw,2.6rem)] leading-snug mb-6 font-bold">
                داستان پاکت پلاست از سال ۱۳۹۵
              </h2>
              <p className="text-[#444] text-[1.18rem] leading-[2.1] mt-5">
                همه چیز از یک کارگاه کوچک در اصفهان شروع شد. دیدیم که بسیاری از کسب‌وکارها، مطب‌ها و وکلا برای محافظت از اسناد و محصولاتشان به پاکت‌هایی مقاوم‌تر نیاز دارند.
              </p>
              <p className="text-[#444] text-[1.18rem] leading-[2.1] mt-5">
                تصمیم گرفتیم پاکت‌هایی تولید کنیم که واقعا <strong className="text-dark font-bold">۱۰۰٪ ضدآب</strong> باشند، ظاهر حرفه‌ای داشته باشند و با قیمت مناسب به دست مشتری برسند. امروز با تجربه تولید گسترده، به نقاط مختلف کشور ارسال داریم.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <Image 
                src="/images/logo.webp" 
                alt="نشان پاکت پلاست" 
                width={600} 
                height={420} 
                className="w-full rounded-[20px] shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-20 md:py-[90px]" aria-labelledby="stats-title">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <h2 id="stats-title" className="text-dark text-[clamp(2rem,4vw,2.6rem)] text-center leading-snug mb-14 font-bold">
            ما به اعداد افتخار می‌کنیم
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <article className="bg-white rounded-[20px] p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <Users className="text-primary-strong mx-auto mb-5" size={54} />
              <h3 className="text-dark text-[2.6rem] font-bold my-2">۹۲۰+</h3>
              <p className="text-muted text-[1.15rem]">مشتری فعال</p>
            </article>
            <article className="bg-white rounded-[20px] p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <CalendarDays className="text-primary-strong mx-auto mb-5" size={54} />
              <h3 className="text-dark text-[2.6rem] font-bold my-2">۱۰+</h3>
              <p className="text-muted text-[1.15rem]">سال تجربه</p>
            </article>
            <article className="bg-white rounded-[20px] p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <Box className="text-primary-strong mx-auto mb-5" size={54} />
              <h3 className="text-dark text-[2.6rem] font-bold my-2">۵۰+</h3>
              <p className="text-muted text-[1.15rem]">مدل محصول</p>
            </article>
            <article className="bg-white rounded-[20px] p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              <Truck className="text-primary-strong mx-auto mb-5" size={54} />
              <h3 className="text-dark text-[2.6rem] font-bold my-2">۳۱</h3>
              <p className="text-muted text-[1.15rem]">استان تحت پوشش</p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-[90px]" aria-labelledby="values-title">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <h2 id="values-title" className="text-dark text-[clamp(2rem,4vw,2.6rem)] text-center leading-snug mb-14 font-bold">
            ارزش‌های ما
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article className="bg-white rounded-[18px] p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_46px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all">
              <Gem className="text-primary-strong mx-auto mb-5" size={54} />
              <h3 className="text-dark text-xl font-bold mb-3">کیفیت بی‌نظیر</h3>
              <p className="text-muted">استفاده از مواد اولیه مناسب و دستگاه‌های دقیق برای تولید پایدار.</p>
            </article>
            <article className="bg-white rounded-[18px] p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_46px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all">
              <Heart className="text-primary-strong mx-auto mb-5" size={54} />
              <h3 className="text-dark text-xl font-bold mb-3">صداقت و تعهد</h3>
              <p className="text-muted">قیمت واقعی، تحویل به موقع و پاسخگویی روشن در تمام مراحل سفارش.</p>
            </article>
            <article className="bg-white rounded-[18px] p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_46px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all">
              <Lightbulb className="text-primary-strong mx-auto mb-5" size={54} />
              <h3 className="text-dark text-xl font-bold mb-3">نوآوری مداوم</h3>
              <p className="text-muted">به‌روزرسانی مدل‌ها، رنگ‌ها و طرح‌ها بر اساس نیاز بازار.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
