import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  productsService,
  servicesService,
  blogsService,
  contactService,
} from "@/services/localStorageService";

export const AdminDashboard = () => {
  const [stats, setStats] = useState({
    products: 0,
    services: 0,
    blogs: 0,
    contact: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [products, services, blogs, contact] = await Promise.all([
          productsService.getAll(),
          servicesService.getAll(),
          blogsService.getAll(),
          contactService.getAll(),
        ]);

        setStats({
          products: products.length,
          services: services.length,
          blogs: blogs.length,
          contact: contact.length,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    { label: "Products", count: stats.products, path: "/admin/products", color: "blue", icon: "🛠️" },
    { label: "Services", count: stats.services, path: "/admin/services", color: "green", icon: "⚙️" },
    { label: "Blogs", count: stats.blogs, path: "/admin/blogs", color: "purple", icon: "📝" },
    { label: "Contact Details", count: stats.contact, path: "/admin/contact", color: "orange", icon: "📞" },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage your website content</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {statCards.map((card) => (
          <Link
            key={card.path}
            to={card.path}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">{card.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{card.count}</p>
              </div>
              <div className={`text-4xl bg-${card.color}-100 p-4 rounded-full`}>
                {card.icon}
              </div>
            </div>
            <div className="mt-4">
              <span className="text-blue-600 text-sm font-medium hover:underline">
                Manage →
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            to="/admin/products"
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-900">Add New Product</h3>
            <p className="text-sm text-gray-600 mt-1">Create a new product entry</p>
          </Link>
          <Link
            to="/admin/blogs"
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-900">Create Blog Post</h3>
            <p className="text-sm text-gray-600 mt-1">Write and publish a new blog</p>
          </Link>
          <Link
            to="/admin/services"
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <h3 className="font-semibold text-gray-900">Add Service</h3>
            <p className="text-sm text-gray-600 mt-1">Add a new service offering</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
