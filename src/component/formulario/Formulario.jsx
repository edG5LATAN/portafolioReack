import './Formulario.css'

function Formulario() {
  return (
    <div className='formulario' > 

      <h2 className='formulario-h'>Contactame ingresa tu informacion</h2>

      <div className='formulario-contenedor'>
        <form action="https://formsubmit.co/castromaradiaga@hotmail.com" method="POST">
          <label htmlFor="name">Nombre</label>
          <input required type="text" name="name" id="name" placeholder='ingrese su nombre' />

          <label htmlFor="email">Correo</label>
          <input required type="email" name="email" id="email" placeholder='ingrese su correo' />

          <label htmlFor="subject">Asunto</label>
          <input required type="text" name="subject" id="subject" placeholder='ingrese asunto' />

          <label htmlFor="coments" name>Comentario</label>
          <textarea name="coments" id="coments" cols="20" rows="5" placeholder='ingrese su comentario'></textarea>
          <div className='formulario-contenedor-btn'>
          <button type="submit" className='formulario-btn'>Enviar</button>

          </div>
          <input type="hidden" name="_next" value="http://localhost:5173/"/>
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>
    </div>
  )
}

export default Formulario