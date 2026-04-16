import { writable } from 'svelte/store';

const storedTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('mynerz-theme') : null;
const prefersDark = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false;

export const theme = writable(storedTheme || (prefersDark ? 'dark' : 'light'));

theme.subscribe((value) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('mynerz-theme', value);
  }
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', value);
    
    if (value === 'dark') {
      document.documentElement.style.setProperty('--bg-primary', '#0f172a');
      document.documentElement.style.setProperty('--bg-secondary', '#1e293b');
      document.documentElement.style.setProperty('--bg-gradient', 'linear-gradient(180deg, #0f172a 0%, #1e1b2e 100%)');
      document.documentElement.style.setProperty('--text-primary', '#f1f5f9');
      document.documentElement.style.setProperty('--text-secondary', '#94a3b8');
      document.documentElement.style.setProperty('--text-muted', '#64748b');
      document.documentElement.style.setProperty('--border-color', '#334155');
      document.documentElement.style.setProperty('--card-bg', '#1e293b');
      document.documentElement.style.setProperty('--card-shadow', 'rgba(0, 0, 0, 0.3)');
    } else {
      document.documentElement.style.setProperty('--bg-primary', '#ffffff');
      document.documentElement.style.setProperty('--bg-secondary', '#f8fafc');
      document.documentElement.style.setProperty('--bg-gradient', 'linear-gradient(180deg, #ffffff 0%, #faf5ff 100%)');
      document.documentElement.style.setProperty('--text-primary', '#1e293b');
      document.documentElement.style.setProperty('--text-secondary', '#64748b');
      document.documentElement.style.setProperty('--text-muted', '#94a3b8');
      document.documentElement.style.setProperty('--border-color', '#e2e8f0');
      document.documentElement.style.setProperty('--card-bg', '#ffffff');
      document.documentElement.style.setProperty('--card-shadow', 'rgba(0, 0, 0, 0.1)');
    }
  }
});

export function toggleTheme() {
  theme.update(current => current === 'light' ? 'dark' : 'light');
}