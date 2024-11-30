import { BrowserRouter, Routes , Route, useLocation} from 'react-router-dom'
import './App.css'
import ReactGA from 'react-ga4';
import Home from './component/home/Home'
import Header from './component/header/Header'
import SobreMi from './component/sobremi/SobreMi'
import Pasatiempo from './component/pasatiempo/Pasatiempo'
import Estudios from './component/estudios/Estudios'
import Formulario from './component/formulario/Formulario'
import Trabajos from './component/trabajos/Trabajos'
import { useEffect } from 'react';

const PageViewTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return null;
};

function App() {

  useEffect(()=>{
    const appGA= import.meta.env.VITE_GOOGLE_ANALITIC
    ReactGA.initialize(appGA)
    
    ReactGA.send('pageView')

  },[])


  return (
    <div className='app'>
      <BrowserRouter>
      <PageViewTracker />
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
