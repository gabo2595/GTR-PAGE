import React, { Component } from 'react';
import {DivP1, DivP2, DivP3, DivP4, DivP5, DivImg, DivTitle, DivContainer, DivLinks, Img} from './Portfolio.style';
var Scroll = require('react-scroll');
var Link = Scroll.Link;

export class Portfolio extends Component {
	constructor(props){
		super(props);
		this.state = {
			id1: false,
			id2: false,
			img1: 'noshow',
			img2: 'noshow',
			img3: 'noshow',
			img4: 'noshow',
			img5: 'noshow'
		}
	}

	setId1(){
		this.setState({
			id1: !this.state.id1,
			id2: !this.state.id2,
			img1: 'show'
		});
	}

	setId1Back(){
		this.setState({
			id1: !this.state.id1,
			id2: !this.state.id2,
			img1: 'noshow'
		});
	}

	setId2(){
		this.setState({
			id1: !this.state.id1,
			id2: !this.state.id2,
			img2: 'show'
		});
	}

	setId2Back(){
		this.setState({
			id1: !this.state.id1,
			id2: !this.state.id2,
			img2: 'noshow'
		});
	}

	setId3(){
		this.setState({
			id1: !this.state.id1,
			id2: !this.state.id2,
			img3: 'show'
		});
	}

	setId3Back(){
		this.setState({
			id1: !this.state.id1,
			id2: !this.state.id2,
			img3: 'noshow'
		});
	}

	setId4(){
		this.setState({
			id1: !this.state.id1,
			id2: !this.state.id2,
			img4: 'show'
		});
	}

	setId4Back(){
		this.setState({
			id1: !this.state.id1,
			id2: !this.state.id2,
			img4: 'noshow'
		});
	}

	setId5(){
		this.setState({
			id1: !this.state.id1,
			id2: !this.state.id2,
			img5: 'show'
		});
	}

	setId5Back(){
		this.setState({
			id1: !this.state.id1,
			id2: !this.state.id2,
			img5: 'noshow'
		});
	}

	render() {
		return (
			<DivContainer className="container-fluid">
				<div className="row" style={{paddingTop: 60}}>
					<DivTitle data-aos="slide-right" data-aos-duration="500" className="col-xs-12 col-sm-12 col-md-12">
						<h1>Portafolio</h1>
					</DivTitle>
				</div>
				<DivImg id={this.state.img1} className="row">
					<div className="col-xs-12 col-sm-12 col-md-5">
						<h2>Página web Gabriel Torres R.</h2>
						<p>
							Página personal de presentación con la finalidad de darme
							a conocer como desarrolador web y software.
						</p>
						<p>
							La página consta de las secciones "Inicio", "Acerca de mi", "Habilidades", "Portafolio"
							y "Contacto" desarrolladas completamente en ReactJS. Es una página estática a
							excepeción del formulario de contacto el cual envía la información solicitada
							a mi correo personal.
						</p>
						<div className="row">
							<div className="col-xs-12 col-sm-6 col-md-6">
								<h3>Rol:</h3>
								<ul>
									<li>Desarrollador Front-End</li>
									<li>Diseño web</li>
								</ul>
							</div>
							<div className="col-xs-12 col-sm-6 col-md-6">
								<h3>Tecnología:</h3>
								<ul>
									<li>HTML5</li>
									<li>CSS3</li>
									<li>JavaScript</li>
									<li>ReactJS (framework)</li>
								</ul>
							</div>
						</div>
						{/*<span onClick={this.setId1Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left hidden-xs"></span>*/}
					</div>
					<div id="divPic" className="col-xs-12 col-sm-12 col-md-7">
						<Img id="img" alt="self" style={{width: '100%', height: '390px'}}
							src={require('assets/GTR-Webpage-l.png')}
						/>
						<span style={{paddingTop: 0}} onClick={this.setId1Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left"></span>
					</div>
				</DivImg>
				<DivImg id={this.state.img2} className="row">
					<div className="col-xs-12 col-sm-12 col-md-5">
						<h2>SIGPIE</h2>
						<p>
							Por sus siglas: Sistema de Gestion del Programa de Intercambio Estudiantil, es un sistema de
							información con la finalidad de agilizar el proceso de aplicación de los estudiantes de la Universidad
							Simón Bolívar a los programas de intercambio estudiantil.
						</p>
						<p>
							El sistema permite que cada estudiante se registre, complete sus datos personales y cargue los documentos
							exigidos, optimizando en un 66% el tiempo dedicado, ya que debían llenar manualmente 3 planillas, el proceso
							se diseñó con la bondad de generar un archivo en formato PDF el cual debe ser entregado por el estudiante. 
						</p>
						<p>
							El personal del Departamento de Estudios Internacionales y de Cooperación (DRIC)
							puede administrar fácilmente la información del sistema con un <em>login</em> administrativo y la opción
							de descargar un archivo .CSV con los datos requeridos de los estudiantes que aplicaron al programa.
												
							El desarrollo eliminó actividades asociadas al registro manual de los datos de los estudiantes por parte
							de los empleados de la DRIC, optimizando así los tiempos de ejecución en el proceso de revisión y
							transcripción
						</p>
						<div className="row">
							<div className="col-xs-12 col-sm-4 col-md-6">
								<h3>Rol:</h3>
								<ul>
									<li>Desarrollador Front-End</li>
									<li>Desarrollador Back-End</li>
								</ul>
							</div>
							<div id="tec" className="col-xs-12 col-sm-4 col-md-6">
								<h3>Tecnología:</h3>
								<ul style={{width: '150px'}}>
									<li>HTML5</li>
									<li>CSS3</li>
									<li>Bootstrap</li>
									<li>JavaScript</li>
									<li>Python</li>
									<li>SQLite</li>
									<li>Web2py (framework)</li>
								</ul>
							</div>
							<DivLinks className="col-xs-12 col-sm-4 col-md-6">
								<h3>Links:</h3>
								<ul>
									<li><a target="_blank" href="https://valioso.dex.usb.ve/">Sitio web</a></li>
									<li><a target="_blank" href="https://github.com/GeekzUSB2017/SIGPIE">Repositorio GitHub</a></li>
								</ul>
							</DivLinks>
						</div>
						{/*<span onClick={this.setId2Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left hidden-xs"></span>*/}
					</div>
					<div id="divPic" className="col-xs-12 col-sm-12 col-md-7">
						<Img id="img" alt="self" style={{width: '100%', height: 'auto'}}
							src={require('assets/SIGPIE.png')}
						/>
						<span onClick={this.setId2Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left"></span>
					</div>
				</DivImg>
				<DivImg id={this.state.img3} className="row">
					<div className="col-xs-12 col-sm-12 col-md-5">
						<h2>SIGPAE</h2>
						<p>
							Por sus siglas: Sistema de Gestión de Programas Analíticos de Estudio, es una aplicación web desarrollada
							con la intención de manejar los programas del contenido de cada materia de la Universidad Simón Bolívar,
							almacenando cada programa en una base de datos para poder encontrarlos de una manera sencilla, y además
							poder hacer una unificación del formato de todos estos programas analíticos de la universidad.
						</p>
						<p>
							El usuario carga un .PDF del programa de la materia y la aplicación detecta automáticamente ciertos datos
							importantes como el código de la materia, el período y el departamento al cual pertenece dicho programa.
							Luego se transcriben los otros datos faltantes y necesarios para la correcta identificación del programa 
							y así ser almacenado en la base de datos. Finalmente, toda esta transcripción se podrá ubicar con una
							búsqueda por el código de la materia.
						</p>
						<div className="row">
							<div className="col-xs-12 col-sm-4 col-md-6">
								<h3>Rol:</h3>
								<ul>
									<li>Desarrollador Front-End</li>
									<li>Desarrollador Back-End</li>
								</ul>
							</div>
							<div id="tec" className="col-xs-12 col-sm-4 col-md-6">
								<h3>Tecnología:</h3>
								<ul>
									<li>HTML5</li>
									<li>CSS3</li>
									<li>Bootstrap</li>
									<li>JavaScript</li>
									<li>Python</li>
									<li>SQLite</li>
									<li>Django (framework)</li>
								</ul>
							</div>
							<DivLinks className="col-xs-12 col-sm-4 col-md-6">
								<h3>Links:</h3>
								<ul>
									<li><a target="_blank" href="https://github.com/Gabogg07/WeCreate">Repositorio GitHub</a></li>
								</ul>
							</DivLinks>
						</div>
						{/*<span onClick={this.setId3Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left hidden-xs"></span>*/}
					</div>
					<div id="divPic" className="col-xs-12 col-sm-12 col-md-7">
						<Img id="img" alt="self" style={{width: '100%', height: '410px'}}
							src={require('assets/usb.jpg')}
						/>
						<span onClick={this.setId3Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left"></span>
					</div>
				</DivImg>
				<DivImg id={this.state.img4} className="row">
					<div className="col-xs-12 col-sm-12 col-md-5">
						<h2>Bot de Twitter</h2>
						<p>
							Sistema de respuesta y envío automático a través de mensajería desarrollado en NodeJS
							para la aplicación Twitter. Permite informar al solicitante a través de “Mensaje Directo”
							o “Tweet” y es totalmente parametrizable para cualquier exigencia requerida asociadas a
							estrategias de comunicación masiva
						</p>
						<p>
							Este servicio de envío masivo y efectivo de información puede ser utilizado para publicidad
							y/o propagandas, enmarcado en los lineamientos establecidos por la organización que le de uso
						</p>
						<div className="row">
							<div className="col-xs-12 col-sm-6 col-md-6">
								<h3>Tecnología:</h3>
								<ul>
									<li>NodeJS</li>
								</ul>
							</div>
							<div className="col-xs-12 col-sm-6 col-md-6">
								<h3>Rol:</h3>
								<ul>
									<li>Desarrollador Back-End</li>
								</ul>
							</div>
						</div>
						{/*<span onClick={this.setId4Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left hidden-xs"></span>*/}
					</div>
					<div id="divPic" className="col-xs-12 col-sm-12 col-md-7">
						<Img id="img" alt="self" style={{width: '100%', height: '400px'}}
							src={require('assets/twitter1.jpg')}
						/>
						<span onClick={this.setId4Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left"></span>
					</div>
				</DivImg>
				<DivImg id={this.state.img5} className="row">
					<div className="col-xs-12 col-sm-12 col-md-5">
						<h2>Sistema Automatizado de Generación de Credenciales</h2>
						<p>
							Sistema automatizado que permite elaborar credenciales para el proceso de elecciones nacionales
							utilizando la herramienta NodeJS con la finalidad de generar en formato PDF dichas credenciales
							a nivel nacional (en Venezuela). Este proceso fue certificado por el ente regulador CNE
							(Consejo Nacional Electoral)
						</p>
						<p>
							Este sistema logró optimizar en un 85% los tiempos de ejecución asociado a la generación e
							impresión de credenciales, permitiendo incrementar la efectividad de los documentos antes
							mencionados. Este programa está elaborado para ser reutilizable en futuros procesos donde la 
							información se encuentre en una base de datos que proporcione dicha información en una estructura
							JSON.
						</p>
						<div className="row">
							<div className="col-xs-12 col-sm-6 col-md-6">
								<h3>Tecnología:</h3>
								<ul>
									<li>NodeJS</li>
								</ul>
							</div>
							<div className="col-xs-12 col-sm-6 col-md-6">
								<h3>Rol:</h3>
								<ul>
									<li>Desarrollador Back-End</li>
								</ul>
							</div>
						</div>
						{/*<span onClick={this.setId5Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left hidden-xs"></span>*/}
					</div>
					<div id="divPic" className="col-xs-12 col-sm-12 col-md-7">
						<Img id="img" alt="self" style={{width: '100%', height: 'auto'}}
							src={require('assets/Node-JS-l.jpg')}
						/>
						<span onClick={this.setId5Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left"></span>
					</div>
				</DivImg>
				<div style={{paddingBottom: 100}} id={this.state.id1} className="row">
					<DivP1 data-aos="flip-right" data-aos-duration="900" className="col-xs-12 col-sm-6 col-md-4">
						<div id="hoverbar"></div>
						<p>Gabriel Torres Ruiz</p>
						<Link style={{textDecoration: 'none', padding: '8px 15px 8px 15px', color: '#EEEEEE'}} activeClass="active" to="test3" spy={true} smooth={true} offset={0} duration={500} delay={0}>
							<span onClick={this.setId1.bind(this)} className="glyphicon glyphicon-search" aria-hidden="true"></span>
						</Link>
					</DivP1>
					<DivP2 data-aos="flip-up" data-aos-duration="900" data-aos-delay="100" className="col-xs-12 col-sm-6 col-md-4">
						<div id="hoverbar"></div>
						<p>SIGPIE</p>
						<Link style={{textDecoration: 'none', padding: '8px 15px 8px 15px', color: '#EEEEEE'}} activeClass="active" to="test3" spy={true} smooth={true} offset={0} duration={500} delay={0}>
							<span onClick={this.setId2.bind(this)} className="glyphicon glyphicon-search" aria-hidden="true"></span>
						</Link>
					</DivP2>
					<DivP3 data-aos="flip-left" data-aos-duration="900" data-aos-delay="200" className="col-xs-12 col-sm-6 col-md-4">
						<div id="hoverbar"></div>
						<p>SIGPAE</p>
						<Link style={{textDecoration: 'none', padding: '8px 15px 8px 15px', color: '#EEEEEE'}} activeClass="active" to="test3" spy={true} smooth={true} offset={0} duration={500} delay={0}>
							<span onClick={this.setId3.bind(this)} className="glyphicon glyphicon-search" aria-hidden="true"></span>
						</Link>
					</DivP3>
					<DivP4 data-aos="slide-right" data-aos-duration="900" data-aos-delay="300" className="col-xs-12 col-sm-6 col-md-4">
						<div id="hoverbar"></div>
						<p>Bot de Twitter</p>
						<Link style={{textDecoration: 'none', padding: '8px 15px 8px 15px', color: '#EEEEEE'}} activeClass="active" to="test3" spy={true} smooth={true} offset={0} duration={500} delay={0}>
							<span onClick={this.setId4.bind(this)} className="glyphicon glyphicon-search" aria-hidden="true"></span>
						</Link>
					</DivP4>
					<DivP5 data-aos="slide-up" data-aos-duration="900" data-aos-delay="400" className="col-xs-12 col-sm-6 col-md-4">
						<div id="hoverbar"></div>
						<p>SAGC</p>
						<Link style={{textDecoration: 'none', padding: '8px 15px 8px 15px', color: '#EEEEEE'}} activeClass="active" to="test3" spy={true} smooth={true} offset={0} duration={500} delay={0}>
							<span onClick={this.setId5.bind(this)} className="glyphicon glyphicon-search" aria-hidden="true"></span>
						</Link>
					</DivP5>
				</div>
			</DivContainer>
		);
	}
}
