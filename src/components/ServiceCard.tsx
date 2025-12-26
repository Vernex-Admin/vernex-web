import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string; // can stay for future use
}

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
  return (
    <Link to="/services" className="block h-full">
      <Card className="relative p-8 h-full bg-card hover:bg-accent/5 transition-all duration-500 hover-lift border border-border/50 hover:border-accent/40 group overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
        <div className="relative flex flex-col items-center text-center space-y-5">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center group-hover:from-accent/20 group-hover:to-accent/10 transition-all duration-500 group-hover:scale-110 shadow-[var(--shadow-subtle)]">
            <Icon size={36} className="text-accent group-hover:scale-110 transition-transform duration-500" />
          </div>
          <h3 className="text-xl font-heading font-bold text-foreground group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {description}
          </p>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Card>
    </Link>
  );
};

export default ServiceCard;
