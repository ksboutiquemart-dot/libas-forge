import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, User, Menu } from "lucide-react";
import { useState } from "react";
import LoginModal from "./LoginModal";

interface MobileMenuProps {
  children: React.ReactNode;
}

const MobileMenu = ({ children }: MobileMenuProps) => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const menuSections = [
    {
      title: "SALE",
      items: []
    },
    {
      title: "BUY 4 AT ₹2199",
      items: []
    },
    {
      title: "GERUA 2 SUITS AT ₹2099",
      items: []
    },
    {
      title: "SUITS AT FLAT ₹999",
      items: []
    },
    {
      title: "SPECIAL OFFER",
      items: ["Limited Time Deals", "Festival Sale", "Clearance"]
    },
    {
      title: "SHOP BY CATEGORIES", 
      items: ["Suits", "Kurtas", "Dresses", "Sarees", "Lehengas", "Bottoms"]
    },
    {
      title: "NEW ARRIVALS",
      items: []
    },
    {
      title: "WHAT'S TRENDING",
      items: ["Festival Wear", "Wedding Collection", "Casual Wear"]
    },
    {
      title: "COLLECTIONS",
      items: ["Summer Collection", "Festive Collection", "Designer Collection"]
    },
    {
      title: "LIBAS ART",
      items: []
    },
    {
      title: "EXTRALOVE BY LIBAS",
      items: []
    },
    {
      title: "LIBAS KIDS",
      items: []
    },
    {
      title: "BEST SELLERS",
      items: []
    }
  ];

  const toggleSection = (title: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      
      <SheetContent side="left" className="w-80 p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <LoginModal>
              <Button variant="ghost" className="flex items-center gap-2 text-primary">
                <User className="h-5 w-5" />
                LOG IN
              </Button>
            </LoginModal>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto">
            <div className="py-2">
              {menuSections.map((section) => (
                <div key={section.title} className="border-b border-border">
                  {section.items.length > 0 ? (
                    <div>
                      <Button
                        variant="ghost"
                        className="w-full justify-between px-4 py-3 text-left font-medium text-foreground hover:bg-accent rounded-none"
                        onClick={() => toggleSection(section.title)}
                      >
                        {section.title}
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform ${
                            expandedSections[section.title] ? 'rotate-180' : ''
                          }`}
                        />
                      </Button>
                      
                      {expandedSections[section.title] && (
                        <div className="bg-accent/50">
                          {section.items.map((item) => (
                            <Button
                              key={item}
                              variant="ghost"
                              className="w-full justify-start px-8 py-2 text-sm text-muted-foreground hover:text-foreground rounded-none"
                            >
                              {item}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Button
                      variant="ghost"
                      className="w-full justify-start px-4 py-3 text-left font-medium text-foreground hover:bg-accent rounded-none"
                    >
                      {section.title}
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;