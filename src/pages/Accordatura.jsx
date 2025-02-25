import React from 'react';
import { Container } from 'react-bootstrap';
import PageHeader from '../components/common/PageHeader';
import PageSection from '../components/common/PageSection';
import SEO from '../components/common/SEO';
import '../components/common/styles.css';
import './Restauro.css';
import acc1 from '../assets/acc1.jpg';
import acc2 from '../assets/acc2.jpg';
import { AutoGraph, Construction } from '@mui/icons-material';

const sections = [
{
    title: 'Non solo ciò che appare...',
    icon: AutoGraph,
    content: "L'accordatura non è soltanto tirare le corde 3 corde per dare un unico suono, ma è quell'operazione fondamentale che ti aiuta a mantenere il pianoforte sempre efficiente e funzionante e che ti permette di capire come nel tempo si stia comportando. Per riuscire a fare una buona accordatura, non bastano solo qualche giorno o mese di pratica, anzi ci vuole qualche anno. L'accordatore non ha per forza la necessità di avere l'orecchio assoluto (che spesso aiuta in questo mestiere),ma lo si allena fino a dare i frutti di un buon suono.",
    image: acc1,
    imageAlt: 'Accordatura pianoforte',
},
{
    title: 'Qualche consiglio...',
    icon: Construction,
    content: "Noi di Restagno Pianoforti effettuiamo accordature a casa di privati e concerti con lo scopo di dare un buone bel suono a qualsiasi pianoforte. Pertanto, ci teniamo sempre a ricordare, che il pianoforte andrebbe accordato 2 volte l'anno, ma anche può dipendere da come possa essere gradevole il suono al nostro orecchio ricordando di accordarlo 1 volta all'anno. Ricordatevi, nel mentre si accorda il pianoforte, si controlla che sia sempre funzionante.",
    image: acc2,
    imageAlt: 'Accordatura pianoforte',
    reverseLayout: true
},
];

const Accordatura = () => {
return (
    <>
    <SEO
        title="Accordatura Pianoforti"
        description="Servizio professionale di accordatura pianoforti a Torino. Esperti nel restauro e nell'accordatura di pianoforti verticali e a coda, con oltre 30 anni di esperienza."
        keywords="accordatura pianoforti, riparazione pianoforti, accordatura pianoforte Torino, riparazione pianoforte Torino, accordatura pianoforte verticale, accordatura pianoforte a coda"
        url="/accordatura"
    />
    
    <div className="restauro-page py-5">
        <Container>
        <PageHeader title="Servizio di Accordatura" />
        
        {sections.map((section, index) => (
            <PageSection
            key={index}
            {...section}
            className="restauro-section"
            />
        ))}
        </Container>
    </div>
    </>
);
};

export default Accordatura;
