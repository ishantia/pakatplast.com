/**
 * Cloudflare Worker for Pakat Plast Contact Form
 * Forwards submissions securely to Bale Messenger Bot
 */

function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    // Common CORS headers
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    // 1. Handle CORS Preflight request
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    // 2. Only allow POST requests
    if (request.method !== "POST") {
      return new Response(
        JSON.stringify({ success: false, error: "Method Not Allowed" }),
        {
          status: 405,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    try {
      const data = await request.json();
      const { name, phone, message, _gotcha } = data;

      // Anti-Spam: Silent drop if honeypot is filled
      if (_gotcha) {
        return new Response(
          JSON.stringify({ success: true, message: "OK" }),
          {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      // Input validation
      if (!name || !name.trim()) {
        return new Response(
          JSON.stringify({ success: false, error: "لطفاً نام و نام خانوادگی خود را وارد کنید." }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      if (!phone || !phone.trim()) {
        return new Response(
          JSON.stringify({ success: false, error: "لطفاً شماره تماس معتبر وارد کنید." }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      if (!message || !message.trim()) {
        return new Response(
          JSON.stringify({ success: false, error: "لطفاً متن پیام خود را وارد کنید." }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      const botToken = env.BALE_BOT_TOKEN;
      const chatId = env.ADMIN_CHAT_ID;

      if (!botToken || !chatId) {
        return new Response(
          JSON.stringify({
            success: false,
            error: "پیکربندی بازوی بله در سرور کامل نیست (BALE_BOT_TOKEN یا ADMIN_CHAT_ID تنظیم نشده است).",
          }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      // Format date/time (Tehran time)
      let formattedTime = "";
      try {
        formattedTime = new Intl.DateTimeFormat("fa-IR", {
          timeZone: "Asia/Tehran",
          dateStyle: "medium",
          timeStyle: "short",
        }).format(new Date());
      } catch (e) {
        formattedTime = new Date().toISOString();
      }

      // Format message for Bale (HTML parse_mode)
      const baleText =
        `📬 <b>پیام جدید از فرم تماس سایت پاکت پلاست</b>\n\n` +
        `👤 <b>نام و نام خانوادگی:</b> ${escapeHtml(name.trim())}\n` +
        `📞 <b>شماره تماس:</b> <code>${escapeHtml(phone.trim())}</code>\n` +
        `💬 <b>متن پیام:</b>\n${escapeHtml(message.trim())}\n\n` +
        `⏰ <i>زمان ارسال: ${escapeHtml(formattedTime)}</i>`;

      // Send to Bale Messenger Bot API
      const baleApiUrl = `https://tapi.bale.ai/bot${botToken}/sendMessage`;
      const baleResponse = await fetch(baleApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: baleText,
          parse_mode: "HTML",
        }),
      });

      const baleResult = await baleResponse.json();

      if (!baleResponse.ok || !baleResult.ok) {
        console.error("Bale API Error:", baleResult);
        return new Response(
          JSON.stringify({
            success: false,
            error: baleResult?.description || "ارسال پیام به بازوی بله با خطا مواجه شد.",
          }),
          {
            status: 502,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }

      return new Response(
        JSON.stringify({ success: true, message: "پیام با موفقیت ارسال شد." }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    } catch (err) {
      console.error("Worker Handler Error:", err);
      return new Response(
        JSON.stringify({ success: false, error: "خطای ناشناخته در سرور ورکر." }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }
  },
};
