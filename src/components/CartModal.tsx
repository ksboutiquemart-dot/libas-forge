import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: string;
  title: string;
  originalPrice: string;
  salePrice: string;
  discount: string;
  image: string;
  size: string;
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal = ({ isOpen, onClose }: CartModalProps) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      title: "Mustard Printed Cotton Straight Suit With Dupatta",
      originalPrice: "₹4,899",
      salePrice: "₹1,549",
      discount: "68% off",
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=200",
      size: "XS",
      quantity: 1
    },
    {
      id: "2",
      title: "Rust Printed Cotton Fit and Flare Dress",
      originalPrice: "₹2,849",
      salePrice: "₹999",
      discount: "64% off",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200",
      size: "XS",
      quantity: 1
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.salePrice.replace('₹', '').replace(',', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const calculateOriginalTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.originalPrice.replace('₹', '').replace(',', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const handlePlaceOrder = () => {
    onClose();
    navigate('/checkout');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Cart</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="flex gap-3">
              <div className="w-20 h-24 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 space-y-2">
                <h3 className="text-sm font-medium leading-tight">{item.title}</h3>
                
                <div className="flex items-center gap-2 text-sm">
                  <span className="font-semibold">{item.salePrice}</span>
                  <span className="text-muted-foreground line-through">{item.originalPrice}</span>
                  <span className="text-green-600">{item.discount}</span>
                </div>
                
                <p className="text-xs text-muted-foreground">Size: {item.size}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-red-500"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {cartItems.length > 0 && (
          <>
            <Separator />
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>TOTAL MRP</span>
                <span>₹{calculateOriginalTotal().toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold">
                <span>SUBTOTAL</span>
                <span>₹{calculateTotal().toLocaleString()}</span>
              </div>
            </div>

            <Button 
              onClick={handlePlaceOrder}
              className="w-full"
              size="lg"
            >
              PLACE ORDER
            </Button>
          </>
        )}

        {cartItems.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">Your cart is empty</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={onClose}
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;