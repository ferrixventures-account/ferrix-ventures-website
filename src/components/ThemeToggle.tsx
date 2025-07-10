import React, { useState, useEffect } from 'react';
import { useTheme, Theme } from '@/theme/ThemeContext';
import { Sun, Moon, Monitor } from 'lucide-react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import { Button } from '@/components/ui/button';

const options: { label: string; value: Theme; icon: React.ReactNode }[] = [
  { label: 'Light', value: 'light', icon: <Sun className="w-5 h-5" /> },
  { label: 'Dark', value: 'dark', icon: <Moon className="w-5 h-5" /> },
  { label: 'System', value: 'system', icon: <Monitor className="w-5 h-5" /> },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    if (theme) {
      setAnnouncement(`Theme set to ${theme}`);
    }
  }, [theme]);

  return (
    <>
      <div role="radiogroup" aria-labelledby="theme-group-label" className="flex items-center gap-2">
        <VisuallyHidden id="theme-group-label">Select a theme</VisuallyHidden>
        {options.map(opt => (
          <Button
            key={opt.value}
            variant={theme === opt.value ? 'default' : 'ghost'}
            size="icon"
            role="radio"
            aria-checked={theme === opt.value}
            aria-label={opt.label}
            onClick={() => setTheme(opt.value)}
            className="rounded-full"
          >
            {opt.icon}
          </Button>
        ))}
      </div>
      <VisuallyHidden aria-live="polite" aria-atomic="true">
        {announcement}
      </VisuallyHidden>
    </>
  );
}
