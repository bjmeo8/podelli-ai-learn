import { getIcon } from './icons.js';

// Header Component
export function Header() {
  return `
    <header class="bg-background border-b border-border sticky top-0 z-40 shadow-soft">
      <div class="max-w-lg mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              ${getIcon('Sparkles', 'h-5 w-5 text-primary-foreground')}
            </div>
            <h1 class="text-2xl font-bold">Podelli</h1>
          </div>
          <span class="text-xs font-bold px-3 py-1.5 bg-primary text-primary-foreground rounded-full">
            AI POWERED
          </span>
        </div>
      </div>
    </header>
  `;
}

// Bottom Navigation Component
export function BottomNav(currentPath = '/') {
  const navItems = [
    { to: '/', icon: 'Home', label: 'Home' },
    { to: '/pode', icon: 'Podcast', label: 'Pode' },
    { to: '/play', icon: 'Gamepad2', label: 'Play' },
    { to: '/account', icon: 'User', label: 'Account' },
  ];

  const navItemsHTML = navItems.map(item => {
    const isActive = currentPath === item.to;
    const activeClass = isActive ? 'text-accent' : 'text-muted-foreground hover:text-foreground';
    const scaleClass = isActive ? 'scale-110' : '';

    return `
      <a href="${item.to}"
         data-link
         class="flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-smooth ${activeClass}">
        ${getIcon(item.icon, `h-6 w-6 transition-smooth ${scaleClass}`)}
        <span class="text-xs font-medium">${item.label}</span>
      </a>
    `;
  }).join('');

  return `
    <nav class="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 shadow-medium">
      <div class="max-w-lg mx-auto px-4">
        <div class="flex items-center justify-around py-2">
          ${navItemsHTML}
        </div>
      </div>
    </nav>
  `;
}

// Button Component
export function Button({ children, variant = 'default', size = 'default', className = '', ...props }) {
  const baseClasses = 'inline-flex items-center justify-center gap-2 font-medium transition-smooth rounded-full';

  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
  };

  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-11 px-8 text-base',
    icon: 'h-10 w-10',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return `<button class="${classes}">${children}</button>`;
}

// Card Component
export function Card({ children, className = '' }) {
  return `<div class="bg-card text-card-foreground rounded-3xl border ${className}">${children}</div>`;
}

// Badge Component
export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-primary text-primary-foreground',
    secondary: 'bg-secondary text-secondary-foreground',
    accent: 'bg-accent text-accent-foreground',
  };

  return `<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${variants[variant]} ${className}">${children}</span>`;
}
