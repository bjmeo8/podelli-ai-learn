import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Zap, Star, Trophy } from "lucide-react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const Play = () => {
  const games = [
    {
      id: 1,
      title: "Word Match",
      description: "Match words with their translations",
      icon: Zap,
      colorClass: "bg-[hsl(48,96%,53%)]",
      points: 250,
    },
    {
      id: 2,
      title: "Story Builder",
      description: "Create sentences from vocabulary",
      icon: Star,
      colorClass: "bg-[hsl(271,76%,53%)]",
      points: 500,
    },
    {
      id: 3,
      title: "Speed Challenge",
      description: "Race against time to answer",
      icon: Trophy,
      colorClass: "bg-[hsl(142,76%,36%)]",
      points: 1000,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />

      <main className="max-w-lg mx-auto px-6 pt-8">
        <div className="space-y-6 animate-fade-in">
          <div>
            <h2 className="text-4xl font-bold mb-2">Play & Learn</h2>
            <p className="text-muted-foreground">
              Master languages through interactive games
            </p>
          </div>

          {/* Stats Card */}
          <Card className="p-6 rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/20">
            <div className="text-center space-y-2">
              <div className="text-5xl font-bold text-accent">2,450</div>
              <p className="text-sm text-muted-foreground">Total Points</p>
              <div className="flex justify-center gap-8 pt-4">
                <div>
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-xs text-muted-foreground">
                    Games Played
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-xs text-muted-foreground">
                    Achievements
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-xs text-muted-foreground">
                    Day Streak
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Daily Challenge */}
          <Card className="p-6 rounded-3xl border-2 bg-secondary">
            <div className="flex items-center gap-2 mb-3">
              <Gamepad2 className="h-5 w-5 text-accent" />
              <span className="text-sm font-semibold text-accent">
                DAILY CHALLENGE
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Vocabulary Sprint</h3>
            <p className="text-muted-foreground mb-4">
              Complete 20 word matches in under 2 minutes
            </p>
            <Button className="w-full rounded-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Start Challenge
            </Button>
          </Card>

          {/* Games List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">All Games</h3>
            {games.map((game, index) => (
              <Card
                key={game.id}
                className="p-5 rounded-3xl border-2 hover:shadow-medium transition-smooth cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-16 h-16 rounded-2xl ${game.colorClass} flex items-center justify-center flex-shrink-0`}
                  >
                    <game.icon className="h-8 w-8 text-white/90" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold mb-1">{game.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {game.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-accent" />
                      <span className="text-sm font-semibold text-accent">
                        {game.points} pts
                      </span>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    className="rounded-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    Play
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

export default Play;
