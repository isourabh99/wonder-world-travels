export interface MegaMenuSubItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface MegaMenuColumn {
  title: string;
  items: MegaMenuSubItem[];
}

export interface FeaturedPromoCard {
  title: string;
  subtitle: string;
  badge: string;
  imageUrl: string;
  href: string;
  ctaText: string;
  priceStart?: string;
}

export interface MegaMenuData {
  columns: MegaMenuColumn[];
  promoCard?: FeaturedPromoCard;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  hasMegaMenu?: boolean;
  megaMenu?: MegaMenuData;
}
