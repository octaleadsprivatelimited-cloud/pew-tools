// LocalStorage-based data service (fallback when Firebase is not configured)
const STORAGE_KEYS = {
  products: "pew_tools_products",
  services: "pew_tools_services",
  blogs: "pew_tools_blogs",
  contact: "pew_tools_contact",
  pricing: "pew_tools_pricing",
};

const getStorageData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error(`Error reading from localStorage (${key}):`, error);
    return [];
  }
};

const setStorageData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error(`Error writing to localStorage (${key}):`, error);
    return false;
  }
};

// Generic CRUD operations
export const createDocument = async (collectionName, data) => {
  const key = STORAGE_KEYS[collectionName];
  if (!key) {
    throw new Error(`Unknown collection: ${collectionName}`);
  }

  const items = getStorageData(key);
  const newItem = {
    id: `local_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  
  items.push(newItem);
  setStorageData(key, items);
  
  return newItem;
};

export const getDocument = async (collectionName, id) => {
  const key = STORAGE_KEYS[collectionName];
  if (!key) {
    throw new Error(`Unknown collection: ${collectionName}`);
  }

  const items = getStorageData(key);
  return items.find((item) => item.id === id) || null;
};

export const getAllDocuments = async (collectionName) => {
  const key = STORAGE_KEYS[collectionName];
  if (!key) {
    throw new Error(`Unknown collection: ${collectionName}`);
  }

  const items = getStorageData(key);
  // Sort by createdAt descending
  return items.sort((a, b) => {
    const dateA = new Date(a.createdAt || 0);
    const dateB = new Date(b.createdAt || 0);
    return dateB - dateA;
  });
};

export const updateDocument = async (collectionName, id, data) => {
  const key = STORAGE_KEYS[collectionName];
  if (!key) {
    throw new Error(`Unknown collection: ${collectionName}`);
  }

  const items = getStorageData(key);
  const index = items.findIndex((item) => item.id === id);
  
  if (index === -1) {
    throw new Error(`Document not found: ${id}`);
  }

  items[index] = {
    ...items[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  
  setStorageData(key, items);
  return items[index];
};

export const deleteDocument = async (collectionName, id) => {
  const key = STORAGE_KEYS[collectionName];
  if (!key) {
    throw new Error(`Unknown collection: ${collectionName}`);
  }

  const items = getStorageData(key);
  const filtered = items.filter((item) => item.id !== id);
  
  if (items.length === filtered.length) {
    throw new Error(`Document not found: ${id}`);
  }
  
  setStorageData(key, filtered);
  return true;
};

// Service exports
export const productsService = {
  collection: "products",
  create: (data) => createDocument("products", data),
  get: (id) => getDocument("products", id),
  getAll: () => getAllDocuments("products"),
  update: (id, data) => updateDocument("products", id, data),
  delete: (id) => deleteDocument("products", id),
};

export const servicesService = {
  collection: "services",
  create: (data) => createDocument("services", data),
  get: (id) => getDocument("services", id),
  getAll: () => getAllDocuments("services"),
  update: (id, data) => updateDocument("services", id, data),
  delete: (id) => deleteDocument("services", id),
};

export const blogsService = {
  collection: "blogs",
  create: (data) => createDocument("blogs", data),
  get: (id) => getDocument("blogs", id),
  getAll: () => getAllDocuments("blogs"),
  update: (id, data) => updateDocument("blogs", id, data),
  delete: (id) => deleteDocument("blogs", id),
};

export const contactService = {
  collection: "contact",
  create: (data) => createDocument("contact", data),
  get: (id) => getDocument("contact", id),
  getAll: () => getAllDocuments("contact"),
  update: (id, data) => updateDocument("contact", id, data),
  delete: (id) => deleteDocument("contact", id),
};

export const pricingService = {
  collection: "pricing",
  create: (data) => createDocument("pricing", data),
  get: (id) => getDocument("pricing", id),
  getAll: () => getAllDocuments("pricing"),
  update: (id, data) => updateDocument("pricing", id, data),
  delete: (id) => deleteDocument("pricing", id),
};
