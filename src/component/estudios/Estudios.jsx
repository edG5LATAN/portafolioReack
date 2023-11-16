import './Estudios.css'

function Estudios() {



  return (
    <div className='estudio'>
      <h1 className='estudio-h'>Estudios</h1>
      <div className='estudio-contenedor'>
       <div className='estudio-card'>
         <img className='estudio-img' src="./img/estudios/alura1.jpg" alt="" />
         <h3 className='estudio-h3'>Alura Latan</h3>
         <div className='estudio-informacion'>
           <p className='formacion-p-titulo'>aluralatan</p>

          <p className='estudio-informacion-p'>Desarrollador Junior </p>
          <ul>
          <li>Frontend con React y Js</li>
          <li>Backend con java SpringBoot</li>
          <li>Python para DataScience</li>
          <li>Mysql base de datos</li>
          <li>Aministrador Mysql Server</li>
          </ul>
         </div>
       </div>

       <div className='estudio-card'>
         <img className='estudio-img' src="./img/estudios/Infop.jpg" alt="" />
         <h3 className='estudio-h3'>infop</h3>
         <div className='estudio-informacion'>
          <p className='formacion-p-titulo'>tecnico</p>
          <p className='estudio-informacion-p'>
            Tecnico en electronica general y en computacion y mantenimiento de impresoras y computadoras instalacion de software ... </p>
         </div>
       </div>

       <div className='estudio-card' >
         <img className='estudio-img' src="./img/estudios/oracle.jpg" alt="" />
         <h3 className='estudio-h3'>oracle</h3>
         <div className='estudio-informacion'>
          <p className='formacion-p-titulo'>Formacion ORACLE</p>
          <p className='estudio-informacion-p'>Formación de Oracle Cloud Infrastructure
          conceptos basicos de computacion en nubes para comprender su 
          arquitectura de Oracle Cloud para crear servicios en la nube redes
          virtuales y load balancer.</p>
         </div>
       </div>

       <div className='estudio-card'>
         <img className='estudio-img' src="./img/estudios/udemy.png" alt="" />
         <h3 className='estudio-h3'>udemy</h3>
         <div className='estudio-informacion'>
          <p className='formacion-p-titulo'>bases de js</p>
          <p className='estudio-informacion-p'>Buenas practicas de Javascript, dominio y manejo
            de las variables, array, creacion de proyectos usando Js Html y Css,
            uso de fetch y recursos de api </p>
         </div>
       </div>

       <div className='estudio-card'>
         <img className='estudio-img' src="./img/estudios/universidadPedagogica.png" alt="" />
         <h3 className='estudio-h3'>universidad pedagogica</h3>
         <div className='estudio-informacion'>
          <p className='formacion-p-titulo'>ingles</p>
          <p className='estudio-informacion-p'>Diplomado de ingles para comprendimiento 
          y manejo comunicativo para leer manuales tecnicos en reparaciones y entablar conversaciones </p>
         </div>
       </div>
      </div>
    </div>
  )
}

export default Estudios
