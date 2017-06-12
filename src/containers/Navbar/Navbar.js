import React from 'react';
import {Nav, Ul, Div1, Li, DivContainer, DivButton, Img, DivImg, DivHeader} from './Navbar.style';
var Scroll = require('react-scroll');
var Link = Scroll.Link;

export const Navbar = (props) => {
	return (
		<Nav id={props.classN} className="navbar navbar-inverse navbar-fixed-top">
			<DivContainer className="container-fluid">
			    <DivHeader id="header" className="navbar-header">
			    	<DivButton type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
			    		<span className="sr-only">Toggle navigation</span>
		              	<span className="icon-bar top-bar"></span>
		              	<span className="icon-bar middle-bar"></span>
		              	<span className="icon-bar bottom-bar"></span>
		           	</DivButton>
		       		<Link style={{textDecoration: 'none', color: '#CECECE', cursor: 'pointer'}} activeClass="active" to="test0" spy={true} smooth={true} offset={-10} duration={1400} delay={200}>
			       		<DivImg id="divimg">
			       			<Img alt="self" src={require('assets/logo8-self-xs.png')}/>
						</DivImg>
		       		</Link>
			    </DivHeader>

			    <Div1 className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			    	<Ul className="nav navbar-nav navbar-right">
			    		<Li>
			    			<Link className="hidden-xs" style={{textDecoration: 'none', padding: '8px 15px 8px 15px', color: '#EEEEEE'}} activeClass="active" to="test0" spy={true} smooth={true} offset={-10} duration={1400} delay={200}>INICIO</Link>
			    			<Link className="visible-xs" data-toggle="collapse" data-target=".navbar-collapse" style={{textAlign: 'center', textDecoration: 'none', padding: '12px 15px 12px 15px', color: '#EEEEEE'}} to="test0" spy={true} smooth={true} offset={-10} duration={1400} delay={200}>INICIO</Link>
			    		</Li>
						<Li>
							<Link className="hidden-xs" style={{textDecoration: 'none', padding: '8px 15px 8px 15px', color: '#EEEEEE'}} activeClass="active" to="test1" spy={true} smooth={true} offset={-20} duration={1000} delay={200}>ACERCA DE MI</Link>
							<Link className="visible-xs" data-toggle="collapse" data-target=".navbar-collapse" style={{textAlign: 'center', textDecoration: 'none', padding: '12px 15px 12px 15px', color: '#EEEEEE'}} activeClass="active" to="test1" spy={true} smooth={true} offset={0} duration={1000} delay={200}>ACERCA DE MI</Link>
						</Li>
						<Li>
							<Link className="hidden-xs" style={{textDecoration: 'none', padding: '8px 15px 8px 15px', color: '#EEEEEE'}} activeClass="active" to="test2" spy={true} smooth={true} offset={0} duration={1000} delay={200}>HABILIDADES</Link>
							<Link className="visible-xs" data-toggle="collapse" data-target=".navbar-collapse" style={{textAlign: 'center', textDecoration: 'none', padding: '12px 15px 12px 15px', color: '#EEEEEE'}} activeClass="active" to="test2" spy={true} smooth={true} offset={0} duration={1000} delay={200}>HABILIDADES</Link>
						</Li>
						<Li>
							<Link className="hidden-xs" style={{textDecoration: 'none', padding: '8px 15px 8px 15px', color: '#EEEEEE'}} activeClass="active" to="test3" spy={true} smooth={true} offset={0} duration={1000} delay={200}>PORTAFOLIO</Link>
							<Link className="visible-xs" data-toggle="collapse" data-target=".navbar-collapse" style={{textAlign: 'center', textDecoration: 'none', padding: '12px 15px 12px 15px', color: '#EEEEEE'}} activeClass="active" to="test3" spy={true} smooth={true} offset={0} duration={1000} delay={200}>PORTAFOLIO</Link>
						</Li>
						<Li>
							<Link className="hidden-xs" style={{textDecoration: 'none', padding: '8px 15px 8px 15px', color: '#EEEEEE'}} activeClass="active" to="test4" spy={true} smooth={true} offset={0} duration={2100} delay={200}>CONTACTO</Link>
							<Link className="visible-xs" data-toggle="collapse" data-target=".navbar-collapse" style={{textAlign: 'center', textDecoration: 'none', padding: '12px 15px 12px 15px', color: '#EEEEEE'}} activeClass="active" to="test4" spy={true} smooth={true} offset={0} duration={1400} delay={200}>CONTACTO</Link>
						</Li>
		    	        
		    	    </Ul>
			    </Div1>
		  	</DivContainer>
		</Nav>
	);
}
