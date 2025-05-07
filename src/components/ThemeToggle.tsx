
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from './ThemeProvider';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle = ({ className }: ThemeToggleProps) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={cn("rounded-full", className)}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-nova-white transition-all" />
      ) : (
        <Moon className="h-5 w-5 text-nova-black transition-all" />
      )}
      <span className="sr-only">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
    </Button>
  );
};

export default ThemeToggle;
