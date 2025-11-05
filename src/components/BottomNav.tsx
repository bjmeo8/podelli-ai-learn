import { NavLink } from "react-router-dom";
import { Home, Podcast, Gamepad2, User } from "lucide-react";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/pode", icon: Podcast, label: "Pode" },
  { to: "/play", icon: Gamepad2, label: "Play" },
  { to: "/account", icon: User, label: "Account" },
];

const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg supports-[backdrop-filter]:bg-background/90 border-t">
      <div className="max-w-lg mx-auto px-4 h-20 flex items-center justify-around">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1.5 px-4 py-2 rounded-2xl transition-smooth ${
                isActive
                  ? "text-foreground"
                  : "text-foreground/40 hover:text-foreground/70"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon className={`h-6 w-6 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                <span className={`text-xs ${isActive ? 'font-semibold' : 'font-medium'}`}>{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
