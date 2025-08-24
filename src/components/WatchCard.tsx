import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface WatchCardProps {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  isNew?: boolean;
  isOnSale?: boolean;
  onClick?: () => void;
}

const WatchCard = ({ 
  id, 
  name, 
  brand, 
  price, 
  originalPrice, 
  images, 
  category, 
  isNew, 
  isOnSale,
  onClick 
}: WatchCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card shadow-card hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 cursor-pointer" onClick={onClick}>
      <div className="relative aspect-square overflow-hidden bg-luxury-cream">
        <Carousel className="w-full h-full">
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <img 
                  src={image} 
                  alt={`${brand} ${name} view ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious 
            className="left-2 h-6 w-6 opacity-0 group-hover:opacity-100" 
            onClick={(e) => e.stopPropagation()} 
          />
          <CarouselNext 
            className="right-2 h-6 w-6 opacity-0 group-hover:opacity-100" 
            onClick={(e) => e.stopPropagation()} 
          />
        </Carousel>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {isNew && (
            <Badge className="bg-luxury-gold text-luxury-dark font-medium">
              NEW
            </Badge>
          )}
          {isOnSale && (
            <Badge className="bg-destructive text-destructive-foreground font-medium">
              SALE
            </Badge>
          )}
        </div>

        {/* Wishlist button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-background/80 hover:bg-background text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Quick add to cart - appears on hover */}
        <div className="absolute bottom-3 left-3 right-3 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
          <Button className="w-full bg-luxury-dark hover:bg-luxury-gold hover:text-luxury-dark transition-colors">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground uppercase tracking-wider">
            {brand}
          </div>
          <h3 className="font-semibold text-foreground line-clamp-2 min-h-[2.5rem]">
            {name}
          </h3>
          <div className="text-xs text-muted-foreground capitalize">
            {category}
          </div>
          <div className="flex items-center gap-2 pt-2">
            <span className="text-lg font-bold text-luxury-dark">
              ${price.toLocaleString()}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WatchCard;