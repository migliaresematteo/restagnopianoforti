const fs = require('fs');
const path = require('path');

// This is a fallback function that serves a JSON file with piano data
exports.handler = async (event) => {
  try {
    // Path to the JSON file
    const dataPath = path.join(__dirname, 'pianos-data.json');
    
    // Check if the file exists
    if (!fs.existsSync(dataPath)) {
      console.error(`Data file does not exist: ${dataPath}`);
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Piano data file not found' })
      };
    }
    
    // Read the JSON file
    const data = fs.readFileSync(dataPath, 'utf8');
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60'
      },
      body: data
    };
  } catch (error) {
    console.error('Error fetching pianos from file:', error.toString(), error.stack);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to fetch pianos from file',
        message: error.toString(),
        stack: error.stack
      })
    };
  }
};
