import FilterSidebar from "@/components/FilterSidebar";
import EnhancedProductCard from "@/components/EnhancedProductCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Menu, User, ShoppingBag, ArrowUpDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import MobileMenu from "@/components/MobileMenu";
import LoginModal from "@/components/LoginModal";

const Sale = () => {
  const saleProducts = [
    {
      title: "Indigo Printed Cotton Straight Suit Set",
      originalPrice: "₹4,749",
      salePrice: "₹1,749",
      discount: "63% off",
      image: "/api/placeholder/400/600",
      rating: 4.5,
      reviewCount: 35,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      isNew: true
    },
    {
      title: "Blue Yoke Design Silk Blend Straight Suit Set",
      originalPrice: "₹3,299",
      salePrice: "₹1,299",
      discount: "61% off", 
      image: "/api/placeholder/400/600",
      rating: 4.0,
      reviewCount: 35,
      sizes: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    {
      title: "Maroon Printed Crepe Straight Kurta With Palazzo",
      originalPrice: "₹2,999",
      salePrice: "₹1,649",
      discount: "45% off",
      image: "/api/placeholder/400/600",
      rating: 4.5,
      reviewCount: 86,
      sizes: ["XS", "S", "M", "XL", "XXL"]
    },
    {
      title: "Green Floral Printed Cotton Kurta Set",
      originalPrice: "₹2,499",
      salePrice: "₹1,249",
      discount: "50% off",
      image: "/api/placeholder/400/600",
      rating: 4.2,
      reviewCount: 42,
      sizes: ["S", "M", "L", "XL"],
      isNew: true
    },
    {
      title: "Pink Embroidered Georgette Anarkali Suit",
      originalPrice: "₹5,999",
      salePrice: "₹2,999",
      discount: "50% off",
      image: "/api/placeholder/400/600",
      rating: 4.8,
      reviewCount: 67,
      sizes: ["XS", "S", "M", "L", "XL"]
    },
    {
      title: "Black & Gold Silk Sharara Set",
      originalPrice: "₹4,499",
      salePrice: "₹2,249",
      discount: "50% off",
      image: "/api/placeholder/400/600",
      rating: 4.3,
      reviewCount: 28,
      sizes: ["S", "M", "L", "XL", "XXL"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            {/* Mobile Menu */}
            <div className="flex items-center gap-4 lg:hidden">
              <MobileMenu>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </MobileMenu>
              
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5" />
              </Button>
            </div>
            
            {/* Logo */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <h1 className="text-2xl font-bold text-primary">Libas</h1>
            </div>

            {/* Desktop Search */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Search for products..."
                  className="pl-10"
                />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-2">
              <LoginModal>
                <Button variant="ghost" size="icon" className="hidden lg:flex">
                  <User className="h-5 w-5" />
                </Button>
              </LoginModal>
              
              <Button variant="ghost" size="icon" className="hidden lg:flex">
                <Search className="h-5 w-5" />
              </Button>
              
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Desktop Filter Sidebar */}
        <div className="hidden lg:block">
          <FilterSidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Hero Banner */}
          <div 
            className="relative h-64 lg:h-80 bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-end"
            style={{
              backgroundImage: "url('/api/placeholder/1200/400')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 text-right p-8 lg:p-16 text-white">
              <h1 className="text-4xl lg:text-6xl font-bold mb-2">BESTSELLERS</h1>
              <p className="text-2xl lg:text-4xl font-bold">UPTO 60% OFF</p>
            </div>
          </div>

          {/* Breadcrumb & Sort */}
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center text-sm text-muted-foreground">
                <span>Home</span>
                <span className="mx-2">/</span>
                <span className="text-foreground">Sale</span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Sale | 3613 products
                </span>
                
                <div className="flex items-center gap-2">
                  <ArrowUpDown className="h-4 w-4" />
                  <span className="text-sm">SORT</span>
                  <Select defaultValue="featured">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">FEATURED</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="rating">Best Rating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {saleProducts.map((product, index) => (
                <EnhancedProductCard
                  key={index}
                  title={product.title}
                  originalPrice={product.originalPrice}
                  salePrice={product.salePrice}
                  discount={product.discount}
                  image={product.image}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  sizes={product.sizes}
                  isNew={product.isNew}
                />
              ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg">
                Load More Products
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;