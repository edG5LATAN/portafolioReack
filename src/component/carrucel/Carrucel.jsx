import "./Carrucel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../../trabajosLista/data";



function Carrucel() {

  

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    adaptiveHeight: true,
    variableWidth: true,
    className: "center",
    centerMode: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="carrucel">
      <Slider style={{
        width:1100
      }}  {...settings}>
        {
          data.map((dat,i)=>{
            return<div key={i} className="carrucel-caja">
            <img src={dat.imagen} alt="" className="carrucel-img" />
            <div className="carrucel-informacion">
              <h3 className="carrucel-info-h">{dat.nombre}</h3>
              <p className="carrucel-info-p">{dat.informacion}</p>
              <div className="carrucel-botones">
                <a href={dat.catalogo} target="_blank">
               <button className="carrucel-btn">Catalogo</button>
              </a>
              <a href={dat.demo} target="_blank">
               <button className="carrucel-btn">Demo</button>
              </a>
              </div>
              
            </div>
          </div>
          })
        }

      </Slider>
    </div>
  );
}

export default Carrucel;
