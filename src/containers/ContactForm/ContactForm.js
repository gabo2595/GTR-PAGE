import React, { Component } from 'react';
import {Form, Ul, Div1, Div2, DivMap} from './ContactForm.style';
import GoogleMapReact from 'google-map-react';

export class ContactForm extends Component {
	static defaultProps = {
	    center: {lat: -34.9011127, lng: -56.16453139999999},
	    zoom: 12
	};

	render() {
		const AnyReactComponent = ({ text }) => (
			<span className="glyphicon glyphicon-map-marker" style={{
				position: 'relative', color: 'red', fontSize: 30,
				top: -35, left: -15,
			}}>
			</span>
		);

		const GoogleMapConfig = {
			key: 'AIzaSyCHT4hhzO0WH8c8i5CoKVWWIvRRHoGgDn8',
			libraries: 'places',
		};
		return (
			<div className="container-fluid">
				<div style={{height: 560}} className="row">
					<Div1 className="col-xs-12 col-sm-12 col-md-5">
						<div>
							<h1>Contáctame</h1>
							<h3>¿QUÉ NECESITAS?</h3>
							<p>
								Si estas interesado en mi trabajo o simplemente necesitas
								tu página web, no dudes en contactarme completando el
								siguiente formulario.
							</p>							
							<DivMap>
								<GoogleMapReact
									bootstrapURLKeys={GoogleMapConfig}
							        defaultCenter={this.props.center}
							        defaultZoom={this.props.zoom}
								>
							        <AnyReactComponent 
							          lat={-34.9011127}
							          lng={-56.16453139999999}
							        />
								</GoogleMapReact>
							</DivMap>
						</div>
					</Div1>
					<Div2 className="col-xs-12 col-sm-12 col-md-7">
						<Form data-aos="fade-in" data-aos-once="true" id="gform" method="POST" action="https://script.google.com/macros/s/AKfycbyxUIvyz_70gCvixgbKix-ZyRtCfIV4rSizDMeSEGKknaw8et60/exec">
							<Ul>
							    <li>
							        <input id="name" type="text" name="Nombre" placeholder="Nombre*" required/>
							    </li>
							    <li>
							        <input id="Email" type="email" name="Email" placeholder="Email*" required/>
							        <span id="email-invalid" style={{display: 'none'}}>Must be a valid email address</span>
							    </li>
							    <li>
							        <textarea id="message" name="Mensaje" placeholder="Mensaje*" cols="40" rows="6" required/>
							    </li>
							    <li>
							        <button id="submit-button" className="sendbtn">Enviar</button>
							    </li>
							</Ul>
						</Form>
					</Div2>
				</div>
			</div>
		);
	}
}
