import React from 'react';
import { motion } from 'framer-motion';
import { Engineering, Build, Science, AutoStories } from '@mui/icons-material';
import './ExpertiseSection.css';

const ExpertiseSection = ({ content }) => {
  return (
    <section className="expertise-section">
      <motion.div 
        className="expertise-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>La Mia Esperienza con i Pianoforti</h2>
        <p className="subtitle">50 anni di storia e competenza nel restauro di pianoforti</p>
      </motion.div>

      <div className="expertise-timeline">
        <motion.div 
          className="timeline-section intro"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="section-icon">
            <AutoStories />
          </div>
          <div className="section-content">
            <h3>Introduzione</h3>
            <p>Durante la mia lunga vita lavorativa (buoni 50 anni) sempre in mezzo ai pianoforti mi sono passati per le mani migliaia di questi strumenti di ogni genere, dimensioni ed età. Fra questi molti pianoforti d'epoca risalenti generalmente a fine '800-primi '900.</p>
          </div>
        </motion.div>

        <motion.div 
          className="timeline-section cases"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="section-icon">
            <Engineering />
          </div>
          <div className="section-content">
            <h3>Casi Studio Memorabili</h3>
            <div className="case-study">
              <h4>Lo Schiedmayer del 1880</h4>
              <p>Un magnifico 3/4 coda Schiedmayer in radica del 1880 circa, con la tavola sana. La classica eccezione che conferma la regola.</p>
            </div>
            <div className="case-study">
              <h4>Lo Steinway Inglese</h4>
              <p>Un magnifico verticale Steinway in palissandro, anch'esso 1880 circa proveniente dall'Inghilterra aveva la tavola sana ma dopo tre mesi di permanenza nel nostro magazzino udimmo a pochi giorni di distanza uno dall'altro tre forti colpi secchi.</p>
              <p>Ci accorgemmo in seguito di tre spaccature sulla tavola armonica. Questo magnifico strumento aveva passato cento anni in Inghilterra mantenendosi sano grazie al maggiore tasso di umidità del clima ma aveva risentito del clima più secco dopo soli tre mesi di permanenza nel nostro magazzino.</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="timeline-section restoration"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="section-icon">
            <Build />
          </div>
          <div className="section-content">
            <h3>Il Processo di Restauro</h3>
            <p>Per poter riparare le crepe o spaccature della tavola armonica occorre disarmare il telaio di ghisa smontando completamente tutto il pianoforte. Si tratta pertanto di una riparazione molto costosa ed è raro che vi sia la convenienza economica di farla.</p>
            <p>Di conseguenza, quasi sempre, le tavole armoniche si lasciavano quindi come erano anche se queste crepe e spaccature ci preoccupavano sempre temendo che potessero, in qualche modo, danneggiare il suono.</p>
          </div>
        </motion.div>

        <motion.div 
          id="technical-explanation" 
          className="timeline-section technical"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="section-icon">
            <Science />
          </div>
          <div className="section-content">
            <h3>Aspetti Tecnici</h3>
            <div className="technical-explanation">
              <h4>La Tavola Armonica</h4>
              <p>La funzione della tavola armonica è quella di amplificare il suono delle corde. Anche una singola corda vibrando trasmette, attraverso il ponticello, le vibrazioni a tutta la tavola armonica la quale, vibrando anch'essa, movimenta una massa di aria molto più ampia di quella che può essere movimentata da una singola corda.</p>
            </div>
            <div className="technical-explanation">
              <h4>L'Impatto delle Spaccature</h4>
              <p>Solo in caso di spaccature molto ampie, che peraltro non superano mai i due tre millimetri, si potrebbe ipotizzare che la porzione d'aria corrispondente alla spaccatura non venga movimentata dalla vibrazione della tavola armonica. Si tratta comunque di una superficie di pochi millimetri quadrati che rapportati all'intera estensione della tavola rappresentano una porzione del tutto trascurabile.</p>
            </div>
            <div className="technical-explanation">
              <h4>Considerazioni Importanti</h4>
              <p>La tavola armonica è costituita da un insieme di tavolette di abete di risonanza incollate fra loro. Sul dorso della tavola sono incollate le catene e sull'altro lato è incollato il ponticello. Il tutto è poi incollato, lungo tutto il perimetro, al telaio per i verticali e al mantello per le code, venendo a costituire un insieme compatto.</p>
              <p>Trattandosi di pianoforti che hanno superato il secolo è importante verificare che tutti questi incollaggi non si siano allentati. Infatti il caso di catene o di ponticelli parzialmente scollati potrebbe generare fastidiose vibrazioni la cui origine è spesso difficile da individuare.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
