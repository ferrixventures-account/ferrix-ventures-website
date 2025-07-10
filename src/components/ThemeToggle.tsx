import React from 'react';
import { useTheme, Theme } from '@/theme/ThemeContext';
import { Sun, Moon, Monitor } from 'lucide-react';

const options: { label: string; value: Theme; icon: React.ReactNode }[] = [
  { label: 'Light', value: 'light', icon: <Sun className="w-5 h-5" /> },
  { label: 'Dark', value: 'dark', icon: <Moon className="w-5 h-5" /> },
  { label: 'System', value: 'system', icon: <Monitor className="w-5 h-5" /> },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center gap-2">
      {options.map(opt => (
        <button
          key={opt.value}
          aria-label={opt.label}
          className={`p-2 rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${theme === opt.value ? 'bg-primary text-primary-foreground' : 'bg-transparent text-foreground hover:bg-muted'}`}
          onClick={() => setTheme(opt.value)}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
}
