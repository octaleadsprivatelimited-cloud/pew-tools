import imageCompression from "browser-image-compression";

const DEFAULT_OPTIONS = {
  maxSizeMB: 0.5,
  maxWidthOrHeight: 1200,
  useWebWorker: true,
  fileType: undefined, // keep original type
};

/**
 * Compress an image file for admin uploads. Returns a data URL (base64) for storing in Firestore.
 * @param {File} file - Image file from input
 * @param {Object} options - Override default compression (maxSizeMB, maxWidthOrHeight)
 * @returns {Promise<string>} Data URL of the compressed image
 */
export async function compressImageToDataUrl(file, options = {}) {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const compressed = await imageCompression(file, opts);
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Failed to read compressed image"));
    reader.readAsDataURL(compressed);
  });
}

/**
 * Compress an image file; returns the compressed File (e.g. for FormData uploads).
 * @param {File} file - Image file
 * @param {Object} options - Optional overrides
 * @returns {Promise<File>}
 */
export async function compressImageFile(file, options = {}) {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  return imageCompression(file, opts);
}
