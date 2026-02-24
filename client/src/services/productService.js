import { productsService } from "@/services/firebaseService";

function slugify(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

export const fetchCategories = async () => {
  try {
    const products = await productsService.getAll();
    const byCategory = {};
    products.forEach((p) => {
      const cat = (p.category || "").trim() || "uncategorized";
      const slug = slugify(cat);
      if (!byCategory[slug]) {
        byCategory[slug] = { id: slug, slug, name: cat, description: "", image: p.image };
      }
      if (!byCategory[slug].image && p.image) byCategory[slug].image = p.image;
    });
    return Object.values(byCategory);
  } catch (e) {
    console.error("Error fetching categories:", e);
    return [];
  }
};

export const fetchProducts = async () => {
  try {
    return await productsService.getAll();
  } catch (e) {
    console.error("Error fetching products:", e);
    return [];
  }
};

export const fetchCategoryBySlug = async (slug) => {
  const categories = await fetchCategories();
  return categories?.find(
    (cat) => cat.slug === slug || cat.id === slug || cat.id?.toLowerCase() === slug?.toLowerCase()
  ) || null;
};

export const fetchProductBySlug = async (slug) => {
  const products = await fetchProducts();
  return products?.find((prod) => prod.slug === slug) || null;
};

export const fetchProductsByCategory = async (categorySlug) => {
  const [categories, products] = await Promise.all([fetchCategories(), fetchProducts()]);
  const category = categories?.find(
    (cat) => cat.slug === categorySlug || cat.id === categorySlug || cat.id?.toLowerCase() === categorySlug?.toLowerCase()
  );
  if (!category) return [];
  const catId = category.id || category.slug;
  return products?.filter(
    (product) =>
      slugify(product.category) === catId ||
      product.category === category.name ||
      product.category?.toLowerCase() === catId?.toLowerCase()
  ) || [];
};
