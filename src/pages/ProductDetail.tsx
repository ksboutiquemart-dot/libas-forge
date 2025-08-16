import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Heart, Star, Truck, RefreshCw, Shield, Minus, Plus } from "lucide-react";
import Header from "@/components/Header";
import { useToast } from "@/hooks/use-toast";

// Sample product data - in real app, fetch based on ID
const productData = {
  "1": {
    id: "1",
    title: "Mustard Printed Cotton Straight Suit With Dupatta",
    originalPrice: "₹4,899",
    salePrice: "₹1,549",
    discount: "68% OFF",
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500",
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500"
    ],
    rating: 4.5,
    reviewCount: 128,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Beautiful mustard printed cotton straight suit with matching dupatta. Perfect for casual and festive occasions.",
    features: ["100% Cotton", "Machine Washable", "Breathable Fabric", "Color Fast"],
    sku: "352535-XS"
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = productData[id as keyof typeof productData];

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        variant: "destructive"
      });
      return;
    }

    // Check if user is logged in (you'll implement this with Supabase)
    const isLoggedIn = false; // This will be connected to your auth system

    if (!isLoggedIn) {
      toast({
        title: "Please login to add items to cart",
        variant: "destructive"
      });
      navigate("/login");
      return;
    }

    // Add to cart logic (will be implemented with Supabase)
    toast({
      title: "Added to cart!",
      description: `${product.title} (Size: ${selectedSize})`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] bg-muted overflow-hidden rounded-lg">
              <img 
                src={product.images[selectedImage]} 
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square w-20 bg-muted rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground mb-2">{product.title}</h1>
              <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-foreground">{product.salePrice}</span>
              <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
              <Badge variant="secondary" className="text-green-600">{product.discount}</Badge>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) 
                        ? 'fill-yellow-400 text-yellow-400' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">Size:</label>
                <button className="text-sm text-primary underline">Size Chart</button>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-4 py-2 border rounded-md text-sm font-medium ${
                      selectedSize === size
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border text-foreground hover:border-primary'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <label className="text-sm font-medium">Quantity:</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                onClick={handleAddToCart}
                className="w-full"
                size="lg"
              >
                ADD TO CART
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                size="lg"
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart className={`h-4 w-4 mr-2 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
                {isWishlisted ? 'WISHLISTED' : 'ADD TO WISHLIST'}
              </Button>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Truck className="h-4 w-4 text-muted-foreground" />
                <span>Express Shipping</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RefreshCw className="h-4 w-4 text-muted-foreground" />
                <span>Easy 15 Days Return Policy</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="h-4 w-4 text-muted-foreground" />
                <span>Cash on Delivery Available</span>
              </div>
            </div>

            <Separator />

            {/* Product Description */}
            <div className="space-y-3">
              <h3 className="font-semibold">Description</h3>
              <p className="text-sm text-muted-foreground">{product.description}</p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-semibold">Features</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;