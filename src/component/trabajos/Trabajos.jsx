import Carrucel from '../carrucel/Carrucel.jsx'
import TrabajosEsconder from '../trabajosEsconder/TrabajosEsconder.jsx'
import './Trabajos.css'
import {data} from '../../trabajosLista/data.js'

function Trabajos() {
  return (
    <><div className='trabajos'>
      <h2>proyectos</h2>
      <div className='trabajos-contenedor'>
        <Carrucel />
      </div>
    </div>
    <div className='trabajos_esconder'>
       {data.map(res=>{
       return<TrabajosEsconder info={res} />})
      }
    </div>
    </>
    
  )
}

export default Trabajos