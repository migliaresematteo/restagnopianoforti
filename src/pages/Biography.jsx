import React from 'react';
import './Biography.css';
import a1908 from '../assets/1908.jpg';
import accordatura from '../assets/restauro.webp';
import saloon from '../assets/saloon.png';
import BiographyHeader from '../components/Biography/BiographyHeader';
import StatsSection from '../components/Biography/StatsSection';
import HistorySection from '../components/Biography/HistorySection';
import ExpertiseSection from '../components/Biography/ExpertiseSection';
import ScrollToHash from "../components/ScrollToHash";

const Biography = () => {
  const sections = [
    {
      title: 'Le Origini',
      highlights: [
        ['Fondatore', 'Vincenzo Restagno'],
        ['Esperienza', 'Ex responsabile "VEGEZZI e BOSSI"']
      ],
      content: [
        'Restagno Pianoforti sorge nel 1908 per iniziativa dell\'allora ventottenne Vincenzo Restagno, che aveva appreso il mestiere presso la nota fabbrica di organi da chiesa "VEGEZZI e BOSSI", raggiungendo il posto di responsabile forniture e accordature per i nuovi impianti in Italia e all\'estero.',
        'Sita originariamente all\'88 di Corso Vittorio Emanuele II e poi trasferitasi al vicino n. 90 dove rimarrà sino al 1988, la ditta si specializza nel ramo pianoforti, harmoniums, celestas ed autopiani, allora in voga.'
      ],
      image: a1908,
      alt: 'Storica foto del negozio Restagno'
    },
    {
      title: 'L\'Era della Produzione',
      highlights: [
        ['Produzione', '10 strumenti al mese'],
        ['Periodo d\'oro', '1920-1930']
      ],
      content: [
        'Nel 1919, finita la militarizzazione della fabbrica acquistata durante la prima guerra mondiale, viene iniziata la costruzione in proprio (5 modelli) e mezza coda, nonché di piccoli harmoniums.',
        'La fabbrica, con una settantina di dipendenti, vanta di una capacità produttiva di una decina di strumenti al mese. Il titolare viene nominato presidente dell\'associazione nazionale costruttori strumenti musicali aderenti alla lega costruttori della Confindustria.'
      ],
      image: saloon,
      alt: 'La fabbrica storica Restagno',
      reverse: true
    },
    {
      title: 'L\'Evoluzione',
      highlights: [
        ['Innovazione', 'Trasposizionpiano'],
        ['Gestione attuale', 'Carlo e Maurizio Restagno']
      ],
      content: [
        'Da ricordare sotto l\'aspetto tecnico, l\'ideazione e la costruzione del modello di tastiera di pianoforte e trasposizione denominato "trasosizionpiano" con possibilità di spostare la tonalità, particolarmente utile per l\'accompagnamento del canto.',
        'Nel 1953, l\'attività continua come comunione ereditaria dei figli, poi nel 1962 si consolida nelle mani del sig. Stefano Restagno, affiancato in seguito dai figli Carlo e Maurizio, attuali titolari.',
        'Nel 1988 l\'azienda viene trasferita nei nuovi e funzionali locali di Via Sacchi, vicino Porta Nuova, dove sono a disposizione della clientela ampie e selezionate scelte di strumenti musicali tradizionali e moderni.'
      ],
      image: accordatura,
      alt: 'Il negozio Restagno oggi'
    }
  ];

  const expertiseContent = {
    title: "L'Esperienza di una Vita",
    introduction: "Durante la mia lunga vita lavorativa (buoni 50 anni) sempre in mezzo ai pianoforti mi sono passati per le mani migliaia di questi strumenti di ogni genere, dimensioni ed età.",
    sections: [
      {
        title: "La Scoperta dei Pianoforti d'Epoca",
        content: "Fra questi molti pianoforti d'epoca risalenti generalmente a fine '800-primi '900. Quasi tutti questi strumenti, anche se di grande marca, presentavano delle crepe, e a volte anche spaccature, sulla tavola armonica.",
        highlights: ["Fine '800", "Primi '900", "Tavole Armoniche"]
      },
      {
        title: "Casi Memorabili",
        stories: [
          {
            title: "Lo Schiedmayer del 1880",
            content: "Un magnifico 3/4 coda Schiedmayer in radica del 1880 circa, con la tavola sana. La classica eccezione che conferma la regola."
          },
          {
            title: "Lo Steinway Inglese",
            content: "Un magnifico verticale Steinway in palissandro del 1880 circa proveniente dall'Inghilterra aveva la tavola sana ma dopo tre mesi di permanenza nel nostro magazzino udimmo tre forti colpi secchi. Ci accorgemmo in seguito di tre spaccature sulla tavola armonica. Questo magnifico strumento aveva passato cento anni in Inghilterra mantenendosi sano grazie al maggiore tasso di umidità del clima."
          }
        ]
      },
      {
        title: "L'Arte del Restauro",
        content: "Per poter riparare le crepe o spaccature della tavola armonica occorre disarmare il telaio di ghisa smontando completamente tutto il pianoforte. Si tratta di una riparazione molto costosa ed è raro che vi sia la convenienza economica di farla.",
        technicalDetails: [
          "Smontaggio completo",
          "Disarmo telaio di ghisa",
          "Riparazione tavola armonica"
        ]
      },
      {
        title: "La Scienza del Suono",
        content: "La funzione della tavola armonica è quella di amplificare il suono delle corde. Una singola corda vibrando trasmette, attraverso il ponticello, le vibrazioni a tutta la tavola armonica la quale, vibrando anch'essa, movimenta una massa di aria molto più ampia.",
        insights: [
          "Amplificazione del suono",
          "Trasmissione delle vibrazioni",
          "Movimento dell'aria"
        ]
      },
      {
        title: "Conclusioni Tecniche",
        content: "Le spaccature della tavola armonica non hanno alcuna influenza sull'integrità del suono dello strumento. Più importante è verificare che tutti gli incollaggi non si siano allentati, poiché catene o ponticelli parzialmente scollati potrebbero generare fastidiose vibrazioni.",
        keyPoints: [
          "Integrità del suono preservata",
          "Importanza degli incollaggi",
          "Resistenza nel tempo"
        ]
      }
    ]
  };

  return (
    <div className="biography-container">
      <ScrollToHash />
      <BiographyHeader />
      <StatsSection />
      <div className="biography-content">
        {sections.map((section, index) => (
          <HistorySection key={index} {...section} />
        ))}
        <ExpertiseSection content={expertiseContent} />
      </div>
    </div>
  );
};

export default Biography;
