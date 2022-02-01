import React from "react";
import { Link } from "react-router-dom";
let logo = "./assets/img/fondos/icono2.0.jpg";

export default function NavComponents() {
  return (
    <React.Fragment>
      <header className="App-header">
        <div>
          <div className="contenedor-img">
            <img src={logo} alt="logo" className="App-logo" />
          </div>
          <div>
            <nav>
              <ul className="contenedor-li">
                <Link to={'/'}><li className="nav-li">Home</li></Link>
                <Link to={'/cuenta'}><li className="nav-li">Crear Cuenta</li></Link>
                <Link to={'/quienes'}><li className="nav-li">Quienes Somos</li></Link>
                <Link to={'/ayuda'}><li className="nav-li">Ayuda</li></Link>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
