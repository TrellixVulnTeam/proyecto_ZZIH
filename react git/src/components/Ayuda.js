import { Link } from 'react-router-dom';
import React from 'react'
import NavComponents from './INICIO/Nav'
import Ayuda from './Ayuda/contenidoAyuda'
import Footer from './INICIO/footer'
export default Ayudar
function Ayudar() {
	return(
		<React.Fragment>
			<NavComponents/>
			<Ayuda/>
			<Footer/>
		</React.Fragment>
		)
}