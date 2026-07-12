import {
  BarChart3,
  Bot,
  Boxes,
  CalendarCheck,
  LucideIcon,
} from "lucide-react";
import attendanceLogo from "@/assets/products/vernex-attendance-system.png";
import billingLogo from "@/assets/products/vernex-billing-pos.png";
import biLogo from "@/assets/products/vernex-bi-restaurants.png";
import clinicLogo from "@/assets/products/vernex-clinic-os.png";
import schoolLogo from "@/assets/products/vernex-school-erp.png";

export type ProductStatus = "Live / Service-ready" | "Upcoming" | "In Development";

export interface Product {
  name: string;
  status: ProductStatus;
  audience: string;
  description: string;
  features: string[];
  logo?: string;
  icon?: LucideIcon;
}

export const liveProducts: Product[] = [
  {
    name: "Vernex School ERP",
    status: "Live / Service-ready",
    audience: "Schools and educational institutions",
    description:
      "A school management system for student data, academic workflows, attendance, events, materials, feedback, complaints, leave, and communication.",
    features: [
      "Student and admin workflows",
      "Attendance and academic management",
      "Materials, videos, events, and profiles",
      "Feedback, complaints, and communication",
    ],
    logo: schoolLogo,
  },
  {
    name: "Vernex BI For Restaurants",
    status: "Live / Service-ready",
    audience: "Restaurants, cafes, and food businesses",
    description:
      "A restaurant business intelligence solution that helps owners understand sales, profit, menu performance, and operational patterns.",
    features: [
      "Sales and revenue insights",
      "Menu and item performance",
      "Profit-focused dashboard",
      "Monthly report and Google Meet review",
    ],
    logo: biLogo,
  },
  {
    name: "Vernex Billing POS Software",
    status: "Live / Service-ready",
    audience: "Shops, retail stores, and growing businesses",
    description:
      "A billing and POS system with inventory, customers, receipts, returns, reports, staff roles, and business settings.",
    features: [
      "Billing and receipt generation",
      "Inventory and customer management",
      "Sales, returns, and reports",
      "Staff roles and business settings",
    ],
    logo: billingLogo,
  },
];

export const upcomingProducts: Product[] = [
  {
    name: "Vernex Attendance System",
    status: "Upcoming",
    audience: "Students, staff, teams, and members",
    description:
      "Face attendance and tracking system for students, staff, and members.",
    features: [
      "Face attendance flow",
      "Student and staff tracking",
      "Daily attendance records",
      "Reports and review support",
    ],
    logo: attendanceLogo,
    icon: CalendarCheck,
  },
  {
    name: "Vernex Clinic OS",
    status: "Upcoming",
    audience: "Clinics and healthcare practices",
    description:
      "Clinic management system for appointments, patients, billing, prescriptions, and records.",
    features: [
      "Appointment management",
      "Patient records",
      "Billing and prescriptions",
      "Clinic workflow support",
    ],
    logo: clinicLogo,
  },
  {
    name: "Vernex Sales Agent",
    status: "Upcoming",
    audience: "Sales teams and customer-facing businesses",
    description:
      "AI-powered sales assistant for WhatsApp, lead handling, follow-ups, and customer conversations.",
    features: [
      "WhatsApp lead handling",
      "Follow-up assistance",
      "Customer conversation support",
      "Sales workflow automation",
    ],
    icon: Bot,
  },
  {
    name: "Vernex Inventory Profit",
    status: "In Development",
    audience: "Shops, distributors, and inventory-led businesses",
    description:
      "Inventory and profit intelligence system for stock, purchase, sales, margins, and business reporting.",
    features: [
      "Stock and purchase tracking",
      "Sales and margin insights",
      "Profit intelligence",
      "Business reporting",
    ],
    icon: Boxes,
  },
];

export const allProducts: Product[] = [...liveProducts, ...upcomingProducts];

export const buildCategories = [
  { title: "SaaS Products", icon: BarChart3 },
  { title: "ERP Systems", icon: Boxes },
  { title: "BI Dashboards", icon: BarChart3 },
  { title: "Automation Systems", icon: CalendarCheck },
  { title: "AI Tools", icon: Bot },
  { title: "Business Software", icon: Boxes },
];
