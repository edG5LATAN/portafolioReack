import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home-contenedor">
        <div className="home-informacion">
          <h1>Edwin Castro</h1>
          <h3>Programador junior con conocimiento en Java y Reack</h3>
          <p>
            Soy graduado de la promocion Alura latan, Oracle nextEducation, UDEMY
            con conocimiento en lenguage Java, SpringBoot, React, JavaScript.
          </p>
          <div className="home-informacion-contenedor-icono">
            <a
              target="_blanck"
              href="https://github.com/edG5LATAN?tab=repositories"
            >
              <img
                className="home-informacion-icono"
                src="./img/iconos/gitHub.png"
                alt=""
              />
            </a>
            <a
              target="_blanck"
              href="https://www.linkedin.com/in/edwin-castro-13a763272/recent-activity/all/"
            >
              <img
                className="home-informacion-icono"
                src="./img/iconos/linkedin.png"
                alt=""
              />
            </a>
            <a target="_black" href="./documento/curriculumVitae.pdf">
              <img
                className="home-informacion-icono"
                src="./img/iconos/curriculun.png"
                alt=""
              />
            </a>
          </div>
          <div className="home-sobremi">
            <Link to="/sobremi">
              <button className="sobremi-btn">Sobre mi</button>
            </Link>
          </div>
        </div>
        <img className="home-img-foto" src="./img/logoPersonal.jpeg" alt="" />
      </div>
    </div>
  );
}

export default Home;
