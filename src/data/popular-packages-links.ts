export interface PackageLinkItem {
  title: string;
  url: string;
  badge?: string;
}

export interface PackageCategory {
  id: string;
  categoryTitle: string;
  iconName: "MapPin" | "Globe" | "Compass" | "Heart" | "Users" | "Sparkles";
  links: PackageLinkItem[];
}

export const POPULAR_PACKAGE_CATEGORIES: PackageCategory[] = [
  {
    id: "indian-tour-packages",
    categoryTitle: "Indian Tour Packages",
    iconName: "MapPin",
    links: [
      { title: "Indian Tour Packages", url: "https://www.wonderworldtravels.com/india-tour-packages/", badge: "Main" },
      { title: "Jammu and Kashmir Tour Packages", url: "https://www.wonderworldtravels.com/jammu-kashmir-package/" },
      { title: "Andaman Tour Packages", url: "https://www.wonderworldtravels.com/andaman-packages/" },
      { title: "Goa Tour Packages", url: "https://www.wonderworldtravels.com/goa-packages/" },
      { title: "Leh Ladakh Tour Packages", url: "https://www.wonderworldtravels.com/leh-ladakh-packages/" },
      { title: "Himachal Tour Packages", url: "https://www.wonderworldtravels.com/holidays/india-tour-packages/himachal-pradesh-tour-packages/" },
      { title: "Kerala Tour Packages", url: "https://www.wonderworldtravels.com/kerala-packages/" },
    ],
  },
  {
    id: "international-tour-packages",
    categoryTitle: "International Tour Packages",
    iconName: "Globe",
    links: [
      { title: "International Tour Packages", url: "https://www.wonderworldtravels.com/international-tour-packages/", badge: "Global" },
      { title: "International Family Packages", url: "https://www.wonderworldtravels.com/international-tour-packages/family-packages/" },
      { title: "Europe Tour Packages", url: "https://www.wonderworldtravels.com/international-tour-packages/europe-tour-packages-from-india/" },
      { title: "Vietnam Tour Packages", url: "https://www.wonderworldtravels.com/vietnam-tour-packages-from-india/" },
      { title: "Sri Lanka Tour Packages", url: "https://www.wonderworldtravels.com/sri-lanka-tour-packages-from-india/" },
      { title: "Bali Tour Packages", url: "https://www.wonderworldtravels.com/bali-tour-packages-from-india/" },
      { title: "Dubai Tour Packages", url: "https://www.wonderworldtravels.com/dubai-tour-packages-from-india/" },
      { title: "Singapore Tour Packages", url: "https://www.wonderworldtravels.com/singapore-tour-packages-from-india/" },
      { title: "Thailand Tour Packages", url: "https://www.wonderworldtravels.com/thailand-tour-packages-from-india/" },
    ],
  },
  {
    id: "pilgrimage-tour-packages",
    categoryTitle: "Pilgrimage Yatra Packages",
    iconName: "Sparkles",
    links: [
      { title: "Pilgrimage Tour Packages", url: "https://www.wonderworldtravels.com/pilgrimage-tour-packages/", badge: "Sacred" },
      { title: "Amarnath Yatra Tour Package", url: "https://www.wonderworldtravels.com/amarnath-yatra-tour/" },
      { title: "Chardham Yatra Packages", url: "https://www.wonderworldtravels.com/chardham-yatra-packages/" },
      { title: "Vaishno Devi Yatra Package", url: "https://www.wonderworldtravels.com/vaishno-devi-yatra-ex-katra/" },
      { title: "Vaishno Devi Yatra By Helicopter", url: "https://www.wonderworldtravels.com/mata-vaishno-devi-amarnath-yatra-by-helicopter-next-day-return/" },
      { title: "Kailash Mansarovar Yatra Package", url: "https://www.wonderworldtravels.com/kailash-mansarovar/" },
      { title: "Vaishno Devi and Kashmir Tour Package", url: "https://www.wonderworldtravels.com/vaishno-devi-darshan-with-kashmir-package-08-day/" },
      { title: "Adi Kailash Yatra Package", url: "https://www.wonderworldtravels.com/india-tour-packages/adi-kailash-yatra-from-delhi/" },
    ],
  },
  {
    id: "india-honeymoon-packages",
    categoryTitle: "India Honeymoon Packages",
    iconName: "Heart",
    links: [
      { title: "India Honeymoon Packages", url: "https://www.wonderworldtravels.com/india-tour-packages/honeymoon-tour-packages/", badge: "Couples" },
      { title: "Manali Honeymoon Package", url: "https://www.wonderworldtravels.com/india-tour-packages/manali-honeymoon-package-from-delhi/" },
      { title: "Auli Honeymoon Package", url: "https://www.wonderworldtravels.com/india-tour-packages/auli-honeymoon-package/" },
      { title: "Kashmir Honeymoon Package", url: "https://www.wonderworldtravels.com/india-tour-packages/kashmir-package-for-couple/" },
      { title: "Kerala Honeymoon Package", url: "https://www.wonderworldtravels.com/india-tour-packages/kerala-honeymoon-tour-package-for-couple/" },
      { title: "Andaman and Nicobar Honeymoon Package", url: "https://www.wonderworldtravels.com/india-tour-packages/andaman-and-nicobar-honeymoon-package/" },
      { title: "Rajasthan Honeymoon Package", url: "https://www.wonderworldtravels.com/india-tour-packages/rajasthan-honeymoon-tour-package-for-couple/" },
      { title: "Goa Honeymoon Package", url: "https://www.wonderworldtravels.com/india-tour-packages/goa-trip-package-for-couple/" },
    ],
  },
  {
    id: "international-honeymoon-packages",
    categoryTitle: "International Honeymoon Packages",
    iconName: "Compass",
    links: [
      { title: "International Honeymoon Packages", url: "https://www.wonderworldtravels.com/international-tour-packages/honeymoon-packages/", badge: "Romantic" },
      { title: "Bali Honeymoon Package", url: "https://www.wonderworldtravels.com/international-tour-packages/bali-honeymoon-package/" },
      { title: "Thailand Honeymoon Package", url: "https://www.wonderworldtravels.com/international-tour-packages/thailand-honeymoon-package-for-couple/" },
      { title: "Dubai Honeymoon package", url: "https://www.wonderworldtravels.com/international-tour-packages/dubai-honeymoon-tour-package-for-couple/" },
      { title: "Singapore Honeymoon Package", url: "https://www.wonderworldtravels.com/international-tour-packages/singapore-honeymoon-package/" },
      { title: "Vietnam Honeymoon Package", url: "https://www.wonderworldtravels.com/international-tour-packages/vietnam-honeymoon-tour-package-for-couple/" },
      { title: "Bhutan Honeymoon Package", url: "https://www.wonderworldtravels.com/international-tour-packages/bhutan-honeymoon-package/" },
      { title: "Nepal Honeymoon Package", url: "https://www.wonderworldtravels.com/international-tour-packages/nepal-honeymoon-tour-package/" },
    ],
  },
  {
    id: "family-and-special-tours",
    categoryTitle: "Family & Special Tour Packages",
    iconName: "Users",
    links: [
      { title: "Family Tour Packages", url: "https://www.wonderworldtravels.com/india-tour-packages/family-tour/", badge: "Family" },
      { title: "Amarnath Yatra + Vaishno Devi Package", url: "https://www.wonderworldtravels.com/mata-vaishno-devi-amarnath-yatra-by-helicopter-next-day-return/" },
      { title: "5 Days Golden Triangle Family Tour", url: "https://www.wonderworldtravels.com/delhi-agra-jaipur/" },
      { title: "Kerala and Tamilnadu Tour Package", url: "https://www.wonderworldtravels.com/india-tour-packages/kerala-and-tamil-nadu-tour-package/" },
      { title: "Uttarakhand Tour Package", url: "https://www.wonderworldtravels.com/india-tour-packages/uttarakhand-tour-package-from-delhi/" },
      { title: "Mysore Tour Package For Family", url: "https://www.wonderworldtravels.com/india-tour-packages/mysore-tour-package-for-family/" },
      { title: "Kerala Tour Package For Family", url: "https://www.wonderworldtravels.com/kerala-tour/" },
      { title: "West Sikkim Family Tour", url: "https://www.wonderworldtravels.com/west-sikkim-tour/" },
    ],
  },
];
