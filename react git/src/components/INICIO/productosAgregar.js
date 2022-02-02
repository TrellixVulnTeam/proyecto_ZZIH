import { Link } from "react-router-dom";
import React from "react";
import inventario from "./../../data/inventario";

  const Contexto = React.createContext({
    inventario
 })        
 class prod extends React.Component{
     render(){
         return(
             <Contexto.Provider value={{
                inventario
             }}>
 
             </Contexto.Provider>
         )
     }
 }
 
 class AgregarProductos extends React.Component{
  
  render(){
         return(
             <Contexto.Consumer>
                {value => { 
                    return(
                     <React.Fragment>
                         {value.inventario.map(producto =>
                             <div  className="col-lg-4 contenedor-card" id="producto">
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
                                   <p className="precio">${producto.precio}</p>
                                   <div>
                                     <p className="color">{producto.caracteristica}</p>
                                   </div>
                                 </div>
                               </div>
                             </div>
                           </div>
                             )}
                     </React.Fragment>
                    )
                }}
             </Contexto.Consumer>
         )
     }
 }
 


export default AgregarProductos;    
