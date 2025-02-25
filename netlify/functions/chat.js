const { GoogleGenerativeAI } = require('@google/generative-ai');

const pianos = [
    {
      id: 1,
      model: "KRAUSS 118",
      color: "Noce",
      type: "Verticale",
      condition: "Restaurato",
      price: "5.000",
    },
    {
      id: 2,
      model: "Pianoforte SEILER",
      color: "Noce",
      type: "Verticale",
      condition: "Usato",
      price: "3.980",
    },
    {
      id: 3,
      model: "Carl Hardt Stuttgart",
      color: "Nero",
      type: "Verticale",
      condition: "Restaurato",
      price: "3.950",
    },
    {
      id: 4,
      model: "SAUTER 108",
      color: "Noce",
      type: "Verticale",
      condition: "Usato",
      price: "2.480",
    },
    {
      id: 5,
      model: "SCHIMMEL 116 (silent)",
      color: "Noce",
      type: "Verticale",
      condition: "Come nuovo",
      price: "8.950",
    },
    {
      id: 6,
      model: "Pianoforte SCHIEDMAYER",
      color: "Noce",
      type: "Verticale",
      condition: "Usato",
      price: "2.980",
    },
    {
      id: 7,
      model: "ZIMMERMANN S6 126",
      color: "Nero lucido",
      type: "Verticale",
      condition: "Nuovo",
      price: "7.070",
    },
    {
      id: 8,
      model: "W.HOFFMANN V 131",
      color: "Nero lucido",
      type: "Verticale",
      condition: "Nuovo",
      price: "12.800",
    },
    {
      id: 9,
      model: "SCHIEDMAYER 3/4",
      color: "Palissandro",
      type: "Coda",
      condition: "Restaurato",
      price: "29.850",
    },
    {
      id: 10,
      model: "Pianoforte BECHSTEIN",
      color: "Palissandro",
      type: "Verticale",
      condition: "Restaurato",
      price: "6.500",
    },
    {
      id: 11,
      model: "Steinway&Sons 3/4 mod. C",
      color: "Palissandro",
      type: "Coda",
      condition: "Restaurato",
      price: "15.000",
    },
    {
      id: 12,
      model: "Pianoforte TALLONE 1/2",
      color: "Mogano",
      type: "Coda",
      condition: "Usato",
      price: "13.980",
    },
    {
      id: 13,
      model: "BALDWIN 115",
      color: "Noce",
      type: "Verticale",
      condition: "Usato",
      price: "1.680",
    },
    {
      id: 14,
      model: "Shulze Pollmann Antik",
      color: "Naturale",
      type: "Verticale",
      condition: "Usato",
      price: "1.980",
    },
    {
      id: 15,
      model: "STEINERT 121",
      color: "Noce",
      type: "Verticale",
      condition: "Usato",
      price: "2.500",
    },
    {
      id: 16,
      model: "YAMAHA C3",
      color: "Nero",
      type: "Coda",
      condition: "Usato",
      price: "10.980",
    },
    {
      id: 17,
      model: "YAMAHA G3",
      color: "Nero",
      type: "Coda",
      condition: "Usato",
      price: "6.980",
    },
    {
      id: 18,
      model: "KAWAI KG2",
      color: "Nero",
      type: "Coda",
      condition: "Usato",
      price: "8.700",
    },
    {
      id: 19,
      model: "BECHSTEIN 1/2 coda",
      color: "Nero",
      type: "Coda",
      condition: "Usato",
      price: "4.500",
    },
    {
      id: 20,
      model: "SAUTER 113",
      color: "Noce",
      type: "Verticale",
      condition: "Usato",
      price: "2.780",
    },
    {
      id: 21,
      model: "Pianoforte MORRISON",
      color: "Mogano",
      type: "Verticale",
      condition: "Usato",
      price: "990",
    },
    {
      id: 22,
      model: "BECHSTEIN mod. 7",
      color: "Nero",
      type: "Verticale",
      condition: "Usato",
      price: "2.480",
    },
    {
      id: 23,
      model: "KAPS 1/2 coda",
      color: "Nero",
      type: "Coda",
      condition: "Usato",
      price: "4.350",
    },
    {
      id: 24,
      model: "Pianoforte A.GRAND BERLIN",
      color: "Nero",
      type: "Verticale",
      condition: "Usato",
      price: "1.750",
    },
    {
      id: 25,
      model: "YAMAHA U3",
      color: "Nero",
      type: "Verticale",
      condition: "Nuovo",
      price: "2.750",
    },
    {
      id: 26,
      model: "HERMANN 112",
      color: "Bianco",
      colorCode: "#ffffff",
      type: "Verticale",
      condition: "Nuovo",
      productionDate: "2024",
      dimensions: {
        height: "112 cm",
        length: "NaN cm",
      },
      price: "3.980",
    }
];

// Create a simplified version of the piano catalog with only necessary data
const simplifiedPianoCatalog = pianos.map(piano => ({
  id: piano.id,
  model: piano.model,
  color: piano.color,
  price: piano.price,
  type: piano.type,
}));

const SYSTEM_PROMPT = `Sei un esperto assistente specializzato in pianoforti per il negozio Restagno Pianoforti. 
Il tuo compito è aiutare i clienti a trovare il pianoforte più adatto alle loro esigenze.

CATALOGO PIANOFORTI DISPONIBILI:
${JSON.stringify(pianos, null, 2)}

REGOLE FONDAMENTALI:
1. Quando parli di pianoforti specifici, usa SOLO ed ESCLUSIVAMENTE i pianoforti presenti nel catalogo sopra
2. Quando menzioni un pianoforte specifico, devi SEMPRE includere il link [[PIANO_ID:X]] alla fine
3. Non parlare MAI di pianoforti che non sono nel catalogo

Per domande generiche sui pianoforti (es. manutenzione, storia, etc):
- Rispondi in modo professionale e dettagliato
- Se la risposta può essere collegata a un pianoforte specifico del catalogo, concludi SEMPRE con "Ti mostro un esempio dal nostro catalogo:" seguito dal formato standard e link

Quando suggerisci un pianoforte specifico, assicurati che:
1. Il link al pianoforte corrisponda esattamente al pianoforte di cui stai parlando
2. Le informazioni fornite (prezzo, condizioni, tipo) siano accurate e corrispondano al catalogo
3. Il suggerimento sia pertinente alle esigenze espresse dall'utente

Per tutte le altre domande, fornisci informazioni generali sui pianoforti, consigli sulla manutenzione, o assistenza tecnica senza necessariamente fare riferimento a modelli specifici del catalogo.

Ricorda di essere sempre:
- Professionale e cortese
- Preciso nelle informazioni tecniche
- Disponibile per ulteriori chiarimenti
- Pronto a indirizzare il cliente al negozio per una consulenza personale quando appropriato

Se l'utente chiede di contattarci invitalo a chiamare a questo numero: +39 347 519 0187`;

exports.handler = async function (event, context) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers,
      body: ''
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

    // Initialize Gemini API
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Format conversation for Gemini
    const conversation = messages.map(msg => 
      `${msg.role === 'user' ? 'Human' : 'Assistant'}: ${msg.content}`
    ).join('\n');

    const prompt = `${SYSTEM_PROMPT}\n\nConversation:\n${conversation}\nAssistant:`;

    // Generate response
    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({
        message: response
      }),
    };
  } catch (error) {
    console.error('Function error:', error);
    const errorMessage = error.message || 'Unknown error';
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to process request',
        details: errorMessage
      }),
    };
  }
};
