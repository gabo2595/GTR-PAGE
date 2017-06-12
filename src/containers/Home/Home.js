import React, { Component } from 'react'; 
import {DivArrow, SpanR} from './Home.style';

import {Navbar} from '../Navbar/Navbar';
import {Slide} from '../Slide/Slide';
import {About} from '../About/About';
import {Skills} from '../Skills/Skills';
import {Breaker} from '../Breaker/Breaker';
import {Portfolio} from '../Portfolio/Portfolio';
import {ContactForm} from '../ContactForm/ContactForm';
import {Footer} from '../Footer/Footer';


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
				<Waypoint onEnter={this.setClassN.bind(this, "none")}/>
				<Navbar classN={this.state.classN}/>
				<Element name="test0"></Element>
				<Slide/>
				<DivArrow className="arrow animated bounce">
					<Link style={{textDecoration: 'none'}} activeClass="active" to="test1" spy={true} smooth={true} offset={-20} duration={1000} delay={200}>
						<SpanR style={{fontSize: '50px', color: 'white'}} className="typicons-next"></SpanR>
					</Link>
				</DivArrow>
				<br/>
				<Element name="test1">
					<Waypoint onEnter={this.setClassN.bind(this, "shrink")}/>
					<About/>
				</Element>
				<Element name="test2">
					<Skills/>
				</Element>
				<Breaker/>
				<Element name="test3">
					<Portfolio/>
				</Element>
				<Element name="test4" style={{zIndex: '-100'}}>
					<ContactForm/>
				</Element>
				<Footer/>
			</div>
		);
	}
}
