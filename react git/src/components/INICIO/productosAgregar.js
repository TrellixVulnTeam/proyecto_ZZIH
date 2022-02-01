import { Link } from "react-router-dom";
import React from "react";
import inventario from "./../../data/inventario";

class AgregarProductos extends React.Component{
  state={
    inventario:inventario
  }
  render(){
         
    return (
            <React.Fragment>
              {this.state.inventario.map((producto, index)=>(
                    <div key={index} className="col-lg-2 contenedor-card" id="producto">
                      <div className="contenedorCard">
                        <div className="card img">
                          <img
                            className="card__img img-card"
                            src={producto.imagen}
                            alt="Imagen de {producto.nombre} "
                          />
                          <div className="card__text producto-datos">
                            <input value="{producto.id}" type="hidden" />
                            <h3 className="card__title producto-nombre">
                              {producto.nombre}
                            </h3>
                            <p className="precio">"$"{producto.precio}</p>
                            <div>
                              <button value={producto.id} className="agregar-carrito">
                                agregar<i className="bi bi-cart-plus"></i>
                              </button>
                              { <Link className="detalles" to={"productos/"+producto.id}>Detalles</Link> }
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>))}
                  </React.Fragment> 
    )
  };
}
export default AgregarProductos;    
