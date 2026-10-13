# راهنمای راه‌اندازی و دپلوی Cloudflare Worker برای ربات بله

این ورکر درخواست‌های فرم تماس سایت پاکت پلاست را به عنوان یک واسط امن (Proxy) دریافت کرده و مستقیماً به بازوی پیام‌رسان بله ادمین ارسال می‌کند.

---

### مراحل دپلوی با Wrangler CLI:

#### ۱. ورود به پوشه ورکر
```bash
cd cloudflare-worker
```

#### ۲. لاگین به حساب کلودفلر (در صورت نیاز)
```bash
npx wrangler login
```
*(مرورگر باز می‌شود و اجازه دسترسی به حساب کلودفلر خود را تأیید می‌کنید)*

#### ۳. تنظیم سکرت توکن بازوی بله (BALE_BOT_TOKEN)
برای امنیت بیشتر، توکن بازوی بله به صورت Secret ذخیره می‌شود:
```bash
npx wrangler secret put BALE_BOT_TOKEN
```
پس از زدن این دستور، مقدار زیر را وارد کنید و Enter بزنید:
```text
2023056202:dHWh4NhjMSgh54O9rW5FmiHLtQNlexWfvKs
```

#### ۴. دپلوی ورکر
```bash
npx wrangler deploy
```

پس از اتمام دپلوی، کلودفلر آدرس نهایی ورکر را به شما می‌دهد؛ چیزی شبیه به:
```text
https://pakatplast-contact-worker.<your-subdomain>.workers.dev
```

---

### تست لوکال (اختیاری):
برای تست لوکال کافیست دستور زیر را اجرا کنید:
```bash
npx wrangler dev
```
ورکر روی `http://localhost:8787` اجرا می‌شود.
