export interface Destination {
  id: string;
  name: string;
  country: string;
  region: string;
  imageUrl: string;
  toursCount: number;
  featured?: boolean;
  tag?: string;
  startingPrice: number;
}
