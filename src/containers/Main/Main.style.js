import styled from 'styled-components';

export const H1 = styled.h1`
	color: #EEEEEE;
	letter-spacing: 10px;
	font-weight: 800;
	font-size: 55px;
	text-align: center;
	@media screen and (max-width: 767px) {
	    &{
	        font-size:25px;
	    }
	}
	@media screen and (max-width: 320px) {
	    &{
	        font-size: 23px;
	    }
	}
`;

export const H3 = styled.h3`
	text-align: center;
	color: #EEEEEE;
	letter-spacing: 8px;
	font-weight: 600;
	font-size: 27px;
	@media screen and (max-width: 767px) {
	    &{
	        font-size:15px;
	    }
	}
`;
export const DivContainerMain = styled.div`
	height: 100%;
	display: -webkit-box;
	display: -moz-box;
	display: -ms-flexbox;
	display: flex;

	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	.item {
		opacity: 0;
        transition-property: opacity;
    }

    .carousel-inner .active {
      	opacity: 1;
    }

    .item, .active.left, .active.right {
    	left: 0;
    	opacity: 0;
    	z-index: 1;
    }

    .active, .next.left, .prev.right {
    	opacity: 1;
    }

    .carousel-control {
        z-index: 2;
    }

    .carousel-inner {
        position: fixed;
        z-index: -999999;
        width: 100%;
        height: 100%;
        overflow: hidden;
        @media screen and (max-width: 1024px){
        	&{position: static;}
        }
    }

    @media all and (transform-3d), (-webkit-transform-3d) {
        .carousel-inner > .item.next,
        .carousel-inner > .item.active.right {
          opacity: 0;
          -webkit-transform: translate3d(0, 0, 0);
                  transform: translate3d(0, 0, 0);
        }
        .carousel-inner > .item.prev,
        .carousel-inner > .item.active.left {
          opacity: 0;
          -webkit-transform: translate3d(0, 0, 0);
                  transform: translate3d(0, 0, 0);
        }
        .carousel-inner > .item.next.left,
        .carousel-inner > .item.prev.right,
        .carousel-inner > .item.active {
          opacity: 1;
          -webkit-transform: translate3d(0, 0, 0);
                  transform: translate3d(0, 0, 0);
        }
    }

	.carousel-caption{
		padding-left: 0;
		padding-right: 0;
		max-width: 100%;
		width: 100%;
		left: 0;
		height: 150px;
		text-align: left;
		bottom: 0;
	}

	.background{
		position: absolute;
		opacity: .8;
		z-index: -99;
		left: 0;
		width: 100%;
		height: 100px;
		background-color: rgba(0, 22, 54, .95);
		bottom: 0;
	}

	.footer-carousel{
		padding-left: 50px;
		padding-top: 8px;
	}

	#pruebaImg{
		background-image: url(${require('assets/prueba/coding3-shad.32869320.jpg')}) ;
		background-position: center;
		background-repeat: no-repeat;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		height: 100%;
	}


	#pruebaImg2{
		background-image: url(${require('assets/prueba/usb-shad2.7b2538bb.jpg')});
		background-position: center;
		background-repeat: no-repeat;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		height: 100%;
		max-height: 100%;
	}

	#pruebaImg3{
		background-image: url(${require('assets/prueba/coding2-shad.fddc0408.jpg')});
		background-position: center;
		background-repeat: no-repeat;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		-o-background-size: cover;
		background-size: cover;
		height: 100%;
		max-height: 100%;
	}

	.slide-text {
	    top: 35%;
	}

	.slide-text1 {
	    top: 40%;
	    left: -50%;
	}

	.slide-text3{
		top: 40%;
		right: -50%;
	}

	@media screen and (max-width: 1125px){

	}	

	@media screen and (max-width: 1024px){
		.carousel-caption{
			text-align: center;
		}
		.footer-carousel{
			padding-left: 0px;
			padding-right: 0px;
		}
		.footer-carousel{
			padding-top: 25px;
		}
	}


	@media screen and (max-width: 768px) and (orientation: portrait){
		&{
			.footer-carousel{
				padding-top: 25px;
			}
			.carousel-caption{
				text-align: center;
			}
		}
	}

	@media screen and (max-width: 767px) and (orientation: portrait){
		&{
			.background{
				height: 110px;
			}
			.footer-carousel{
				padding-top: 15px;
			}
			.carousel-caption{
				text-align: center;
			}
		}
	}

	@media screen and (max-width: 767px) and (orientation: landscape){
		&{
			.footer-carousel{
				padding-top: 29px;
			}

			.background{
				height: 100px;
			}
		}
	}

	@media screen and (max-width: 320px) and (orientation: portrait){
		&{
			.footer-carousel{
				padding-top: 22px;
			}

			.background{
				height: 100px;
			}
		}
	}

	@media screen and (max-width: 568px) and (orientation: landscape){
		&{
			.footer-carousel{
				padding-top: 32px;
			}

			.background{
				height: 90px;
			}
		}
	}
`;

export const SpanLeft = styled.span`
	font-size: 1.3em;
	margin-top: 5px;
	margin-left: -32px;
`;

export const SpanRight = styled.span`
	font-size: 1.3em;
	margin-top: 5px;
	margin-right: -32px;
`;
