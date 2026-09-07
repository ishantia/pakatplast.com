"use client";

import Image from "next/image";
import { Users, CalendarDays, Box, Truck, Gem, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <section className="pt-20 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-100/50 rounded-full blur-[80px] -z-10" />
        
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-white rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl shadow-slate-200/50 p-2 border border-slate-100"
          >
            <Image src="/images/logo.webp" alt="پاکت پلاست" width={80} height={80} className="object-contain" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-tight"
          >
            درباره <span className="text-cyan-600">پاکت پلاست</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            ما از سال ۱۳۹۵ با هدف ارائه راه‌حل‌های بسته‌بندی مقاوم و ضدآب برای محافظت از اسناد شما در کنار کسب‌وکارتان هستیم.
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-100 to-blue-50 rounded-[40px] -z-10 transform -rotate-3" />
              <Image 
                src="/images/logo.webp" 
                alt="نشان پاکت پلاست" 
                width={800} 
                height={600} 
                className="w-full rounded-[32px] shadow-2xl bg-white object-contain p-8 aspect-[4/3]"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">داستان شکل‌گیری ما</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  همه چیز از یک کارگاه کوچک در اصفهان شروع شد. بررسی بازار نشان می‌داد که بسیاری از کسب‌وکارها، مطب‌های پزشکی، مراکز تصویربرداری و وکلا برای محافظت از اسناد و محصولاتشان به پاکت‌هایی مقاوم‌تر از پاکت‌های کاغذی سنتی نیاز دارند.
                </p>
                <p>
                  تصمیم گرفتیم پاکت‌هایی تولید کنیم که <strong className="text-slate-900">واقعاً ۱۰۰٪ ضدآب</strong> باشند، ظاهر حرفه‌ای داشته باشند و از همه مهم‌تر، امکان چاپ لوگو و طرح سازمانی مشتری روی آن‌ها وجود داشته باشد.
                </p>
                <p>
                  امروز با افتخار به عنوان یکی از تولیدکنندگان تخصصی کشور، با استفاده از دستگاه‌های پیشرفته دوخت و چاپ، سفارشات را با بالاترین کیفیت به تمام نقاط ایران ارسال می‌کنیم.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white mt-10">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="text-center">
              <Users className="text-cyan-400 mx-auto mb-4" size={40} />
              <div className="text-4xl md:text-5xl font-black mb-2">۹۲۰+</div>
              <div className="text-slate-400 text-sm md:text-base">مشتری فعال</div>
            </div>
            <div className="text-center">
              <CalendarDays className="text-cyan-400 mx-auto mb-4" size={40} />
              <div className="text-4xl md:text-5xl font-black mb-2">۱۰+</div>
              <div className="text-slate-400 text-sm md:text-base">سال تجربه تولید</div>
            </div>
            <div className="text-center">
              <Box className="text-cyan-400 mx-auto mb-4" size={40} />
              <div className="text-4xl md:text-5xl font-black mb-2">۵۰+</div>
              <div className="text-slate-400 text-sm md:text-base">تنوع محصول</div>
            </div>
            <div className="text-center">
              <Truck className="text-cyan-400 mx-auto mb-4" size={40} />
              <div className="text-4xl md:text-5xl font-black mb-2">۳۱</div>
              <div className="text-slate-400 text-sm md:text-base">استان تحت پوشش</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">ارزش‌های سازمانی ما</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-10 rounded-[32px] border border-slate-100 hover:shadow-xl transition-shadow">
              <Gem className="text-cyan-600 mb-6" size={48} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">کیفیت متریال</h3>
              <p className="text-slate-600">استفاده از بهترین مواد پلیمری بازار برای تضمین طول عمر بالا و استحکام محصولات در برابر آسیب‌های فیزیکی.</p>
            </div>
            <div className="bg-slate-50 p-10 rounded-[32px] border border-slate-100 hover:shadow-xl transition-shadow">
              <ShieldCheck className="text-cyan-600 mb-6" size={48} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">صداقت و تعهد</h3>
              <p className="text-slate-600">ارائه قیمت‌های واقعی بدون هزینه‌های پنهان، تحویل به موقع سفارشات و پاسخگویی مسئولانه در تمام مراحل کار.</p>
            </div>
            <div className="bg-slate-50 p-10 rounded-[32px] border border-slate-100 hover:shadow-xl transition-shadow">
              <Zap className="text-cyan-600 mb-6" size={48} />
              <h3 className="text-2xl font-bold text-slate-900 mb-4">نوآوری در چاپ</h3>
              <p className="text-slate-600">به‌روزرسانی مداوم دستگاه‌ها و استفاده از روش‌های نوین چاپ برای اجرای دقیق‌ترین طرح‌ها روی محصولات.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
