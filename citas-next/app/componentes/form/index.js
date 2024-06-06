import React from 'react';
import styles from './styles.module.css'

const Formulario = ({setCitas, citas}) => {
  const enviarForm = (e) => {
    e.preventDefault();
    
    const mascota = document.getElementById('mascota').value.trim();
    const dueno = document.getElementById('dueno').value.trim();
    const fecha = document.getElementById('fecha').value.trim();
    const hora = document.getElementById('hora').value.trim();
    const sintomas = document.getElementById('sintomas').value.trim();
  
    if (!mascota || !dueno || !fecha || !hora || !sintomas) {
      alert('Por favor, complete todos los campos.');
      return;
    }
  
    const citaExistente = citas.find(cita => cita.mascota === mascota && cita.fecha === fecha && cita.hora === hora && cita.dueno === dueno);
    if (citaExistente) {
      alert('Ya existe una cita agendada para esta mascota en la misma fecha y hora.');
      return;
    }
  
    const date = Date.now();
    const cita = {
      date,
      mascota,
      dueno,
      fecha,
      hora,
      sintomas
    };
  
    if (window.confirm("¿Desea agregar la siguiente cita?")) {
      setCitas((citas) => [...citas, cita]);
    }
  };
  

  return (
    <form onSubmit={enviarForm} className="formulario" >
      <label>Nombre Mascota</label>
      <input id="mascota" type="text" className="u-full-width" placeholder="Nombre Mascota" />

      <label>Nombre Dueño</label>
      <input id="dueno" type="text" className="u-full-width" placeholder="Nombre dueño de la mascota" />

      <label>Fecha</label>
      <input id="fecha" type="date" className="u-full-width" />

      <label>Hora</label>
      <input id="hora" type="time" className="u-full-width" />

      <label>Sintomas</label>
      <textarea id="sintomas" className="u-full-width"></textarea>

      <button type="submit" className="u-full-width button-primary">Agregar Cita</button>
    </form>
  );
}

export default Formulario;
