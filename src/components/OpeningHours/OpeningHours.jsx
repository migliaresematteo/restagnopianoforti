import React from 'react';
import './OpeningHours.css';

const OpeningHours = () => {
  return (
    <div className="opening-hours">
      <h5 className="footer-heading mb-4">Orari di Apertura</h5>
      <table>
        <thead>
          <tr>
            <th>Giorno</th>
            <th>Orario</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lunedì</td>
            <td>15:30 - 19:30</td>
            <td>Solo su appuntamento</td>
          </tr>
          <tr>
            <td>Martedì</td>
            <td>9:00 - 12:30 | 15:30 - 19:30</td>
            <td>Consigliato appuntamento</td>
          </tr>
          <tr>
            <td>Mercoledì</td>
            <td>9:00 - 12:30 | 15:30 - 19:30</td>
            <td>Consigliato appuntamento</td>
          </tr>
          <tr>
            <td>Giovedì</td>
            <td>9:00 - 12:30 | 15:30 - 19:30</td>
            <td>Consigliato appuntamento</td>
          </tr>
          <tr>
            <td>Venerdì</td>
            <td>9:00 - 12:30 | 15:30 - 19:30</td>
            <td>Consigliato appuntamento</td>
          </tr>
          <tr>
            <td>Sabato</td>
            <td>9:00 - 12:30 | 15:30 - 19:30</td>
            <td>Consigliato appuntamento</td>
          </tr>
          <tr>
            <td>Domenica</td>
            <td>Chiuso</td>
            <td>Solo su appuntamento</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OpeningHours;
