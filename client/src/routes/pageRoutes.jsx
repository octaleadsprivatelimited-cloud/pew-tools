import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ProductCategoriesPage } from "@/pages/ProductCategoriesPage";
import { ProductDetailPage } from "@/pages/ProductDetailPage";
import { PortfolioPage } from "@/pages/PortfolioPage";
import { BlogPage } from "@/pages/BlogPage";
import { ContactPage } from "@/pages/ContactPage";
import { TestimonialsPage } from "@/pages/TestimonialsPage";
import { FAQPage } from "@/pages/FAQPage";
import { PowerToolsPage } from "@/pages/PowerToolsPage";
import { ConstructionToolsPage } from "@/pages/ConstructionToolsPage";
import { IndustrialEquipmentPage } from "@/pages/IndustrialEquipmentPage";
import { PrecisionInstrumentsPage } from "@/pages/PrecisionInstrumentsPage";
import { WorkshopSolutionsPage } from "@/pages/WorkshopSolutionsPage";
import { SafetyGearPage } from "@/pages/SafetyGearPage";
import { ToolRentalsPage } from "@/pages/ToolRentalsPage";
import { DistributorProgramPage } from "@/pages/DistributorProgramPage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/products", element: <ProductCategoriesPage /> },
  { path: "/products/:slug", element: <ProductDetailPage /> },
  { path: "/portfolio", element: <PortfolioPage /> },
  { path: "/blog", element: <BlogPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/testimonials", element: <TestimonialsPage /> },
  { path: "/faq", element: <FAQPage /> },
  { path: "/power-tools", element: <PowerToolsPage /> },
  { path: "/construction-tools", element: <ConstructionToolsPage /> },
  { path: "/industrial-equipment", element: <IndustrialEquipmentPage /> },
  { path: "/precision-instruments", element: <PrecisionInstrumentsPage /> },
  { path: "/workshop-solutions", element: <WorkshopSolutionsPage /> },
  { path: "/safety-gear", element: <SafetyGearPage /> },
  { path: "/tool-rentals", element: <ToolRentalsPage /> },
  { path: "/distributor-program", element: <DistributorProgramPage /> },
];

export default routes;
