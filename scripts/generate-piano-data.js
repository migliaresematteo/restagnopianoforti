import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the piano markdown files
const contentDir = path.join(__dirname, '../content/pianos');

// Path to the output JSON file
const outputPath = path.join(__dirname, '../netlify/functions/pianos-data.json');

// Read the markdown files
const files = fs.readdirSync(contentDir);

// Parse the markdown files and extract the frontmatter data
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

// Write the JSON file
fs.writeFileSync(outputPath, JSON.stringify(pianos, null, 2));

console.log(`Generated piano data JSON file at ${outputPath}`);
console.log(`Found ${pianos.length} pianos`);
