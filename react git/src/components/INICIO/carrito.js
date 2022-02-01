import React from 'react';
import {userReducer} from 'react';
import {shopingReducer, CarritoInicio} from "./carrito/reductor";
import inventario from './../../data/inventario'
import carro from './carrito/reductor'
import productItem from './carrito/productItem';
export default carrito
function carrito() {
	const {state, dispatch} = userReducer(shopingReducer,CarritoInicio)
	const [inventario, carro] = state;
	const agregarAlCarrito = (id)=> {
		console.log(id)
	}
	const eliminarDelCarrito = ()=>{

	}
	const limpiarCarrito = ()=>{

	}
	
}