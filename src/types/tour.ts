export interface Tour {
  id: string;
  title: string;
  location: string;
  country: string;
  category: "indian" | "international" | "pilgrimage" | "special";
  duration: string; // e.g. "6 Days / 5 Nights"
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  imageUrl: string;
  badge?: string;
  featured?: boolean;
  highlights: string[];
}
