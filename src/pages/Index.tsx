import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilterBar from "@/components/FilterBar";
import WatchCard from "@/components/WatchCard";
import WatchDialog from "@/components/WatchDialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { watches, categories, Watch } from "@/data/watches";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("name");
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  // Filter and sort watches
  const filteredAndSortedWatches = useMemo(() => {
    let filtered = watches.filter(watch => {
      const matchesSearch = watch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           watch.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           watch.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || watch.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Sort watches
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "brand":
        filtered.sort((a, b) => a.brand.localeCompare(b.brand));
        break;
      case "newest":
        filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      default: // name
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortBy]);

  const handleClearFilters = () => {
    setSelectedCategory("all");
    setSearchQuery("");
  };

  const handleWatchClick = (watch: Watch) => {
    setSelectedWatch(watch);
    setIsDialogOpen(true);
  };

  const handleNavigate = (section: string) => {
    toast({
      title: `${section.charAt(0).toUpperCase() + section.slice(1)} Section`,
      description: `Navigating to ${section} page - Coming soon!`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onSearchChange={setSearchQuery}
        onNavigate={handleNavigate}
      />
      
      <Hero />

      {/* Featured Watches Slider */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-luxury-dark mb-4">Featured Timepieces</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our curated selection of exceptional watches, each representing the pinnacle of craftsmanship and design
          </p>
        </div>
        
        <div className="px-8">
          <Carousel className="w-full">
            <CarouselContent>
              {watches.slice(0, 4).map((watch) => (
                <CarouselItem key={watch.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <WatchCard
                      id={watch.id}
                      name={watch.name}
                      brand={watch.brand}
                      price={watch.price}
                      originalPrice={watch.originalPrice}
                      image={watch.image}
                      category={watch.category}
                      isNew={watch.isNew}
                      isOnSale={watch.isOnSale}
                      onClick={() => handleWatchClick(watch)}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
      
      <FilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
        onClearFilters={handleClearFilters}
        totalResults={filteredAndSortedWatches.length}
      />

      {/* Watch Catalog */}
      <main className="container mx-auto px-4 py-8">
        {filteredAndSortedWatches.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              No watches found
            </h2>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={handleClearFilters}
              className="text-luxury-gold hover:text-luxury-gold/80 underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedWatches.map((watch) => (
              <WatchCard
                key={watch.id}
                id={watch.id}
                name={watch.name}
                brand={watch.brand}
                price={watch.price}
                originalPrice={watch.originalPrice}
                image={watch.image}
                category={watch.category}
                isNew={watch.isNew}
                isOnSale={watch.isOnSale}
                onClick={() => handleWatchClick(watch)}
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-luxury-dark text-primary-foreground py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">CHRONOS</h3>
              <p className="text-primary-foreground/80 mb-4 max-w-md">
                Luxury timepieces crafted with Swiss precision and timeless elegance. 
                Discover your perfect watch today.
              </p>
              <div className="text-luxury-gold text-sm">
                Since 1892 • Swiss Heritage
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Care Instructions</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Warranty</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-luxury-gold transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-luxury-gold transition-colors">Sustainability</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
            © 2024 Chronos Luxury Timepieces. All rights reserved.
          </div>
        </div>
      </footer>

      <WatchDialog 
        watch={selectedWatch}
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
      />
    </div>
  );
};

export default Index;