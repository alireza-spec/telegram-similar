# Telegram Similar App

این نسخه از روی فایل نامرتب اولیه بازسازی شده و به یک پروژه‌ی تمیز React + Convex تبدیل شده است. هدف پروژه یک پیام‌رسان real-time شبیه تلگرام است: ثبت‌نام، ورود، چت خصوصی، گروه، پیام زنده، تایپینگ، خوانده‌شدن، ری‌اکشن، فایل/عکس، پیام ذخیره‌شده، کانال، نظرسنجی، تنظیمات، پروفایل، آرشیو و mute.

## اجرای سریع

```bash
npm install
npx convex dev
```

Convex بعد از اجرای دستور بالا آدرس deployment را می‌دهد. سپس فایل `.env.local` بساز:

```env
VITE_CONVEX_URL=https://your-deployment.convex.cloud
```

بعد frontend را اجرا کن:

```bash
npm run dev
```

## نکته مهم درباره آنلاین بودن چند کاربر

برای اینکه همه کاربران آنلاین همدیگر را ببینند و real-time چت کنند، باید Convex deployment واقعی داشته باشی و همه کلاینت‌ها به همان `VITE_CONVEX_URL` وصل شوند. اگر فقط local اجرا کنی، فقط همان محیط لوکال real-time است.

## چیزهایی که در این refactor اصلاح شد

- کدهای قاطی‌شده به فایل‌های جداگانه backend و frontend تبدیل شد.
- مشکل مهم auth حل شد: دیگر به `ctx.auth.getUserIdentity()` وابسته نیست؛ session-token داخلی ساخته شده و همه query/mutationهای محافظت‌شده آن را دریافت می‌کنند.
- `DefaultProviders` و Router اشتباه حذف شد تا اپ قبل از Router از `useLocation` استفاده نکند.
- APIهای استفاده‌شده ولی گم‌شده مثل `savedMessages.list/remove` و `channels.listPublicChannels` اضافه شد.
- `schema.ts` تمیز شد و فیلدهای ناسازگار مثل جستجوی `phone` بدون وجود فیلد phone اصلاح شد.
- importهای تکراری و توابع تکراری مثل `getCurrentUserId` با helper مرکزی جایگزین شد.
- ارسال فایل و عکس با Convex Storage اضافه شد.
- پیام‌ها real-time از Convex query خوانده می‌شوند.

## ساختار پروژه

```text
convex/
  schema.ts
  auth.ts
  users.ts
  conversations.ts
  messages.ts
  polls.ts
  channels.ts
  savedMessages.ts
  settings.ts
  blocks.ts
  invites.ts
  folders.ts
  search.ts
src/
  App.tsx
  main.tsx
  hooks/useAuth.tsx
  pages/AuthPage.tsx
  pages/TelegramPage.tsx
  components/*
```

## امنیت

این نسخه برای MVP و توسعه آماده است. برای production واقعی بهتر است این موارد را اضافه کنی:

- rate limit برای login/signup/send message
- تایید ایمیل یا شماره موبایل
- JWT/Convex Auth رسمی یا OAuth
- moderation جدی‌تر، گزارش تخلف، audit log
- رمزنگاری end-to-end اگر هدف شبیه‌سازی سطح تلگرام سکرت‌چت است
- محدودیت حجم فایل و اسکن فایل‌های آپلودی
