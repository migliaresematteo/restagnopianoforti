/**
 * This script copies the content directory to the dist folder
 * to ensure it's available for Netlify functions in production.
 */
const fs = require('fs');
const path = require('path');

// Paths
const contentDir = path.resolve(__dirname, '../content');
const distDir = path.resolve(__dirname, '../dist');
const distContentDir = path.resolve(distDir, 'content');

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
  console.log('Creating dist directory');
  fs.mkdirSync(distDir, { recursive: true });
}

// Create dist/content directory if it doesn't exist
if (!fs.existsSync(distContentDir)) {
  console.log('Creating dist/content directory');
  fs.mkdirSync(distContentDir, { recursive: true });
}

/**
 * Recursively copy a directory
 * @param {string} src - Source directory
 * @param {string} dest - Destination directory
 */
function copyDirRecursive(src, dest) {
  // Create destination directory if it doesn't exist
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  // Get all files and directories in the source directory
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      // Recursively copy subdirectories
      copyDirRecursive(srcPath, destPath);
    } else {
      // Copy files
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${srcPath} to ${destPath}`);
    }
  }
}

// Copy content directory to dist/content
console.log(`Copying content from ${contentDir} to ${distContentDir}`);
copyDirRecursive(contentDir, distContentDir);

console.log('Content directory successfully copied to dist/content');
