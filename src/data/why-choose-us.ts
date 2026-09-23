export interface WhyChooseUsItem {
  id: string;
  iconName: "ShieldCheck" | "Headphones" | "Compass" | "Sparkles" | "Crown" | "HeartPulse";
  title: string;
  description: string;
  badge: string;
  highlightStat?: string;
}

export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
  {
    id: "vip-access",
    iconName: "Crown",
    title: "VIP & Priority Access",
    description:
      "Skip queues with helicopter charters, fast-track VIP temple darshan passes at Kedarnath & Kashi, and private off-hours royal palace entries.",
    badge: "Exclusive Privileges",
    highlightStat: "Zero-Queue Darshan",
  },
  {
    id: "support",
    iconName: "Headphones",
    title: "24/7 Dedicated Concierge",
    description:
      "A personal trip director handles every logistical detail on WhatsApp from touchdown to takeoff, with proactive flight monitoring and table bookings.",
    badge: "Personal Care",
    highlightStat: "15-Min Response Guarantee",
  },
  {
    id: "curation",
    iconName: "Compass",
    title: "Bespoke Handcrafted Itineraries",
    description:
      "Zero rigid cookie-cutter tours. Every single journey is custom designed by native specialists around your family's pace, tastes, and comfort.",
    badge: "100% Tailored",
    highlightStat: "Personalized Daily Pace",
  },
  {
    id: "safety",
    iconName: "HeartPulse",
    title: "Medical & High-Altitude Safety",
    description:
      "Doctor-on-call network, oxygen backup, acclimatization protocols for Char Dham & Ladakh, and round-the-clock emergency medical assistance.",
    badge: "Health & Peace of Mind",
    highlightStat: "Medical Standby Support",
  },
  {
    id: "protection",
    iconName: "ShieldCheck",
    title: "100% Financial Protection",
    description:
      "Government of India Ministry of Tourism recognized and IATA accredited. Enjoy transparent pricing with no hidden fees and flexible cancellation.",
    badge: "Govt. Accredited",
    highlightStat: "Insured Bookings",
  },
  {
    id: "guides",
    iconName: "Sparkles",
    title: "Handpicked Stays & Certified Guides",
    description:
      "Stay in personally inspected 5-star palace hotels, private houseboats, and luxury tents, guided by top accredited historians and cultural storytellers.",
    badge: "Inspected in Person",
    highlightStat: "5-Star & Heritage Stays",
  },
];
