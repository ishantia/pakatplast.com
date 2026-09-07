import Link from "next/link";
import { SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center px-5">
      <div className="bg-primary/10 text-primary-strong p-6 rounded-full mb-6">
        <SearchX size={64} />
      </div>
      <h1 className="text-4xl md:text-5xl font-black text-dark mb-4 drop-shadow-sm">۴۰۴</h1>
      <h2 className="text-2xl md:text-3xl font-bold text-dark mb-6">صفحه مورد نظر پیدا نشد!</h2>
      <p className="text-muted text-lg mb-10 max-w-[500px]">
        متاسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد یا آدرس آن تغییر کرده است.
      </p>
      <Link 
        href="/"
        className="bg-primary-strong text-white hover:bg-dark text-lg font-bold rounded-full px-8 py-4 transition-colors"
      >
        بازگشت به صفحه اصلی
      </Link>
    </section>
  );
}
