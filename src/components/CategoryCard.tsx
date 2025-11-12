import { Link } from "react-router-dom";
import type { Category } from "../types";

type CategoryCardProps = {
  category: Category;
};

export const CategoryCard = ({ category }: CategoryCardProps) => (
  <article className="category-card">
    <div className="category-media">
      <img src={category.image} alt={category.title} loading="lazy" />
    </div>
    <div className="category-body">
      <h3>{category.title}</h3>
      <p>{category.description}</p>
      <Link to={`/products?category=${encodeURIComponent(category.id)}`} className="btn btn-link">
        Explore {category.title}
      </Link>
    </div>
  </article>
);
