import { BrowserRouter, Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './component/home/Home'
import Header from './component/header/Header'
import SobreMi from './component/sobremi/SobreMi'
import Pasatiempo from './component/pasatiempo/Pasatiempo'
import Estudios from './component/estudios/Estudios'
import Formulario from './component/formulario/Formulario'
import Trabajos from './component/trabajos/Trabajos'

function App() {

  return (
    <div className='app'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/sobremi' element={<SobreMi />}/>
          <Route path='/pasatiempo' element={<Pasatiempo />} />
          <Route path='/estudio' element={<Estudios />} />
          <Route path='/formulario' element={<Formulario />} />
          <Route path='/trabajo' element={<Trabajos />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
