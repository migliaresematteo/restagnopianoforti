const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

exports.handler = async (event) => {
  try {
    // In Netlify's production environment, we need to use a different path
    // The function is executed from the /var/task directory in Netlify
    const contentDir = path.resolve(process.env.LAMBDA_TASK_ROOT || '.', '../../content/pianos');
    console.log('Content directory path:', contentDir);
    
    // Check if directory exists
    if (!fs.existsSync(contentDir)) {
      console.error(`Directory does not exist: ${contentDir}`);
      
      // Fallback to hardcoded data if CMS data is not available
      return {
        statusCode: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=60'
        },
        body: JSON.stringify([
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
        ])
      };
    }
    
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
    console.error('Error fetching pianos:', error.toString(), error.stack);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to fetch pianos',
        message: error.toString(),
        stack: error.stack
      })
    };
  }
};
