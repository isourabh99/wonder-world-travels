export interface TourCategoryOverview {
  title: string;
  url: string;
  description: string;
  iconName: "MapPin" | "Globe" | "Sparkles" | "Heart" | "Users" | "Trees" | "Sun" | "Compass" | "Mountain";
}

export interface DetailedTourItem {
  id: string;
  title: string;
  url: string;
  categories?: { name: string; url: string }[];
  description?: string;
  duration: string;
  location: string;
  imageUrl: string;
  rating?: number;
  reviewsCount?: number;
  price?: string;
}

export interface TourSectionData {
  eyebrow: string;
  title: string;
  tours: DetailedTourItem[];
}

export const TOUR_CATEGORY_OVERVIEWS: TourCategoryOverview[] = [
  {
    title: "Explore India Tours",
    url: "https://www.wonderworldtravels.com/india-tour-packages/",
    description: "Discover India’s top destinations with affordable and memorable tour packages for every traveler.",
    iconName: "MapPin",
  },
  {
    title: "Explore World Tours",
    url: "https://www.wonderworldtravels.com/international-tour-packages/",
    description: "Enjoy amazing international holidays with curated travel packages across the world's finest destinations.",
    iconName: "Globe",
  },
  {
    title: "Explore Sacred Tours",
    url: "https://www.wonderworldtravels.com/pilgrimage-tour-packages/",
    description: "Visit divine spiritual destinations with peaceful pilgrimage tour packages across India.",
    iconName: "Sparkles",
  },
  {
    title: "Explore Romantic Tours",
    url: "https://www.wonderworldtravels.com/india-tour-packages/honeymoon-tour-packages/",
    description: "Create beautiful memories with romantic honeymoon tour packages designed for couples.",
    iconName: "Heart",
  },
  {
    title: "Explore Family Tours",
    url: "https://www.wonderworldtravels.com/india-tour-packages/family-tour/",
    description: "Plan joyful family vacations with comfortable and fun-filled tour packages for all ages.",
    iconName: "Users",
  },
  {
    title: "Explore Nature Tours",
    url: "https://www.wonderworldtravels.com/india-tour-packages/north-east-india-tour-packages/",
    description: "Experience the beauty of North East India with scenic landscapes and nature-filled journeys.",
    iconName: "Trees",
  },
  {
    title: "Explore West India Tour",
    url: "https://www.wonderworldtravels.com/india-tour-packages/west-india-tour-packages/",
    description: "Discover vibrant culture and stunning landscapes with West India tour packages.",
    iconName: "Sun",
  },
  {
    title: "Explore North India Tour",
    url: "https://www.wonderworldtravels.com/india-tour-packages/north-india-tour-packages/",
    description: "Experience North India's majestic beauty with our tailored North India tour packages.",
    iconName: "Mountain",
  },
  {
    title: "Explore South Tours",
    url: "https://www.wonderworldtravels.com/india-tour-packages/south-india-tour-packages/",
    description: "Discover South India’s beautiful temples, beaches, hills, and culture with curated tour packages.",
    iconName: "Compass",
  },
];

export const INDIAN_TOURS_SECTION: TourSectionData = {
  eyebrow: "Experience India's Beauty with Tailored Journeys for Every Traveler",
  title: "Our Top Handcrafted Indian Tour Packages",
  tours: [
    {
      id: "simply-kashmir",
      title: "Simply Kashmir 05 Days Package with Itinerary",
      url: "https://www.wonderworldtravels.com/simply-kashmir-tour-package-05-days/",
      categories: [
        { name: "Adventure", url: "https://www.wonderworldtravels.com/tour_category/adventure/" },
        { name: "Budget Travels", url: "https://www.wonderworldtravels.com/tour_category/budget-travels/" },
        { name: "Family Holidays", url: "https://www.wonderworldtravels.com/tour_category/family-holidays/" },
        { name: "Faraway Travels", url: "https://www.wonderworldtravels.com/tour_category/faraway-travels/" },
        { name: "Honeymoon and Romancing", url: "https://www.wonderworldtravels.com/tour_category/honeymoon-and-romancing/" },
        { name: "Kashmir", url: "https://www.wonderworldtravels.com/tour_category/kashmir/" },
        { name: "Weekend", url: "https://www.wonderworldtravels.com/tour_category/weekend/" },
      ],
      description: "“We live in a beautiful world that is full of beauty, charm, and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.” ― Jawaharlal Nehru",
      duration: "5 Days",
      location: "Kashmir",
      rating: 5.0,
      reviewsCount: 6,
      imageUrl: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "golden-triangle-5days",
      title: "5 Days Golden Triangle Tour",
      url: "https://www.wonderworldtravels.com/delhi-agra-jaipur/",
      categories: [
        { name: "Adventure", url: "https://www.wonderworldtravels.com/tour_category/adventure/" },
      ],
      description: "Travel doesn't become adventure until you leave yourself behind - Marty Ruby",
      duration: "5 Days",
      location: "Golden Triangle Tour",
      rating: 4.9,
      reviewsCount: 12,
      imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "kerala-5days",
      title: "5 days Kerala tour package",
      url: "https://www.wonderworldtravels.com/india-tour-packages/5-days-kerala-tour-package/",
      categories: [
        { name: "Adventure", url: "https://www.wonderworldtravels.com/tour_category/adventure/" },
        { name: "Backpacking", url: "https://www.wonderworldtravels.com/tour_category/backpacking/" },
      ],
      description: "Explore lush tea hills of Munnar, tranquil backwater houseboats, and scenic tropical beaches of Kerala.",
      duration: "5 Days",
      location: "Kerala",
      rating: 4.95,
      reviewsCount: 18,
      imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "goa-4days",
      title: "Goa Package for 3 Night 4 Days",
      url: "https://www.wonderworldtravels.com/india-tour-packages/goa-package-for-3-night-4-days/",
      categories: [
        { name: "Adventure", url: "https://www.wonderworldtravels.com/tour_category/adventure/" },
        { name: "Weekend", url: "https://www.wonderworldtravels.com/tour_category/weekend/" },
      ],
      description: "Stay in a cozy hotel, explore North & South Goa’s top attractions, enjoy a Mandovi River cruise, and relax on stunning beaches.",
      duration: "4 Days",
      location: "Goa",
      rating: 4.88,
      reviewsCount: 15,
      imageUrl: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const INTERNATIONAL_TOURS_SECTION: TourSectionData = {
  eyebrow: "Explore the World with Customized Journeys to Iconic Global Destinations",
  title: "Our Handpicked International Tour Packages",
  tours: [
    {
      id: "europe-12days",
      title: "Europe Tour Package for 12 Days",
      url: "https://www.wonderworldtravels.com/europe-package/",
      categories: [
        { name: "Adventure", url: "https://www.wonderworldtravels.com/tour_category/adventure/" },
        { name: "Backpacking", url: "https://www.wonderworldtravels.com/tour_category/backpacking/" },
        { name: "Cruises", url: "https://www.wonderworldtravels.com/tour_category/cruises/" },
        { name: "Family Holidays", url: "https://www.wonderworldtravels.com/tour_category/family-holidays/" },
        { name: "Faraway Travels", url: "https://www.wonderworldtravels.com/tour_category/faraway-travels/" },
        { name: "Honeymoon and Romancing", url: "https://www.wonderworldtravels.com/tour_category/honeymoon-and-romancing/" },
      ],
      description: "“In America, there’s a failure to appreciate Europe’s leading role in the world.” -Barack Obama",
      duration: "12 Days",
      location: "Europe",
      rating: 4.96,
      reviewsCount: 24,
      imageUrl: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "dubai-5days",
      title: "Dubai Packages 4 Nights 5 Days",
      url: "https://www.wonderworldtravels.com/dubai-package/",
      categories: [
        { name: "Adventure", url: "https://www.wonderworldtravels.com/tour_category/adventure/" },
      ],
      description: "Experience Dubai’s iconic sites: Marina Cruise, city tour, desert safari, Abu Dhabi's Ferrari World, and Burj Khalifa views. A perfect blend of adventure and luxury.",
      duration: "5 Days",
      location: "Dubai",
      rating: 4.92,
      reviewsCount: 22,
      imageUrl: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "thailand-6days",
      title: "Thailand Tour Package 06 Days from India",
      url: "https://www.wonderworldtravels.com/thailand-package/",
      categories: [
        { name: "Adventure", url: "https://www.wonderworldtravels.com/tour_category/adventure/" },
        { name: "Backpacking", url: "https://www.wonderworldtravels.com/tour_category/backpacking/" },
        { name: "Budget Travels", url: "https://www.wonderworldtravels.com/tour_category/budget-travels/" },
        { name: "Family Holidays", url: "https://www.wonderworldtravels.com/tour_category/family-holidays/" },
        { name: "Faraway Travels", url: "https://www.wonderworldtravels.com/tour_category/faraway-travels/" },
        { name: "Honeymoon and Romancing", url: "https://www.wonderworldtravels.com/tour_category/honeymoon-and-romancing/" },
        { name: "New Year", url: "https://www.wonderworldtravels.com/tour_category/new-year/" },
      ],
      description: "To travel is to discover that everyone is wrong about other countries.",
      duration: "6 Days",
      location: "Thailand",
      rating: 4.89,
      reviewsCount: 19,
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

export const PILGRIMAGE_TOURS_SECTION: TourSectionData = {
  eyebrow: "Discover divine destinations with our exclusive pilgrimage packages.",
  title: "Our Special Pilgrimage Tour Packages",
  tours: [
    {
      id: "chardham-haridwar-9days",
      title: "Char Dham Yatra Package From Haridwar",
      url: "https://www.wonderworldtravels.com/india-tour-packages/char-dham-yatra-package-from-haridwar/",
      description: "Embark on a divine 9-day Char Dham Yatra from Haridwar, covering Yamunotri, Gangotri, Kedarnath, and Badrinath. Enjoy scenic drives, sacred temples, and spiritual bliss on this unforgettable pilgrimage.",
      duration: "09 Days",
      location: "Char Dham",
      rating: 4.98,
      reviewsCount: 35,
      imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "kailash-mansarovar-11days",
      title: "Kailash Mansarovar Yatra from Kathmandu",
      url: "https://www.wonderworldtravels.com/kailash-mansarovar/",
      categories: [
        { name: "Adventure", url: "https://www.wonderworldtravels.com/tour_category/adventure/" },
        { name: "Backpacking", url: "https://www.wonderworldtravels.com/tour_category/backpacking/" },
        { name: "Budget Travels", url: "https://www.wonderworldtravels.com/tour_category/budget-travels/" },
        { name: "Holy Tour", url: "https://www.wonderworldtravels.com/tour_category/holy-tour/" },
        { name: "Pilgrimage", url: "https://www.wonderworldtravels.com/tour_category/pilgrimage/" },
      ],
      description: "Sacred trek to Mount Kailash and Lake Mansarovar with complete medical, permit, and Sherpa support.",
      duration: "11 Days",
      location: "Kailash Mansarovar Yatra",
      rating: 5.0,
      reviewsCount: 42,
      imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "amarnath-4days",
      title: "Amarnath Yatra 2026 - 04 Days (Next Day Return)",
      url: "https://www.wonderworldtravels.com/amarnath-yatra/",
      categories: [
        { name: "Adventure", url: "https://www.wonderworldtravels.com/tour_category/adventure/" },
        { name: "Amarnath Yatra Tour", url: "https://www.wonderworldtravels.com/tour_category/amarnath-yatra-tour/" },
        { name: "Backpacking", url: "https://www.wonderworldtravels.com/tour_category/backpacking/" },
        { name: "Budget Travels", url: "https://www.wonderworldtravels.com/tour_category/budget-travels/" },
        { name: "Family Holidays", url: "https://www.wonderworldtravels.com/tour_category/family-holidays/" },
        { name: "Holy Tour", url: "https://www.wonderworldtravels.com/tour_category/holy-tour/" },
        { name: "Pilgrimage", url: "https://www.wonderworldtravels.com/tour_category/pilgrimage/" },
      ],
      description: "Priority helicopter tickets and VIP Darshan pass for holy Amarnath Cave Shivling.",
      duration: "4 Days",
      location: "Amarnath Yatra",
      rating: 4.97,
      reviewsCount: 6,
      imageUrl: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "vaishno-devi-helicopter-3days",
      title: "Vaishno Devi Package 2 nights 3 days by Helicopter",
      url: "https://www.wonderworldtravels.com/vaishno-devi-by-helicopter-2n-3d/",
      categories: [
        { name: "Adventure", url: "https://www.wonderworldtravels.com/tour_category/adventure/" },
        { name: "Backpacking", url: "https://www.wonderworldtravels.com/tour_category/backpacking/" },
        { name: "Budget Travels", url: "https://www.wonderworldtravels.com/tour_category/budget-travels/" },
        { name: "Family Holidays", url: "https://www.wonderworldtravels.com/tour_category/family-holidays/" },
        { name: "Vaishno Devi Darshan", url: "https://www.wonderworldtravels.com/tour_category/vaishno-devi-darshan/" },
        { name: "Weekend", url: "https://www.wonderworldtravels.com/tour_category/weekend/" },
      ],
      description: "“Mata Rani’s grace is not a destination, but a journey towards self-realization.”",
      duration: "3 Days",
      location: "Vaishno Devi Darshan",
      rating: 4.96,
      reviewsCount: 6,
      imageUrl: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "adi-kailash-10days",
      title: "Adi Kailash Yatra from Delhi",
      url: "https://www.wonderworldtravels.com/india-tour-packages/adi-kailash-yatra-from-delhi/",
      description: "Embark on a 10-day Adi Kailash & Om Parvat Yatra, exploring sacred Himalayan sites, ancient temples, and breathtaking landscapes. Enjoy guided travel, comfortable stays, and spiritual experiences.",
      duration: "10 Days",
      location: "Adi Kailash",
      rating: 4.94,
      reviewsCount: 28,
      imageUrl: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
    },
  ],
};
