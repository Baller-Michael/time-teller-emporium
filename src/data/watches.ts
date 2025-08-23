import watch1 from "@/assets/watch-1.jpg";
import watch2 from "@/assets/watch-2.jpg";
import watch3 from "@/assets/watch-3.jpg";
import watch4 from "@/assets/watch-4.jpg";
import watch5 from "@/assets/watch-5.jpg";
import watch6 from "@/assets/watch-6.jpg";

export interface Watch {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isOnSale?: boolean;
  description: string;
}

export const watches: Watch[] = [
  {
    id: "1",
    name: "Classic Elegance Automatic",
    brand: "CHRONOS",
    price: 2450,
    image: watch1,
    category: "luxury",
    isNew: true,
    description: "A timeless piece featuring Roman numerals and gold accents on black leather."
  },
  {
    id: "2",
    name: "Sport Chronograph Pro",
    brand: "CHRONOS",
    price: 1850,
    originalPrice: 2100,
    image: watch2,
    category: "sport",
    isOnSale: true,
    description: "Professional sports chronograph with precision timing and durable construction."
  },
  {
    id: "3",
    name: "Heritage Dress Watch",
    brand: "CHRONOS",
    price: 1950,
    image: watch3,
    category: "dress",
    description: "Elegant dress watch with rose gold case and premium leather strap."
  },
  {
    id: "4",
    name: "Deep Sea Diver",
    brand: "CHRONOS",
    price: 3200,
    image: watch4,
    category: "diving",
    isNew: true,
    description: "Professional diving watch with ceramic bezel and 300m water resistance."
  },
  {
    id: "5",
    name: "Aviation Pioneer",
    brand: "CHRONOS",
    price: 2750,
    image: watch5,
    category: "pilot",
    description: "Vintage-inspired pilot watch with bronze case and aviation heritage."
  },
  {
    id: "6",
    name: "Minimal Edition",
    brand: "CHRONOS",
    price: 1250,
    originalPrice: 1450,
    image: watch6,
    category: "minimalist",
    isOnSale: true,
    description: "Clean, minimalist design with essential functionality and timeless appeal."
  },
];

export const categories = ["luxury", "sport", "dress", "diving", "pilot", "minimalist"];