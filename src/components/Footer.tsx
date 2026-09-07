export function Footer() {
  const currentYear = new Date().getFullYear();
  // We use standard Persian digits format, e.g. converting 2026 to ۲۰۲۶ or mapping Solar year.
  // A simple approximation for Solar year is Gregorian - 621.
  const solarYear = currentYear - 621;
  const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const persianYear = solarYear.toString().replace(/\d/g, (x) => farsiDigits[parseInt(x)]);

  return (
    <footer className="bg-[#111] text-[#b8b8b8] py-8 text-center mt-auto">
      <div className="container mx-auto px-5">
        <p className="text-[0.95rem]">
          © {persianYear} پاکت پلاست - تمامی حقوق محفوظ است
        </p>
        <small className="block mt-2 text-[#858585] text-[0.85rem]">نسخه: v3.0 (React)</small>
      </div>
    </footer>
  );
}
