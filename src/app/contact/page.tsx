import type { Metadata } from "next";
import { Phone, MapPin, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "تماس با ما | پاکت پلاست",
  description: "برای استعلام قیمت، سفارش پاکت و پوشه ضدآب یا دریافت مشاوره چاپ اختصاصی با پاکت پلاست تماس بگیرید.",
  alternates: {
    canonical: "https://pakatplast.com/contact",
  },
  openGraph: {
    title: "تماس با پاکت پلاست",
    description: "راه‌های ارتباطی پاکت پلاست برای سفارش و استعلام قیمت.",
    url: "https://pakatplast.com/contact",
  },
};

export default function Contact() {
  return (
    <>
      <section className="hero-gradient-small text-white text-center px-5 py-[95px] md:py-[120px]">
        <div className="container mx-auto max-w-[1100px]">
          <h1 className="text-[clamp(2.4rem,6vw,4.2rem)] font-black leading-[1.25] mb-5 drop-shadow-md">در ارتباط باشیم</h1>
          <p className="text-[clamp(1.1rem,2.5vw,1.55rem)] max-w-[900px] mx-auto">
            برای سفارش، استعلام قیمت و مشاوره چاپ اختصاصی پاسخگوی شما هستیم.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-[90px]" aria-labelledby="contact-methods">
        <div className="container mx-auto px-5 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Methods */}
            <div>
              <h2 id="contact-methods" className="text-dark text-3xl md:text-4xl font-bold mb-6">راه‌های ارتباطی</h2>
              <p className="text-muted text-lg mb-10">هر سوالی دارید، در اسرع وقت پاسخگو هستیم.</p>
              
              <div className="flex flex-col gap-8">
                <article className="flex items-start gap-5">
                  <div className="bg-[#25d366]/10 p-4 rounded-2xl text-[#168d45]">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-1">موبایل و واتساپ</h3>
                    <a href="tel:+989131267749" dir="ltr" className="text-muted text-lg font-mono hover:text-[#168d45] transition-colors block">0913-126-7749</a>
                  </div>
                </article>

                <article className="flex items-start gap-5">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary-strong">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-1">تلفن تماس</h3>
                    <a href="tel:+989308004243" dir="ltr" className="text-muted text-lg font-mono hover:text-primary-strong transition-colors block">0930-800-4243</a>
                  </div>
                </article>

                <article className="flex items-start gap-5">
                  <div className="bg-primary/10 p-4 rounded-2xl text-primary-strong">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-1">تلفن دفتر اصفهان</h3>
                    <a href="tel:+983135271316" dir="ltr" className="text-muted text-lg font-mono hover:text-primary-strong transition-colors block">031-3527-1316</a>
                  </div>
                </article>

                <article className="flex items-start gap-5">
                  <div className="bg-[#0088cc]/10 p-4 rounded-2xl text-[#0077b3]">
                    <Send size={32} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark mb-1">تلگرام</h3>
                    <a href="https://t.me/seebgolab" target="_blank" rel="noopener noreferrer" dir="ltr" className="text-muted text-lg font-mono hover:text-[#0077b3] transition-colors block">@seebgolab</a>
                  </div>
                </article>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-[22px] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.1)] border-t-[6px] border-primary">
              <h3 className="text-2xl font-bold text-dark mb-6">ارسال پیام مستقیم</h3>
              <form 
                action="https://formspree.io/f/xldwlwpb" 
                method="POST" 
                className="flex flex-col gap-5"
              >
                <div>
                  <label htmlFor="name" className="block text-dark font-bold mb-2">نام و نام خانوادگی</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full bg-[#f8f9fa] border border-[#eee] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="مثال: علی محمدی"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-dark font-bold mb-2">شماره تماس</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    dir="ltr"
                    className="w-full bg-[#f8f9fa] border border-[#eee] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-left"
                    placeholder="0912..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-dark font-bold mb-2">پیام شما</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    required 
                    className="w-full bg-[#f8f9fa] border border-[#eee] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-y"
                    placeholder="درخواست خود را اینجا بنویسید..."
                  />
                </div>
                <button 
                  type="submit" 
                  className="bg-primary-strong text-white hover:bg-dark text-lg font-bold rounded-xl px-6 py-4 mt-2 transition-colors flex justify-center items-center gap-2"
                >
                  <Send size={20} />
                  ارسال پیام
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
