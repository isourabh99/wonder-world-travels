import { NavItem } from "@/types/navigation";

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    hasMegaMenu: false,
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    hasMegaMenu: true,
    megaMenu: {
      columns: [
        {
          title: "About Wonder World",
          items: [
            { label: "About Us", href: "/about/us", description: "Discover our vision & luxury travel philosophy" },
            { label: "Contact Us", href: "/contact", description: "Get in touch with our travel specialists" },
            { label: "Our Reviews", href: "/about/reviews", badge: "4.9 ★", description: "Read verified guest experiences & ratings" },
          ],
        },
      ],
      promoCard: {
        title: "Crafting Extraordinary Trips",
        subtitle: "Over 12 years of luxury travel excellence across India & abroad",
        badge: "Certified Agency",
        imageUrl: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
        href: "/about/us",
        ctaText: "Learn More About Us",
      },
    },
  },
  {
    id: "india-tours",
    label: "India Tours",
    href: "/indian-tours",
    hasMegaMenu: true,
    megaMenu: {
      columns: [
        {
          title: "Regional Packages",
          items: [
            { label: "North East India Tour Packages", href: "/tours/north-east-india", badge: "Trending", description: "Assam, Meghalaya, Sikkim & Arunachal" },
            { label: "West India Packages", href: "/tours/west-india", description: "Rajasthan, Gujarat & Goa coastal trails" },
            { label: "South India Packages", href: "/tours/south-india", description: "Kerala backwaters, Tamil temples & Coorg" },
            { label: "North India Packages", href: "/tours/north-india", badge: "Popular", description: "Kashmir, Himachal, Golden Triangle & Ladakh" },
          ],
        },
        {
          title: "Specialized Themes",
          items: [
            { label: "Family Tour Packages", href: "/tours/family-packages", description: "Curated experiences for all age groups" },
            { label: "Honeymoon Packages", href: "/tours/honeymoon-packages", badge: "Bestseller", description: "Romantic stays, candlelit dinners & private tours" },
          ],
        },
      ],
      promoCard: {
        title: "Royal North India Circuit",
        subtitle: "Golden Triangle & Kashmir Luxury Tour",
        badge: "Special Offer",
        priceStart: "₹24,999",
        imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
        href: "/tours/north-india",
        ctaText: "Explore Packages",
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
          title: "Special Interest",
          items: [
            { label: "Family Tour Packages", href: "/tours/international-family", description: "Kid-friendly fun & hassle-free itineraries" },
            { label: "Honeymoon Packages", href: "/tours/international-honeymoon", badge: "Popular", description: "Secluded beach resorts & romantic getaways" },
            { label: "Europe Tour Packages", href: "/tours/europe", badge: "Hot", description: "Swiss Alps, Paris, Italy & Eastern Europe" },
          ],
        },
        {
          title: "Asia & Island Destinations",
          items: [
            { label: "Thailand Tour Packages", href: "/tours/thailand", badge: "Bestseller" },
            { label: "Dubai Tour Packages", href: "/tours/dubai", badge: "Trending" },
            { label: "Bali Tour Packages", href: "/tours/bali", badge: "Hot" },
            { label: "Vietnam Tour Packages", href: "/tours/vietnam" },
            { label: "Bhutan Tour Packages", href: "/tours/bhutan" },
          ],
        },
        {
          title: "Global Hotspots",
          items: [
            { label: "Singapore Tour Packages", href: "/tours/singapore" },
            { label: "Malaysia Tour Packages", href: "/tours/malaysia" },
            { label: "Sri Lanka Tour Packages", href: "/tours/sri-lanka" },
            { label: "Nepal Tour Packages", href: "/tours/nepal" },
            { label: "Mauritius Tour Packages", href: "/tours/mauritius" },
          ],
        },
      ],
      promoCard: {
        title: "Exotic Bali & Dubai Escapes",
        subtitle: "All-inclusive luxury flights, hotels & transfers",
        badge: "Limited Slots",
        priceStart: "₹45,000",
        imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
        href: "/tours/bali",
        ctaText: "View Packages",
      },
    },
  },
  {
    id: "pilgrimage",
    label: "Pilgrimage",
    href: "/pilgrimage",
    hasMegaMenu: true,
    megaMenu: {
      columns: [
        {
          title: "Sacred Yatra 2026",
          items: [
            { label: "Amarnath Yatra Packages 2026", href: "/pilgrimage/amarnath-yatra-2026", badge: "Booking Open", description: "Helicopter & trekking passes with medical assistance" },
            { label: "Vaishno Devi Yatra 2026", href: "/pilgrimage/vaishnodevi-yatra-2026", description: "Jammu transfers, battery car & VIP darshan" },
            { label: "Kailash Mansarovar Yatra 2026", href: "/pilgrimage/kailash-mansarovar-2026", badge: "VIP Yatra", description: "Divine pilgrimage with complete guide & permits" },
            { label: "Char Dham Yatra Packages 2026", href: "/pilgrimage/char-dham-yatra-2026", badge: "Bestseller", description: "Helicopter & road packages for Kedarnath, Badrinath, Yamunotri, Gangotri" },
          ],
        },
      ],
      promoCard: {
        title: "Char Dham Divine Yatra 2026",
        subtitle: "Special early bird packages for senior citizens & families",
        badge: "Bookings Open",
        priceStart: "₹28,500",
        imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
        href: "/pilgrimage/char-dham-yatra-2026",
        ctaText: "Reserve Yatra",
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
          title: "Exclusive Discounted Packages",
          items: [
            { label: "Bali Holidays - 4 Nights", href: "/offers/bali-holidays-4-nights", badge: "Save 30%" },
            { label: "Bhutan Ex-Paro", href: "/offers/bhutan-ex-paro" },
            { label: "Phuket-Krabi", href: "/offers/phuket-krabi", badge: "Hot Deal" },
            { label: "Sri Lanka-5 Days Holiday", href: "/offers/sri-lanka-5-days-holiday" },
          ],
        },
        {
          title: "Trending Specials",
          items: [
            { label: "Dubai Honeymoon Tour", href: "/offers/dubai-honeymoon-tour", badge: "Special" },
            { label: "Kashmir Special", href: "/offers/kashmir-special", badge: "Top Seller" },
            { label: "Shimla-Manali Tour Packages", href: "/offers/shimla-manali-tour-packages" },
            { label: "Bhutan Ex-Bagdogra", href: "/offers/bhutan-ex-bagdogra" },
          ],
        },
      ],
      promoCard: {
        title: "Flash Offer: Kashmir Special",
        subtitle: "5 Days houseboat stay, Shikara ride & Gulmarg snow tour",
        badge: "Deal of the Month",
        priceStart: "₹14,999",
        imageUrl: "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80",
        href: "/offers/kashmir-special",
        ctaText: "Grab Offer",
      },
    },
  },
];
