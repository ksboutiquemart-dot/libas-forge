import { Search, ShoppingBag, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MobileMenu from "./MobileMenu";
import LoginModal from "./LoginModal";
import CartModal from "./CartModal";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const navigation = [
    { name: "SALE", href: "/sale" },
    { name: "NEW ARRIVALS", href: "/new-arrivals" }, 
    { name: "SUITS", href: "/suits" },
    { name: "KURTAS", href: "/kurtas" },
    { name: "DRESSES", href: "/dresses" },
    { name: "COLLECTIONS", href: "/collections" },
    { name: "KIDS WEAR", href: "/kids" },
    { name: "ACCESSORIES", href: "/accessories" },
    { name: "BEST SELLERS", href: "/bestsellers" }
  ];

  return (
    <header className="bg-background">
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-center text-sm font-medium">
        🎉 MEGA SALE! UP TO 70% OFF ON BESTSELLERS | FREE SHIPPING ON ORDERS ABOVE ₹999
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
              <Link to="/" className="text-2xl font-bold text-primary">
                Pari
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <LoginModal>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </LoginModal>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  2
                </span>
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:block pb-4">
            <ul className="flex items-center justify-center space-x-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden pb-4 flex justify-center">
            <MobileMenu>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </MobileMenu>
          </div>
        </div>
      </div>
      
      <CartModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </header>
  );
};

export default Header;