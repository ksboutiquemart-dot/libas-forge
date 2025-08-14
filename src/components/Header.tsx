import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const navigation = [
    "RT'S EDIT",
    "NEW ARRIVALS", 
    "CELEBRITY CLOSET",
    "COLLECTIONS",
    "WOMEN",
    "MEN",
    "KIDS WEAR",
    "ACCESSORIES",
    "CLIENT DIARIES",
    "CLEARANCE SALE"
  ];

  return (
    <header className="bg-background">
      {/* Announcement Bar */}
      <div className="bg-[hsl(var(--announcement))] text-[hsl(var(--announcement-foreground))] py-2 text-center text-sm font-medium">
        JUST DROPPED! EXPLORE OUR LATEST SUMMER COLLECTIONS. SHOP THE SEASON'S MUST-HAVES NOW!
      </div>

      {/* Main Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4">
          {/* Top row with currency and icons */}
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <img src="/api/placeholder/20/20" alt="USD" className="w-5 h-3" />
              <span className="text-sm">USD</span>
            </div>
            
            {/* Logo */}
            <div className="flex-1 flex justify-center">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary">T</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:block pb-4">
            <ul className="flex items-center justify-center space-x-8">
              {navigation.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden pb-4 flex justify-center">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;