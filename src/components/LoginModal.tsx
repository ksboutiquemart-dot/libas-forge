import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Mail, User, X } from "lucide-react";
import { useState } from "react";

interface LoginModalProps {
  children: React.ReactNode;
}

const LoginModal = ({ children }: LoginModalProps) => {
  const [phone, setPhone] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("");

  const handleRequestOTP = () => {
    if (phone.length === 10) {
      setShowOTP(true);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-semibold">
            Login With OTP
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {!showOTP ? (
            <>
              <p className="text-center text-sm text-muted-foreground">
                Please enter your 10 digit mobile number
              </p>

              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 px-3 py-2 border rounded-md bg-muted">
                    <img src="/api/placeholder/20/15" alt="IN" className="w-5 h-3" />
                    <span className="text-sm">+91</span>
                  </div>
                  <Input
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength={10}
                    className="flex-1"
                    type="tel"
                  />
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={handleRequestOTP}
                  disabled={phone.length !== 10}
                >
                  Request OTP
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  A 4 digit OTP will be sent to your phone number
                </p>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <p className="text-center text-sm text-muted-foreground">
                Enter the 4-digit OTP sent to +91 {phone}
              </p>
              
              <div className="flex justify-center gap-2">
                {[...Array(4)].map((_, i) => (
                  <Input
                    key={i}
                    className="w-12 h-12 text-center text-lg"
                    maxLength={1}
                    type="text"
                  />
                ))}
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">
                Verify OTP
              </Button>

              <Button 
                variant="ghost" 
                className="w-full"
                onClick={() => setShowOTP(false)}
              >
                Change Number
              </Button>
            </div>
          )}

          <div className="space-y-4">
            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-sm text-muted-foreground">
                Or Sign-in with
              </span>
            </div>

            <Button variant="outline" className="w-full" size="lg">
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>

            <div className="relative">
              <Separator />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-sm text-muted-foreground">
                Or continue with
              </span>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="flex-1 bg-blue-600 text-white hover:bg-blue-700 border-blue-600">
                Facebook
              </Button>
              <Button variant="outline" className="flex-1 bg-red-500 text-white hover:bg-red-600 border-red-500">
                Google
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;