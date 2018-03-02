import React, { Component } from 'react';
import {DivContainerMain, SpanLeft, SpanRight, H1, H3} from './Main.style';

export class Main extends Component {
	render() {
		return (
			<div id="pruebah1" style={{height: '100vh', maxHeight: '100vh'}}>
				<DivContainerMain id="mainCarouselAgrochanneltv" className="carousel slide caption-animate control-round indicators-line" data-ride="carousel" data-interval="5000">
				  	<ol className="carousel-indicators">
				   		<li data-target="#mainCarouselAgrochanneltv" data-slide-to="0" className="active"></li>
					    <li data-target="#mainCarouselAgrochanneltv" data-slide-to="1"></li>
					    <li data-target="#mainCarouselAgrochanneltv" data-slide-to="2"></li>
				  	</ol>
		  	    	<div style={{position: 'absolute'}} className="container-fluid">
		  	    		{/*<div className="background"></div>*/}
		  	    		<div className="footer-carousel">
		  	    			<div id="pruebah1" style={{paddingLeft: 0, paddingRight: 0}} className="col-xs-12 col-sm-12 col-md-12 text-left">
		  		    			<H1 className="carousel-caption1 fadeInLeft">Gabriel Torres</H1>
		  					    <H3 className="carousel-caption2 fadeIn">
		  					    	WEB & SOFTWARE DEVELOPER
		  					    </H3>
		  					</div>
		  	    		</div>
		  	    	</div>
				  	<div id='innerCarousel' className="carousel-inner" role="listbox">
				    	<div id="pruebaImg" className="item active"></div>
				    	<div id="pruebaImg2" className="item"></div>
				    	<div id="pruebaImg3" className="item"></div>
				  	</div>
				  	<a className="left carousel-control" href="#mainCarouselAgrochanneltv" role="button" data-slide="prev">
				      	<SpanLeft className="glyphicon glyphicon-menu-left" aria-hidden="true"></SpanLeft>
				      	<span className="sr-only">Previous</span>
				  	</a>
				  	<a className="right carousel-control" href="#mainCarouselAgrochanneltv" role="button" data-slide="next">
				      	<SpanRight className="glyphicon glyphicon-menu-right" aria-hidden="true"></SpanRight>
				      	<span className="sr-only">Next</span>
				  	</a>
				</DivContainerMain>
			</div>
		);
	}
}