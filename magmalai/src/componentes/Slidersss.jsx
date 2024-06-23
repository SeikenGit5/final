import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Slider from "./Slider";
import Arrows from "./arrows";
import Dots from "./dots";
import Header from "./Header"; // Asegúrate de importar el Header
import Footer from "./Footer"; // Asegúrate de importar el Footer
import './slider.css';
import './content.css'; 
import './footer.css'; // Importa los estilos del Footer

const len = Slider.length - 1;

function Slidersss(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div>
            <Header />
            <div className="slider-container">
                <SliderContent activeIndex={activeIndex} Slider={Slider} />
                <Arrows 
                    prevSlide={() => 
                        setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                    }
                    nextSlide={() => 
                        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                    }
                />
                <Dots 
                    activeIndex={activeIndex} 
                    Slider={Slider} 
                    onClick={(activeIndex) => setActiveIndex(activeIndex)} 
                />
            </div>
            <div className="content-container">
                <h2>Información General</h2>
                <p>Esta es una sección para información adicional que puede incluir cualquier tipo de contenido textual que desees agregar.</p>
            </div>
            <div className="image-content-container">
                <img src="/images/Logo.png" alt="Placeholder" className="content-image" />
                <div className="text-content">
                    <h2>Título de la Imagen</h2>
                    <p>Esta es una descripción que acompaña a la imagen. Puedes añadir cualquier información que consideres relevante aquí.</p>
                </div>
            </div>
            <Footer /> {/* Asegúrate de agregar el Footer aquí */}
        </div>
    );
}

export default Slidersss;
