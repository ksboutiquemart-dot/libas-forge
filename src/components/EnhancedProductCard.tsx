import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Star } from "lucide-react";
import { useState } from "react";

interface EnhancedProductCardProps {
  title: string;
  originalPrice: string;
  salePrice: string;
  discount: string;
  image: string;
  rating: number;
  reviewCount: number;
  sizes: string[];
  isNew?: boolean;
  className?: string;
}

const EnhancedProductCard = ({ 
  title, 
  originalPrice, 
  salePrice, 
  discount, 
  image, 
  rating, 
  reviewCount, 
  sizes, 
  isNew = false,
  className = "" 
}: EnhancedProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  return (
    <div className={`group cursor-pointer relative ${className}`}>
      {/* Product Image */}
      <div className="aspect-[3/4] bg-muted overflow-hidden mb-4 relative">
        {isNew && (
          <Badge className="absolute top-2 left-2 z-10 bg-primary text-primary-foreground">
            NEW
          </Badge>
        )}
        
        <Button
          variant="ghost"
          size="icon"
          className={`absolute top-2 right-2 z-10 bg-white/80 hover:bg-white ${
            isWishlisted ? 'text-red-500' : 'text-muted-foreground'
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
        >
          <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
        </Button>

        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Details */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-foreground">{salePrice}</span>
          <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
          <span className="text-sm text-green-600 font-medium">{discount}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(rating) 
                    ? 'fill-yellow-400 text-yellow-400' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({reviewCount})</span>
        </div>

        {/* Sizes */}
        <div className="flex items-center gap-1 flex-wrap">
          {sizes.map((size) => (
            <button
              key={size}
              className={`text-xs px-2 py-1 border rounded ${
                selectedSize === size
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border text-muted-foreground hover:border-primary'
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedSize(size === selectedSize ? "" : size);
              }}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Quick View Button */}
        <Button 
          variant="outline" 
          size="sm" 
          className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          Quick View
        </Button>
      </div>
    </div>
  );
};

export default EnhancedProductCard;