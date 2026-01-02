import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductCard } from "@/components/ProductCard";
import { fetchCategoryBySlug, fetchProductBySlug, fetchProductsByCategory } from "@/services/productService";

export const ProductDetailPage = () => {
  const { slug } = useParams();
  const [pageType, setPageType] = useState(null); // 'category' | 'product' | 'loading'
  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      
      // Check if it's a category first
      const categoryResult = await fetchCategoryBySlug(slug);
      if (categoryResult) {
        setCategory(categoryResult);
        setPageType("category");
        const categoryProducts = await fetchProductsByCategory(slug);
        setProducts(categoryProducts);
        setIsLoading(false);
        return;
      }

      // If not a category, check if it's a product
      const productResult = await fetchProductBySlug(slug);
      if (productResult) {
        setProduct(productResult);
        setPageType("product");
        setIsLoading(false);
        return;
      }

      // Not found
      setPageType("not-found");
      setIsLoading(false);
    };

    void load();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="bg-[#050b18] text-white min-h-screen py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    );
  }

  // Render category products page
  if (pageType === "category" && category) {
    return (
      <div className="bg-[#050b18] text-white min-h-screen">
        <section className="relative overflow-hidden py-20 border-b border-white/5">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.22),_transparent_65%)]"
            aria-hidden
          />
          <div className="container relative z-10 px-6">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-brand mb-6"
            >
              ← Back to Products
            </Link>
            <h1 className="text-4xl font-semibold md:text-5xl mb-4">{category.name}</h1>
            {category.description && (
              <p className="text-base text-white/70 max-w-3xl">{category.description}</p>
            )}
          </div>
        </section>

        <section className="py-24">
          <div className="container px-6">
            {products.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-white/70">No products found in this category.</p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <h2 className="text-2xl font-semibold mb-2">
                    {products.length} {products.length === 1 ? "Product" : "Products"}
                  </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    );
  }

  if (pageType === "not-found" || (!product && pageType !== "category")) {
    return (
      <div className="bg-[#050b18] text-white min-h-screen py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-3xl font-semibold mb-4">Product not found</h1>
            <Link to="/products" className="text-brand hover:underline">
              ← Back to Products
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Render product detail page
  const formattedName = product?.name || (slug?.replace(/-/g, " ") ?? "Product");

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand mb-6"
        >
          ← Back to Products
        </Link>
        <h1 className="text-3xl font-semibold text-slate-900 mb-4">{formattedName}</h1>
        {product?.description && (
          <p className="mt-4 max-w-2xl text-slate-600 mb-6">{product.description}</p>
        )}
        <p className="mt-4 max-w-2xl text-slate-600">
          Detailed specifications, performance data, and maintenance resources for this Pew Tools product will appear
          here. Use this page to host imagery, downloadable manuals, and compatibility charts for your sales and
          service teams.
        </p>
      </div>
    </section>
  );
};
