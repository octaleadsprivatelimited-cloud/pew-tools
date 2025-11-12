import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "../components/ProductCard";
import { fetchCategories, fetchProducts } from "../services/productService";
import type { FilterOptions, Product } from "../types";

const defaultFilters: FilterOptions = {
  category: "All",
  minPrice: 0,
  maxPrice: 1000,
  minRating: 0,
  searchTerm: "",
};

export const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>(["All"]);
  const [filters, setFilters] = useState<FilterOptions>(defaultFilters);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      setFilters((prev) => ({ ...prev, category: categoryFromUrl as FilterOptions["category"] }));
    }
  }, [searchParams]);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      const [cats, prods] = await Promise.all([fetchCategories(), fetchProducts(filters)]);
      setAvailableCategories(["All", ...cats.map((cat) => cat.id)]);
      setProducts(prods);
      setIsLoading(false);
    };

    void load();
  }, [filters]);

  const handleFilterChange = <Key extends keyof FilterOptions>(
    key: Key,
    value: FilterOptions[Key],
  ) => {
    const nextFilters = { ...filters, [key]: value } as FilterOptions;
    setFilters(nextFilters);

    const params: Record<string, string> = {};
    if (nextFilters.category && nextFilters.category !== "All") {
      params.category = String(nextFilters.category);
    }
    if (nextFilters.searchTerm) {
      params.q = nextFilters.searchTerm;
    }
    setSearchParams(params);
  };

  const priceRangeLabel = useMemo(
    () => `$${filters.minPrice} - $${filters.maxPrice}`,
    [filters.minPrice, filters.maxPrice],
  );

  return (
    <div className="products-page container">
      <div className="page-intro">
        <h1>Tools built to go the distance.</h1>
        <p>
          Filter by category, price range, and rating to find the next workhorse for your workshop.
        </p>
      </div>

      <div className="products-layout">
        <aside className="filter-panel">
          <h2>Filters</h2>
          <div className="filter-group">
            <label htmlFor="filter-category">Category</label>
            <select
              id="filter-category"
              value={filters.category}
              onChange={(event) =>
                handleFilterChange("category", event.target.value as FilterOptions["category"])
              }
            >
              {availableCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="filter-search">Search</label>
            <input
              id="filter-search"
              type="search"
              placeholder="Drill, gloves, kit..."
              value={filters.searchTerm}
              onChange={(event) => handleFilterChange("searchTerm", event.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>Price Range</label>
            <div className="price-range">
              <input
                type="number"
                min={0}
                value={filters.minPrice}
                onChange={(event) =>
                  handleFilterChange("minPrice", Number.parseFloat(event.target.value) || 0)
                }
              />
              <span>to</span>
              <input
                type="number"
                min={filters.minPrice}
                value={filters.maxPrice}
                onChange={(event) =>
                  handleFilterChange(
                    "maxPrice",
                    Math.max(filters.minPrice, Number.parseFloat(event.target.value) || 0),
                  )
                }
              />
            </div>
            <p className="helper">{priceRangeLabel}</p>
          </div>

          <div className="filter-group">
            <label htmlFor="filter-rating">Minimum Rating</label>
            <select
              id="filter-rating"
              value={filters.minRating}
              onChange={(event) =>
                handleFilterChange("minRating", Number.parseFloat(event.target.value) || 0)
              }
            >
              {[0, 3, 4, 4.5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating === 0 ? "Any rating" : `${rating}+ stars`}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setFilters(defaultFilters);
              setSearchParams({});
            }}
          >
            Reset filters
          </button>
        </aside>

        <section className="products-results">
          {isLoading ? (
            <div className="loading-block" role="status">
              Loading products...
            </div>
          ) : products.length > 0 ? (
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3>No tools match your filters.</h3>
              <p>Adjust the filters or try another search term.</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setFilters(defaultFilters);
                  setSearchParams({});
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};
