export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatarUrl: string;
  rating: number;
  tourTaken: string;
  date: string;
  quote: string;
  verified: boolean;
  category?: string;
  tripImage?: string;
  highlight?: string;
  travelerType?: string;
}
