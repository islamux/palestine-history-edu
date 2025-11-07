'use client';

import { useState } from 'react';
import { useDarkMode } from '@/hooks/useDarkMode';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@olive-branch/ui';
import { Badge } from '@olive-branch/ui';
import { Button } from '@olive-branch/ui';
import { Globe, Moon, Sun, Search } from 'lucide-react';

export default function ResourcesPage() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
              <span className="text-sm font-bold text-primary-foreground">🫒</span>
            </div>
            <span className="text-xl font-bold">غصن الزيتون</span>
          </a>

          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            <Button variant="ghost" size="icon" title="بحث">
              <Search className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              title={isDarkMode ? 'الوضع الفاتح' : 'الوضع المظلم'}
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">الموارد التعليمية</h1>
          <p className="text-lg text-muted-foreground">
            مواد تعليمية ومراجع شاملة للطلاب والباحثين
          </p>
        </div>

        {/* Coming Soon */}
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
              <Globe className="h-6 w-6 text-purple-500" />
              <CardTitle>قيد التطوير</CardTitle>
            </div>
            <CardDescription>
              هذا القسم قيد التطوير حالياً. سيتم إضافة موارد تعليمية شاملة قريباً.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              سيتضمن هذا القسم:
            </p>
            <ul className="mt-4 list-disc list-inside space-y-2 text-muted-foreground">
              <li>كتب ومراجع أكاديمية</li>
              <li>خريطة تفاعلية لفلسطين</li>
              <li>خط زمني للأحداث</li>
              <li>أدوات بحث متقدمة</li>
              <li>مكتبة صور ووثائق</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
