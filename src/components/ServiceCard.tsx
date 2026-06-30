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
      <Card className="relative h-full overflow-hidden p-7 transition-all duration-300 corporate-card-hover group">
        <div className="relative flex flex-col items-center text-center space-y-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-secondary/70 text-primary transition-all duration-300 group-hover:bg-accent/20">
            <Icon size={30} className="text-primary transition-colors duration-300 group-hover:text-accent" />
          </div>
          <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {description}
          </p>
          <div className="absolute bottom-0 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </Card>
    </Link>
  );
};

export default ServiceCard;
