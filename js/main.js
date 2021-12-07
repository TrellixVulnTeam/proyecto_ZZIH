let obj = [1,2]
let val1 = obj[0]
let val2 = obj[1]
let [val3,val4] = obj
console.log([obj])








/*cargamos nuestro stock del archibo json local*/
let stockProductos = []
function cargandoStock() {
	let stock = JSON.parse(localStorage.getItem('stock'))
	if(stock){
		stock.forEach(el => stockProductos.push(el) )
	}
}

$.getJSON("data/stock.json", function (data) {
	localStorage.setItem('stock',JSON.stringify(data))
	cargandoStock()
	inventario(data)
})
/*terminamos de cargar nuestro stock*/
function inventario(array) {
	for(const producto of array){
		if(producto.id <= 6){
			$('#agregar-productos').prepend(`<div class="col-lg-2 contenedor-card" id="producto">
												<div class="contenedorCard">
													<div class="card img">
													 	<img class="card__img img-card" src="${producto.imagen} " alt="Imagen de ${producto.nombre} ">
		                                             	<div class="card__text producto-datos">
		                                             	    <input value="${producto.id}" type="hidden">
		                                             	    <h3 class="card__title producto-nombre">${producto.nombre}</h3>
		                                             	    <p class="precio">$${producto.precio}</p>
		                                             	<div>
		                                             	    <button id="boton${producto.id}" class="agregar-carrito" style="margin-bottom:3px;margin-left:3px">agregar<i class="bi bi-cart-plus"></i></button>
		                                             	</div>
													</div>
												</div>
											</div>
											`)
		}else if (producto.id > 6 & (producto.id <= 12) ) {
			$('#agregar-productos-dos').prepend(`<div class="col-lg-2 contenedor-card" id="producto">
												<div class="contenedorCard">
													<div class="card img">
													 	<img class="card__img img-card" src="${producto.imagen} " alt="Imagen de ${producto.nombre} ">
		                                             	<div class="card__text producto-datos">
		                                             	    <input value="${producto.id}" type="hidden">
		                                             	    <h3 class="card__title producto-nombre">${producto.nombre}</h3>
		                                             	    <p class="precio">$${producto.precio}</p>
		                                             	<div>
		                                             	    <button id="boton${producto.id}" class="agregar-carrito" style="margin-bottom:3px;margin-left:3px">agregar<i class="bi bi-cart-plus"></i></button>
		                                             	</div>
													</div>
												</div>
											</div>
											`)
		}
	}
}
