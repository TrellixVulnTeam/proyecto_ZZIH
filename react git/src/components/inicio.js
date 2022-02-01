import React from "react";
import BienvenidoTag from "./INICIO/bienvenidos.js";
import CarruselImg from "./INICIO/carrusel.js";
import AgregarProductos from "./INICIO/productosAgregar.js";
import NavComponents from "./INICIO/Nav";
import Footer from "./INICIO/footer";
/*import Shell from './INICIO/Shell'*/
export default Inicio;
function Inicio() {
  return (
    // <React.Fragment>
    <>
      {" "}
      <NavComponents />
      <BienvenidoTag />
      <CarruselImg />
      <section id="contenedor-productos" className="row">
        <AgregarProductos />
      </section>
      <Footer />
    </>

    // </React.Fragment>
  );
}
