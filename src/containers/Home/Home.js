import React, { Component } from 'react'; 
import {DivArrow, SpanR} from './Home.style';

import {Navbar} from '../Navbar/Navbar';
import {About} from '../About/About';
import {Skills} from '../Skills/Skills';
import {Breaker} from '../Breaker/Breaker';
import {Portfolio} from '../Portfolio/Portfolio';
import {ContactForm} from '../ContactForm/ContactForm';
import {Footer} from '../Footer/Footer';
import {PopUp} from '../PopUp/PopUp';
import {ArrowUp} from '../ArrowUp/ArrowUp';
import {Main} from '../Main/Main';


import Waypoint from 'react-waypoint';
import AOS from 'aos';

AOS.init({
	duration: '1000',
	easing: 'ease-in-out',
});

var Scroll = require('react-scroll');
var Link = Scroll.Link;
var Element = Scroll.Element;

export class Home extends Component {
	constructor(props){
		super(props);
		this.state = {
			classN: 'none',
		};
	}

	setClassN(msg){
		this.setState({classN: msg});
	}

	render() {
		return (

			<div>
				<Navbar classN={this.state.classN}/>
				<Waypoint onEnter={this.setClassN.bind(this, "none")}/>
				<PopUp/>
				<Element name="test0"></Element>
				<Main/>
				<ArrowUp/>
				<DivArrow className="arrow animated bounce">
					<Link style={{textDecoration: 'none'}} activeClass="active" to="test1" spy={true} smooth={true} offset={0} duration={1000} delay={200}>
						<SpanR className="glyphicon glyphicon-menu-down"></SpanR>
					</Link>
				</DivArrow>
				<br/>
				<Element name="test1">
					<Waypoint onEnter={this.setClassN.bind(this, "shrink")}/>
					<About/>
				</Element>
				<Breaker/>
				<Element name="test2">
					<Skills/>
				</Element>
				<Element name="test3">
					<Portfolio/>
				</Element>
				<Element name="test4">
					<ContactForm/>
				</Element>
				<Footer/>
			</div>
		);
	}
}
