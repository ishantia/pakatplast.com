"use client";

import { Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <section className="pt-20 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-100/50 rounded-full blur-[80px] -z-10" />
        
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-20 h-20 bg-slate-900 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl shadow-slate-900/20 text-cyan-400"
          >
            <MessageSquare size={36} />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6 leading-tight"
          >
            در ارتباط <span className="text-cyan-600">باشیم</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
          >
            کارشناسان ما آماده پاسخگویی به سوالات شما، ارائه لیست قیمت و مشاوره جهت طراحی و چاپ اختصاصی محصولات هستند.
          </motion.p>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            
            {/* Contact Information Cards */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-5/12 flex flex-col gap-6"
            >
              <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#25d366]/10 text-[#168d45] rounded-2xl flex items-center justify-center shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">موبایل و واتساپ</h3>
                  <p className="text-slate-500 mb-2">ارسال پیام یا تماس مستقیم</p>
                  <a href="tel:+989131267749" dir="ltr" className="text-2xl font-mono font-bold text-slate-800 hover:text-[#168d45] transition-colors">0913 126 7749</a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">تماس تلفنی</h3>
                  <p className="text-slate-500 mb-2">کارشناس فروش</p>
                  <a href="tel:+989308004243" dir="ltr" className="text-2xl font-mono font-bold text-slate-800 hover:text-blue-600 transition-colors">0930 800 4243</a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-[#0088cc]/10 text-[#0077b3] rounded-2xl flex items-center justify-center shrink-0">
                  <Send size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">تلگرام</h3>
                  <p className="text-slate-500 mb-2">پاسخگویی سریع</p>
                  <a href="https://t.me/seebgolab" target="_blank" rel="noopener noreferrer" dir="ltr" className="text-2xl font-mono font-bold text-slate-800 hover:text-[#0077b3] transition-colors">@seebgolab</a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-slate-100 text-slate-600 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">دفتر مرکزی (اصفهان)</h3>
                  <p className="text-slate-500 mb-2">در ساعات اداری</p>
                  <a href="tel:+983135271316" dir="ltr" className="text-2xl font-mono font-bold text-slate-800 hover:text-slate-600 transition-colors">031 3527 1316</a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Container */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="lg:w-7/12"
            >
              <div className="bg-white rounded-[40px] p-8 md:p-14 shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-blue-500" />
                
                <h3 className="text-3xl font-bold text-slate-900 mb-8">ارسال پیام مستقیم</h3>
                
                <form 
                  action="https://formspree.io/f/xldwlwpb" 
                  method="POST" 
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700 mr-2">نام و نام خانوادگی</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 focus:bg-white transition-all text-slate-900"
                        placeholder="علی محمدی"
                      />
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <label htmlFor="phone" className="text-sm font-bold text-slate-700 mr-2">شماره تماس</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        required 
                        dir="ltr"
                        className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 focus:bg-white transition-all text-slate-900 text-left font-mono"
                        placeholder="0912 345 6789"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700 mr-2">متن پیام</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={6} 
                      required 
                      className="bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 focus:bg-white transition-all text-slate-900 resize-none"
                      placeholder="لطفا درخواست یا سوال خود را اینجا بنویسید..."
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="mt-4 bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold rounded-2xl px-8 py-5 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 w-full md:w-auto"
                  >
                    ارسال پیام
                    <Send size={20} className="rotate-180" />
                  </button>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
