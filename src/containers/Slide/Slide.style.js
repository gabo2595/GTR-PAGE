import styled from 'styled-components';

export const Div = styled.div`
	
`;

export const Div1 = styled.div`
	background-image: url(${require('assets/coding3-shad.jpeg')});
	height: 100vh;
	width: 100wh;

	/* Create the parallax scrolling effect */
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;

	@media only screen and (max-device-width: 1024px) {
    	&{
        	background-attachment: scroll;
        }
	}
`;

export const Div2 = styled.div`
	background-image: url(${require('assets/usb-shad2.jpeg')});
	height: 100vh;
	width: 100wh;

	/* Create the parallax scrolling effect */
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;

	@media only screen and (max-device-width: 1024px) {
    	&{
        	background-attachment: scroll;
        }
	}
`;

export const Div3 = styled.div`
	background-image: url(${require('assets/coding2-shad.jpeg')});
	height: 100vh;
	width: 100wh;

	/* Create the parallax scrolling effect */
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	-webkit-background-size: cover;
	-moz-background-size: cover;
	-o-background-size: cover;
	background-size: cover;

	@media only screen and (max-device-width: 1024px) {
    	&{
        	background-attachment: scroll;
        }
	}
`;

export const Caption = styled.div`
	position: absolute;
	left: 0;
	top: 50%;
	width: 100%;
	text-align: center;
	color: #000;
	z-index: -2;
`;

export const Span = styled.span`
  background-color: #111;
  color: #fff;
  padding: 18px;
  font-size: 25px;
  letter-spacing: 10px;
  z-index: -1;
`;

export const H1 = styled.h1`
	color: #EEEEE;
	letter-spacing: 10px;
	font-weight: 800;
	font-size: 55px;
	text-shadow: 5px 5px 5px black;

	@media screen and (max-width: 767px) {
	    &{
	        font-size:25px;
	    }
	}
`;

export const H3 = styled.h3`
	color: #EEEEE;
	letter-spacing: 10px;
	font-weight: 600;
	font-size: 27px;
	text-shadow: 4px 4px 4px black;

	@media screen and (max-width: 767px) {
	    &{
	        font-size:15px;
	    }
	}
`;