const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

exports.handler = async (event) => {
  try {
    // Try multiple possible paths for the content directory
    const possiblePaths = [
      path.resolve(process.env.LAMBDA_TASK_ROOT || '.', '../../content/pianos'),
      path.resolve(process.env.LAMBDA_TASK_ROOT || '.', '../content/pianos'),
      path.resolve(process.env.LAMBDA_TASK_ROOT || '.', './content/pianos'),
      path.resolve(__dirname, '../../content/pianos'),
      path.resolve(__dirname, '../content/pianos'),
      '/var/task/content/pianos',
      '/opt/build/repo/content/pianos',
      path.join(process.cwd(), 'content/pianos')
    ];
    
    console.log('Possible content directory paths:');
    possiblePaths.forEach(p => console.log(p));
    
    // Find the first path that exists
    let contentDir = null;
    for (const p of possiblePaths) {
      if (fs.existsSync(p)) {
        contentDir = p;
        console.log('Found content directory:', contentDir);
        break;
      }
    }
    
    // If no content directory is found, fallback to hardcoded data
    if (!contentDir) {
      console.error('No content directory found. Tried paths:', possiblePaths);
      
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
    
    // List files in the content directory
    console.log('Files in content directory:', fs.readdirSync(contentDir));
    
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
