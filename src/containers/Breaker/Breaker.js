import React, { Component } from 'react';
import {DivContainer} from './Breaker.style';

export class Breaker extends Component {
	render() {
		return (
			<DivContainer className="container-fluid">
				<div id="breakimg" className="row">
					<div style={{opacity: '1!important'}} data-aos="fade-in" data-aos-once="true" className="text-center">
						<h1>"La innovación es lo que distingue a un líder de los demás".</h1>
						<h3 style={{textAlign: 'right'}}>Steve Jobs</h3>
					</div>
				</div>
			</DivContainer>
		);
	}
}
