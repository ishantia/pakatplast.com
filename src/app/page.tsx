"use client";

import Link from "next/link";
import { Check, ShieldCheck, Printer, BadgeCheck, Leaf, Award, ArrowLeft } from "lucide-react";
import { Slider } from "@/components/Slider";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-40 px-6">
        {/* Background decorative elements */}
        <div className="absolute top-0 inset-x-0 h-full overflow-hidden -z-10 bg-slate-50">
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-cyan-200/50 mix-blend-multiply filter blur-[100px] opacity-70 animate-blob" />
          <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-200/50 mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-[10%] left-[20%] w-[60%] h-[60%] rounded-full bg-teal-100/50 mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000" />
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNlNWE1YTUiIGZpbGwtb3BhY2l0eT0iMC4xNSIvPjwvc3ZnPg==')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-slate-200 text-cyan-700 font-semibold text-sm mb-8 shadow-sm"
            >
              <BadgeCheck size={18} />
              <span>تولیدکننده تخصصی انواع پاکت ضدآب</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] md:leading-[1.15] mb-8"
            >
              تولید و چاپ اختصاصی <br className="hidden md:block" />
              <span className="text-gradient">پوشه و بگ‌شاپ تبلیغاتی</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              طراحی و تولید انواع پوشه‌های دکمه‌دار، پاکت سند، پاکت پرونده بیمار و بگ‌شاپ‌های مقاوم با کیفیتی بی‌نظیر و ۱۰۰٪ ضدآب
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <Link 
                href="/products" 
                className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-xl shadow-slate-900/20 hover:-translate-y-1 hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
              >
                مشاهده محصولات
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold text-lg shadow-sm hover:shadow-md hover:bg-slate-50 transition-all"
              >
                درخواست مشاوره
              </Link>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-20 md:mt-28"
          >
            <Slider />
          </motion.div>
        </div>
      </section>

      {/* Trust & Features Section */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">استانداردهای جدید در تولید</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">چرا بیش از ۹۲۰ مجموعه معتبر در سراسر ایران، پاکت پلاست را برای بسته‌بندی اسناد خود انتخاب کرده‌اند؟</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-cyan-200 transition-colors group">
              <div className="w-14 h-14 bg-cyan-100 text-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">مقاومت ۱۰۰٪ در برابر آب</h3>
              <p className="text-slate-600 leading-relaxed">استفاده از متریال‌های پلیمری پیشرفته که اسناد شما را در برابر هرگونه رطوبت و پارگی کاملاً محافظت می‌کند.</p>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-blue-200 transition-colors group">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Printer size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">چاپ اختصاصی پریمیوم</h3>
              <p className="text-slate-600 leading-relaxed">دستگاه‌های چاپ پیشرفته ما امکان درج لوگو و طرح سازمانی شما را با بالاترین وضوح و ماندگاری فراهم می‌کنند.</p>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:border-teal-200 transition-colors group">
              <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">کیفیت تضمین‌شده</h3>
              <p className="text-slate-600 leading-relaxed">نظارت دقیق بر تمامی مراحل تولید از تامین مواد اولیه تا دوخت و چاپ، کیفیت هر پاکت را تضمین می‌کند.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-900" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full filter blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full filter blur-[120px]" />
        
        <div className="container mx-auto max-w-4xl px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">آماده سفارش محصول اختصاصی خود هستید؟</h2>
          <p className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">برای استعلام قیمت دقیق، کافیست با ما تماس بگیرید. نوع محصول (مثل پاکت سایز A4، A5، یا پرونده بیمار) و تیراژ مدنظرتان را اعلام کنید تا بهترین قیمت به شما اعلام شود.</p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform"
          >
            تماس و استعلام قیمت
          </Link>
        </div>
      </section>
    </>
  );
}
