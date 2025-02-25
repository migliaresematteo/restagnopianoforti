import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pianosData from '../netlify/functions/pianoData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../content/pianos');
const sourceImagesDir = path.join(__dirname, '../src/assets/pianos');
const publicImagesDir = path.join(__dirname, '../public/images/pianos');

// Create directories if they don't exist
[contentDir, publicImagesDir].forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Helper function to copy a file
function copyFile(source, destination) {
    fs.copyFileSync(source, destination);
}

// Process each piano
pianosData.forEach(piano => {
    // Get all image files that match the piano model
    const files = fs.readdirSync(sourceImagesDir);
    const modelPrefix = piano.model.toLowerCase()
        .replace(/[&\s]+/g, '-')  // Replace & and spaces with dash
        .replace(/[^a-z0-9-]/g, '') // Remove special characters
        .split('-')[0];  // Get first part of model name
        
    const matchingFiles = files.filter(file => {
        const fileName = file.toLowerCase();
        return fileName.includes(modelPrefix) || 
               (modelPrefix === 'krauss' && fileName.includes('118')) ||
               (modelPrefix === 'sauter' && fileName.includes('108')) ||
               (modelPrefix === 'zimmermann' && fileName.includes('zimm')) ||
               (modelPrefix === 'schiedmayer' && fileName.includes('schied')) ||
               (modelPrefix === 'steinway' && fileName.includes('stein')) ||
               (modelPrefix === 'shulze' && fileName.includes('schu')) ||
               (modelPrefix === 'kawai' && fileName.includes('kg')) ||
               (modelPrefix === 'bechstein' && fileName.includes('bech')) ||
               (modelPrefix === 'hermann' && fileName.includes('hermann'));
    });

    // Copy images and get their paths
    const newImagePaths = matchingFiles.map(file => {
        const sourcePath = path.join(sourceImagesDir, file);
        const destPath = path.join(publicImagesDir, file);
        copyFile(sourcePath, destPath);
        return `/images/pianos/${file}`;
    });

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
images:
${newImagePaths.map(path => `  - "${path}"`).join('\n')}
---`;

    const fileName = `${piano.model.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}.md`;
    fs.writeFileSync(path.join(contentDir, fileName), content);
});

console.log('Piano data conversion completed!');
