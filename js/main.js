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
		if(producto.id <= 6)	{
			$('#agregar-productos').prepend(`<div class="col-lg-2 contenedor-card" id="producto">
												<div class="contenedorCard">
													<div class="card img">
													 	<img class="card__img img-card" src="${producto.imagen} " alt="Imagen de ${producto.nombre} ">
		                                             	<div class="card__text ">
		                                             	    <input value="${producto.id}" type="hidden">
		                                             	    <h3 class="card__title ">${producto.nombre}</h3>
		                                             	    <p class="precio">$${producto.precio}</p>
		                                             	<div>
		                                             	    <button id="boton${producto.id}" class="" style="margin-bottom:3px;margin-left:3px">agregar</button>
		                                             	</div>
													</div>
												</div>
											</div>
											`)
		}
	}
}