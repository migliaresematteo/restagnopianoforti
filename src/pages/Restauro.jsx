import React from 'react';
import { Container } from 'react-bootstrap';
import BuildIcon from '@mui/icons-material/Build';
import ConstructionIcon from '@mui/icons-material/Construction';
import PianoIcon from '@mui/icons-material/Piano';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import PageHeader from '../components/common/PageHeader';
import PageSection from '../components/common/PageSection';
import RestorationExample from '../components/RestorationExample';
import SEO from '../components/common/SEO';
import '../components/common/styles.css';
import './Restauro.css';

const sections = [
  {
    title: 'La Nostra Esperienza',
    icon: BuildIcon,
    content: 'Durante la nostra attività professionale abbiamo eseguito innumerevoli riparazioni e restauri di vecchi pianoforti. A volte semplici regolazioni ma frequentemente riparazioni di vecchi pianoforti con gravi difetti.',
    image: '/images/restauro/rest1.jpeg',
    imageAlt: 'Restauro pianoforte',
    listTitle: 'Interventi Principali',
    listItems: [
      'Sostituzione di corde e caviglie',
      'Riparazione di somieri',
      'Restauro tavole armoniche',
      'Sostituzione martelletti e smorze'
    ]
  },
  {
    title: 'Costi e Considerazioni',
    icon: ConstructionIcon,
    content: 'I costi di restauro sono rimasti alti poiché si tratta di lavoro che va eseguito interamente a mano. Inoltre i prezzi dei ricambi che provengono dalla Germania continuano, anche se più lentamente, a lievitare.',
    image: '/images/restauro/rest2.jpeg',
    imageAlt: 'Dettaglio costi restauro',
    listTitle: 'Fattori di Costo',
    listItems: [
      'Lavorazione manuale specializzata',
      'Ricambi originali dalla Germania/Giapponesi',
      'Tempo di lavorazione esteso',
      'Competenze artigianali specifiche'
    ],
    reverseLayout: true
  },
  {
    title: 'Pianoforti Verticali vs Code',
    icon: PianoIcon,
    content: 'Quando si tratta di un pianoforte di famiglia al quale si è molto affezionati, specie se di buona marca tedesca, potrebbe essere ragionevole esaminare la possibilità di un restauro.',
    image: '/images/restauro/rest3.jpeg',
    imageAlt: 'Pianoforte verticale e a coda',
    listTitle: 'Considerazioni per il Restauro',
    listItems: [
      'Valore affettivo dello strumento',
      'Qualità della marca originale',
      'Costi differenti tra verticali e code',
      'Possibilità di interventi specifici'
    ]
  },
  {
    title: 'Il Suono e l\'Evoluzione',
    icon: MusicNoteIcon,
    content: 'Un pianoforte di 100 anni fa non ha lo stesso suono di un pianoforte di oggi. A quell\'epoca i pianoforti avevano una timbrica piena (specie nei bassi), corposa e, non di rado, anche morbida.',
    image: '/images/restauro/rest4.jpeg',
    imageAlt: 'Evoluzione del suono',
    listTitle: 'Caratteristiche Sonore',
    listItems: [
      'Timbrica piena nei bassi',
      'Cambio delle frequenze dell\'accordatura',
      'Differenze con il suono moderno',
      'Evoluzione del gusto musicale'
    ],
    reverseLayout: true
  }
];

const restorationExamples = [
  {
    title: 'Restauro SCHIEDMAYER d\'epoca',
    description: 'Descrizione',
    images: ['/images/restauro/examples/schied1.jpg', '/images/restauro/examples/schied2.png', '/images/restauro/examples/schied3.png', '/images/restauro/examples/schied4.png', '/images/restauro/examples/schied5.png', '/images/restauro/examples/schied6.png', '/images/restauro/examples/schied7.png']
  },
  {
    title: 'Restauro Gaveau',
    description: 'Descrizione',
    images: ['/images/restauro/examples/gav1.png', '/images/restauro/examples/gav2.png', '/images/restauro/examples/gav3.png', '/images/restauro/examples/gav4.png', '/images/restauro/examples/gav5.png', '/images/restauro/examples/gav6.png']
  },
  {
    title: 'Pianoforte alluvionato',
    description: 'Descrizione',
    images: ['/images/restauro/examples/all1.png', '/images/restauro/examples/all2.png', '/images/restauro/examples/all3.png', '/images/restauro/examples/all4.png', '/images/restauro/examples/all5.png', '/images/restauro/examples/all6.png', '/images/restauro/examples/all7.png']
  }
];

const Restauro = () => {
  return (
    <>
      <SEO
        title="Restauro Pianoforti"
        description="Servizio professionale di restauro pianoforti a Torino. Esperti nel restauro di pianoforti verticali e a coda, con oltre 30 anni di esperienza."
        keywords="restauro pianoforti, riparazione pianoforti, restauro pianoforte Torino, riparazione pianoforte Torino, restauro pianoforte verticale, restauro pianoforte a coda"
        url="/restauro"
      />
      
      <div className="restauro-page py-5">
        <Container>
          <PageHeader title="Servizio di Restauro" />
          
          {sections.map((section, index) => (
            <PageSection
              key={index}
              {...section}
              className="restauro-section"
            />
          ))}

          <div className="restoration-examples mt-5">
            <h2 className="text-center mb-5">I Nostri Restauri</h2>
            {restorationExamples.map((example, index) => (
              <RestorationExample
                key={index}
                {...example}
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Restauro;
