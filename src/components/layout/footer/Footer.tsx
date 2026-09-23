import React from "react";
import Link from "next/link";
import { Compass, Phone, Mail, MapPin, ShieldCheck, HeartHandshake, Award } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border mt-auto">
      {/* Trust & Guarantee Banner */}
      <div className="border-b border-border/80 bg-gray-50/50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-primary-light flex items-center justify-center text-primary shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">100% Financial Protection</h4>
                <p className="text-xs text-muted">Govt. accredited & insured booking</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-primary-light flex items-center justify-center text-primary shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Award-Winning Tours</h4>
                <p className="text-xs text-muted">Over 45,000+ satisfied travelers</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-primary-light flex items-center justify-center text-primary shrink-0">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">24/7 Dedicated Support</h4>
                <p className="text-xs text-muted">Round-the-clock trip concierge</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-primary-light flex items-center justify-center text-primary shrink-0">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Tailored Itineraries</h4>
                <p className="text-xs text-muted">Curated by local native experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-primary">
                Wonder World
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              Wonder World Travels is a premier experiential travel designer specializing in bespoke Indian holidays, sacred pilgrimage yatras, and luxury international journeys.
            </p>
            <div className="space-y-2 pt-2 text-xs text-muted">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>Connaught Place, Central Wing, New Delhi 110001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+91 (011) 4567 8900 / +91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>concierge@wonderworldtravels.com</span>
              </div>
            </div>
          </div>

          {/* Col 1: Indian Circuits */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
              Indian Tours
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/indian-tours/rajasthan" className="hover:text-primary transition-colors">
                  Royal Rajasthan Forts
                </Link>
              </li>
              <li>
                <Link href="/indian-tours/kerala" className="hover:text-primary transition-colors">
                  Kerala Backwaters
                </Link>
              </li>
              <li>
                <Link href="/indian-tours/himachal" className="hover:text-primary transition-colors">
                  Himachal & Kashmir
                </Link>
              </li>
              <li>
                <Link href="/indian-tours/wildlife" className="hover:text-primary transition-colors">
                  Tiger Safari Expeditions
                </Link>
              </li>
              <li>
                <Link href="/indian-tours/northeast" className="hover:text-primary transition-colors">
                  Northeast Seven Sisters
                </Link>
              </li>
              <li>
                <Link href="/indian-tours/goa" className="hover:text-primary transition-colors">
                  Goa Luxury Villas
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Pilgrimage Yatras */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
              Pilgrimage Yatras
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/pilgrimage-tours/char-dham-heli" className="hover:text-primary transition-colors">
                  Char Dham by Helicopter
                </Link>
              </li>
              <li>
                <Link href="/pilgrimage-tours/do-dham" className="hover:text-primary transition-colors">
                  Kedarnath & Badrinath
                </Link>
              </li>
              <li>
                <Link href="/pilgrimage-tours/ram-mandir" className="hover:text-primary transition-colors">
                  Ayodhya & Kashi Aarti
                </Link>
              </li>
              <li>
                <Link href="/pilgrimage-tours/jyotirlinga" className="hover:text-primary transition-colors">
                  12 Jyotirlinga Circuit
                </Link>
              </li>
              <li>
                <Link href="/pilgrimage-tours/tirupati" className="hover:text-primary transition-colors">
                  Tirupati Balaji VIP Pass
                </Link>
              </li>
              <li>
                <Link href="/pilgrimage-tours/amarnath" className="hover:text-primary transition-colors">
                  Amarnath Holy Cave
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary">
              Company & Help
            </h4>
            <ul className="space-y-2 text-sm text-muted">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Our Founders
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-primary transition-colors">
                  Travel Lookbook & Blogs
                </Link>
              </li>
              <li>
                <Link href="/special-offers" className="hover:text-primary transition-colors">
                  Early Bird Discounts
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Plan Custom Itinerary
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms & Cancellation
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} Wonder World Travels Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Accredited by Ministry of Tourism, Govt. of India</span>
            <span>IATA Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
