import { describe, it, expect, beforeEach, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useDarkMode } from '../useDarkMode';

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('useDarkMode', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    localStorageMock.getItem.mockReturnValue(null);
  });

  it('should initialize with false when no stored value exists', () => {
    const { result } = renderHook(() => useDarkMode());
    const [isDarkMode] = result.current;
    expect(isDarkMode).toBe(false);
  });

  it('should initialize with stored value when it exists', () => {
    localStorageMock.getItem.mockReturnValue('dark');
    const { result } = renderHook(() => useDarkMode());
    const [isDarkMode] = result.current;
    expect(isDarkMode).toBe(true);
  });

  it('should toggle dark mode when toggleDarkMode is called', () => {
    const { result } = renderHook(() => useDarkMode());
    const [isDarkMode, toggleDarkMode] = result.current;

    expect(isDarkMode).toBe(false);

    act(() => {
      toggleDarkMode();
    });

    const [newIsDarkMode] = result.current;
    expect(newIsDarkMode).toBe(true);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');
  });

  it('should update localStorage when toggling', () => {
    const { result } = renderHook(() => useDarkMode());
    const [, toggleDarkMode] = result.current;

    act(() => {
      toggleDarkMode();
    });

    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'dark');

    act(() => {
      toggleDarkMode();
    });

    expect(localStorageMock.setItem).toHaveBeenCalledWith('theme', 'light');
  });
});
