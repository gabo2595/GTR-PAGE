import React, { Component } from 'react';
import {ImageButton, P1, P2, H2, Button, Div, DivRow, DivAboutMe} from './About.style';
import Zoomy from 'react-zoomy';
var Scroll = require('react-scroll');
var Link = Scroll.Link;

export class About extends Component {
	render() {
		return (
			<div style={{backgroundColor: 'white', paddingTop: 30, paddingBottom: 20}} className="container-fluid">
				<DivRow className="row">
					<div className="col-xs-12 col-sm-12 col-md-6 text-center">
						<Zoomy
						    imageUrl={require('assets/prueba/Self-2.7cf7a3cd.jpg')}
						    renderThumbnail={({ showImage }) => 
						    	<ImageButton className="pic" data-aos="flip-left" data-aos-duration="1200" data-aos-once="true" onClick={showImage}>
						    		<img alt="self-md" style={{width: '100%', height: 'auto'}}
						    			src={require('assets/prueba/Self-2.7cf7a3cd.jpg')}
						    		/>
						    	</ImageButton>
						    }
						    scale={[1.1, 1.1]}
						    imageProps={{
						      style: {
						        width: '85%',
						        height: 'auto',
						      }
						    }}
						/>
					</div>
					<DivAboutMe data-aos="slide-up" data-aos-once="true" data-aos-duration="1000" className="col-xs-12 col-sm-12 col-md-6">
						<H2 className="myName">Acerca de mi</H2>
						<P1 className="P1">
					   	¡Hola! Mi nombre es Gabriel Torres Ruiz, fui estudiante de Ingeniería de Computación en la Universidad
					   	Simón Bolívar y ahora resido en Montevideo Uruguay continuando mi carrera en la Universidad de la República
					   	de Uruguay. En general, me considero una persona responsable, de rápido aprendizaje y pro-activo. Me gusta
					   	esforzarme en todo lo que hago y estoy acostumbrado a siempre ir un poco más allá. Se me da muy bien
					   	relacionarme con otras personas, por lo que estoy muy familiarizado en trabajar en equipo, tanto a nivel
					   	laboral como a nivel personal.
					  	</P1>
					  	<P2 className="P2">
					  	He tenido experiencias en las cuales me ha tocado influenciar a las personas
					  	de un equipo para cumplir un objetivo final y se me da muy bien esta tarea. Soy amante de los deportes y en especial de las nuevas tecnologías, me gusta
					  	investigar y leer sobre ellas para siempre estar actualizado y no quedarme atrás dentro de este mundo en
					  	constante crecimiento.
					    </P2>
					    <Div className="contactbtn">
						    <Button>
						    	<Link style={{width: '100%', textDecoration: 'none', color: '#003067', WebkitTransition: 'all .3s linear', MozTransition: 'all .3s linear', MsTransition: 'all .3s linear', OTransition:  'all .3s linear', transition: 'all .3s linear'}} activeClass="active" to="test4" spy={true} smooth={true} offset={0} duration={2100} delay={200}>Contacto</Link>
						    </Button>
					  	</Div>
					</DivAboutMe>
				</DivRow>
			</div>
		);
	}
}
