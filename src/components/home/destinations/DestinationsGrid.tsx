import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { Destination } from "@/types/destination";
import { TOP_DESTINATIONS } from "@/data/destinations";
import { SectionHeading } from "@/components/ui/section-heading";

interface DestinationsGridProps {
  destinations?: Destination[];
}

export const DestinationsGrid: React.FC<DestinationsGridProps> = ({
  destinations = TOP_DESTINATIONS,
}) => {
  return (
    <section id="destinations" className="py-20 lg:py-24 bg-gray-50/60 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Iconic Landscapes"
          title="Top Destinations To"
          highlight="Unveil This Year"
          description="From timeless royal kingdoms and serene coastal lagoons to breathtaking European alpine horizons."
          className="mb-14"
        />

        {/* Bento / Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, idx) => {
            const isLarge = idx === 0 || idx === 3;

            return (
              <Link
                key={dest.id}
                href={`/destinations/${dest.id}`}
                className={`group relative rounded-3xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-500 ${
                  isLarge ? "sm:col-span-2 lg:col-span-2 h-[340px] sm:h-[380px]" : "h-[340px] sm:h-[380px]"
                }`}
              >
                <Image
                  src={dest.imageUrl}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 transition-colors duration-300" />

                {/* Tag pill */}
                {dest.tag && (
                  <div className="absolute top-5 left-5">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
                      {dest.tag}
                    </span>
                  </div>
                )}

                {/* Content Overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="space-y-1 text-white">
                    <div className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                      <Compass className="w-3.5 h-3.5 text-primary-light" />
                      <span>{dest.region} • {dest.country}</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white group-hover:translate-x-1 transition-transform">
                      {dest.name}
                    </h3>
                    <p className="text-xs text-gray-300">
                      {dest.toursCount} Curated Packages • From ₹{dest.startingPrice.toLocaleString("en-IN")}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300 shrink-0">
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
