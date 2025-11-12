export type ProductCategory = "Power Tools" | "Hand Tools" | "DIY Kits" | "Accessories";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  inventory: number;
  specs: Record<string, string>;
  features: string[];
  images: string[];
  tags?: string[];
  isFeatured?: boolean;
}

export interface Category {
  id: ProductCategory;
  title: string;
  description: string;
  image: string;
}

export interface FilterOptions {
  category: ProductCategory | "All";
  minPrice: number;
  maxPrice: number;
  minRating: number;
  searchTerm: string;
}

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface UserProfile {
  name: string;
  email: string;
  preferences?: {
    newsletter: boolean;
  };
}

export interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  shippingMethod: "standard" | "express";
  paymentMethod: "card" | "paypal" | "apple-pay" | "google-pay";
  cardNumber?: string;
  cardExpiry?: string;
  cardCvc?: string;
}
