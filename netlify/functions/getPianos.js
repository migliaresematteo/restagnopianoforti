const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

exports.handler = async (event) => {
  try {
    const contentDir = path.join(__dirname, '../../content/pianos');
    const files = fs.readdirSync(contentDir);
    
    const pianos = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
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
      })
      .sort((a, b) => a.id - b.id);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60'
      },
      body: JSON.stringify(pianos)
    };
  } catch (error) {
    console.error('Error fetching pianos:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch pianos' })
    };
  }
};
