import React from "react";
import { Headphones, ShieldCheck, Compass, Sparkles } from "lucide-react";
import { WHY_CHOOSE_US_ITEMS, WhyChooseUsItem } from "@/data/why-choose-us";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";

interface WhyChooseUsProps {
  items?: WhyChooseUsItem[];
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  items = WHY_CHOOSE_US_ITEMS,
}) => {
  const getIcon = (name: WhyChooseUsItem["iconName"]) => {
    switch (name) {
      case "Headphones":
        return <Headphones className="w-6 h-6 text-primary" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-primary" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-primary" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Wonder World Difference"
          title="Why Discerning Travelers"
          highlight="Entrust Us"
          description="We do not offer cookie-cutter packages. Every journey is sculpted around your tastes, comfort, and peace of mind."
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <Card
              key={item.id}
              rounded="2xl"
              padding="lg"
              className="flex flex-col justify-between group hover:border-primary/40 transition-all duration-300 bg-gray-50/40 hover:bg-white"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-primary-light flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-primary uppercase tracking-wider bg-primary-light px-2.5 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-border/60">
                <span className="text-xs font-semibold text-primary group-hover:underline flex items-center gap-1">
                  Learn more &rarr;
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
