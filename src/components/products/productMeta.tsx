import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  CheckCircle2,
  Cross,
  Package,
  Receipt,
  Users,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import type { Product, ProductStatus } from "@/data/products";

/* -------------------------------------------------------------------------- */
/*  Shared building blocks for the Products page cards                         */
/* -------------------------------------------------------------------------- */

const iconMap: Record<string, LucideIcon> = {
  "Vernex School ERP": BookOpen,
  "Vernex BI For Restaurants": UtensilsCrossed,
  "Vernex Billing POS Software": Receipt,
  "Vernex Attendance System": CalendarCheck,
  "Vernex Clinic OS": Cross,
  "Vernex Sales Agent": Users,
  "Vernex Inventory Profit": Package,
};

export const getProductIcon = (product: Product): LucideIcon =>
  iconMap[product.name] ?? product.icon ?? Package;

export const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const badgeStyles: Record<ProductStatus, string> = {
  "Live / Service-ready": "bg-[#F7F2E8] text-[#A9791F] border-[#E8D9B8]",
  Upcoming: "bg-[#FBF6EA] text-[#A9791F] border-[#EADFC4]",
  "In Development": "bg-[#EEF1F6] text-slate-500 border-[#E1E6EF]",
};

export const StatusBadge = ({ status }: { status: ProductStatus }): JSX.Element => (
  <span
    className={`inline-flex shrink-0 items-center whitespace-nowrap rounded-full border px-3 py-1 text-[11px] font-semibold ${badgeStyles[status]}`}
  >
    {status}
  </span>
);

export const BrandTile = ({ Icon }: { Icon: LucideIcon }): JSX.Element => (
  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center gap-1 rounded-xl border border-[#E8E2D8] bg-white shadow-[0_6px_14px_-10px_rgba(11,36,84,0.4)]">
    <Icon className="h-6 w-6 text-[#D8B36A]" aria-hidden="true" />
    <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-primary">
      Vernex
    </span>
  </div>
);

export const IconTile = ({
  Icon,
  withCaption = false,
}: {
  Icon: LucideIcon;
  withCaption?: boolean;
}): JSX.Element => (
  <div className="flex shrink-0 flex-col items-center gap-1">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E8E2D8] bg-[#F7F2E8]">
      <Icon className="h-5 w-5 text-[#D8B36A]" aria-hidden="true" />
    </div>
    {withCaption && (
      <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-primary">
        Vernex
      </span>
    )}
  </div>
);

export const FeatureList = ({
  features,
  className = "",
}: {
  features: string[];
  className?: string;
}): JSX.Element => (
  <ul className={className}>
    {features.map((feature) => (
      <li
        key={feature}
        className="flex items-start gap-2 text-sm leading-snug text-slate-500"
      >
        <CheckCircle2
          className="mt-0.5 h-4 w-4 shrink-0 text-[#D8B36A]"
          aria-hidden="true"
        />
        <span>{feature}</span>
      </li>
    ))}
  </ul>
);

export const CardButton = ({
  to,
  label,
  compact = false,
}: {
  to: string;
  label: string;
  compact?: boolean;
}): JSX.Element => (
  <Link
    to={to}
    className={`group/btn inline-flex items-center justify-center gap-2 rounded-lg bg-primary font-semibold text-white transition-colors duration-[250ms] hover:bg-[#0a1c40] focus-visible:ring-2 focus-visible:ring-[#D8B36A] focus-visible:ring-offset-2 ${
      compact ? "px-4 py-2 text-xs" : "w-full px-5 py-3 text-sm"
    }`}
  >
    {label}
    <ArrowRight
      className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
      aria-hidden="true"
    />
  </Link>
);
