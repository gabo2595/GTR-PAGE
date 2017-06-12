import React, { Component } from 'react';
import {Div, Div1, Div2, Div3, H1, H3} from './Slide.style';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

/* eslint-disable */
export class Slide extends Component {
	render() {
		return (
			<Div style={{height: '100vh', zIndex: '-99999'}}>
				<div style={{position: 'absolute', top: '35%', width: '100%', color: '#EEEEEE', zIndex: '1'}}>
                	<div className="col-xs-12 col-md-12 text-center">
						<H1 id="h1n">Gabriel Torres</H1>
						<H3 id="h3w">WEB & SOFTWARE DEVELOPER</H3>
					</div>
				</div>
				<React_Bootstrap_Carousel animation={true} className="carousel-fade" slideshowSpeed="6000">
					<Div1/>
					<Div2/>
					<Div3/>
				</React_Bootstrap_Carousel>
			</Div>
		);
	}
}
