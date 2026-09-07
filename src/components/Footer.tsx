import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const solarYear = currentYear - 621;
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const persianYear = solarYear.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);

  return (
    <footer className="bg-slate-900 text-slate-400 pt-20 pb-8 mt-auto border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 text-white text-2xl font-black mb-6">
              <span className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-cyan-500/20">P</span>
              پاکت پلاست
            </Link>
            <p className="leading-relaxed mb-6">
              تولیدکننده تخصصی انواع پوشه‌های دکمه‌دار، پاکت سند، پاکت پرونده و بگ‌شاپ‌های ۱۰۰٪ ضدآب با امکان چاپ کاملاً اختصاصی.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">دسترسی سریع</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><ArrowLeft size={16} /> خانه</Link></li>
              <li><Link href="/products" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><ArrowLeft size={16} /> محصولات</Link></li>
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><ArrowLeft size={16} /> درباره ما</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors flex items-center gap-2"><ArrowLeft size={16} /> تماس با ما</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">پشتیبانی</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">تلفن: <a href="tel:+983135271316" className="hover:text-white transition-colors" dir="ltr">031 3527 1316</a></li>
              <li className="flex items-center gap-2">موبایل: <a href="tel:+989131267749" className="hover:text-white transition-colors" dir="ltr">0913 126 7749</a></li>
              <li className="flex items-center gap-2">تلگرام: <a href="https://t.me/seebgolab" className="hover:text-white transition-colors" dir="ltr">@seebgolab</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {persianYear} پاکت پلاست - تمامی حقوق محفوظ است.
          </p>
          <div className="text-sm flex items-center gap-1">
            طراحی شده توسط <a href="https://zelvoagency.ir/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors">آژانس زلوو</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
