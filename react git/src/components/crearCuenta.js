
import React from "react";
import NavComponents from "./INICIO/Nav";
import Formulario from "./crear-cuenta/formulario";
import Footer from "./INICIO/footer";

function CrearCuenta() {
    return (
      <React.Fragment>
        <NavComponents/>
        <Formulario />
        <Footer />
      </React.Fragment>
    );
}
export default CrearCuenta;