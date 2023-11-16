import Carrucel from '../carrucel/Carrucel.jsx'
import './Trabajos.css'

function Trabajos() {
  return (
    <div className='trabajos'>
      <h2>proyectos</h2>
      <div className='trabajos-contenedor'>
        <Carrucel />
      </div>
    </div>
  )
}

export default Trabajos