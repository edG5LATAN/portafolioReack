import React from "react";
import ReactGA from "react-ga4";
import "./Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  const descargarCurriculum = () => {
    ReactGA.event({
      category: "curriculum",
      action: "descargar_curriculum",
    });
  };

  return (
    <div className="home">
      <div className="home-contenedor">
        <div className="home-informacion">
          <h1>Edwin Castro</h1>
          <h3>
            Desarrollador en Backend con JAVA SpringBoot y Frontend en React
          </h3>
          <p>
            Desarrollador con conocimientos en Spring Boot, SpringSecurity de
            JAVA y Nodejs con Express y Frontend con HTML, CSS, JS, Bootstrap,
            React, NodeJS, base de datos con MYSQL, ORACLE y control de
            versiones con GITHUB.
          </p>
          <div className="home-informacion-contenedor-icono">
            <a target="_blanck" href="https://github.com/edG5LATAN">
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
            <a target="_black" href="./document/Curriculum-Back-End.pdf">
              <img
                onClick={descargarCurriculum}
                title="Curriculum"
                className="home-informacion-icono"
                src="./img/iconos/curriculun.png"
                alt=""
              />
            </a>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className="home-sobremi"
          >
            <Link to="/sobremi">
              <button className="sobremi-btn">Sobre mi</button>
            </Link>
          </motion.div>
        </div>
        <motion.img
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="home-img-foto"
          src="./img/logoPersonal.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Home;
