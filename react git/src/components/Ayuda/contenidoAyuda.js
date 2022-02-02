import React from 'react'
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';

class Ayuda extends React.Component {
	constructor(props){
		super(props);
		this.state={
			ayuda:''
		}
		this.onChange = this.onChange.bind(this)
		this.enviarAyuda = this.enviarAyuda.bind(this)
	}
	onChange(e){
		let ayudando = e.target.name
		let ayuda = e.target.value
		this.setState({
			[ayudando]:ayuda
		})
		console.log(this.state)
	}
	enviarAyuda(e){
		e.preventDefault()
	}
	render(){	
		return(
			<React.Fragment>
				<section  >
					<article className="ofertas">
						<h1 className="enque">¿En que te podemos ayudar?</h1>
					</article>
				</section>
				
				<section>
				<article>
					<ul className="creare">  
						<Form onSubmit={this.enviarAyuda}>
							<FormGroup>
								<Label>¿En que lo podemos ayudar?</Label>
								<Input className='ayuda' type='textArea' name='ayuda' value={this.state.ayuda} onChange={this.onChange}/>
							</FormGroup>
							<FormGroup>
								<Button type='submit' name='pedirAyuda' >Pedir Ayuda</Button>
							</FormGroup>
						</Form>
					</ul>
				</article>
				</section> 
			</React.Fragment>
			)}
}
export default Ayuda