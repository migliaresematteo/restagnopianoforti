/**
 * This file provides a local development alternative to the Netlify functions
 * for fetching piano data. It directly imports the piano data from the CMS markdown files
 * using the Vite import.meta.glob feature.
 */
import matter from 'gray-matter';

// Use Vite's import.meta.glob to load all markdown files
const pianoFiles = import.meta.glob('/content/pianos/*.md', { as: 'raw', eager: true });

// Parse the markdown files and extract the frontmatter data
const parsePianoData = () => {
  const pianos = Object.entries(pianoFiles).map(([path, content]) => {
    const { data } = matter(content);
    
    // Process images to ensure they're in the correct format
    if (data.images && Array.isArray(data.images)) {
      // Make sure each image has the correct path prefix
      data.images = data.images.map(img => {
        if (typeof img === 'string' && !img.startsWith('/')) {
          return `/${img}`;
        }
        return img;
      });
    }
    
    return data;
  }).sort((a, b) => a.id - b.id);
  
  return pianos;
};

// Cache the parsed data
let pianoData = null;

/**
 * Fetches all pianos from the local markdown files
 * @returns {Promise<Array>} Array of piano objects
 */
export const fetchAllPianos = async () => {
  try {
    if (!pianoData) {
      pianoData = parsePianoData();
    }
    return pianoData;
  } catch (error) {
    console.error('Error fetching pianos locally:', error);
    return [];
  }
};

/**
 * Gets a piano by its ID
 * @param {number|string} id - The piano ID
 * @returns {Promise<Object|null>} The piano object or null if not found
 */
export const getPianoById = async (id) => {
  try {
    const pianos = await fetchAllPianos();
    return pianos.find(piano => piano.id === parseInt(id, 10)) || null;
  } catch (error) {
    console.error('Error getting piano by ID:', error);
    return null;
  }
};

/**
 * Gets random featured pianos
 * @param {number} count - Number of pianos to return
 * @param {number|string|null} excludeId - ID to exclude from results
 * @returns {Promise<Array>} Array of piano objects
 */
export const getRandomFeaturedPianos = async (count, excludeId = null) => {
  try {
    let pianos = await fetchAllPianos();
    
    // Filter featured pianos
    pianos = pianos.filter(piano => piano.featured);
    
    // Exclude the specified ID if provided
    if (excludeId) {
      pianos = pianos.filter(piano => piano.id !== parseInt(excludeId, 10));
    }
    
    // If we don't have enough featured pianos, get random ones
    if (pianos.length < count) {
      const allPianos = await fetchAllPianos();
      const nonFeatured = allPianos.filter(
        piano => !piano.featured && (!excludeId || piano.id !== parseInt(excludeId, 10))
      );
      
      // Shuffle and add non-featured pianos until we reach the count
      const shuffled = nonFeatured.sort(() => 0.5 - Math.random());
      pianos = [...pianos, ...shuffled.slice(0, count - pianos.length)];
    } else if (pianos.length > count) {
      // If we have more than needed, shuffle and take only what we need
      pianos = pianos.sort(() => 0.5 - Math.random()).slice(0, count);
    }
    
    return pianos;
  } catch (error) {
    console.error('Error getting random featured pianos:', error);
    return [];
  }
};
