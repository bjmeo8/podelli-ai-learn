import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Brain, Headphones, Trophy } from "lucide-react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Personalized lessons that adapt to your pace",
    },
    {
      icon: Headphones,
      title: "Podcast Content",
      description: "Learn through engaging audio stories",
    },
    {
      icon: Trophy,
      title: "Gamified Experience",
      description: "Make learning fun with interactive games",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />

      <main className="max-w-lg mx-auto px-6 pt-8">
        <div className="space-y-8 animate-fade-in">
          {/* Hero Section */}
          <section className="text-center space-y-6 pt-4">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Your learning adventure awaits.
            </h2>
            <p className="text-xl text-muted-foreground max-w-md mx-auto">
              Master any language with AI-powered content.{" "}
              <span className="font-semibold text-foreground">
                Learn naturally.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-base px-8"
              >
                Explore Languages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                className="rounded-full text-base px-8 bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>

          {/* Features Grid */}
          <section className="grid gap-4 pt-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 border-2 rounded-3xl hover:shadow-medium transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </section>

          {/* Stats Section */}
          <section className="bg-secondary rounded-3xl p-8 text-center space-y-4">
            <h3 className="text-3xl font-bold">Join 10,000+ Learners</h3>
            <p className="text-muted-foreground">
              Already mastering languages with Podelli
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">1000+</div>
                <div className="text-sm text-muted-foreground">Lessons</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">95%</div>
                <div className="text-sm text-muted-foreground">Success</div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Home;
