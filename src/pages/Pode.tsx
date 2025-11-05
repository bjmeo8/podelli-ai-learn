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
      color: "bg-orange-100",
    },
    {
      id: 2,
      title: "French Culture Stories",
      level: "Intermediate",
      duration: "20 min",
      lessons: 8,
      color: "bg-blue-100",
    },
    {
      id: 3,
      title: "Japanese Daily Life",
      level: "Advanced",
      duration: "25 min",
      lessons: 15,
      color: "bg-pink-100",
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
                className="p-5 rounded-3xl border-2 hover:shadow-medium transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-2xl ${podcast.color} flex items-center justify-center flex-shrink-0`}
                  >
                    <Headphones className="h-8 w-8 text-foreground/60" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">{podcast.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="px-2 py-0.5 bg-secondary rounded-full text-xs font-medium">
                        {podcast.level}
                      </span>
                      <span>•</span>
                      <span>{podcast.duration}</span>
                      <span>•</span>
                      <span>{podcast.lessons} lessons</span>
                    </div>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="rounded-full h-10 w-10 flex-shrink-0"
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
