import React, { Component } from 'react';
import {Form, Ul, Div1, Div2, Span1, Span2, DivThanks} from './ContactForm.style';

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
		}.bind(this),3000);
	}

	render() {
		return (

			<div className="container-fluid">
				<div className="row">
					<Div1 data-aos="slide-right" data-aos-anchor-placement="top-bottom" className="col-sm-12 col-md-5 hidden-xs">
						<div style={{paddingTop: '13%', paddingBottom: '13%'}}>
							<h1>Contáctame</h1>
							<h3>¿QUÉ NECESITAS?</h3>
							<p>
								Si estas interesado en mi trabajo o simplemente necesitas
								tu página web, no dudes en contactarme completando el
								siguiente formulario.
							</p>
							<Span1 id="span1" className="fontawesome-map-marker">
								<h4>Caracas, Venezuela</h4>
							</Span1>
							<br/>
							<br/>
							<Span2 id="span2" className="fontawesome-envelope-alt">
								<h4>gabo2595@gmail.com</h4>
							</Span2>
						</div>
					</Div1>
					<Div1 className="col-sm-12 col-md-5 visible-xs">
						<div style={{paddingTop: '13%', paddingBottom: '13%'}}>
							<h1>Contáctame</h1>
							<h3>¿QUÉ NECESITAS?</h3>
							<p>
								Si estas interesado en mi trabajo o simplemente necesitas
								tu página web, no dudes en contactarme completando el
								siguiente formulario.
							</p>
							<Span1 id="span1" className="fontawesome-map-marker">
								<h4>Caracas, Venezuela</h4>
							</Span1>
							<br/>
							<br/>
							<Span2 id="span2" className="fontawesome-envelope-alt">
								<h4>gabo2595@gmail.com</h4>
							</Span2>
						</div>
					</Div1>
					<Div2 className="col-xs-12 col-sm-12 col-md-7">
						<div style={{paddingTop: '10%', paddingBottom: '10%'}}>
							<Form id="gform" method="POST" action="https://script.google.com/macros/s/AKfycbyxUIvyz_70gCvixgbKix-ZyRtCfIV4rSizDMeSEGKknaw8et60/exec">
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
						</div>
					</Div2>
				</div>
			</div>
		);
	}
}
