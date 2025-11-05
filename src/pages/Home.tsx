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
          <section className="text-center space-y-6 pt-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Your learning adventure awaits.
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Master any language with AI-powered content.{" "}
              <span className="font-semibold text-foreground">
                Learn naturally.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-base px-8 h-14 border-2 hover:bg-foreground hover:text-background transition-smooth font-medium"
              >
                Explore Languages
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                className="rounded-full text-base px-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth font-medium shadow-medium"
              >
                Start Learning
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </section>

          {/* Features Grid */}
          <section className="grid gap-3 pt-12">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 border rounded-3xl hover:shadow-medium transition-smooth animate-scale-in bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1.5">{feature.title}</h3>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </section>

          {/* Stats Section */}
          <section className="bg-card border rounded-3xl p-8 text-center space-y-4 mt-8">
            <h3 className="text-2xl md:text-3xl font-bold">Join 10,000+ Learners</h3>
            <p className="text-foreground/60">
              Already mastering languages with Podelli
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">50+</div>
                <div className="text-sm text-foreground/50">Languages</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-foreground/50">Lessons</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">95%</div>
                <div className="text-sm text-foreground/50">Success</div>
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
