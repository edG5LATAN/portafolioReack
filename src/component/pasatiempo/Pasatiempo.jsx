import React from "react";
import "./Pasatiempo.css";
import { pasaTiempos } from "../../trabajosLista/data";
import { motion } from "framer-motion";

function Pasatiempo() {
  return (
    <div className="pasatiempo">
      <h1 className="pasatiempos-h">Pasatiempos</h1>
      <div className="pasatiempo-contenedor">
        {pasaTiempos.map((res, index) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
              whileHover={{
                cursor: "pointer",
                scale: 1.02,
                transition: "easeInOut",
                duration: 0.3,
              }}
              key={index}
              className="pasatiempo-caja"
            >
              <img
                className="pasatiempo-caja-img"
                src={res.img}
                alt={res.nombre}
              />
              <p className="pasatiempo-p">{res.nombre}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Pasatiempo;
