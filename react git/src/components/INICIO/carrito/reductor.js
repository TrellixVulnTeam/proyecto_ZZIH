import inventario from "./../../../data/inventario"
import {TYPES} from "./cartActions" 

export const CarritoInicio = {
	inventario,
	carro:[],
}

export function shopingReducer (state, action) {
	switch (action.type){
		case TYPES.agregarAlCarrito:{

		}
		case TYPES.removerUno:{
			
		}
		case TYPES.removerProducto:{
			
		}
		case TYPES.limpiarCarrito:{
			
		}

		default:
			return state;
	
	}
}