import React, { Component } from 'react';
import {Form, Ul, Div1, Div2, Span1, DivThanks} from './ContactForm.style';
/*import GoogleMapReact from 'google-map-react';*/

export class ContactForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			pointerEvents: '',
			color: '',
			backColor: '',
			border: '',
			boxS: '',
		};
	}

	setPointer(){
		this.setState({
			pointerEvents: 'none',
			color: '#666666',
			backColor: '#cccccc',
			border: '1px solid #999999',
			boxS: 'none'
		}); 
		setTimeout(function(){
			this.setState({
				pointerEvents: '',
				color: '',
				backColor: '',
				border: '',
				boxS: '',
			});
		}.bind(this),5000);
	}

	/*static defaultProps = {
	    center: {lat: 10.4805937, lng: -66.90360629999998},
	    zoom: 11
	};*/

	render() {
		return (
			<div className="container-fluid">
				<div style={{height: 560}} className="row">
					<Div1 style={{height: 560, paddingTop: 100}} data-aos="slide-right" data-aos-once="true" data-aos-anchor-placement="top-bottom" className="col-xs-12 col-sm-12 col-md-5">
						<div>
							<h1>Contáctame</h1>
							<h3>¿QUÉ NECESITAS?</h3>
							<p>
								Si estas interesado en mi trabajo o simplemente necesitas
								tu página web, no dudes en contactarme completando el
								siguiente formulario.
							</p>
							<Span1 id="span1" className="glyphicon glyphicon-map-marker"></Span1>
							<h4 style={{display: 'inline-block'}}>Caracas, Venezuela</h4>
							

							{/*const AnyReactComponent = ({ text }) => (
							  <div style={{
							    position: 'relative', color: 'white', background: 'blue',
							    height: 40, width: 60, top: -20, left: -30,    
							  }}>
							    {text}
							  </div>
							);

							static defaultProps = {
							    center: {lat: 10.4805937, lng: -66.90360629999998},
							    zoom: 11
							};


							<div style={{width: '100%', height: '400px'}}>
								<GoogleMapReact
								        defaultCenter={this.props.center}
								        defaultZoom={this.props.zoom}
								      >
								        <AnyReactComponent 
								          lat={10.4805937} 
								          lng={-66.90360629999998} 
								          text={'Caracas'} 
								        />
								</GoogleMapReact>
							</div>*/}
						</div>
					</Div1>
					<Div2 className="col-xs-12 col-sm-12 col-md-7">
						<Form data-aos="fade-in" data-aos-once="true" id="gform" method="POST" action="https://script.google.com/macros/s/AKfycbyxUIvyz_70gCvixgbKix-ZyRtCfIV4rSizDMeSEGKknaw8et60/exec">
							<Ul>
							    <li>
							        <input id="name" type="text" name="Nombre" placeholder="Nombre*" required/>
							    </li>
							    <li>
							        <input id="email" type="email" name="email" placeholder="Email*" required/>
							        <span id="email-invalid" style={{display: 'none'}}>Must be a valid email address</span>
							    </li>
							    <li>
							        <textarea id="message" name="Mensaje" placeholder="Mensaje*" cols="40" rows="6" required/>
							    </li>
							    <li>
							        <button onClick={this.setPointer.bind(this)} style={{pointerEvents: this.state.pointerEvents, color: this.state.color, backgroundColor: this.state.backColor, border: this.state.border, boxShadow: this.state.boxS}} className="sendbtn">Enviar</button>
							    </li>
							</Ul>
						</Form>
						<DivThanks id="thankyou_message">
						    <h2>¡Gracias por escribir!</h2>
						    <h3>Muy pronto me pondré en contacto contigo</h3>
						</DivThanks>
					</Div2>
				</div>
			</div>
		);
	}
}
