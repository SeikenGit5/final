// Header.js
import React from "react";
import './header.css'; // Asegúrate de que el archivo de estilos existe y tiene el contenido adecuado

function Header() {
    return (
        <header className="header">
             <div className="logo-container">
             <img src="/images/Logo.png" alt="Logo" className="logo" />
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#login">Inicio de sesión</a></li>
                    <li className="nav-item"><a href="#help">Ayuda</a></li>
                    <li className="nav-item"><a href="#faq">FAQ</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
