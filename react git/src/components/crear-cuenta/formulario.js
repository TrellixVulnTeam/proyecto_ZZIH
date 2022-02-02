import React from 'react'
import {Input, Form, FormGroup, Label, Button, FormFeedback } from 'reactstrap'
class Formulario extends React.Component{
    constructor(props){
        super(props)
        this.state={
            nombre:'',
            correo:'',
            edad:'',
            direccion:'',
            mensajeNombre:'',
            mensajeCorreo:'',
            mensajeEdad:'',
            mensajeDireccion:'',
            invalidNombre:false,
            invalidCorreo:false,
            invalidEdad:false,
            invalidDireccion:false,
        }
        this.onChange = this.onChange.bind(this)
        this.enviarABd = this.enviarABd.bind(this)
    }
    onChange(e){
        let name = e.target.name;
        let value = e.target.value
        this.setState({
            [name]:value,
        })
    }
    enviarABd(e){
        e.preventDefault()
        let valido = true;
        if(this.state.nombre === ''){
            this.setState({
                invalidNombre:true,
                mensajeNombre:'El nombre es obligatorio',
            })
            valido=false;
        }
        if(this.state.nombre === ''){
            this.setState({
                invalidCorreo:true,
                mensajeCorreo:'El correo es obligatorio',
            })
            valido=false;
        }
        if(this.state.nombre === ''){
            this.setState({
                invalidEdad:true,
                mensajeEdad:'La edad es obligatoria',
            })
            valido=false;
        }
        if(this.state.nombre === ''){
            this.setState({
                invalidDireccion:true,
                mensajeDireccion:'La direccion es obligatoria'
            })
            valido=false;
        }
        if(valido){
            console.log(this.state)
        }
    }
    render(){
        return(
            <React.Fragment>
                <section >
                    <article className="chachara">	
                        <h1 className="ofertas">Creá tu cuenta</h1>
                    </article>
			    </section>
                <section>
                    <article>
                        <ul className="creare">
                            <Form onSubmit={this.enviarABd} className="ulfondo" id= "formulario">
                               
                               <FormGroup>
                                    <Label>Nombre y Apellido</Label>
                                    <Input id="nombre" type="text" name="nombre" value={this.state.nombre} invalid={this.state.invalidNombre} onChange={this.onChange}  placeholder="nombre y apellido" className="nombre"/>
                                    <FormFeedback>{this.state.mensajeNombre}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Correo Electronico</Label>
                                    <Input type="mail" name="correo"  value={this.state.correo} onChange={this.onChange} invalid={this.state.invalidCorreo} id="correo" placeholder="correo electronico" className="correo"/>
                                    <FormFeedback>{this.state.mensajeCorreo}</FormFeedback>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Edad</Label>			
                                    <Input type="number" name='edad' value={this.state.edad} onChange={this.onChange} invalid={this.state.invalidEdad} id="edad" placeholder="cual es su edad"/>
                                    <FormFeedback>{this.state.mensajeEdad}</FormFeedback>
                                </FormGroup>     
                                <FormGroup>
                                    <Label>Direccion</Label>
                                    <Input type="text" value={this.state.direccion} onChange={this.onChange} invalid={this.state.invalidDireccion}  id="direccion" name="direccion" placeholder="direccion" className="bar"/>
                                    <FormFeedback>{this.state.mensajeDireccion}</FormFeedback>
                                </FormGroup>    
                                <FormGroup>  
                                    <Button type='submit' name='enviar'>Guardar</Button>	
                                </FormGroup>
                            </Form>	
                        </ul>
                    </article>
                </section>			
            </React.Fragment>
        )
    }
}
export default Formulario