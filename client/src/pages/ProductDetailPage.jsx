import { useParams } from "react-router-dom";

export const ProductDetailPage = () => {
  const { slug } = useParams();
  const formattedName = slug?.replace(/-/g, " ") ?? "Product";

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold text-slate-900 capitalize">{formattedName}</h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Detailed specifications, performance data, and maintenance resources for this Pew Tools product will appear
          here. Use this page to host imagery, downloadable manuals, and compatibility charts for your sales and
          service teams.
        </p>
      </div>
    </section>
  );
};
