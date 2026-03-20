# Hotel Parc — Network Manager (Project Context)

> **هذا ملف مرجعي.** اقرأه أولاً في بداية كل جلسة عمل لفهم سياق المشروع قبل أي تعديل.

## ما هو هذا المشروع؟
تطبيق **SaaS** لإدارة وصيانة وترقية شبكة Wi-Fi في **فندق بارك** (600 نزيل).
يُستخدم من طرف المهندس أحمد (عن بعد) والتقني عمر (ميدانياً).

## التقنيات
| العنصر | القيمة |
|--------|--------|
| Framework | **Vite** (vanilla JS, no React/Vue) |
| Styling | **Vanilla CSS** (Dark Theme + Glassmorphism) |
| Font | Google Fonts — **Inter** |
| Routing | **Hash-based** (`#/page`) — آمن مع Apache |
| Backend | **لا يوجد** — البيانات مضمنة في `data.js` |
| Persistence | **localStorage** لتتبع حالة التحويلات |
| Production URL | `https://ipst.ac.ma/parc/` |
| Vite `base` | `/parc/` (في `vite.config.js`) |
| Deployment | Git push → cPanel Git Pull → يُقدَّم من `dist/` عبر `.htaccess` |

## هيكلة الملفات
```
parc/
├── index.html              ← App shell + sidebar nav
├── vite.config.js           ← base: '/parc/'
├── .htaccess                ← Apache rewrite → dist/
├── src/
│   ├── main.js              ← Hash router + mobile sidebar
│   ├── style.css            ← Design system (1850+ lines)
│   ├── data.js              ← All structured data + localStorage helpers
│   └── pages/
│       ├── dashboard.js     ← #/ — Stats, topology, architecture comparison
│       ├── devices.js       ← #/devices — WAN routers + APs tables
│       ├── upgrade.js       ← #/upgrade — Progress bar + intervention checklist
│       ├── technician.js    ← #/technician — AP conversion tracker
│       ├── mission.js       ← #/mission — Omar's field briefing
│       └── setup.js         ← #/setup — Technical room preparation guide
└── dist/                    ← Production build output
```

## مصادر البيانات (data.js)
| المتغير | المصدر | المحتوى |
|---------|--------|---------|
| `networkOverview[]` | الجدول 1 | 5 عناصر: الوضعية الحالية مقابل المستهدفة |
| `wanRouters[]` | الجدول 2 | 7 موجهات Huawei GPON (IP, MAC, حالة, هدف) |
| `accessPoints[]` | الجدول 3 | 12 نقطة Altai (اسم, موقع, طابق, جناح, IP, MAC) |
| `upgradeTasks[]` | الجدول 4 | 6 مهام تقنية (إعداد, خطأ حالي, الحل) |

## قواعد التصميم (CSS)
- **الألوان**: `--bg-primary: #0a0e1a` / `--accent-blue: #00d4ff` / `--accent-green: #00e676`
- **البطاقات**: `.glass-card` مع `backdrop-filter: blur(12px)`
- **الحالات**: `.badge-active` (أخضر) / `.badge-warning` (برتقالي) / `.badge-error` (أحمر)
- **الجداول**: `.data-table` مع `.mono` للـ IP/MAC
- **Responsive**: breakpoint عند `860px` مع sidebar قابل للطي

## النشر (Deployment)
```bash
npm run build         # يولد dist/
git add -A
git commit -m "..."
git push              # → GitHub → cPanel Git Pull
```
ملف `.htaccess` في جذر المشروع يحول الطلبات تلقائياً إلى `dist/`.
