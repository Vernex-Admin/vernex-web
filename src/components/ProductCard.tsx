import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  ctaLabel: string;
  ctaTo?: string;
  compact?: boolean;
}

const ProductCard = ({ product, ctaLabel, ctaTo = "/contact", compact = false }: ProductCardProps) => {
  const Icon = product.icon;
  const isLive = product.status === "Live / Service-ready";

  return (
    <article className="corporate-card corporate-card-hover flex h-full flex-col overflow-hidden">
      <div className="flex items-start justify-between gap-4 border-b border-border bg-[#F7F9FC] p-5">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-white">
          {product.logo ? (
            <img
              src={product.logo}
              alt={`${product.name} logo`}
              className="h-full w-full object-contain p-1.5"
            />
          ) : Icon ? (
            <Icon size={30} className="text-primary" />
          ) : null}
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isLive
              ? "border border-accent/40 bg-secondary/80 text-primary"
              : "border border-border bg-white text-muted-foreground"
          }`}
        >
          {product.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">
          For: {product.audience}
        </p>
        <h3 className="mb-3 text-xl font-bold text-foreground">{product.name}</h3>
        <p className="mb-5 text-sm leading-relaxed">{product.description}</p>

        <ul className={`mb-7 grid gap-2 text-sm text-muted-foreground ${compact ? "" : "sm:grid-cols-2"}`}>
          {product.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <Button asChild className="mt-auto w-full">
          <Link to={ctaTo}>{ctaLabel}</Link>
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
