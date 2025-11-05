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
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-50 shadow-medium">
      <div className="max-w-lg mx-auto px-4">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 py-2 px-4 rounded-xl transition-smooth ${
                  isActive
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    className={`h-6 w-6 transition-smooth ${
                      isActive ? "scale-110" : ""
                    }`}
                  />
                  <span className="text-xs font-medium">{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
