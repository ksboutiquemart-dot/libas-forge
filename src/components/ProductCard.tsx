import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  price: string;
  image: string;
  className?: string;
}

const ProductCard = ({ title, price, image, className = "" }: ProductCardProps) => {
  return (
    <div className={`group cursor-pointer ${className}`}>
      <div className="aspect-[3/4] bg-muted overflow-hidden mb-4">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium leading-tight text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-lg font-semibold text-primary">{price}</p>
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

export default ProductCard;