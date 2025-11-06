// ==========================================
// PODELLI - AI-Powered Language Learning
// Standalone Version - No Build Required
// ==========================================

// ==========================================
// ICONS (Lucide SVG Icons)
// ==========================================
const icons = {
  Sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
  Home: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  Podcast: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.85 18.58a9 9 0 1 0-9.7 0"/><path d="M8 14a5 5 0 1 1 8 0"/><circle cx="12" cy="11" r="1"/><path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"/></svg>`,
  Gamepad2: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>`,
  User: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  ArrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  Brain: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>`,
  Headphones: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>`,
  Trophy: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>`,
  Play: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  Clock: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  Zap: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  Star: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  Settings: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>`,
  Languages: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>`,
  Bell: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>`,
  Shield: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>`,
  HelpCircle: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`,
  LogOut: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,
};

function getIcon(name, className = '') {
  const icon = icons[name];
  if (!icon) return '';
  return icon.replace('<svg', `<svg class="${className}"`);
}

// ==========================================
// COMPONENTS
// ==========================================

function Header() {
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

function BottomNav(currentPath) {
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

// ==========================================
// PAGES
// ==========================================

function HomePage() {
  const features = [
    {
      icon: 'Brain',
      title: 'AI-Powered Learning',
      description: 'Personalized lessons that adapt to your pace',
    },
    {
      icon: 'Headphones',
      title: 'Podcast Content',
      description: 'Learn through engaging audio stories',
    },
    {
      icon: 'Trophy',
      title: 'Gamified Experience',
      description: 'Make learning fun with interactive games',
    },
  ];

  const featuresHTML = features.map((feature, index) => `
    <div class="p-6 border-2 rounded-3xl hover:shadow-medium transition-smooth animate-scale-in bg-card"
         style="animation-delay: ${index * 100}ms">
      <div class="flex items-start gap-4">
        <div class="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
          ${getIcon(feature.icon, 'h-6 w-6 text-accent')}
        </div>
        <div>
          <h3 class="text-lg font-bold mb-1">${feature.title}</h3>
          <p class="text-muted-foreground">${feature.description}</p>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div class="min-h-screen bg-background pb-24">
      ${Header()}

      <main class="max-w-lg mx-auto px-6 pt-8">
        <div class="space-y-8 animate-fade-in">
          <!-- Hero Section -->
          <section class="text-center space-y-6 pt-4">
            <h2 class="text-5xl md:text-6xl font-bold leading-tight">
              Your learning adventure awaits.
            </h2>
            <p class="text-xl text-muted-foreground max-w-md mx-auto">
              Master any language with AI-powered content.
              <span class="font-semibold text-foreground">Learn naturally.</span>
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button class="h-11 px-8 text-base inline-flex items-center justify-center gap-2 font-medium transition-smooth rounded-full border-2 border-input bg-background hover:bg-accent hover:text-accent-foreground">
                Explore Languages
                ${getIcon('ArrowRight', 'ml-2 h-5 w-5')}
              </button>
              <button class="h-11 px-8 text-base inline-flex items-center justify-center gap-2 font-medium transition-smooth rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Learning
                ${getIcon('ArrowRight', 'ml-2 h-5 w-5')}
              </button>
            </div>
          </section>

          <!-- Features Grid -->
          <section class="grid gap-4 pt-8">
            ${featuresHTML}
          </section>

          <!-- Stats Section -->
          <section class="bg-secondary rounded-3xl p-8 text-center space-y-4">
            <h3 class="text-3xl font-bold">Join 10,000+ Learners</h3>
            <p class="text-muted-foreground">Already mastering languages with Podelli</p>
            <div class="grid grid-cols-3 gap-4 pt-4">
              <div>
                <div class="text-2xl font-bold text-accent">50+</div>
                <div class="text-sm text-muted-foreground">Languages</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-accent">1000+</div>
                <div class="text-sm text-muted-foreground">Lessons</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-accent">95%</div>
                <div class="text-sm text-muted-foreground">Success</div>
              </div>
            </div>
          </section>
        </div>
      </main>

      ${BottomNav('/')}
    </div>
  `;
}

function PodePage() {
  const podcasts = [
    {
      id: 1,
      title: 'Spanish Conversations',
      level: 'Beginner',
      duration: '15 min',
      lessons: 12,
      colorClass: 'bg-[hsl(25,95%,53%)]',
    },
    {
      id: 2,
      title: 'French Culture Stories',
      level: 'Intermediate',
      duration: '20 min',
      lessons: 8,
      colorClass: 'bg-[hsl(217,91%,60%)]',
    },
    {
      id: 3,
      title: 'Japanese Daily Life',
      level: 'Advanced',
      duration: '25 min',
      lessons: 15,
      colorClass: 'bg-[hsl(330,81%,60%)]',
    },
  ];

  const podcastsHTML = podcasts.map((podcast, index) => `
    <div class="p-4 sm:p-5 rounded-3xl border-2 hover:shadow-medium transition-smooth animate-scale-in bg-card"
         style="animation-delay: ${index * 100}ms">
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${podcast.colorClass} flex items-center justify-center flex-shrink-0">
          ${getIcon('Headphones', 'h-7 w-7 sm:h-8 sm:w-8 text-white/90')}
        </div>
        <div class="flex-1 min-w-0 w-full sm:w-auto">
          <h4 class="font-bold mb-2 text-base sm:text-lg">${podcast.title}</h4>
          <div class="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
            <span class="px-2 py-1 bg-secondary rounded-full text-xs font-medium whitespace-nowrap">
              ${podcast.level}
            </span>
            <span class="hidden sm:inline">•</span>
            <span class="whitespace-nowrap">${podcast.duration}</span>
            <span class="hidden sm:inline">•</span>
            <span class="whitespace-nowrap">${podcast.lessons} lessons</span>
          </div>
        </div>
        <button class="h-10 w-10 flex-shrink-0 self-end sm:self-center rounded-full inline-flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-smooth">
          ${getIcon('Play', 'h-5 w-5')}
        </button>
      </div>
    </div>
  `).join('');

  return `
    <div class="min-h-screen bg-background pb-24">
      ${Header()}

      <main class="max-w-lg mx-auto px-6 pt-8">
        <div class="space-y-6 animate-fade-in">
          <div>
            <h2 class="text-4xl font-bold mb-2">Pode Content</h2>
            <p class="text-muted-foreground">Learn through immersive audio experiences</p>
          </div>

          <!-- Featured Podcast -->
          <div class="p-6 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/20">
            <div class="flex items-center gap-2 mb-3">
              ${getIcon('Headphones', 'h-5 w-5 text-accent')}
              <span class="text-sm font-semibold text-accent">FEATURED</span>
            </div>
            <h3 class="text-2xl font-bold mb-2">German Business Essentials</h3>
            <p class="text-muted-foreground mb-4">Master professional German in real-world scenarios</p>
            <div class="flex items-center gap-4 mb-4">
              <div class="flex items-center gap-2 text-sm">
                ${getIcon('Clock', 'h-4 w-4')}
                <span>30 min</span>
              </div>
              <span class="text-sm">•</span>
              <span class="text-sm">20 lessons</span>
            </div>
            <button class="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-10 px-4 py-2 inline-flex items-center justify-center gap-2 font-medium transition-smooth">
              ${getIcon('Play', 'mr-2 h-4 w-4')}
              Start Listening
            </button>
          </div>

          <!-- Podcast List -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold">Popular Series</h3>
            ${podcastsHTML}
          </div>
        </div>
      </main>

      ${BottomNav('/pode')}
    </div>
  `;
}

function PlayPage() {
  const games = [
    {
      id: 1,
      title: 'Word Match',
      description: 'Match words with their translations',
      icon: 'Zap',
      colorClass: 'bg-[hsl(48,96%,53%)]',
      points: 250,
    },
    {
      id: 2,
      title: 'Story Builder',
      description: 'Create sentences from vocabulary',
      icon: 'Star',
      colorClass: 'bg-[hsl(271,76%,53%)]',
      points: 500,
    },
    {
      id: 3,
      title: 'Speed Challenge',
      description: 'Race against time to answer',
      icon: 'Trophy',
      colorClass: 'bg-[hsl(142,76%,36%)]',
      points: 1000,
    },
  ];

  const gamesHTML = games.map((game, index) => `
    <div class="p-5 rounded-3xl border-2 hover:shadow-medium transition-smooth cursor-pointer animate-scale-in bg-card"
         style="animation-delay: ${index * 100}ms">
      <div class="flex items-center gap-4">
        <div class="w-16 h-16 rounded-2xl ${game.colorClass} flex items-center justify-center flex-shrink-0">
          ${getIcon(game.icon, 'h-8 w-8 text-white/90')}
        </div>
        <div class="flex-1">
          <h4 class="font-bold mb-1">${game.title}</h4>
          <p class="text-sm text-muted-foreground mb-2">${game.description}</p>
          <div class="flex items-center gap-2">
            ${getIcon('Trophy', 'h-4 w-4 text-accent')}
            <span class="text-sm font-semibold text-accent">${game.points} pts</span>
          </div>
        </div>
        <button class="h-9 px-3 text-sm rounded-full bg-accent hover:bg-accent/90 text-accent-foreground inline-flex items-center justify-center font-medium transition-smooth">
          Play
        </button>
      </div>
    </div>
  `).join('');

  return `
    <div class="min-h-screen bg-background pb-24">
      ${Header()}

      <main class="max-w-lg mx-auto px-6 pt-8">
        <div class="space-y-6 animate-fade-in">
          <div>
            <h2 class="text-4xl font-bold mb-2">Play & Learn</h2>
            <p class="text-muted-foreground">Master languages through interactive games</p>
          </div>

          <!-- Stats Card -->
          <div class="p-6 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/20">
            <div class="text-center space-y-2">
              <div class="text-5xl font-bold text-accent">2,450</div>
              <p class="text-sm text-muted-foreground">Total Points</p>
              <div class="flex justify-center gap-8 pt-4">
                <div>
                  <div class="text-2xl font-bold">12</div>
                  <div class="text-xs text-muted-foreground">Games Played</div>
                </div>
                <div>
                  <div class="text-2xl font-bold">8</div>
                  <div class="text-xs text-muted-foreground">Achievements</div>
                </div>
                <div>
                  <div class="text-2xl font-bold">5</div>
                  <div class="text-xs text-muted-foreground">Day Streak</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Daily Challenge -->
          <div class="p-6 rounded-3xl border-2 bg-secondary">
            <div class="flex items-center gap-2 mb-3">
              ${getIcon('Gamepad2', 'h-5 w-5 text-accent')}
              <span class="text-sm font-semibold text-accent">DAILY CHALLENGE</span>
            </div>
            <h3 class="text-xl font-bold mb-2">Vocabulary Sprint</h3>
            <p class="text-muted-foreground mb-4">Complete 20 word matches in under 2 minutes</p>
            <button class="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground h-10 px-4 py-2 inline-flex items-center justify-center font-medium transition-smooth">
              Start Challenge
            </button>
          </div>

          <!-- Games List -->
          <div class="space-y-4">
            <h3 class="text-xl font-bold">All Games</h3>
            ${gamesHTML}
          </div>
        </div>
      </main>

      ${BottomNav('/play')}
    </div>
  `;
}

function AccountPage() {
  const menuItems = [
    { icon: 'Settings', label: 'Settings', description: 'Preferences & more' },
    { icon: 'Languages', label: 'My Languages', description: 'Manage learning languages' },
    { icon: 'Bell', label: 'Notifications', description: 'Reminders & alerts' },
    { icon: 'Shield', label: 'Privacy', description: 'Security settings' },
    { icon: 'HelpCircle', label: 'Help & Support', description: 'Get assistance' },
  ];

  const menuItemsHTML = menuItems.map((item, index) => `
    <div class="p-4 rounded-2xl border hover:shadow-medium transition-smooth cursor-pointer animate-scale-in bg-card"
         style="animation-delay: ${index * 50}ms">
      <div class="flex items-center gap-4">
        <div class="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
          ${getIcon(item.icon, 'h-5 w-5 text-accent')}
        </div>
        <div class="flex-1">
          <h4 class="font-semibold">${item.label}</h4>
          <p class="text-sm text-muted-foreground">${item.description}</p>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <div class="min-h-screen bg-background pb-24">
      ${Header()}

      <main class="max-w-lg mx-auto px-6 pt-8">
        <div class="space-y-6 animate-fade-in">
          <!-- Profile Card -->
          <div class="p-6 rounded-3xl border-2 bg-card">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                ${getIcon('User', 'h-10 w-10 text-white')}
              </div>
              <div class="flex-1">
                <h3 class="text-2xl font-bold">Sarah Johnson</h3>
                <p class="text-muted-foreground">sarah.j@email.com</p>
              </div>
            </div>

            <!-- Stats -->
            <div class="grid grid-cols-3 gap-4 pt-4 border-t">
              <div class="text-center">
                <div class="text-xl font-bold text-accent">47</div>
                <div class="text-xs text-muted-foreground">Day Streak</div>
              </div>
              <div class="text-center">
                <div class="text-xl font-bold text-accent">2,450</div>
                <div class="text-xs text-muted-foreground">Points</div>
              </div>
              <div class="text-center">
                <div class="text-xl font-bold text-accent">12</div>
                <div class="text-xs text-muted-foreground">Badges</div>
              </div>
            </div>
          </div>

          <!-- Achievements -->
          <div class="p-6 rounded-3xl border-2 bg-gradient-to-br from-accent/10 to-accent/5">
            <div class="flex items-center gap-3 mb-4">
              ${getIcon('Trophy', 'h-6 w-6 text-accent')}
              <h3 class="text-lg font-bold">Recent Achievement</h3>
            </div>
            <p class="text-muted-foreground mb-2">🎉 Completed 30-day learning streak!</p>
            <p class="text-sm text-muted-foreground">Keep going to unlock more rewards</p>
          </div>

          <!-- Menu Items -->
          <div class="space-y-2">
            ${menuItemsHTML}
          </div>

          <!-- Logout Button -->
          <button class="w-full rounded-full border-2 h-11 px-8 inline-flex items-center justify-center gap-2 font-medium transition-smooth border-input bg-background hover:bg-accent hover:text-accent-foreground">
            ${getIcon('LogOut', 'mr-2 h-5 w-5')}
            Log Out
          </button>
        </div>
      </main>

      ${BottomNav('/account')}
    </div>
  `;
}

// ==========================================
// ROUTER
// ==========================================

class Router {
  constructor(routes) {
    this.routes = routes;
    this.init();
  }

  init() {
    // Load initial route
    this.loadRoute();

    // Handle browser back/forward
    window.addEventListener('popstate', () => this.loadRoute());

    // Handle link clicks
    document.addEventListener('click', (e) => {
      if (e.target.matches('[data-link]') || e.target.closest('[data-link]')) {
        e.preventDefault();
        const link = e.target.matches('[data-link]') ? e.target : e.target.closest('[data-link]');
        const path = link.getAttribute('href');
        this.navigateTo(path);
      }
    });
  }

  navigateTo(path) {
    window.history.pushState(null, null, path);
    this.loadRoute();
  }

  loadRoute() {
    const path = window.location.pathname;
    const route = this.routes[path] || this.routes['/'];

    const root = document.getElementById('root');
    if (root) {
      root.innerHTML = route();
      window.scrollTo(0, 0);
    }
  }
}

// ==========================================
// APP INITIALIZATION
// ==========================================

const routes = {
  '/': HomePage,
  '/pode': PodePage,
  '/play': PlayPage,
  '/account': AccountPage,
};

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new Router(routes);
  });
} else {
  new Router(routes);
}
