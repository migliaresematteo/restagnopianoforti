import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const handler = async (event) => {
  try {
    const contentDir = path.join(__dirname, '../../content/pianos');
    const files = fs.readdirSync(contentDir);
    
    const pianos = files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
        const { data } = matter(content);
        return data;
      })
      .sort((a, b) => a.id - b.id);

    return {
      statusCode: 200,
      body: JSON.stringify(pianos)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch pianos' })
    };
  }
};
