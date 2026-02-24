import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebase";

// Generic CRUD operations
export const createDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), {
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return { id: docRef.id, ...data };
  } catch (error) {
    console.error(`Error creating document in ${collectionName}:`, error);
    throw error;
  }
};

export const getDocument = async (collectionName, id) => {
  try {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
    return null;
  } catch (error) {
    console.error(`Error getting document from ${collectionName}:`, error);
    throw error;
  }
};

export const getAllDocuments = async (collectionName) => {
  try {
    const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((d) => ({
      id: d.id,
      ...d.data(),
    }));
  } catch (error) {
    // Fallback: no index or missing createdAt - fetch without orderBy and sort in memory
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const docs = querySnapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      docs.sort((a, b) => {
        const tA = a.createdAt?.toMillis?.() ?? a.createdAt ?? 0;
        const tB = b.createdAt?.toMillis?.() ?? b.createdAt ?? 0;
        return (tB || 0) - (tA || 0);
      });
      return docs;
    } catch (fallbackError) {
      console.error(`Error getting documents from ${collectionName}:`, fallbackError);
      throw fallbackError;
    }
  }
};

export const updateDocument = async (collectionName, id, data) => {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    return { id, ...data };
  } catch (error) {
    console.error(`Error updating document in ${collectionName}:`, error);
    throw error;
  }
};

export const deleteDocument = async (collectionName, id) => {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error(`Error deleting document from ${collectionName}:`, error);
    throw error;
  }
};

// Products service
export const productsService = {
  collection: "products",
  create: (data) => createDocument("products", data),
  get: (id) => getDocument("products", id),
  getAll: () => getAllDocuments("products"),
  update: (id, data) => updateDocument("products", id, data),
  delete: (id) => deleteDocument("products", id),
};

// Services service
export const servicesService = {
  collection: "services",
  create: (data) => createDocument("services", data),
  get: (id) => getDocument("services", id),
  getAll: () => getAllDocuments("services"),
  update: (id, data) => updateDocument("services", id, data),
  delete: (id) => deleteDocument("services", id),
};

// Blogs service
export const blogsService = {
  collection: "blogs",
  create: (data) => createDocument("blogs", data),
  get: (id) => getDocument("blogs", id),
  getAll: () => getAllDocuments("blogs"),
  update: (id, data) => updateDocument("blogs", id, data),
  delete: (id) => deleteDocument("blogs", id),
};

// Portfolio service
export const portfolioService = {
  collection: "portfolio",
  create: (data) => createDocument("portfolio", data),
  get: (id) => getDocument("portfolio", id),
  getAll: () => getAllDocuments("portfolio"),
  update: (id, data) => updateDocument("portfolio", id, data),
  delete: (id) => deleteDocument("portfolio", id),
};

// Contact details service
export const contactService = {
  collection: "contactDetails",
  create: (data) => createDocument("contactDetails", data),
  get: (id) => getDocument("contactDetails", id),
  getAll: () => getAllDocuments("contactDetails"),
  update: (id, data) => updateDocument("contactDetails", id, data),
  delete: (id) => deleteDocument("contactDetails", id),
};

// Pricing service
export const pricingService = {
  collection: "pricing",
  create: (data) => createDocument("pricing", data),
  get: (id) => getDocument("pricing", id),
  getAll: () => getAllDocuments("pricing"),
  update: (id, data) => updateDocument("pricing", id, data),
  delete: (id) => deleteDocument("pricing", id),
};
