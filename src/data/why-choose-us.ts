export interface WhyChooseUsItem {
  id: string;
  iconName: "ShieldCheck" | "Headphones" | "Compass" | "Sparkles";
  title: string;
  description: string;
  badge: string;
}

export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
  {
    id: "support",
    iconName: "Headphones",
    title: "24/7 Dedicated Concierge",
    description:
      "A designated trip manager handles everything from touchdown to takeoff. We are always just a call or WhatsApp message away.",
    badge: "Always Available",
  },
  {
    id: "price",
    iconName: "ShieldCheck",
    title: "Best Value Guarantee",
    description:
      "Direct hotel contracts and local logistics ensure unmatched pricing without hidden fees or surprise surcharges.",
    badge: "Transparent Pricing",
  },
  {
    id: "curation",
    iconName: "Compass",
    title: "Handcrafted Itineraries",
    description:
      "Every itinerary is custom designed by local destination specialists to balance iconic landmarks with authentic hidden gems.",
    badge: "Bespoke Design",
  },
  {
    id: "guides",
    iconName: "Sparkles",
    title: "Certified Native Guides",
    description:
      "Explore with accredited historians, naturalists, and cultural experts who turn ordinary tours into lifelong memories.",
    badge: "Top 1% Experts",
  },
];
