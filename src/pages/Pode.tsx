import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Clock, Headphones } from "lucide-react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const Pode = () => {
  const podcasts = [
    {
      id: 1,
      title: "Spanish Conversations",
      level: "Beginner",
      duration: "15 min",
      lessons: 12,
      colorClass: "bg-brand-orange",
    },
    {
      id: 2,
      title: "French Culture Stories",
      level: "Intermediate",
      duration: "20 min",
      lessons: 8,
      colorClass: "bg-brand-blue",
    },
    {
      id: 3,
      title: "Japanese Daily Life",
      level: "Advanced",
      duration: "25 min",
      lessons: 15,
      colorClass: "bg-brand-pink",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />

      <main className="max-w-lg mx-auto px-6 pt-8">
        <div className="space-y-6 animate-fade-in">
          <div>
            <h2 className="text-4xl font-bold mb-2">Pode Content</h2>
            <p className="text-muted-foreground">
              Learn through immersive audio experiences
            </p>
          </div>

          {/* Featured Podcast */}
          <Card className="p-6 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/20">
            <div className="flex items-center gap-2 mb-3">
              <Headphones className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold text-accent">
                FEATURED
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">
              German Business Essentials
            </h3>
            <p className="text-muted-foreground mb-4">
              Master professional German in real-world scenarios
            </p>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                <span>30 min</span>
              </div>
              <span className="text-sm">•</span>
              <span className="text-sm">20 lessons</span>
            </div>
            <Button className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <Play className="mr-2 h-4 w-4" />
              Start Listening
            </Button>
          </Card>

          {/* Podcast List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Popular Series</h3>
            {podcasts.map((podcast, index) => (
              <Card
                key={podcast.id}
                className="p-4 sm:p-5 rounded-3xl border-2 hover:shadow-medium transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${podcast.colorClass} flex items-center justify-center flex-shrink-0`}
                  >
                    <Headphones className="h-7 w-7 sm:h-8 sm:w-8 text-white/90" />
                  </div>
                  <div className="flex-1 min-w-0 w-full sm:w-auto">
                    <h4 className="font-bold mb-2 text-base sm:text-lg">
                      {podcast.title}
                    </h4>
                    <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                      <span className="px-2 py-1 bg-secondary rounded-full text-xs font-medium whitespace-nowrap">
                        {podcast.level}
                      </span>
                      <span className="hidden sm:inline">•</span>
                      <span className="whitespace-nowrap">{podcast.duration}</span>
                      <span className="hidden sm:inline">•</span>
                      <span className="whitespace-nowrap">{podcast.lessons} lessons</span>
                    </div>

                    {/* Mobile CTA */}
                    <div className="mt-3 sm:hidden">
                      <Button className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
                        <Play className="mr-2 h-4 w-4" />
                        Start Listening
                      </Button>
                    </div>
                  </div>

                  {/* Desktop Icon Button */}
                  <Button
                    size="icon"
                    variant="ghost"
                    className="hidden sm:inline-flex rounded-full h-10 w-10 flex-shrink-0 self-end sm:self-center"
                    aria-label={`Play ${podcast.title}`}
                  >
                    <Play className="h-5 w-5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Pode;
