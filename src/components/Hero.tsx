import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-hero text-primary-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Timeless Elegance
            <span className="block text-luxury-gold">Crafted to Perfection</span>
          </h1>
          <p className="text-lg lg:text-xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto">
            Discover our curated collection of luxury timepieces, where Swiss craftsmanship 
            meets contemporary design. Each watch tells a story of precision and style.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-luxury-gold text-luxury-dark hover:bg-luxury-gold/90 shadow-gold">
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-luxury-dark"
            >
              Watch Catalog
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="bg-luxury-gold/10 p-4 rounded-full mb-4">
                <Clock className="h-8 w-8 text-luxury-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Swiss Movement</h3>
              <p className="text-primary-foreground/70 text-sm">
                Precision Swiss mechanical movements for unparalleled accuracy
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-luxury-gold/10 p-4 rounded-full mb-4">
                <Shield className="h-8 w-8 text-luxury-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Lifetime Warranty</h3>
              <p className="text-primary-foreground/70 text-sm">
                Comprehensive warranty coverage for peace of mind
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-luxury-gold/10 p-4 rounded-full mb-4">
                <Truck className="h-8 w-8 text-luxury-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-primary-foreground/70 text-sm">
                Complimentary worldwide shipping on all orders
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;