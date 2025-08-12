import React from 'react';
import Link from 'next/link';
import { Heart, Globe, BookOpen, Users } from 'lucide-react';

const footerLinks = {
  content: [
    { label: 'التاريخ', href: '/history' },
    { label: 'الجدول الزمني', href: '/timeline' },
    { label: 'الأدلة', href: '/evidence' },
    { label: 'الثقافة', href: '/culture' },
  ],
  resources: [
    { label: 'الموارد التعليمية', href: '/resources' },
    { label: 'المراجع', href: '/references' },
    { label: 'الأسئلة الشائعة', href: '/faq' },
    { label: 'اتصل بنا', href: '/contact' },
  ],
  about: [
    { label: 'حول المشروع', href: '/about' },
    { label: 'سياسة الخصوصية', href: '/privacy' },
    { label: 'شروط الاستخدام', href: '/terms' },
    { label: 'المساهمة', href: '/contribute' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <span className="text-sm font-bold text-primary-foreground">🫒</span>
              </div>
              <span className="text-lg font-bold">غصن الزيتون</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              منصة تعليمية مقاومة للرقابة تهدف إلى نشر المعرفة والتاريخ والثقافة الفلسطينية
              للعالم بطريقة موثقة وشاملة.
            </p>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm text-muted-foreground">
                <Heart className="h-4 w-4 text-red-500" />
                <span>صُنع بحب</span>
              </div>
              <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm text-muted-foreground">
                <Globe className="h-4 w-4 text-blue-500" />
                <span>للعالم</span>
              </div>
            </div>
          </div>

          {/* Content Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">المحتوى</h3>
            <ul className="space-y-2">
              {footerLinks.content.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">الموارد</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">حول</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex items-center space-x-4 rtl:space-x-reverse text-sm text-muted-foreground">
              <span>© 2024 غصن الزيتون. جميع الحقوق محفوظة.</span>
            </div>
            
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm text-muted-foreground">
                <BookOpen className="h-4 w-4" />
                <span>مفتوح المصدر</span>
              </div>
              <div className="flex items-center space-x-1 rtl:space-x-reverse text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>مجتمعي</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

