'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@olive-branch/ui'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@olive-branch/ui'
import { Badge } from '@olive-branch/ui'
import { BookOpen, Clock, FileText, Heart, Globe, Users, Menu, X, Search, Moon, Sun } from 'lucide-react'

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    document.documentElement.classList.toggle('dark')
  }

  const navigationItems = [
    { label: 'الرئيسية', href: '/', description: 'الصفحة الرئيسية' },
    { label: 'التاريخ', href: '/history', description: 'التاريخ والتراث' },
    { label: 'الجدول الزمني', href: '/timeline', description: 'الأحداث التاريخية' },
    { label: 'الأدلة', href: '/evidence', description: 'الوثائق والتقارير' },
    { label: 'الثقافة', href: '/culture', description: 'التراث الثقافي' },
    { label: 'الموارد', href: '/resources', description: 'مواد تعليمية' },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-bold text-primary-foreground">🫒</span>
            </div>
            <span className="text-xl font-bold">غصن الزيتون</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-4 w-4" />
            </Button>
            
            <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t bg-background md:hidden">
            <nav className="container py-4 px-4">
              <div className="flex flex-col space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex flex-col space-y-1 rounded-md p-3 text-sm transition-colors hover:bg-accent text-muted-foreground"
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.description}</span>
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                غصن الزيتون
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                منصة تعليمية مقاومة للرقابة تهدف إلى نشر المعرفة والتاريخ والثقافة الفلسطينية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  <BookOpen className="mr-2 h-5 w-5" />
                  استكشف المحتوى
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Globe className="mr-2 h-5 w-5" />
                  تعرف على المشروع
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                اكتشف التراث الفلسطيني
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                استكشف التاريخ العريق والثقافة الغنية لفلسطين من خلال محتوى موثق وشامل
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* History Card */}
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <Badge variant="secondary">التاريخ</Badge>
                  </div>
                  <CardTitle>التاريخ العريق</CardTitle>
                  <CardDescription>
                    اكتشف آلاف السنين من التاريخ الفلسطيني والحضارات التي ازدهرت على هذه الأرض
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    اقرأ المزيد
                  </Button>
                </CardContent>
              </Card>

              {/* Timeline Card */}
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                    <Clock className="h-6 w-6 text-blue-500" />
                    <Badge variant="secondary">الجدول الزمني</Badge>
                  </div>
                  <CardTitle>الأحداث التاريخية</CardTitle>
                  <CardDescription>
                    تتبع الأحداث المهمة والمحطات التاريخية في تسلسل زمني واضح ومفصل
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    استكشف الجدول الزمني
                  </Button>
                </CardContent>
              </Card>

              {/* Evidence Card */}
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                    <FileText className="h-6 w-6 text-red-500" />
                    <Badge variant="secondary">الأدلة</Badge>
                  </div>
                  <CardTitle>الوثائق والأدلة</CardTitle>
                  <CardDescription>
                    وثائق وتقارير موثقة من مصادر موثوقة ومنظمات دولية معترف بها
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    اطلع على الأدلة
                  </Button>
                </CardContent>
              </Card>

              {/* Culture Card */}
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                    <Heart className="h-6 w-6 text-green-500" />
                    <Badge variant="secondary">الثقافة</Badge>
                  </div>
                  <CardTitle>التراث الثقافي</CardTitle>
                  <CardDescription>
                    تعرف على الفنون والتقاليد والعادات الفلسطينية الأصيلة
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    اكتشف الثقافة
                  </Button>
                </CardContent>
              </Card>

              {/* Resources Card */}
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                    <Globe className="h-6 w-6 text-purple-500" />
                    <Badge variant="secondary">الموارد</Badge>
                  </div>
                  <CardTitle>الموارد التعليمية</CardTitle>
                  <CardDescription>
                    مواد تعليمية ومراجع شاملة للطلاب والباحثين والمهتمين
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    تصفح الموارد
                  </Button>
                </CardContent>
              </Card>

              {/* Community Card */}
              <Card className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                    <Users className="h-6 w-6 text-orange-500" />
                    <Badge variant="secondary">المجتمع</Badge>
                  </div>
                  <CardTitle>مجتمع مفتوح</CardTitle>
                  <CardDescription>
                    انضم إلى مجتمع من المهتمين والباحثين لتبادل المعرفة والخبرات
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    انضم للمجتمع
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-primary/5">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ابدأ رحلتك التعليمية اليوم
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                اكتشف التاريخ والثقافة الفلسطينية من خلال محتوى موثق وشامل متاح للجميع
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  ابدأ الاستكشاف
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  تحميل التطبيق
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-12 px-4">
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

            {/* Links Sections */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">المحتوى</h3>
              <ul className="space-y-2">
                <li><Link href="/history" className="text-sm text-muted-foreground transition-colors hover:text-foreground">التاريخ</Link></li>
                <li><Link href="/timeline" className="text-sm text-muted-foreground transition-colors hover:text-foreground">الجدول الزمني</Link></li>
                <li><Link href="/evidence" className="text-sm text-muted-foreground transition-colors hover:text-foreground">الأدلة</Link></li>
                <li><Link href="/culture" className="text-sm text-muted-foreground transition-colors hover:text-foreground">الثقافة</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold">الموارد</h3>
              <ul className="space-y-2">
                <li><Link href="/resources" className="text-sm text-muted-foreground transition-colors hover:text-foreground">الموارد التعليمية</Link></li>
                <li><Link href="/references" className="text-sm text-muted-foreground transition-colors hover:text-foreground">المراجع</Link></li>
                <li><Link href="/faq" className="text-sm text-muted-foreground transition-colors hover:text-foreground">الأسئلة الشائعة</Link></li>
                <li><Link href="/contact" className="text-sm text-muted-foreground transition-colors hover:text-foreground">اتصل بنا</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold">حول</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground transition-colors hover:text-foreground">حول المشروع</Link></li>
                <li><Link href="/privacy" className="text-sm text-muted-foreground transition-colors hover:text-foreground">سياسة الخصوصية</Link></li>
                <li><Link href="/terms" className="text-sm text-muted-foreground transition-colors hover:text-foreground">شروط الاستخدام</Link></li>
                <li><Link href="/contribute" className="text-sm text-muted-foreground transition-colors hover:text-foreground">المساهمة</Link></li>
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
    </div>
  )
}