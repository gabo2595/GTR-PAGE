import React from 'react';
import {DivArrow, SpanArrow} from './ArrowUp.style';

var Scroll = require('react-scroll');
var Link = Scroll.Link;

export const ArrowUp = (props) => {
	return (
		<Link className="arrowup" style={{textDecoration: 'none', color: '#CECECE', cursor: 'pointer', marginRight: 0, marginLeft: 0}} activeClass="active" to="test0" spy={true} smooth={true} offset={-50} duration={1400} delay={100}>
			<DivArrow data-aos="fade-up" data-aos-duration="400">
				<SpanArrow className="glyphicon glyphicon-chevron-up"></SpanArrow>
			</DivArrow>
		</Link>
	);
}
