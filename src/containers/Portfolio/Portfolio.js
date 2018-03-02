import React, { Component } from 'react';
import {DivP1, DivP2, DivP3, DivP4, DivP5, DivP6, DivP7, DivImg, DivContainer, DivLinks, DivLinks1, Img} from './Portfolio.style';
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
			img5: 'noshow',
			img6: 'noshow',
			img7: 'noshow',
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
	setId6(){
		this.setState({
			id1: !this.state.id1,
			id2: !this.state.id2,
			img6: 'show'
		});
	}

	setId6Back(){
		this.setState({
			id1: !this.state.id1,
			id2: !this.state.id2,
			img6: 'noshow'
		});
	}
	setId7(){
		this.setState({
			id1: !this.state.id1,
			id2: !this.state.id2,
			img7: 'show'
		});
	}

	setId7Back(){
		this.setState({
			id1: !this.state.id1,
			id2: !this.state.id2,
			img7: 'noshow'
		});
	}

	render() {
		return (
			<DivContainer className="container-fluid">
				<DivImg id={this.state.img1} className="row">
					<div className="col-xs-12 col-sm-12 col-md-5">
						<span onClick={this.setId1Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left"></span>
						<h2>Página web Gabriel Torres R.</h2>
						<p>
							Página personal de presentación con la finalidad de darme
							a conocer como desarrollador web y software.
						</p>
						<p>
							La página consta de las secciones "Inicio", "Acerca de mi", "Habilidades", "Portafolio"
							y "Contacto" desarrolladas completamente en ReactJS. Es una página estática a
							excepeción del formulario de contacto el cual envía la información solicitada
							a mi correo personal.
						</p>
						<div className="row">
							<div className="col-xs-12 col-sm-4 col-md-6">
								<h3>Rol:</h3>
								<ul>
									<li>Desarrollador Front-End</li>
									<li>Diseño web</li>
								</ul>
							</div>
							<div className="col-xs-12 col-sm-4 col-md-6">
								<h3>Tecnología:</h3>
								<ul>
									<li>HTML5</li>
									<li>CSS3</li>
									<li>JavaScript</li>
									<li>ReactJS (framework)</li>
								</ul>
							</div>
							<DivLinks1 className="col-xs-12 col-sm-4 col-md-6">
								<h3>Links:</h3>
								<ul>
									<li><a target="_blank" href="https://github.com/gabo2595/GTR-PAGE">Repositorio GitHub</a></li>
								</ul>
							</DivLinks1>
						</div>
					</div>
					<div id="divPic" className="col-xs-12 col-sm-12 col-md-7">
						<Img id="img" alt="self" style={{width: '100%', height: 'auto'}}
							src={require('assets/gtrpage.jpg')}
						/>
					</div>
				</DivImg>
				<DivImg id={this.state.img2} className="row">
					<div className="col-xs-12 col-sm-12 col-md-5">
						<span onClick={this.setId2Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left"></span>
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
						<p style={{marginBottom: 0}}>
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
					</div>
					<div id="divPic" className="col-xs-12 col-sm-12 col-md-7">
						<Img id="img" alt="self" style={{width: '100%', height: 'auto'}}
							src={require('assets/prueba/SIGPIE.27cef376.jpg')}
						/>
					</div>
				</DivImg>
				<DivImg id={this.state.img3} className="row">
					<div className="col-xs-12 col-sm-12 col-md-5">
						<span onClick={this.setId3Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left"></span>
						<h2>SIGPAE</h2>
						<p>
							Por sus siglas: Sistema de Gestión de Programas Analíticos de Estudio, es una aplicación web desarrollada
							con la intención de manejar los programas del contenido de cada materia de la Universidad Simón Bolívar,
							almacenando cada programa en una base de datos para poder encontrarlos de una manera sencilla, y además
							poder hacer una unificación del formato de todos estos programas analíticos de la universidad.
						</p>
						<p style={{marginBottom: 0}}>
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
					</div>
					<div id="divPic" className="col-xs-12 col-sm-12 col-md-7">
						<Img id="img" alt="self" style={{width: '100%', height: 'auto'}}
							src={require('assets/prueba/usb-xs.925d1e23.jpg')}
						/>
					</div>
				</DivImg>
				<DivImg id={this.state.img4} className="row">
					<div className="col-xs-12 col-sm-12 col-md-5">
						<span onClick={this.setId4Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left"></span>
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
					</div>
					<div id="divPic" className="col-xs-12 col-sm-12 col-md-7">
						<Img id="img" alt="self" style={{width: '100%', height: 'auto'}}
							src={require('assets/prueba/twitter1-s.5373b6a7.jpg')}
						/>
					</div>
				</DivImg>
				<DivImg id={this.state.img5} className="row">
					<div className="col-xs-12 col-sm-12 col-md-5">
						<span onClick={this.setId5Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left"></span>
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
					</div>
					<div id="divPic" className="col-xs-12 col-sm-12 col-md-7">
						<Img id="img" alt="self" style={{width: '100%', height: 'auto'}}
							src={require('assets/prueba/Node-JS-xs.3978075f.jpg')}
						/>
						{/*<span onClick={this.setId5Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left hidden-sm"></span>*/}
					</div>
				</DivImg>
				<DivImg id={this.state.img6} className="row">
					<div className="col-xs-12 col-sm-12 col-md-5">
						<span onClick={this.setId6Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left"></span>
						<h2>Agrochannel.tv</h2>
						<p>
							Canal de televisión ott Colombiano que ofrece servicios de transmisión de televisión,
							distribuidos a través de Internet. Es una poderosa plataforma interactiva de
							contenidos multimedia, que permite contar con un propio portal del sector agrícola
							de vídeo en Directo y en Demanda por Internet, diseñado especialmente para informar
							y formar.
						</p>
						<p>
							Agrochannel.tv tiene como objetivo divulgar la imagen del sector agropecuario en
							Colombia: las instituciones, empresas, tanto privadas como públicas, podrán difundir
							todos los adelantos e innovaciones del sector, así como las novedades que ofrecen en
							sus productos y servicios: de esta manera se convierte en un medio de comunicación de
							alcances inimaginables.
						</p>
						<div className="row">
							<div className="col-xs-12 col-sm-4 col-md-6">
								<h3>Rol:</h3>
								<ul>
									<li>Desarrollador Front-End</li>
									<li>Project Manager</li>
								</ul>
							</div>
							<div id="tec" className="col-xs-12 col-sm-4 col-md-6">
								<h3>Tecnología:</h3>
								<ul>
									<li>HTML5</li>
									<li>CSS3</li>
									<li>Bootstrap</li>
									<li>JavaScript</li>
									<li>ReactJS (framework)</li>
								</ul>
							</div>
							<DivLinks1 className="col-xs-12 col-sm-4 col-md-6">
								<h3 style={{marginTop: 18}}>Link:</h3>
								<ul>
									<li><a target="_blank" href="http://www.agrochannel.tv">Sitio web</a></li>
								</ul>
							</DivLinks1>
						</div>
					</div>
					<div id="divPic" className="col-xs-12 col-sm-12 col-md-7">
						<Img id="img" alt="self" style={{width: '100%', height: 'auto'}}
							src={require('assets/prueba/agrochannel2.62e1ea68.jpg')}
						/>
					</div>
				</DivImg>
				<DivImg id={this.state.img7} className="row">
					<div className="col-xs-12 col-sm-12 col-md-5">
						<span onClick={this.setId7Back.bind(this)} className="glyphicon glyphicon-circle-arrow-left"></span>
						<h2>Everleds</h2>
						<p>
							Compañía orientada a la asesoría y venta de modernas luminarias LED, a la vanguardia del comfort visual
							y ahorro energético con los mejores precios del mercado.
						</p>
						<p>
							Everleds tiene como objetivo garantizar un servicio profesional orientado específicamente a cumplir con
							las expectativas de nuestros clientes, operando estratégicamente con integridad y compromiso responsable
							en las actividades industriales, a fin de proveer productos de alto rendimiento y disminuir el impacto
							ambiental en pro de la transformación ecológica del planeta, ahorrando energía eléctrica y dinero.
						</p>
						<div className="row">
							<div className="col-xs-12 col-sm-4 col-md-6">
								<h3>Rol:</h3>
								<ul>
									<li>Desarrollador Front-End</li>
									<li>Project Manager</li>
								</ul>
							</div>
							<div id="tec" className="col-xs-12 col-sm-4 col-md-6">
								<h3>Tecnología:</h3>
								<ul>
									<li>HTML5</li>
									<li>CSS3</li>
									<li>Bootstrap</li>
									<li>JavaScript</li>
									<li>ReactJS (framework)</li>
								</ul>
							</div>
							<DivLinks1 className="col-xs-12 col-sm-4 col-md-6">
								<h3 style={{marginTop: 18}}>Link:</h3>
								<ul>
									<li><a target="_blank" href="http://everledsgroup.com">Sitio web</a></li>
								</ul>
							</DivLinks1>
						</div>
					</div>
					<div id="divPic" className="col-xs-12 col-sm-12 col-md-7">
						<Img id="img" alt="self" style={{width: '100%', height: 'auto'}}
							src={require('assets/prueba/everleds.jpg')}
						/>
					</div>
				</DivImg>
				<div id={this.state.id1} className="row">
					<DivP7 data-aos-offset="80" data-aos="flip-right" data-aos-duration="1050" data-aos-once="true" className="col-xs-12 col-sm-6 col-md-4">
						<div id="hoverbar"></div>
						<p>Everleds</p>
						<Link style={{textDecoration: 'none', padding: '0px 0px 0px 0px', color: '#EEEEEE'}} activeClass="active" to="test3" spy={true} smooth={true} offset={-65} duration={500} delay={0}>
						<span onClick={this.setId7.bind(this)} className="glyphicon glyphicon-search" aria-hidden="true">
						</span>
						</Link>
					</DivP7>
					<DivP6 data-aos-offset="80" data-aos="flip-right" data-aos-duration="900" data-aos-once="true" className="col-xs-12 col-sm-6 col-md-4">
						<div id="hoverbar"></div>
						<p>Agrochannel.tv</p>
						<Link style={{textDecoration: 'none', padding: '0px 0px 0px 0px', color: '#EEEEEE'}} activeClass="active" to="test3" spy={true} smooth={true} offset={-65} duration={500} delay={0}>
						<span onClick={this.setId6.bind(this)} className="glyphicon glyphicon-search" aria-hidden="true">
						</span>
						</Link>
					</DivP6>
					<DivP1 data-aos-offset="80" data-aos="flip-right" data-aos-delay="150" data-aos-duration="900" data-aos-once="true" className="col-xs-12 col-sm-6 col-md-4">
						<div id="hoverbar"></div>
						<p>Gabriel Torres Ruiz</p>
						<Link style={{textDecoration: 'none', padding: '0px 0px 0px 0px', color: '#EEEEEE'}} activeClass="active" to="test3" spy={true} smooth={true} offset={-65} duration={500} delay={0}>
						<span onClick={this.setId1.bind(this)} className="glyphicon glyphicon-search" aria-hidden="true">
						</span>
						</Link>
					</DivP1>
					<DivP2 data-aos-offset="80" data-aos="flip-right" data-aos-delay="300" data-aos-duration="900" data-aos-once="true" className="col-xs-12 col-sm-6 col-md-4">
						<div id="hoverbar"></div>
						<p>SIGPIE</p>
						<Link style={{textDecoration: 'none', padding: '0px 0px 0px 0px', color: '#EEEEEE'}} activeClass="active" to="test3" spy={true} smooth={true} offset={-65} duration={500} delay={0}>
						<span onClick={this.setId2.bind(this)} className="glyphicon glyphicon-search" aria-hidden="true">
						</span>
						</Link>
					</DivP2>
					<DivP3 data-aos-offset="60" data-aos="flip-right" data-aos-delay="450" data-aos-duration="900" data-aos-once="true" className="col-xs-12 col-sm-6 col-md-4">
						<div id="hoverbar"></div>
						<p>SIGPAE</p>
						<Link style={{textDecoration: 'none', padding: '0px 0px 0px 0px', color: '#EEEEEE'}} activeClass="active" to="test3" spy={true} smooth={true} offset={-65} duration={500} delay={0}>
						<span onClick={this.setId3.bind(this)} className="glyphicon glyphicon-search" aria-hidden="true">
						</span>
						</Link>
					</DivP3>
					<DivP4 data-aos-offset="60" data-aos="flip-right" data-aos-delay="600" data-aos-duration="900" data-aos-once="true" className="col-xs-12 col-sm-6 col-md-4">
						<div id="hoverbar"></div>
						<p>Bot de Twitter</p>
						<Link style={{textDecoration: 'none', padding: '0px 0px 0px 0px', color: '#EEEEEE'}} activeClass="active" to="test3" spy={true} smooth={true} offset={-65} duration={500} delay={0}>
						<span onClick={this.setId4.bind(this)} className="glyphicon glyphicon-search" aria-hidden="true">
						</span>
						</Link>
					</DivP4>
					<DivP5 data-aos-offset="60" data-aos="flip-right" data-aos-delay="750" data-aos-duration="900" data-aos-once="true" className="col-xs-12 col-sm-6 col-md-4">
						<div id="hoverbar"></div>
						<p>SAGC</p>
						<Link style={{textDecoration: 'none', padding: '0px 0px 0px 0px', color: '#EEEEEE'}} activeClass="active" to="test3" spy={true} smooth={true} offset={-65} duration={500} delay={0}>
						<span onClick={this.setId5.bind(this)} className="glyphicon glyphicon-search" aria-hidden="true">
						</span>
						</Link>
					</DivP5>
				</div>
			</DivContainer>
		);
	}
}
