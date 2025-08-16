import { ChevronDown, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

interface FilterSection {
  title: string;
  options: string[];
}

const FilterSidebar = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    size: false,
    colors: false,
    category: false,
    fabric: false,
    occasion: false,
    pattern: false,
    price: false,
    style: false,
    sleeve: false,
    neck: false
  });

  const filterSections: FilterSection[] = [
    { title: "SIZE", options: ["XS", "S", "M", "L", "XL", "XXL"] },
    { title: "COLORS", options: ["Red", "Blue", "Green", "Black", "White", "Pink", "Yellow"] },
    { title: "CATEGORY", options: ["Suits", "Kurtas", "Dresses", "Sarees", "Lehengas"] },
    { title: "FABRIC", options: ["Cotton", "Silk", "Crepe", "Georgette", "Chiffon"] },
    { title: "OCCASION", options: ["Casual", "Party", "Wedding", "Festival", "Office"] },
    { title: "PATTERN AND PRINT", options: ["Floral", "Geometric", "Paisley", "Abstract", "Solid"] },
    { title: "PRICE", options: ["Under ₹1000", "₹1000-₹2000", "₹2000-₹5000", "Above ₹5000"] },
    { title: "STYLE", options: ["A-Line", "Straight", "Palazzo", "Sharara", "Anarkali"] },
    { title: "SLEEVE LENGTH", options: ["Sleeveless", "Short Sleeve", "3/4 Sleeve", "Full Sleeve"] },
    { title: "NECK", options: ["Round", "V-Neck", "Boat", "High Neck", "Collar"] }
  ];

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="w-80 bg-background border-r border-border p-6 h-full overflow-y-auto">
      {/* Filter Header */}
      <div className="flex items-center gap-2 mb-6">
        <Filter className="h-4 w-4" />
        <span className="font-medium text-foreground">FILTER</span>
      </div>

      <Separator className="mb-6" />

      {/* Filter Sections */}
      <div className="space-y-4">
        {filterSections.map((section) => {
          const sectionKey = section.title.toLowerCase().replace(/\s+/g, '');
          const isOpen = openSections[sectionKey];
          
          return (
            <div key={section.title} className="border-b border-border pb-4">
              <Button
                variant="ghost"
                className="w-full justify-between p-0 h-auto font-medium text-sm text-foreground hover:bg-transparent"
                onClick={() => toggleSection(sectionKey)}
              >
                {section.title}
                <ChevronDown 
                  className={`h-4 w-4 transition-transform ${
                    isOpen ? 'rotate-180' : ''
                  }`} 
                />
              </Button>
              
              {isOpen && (
                <div className="mt-3 space-y-2">
                  {section.options.map((option) => (
                    <div key={option} className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        id={`${sectionKey}-${option}`}
                        className="rounded border-border text-primary focus:ring-primary"
                      />
                      <label 
                        htmlFor={`${sectionKey}-${option}`}
                        className="text-sm text-muted-foreground cursor-pointer"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterSidebar;