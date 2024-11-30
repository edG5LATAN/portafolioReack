import React from "react";
import ReactGA from 'react-ga4';
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {

  const verCertificados=()=>{
    ReactGA.event({
      category: 'certicados',
      action: 'ver_certificados',
    });
  }

   


  return (
    <div className="header">
      <Link to="/">
        <img className="header-img-logo " src="img/logoNav.jpeg" alt="logo" />
      </Link>
      <Link to="/trabajo">
      <span title="Trabajos" class="material-symbols-outlined trabajo navI">engineering</span>
      </Link>
      
      <Link to='/pasatiempo'>
        <span title="Pasatiempos" class="material-symbols-outlined pasatiempo navI">sports_esports</span>
      </Link>
      <Link to="/estudio">
       <span title="Estudios" class="material-symbols-outlined formacion navI">menu_book</span>
      </Link>
      <Link to="/formulario">
        <span title="Contactame" class="material-symbols-outlined info navI">contact_phone</span>
      </Link>


       <a onClick={verCertificados} href="https://app.aluracursos.com/emprega-one/profile/castromaradiaga0" target="_blank">
        <span class="material-symbols-outlined graduado">school</span>
       </a>
    </div>
  );
}

export default Header;
