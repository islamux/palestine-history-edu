'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@olive-branch/ui';
import { Button } from '@olive-branch/ui';
import { Menu, X, Search, Moon, Sun } from 'lucide-react';
import { useDarkMode } from '@/hooks/useDarkMode';

interface NavigationItem {
  label: string;
  href: string;
  description?: string;
}

const navigationItems: NavigationItem[] = [
  { label: 'الرئيسية', href: '/', description: 'الصفحة الرئيسية' },
  { label: 'التاريخ', href: '/history', description: 'التاريخ والتراث' },
  { label: 'الجدول الزمني', href: '/timeline', description: 'الأحداث التاريخية' },
  { label: 'الأدلة', href: '/evidence', description: 'الوثائق والتقارير' },
  { label: 'الثقافة', href: '/culture', description: 'التراث الثقافي' },
  { label: 'الموارد', href: '/resources', description: 'مواد تعليمية' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-primary-foreground">🫒</span>
          </div>
          <span className="text-xl font-bold">غصن الزيتون</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                pathname === item.href
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Search className="h-4 w-4" />
            <span className="sr-only">بحث</span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            title={isDarkMode ? 'الوضع الفاتح' : 'الوضع المظلم'}
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span className="sr-only">تبديل الوضع المظلم</span>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
            <span className="sr-only">تبديل القائمة</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className="border-t bg-background md:hidden animate-fade-in"
        >
            <nav className="container py-4">
              <div className="flex flex-col space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      'flex flex-col space-y-1 rounded-md p-3 text-sm transition-colors hover:bg-accent',
                      pathname === item.href
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground'
                    )}
                  >
                    <span className="font-medium">{item.label}</span>
                    {item.description && (
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    )}
                  </Link>
                ))}
                
                {/* Mobile Search */}
                <div className="pt-2 border-t">
                  <Button variant="outline" className="w-full justify-start">
                    <Search className="me-2 h-4 w-4" />
                    بحث في المحتوى
                  </Button>
                </div>
              </div>
            </nav>
        </div>
      )}
    </header>
  );
}