import React, { Component } from 'react';

import {A, Clear, Ftr, Splitter, BarDiv, CopyRDiv,
	BarWrap, LinksDiv, Social, SpanIcon, SpanInfo, SpanFollow} from './Footer.style';
var Scroll = require('react-scroll');
var Link = Scroll.Link;

export class Footer extends Component {
	render() {
		return (
			<div>
				<Ftr className="footer">
					<Splitter/>
					<BarDiv className="bar">
						<BarWrap className="bar-wrap">
							<LinksDiv className="links"> {/* footer menu */}
								<li><Link style={{textDecoration: 'none', cursor: 'pointer', WebkitTransition: 'all .3s linear', MozTransition: 'all .3s linear', MsTransition: 'all .3s linear', OTransition:  'all .3s linear', transition: 'all .3s linear'}} activeClass="active" to="test0" spy={true} smooth={true} offset={0} duration={1000} delay={200}>Inicio</Link></li>
								<li><Link style={{textDecoration: 'none', cursor: 'pointer', WebkitTransition: 'all .3s linear', MozTransition: 'all .3s linear', MsTransition: 'all .3s linear', OTransition:  'all .3s linear', transition: 'all .3s linear'}} activeClass="active" to="test1" spy={true} smooth={true} offset={-20} duration={1000} delay={200}>Acerca de mi</Link></li>
								<li><Link style={{textDecoration: 'none', cursor: 'pointer', WebkitTransition: 'all .3s linear', MozTransition: 'all .3s linear', MsTransition: 'all .3s linear', OTransition:  'all .3s linear', transition: 'all .3s linear'}} activeClass="active" to="test2" spy={true} smooth={true} offset={0} duration={1000} delay={200}>Habilidades</Link></li>
								<li><Link style={{textDecoration: 'none', cursor: 'pointer', WebkitTransition: 'all .3s linear', MozTransition: 'all .3s linear', MsTransition: 'all .3s linear', OTransition:  'all .3s linear', transition: 'all .3s linear'}} activeClass="active" to="test3" spy={true} smooth={true} offset={0} duration={1000} delay={200}>Portfolio</Link></li>
								<li><Link style={{textDecoration: 'none', cursor: 'pointer', WebkitTransition: 'all .3s linear', MozTransition: 'all .3s linear', MsTransition: 'all .3s linear', OTransition:  'all .3s linear', transition: 'all .3s linear'}} activeClass="active" to="test4" spy={true} smooth={true} offset={0} duration={1000} delay={200}>Contacto</Link></li>
							</LinksDiv>
							<Social className="social">
								{/*social icons are here*/}
								<A target="_blank" href="https://www.linkedin.com/in/gabriel-torres-268519126" className="rss">
									<SpanIcon id="icon" className="fa fa-linkedin"></SpanIcon>
									<SpanInfo className="info">
										<SpanFollow className="follow">LinkedIn</SpanFollow>
									</SpanInfo>
								</A>
								<A target="_blank" href="https://www.instagram.com/gabotruiz/" className="rss">
									<SpanIcon id="icon" className="fa fa-instagram"></SpanIcon>
									<SpanInfo className="info">
										<SpanFollow className="follow">Instagram</SpanFollow>
									</SpanInfo>
								</A>
								<A target="_blank" href="https://www.facebook.com/gabriel.torres.52459" className="fb">
									<SpanIcon id="icon" className="fa fa-facebook-f"></SpanIcon>
									<SpanInfo className="info">
										<SpanFollow className="follow">Facebook</SpanFollow>
									</SpanInfo>
								</A>
								<A target="_blank" href="#" className="tw">
									<SpanIcon id="icon" className="fa fa-twitter"></SpanIcon>
									<SpanInfo className="info">
										<SpanFollow className="follow">Twitter</SpanFollow>
									</SpanInfo>
								</A>
							</Social>
							<Clear></Clear>
							<CopyRDiv className="copyright">&copy; 2017 by <strong>Gabriel Torres Ruiz</strong> | All Rights Reserved</CopyRDiv>
						</BarWrap>
					</BarDiv>
				</Ftr>
			</div>
		);
	}
}
