import { useState, useEffect } from "react";
import { productsService } from "@/services/firebaseService";
import { DataTable } from "@/components/admin/DataTable";
import { compressImageToDataUrl } from "@/utils/imageCompression";

export const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    image: "",
    category: "",
    isFeatured: false,
  });

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await productsService.getAll();
      setProducts(data);
    } catch (error) {
      console.error("Error loading products:", error);
      alert("Error loading products");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate that image is provided
    if (!formData.image || formData.image.trim() === "") {
      alert("Please upload an image or provide an image URL");
      return;
    }

    try {
      if (editingProduct) {
        await productsService.update(editingProduct.id, formData);
      } else {
        await productsService.create(formData);
      }
      setShowModal(false);
      setEditingProduct(null);
      setImagePreview(null);
      setFormData({
        name: "",
        slug: "",
        description: "",
        image: "",
        category: "",
        isFeatured: false,
      });
      loadProducts();
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Error saving product");
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    setUploadingImage(true);
    try {
      const base64String = await compressImageToDataUrl(file);
      setFormData((prev) => ({ ...prev, image: base64String }));
      setImagePreview(base64String);
    } catch (err) {
      console.error("Image compress/upload failed:", err);
      alert("Failed to process image. Try a smaller file or use Image URL.");
    } finally {
      setUploadingImage(false);
    }
    e.target.value = "";
  };

  const handleImageUrlChange = (e) => {
    const url = e.target.value;
    if (url && (url.startsWith("http://") || url.startsWith("https://"))) {
      setFormData({ ...formData, image: url });
      setImagePreview(url);
    } else if (url === "") {
      setFormData({ ...formData, image: "" });
      setImagePreview(null);
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name || "",
      slug: product.slug || "",
      description: product.description || "",
      image: product.image || "",
      category: product.category || "",
      isFeatured: product.isFeatured || false,
    });
    setImagePreview(product.image || null);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await productsService.delete(id);
        loadProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Error deleting product");
      }
    }
  };

  const columns = [
    {
      key: "image",
      label: "Image",
      render: (value) =>
        value ? (
          <img
            src={value}
            alt="Product"
            className="w-16 h-16 object-cover rounded"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/64?text=No+Image";
            }}
          />
        ) : (
          <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
            No Image
          </div>
        ),
    },
    { key: "name", label: "Name" },
    { key: "category", label: "Category" },
    {
      key: "isFeatured",
      label: "Featured",
      render: (value) => (value ? "Yes" : "No"),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Products Management</h1>
          <p className="text-gray-600 mt-2">Manage all products</p>
        </div>
        <button
          onClick={() => {
            setEditingProduct(null);
            setImagePreview(null);
            setFormData({
              name: "",
              slug: "",
              description: "",
              image: "",
              category: "",
              isFeatured: false,
            });
            setShowModal(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Product
        </button>
      </div>

      <DataTable
        data={products}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        loading={loading}
      />

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">
              {editingProduct ? "Edit Product" : "Add Product"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Slug
                </label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Product Image
                </label>
                
                {/* Image Preview */}
                {imagePreview && (
                  <div className="mb-3 relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg border border-gray-300"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="hidden w-full h-48 bg-gray-100 rounded-lg border border-gray-300 items-center justify-center text-gray-500">
                      Invalid Image
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, image: "" });
                        setImagePreview(null);
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600"
                      title="Remove image"
                    >
                      ×
                    </button>
                  </div>
                )}

                {/* Upload Image Button */}
                <div className="mb-3">
                  <label className="block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 text-center">
                    <span className="text-sm font-medium text-gray-700">
                      {uploadingImage ? "Compressing…" : "Upload image (auto-compressed)"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      disabled={uploadingImage}
                    />
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    Supported formats: JPG, PNG, GIF (Max 5MB)
                  </p>
                </div>

                {/* Or use URL */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">OR</span>
                  </div>
                </div>

                {/* Image URL Input */}
                <div className="mt-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL (if not uploading)
                  </label>
                  <input
                    type="url"
                    value={formData.image && !formData.image.startsWith("data:image") ? formData.image : ""}
                    onChange={handleImageUrlChange}
                    placeholder="https://example.com/image.jpg"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    disabled={formData.image && formData.image.startsWith("data:image")}
                  />
                  {formData.image && formData.image.startsWith("data:image") && (
                    <p className="text-xs text-green-600 mt-1">
                      ✓ Image uploaded successfully
                    </p>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <input
                  type="text"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isFeatured"
                  checked={formData.isFeatured}
                  onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                  className="mr-2"
                />
                <label htmlFor="isFeatured" className="text-sm font-medium text-gray-700">
                  Featured Product
                </label>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingProduct(null);
                    setImagePreview(null);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {editingProduct ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
