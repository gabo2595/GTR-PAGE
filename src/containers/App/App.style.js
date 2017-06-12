import styled from 'styled-components';

export const Background = styled.div`
	position: fixed;
	left: 10vw;
	width: 80vw;
	top: 10vh;
	height: 80vh;
	background-image: url(${require('assets/bkg2.jpg')}); 
	z-index: -99;
`;