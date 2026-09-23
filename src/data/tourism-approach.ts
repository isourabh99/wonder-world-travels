export interface TourismServiceItem {
  id: string;
  iconName: "Plane" | "Hotel" | "Ship" | "PackageCheck" | "CreditCard" | "Users";
  title: string;
  description: string;
  badge?: string;
}

export const TOURISM_APPROACH_DATA = {
  sectionBadge: "OUR APPROACH TO TOURISM",
  mainTitle: "Premium Experience We Can Offer",
  description:
    "Whatever your needs are. Wherever in the world you are, We are always ready to give you the best. Wonder World Travels makes your travel.. Unforgettable!",
  services: [
    {
      id: "air-ticketing",
      iconName: "Plane",
      title: "Air Ticketing",
      description: "Both International and Domestic flight bookings with seamless itinerary management.",
      badge: "Global & Domestic Flights",
    },
    {
      id: "hotel-booking",
      iconName: "Hotel",
      title: "Hotel Booking",
      description: "All categories of hotels from budget comfort to luxury 5-star & boutique resorts.",
      badge: "Verified Stays",
    },
    {
      id: "cruise-tour",
      iconName: "Ship",
      title: "Cruise Tour",
      description: "Cruise Tour Booking at the best price with exclusive ocean & river cruise deals.",
      badge: "Best Price Deals",
    },
    {
      id: "holiday-packages",
      iconName: "PackageCheck",
      title: "Best Holiday Package",
      description: "Customized Tour Packages around the world for individuals as well as groups.",
      badge: "Tailor-Made Trips",
    },
    {
      id: "online-payment",
      iconName: "CreditCard",
      title: "Online Payment",
      description: "Easy, secure online payment facilities available with multiple gateway options.",
      badge: "100% Safe & Secure",
    },
    {
      id: "private-group-tour",
      iconName: "Users",
      title: "Private and Group Tour",
      description: "Specialized arrangements for exclusive private family getaways & large group tours.",
      badge: "Private & Groups",
    },
  ] as TourismServiceItem[],
};
