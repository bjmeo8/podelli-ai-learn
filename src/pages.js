import { Header, BottomNav } from './components.js';
import { getIcon } from './icons.js';

// Home Page
export function HomePage() {
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

// Pode Page
export function PodePage() {
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

// Play Page
export function PlayPage() {
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

// Account Page
export function AccountPage() {
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
