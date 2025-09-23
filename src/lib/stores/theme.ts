import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

// Create the theme store with enhanced styling
function createThemeStore() {
	const { subscribe, set, update } = writable<Theme>('light');

	return {
		subscribe,
		set: (theme: Theme) => {
			set(theme);
			if (browser) {
				applyTheme(theme);
				localStorage.setItem('theme', theme);
			}
		},
		toggle: () => {
			update(current => {
				const newTheme = current === 'dark' ? 'light' : 'dark';
				if (browser) {
					applyTheme(newTheme);
					localStorage.setItem('theme', newTheme);
				}
				return newTheme;
			});
		},
		init: () => {
			if (!browser) return;
			
			try {
				const stored = localStorage.getItem('theme') as Theme | null;
				
				if (stored) {
					set(stored);
					applyTheme(stored);
				} else {
					// Respect system preference
					const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
					const initialTheme = prefersDark ? 'dark' : 'light';
					set(initialTheme);
					applyTheme(initialTheme);
				}

				// Listen for system theme changes
				const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
				const handleChange = (e: MediaQueryListEvent) => {
					if (!localStorage.getItem('theme')) {
						const systemTheme = e.matches ? 'dark' : 'light';
						set(systemTheme);
						applyTheme(systemTheme);
					}
				};
				mediaQuery.addEventListener('change', handleChange);
			} catch (error) {
				console.warn('Theme initialization failed:', error);
			}
		}
	};
}

function applyTheme(theme: Theme) {
	if (!browser) return;
	
	const root = document.documentElement;
	const body = document.body;
	
	// Remove existing theme classes
	root.classList.remove('light', 'dark');
	body.classList.remove('light', 'dark');
	
	// Apply new theme
	root.classList.add(theme);
	body.classList.add(theme);
	root.setAttribute('data-theme', theme);
	
	// Apply comprehensive theme styling
	if (theme === 'dark') {
		// Dark mode: Deep, rich colors with high contrast
		root.style.setProperty('--bg-primary', '#0f0f23');
		root.style.setProperty('--bg-secondary', '#1a1a2e');
		root.style.setProperty('--bg-tertiary', '#16213e');
		root.style.setProperty('--text-primary', '#ffffff');
		root.style.setProperty('--text-secondary', '#e2e8f0');
		root.style.setProperty('--text-muted', '#94a3b8');
		root.style.setProperty('--border-color', '#334155');
		root.style.setProperty('--accent-primary', '#3b82f6');
		root.style.setProperty('--accent-secondary', '#10b981');
		root.style.setProperty('--card-bg', '#1e293b');
		root.style.setProperty('--header-bg', 'rgba(15, 15, 35, 0.8)');
		root.style.setProperty('--shadow', '0 25px 50px -12px rgba(0, 0, 0, 0.5)');
	} else {
		// Light mode: Clean, bright colors with subtle shadows
		root.style.setProperty('--bg-primary', '#ffffff');
		root.style.setProperty('--bg-secondary', '#f8fafc');
		root.style.setProperty('--bg-tertiary', '#f1f5f9');
		root.style.setProperty('--text-primary', '#0f172a');
		root.style.setProperty('--text-secondary', '#334155');
		root.style.setProperty('--text-muted', '#64748b');
		root.style.setProperty('--border-color', '#e2e8f0');
		root.style.setProperty('--accent-primary', '#3b82f6');
		root.style.setProperty('--accent-secondary', '#059669');
		root.style.setProperty('--card-bg', '#ffffff');
		root.style.setProperty('--header-bg', 'rgba(255, 255, 255, 0.8)');
		root.style.setProperty('--shadow', '0 25px 50px -12px rgba(0, 0, 0, 0.25)');
	}
}

export const theme = createThemeStore();