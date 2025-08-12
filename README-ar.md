# 🫒 غصن الزيتون - Olive Branch

تطبيق ويب تقدمي (PWA) مقاوم للرقابة للتاريخ والثقافة الفلسطينية

A censorship-resistant Progressive Web App for Palestinian history and cultural education

![الرخصة](https://img.shields.io/badge/الرخصة-GNU%20GPL%20v3-blue)
![Next.js](https://img.shields.io/badge/Next.js-14.2.5-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4)

## 🌟 المميزات

- 📚 **محتوى تعليمي**: موارد شاملة عن التاريخ والثقافة الفلسطينية
- 🌐 **مقاوم للرقابة**: يعمل دون اتصال كتطبيق ويب تقدمي
- 🌙 **الوضع المظلم**: تجربة قراءة مريحة للعين
- 📱 **تصميم متجاوب**: يعمل على جميع الأجهزة
- 🌍 **دعم RTL**: دعم كامل للغة العربية
- ⚡ **أداء سريع**: مبني باستخدام Next.js للحصول على أفضل سرعة
- 🔒 **يحترم الخصوصية**: بدون تتبع أو تبعيات خارجية

## 🚀 البدء السريع

### المتطلبات الأساسية

- Node.js 18+ 
- pnpm 9.14.1+

### التثبيت

1. استنسخ المستودع:
```bash
git clone https://github.com/islamux/palastine-history.git
cd palastine-history
```

2. ثبت التبعيات:
```bash
pnpm install
```

3. شغّل خادم التطوير:
```bash
pnpm run dev
```

4. افتح [http://localhost:3000](http://localhost:3000) في متصفحك

## 📁 هيكل المشروع

```
├── apps/
│   └── web/                 # تطبيق Next.js
│       ├── src/
│       │   ├── app/         # صفحات App Router
│       │   ├── components/  # مكونات React
│       │   ├── lib/         # الأدوات والمكتبات
│       │   └── styles/      # ملفات CSS
│       ├── public/          # الأصول الثابتة
│       └── prisma/          # مخطط قاعدة البيانات
├── pnpm-workspace.yaml      # تكوين Monorepo
└── turbo.json              # تكوين Turborepo
```

## 🛠️ التقنيات المستخدمة

- **الإطار**: [Next.js 14](https://nextjs.org/) مع App Router
- **اللغة**: [TypeScript](https://www.typescriptlang.org/)
- **التصميم**: [Tailwind CSS](https://tailwindcss.com/)
- **قاعدة البيانات**: SQLite مع [Prisma ORM](https://www.prisma.io/)
- **الأيقونات**: [Lucide React](https://lucide.dev/)
- **الحركات**: [Framer Motion](https://www.framer.com/motion/)
- **أداة البناء**: [Turborepo](https://turbo.build/)

## 📦 الأوامر المتاحة

- `pnpm run dev` - تشغيل خادم التطوير
- `pnpm run build` - بناء للإنتاج
- `pnpm run start` - تشغيل خادم الإنتاج
- `pnpm run lint` - تشغيل ESLint
- `pnpm run type-check` - التحقق من الأنواع في TypeScript

## 🌍 النشر

يمكن نشر التطبيق على أي منصة تدعم Next.js:

- [Vercel](https://vercel.com) (موصى به)
- [Netlify](https://www.netlify.com)
- [Railway](https://railway.app)
- استضافة ذاتية باستخدام Docker

### خطوات النشر على Vercel

1. قم بإنشاء حساب على [Vercel](https://vercel.com)
2. اربط مستودع GitHub الخاص بك
3. اضغط على "Import Project"
4. اختر المستودع الخاص بك
5. Vercel سيكتشف تلقائياً إعدادات Next.js
6. اضغط على "Deploy"

### النشر المحلي

للنشر على خادمك الخاص:

```bash
# بناء التطبيق
pnpm run build

# تشغيل الإنتاج
pnpm run start
```

## 🤝 المساهمة

نرحب بالمساهمات! لا تتردد في إرسال Pull Request.

### خطوات المساهمة

1. قم بعمل Fork للمستودع
2. أنشئ فرع للميزة الجديدة:
```bash
git checkout -b feature/amazing-feature
```
3. قم بعمل commit للتغييرات:
```bash
git commit -m 'إضافة ميزة رائعة'
```
4. ادفع التغييرات إلى الفرع:
```bash
git push origin feature/amazing-feature
```
5. افتح Pull Request

### إرشادات المساهمة

- **الكود**: اتبع أسلوب الكود الموجود واستخدم ESLint
- **الالتزامات**: استخدم رسائل commit واضحة ووصفية
- **التوثيق**: حدّث التوثيق عند إضافة ميزات جديدة
- **الاختبار**: تأكد من أن جميع الميزات تعمل قبل إرسال PR
- **اللغة**: يفضل استخدام العربية في التعليقات والتوثيق

## 📄 الرخصة

هذا المشروع مرخص بموجب رخصة GNU General Public License v3.0 - انظر ملف [LICENSE](LICENSE) للتفاصيل.

هذا يعني أنك حر في:
- استخدام البرنامج لأي غرض
- تغيير البرنامج ليناسب احتياجاتك
- مشاركة البرنامج مع أصدقائك وجيرانك
- مشاركة التغييرات التي تجريها

بالشروط التالية:
- يجب عليك مشاركة الكود المصدري عند توزيع البرنامج
- يجب عليك ترخيص تغييراتك بنفس الرخصة

## 🔧 حل المشاكل الشائعة

### مشكلة في تثبيت التبعيات

إذا واجهت مشكلة في تثبيت التبعيات:

```bash
# احذف node_modules وملف القفل
rm -rf node_modules pnpm-lock.yaml

# أعد التثبيت
pnpm install
```

### مشكلة في قاعدة البيانات

لإعادة تعيين قاعدة البيانات:

```bash
# احذف قاعدة البيانات الحالية
rm -rf apps/web/prisma/*.db

# أعد تشغيل migrations
cd apps/web
npx prisma migrate dev

# أعد تشغيل seed
npx prisma db seed
```

### مشكلة في البناء

إذا فشل البناء:

```bash
# نظف ذاكرة التخزين المؤقت
pnpm run clean

# أعد البناء
pnpm run build
```

## 📊 حالة المشروع

المشروع حالياً في مرحلة التطوير النشط. تم إنجاز:

- ✅ البنية الأساسية للمشروع
- ✅ مكونات واجهة المستخدم
- ✅ قاعدة البيانات والمحتوى
- ✅ التصميم المتجاوب
- ✅ دعم اللغة العربية
- 🔄 صفحات المحتوى (قيد التطوير)
- 🔄 ميزات PWA (قيد التطوير)
- 📋 نظام البحث (مخطط)
- 📋 لوحة الإدارة (مخطط)

## 👥 الفريق

**islamux**
- GitHub: [@islamux](https://github.com/islamux)
- البريد الإلكتروني: fathi733@gmail.com

## 🙏 شكر وتقدير

- شكر لجميع المساهمين الذين ساعدوا في بناء هذه المنصة التعليمية
- شكر خاص للمجتمع الفلسطيني للحفاظ على تراثهم الثقافي الغني
- شكر لمجتمع المصادر المفتوحة للأدوات والمكتبات المستخدمة

## 📞 التواصل

للأسئلة أو الاقتراحات أو الدعم:
- افتح issue على [GitHub](https://github.com/islamux/palastine-history/issues)
- البريد الإلكتروني: fathi733@gmail.com

## 🔗 روابط مفيدة

- [التوثيق الكامل](docs/README.md)
- [دليل المساهمة](CONTRIBUTING.md)
- [سجل التغييرات](CHANGELOG.md)
- [خارطة الطريق](ROADMAP.md)

---

**صُنع بـ ❤️ من أجل فلسطين**

<div align="center">
  <p>🇵🇸</p>
  <p>
    <strong>غصن الزيتون - منصة تعليمية للحفاظ على التراث الفلسطيني</strong>
  </p>
  <p>
    <em>"التعليم هو أقوى سلاح يمكن استخدامه لتغيير العالم"</em>
  </p>
</div>
