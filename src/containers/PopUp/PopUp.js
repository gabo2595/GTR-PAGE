import React, { Component } from 'react';
import {DivPopUp} from './PopUp.style';

export class PopUp extends Component {
	render() {
		return (
			<DivPopUp style={{visible: 'hidden', opacity: '0', zIndex: -1}} id="popup1" className="overlay">
				<div className="popup">
					<div style={{textAlign: 'center', paddingBottom: 20, paddingTop: 20}}>
						<img alt="Logo GTR" style={{height: 100, width: 180}} src={require('assets/prueba/LogoPrueba.d641316a.png')}/>
					</div>
					<h2>¡Gracias por escribir!</h2>
					<span id="close-btn" className="close">&times;</span>
					<div className="content">
						Pronto me pondré en contacto contigo
					</div>
				</div>
			</DivPopUp>
		);
	}
}
