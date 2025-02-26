/**
 * API functions for fetching piano data from Netlify CMS
 */
import * as localApi from './localPianos';

// Determine if we're in development mode
const isDev = import.meta.env.DEV;

/**
 * Fetches all pianos from the Netlify function or local files in development
 * @returns {Promise<Array>} Array of piano objects
 */
export const fetchAllPianos = async () => {
  // Use local API in development
  if (isDev) {
    return localApi.fetchAllPianos();
  }
  
  // Use Netlify function in production
  try {
    const response = await fetch('/.netlify/functions/getPianos');
    if (!response.ok) {
      console.error('Netlify function returned non-OK response:', response.status, response.statusText);
      const errorText = await response.text();
      console.error('Error response body:', errorText);
      
      // Fallback to hardcoded data if the function fails
      return [
        {
          id: 1,
          model: "Yamaha U3",
          color: "Nero",
          type: "Verticale",
          condition: "Usato ricondizionato",
          productionDate: "1980",
          dimensions: "131 x 154 x 65",
          price: 4500,
          description: "Pianoforte verticale Yamaha U3 usato ricondizionato. Ottimo stato, meccanica revisionata.",
          featured: true,
          images: ["/images/pianos/yamaha-u3-1.jpg", "/images/pianos/yamaha-u3-2.jpg", "/images/pianos/yamaha-u3-3.jpg"]
        },
        {
          id: 2,
          model: "Steinway & Sons O-180",
          color: "Nero",
          type: "Coda",
          condition: "Usato ricondizionato",
          productionDate: "1925",
          dimensions: "180 x 148 x 100",
          price: 45000,
          description: "Pianoforte a coda Steinway & Sons O-180 completamente restaurato. Condizioni eccellenti.",
          featured: true,
          images: ["/images/pianos/steinway-o180-1.jpg", "/images/pianos/steinway-o180-2.jpg", "/images/pianos/steinway-o180-3.jpg"]
        },
        {
          id: 3,
          model: "Kawai K-300",
          color: "Mogano",
          type: "Verticale",
          condition: "Nuovo",
          productionDate: "2022",
          dimensions: "122 x 149 x 61",
          price: 6500,
          description: "Pianoforte verticale Kawai K-300 nuovo. Suono brillante e meccanica precisa.",
          featured: false,
          images: ["/images/pianos/kawai-k300-1.jpg", "/images/pianos/kawai-k300-2.jpg", "/images/pianos/kawai-k300-3.jpg"]
        }
      ];
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching pianos:', error);
    
    // Fallback to hardcoded data if the function fails
    return [
      {
        id: 1,
        model: "Yamaha U3",
        color: "Nero",
        type: "Verticale",
        condition: "Usato ricondizionato",
        productionDate: "1980",
        dimensions: "131 x 154 x 65",
        price: 4500,
        description: "Pianoforte verticale Yamaha U3 usato ricondizionato. Ottimo stato, meccanica revisionata.",
        featured: true,
        images: ["/images/pianos/yamaha-u3-1.jpg", "/images/pianos/yamaha-u3-2.jpg", "/images/pianos/yamaha-u3-3.jpg"]
      },
      {
        id: 2,
        model: "Steinway & Sons O-180",
        color: "Nero",
        type: "Coda",
        condition: "Usato ricondizionato",
        productionDate: "1925",
        dimensions: "180 x 148 x 100",
        price: 45000,
        description: "Pianoforte a coda Steinway & Sons O-180 completamente restaurato. Condizioni eccellenti.",
        featured: true,
        images: ["/images/pianos/steinway-o180-1.jpg", "/images/pianos/steinway-o180-2.jpg", "/images/pianos/steinway-o180-3.jpg"]
      },
      {
        id: 3,
        model: "Kawai K-300",
        color: "Mogano",
        type: "Verticale",
        condition: "Nuovo",
        productionDate: "2022",
        dimensions: "122 x 149 x 61",
        price: 6500,
        description: "Pianoforte verticale Kawai K-300 nuovo. Suono brillante e meccanica precisa.",
        featured: false,
        images: ["/images/pianos/kawai-k300-1.jpg", "/images/pianos/kawai-k300-2.jpg", "/images/pianos/kawai-k300-3.jpg"]
      }
    ];
  }
};

/**
 * Gets a piano by its ID
 * @param {number|string} id - The piano ID
 * @returns {Promise<Object|null>} The piano object or null if not found
 */
export const getPianoById = async (id) => {
  // Use local API in development
  if (isDev) {
    return localApi.getPianoById(id);
  }
  
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
  // Use local API in development
  if (isDev) {
    return localApi.getRandomFeaturedPianos(count, excludeId);
  }
  
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
