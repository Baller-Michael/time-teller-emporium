import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { Watch } from "@/data/watches";

interface WatchDialogProps {
  watch: Watch | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WatchDialog = ({ watch, open, onOpenChange }: WatchDialogProps) => {
  if (!watch) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-luxury-dark">
            {watch.brand} {watch.name}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground capitalize">
            {watch.category} Collection
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg bg-luxury-cream">
              <img 
                src={watch.image} 
                alt={`${watch.brand} ${watch.name}`}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {watch.isNew && (
                <Badge className="bg-luxury-gold text-luxury-dark font-medium">
                  NEW
                </Badge>
              )}
              {watch.isOnSale && (
                <Badge className="bg-destructive text-destructive-foreground font-medium">
                  SALE
                </Badge>
              )}
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {watch.description}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Price</h4>
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-bold text-luxury-dark">
                    ${watch.price.toLocaleString()}
                  </span>
                  {watch.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${watch.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Specifications</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Brand:</span>
                    <span className="ml-2 font-medium">{watch.brand}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Category:</span>
                    <span className="ml-2 font-medium capitalize">{watch.category}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Model:</span>
                    <span className="ml-2 font-medium">{watch.name}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">SKU:</span>
                    <span className="ml-2 font-medium">CHR-{watch.id.padStart(3, '0')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <Button className="flex-1 bg-luxury-dark hover:bg-luxury-gold hover:text-luxury-dark transition-colors">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="border-luxury-dark text-luxury-dark hover:bg-luxury-dark hover:text-white">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            <div className="text-sm text-muted-foreground pt-4 border-t">
              <p>• Free worldwide shipping on orders over $1,000</p>
              <p>• 2-year international warranty included</p>
              <p>• Swiss certified authentic timepiece</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WatchDialog;