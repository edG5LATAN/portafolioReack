import { estudios } from "../../trabajosLista/data";
import "./Estudios.css";
import { motion } from "framer-motion";

function Estudios() {
  return (
    <div className="estudio">
      <h1 className="estudio-h">Estudios</h1>
      <div className="estudio-contenedor">
        {estudios.map((res, index) => {
          return<motion.div
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
          key={index} className="estudio-card">
            <img
              className="estudio-img"
              src={res.img}
              alt={res.colegio}
            />
            <h3 className="estudio-h3">{res.colegio}</h3>
            <div className="estudio-informacion">
              <p className="formacion-p-titulo">{res.estudio}</p>
              <p className="estudio-informacion-p">
                {res.informacion}
              </p>
            </div>
          </motion.div>;
        })}
      </div>
    </div>
  );
}

export default Estudios;
