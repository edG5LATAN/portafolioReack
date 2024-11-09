import React from 'react'
import './TrabajosEsconder.css'


function TrabajosEsconder({info}) {
  return (
    <div className='trabajos_esconder_contenedor'>
      <div className='trabajos_esconder_img'>
      <img src={info.imagen} alt="cargando-img" />
      </div>
      <div className='trabajos_esconder_info'>
        <h3>{info.nombre}</h3>
        <p>{info.informacion}</p>
        <div className='trabajos_esconder_botones'>
          <a target='_blank' href={info.demo}>Demo</a>
          <a target='_blank' href={info.catalogo}>Catalogo</a>
        </div>
      </div>
    </div>
  )
}

export default TrabajosEsconder
