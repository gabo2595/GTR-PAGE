import React, { Component } from 'react';
import {DivRow, Div0, Div1, Div2, Div3, Div4, Button, Div, Ul} from './Skills.style';

export class Skills extends Component {
	constructor(props){
		super(props);
		this.state = {
			classF1: false,
			classF2: false,
			classF3: false,
			classF4: false
		};
	}

	setClassF1(){
		this.setState({
			classF1: !this.state.classF1
		});
	}

	setClassF2(){
		this.setState({
			classF2: !this.state.classF2
		});
	}

	setClassF3(){
		this.setState({
			classF3: !this.state.classF3
		});
	}

	setClassF4(){
		this.setState({
			classF4: !this.state.classF4
		});
	}

	render() {
		return (
			<div className="container-fluid">
				<DivRow className="row">
					<Div0 data-aos="fade-right" data-aos-duration="500" data-aos-once="true" className="col-xs-12 col-sm-12 col-md-12">
						<h1>Habilidades</h1>
					</Div0>
					<Div1 data-aos="fade-up" data-aos-once="true" className="col-xs-12 visible-xs">
						<div style={{width: '70%', margin: '0 auto'}}>
							<section className="cont">
							  <div id="card" className={this.state.classF1}>
							    <figure style={{overflow: 'hidden'}} className="front">
							    	<div style={{paddingTop: '5px', margin: '0 auto', backgroundColor: '#003067', borderRadius: '1000px', width: '120px', height: '120px'}}>
							    		<img alt="img" style={{width: '95px', height: '95px'}} src={require('assets/react-logo-xs.png')}/>
							    	</div>
							    	<h2>Front-End</h2>
							    	<p>Interfaz de usuario adaptable, totalmente responsivo para 
							    	   funcionar en todo tipo de plataformas y desarrollado con 
							    	   las últimas tecnologías del mercado
							    	</p>
							    </figure>
							    <figure className="back">
							    	<p>Dominio de lenguajes y librerías de front-end:</p>
							    	<Ul>
							    		<li style={{paddingBottom: '10px'}}>HTML5</li>
							    		<li style={{paddingBottom: '10px'}}>CSS3</li>
							    		<li style={{paddingBottom: '10px'}}>Bootstrap</li>
							    		<li style={{paddingBottom: '10px'}}>JavaScript</li>
							    		<li style={{paddingBottom: '10px'}}>jQuery</li>
							    		<li style={{paddingBottom: '10px'}}>ReactJS</li>
							    	</Ul>
							    </figure>
							  </div>
							</section>
							<Div>
								<Button onClick={this.setClassF1.bind(this)}>Leer más...</Button>
							</Div>
						</div>
					</Div1>
					<Div1 data-aos="fade-up" data-aos-once="true" className="col-sm-6 col-md-3 hidden-xs">
						<div style={{width: '75%', margin: '0 auto'}}>
							<section className="cont">
							  <div id="card" className={this.state.classF1}>
							    <figure style={{overflow: 'auto'}} className="front">
							    	<div style={{paddingTop: '5px', margin: '0 auto', backgroundColor: '#003067', borderRadius: '1000px', width: '120px', height: '120px'}}>
							    		<img alt="img" style={{width: '95px', height: '95px'}} src={require('assets/react-logo-xs.png')}/>
							    	</div>
							    	<h2>Front-End</h2>
							    	<p>Interfaz de usuario adaptable, totalmente responsivo
							    	   para funcionar en todo tipo de plataformas y desarrollado
							    	   con las últimas tecnologías del mercado
							    	</p>
							    </figure>
							    <figure className="back">
							    	<p>Dominio de lenguajes y librerías de front-end:</p>
							    	<Ul>
							    		<li>HTML5</li>
							    		<li>CSS3</li>
							    		<li>Bootstrap</li>
							    		<li>JavaScript</li>
							    		<li>jQuery</li>
							    		<li>ReactJS</li>
							    	</Ul>
							    </figure>
							  </div>
							</section>
							<Div>
								<Button onClick={this.setClassF1.bind(this)}>Leer más...</Button>
							</Div>
						</div>
					</Div1>
					<Div2 data-aos="fade-up" data-aos-once="true" className="col-xs-12 visible-xs">
						<div style={{width: '70%', margin: '0 auto'}}>
							<section className="cont">
							  <div id="card1" className={this.state.classF2}>
							    <figure style={{overflow: 'hidden'}} className="front">
							    	<div style={{paddingTop: '28px', margin: '0 auto', backgroundColor: '#A0F138', borderRadius: '1000px', width: '120px', height: '120px'}}>
							    		<img alt="img" style={{width: '100px', height: '65px'}} src={require('assets/nodejs-logo-xs.png')}/>
							    	</div>
							    	<h2>Back-End</h2>
							    	<p>
							    		Comunicación eficiente entre los datos y la interfaz de usuario
							    		para el disfrute total de la aplicación web, con las exigencias
							    		que demanda el mercado actual
							    	</p>
							    </figure>
							    <figure className="back">
							    	<p>
							    		Manejo de lenguajes de programación, frameworks MVC y herramientas
							    		de desarrollo web:
							    	</p>
							    	<div className="row">
							    		<div style={{paddingLeft: '15px', paddingRight: '0px'}} className="col-xs-6 col-sm-6 col-md-6">
									    	<Ul>
									    		<li>Python</li>
									    		<li>Java</li>
									    		<li>NodeJS</li>
									    	</Ul>
									    </div>
									    <div style={{paddingLeft: '0px', paddingRight: '0px'}} className="col-xs-6 col-sm-6 col-md-6">
									    	<Ul>
									    		<li style={{paddingLeft: '10px'}}>Express</li>
									    		<li style={{paddingLeft: '10px'}}>Web2py</li>
									    		<li style={{paddingLeft: '10px'}}>Django</li>
									    	</Ul>
									    </div>
									</div>
							    </figure>
							  </div>
							</section>
							<Div>
								<Button onClick={this.setClassF2.bind(this)}>Leer más...</Button>
							</Div>
						</div>
					</Div2>
					<Div2 data-aos="fade-up" data-aos-delay="200" data-aos-once="true" className="col-sm-6 col-md-3 hidden-xs">
						<div style={{width: '75%', margin: '0 auto'}}>
							<section className="cont">
							  <div id="card1" className={this.state.classF2}>
							    <figure style={{overflow: 'auto'}} className="front">
							    	<div style={{paddingTop: '28px', margin: '0 auto', backgroundColor: '#A0F138', borderRadius: '1000px', width: '120px', height: '120px'}}>
							    		<img alt="img" style={{width: '100px', height: '65px'}} src={require('assets/nodejs-logo-xs.png')}/>
							    	</div>
							    	<h2>Back-End</h2>
							    	<p>
							    		Comunicación eficiente entre los datos y la interfaz de usuario
							    		para el disfrute total de la aplicación web, con las exigencias
							    		que demanda el mercado actual
							    	</p>
							    </figure>
							    <figure className="back">
							    	<p>
							    		Dominio de lenguajes de programación, frameworks MVC y herramientas
							    		de desarrollo web:
							    	</p>
							    	<div className="row">
							    		<div style={{paddingLeft: '0px', paddingRight: '0px'}} className="col-xs-6 col-sm-6 col-md-6">
									    	<Ul>
									    		<li>Python</li>
									    		<li>Java</li>
									    		<li>NodeJS</li>
									    	</Ul>
									    </div>
									    <div style={{paddingLeft: '0px', paddingRight: '0px'}} className="col-xs-6 col-sm-6 col-md-6">
									    	<Ul>
									    		<li style={{paddingLeft: '1%'}}>Express</li>
									    		<li style={{paddingLeft: '1%'}}>Web2py</li>
									    		<li style={{paddingLeft: '1%'}}>Django</li>
									    	</Ul>
									    </div>
									</div>
							    </figure>
							  </div>
							</section>
							<Div>
								<Button onClick={this.setClassF2.bind(this)}>Leer más...</Button>
							</Div>
						</div>
					</Div2>
					<Div3 data-aos="fade-up" data-aos-once="true" className="col-xs-12 visible-xs">
						<div style={{width: '70%', margin: '0 auto'}}>
							<section className="cont">
							  <div id="card2" className={this.state.classF3}>
							    <figure style={{overflow: 'hidden'}} className="front">
							    	<div style={{paddingTop: '14px', margin: '0 auto', backgroundColor: '#FCAC32', borderRadius: '1000px', width: '120px', height: '120px'}}>
							    		<img alt="img" style={{width: '90px', height: '90px'}} src={require('assets/mongodb-logo-xs.png')}/>
							    	</div>
							    	<h2>Base de Datos</h2>
							    	<p>
							    		Conocimientos básicos para diseñar y desarrollar una base de datos
							    		que se adapte a su aplicación web, con el mayor rendimiento, eficiencia
							    		y seguridad de los datos
							    	</p>
							    </figure>
							    <figure className="back">
							    	<p>
							    		Conocimientos en lenguajes y manejadores de bases de datos:
							    	</p>
							    	<Ul>
							    		<li>SQL</li>
							    		<li>NoSQL</li>
							    		<li>PostgreSQL</li>
							    		<li>SQLite</li>
							    		<li>MongoDB</li>
							    	</Ul>
							    </figure>
							  </div>
							</section>
							<Div>
								<Button onClick={this.setClassF3.bind(this)}>Leer más...</Button>
							</Div>
						</div>
					</Div3>
					<Div3 data-aos="fade-up" data-aos-delay="400" data-aos-once="true" className="col-sm-6 col-md-3 hidden-xs">
						<div style={{width: '75%', margin: '0 auto'}}>
							<section className="cont">
							  <div id="card2" className={this.state.classF3}>
							    <figure style={{overflow: 'auto'}} className="front">
							    	<div style={{paddingTop: '14px', margin: '0 auto', backgroundColor: '#FCAC32', borderRadius: '1000px', width: '120px', height: '120px'}}>
							    		<img alt="img" style={{width: '90px', height: '90px'}} src={require('assets/mongodb-logo-xs.png')}/>
							    	</div>
							    	<h2>Base de Datos</h2>
							    	<p>
							    		Conocimientos básicos para diseñar y desarrollar una base de datos
							    		que se adapte a su aplicación web, con el mayor rendimiento, eficiencia
							    		y seguridad de los datos
							    	</p>
							    </figure>
							    <figure className="back">
							    	<p>
							    		Conocimientos en lenguajes y manejadores de bases de datos:
							    	</p>
							    	<Ul>
							    		<li>SQL</li>
							    		<li>NoSQL</li>
							    		<li>PostgreSQL</li>
							    		<li>SQLite</li>
							    		<li>MongoDB</li>
							    	</Ul>
							    </figure>
							  </div>
							</section>
							<Div>
								<Button onClick={this.setClassF3.bind(this)}>Leer más...</Button>
							</Div>
						</div>
					</Div3>
					<Div4 data-aos="fade-up" data-aos-once="true" className="col-xs-12 visible-xs">
						<div style={{width: '70%', margin: '0 auto'}}>
							<section className="cont">
							  <div id="card3" className={this.state.classF4}>
							    <figure style={{overflow: 'hidden'}} className="front">
							    	<div style={{paddingTop: '18px', margin: '0 auto', backgroundColor: '#29251F', borderRadius: '1000px', width: '120px', height: '120px'}}>
							    		<img alt="img" style={{width: '80px', height: '80px'}} src={require('assets/bombillo-logo-xs.png')}/>
							    	</div>
							    	<h2>Innovación</h2>
							    	<p style={{paddingRight: '15px'}}>
							    		Te ofrezco ideas innovadoras para que tu sitio web luzca novedoso, moderno y
							    		competente en el mercado actual para sacarle el mejor provecho
							    	</p>
							    </figure>
							    <figure className="back">
							    	<p>
							    		Destrezas y métodos de desarrollo ágil para un producto final satisfactorio:
							    	</p>
							    	<Ul>
							    		<li>Project Manager</li>
							    		<li>Project Plannig</li>
							    		<li>Scrum</li>
							    	</Ul>
							    </figure>
							  </div>
							</section>
							<Div>
								<Button onClick={this.setClassF4.bind(this)}>Leer más...</Button>
							</Div>
						</div>
					</Div4>
					<Div4 data-aos="fade-up" data-aos-delay="600" data-aos-once="true" className="col-sm-6 col-md-3 hidden-xs">
						<div style={{width: '75%', margin: '0 auto'}}>
							<section className="cont">
							  <div id="card3" className={this.state.classF4}>
							    <figure style={{overflow: 'auto'}} className="front">
							    	<div style={{paddingTop: '18px', margin: '0 auto', backgroundColor: '#29251F', borderRadius: '1000px', width: '120px', height: '120px'}}>
							    		<img alt="img" style={{width: '80px', height: '80px'}} src={require('assets/bombillo-logo-xs.png')}/>
							    	</div>
							    	<h2>Innovación</h2>
							    	<p style={{paddingRight: '15px'}}>
							    		Te ofrezco ideas innovadoras para que tu sitio web luzca novedoso, moderno y
							    		competente en el mercado actual para sacarle el mejor provecho
							    	</p>
							    </figure>
							    <figure className="back">
							    	<p>
							    		Destrezas y métodos de desarrollo ágil para un producto final satisfactorio:
							    	</p>
							    	<Ul>
							    		<li>Project Manager</li>
							    		<li>Project Plannig</li>
							    		<li>Scrum</li>
							    	</Ul>
							    </figure>
							  </div>
							</section>
							<Div>
								<Button onClick={this.setClassF4.bind(this)}>Leer más...</Button>
							</Div>
						</div>
					</Div4>
				</DivRow>
			</div>
		);
	}
}
