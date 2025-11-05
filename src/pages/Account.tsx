import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  User,
  Settings,
  Trophy,
  Languages,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
} from "lucide-react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";

const Account = () => {
  const menuItems = [
    { icon: Settings, label: "Settings", description: "Preferences & more" },
    {
      icon: Languages,
      label: "My Languages",
      description: "Manage learning languages",
    },
    { icon: Bell, label: "Notifications", description: "Reminders & alerts" },
    { icon: Shield, label: "Privacy", description: "Security settings" },
    { icon: HelpCircle, label: "Help & Support", description: "Get assistance" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <Header />

      <main className="max-w-lg mx-auto px-6 pt-8">
        <div className="space-y-6 animate-fade-in">
          {/* Profile Card */}
          <Card className="p-6 rounded-3xl border-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-accent/60 flex items-center justify-center">
                <User className="h-10 w-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Sarah Johnson</h3>
                <p className="text-muted-foreground">sarah.j@email.com</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t">
              <div className="text-center">
                <div className="text-xl font-bold text-accent">47</div>
                <div className="text-xs text-muted-foreground">Day Streak</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent">2,450</div>
                <div className="text-xs text-muted-foreground">Points</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent">12</div>
                <div className="text-xs text-muted-foreground">Badges</div>
              </div>
            </div>
          </Card>

          {/* Achievements */}
          <Card className="p-6 rounded-3xl border-2 bg-gradient-to-br from-accent/10 to-accent/5">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="h-6 w-6 text-accent" />
              <h3 className="text-lg font-bold">Recent Achievement</h3>
            </div>
            <p className="text-muted-foreground mb-2">
              🎉 Completed 30-day learning streak!
            </p>
            <p className="text-sm text-muted-foreground">
              Keep going to unlock more rewards
            </p>
          </Card>

          {/* Menu Items */}
          <div className="space-y-2">
            {menuItems.map((item, index) => (
              <Card
                key={index}
                className="p-4 rounded-2xl border hover:shadow-medium transition-smooth cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Logout Button */}
          <Button
            variant="outline"
            className="w-full rounded-full border-2"
            size="lg"
          >
            <LogOut className="mr-2 h-5 w-5" />
            Log Out
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Account;
