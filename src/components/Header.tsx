import { Search, Menu, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onSearchChange: (query: string) => void;
  onMenuClick?: () => void;
  onNavigate?: (section: string) => void;
}

const Header = ({ onSearchChange, onMenuClick, onNavigate }: HeaderProps) => {
  return (
    <header className="bg-gradient-hero shadow-luxury sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary-foreground">
              CHRONOS
            </h1>
            <span className="text-luxury-gold text-sm font-medium">
              LUXURY TIMEPIECES
            </span>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search watches..."
                className="pl-10 bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-luxury-gold"
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <button 
              onClick={() => onNavigate?.('collections')} 
              className="text-primary-foreground hover:text-luxury-gold transition-colors"
            >
              Collections
            </button>
            <button 
              onClick={() => onNavigate?.('brands')} 
              className="text-primary-foreground hover:text-luxury-gold transition-colors"
            >
              Brands
            </button>
            <button 
              onClick={() => onNavigate?.('about')} 
              className="text-primary-foreground hover:text-luxury-gold transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => onNavigate?.('contact')} 
              className="text-primary-foreground hover:text-luxury-gold transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile search button */}
            <Button variant="ghost" size="icon" className="md:hidden text-primary-foreground hover:text-luxury-gold">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Cart */}
            <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-luxury-gold">
              <ShoppingBag className="h-5 w-5" />
            </Button>

            {/* Mobile menu */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden text-primary-foreground hover:text-luxury-gold"
              onClick={onMenuClick}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search watches..."
              className="pl-10 bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-luxury-gold"
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;