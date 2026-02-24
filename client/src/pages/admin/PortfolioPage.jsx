import { useState, useEffect } from "react";
import { portfolioService } from "@/services/firebaseService";
import { DataTable } from "@/components/admin/DataTable";
import { compressImageToDataUrl } from "@/utils/imageCompression";

export const PortfolioPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    sector: "",
    location: "",
    description: "",
    highlights: "",
    result: "",
    image: "",
  });

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      setLoading(true);
      const data = await portfolioService.getAll();
      setItems(data);
    } catch (error) {
      console.error("Error loading portfolio:", error);
      alert("Error loading portfolio");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        highlights: formData.highlights.split("\n").map((h) => h.trim()).filter(Boolean),
      };
      if (editingItem) {
        await portfolioService.update(editingItem.id, payload);
      } else {
        await portfolioService.create(payload);
      }
      setShowModal(false);
      setEditingItem(null);
      setFormData({
        name: "",
        sector: "",
        location: "",
        description: "",
        highlights: "",
        result: "",
        image: "",
      });
      loadItems();
    } catch (error) {
      console.error("Error saving portfolio item:", error);
      alert("Error saving portfolio item");
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setFormData({
      name: item.name || "",
      sector: item.sector || "",
      location: item.location || "",
      description: item.description || "",
      highlights: Array.isArray(item.highlights) ? item.highlights.join("\n") : item.highlights || "",
      result: item.result || "",
      image: item.image || "",
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this portfolio item?")) {
      try {
        await portfolioService.delete(id);
        loadItems();
      } catch (error) {
        console.error("Error deleting portfolio item:", error);
        alert("Error deleting portfolio item");
      }
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image/")) return;
    setUploadingImage(true);
    try {
      const dataUrl = await compressImageToDataUrl(file);
      setFormData((prev) => ({ ...prev, image: dataUrl }));
    } catch (err) {
      console.error(err);
      alert("Failed to process image.");
    } finally {
      setUploadingImage(false);
      e.target.value = "";
    }
  };

  const columns = [
    { key: "name", label: "Name" },
    { key: "sector", label: "Sector" },
    { key: "location", label: "Location" },
    {
      key: "description",
      label: "Description",
      render: (value) => (value ? value.substring(0, 50) + "..." : ""),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Portfolio Management</h1>
          <p className="text-gray-600 mt-2">Manage portfolio projects</p>
        </div>
        <button
          onClick={() => {
            setEditingItem(null);
            setFormData({
              name: "",
              sector: "",
              location: "",
              description: "",
              highlights: "",
              result: "",
              image: "",
            });
            setShowModal(true);
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Project
        </button>
      </div>

      <DataTable
        data={items}
        columns={columns}
        onEdit={handleEdit}
        onDelete={handleDelete}
        loading={loading}
      />

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">
              {editingItem ? "Edit Portfolio Project" : "Add Portfolio Project"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sector</label>
                <input
                  type="text"
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                  placeholder="e.g. Automotive OEM"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Pune, India"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Highlights (one per line)
                </label>
                <textarea
                  value={formData.highlights}
                  onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
                  rows={4}
                  placeholder="Deployed 220+ VX telemetry-enabled drivers
Integrated dashboards with SAP PM"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Result</label>
                <input
                  type="text"
                  value={formData.result}
                  onChange={(e) => setFormData({ ...formData, result: e.target.value })}
                  placeholder="e.g. 48% faster issue resolution"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Image</label>
                <label className="block w-full mb-2">
                  <span className="inline-block px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 text-sm">
                    {uploadingImage ? "Compressing…" : "Upload image (auto-compressed)"}
                  </span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} disabled={uploadingImage} />
                </label>
                <input
                  type="url"
                  value={formData.image?.startsWith("data:") ? "" : formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="Or paste image URL"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditingItem(null);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  {editingItem ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
