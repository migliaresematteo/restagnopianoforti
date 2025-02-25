import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pianos from '../netlify/functions/pianoData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../content/pianos');

// Create content directory if it doesn't exist
if (!fs.existsSync(contentDir)) {
    fs.mkdirSync(contentDir, { recursive: true });
}

pianos.forEach(piano => {
    const content = `---
id: ${piano.id}
model: "${piano.model}"
color: "${piano.color}"
colorCode: "${piano.colorCode}"
type: "${piano.type}"
condition: "${piano.condition}"
productionDate: "${piano.productionDate}"
height: "${piano.dimensions?.height || ''}"
length: "${piano.dimensions?.length || ''}"
price: "${piano.price}"
description: "${piano.description.replace(/"/g, '\\"')}"
featured: ${piano.featured || false}
images: []
---`;

    const fileName = `${piano.model.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.md`;
    fs.writeFileSync(path.join(contentDir, fileName), content);
});

console.log('Piano data conversion completed!');
