import { NavItem } from "@/types/navigation";

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    hasMegaMenu: false,
  },
  {
    id: "about-us",
    label: "About Us",
    href: "/about",
    hasMegaMenu: true,
    megaMenu: {
      columns: [
        {
          title: "Our Story & Vision",
          items: [
            { label: "Our Story & Philosophy", href: "/about/story", description: "Crafting memorable luxury journeys since 2012" },
            { label: "Meet the Founders & Team", href: "/about/team", description: "Travel passionates and seasoned destination experts" },
            { label: "Awards & Recognitions", href: "/about/awards", badge: "Top Agency", description: "National Tourism Excellence Winner" },
            { label: "Responsible & Green Tourism", href: "/about/sustainability", description: "Leaving zero trace and supporting local artisans" },
          ],
        },
        {
          title: "Why Wonder World",
          items: [
            { label: "100% Custom Tailored Trips", href: "/about/bespoke", description: "Your schedule, your preferences, your pace" },
            { label: "24/7 Concierge & Support", href: "/about/support", description: "Never alone with our 24/7 dedicated trip manager" },
            { label: "Government Approved Licensure", href: "/about/credentials", description: "IATA, Ministry of Tourism & ATOAI accredited" },
            { label: "Verified Traveler Stories", href: "/about/reviews", description: "Over 45,000+ happy travelers across the globe" },
          ],
        },
        {
          title: "Guest Services",
          items: [
            { label: "Luxury Chauffeur Services", href: "/about/chauffeur", description: "Premium fleet of Mercedes & SUVs" },
            { label: "Private Jet & Helicopter Charters", href: "/about/charters", badge: "VIP", description: "Point-to-point bespoke aerial transfers" },
            { label: "Travel Insurance & Safety", href: "/about/safety", description: "Comprehensive coverage and assistance" },
            { label: "Corporate & MICE Events", href: "/about/corporate", description: "Executive retreats and grand events" },
          ],
        },
      ],
      promoCard: {
        title: "Speak with a Senior Specialist",
        subtitle: "Get free personalized itinerary planning & estimate",
        badge: "Complimentary",
        imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
        href: "/contact",
        ctaText: "Request Call Back",
      },
    },
  },
  {
    id: "indian-tours",
    label: "Indian Tours",
    href: "/indian-tours",
    hasMegaMenu: true,
    megaMenu: {
      columns: [
        {
          title: "By Region",
          items: [
            { label: "North India Wonders", href: "/indian-tours/north-india", badge: "Popular", description: "Himalayas, Taj Mahal & Golden Triangle" },
            { label: "Royal South India", href: "/indian-tours/south-india", description: "Backwaters, Temples & Spice Gardens" },
            { label: "Vibrant Western India", href: "/indian-tours/west-india", description: "Desert Safaris & Coastal Forts" },
            { label: "Mystic Northeast", href: "/indian-tours/northeast", badge: "Trending", description: "Tea Estates, Living Root Bridges & Valleys" },
            { label: "Central Heritage Heart", href: "/indian-tours/central-india", description: "Khajuraho & National Tiger Reserves" },
          ],
        },
        {
          title: "Popular States",
          items: [
            { label: "Rajasthan Royal Circuits", href: "/indian-tours/rajasthan", badge: "Bestseller", description: "Jaipur, Udaipur, Jodhpur & Jaisalmer" },
            { label: "Kerala God's Own Country", href: "/indian-tours/kerala", description: "Munnar, Alleppey Houseboats & Kochi" },
            { label: "Himachal & Ladakh Valleys", href: "/indian-tours/himachal", description: "Shimla, Manali, Spiti & Pangong Lake" },
            { label: "Goa Luxury Retreats", href: "/indian-tours/goa", description: "Bespoke Beach Resorts & Heritage Villas" },
            { label: "Kashmir Paradise Trails", href: "/indian-tours/kashmir", badge: "Hot", description: "Srinagar Shikara, Gulmarg & Pahalgam" },
          ],
        },
        {
          title: "Curated Tour Types",
          items: [
            { label: "Regal Palace & Heritage", href: "/indian-tours/heritage", description: "Live like royalty in restored Havelis" },
            { label: "Wildlife & Safari Expeditions", href: "/indian-tours/wildlife", description: "Ranthambore, Jim Corbett & Kaziranga" },
            { label: "Ayurveda & Wellness Retreats", href: "/indian-tours/wellness", description: "Ananda in the Himalayas & Kerala retreats" },
            { label: "Honeymoon & Romantic Escapes", href: "/indian-tours/honeymoon", description: "Candlelight houseboats & mountain chalets" },
            { label: "Adventure & High Altitude Treks", href: "/indian-tours/adventure", description: "River rafting, paragliding & pass crossing" },
          ],
        },
      ],
      promoCard: {
        title: "Royal Rajasthan Splendor",
        subtitle: "8 Days / 7 Nights Luxury Maharajah Circuit",
        badge: "Special 20% Off",
        priceStart: "₹48,999",
        imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
        href: "/tours/royal-rajasthan",
        ctaText: "Explore Package",
      },
    },
  },
  {
    id: "international-tours",
    label: "International Tours",
    href: "/international-tours",
    hasMegaMenu: true,
    megaMenu: {
      columns: [
        {
          title: "Top Continents & Hubs",
          items: [
            { label: "Classic Europe Grandeur", href: "/international-tours/europe", badge: "Trending", description: "Swiss Alps, Paris, Rome & Amalfi Coast" },
            { label: "Dubai & Emirates Luxury", href: "/international-tours/dubai", badge: "Popular", description: "Burj Khalifa, Desert Caravans & Abu Dhabi" },
            { label: "Southeast Asia Tropicals", href: "/international-tours/southeast-asia", description: "Thailand, Bali, Singapore & Vietnam" },
            { label: "Island Paradises", href: "/international-tours/islands", description: "Maldives, Mauritius, Seychelles & Bora Bora" },
            { label: "Far East Horizons", href: "/international-tours/far-east", description: "Japan Cherry Blossom & South Korea" },
          ],
        },
        {
          title: "Trending Destinations",
          items: [
            { label: "Switzerland & French Riviera", href: "/international-tours/switzerland", description: "Scenic Glacier Express & Lake Geneva" },
            { label: "Bali Exotic Villas & Uluwatu", href: "/international-tours/bali", badge: "Hot", description: "Private pool villas, temples & beach clubs" },
            { label: "Singapore & Sentosa Escapes", href: "/international-tours/singapore", description: "Gardens by the Bay & Universal Studios" },
            { label: "Vietnam & Ha Long Bay", href: "/international-tours/vietnam", description: "Luxury junks, lantern town Hoi An & Hanoi" },
            { label: "Turkey: Istanbul & Cappadocia", href: "/international-tours/turkey", description: "Hot air ballooning & Bosphorus yachting" },
          ],
        },
        {
          title: "Travel Styles",
          items: [
            { label: "Ultra-Luxury Island Resorts", href: "/international-tours/resorts", description: "Overwater bungalows & private island butlers" },
            { label: "Ocean & River Cruises", href: "/international-tours/cruises", description: "Mediterranean, Danube & Caribbean voyages" },
            { label: "Bespoke Family Vacations", href: "/international-tours/family", description: "Kid-friendly luxury itineraries worldwide" },
            { label: "Private Guided Expeditions", href: "/international-tours/private", description: "VIP chauffeured tours with native historians" },
            { label: "International Visa Assistance", href: "/services/visa", description: "Dedicated hassle-free visa processing" },
          ],
        },
      ],
      promoCard: {
        title: "Iconic Switzerland & Paris",
        subtitle: "7 Days across Alps, Lucerne & Eiffel Tower",
        badge: "Early Bird Deal",
        priceStart: "$1,850",
        imageUrl: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
        href: "/tours/switzerland-paris",
        ctaText: "Discover Itinerary",
      },
    },
  },
  {
    id: "pilgrimage-tours",
    label: "Pilgrimage Tours",
    href: "/pilgrimage-tours",
    hasMegaMenu: true,
    megaMenu: {
      columns: [
        {
          title: "Sacred Himalayan Yatra",
          items: [
            { label: "Char Dham Yatra by Helicopter", href: "/pilgrimage-tours/char-dham-heli", badge: "VIP Access", description: "Yamunotri, Gangotri, Kedarnath & Badrinath" },
            { label: "Kedarnath & Badrinath Divine", href: "/pilgrimage-tours/do-dham", description: "VIP priority darshan & luxury mountain stays" },
            { label: "Amarnath Holy Cave Yatra", href: "/pilgrimage-tours/amarnath", description: "Helicopter transfers from Baltal & Pahalgam" },
            { label: "Vaishno Devi Bhawan Yatra", href: "/pilgrimage-tours/vaishno-devi", description: "Jammu transfers, battery car & special pass" },
          ],
        },
        {
          title: "Sanatan & Spiritual Circuits",
          items: [
            { label: "Kashi, Prayagraj & Ayodhya", href: "/pilgrimage-tours/ram-mandir", badge: "Trending", description: "Shri Ram Janmabhoomi & Ganga Aarti VIP seats" },
            { label: "12 Jyotirlinga Darshan Tours", href: "/pilgrimage-tours/jyotirlinga", description: "Somnath, Mahakaleshwar, Omkareshwar & Kashi" },
            { label: "Tirupati Balaji VIP Darshan", href: "/pilgrimage-tours/tirupati", description: "Sheegra Darshan passes & 5-star transit" },
            { label: "Jagannath Puri & Konark", href: "/pilgrimage-tours/puri", description: "Sacred Eastern Dham on the Bay of Bengal" },
          ],
        },
        {
          title: "All-Inclusive Features",
          items: [
            { label: "Senior Citizen Friendly Transit", href: "/pilgrimage-tours/senior-care", description: "Wheelchair assistance & dedicated attendants" },
            { label: "Pure Sattvic Catering", href: "/pilgrimage-tours/catering", description: "Freshly prepared vegetarian & satvik meals" },
            { label: "Vedic Priest Coordination", href: "/pilgrimage-tours/puja", description: "Special archana, abhishekham & havan" },
            { label: "Medical Support On-Call", href: "/pilgrimage-tours/medical", description: "Oxygen concentrators on high-altitude routes" },
          ],
        },
      ],
      promoCard: {
        title: "Char Dham Divine Yatra 2026",
        subtitle: "10 Days Premium Road & Helicopter Options",
        badge: "Bookings Open",
        priceStart: "₹54,500",
        imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
        href: "/tours/char-dham-yatra",
        ctaText: "Reserve Yatra Slot",
      },
    },
  },
  {
    id: "special-offers",
    label: "Special Offers",
    href: "/special-offers",
    hasMegaMenu: true,
    megaMenu: {
      columns: [
        {
          title: "Current Promotions",
          items: [
            { label: "Summer 2026 Early Bird", href: "/offers/early-bird", badge: "Save 25%", description: "Book 60 days ahead for premier savings" },
            { label: "Luxury Honeymoon Upgrades", href: "/offers/honeymoon", description: "Complimentary candlelight dinners & spa sessions" },
            { label: "Family Vacation Bundles", href: "/offers/family", badge: "Kids Free", description: "Free stay & meals for kids under 10" },
            { label: "Weekend Getaway Flash Deals", href: "/offers/weekend", description: "Quick 3-day escapes under 3 hours from major cities" },
          ],
        },
        {
          title: "Exclusive Perks",
          items: [
            { label: "Complimentary Airport Transfers", href: "/offers/perks", description: "Private luxury chauffeur pick-and-drop" },
            { label: "Free Travel Insurance", href: "/offers/insurance", description: "Comprehensive overseas medical & baggage cover" },
            { label: "Flexible Rescheduling Guarantee", href: "/offers/flexibility", description: "Zero cancellation fees up to 14 days before trip" },
            { label: "Loyalty Club WonderMiles", href: "/offers/rewards", description: "Earn reward points on every trip booked" },
          ],
        },
      ],
      promoCard: {
        title: "Flash Sale: Bali Royal Villas",
        subtitle: "Private pool villa + breakfast & spa included",
        badge: "Expires in 48 Hours",
        priceStart: "$699",
        imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
        href: "/offers/bali-flash-deal",
        ctaText: "Claim Exclusive Deal",
      },
    },
  },
  {
    id: "blogs",
    label: "Blogs",
    href: "/blogs",
    hasMegaMenu: false,
  },
];
