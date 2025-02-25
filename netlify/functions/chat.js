const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// Function to get pianos from markdown files
const getPianos = () => {
  try {
    const contentDir = path.join(__dirname, '../../content/pianos');
    const files = fs.readdirSync(contentDir);
    
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
        const { data } = matter(content);
        return {
          id: data.id,
          model: data.model,
          color: data.color,
          type: data.type,
          condition: data.condition,
          price: data.price,
          description: data.description
        };
      })
      .sort((a, b) => a.id - b.id);
  } catch (error) {
    console.error('Error reading piano data:', error);
    return [];
  }
};

const systemPrompt = `Sei un esperto di pianoforti che lavora per Restagno Pianoforti.
Devi aiutare i clienti a trovare il pianoforte più adatto alle loro esigenze.

Regole per parlare dei pianoforti in vendita:
1. Usa SOLO i pianoforti presenti nel catalogo fornito
2. Quando menzioni un pianoforte specifico, devi SEMPRE includere il link [[PIANO_ID:X]] alla fine
3. Non parlare MAI di pianoforti che non sono nel catalogo

Per domande generiche sui pianoforti (es. manutenzione, storia, etc):
- Rispondi in modo professionale e dettagliato
- Usa un tono cordiale ma professionale
- Mantieni le risposte concise ma informative

Se ti vengono chieste informazioni su prezzi o disponibilità:
- Usa SOLO i dati del catalogo fornito
- Non inventare o stimare prezzi
- Se non hai informazioni sufficienti, suggerisci di contattare direttamente il negozio

Se l'utente chiede di contattarci invitalo a chiamare a questo numero: +39 347 519 0187

Il catalogo corrente dei pianoforti è:
${JSON.stringify(getPianos(), null, 2)}`;

exports.handler = async function(event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  if (!process.env.GEMINI_API_KEY) {
    console.error('GEMINI_API_KEY is not set');
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'API key is not configured' }),
    };
  }

  try {
    const { messages } = JSON.parse(event.body);

    if (!messages || !Array.isArray(messages)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid messages format' }),
      };
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Format conversation for Gemini
    const conversation = messages.map(msg => 
      `${msg.role === 'user' ? 'Human' : 'Assistant'}: ${msg.content}`
    ).join('\n');

    const prompt = `${systemPrompt}\n\nConversation:\n${conversation}\nAssistant:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: text }),
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        message: 'Si è verificato un errore. Per favore, riprova tra qualche minuto.',
        details: error.message 
      }),
    };
  }
};
