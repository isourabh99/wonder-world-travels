export interface WhyChooseUsItem {
  id: string;
  iconName: "Award" | "Users" | "Sparkles" | "Globe" | "Building" | "FileCheck";
  title: string;
  description: string;
  badge: string;
  highlightStat?: string;
}

export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
  {
    id: "iata-certification",
    iconName: "Award",
    title: "IATA TIDS Certification!",
    description:
      "Wonder World Travels is IATA TIDS certified, ensuring trusted global travel services with verified code and smooth booking experience for all customers.",
    badge: "Verified Global Code",
    highlightStat: "IATA TIDS Certified",
  },
  {
    id: "50k-customers",
    iconName: "Users",
    title: "50k Customers!",
    description:
      "We have successfully served over 50,000 happy customers, delivering memorable travel experiences with trust, quality service, and complete customer satisfaction always.",
    badge: "Trusted Choice",
    highlightStat: "50,000+ Happy Guests",
  },
  {
    id: "15-years-experience",
    iconName: "Sparkles",
    title: "15 Years+ Experience !",
    description:
      "Backed by more than 15 years of experience, we provide expert travel planning, smooth bookings, and reliable support for every journey with wonder world travels",
    badge: "Industry Pioneer",
    highlightStat: "15+ Years Excellence",
  },
  {
    id: "globally-operate",
    iconName: "Globe",
    title: "Globally Operate!",
    description:
      "We operate globally, offering customized travel solutions across countries to make your journeys easy, comfortable, and perfectly suited to your needs.",
    badge: "Worldwide Reach",
    highlightStat: "International Tours",
  },
  {
    id: "own-office",
    iconName: "Building",
    title: "Our own Office",
    description:
      "We have a dedicated office at 23/21E, East Patel Nagar, N.D – 110008 ensuring direct communication, quick support, and a smooth hassle-free travel planning experience.",
    badge: "Direct Consultation",
    highlightStat: "23/21E East Patel Nagar HQ",
  },
  {
    id: "gst-registered",
    iconName: "FileCheck",
    title: "GST Registered!",
    description:
      "We are a GST registered travel company ensuring transparency, trust, and compliance in every transaction with complete billing safety for customers.",
    badge: "100% Tax Compliant",
    highlightStat: "Transparent Billing",
  },
];
