import React from 'react'
import './Pasatiempo.css'

function Pasatiempo() {
  return (
    <div className='pasatiempo'>
      <h1 className='pasatiempos-h'>Pasatiempos</h1>
      <div className='pasatiempo-contenedor'>
       <div className='pasatiempo-caja'>
          <img className='pasatiempo-caja-img' src="./img/pasatiempos/baloncesto.jpg" alt="baloncesto" />
          <p className='pasatiempo-p'>Baloncesto</p>
       </div>
       <div className='pasatiempo-caja'>
          <img className='pasatiempo-caja-img' src="./img/pasatiempos/manga.jpg" alt="baloncesto" />
          <p className='pasatiempo-p'>Manga</p>
       </div>
       <div className='pasatiempo-caja'>
          <img className='pasatiempo-caja-img' src="./img/pasatiempos/aprender.png" alt="baloncesto" />
          <p className='pasatiempo-p'>Didactico</p>
       </div>
       <div className='pasatiempo-caja'>
          <img className='pasatiempo-caja-img' src="./img/pasatiempos/reparar.jpg" alt="baloncesto" />
          <p className='pasatiempo-p'>Reparar</p>
       </div>
       <div className='pasatiempo-caja'>
          <img className='pasatiempo-caja-img' src="./img/pasatiempos/videojuegos.jpg" alt="baloncesto" />
          <p className='pasatiempo-p'>VideoJuegos</p>
       </div>
       <div className='pasatiempo-caja'>
          <img className='pasatiempo-caja-img' src="./img/pasatiempos/codificar.jpg" alt="baloncesto" />
          <p className='pasatiempo-p'>Codificar</p>
       </div>
      </div>
    </div>
  )
}

export default Pasatiempo
