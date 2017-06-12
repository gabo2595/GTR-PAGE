import React, { Component } from 'react';
import {ImageButton, P1, P2, H2, Button, Div, DivRow, ImageButton1} from './About.style';
import Zoomy from 'react-zoomy';
var Scroll = require('react-scroll');
var Link = Scroll.Link;

export class About extends Component {
	render() {
		return (
			<div className="container-fluid">
				<DivRow className="row">
					<div className="col-xs-12 col-sm-12 col-md-6 hidden-sm hidden-md hidden-lg show-xs">
						<ImageButton1 className="pic" data-aos="fade-right" data-aos-duration="1500">
							<img alt="self" style={{width: '100%', height: 'auto'}}
								src={require('assets/self-th2.jpg')}
							/>
						</ImageButton1>
					</div>
					<div className="col-xs-12 col-sm-12 col-md-6 text-center hidden-xs">
						<Zoomy
						    imageUrl={require('assets/self.jpg')}
						    renderThumbnail={({ showImage }) => 
						    	<ImageButton className="pic" data-aos="flip-left" data-aos-duration="1200" onClick={showImage}>
						    		<img alt="self-md" style={{width: '100%', height: 'auto'}}
						    			src={require('assets/self-th2.jpg')}
						    		/>
						    	</ImageButton>
						    }
						    scale={[1.1, 1.1]}
						    imageProps={{
						      style: {
						        width: '100%',
						        height: 'auto',
						      }
						    }}
						/>
					</div>
					<div data-aos="fade-up" data-aos-duration="1200" className="col-xs-12 col-sm-12 col-md-6">
						<H2 className="myName">Acerca de mi</H2>
						<P1 className="P1">
					   	¡Hola!, mi nombre es Gabriel Torres Ruiz, soy estudiante de la carrera Ingeniería de Computación
					   	en la Universidad Simón Bolívar. En general, me considero una persona responsable, de rápido aprendizaje y 
					   	pro-activo. Me gusta esforzarme en todo lo que hago y estoy acostumbrado a siempre ir un poco más
					   	allá. Se me da muy bien relacionarme con otras personas, por lo que estoy muy familiarizado en 
					   	trabajar en equipo, tanto a nivel laboral como a nivel personal.
					  	</P1>
					  	<P2 className="P2">
					  	He tenido experiencias en las cuales me ha tocado influenciar a las personas
					  	de un equipo para cumplir un objetivo final y se me da muy bien esta tarea, ya que soy muy comprometido
					  	con las cosas que realizo. Soy amante de los deportes y en especial de las nuevas tecnologías, me gusta investigar y leer
					  	sobre ellas para siempre estar actualizado y no quedarme atrás en este mundo en constante crecimiento.
					    </P2>
					    <Div className="contactbtn">
						    <Button>
						    	<Link style={{width: '100%', textDecoration: 'none', color: '#023C68', WebkitTransition: 'all .3s linear', MozTransition: 'all .3s linear', MsTransition: 'all .3s linear', OTransition:  'all .3s linear', transition: 'all .3s linear'}} activeClass="active" to="test4" spy={true} smooth={true} offset={0} duration={2100} delay={200}>Contacto</Link>
						    </Button>
					  	</Div>
					</div>
				</DivRow>
			</div>
		);
	}
}
