
import styles from './styles.module.css'

const Cita = ({ mascota, dueno, fecha, hora, sintomas,date, setCitas, citas}) => {
  const eliminarCita = () => {
  if(window.confirm("Esta seguro de eliminar la cita?")){
    const nuevasCitas = citas.filter(cita => cita.date !== date); 
    setCitas(nuevasCitas);
  }
  }
  

  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>dueño:<span>{dueno}</span> </p>
      <p>Fecha:<span>{fecha}</span> </p>
      <p>Hora:<span>{hora}</span> </p>
      <p>Sintomas:<span>{sintomas}</span> </p>
      <button class="button elimnar u-full-width" onClick={eliminarCita}>Eliminar ×</button>    
      </div>
  );
}



export default Cita;
