export interface HeroSlide {
  id: string;
  name: string;
  subtitle: string;
  location: string;
  country: string;
  description: string;
  imageUrl: string;
  thumbnailUrl: string;
  rating: number;
  duration?: string;
  price?: string;
}

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "kerala",
    name: "KERALA",
    subtitle: "God's Own Country",
    location: "Munnar & Alleppey",
    country: "India",
    description:
      "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals, and the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as national parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers.",
    imageUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2400&q=90",
    thumbnailUrl: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    duration: "6 Days / 5 Nights",
    price: "$850",
  },
  {
    id: "indonesia",
    name: "INDONESIA",
    subtitle: "Mystical Volcanic Calderas",
    location: "Mount Bromo & Batur",
    country: "Indonesia",
    description:
      "Indonesia is an archipelago of over 17,000 volcanic islands known for emerald volcanic ridges, misty caldera sunrises, ancient spiritual sanctuaries, and vibrant indigenous culture. Stand above celestial morning clouds as the active craters of Bromo glow in the dawn light.",
    imageUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=2400&q=90",
    thumbnailUrl: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    duration: "8 Days / 7 Nights",
    price: "$1,250",
  },
  {
    id: "thailand",
    name: "BUDDHA TEMPLE",
    subtitle: "Sacred Gilded Architecture",
    location: "Buddha temple, Thailand",
    country: "Thailand",
    description:
      "Thailand's spiritual sanctuaries are adorned with magnificent gilded spires, ornate mirrored mosaics, and meditative waters reflecting centuries of Buddhist devotion. Journey through sacred golden halls and mist-shrouded temple complexes across the kingdom.",
    imageUrl: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=2400&q=90",
    thumbnailUrl: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    duration: "7 Days / 6 Nights",
    price: "$980",
  },
  {
    id: "broken-beach",
    name: "BROKEN BEACH",
    subtitle: "Dramatic Coastal Wonders",
    location: "Broken Beach, Bali",
    country: "Indonesia",
    description:
      "Perched on the rugged shores of Nusa Penida, Broken Beach features a dramatic natural stone bridge arching over a circular turquoise ocean cove. Watch powerful Indian Ocean tides swirl into the lagoon below while manta rays glide through clear waters.",
    imageUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2400&q=90",
    thumbnailUrl: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    duration: "5 Days / 4 Nights",
    price: "$790",
  },
  {
    id: "swiss-alps",
    name: "SWISS ALPS",
    subtitle: "Majestic Alpine Summits",
    location: "Zermatt & Matterhorn",
    country: "Switzerland",
    description:
      "The Swiss Alps offer pristine glacier landscapes, luxury alpine chalets, and iconic razor-sharp peaks reaching into crystal blue skies. Board the world-famous Glacier Express train and marvel at snow-capped valleys untouched by time.",
    imageUrl: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=2400&q=90",
    thumbnailUrl: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    duration: "9 Days / 8 Nights",
    price: "$2,400",
  },
  {
    id: "kedarnath",
    name: "KEDARNATH",
    subtitle: "Sacred Himalayan Yatra",
    location: "Rudraprayag, Uttarakhand",
    country: "India",
    description:
      "Perched at an elevation of 3,583 meters near the Mandakini river, Kedarnath stands resolute against dramatic snow-clad Himalayan peaks. It is revered as one of the twelve Jyotirlingas, surrounded by spirituality, swirling mists, and eternal serenity.",
    imageUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2400&q=90",
    thumbnailUrl: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    duration: "6 Days / 5 Nights",
    price: "$650",
  },
  {
    id: "rajasthan",
    name: "RAJASTHAN",
    subtitle: "Royal Heritage & Palaces",
    location: "Udaipur & Jaisalmer",
    country: "India",
    description:
      "Step into the land of maharajas, where gleaming marble palaces float upon serene lakes and golden sandstone forts stand sentinel over the Thar desert dunes. Experience royal hospitality, vibrant folk culture, and timeless historic opulence.",
    imageUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=2400&q=90",
    thumbnailUrl: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    duration: "7 Days / 6 Nights",
    price: "$920",
  },
  {
    id: "mount-fuji",
    name: "MOUNT FUJI",
    subtitle: "Iconic Sacred Summit",
    location: "Lake Kawaguchiko",
    country: "Japan",
    description:
      "Japan's sacred Mount Fuji rises symmetrically above tranquil reflection lakes, framed by delicate spring cherry blossoms and autumn maples. Discover peaceful hot-spring ryokans, ancient shinto shrines, and peerless serenity.",
    imageUrl: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=2400&q=90",
    thumbnailUrl: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    duration: "8 Days / 7 Nights",
    price: "$1,890",
  },
  {
    id: "amalfi-coast",
    name: "AMALFI COAST",
    subtitle: "Pastel Mediterranean Romance",
    location: "Positano & Ravello",
    country: "Italy",
    description:
      "Cascading colorful villas cling precariously to sheer vertical cliffs above the azure Tyrrhenian Sea. Stroll along fragrant lemon groves, sip limoncello on sun-drenched sea terraces, and immerse yourself in classic Italian dolce vita.",
    imageUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=2400&q=90",
    thumbnailUrl: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    duration: "7 Days / 6 Nights",
    price: "$2,100",
  },
  {
    id: "santorini",
    name: "SANTORINI",
    subtitle: "Cobalt Domes & Caldera Sunsets",
    location: "Oia & Fira",
    country: "Greece",
    description:
      "World-renowned for its gleaming whitewashed architecture, iconic blue-domed churches, and world-class caldera sunsets. Santorini captivates travelers with romantic cliffside infinity pools, volcanic vineyards, and Aegean breezes.",
    imageUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=2400&q=90",
    thumbnailUrl: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
    rating: 5,
    duration: "6 Days / 5 Nights",
    price: "$1,750",
  },
];
