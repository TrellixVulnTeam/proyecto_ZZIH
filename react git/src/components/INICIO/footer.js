import React, { useReducer } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.css'

class Footer extends React.Component{
	
	state={
		abierto:false
	}
	abrirModal= ()=>{
		this.setState({abierto: !this.state.abierto})}
	
	render(){ 
		return(
			<React.Fragment>	
				<footer>
					<div>
						<div>
							<button id="boton-carrito" className="ub"><i onClick={this.abrirModal} className="bi bi-cart4"><span id="contadorCarrito">0</span></i></button>
						</div>	
						<div>
							<section>
								<article >
									<h1 className="gracias">Gracias por elegirnos</h1>
								</article>
							</section>
						</div>	
					</div>
				</footer>
				<div className='modal-contenedor'>	
					<Modal isOpen={this.state.abierto} className='modal-carrito'>
						<ModalHeader>
							<p>carrito</p>
							<button ><i onClick={this.abrirModal}>x</i></button>
						</ModalHeader>
						
						<ModalBody className='row'>
							{/* {inventario.map((product)=> <AgregarProductos ket={product.id} data={product} agregarAlCarrito={agregarAlCarrito}/>) } */}
						</ModalBody>
						
						<ModalFooter>
							<p>

							</p>
						</ModalFooter>
					</Modal>
				</div>
				
			</React.Fragment>
			)}
		
		}
export default Footer