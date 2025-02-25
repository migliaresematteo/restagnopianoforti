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
import rest1 from '../assets/rest1.jpeg';
import rest2 from '../assets/rest2.jpeg';
import rest3 from '../assets/rest3.jpeg';
import rest4 from '../assets/rest4.jpeg';

import schied1 from '../assets/restauri/schied1.jpg';
import schied2 from '../assets/restauri/schied2.png';
import schied3 from '../assets/restauri/schied3.png';
import schied4 from '../assets/restauri/schied4.png';
import schied5 from '../assets/restauri/schied5.png';
import schied6 from '../assets/restauri/schied6.png';
import schied7 from '../assets/restauri/schied7.png';

import gav1 from '../assets/restauri/gav1.png';
import gav2 from '../assets/restauri/gav2.png';
import gav3 from '../assets/restauri/gav3.png';
import gav4 from '../assets/restauri/gav4.png';
import gav5 from '../assets/restauri/gav5.png';
import gav6 from '../assets/restauri/gav6.png';

import all1 from '../assets/restauri/all1.png';
import all2 from '../assets/restauri/all2.png';
import all3 from '../assets/restauri/all3.png';
import all4 from '../assets/restauri/all4.png';
import all5 from '../assets/restauri/all5.png';
import all6 from '../assets/restauri/all6.png';
import all7 from '../assets/restauri/all7.png';

const sections = [
  {
    title: 'La Nostra Esperienza',
    icon: BuildIcon,
    content: 'Durante la nostra attività professionale abbiamo eseguito innumerevoli riparazioni e restauri di vecchi pianoforti. A volte semplici regolazioni ma frequentemente riparazioni di vecchi pianoforti con gravi difetti.',
    image: rest1,
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
    image: rest2,
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
    image: rest3,
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
    image: rest4,
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
    images: [schied1, schied2, schied3, schied4, schied5, schied6, schied7]
  },
  {
    title: 'Restauro Gaveau',
    description: 'Descrizione',
    images: [gav1, gav2, gav3, gav4, gav5, gav6]
  },
  {
    title: 'Pianoforte alluvionato',
    description: 'Descrizione',
    images: [all1, all2, all3, all4, all5, all6, all7]
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
