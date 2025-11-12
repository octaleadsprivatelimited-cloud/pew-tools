import { categories, products } from "../data/products";
import type { FilterOptions, Product } from "../types";

const delay = (ms = 400) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchCategories = async () => {
  await delay();
  return categories;
};

export const fetchProducts = async (filters?: Partial<FilterOptions>) => {
  await delay();

  if (!filters) {
    return products;
  }

  return products.filter((product) => {
    const withinCategory =
      filters.category && filters.category !== "All"
        ? product.category === filters.category
        : true;
    const minPrice = filters.minPrice ?? 0;
    const maxPrice = filters.maxPrice ?? Number.POSITIVE_INFINITY;
    const withinPrice = product.price >= minPrice && product.price <= maxPrice;
    const meetsRating = filters.minRating ? product.rating >= filters.minRating : true;
    const matchesSearch = filters.searchTerm
      ? product.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(filters.searchTerm.toLowerCase())
      : true;

    return withinCategory && withinPrice && meetsRating && matchesSearch;
  });
};

export const fetchProductBySlug = async (slug: string): Promise<Product | undefined> => {
  await delay();
  return products.find((product) => product.slug === slug);
};
