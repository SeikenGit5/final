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
import './styles.css';

const len = Slider.length - 1;

const Login = () => (
    <main className="card">
        <section className="izquierda">
            <img src="/images/Logo.png" alt="Imagen logo" className="imagen_logo" />
            <h3 className="titulo_login">Login</h3>
            <span className="subtitulo">¡Loguéate para empezar!</span>
            <form>
                <section className="caja_input">
                    <label>E-mail</label>
                    <input type="text" placeholder="Email" />
                </section>
                <section className="caja_input">
                    <label>Contraseña</label>
                    <input type="password" placeholder="Contraseña" />
                </section>
            </form>
            <section className="control_guardado">
                <span className="olvidaste_contraseña">¿Olvidaste tu contraseña?</span>
            </section>
            <section className="control_acceso">
                <button type="submit">Login</button>
                <button className="boton_registrar">
                    <span className="boton_registrar--texto">Registrar</span>
                </button>
            </section>
            <section className="separador">
                <span></span>
                <span>o puedes iniciar con:</span>
                <span></span>
            </section>
            <section className="control_login_social">
                <a href="#">
                    <img src="./Mookup/ic-google.png" alt="Logo Google" />
                    Login con Google
                </a>
                <a href="#">
                    <img src="./Mookup/ic-facebook.png" alt="Logo Facebook" />
                    Login con Facebook
                </a>
            </section>
        </section>
        <section className="derecha">
            <div className="background_imagen">
                <div className="detalle_vidrio">
                    <div className="detalle_vidrio-interno">
                        <span>¡Comienza ya!
                        El aprender es lo más importante en toda carrera universitaria, comienza tu estudio ahora con nuestra pagina.
                        </span>
                    </div>
                </div>
                <img src="./Mookup/ic-background-direita.svg" alt="background_imagen"></img>
            </div>
        </section>
    </main>
);

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
                <Login />
            </div>
            <div className="image-content-container">
                <img src="/images/Logo.png" alt="Placeholder" className="content-image" />
                <div className="text-content">
                    <h2>¿Quienes Somos?</h2>
                    <p>Somos alumnas de Tecnicatura Universitaria en Programación de la Universidad Tecnologica Nacional de Tucumán, dichosas y orgullosas creadoras de Malagmai con finalidad de aprobar el trabajo final de la materia Programación III.
Nos encontramos gratificantes hacia el apoyo recibido por parte de todos los usuarios registrados y docentes inscritos para poder optar por nuestra herramienta a libre público y que su labor y el aprender sean captados en su completa esencia. De parte de nosotras: ¡les deseamos un buen aprender! 
                    </p>
                </div>
            </div>
            <Footer /> {/* Asegúrate de agregar el Footer aquí */}
        </div>
    );
}

export default Slidersss;
