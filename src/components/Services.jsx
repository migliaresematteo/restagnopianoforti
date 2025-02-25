import React from 'react';
import BuildIcon from '@mui/icons-material/Build';
import TuneIcon from '@mui/icons-material/Tune';
import PianoIcon from '@mui/icons-material/Piano';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PageHeader from './common/PageHeader';
import ServiceCard from './common/ServiceCard';
import CustomButton from './common/CustomButton';
import './common/styles.css';

const services = [
  {
    title: 'Restauro e riparazione',
    description: 'Il servizio di riparazione e restauro di pianoforti si occupa di ripristinare lo strumento alla sua migliore condizione possibile, sia dal punto di vista estetico che funzionale.',
    icon: <BuildIcon sx={{ fontSize: 40 }} />,
    link: '/restauro'
  },
  {
    title: 'Accordatura',
    description: 'Il servizio di accordatura pianoforte si occupa di regolare la tensione delle corde dello strumento per garantire un suono uniforme e bilanciato.',
    icon: <TuneIcon sx={{ fontSize: 40 }} />,
    link: '/accordatura'
  },
  {
    title: 'Tavola armonica',
    description: 'Il servizio di riparazione della tavola armonica si occupa di riparare eventuali danni alla tavola armonica di un pianoforte.',
    icon: <PianoIcon sx={{ fontSize: 40 }} />,
    link: '/biografia#technical-explanation'
  },
  {
    title: 'Vendita pianoforti',
    description: 'Il servizio di vendita di pianoforti si occupa di offrire ai clienti una vasta gamma di pianoforti di alta qualità, dalle marche più prestigiose a quelle per gli amatori.',
    icon: <StorefrontIcon sx={{ fontSize: 40 }} />,
    link: '/pianoforti'
  },
];

const Services = () => {
  return (
    <section className="pb-3">
      <div className="container">
        <PageHeader 
          title="I nostri servizi" 
          className="text-dark"
        />

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-12 col-sm-6 col-md-3" key={index}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <CustomButton link="/contatti" text="Richiedi Informazioni" />
        </div>
      </div>
    </section>
  );
};

export default Services;