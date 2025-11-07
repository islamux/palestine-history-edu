import { useState, useEffect } from 'react';

/**
 * Native dark mode hook with localStorage persistence
 * @returns [isDarkMode, toggleDarkMode] tuple
 */
export function useDarkMode(): [boolean, () => void] {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;

    // Check localStorage first
    const stored = localStorage.getItem('theme');
    if (stored) {
      return stored === 'dark';
    }

    // Fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Update localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // Update DOM
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return [isDarkMode, toggleDarkMode];
}
