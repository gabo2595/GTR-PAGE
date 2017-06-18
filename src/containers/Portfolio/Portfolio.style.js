import styled from 'styled-components';

export const DivContainer = styled.div`
	height: auto;
`;

export const DivImg = styled.div`
	display: none!important;
	padding-top: 0px;
	padding-left: 50px;
	padding-right: 50px;
	padding-bottom: 60px;

	p{
		text-align: justify;
		padding-right: 10px;
		font-size: 1.1em;
	}

	h2{
		margin-top: 110px;
		margin-bottom: 10px;
		font-weight: 800;
		color: #0961A5;
		padding-right: 10px;
	}

	h3{
		font-weight: 700;
		color: #0961A5;
		font-size: 1.5em;
	}

	ul{
		list-style: none;
		padding: 0;
		margin: 0;
		/*padding-left: 20px;*/
		font-size: 1.1em;

		li{
			width: 200px;
		}

		li:before{
			content: "• ";
			font-size: 1.3em;
		  	color: #0961A5;
		}
	}

	span{
		padding-top: 0px;
		position: absolute;
		margin-top: 50px;
		margin-left: -10px;
		padding-bottom: 0px;
		font-size: 3em;
		cursor: pointer;
		color: #111;
		width: 60px;
		text-align: center;

		-moz-transition: all ease-in-out .2s;
		-webkit-transition: all ease-in-out .2s;
		-o-transition: all ease-in-out .2s;
		transition: all ease-in-out .2s;

		&:hover{
			-moz-transition: all ease-in-out .2s;
			-webkit-transition: all ease-in-out .2s;
			-o-transition: all ease-in-out .2s;
			transition: all ease-in-out .2s;
			color: #0961A5;
		}
	}

	#tec{
		padding-left: 20px;
		padding-right: 0;
		@media screen and (max-width: 767px){
			&{
				padding-left: 20px;
			}
		}
	}


	@media screen and (max-width: 991px){
		&{
			padding-left: 50px;
			padding-right: 50px;
			padding-bottom: 0px;
			padding-top: 0px;

			h2{
				//margin-top: 0px;
				font-size: 1.7em;
				text-align: center;
				padding-right: 0px;
			}

			span{
				margin-top: -20px;
				margin-top: 30px;
				padding-bottom: 30px;
			}

			p{
				padding-right: 0px!important;
			}

			#divPic{
				margin-top: 20px;
			}
		}
	}

	@media screen and (max-width: 412px){
		&{
			padding-left: 30px;
			padding-right: 30px;
		}
	}
`;

export const Img = styled.img`
	margin-top: 50px;
	margin-bottom: 20px;
	box-shadow: 10px 10px 10px 1px black;

	@media screen and (max-width: 991px){
		&{
			margin-top: 0px;
		}
	}
`;

export const DivLinks = styled.div`

	@media screen and (min-width: 992px){
		&{
			ul > li{
				width: 200px;
			}
			margin-top: -135px;
		}
	}

	@media screen and (max-width: 991px){
		&{
			padding-left: 50px;
			margin-top: 0px;

			ul > li{
				//width: 50px;
			}
		}
	}

	@media screen and (max-width: 767px){
		&{
			padding-left: 20px;
			margin-top: 0px;

			ul > li{
				//width: 50px;
			}
		}
	}
`;

export const DivLinks1 = styled.div`

	@media screen and (min-width: 992px){
		&{
			ul > li{
				width: 200px;
			}
			margin-top: -80px;
		}
	}

	@media screen and (max-width: 991px){
		&{
			padding-left: 50px;
			margin-top: 0px;

			ul > li{
				//width: 50px;
			}
		}
	}

	@media screen and (max-width: 767px){
		&{
			padding-left: 20px;
			margin-top: 0px;

			ul > li{
				//width: 50px;
			}
		}
	}
`;

export const DivP1 = styled.div`
	background-image: url(${require('assets/WP-2.jpg')});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 300px;

	-moz-transition: all .5s ease-out;
	-webkit-transition: all .5s ease-out;
	-o-transition: all .5s ease-out;
	transition: all .5s ease-out;

    padding-left: 0px!important;
    padding-right: 0px!important;
    text-align: center;

    p{
    	-moz-transition: opacity ease-in-out .3s;
    	-webkit-transition: opacity ease-in-out .3s;
    	-o-transition: opacity ease-in-out .3s;
    	transition: opacity ease-in-out .3s;
    	opacity: 0;
    	color: #0961A5;
    	font-size: 2em;
    	font-weight: 700;
    	padding-top: 110px;

    }

    #hoverbar{
    	height:100%;
	    width:100%;
	    background-color: black;
	    position:absolute;
	    bottom:0;
	    margin:0;
	    padding:0;
	    opacity: 0;
	    -moz-transition: opacity ease-in-out .3s;
	    -webkit-transition: opacity ease-in-out .3s;
	    -o-transition: opacity ease-in-out .3s;
	    transition: opacity ease-in-out .3s;
	    z-index: -1;
    }


	&:hover{
		.glyphicon-search{
			opacity: 1;
			cursor: pointer;
			-moz-transition: all ease-in-out .3s;
			-webkit-transition: all ease-in-out .3s;
			-o-transition: all ease-in-out .3s;
			transition: all ease-in-out .3s;
		}

		p{
			-moz-transition: opacity ease-in-out .3s;
			-webkit-transition: opacity ease-in-out .3s;
			-o-transition: opacity ease-in-out .3s;
			transition: opacity ease-in-out .3s;
			opacity: 1;
		}
	}

	.glyphicon-search:hover{
		-moz-transition: all ease-in-out .3s;
		-webkit-transition: all ease-in-out .3s;
		-o-transition: all ease-in-out .3s;
		transition: all ease-in-out .3s;
		color: #EEEEEE;
	}

	&:hover > #hoverbar{
		opacity: .9;
		-moz-transition: opacity ease-in-out .3s;
		-webkit-transition: opacity ease-in-out .3s;
		-o-transition: opacity ease-in-out .3s;
		transition: opacity ease-in-out .3s;

	}

	.glyphicon-search{
		-moz-transition: all ease-in-out .3s;
		-webkit-transition: all ease-in-out .3s;
		-o-transition: all ease-in-out .3s;
		transition: all ease-in-out .3s;
		color: #0961A5;
		font-size: 1.6em;
		opacity: 0;
	}
`;

export const DivP2 = styled.div`
	background-image: url(${require('assets/SIGPIE.jpeg')});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 300px;
	-moz-transition: all ease-in-out .5s;
	-webkit-transition: all ease-in-out .5s;
	-o-transition: all ease-in-out .5s;
	transition: all ease-in-out .5s;

    padding-left: 0px!important;
    padding-right: 0px!important;
    text-align: center;

    p{
    	-moz-transition: opacity ease-in-out .3s;
    	-webkit-transition: opacity ease-in-out .3s;
    	-o-transition: opacity ease-in-out .3s;
    	transition: opacity ease-in-out .3s;
    	opacity: 0;
    	color: #0961A5;
    	font-size: 2em;
    	font-weight: 700;
    	padding-top: 110px;
    }

    #hoverbar{
    	height:100%;
	    width:100%;
	    background-color: black;
	    position:absolute;
	    bottom:0;
	    margin:0;
	    padding:0;
	    opacity: 0;
	    -moz-transition: opacity ease-in-out .3s;
	    -webkit-transition: opacity ease-in-out .3s;
	    -o-transition: opacity ease-in-out .3s;
	    transition: opacity ease-in-out .3s;
	    z-index: -1;
    }


	&:hover{
		.glyphicon-search{
			opacity: 1;
			cursor: pointer;
			-moz-transition: all ease-in-out .3s;
			-webkit-transition: all ease-in-out .3s;
			-o-transition: all ease-in-out .3s;
			transition: all ease-in-out .3s;
		}

		p{
			-moz-transition: opacity ease-in-out .3s;
			-webkit-transition: opacity ease-in-out .3s;
			-o-transition: opacity ease-in-out .3s;
			transition: opacity ease-in-out .3s;
			opacity: 1;
		}
	}

	.glyphicon-search:hover{
		-moz-transition: all ease-in-out .3s;
		-webkit-transition: all ease-in-out .3s;
		-o-transition: all ease-in-out .3s;
		transition: all ease-in-out .3s;
		color: #EEEEEE;
	}

	&:hover > #hoverbar{
		opacity: .9;
		-moz-transition: opacity ease-in-out .3s;
		-webkit-transition: opacity ease-in-out .3s;
		-o-transition: opacity ease-in-out .3s;
		transition: opacity ease-in-out .3s;

	}

	.glyphicon-search{
		-moz-transition: all ease-in-out .3s;
		-webkit-transition: all ease-in-out .3s;
		-o-transition: all ease-in-out .3s;
		transition: all ease-in-out .3s;
		color: #0961A5;
		font-size: 1.6em;
		opacity: 0;
	}

`;

export const DivP3 = styled.div`
	background-image: url(${require('assets/usb-xs.jpg')});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 300px;
	-moz-transition: all ease-in-out .5s;
	-webkit-transition: all ease-in-out .5s;
	-o-transition: all ease-in-out .5s;
	transition: all ease-in-out .5s;

    padding-left: 0px!important;
    padding-right: 0px!important;
    text-align: center;

    p{
    	-moz-transition: opacity ease-in-out .3s;
    	-webkit-transition: opacity ease-in-out .3s;
    	-o-transition: opacity ease-in-out .3s;
    	transition: opacity ease-in-out .3s;
    	opacity: 0;
    	color: #0961A5;
    	font-size: 2em;
    	font-weight: 700;
    	padding-top: 110px;
    }

    #hoverbar{
    	height:100%;
	    width:100%;
	    background-color: black;
	    position:absolute;
	    bottom:0;
	    margin:0;
	    padding:0;
	    opacity: 0;
	    -moz-transition: opacity ease-in-out .3s;
    	-webkit-transition: opacity ease-in-out .3s;
    	-o-transition: opacity ease-in-out .3s;
    	transition: opacity ease-in-out .3s;
	    z-index: -1;
    }


	&:hover{
		.glyphicon-search{
			opacity: 1;
			cursor: pointer;
			-moz-transition: all ease-in-out .3s;
			-webkit-transition: all ease-in-out .3s;
			-o-transition: all ease-in-out .3s;
			transition: all ease-in-out .3s;
		}

		p{
			-moz-transition: opacity ease-in-out .3s;
	    	-webkit-transition: opacity ease-in-out .3s;
	    	-o-transition: opacity ease-in-out .3s;
	    	transition: opacity ease-in-out .3s;
			opacity: 1;
		}
	}

	.glyphicon-search:hover{
		-moz-transition: all ease-in-out .3s;
		-webkit-transition: all ease-in-out .3s;
		-o-transition: all ease-in-out .3s;
		transition: all ease-in-out .3s;
		color: #EEEEEE;
	}

	&:hover > #hoverbar{
		opacity: .9;
		-moz-transition: opacity ease-in-out .3s;
    	-webkit-transition: opacity ease-in-out .3s;
    	-o-transition: opacity ease-in-out .3s;
    	transition: opacity ease-in-out .3s;

	}

	.glyphicon-search{
		-moz-transition: all ease-in-out .3s;
		-webkit-transition: all ease-in-out .3s;
		-o-transition: all ease-in-out .3s;
		transition: all ease-in-out .3s;
		color: #0961A5;
		font-size: 1.6em;
		opacity: 0;
	}
`;

export const DivP4 = styled.div`
	background-image: url(${require('assets/twitter1-s.jpg')});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 300px;
	-moz-transition: all ease-in-out .5s;
	-webkit-transition: all ease-in-out .5s;
	-o-transition: all ease-in-out .5s;
	transition: all ease-in-out .5s;

    padding-left: 0px!important;
    padding-right: 0px!important;
    text-align: center;

    p{
    	transition: opacity ease-in-out .3s;
    	opacity: 0;
    	color: #0961A5;
    	font-size: 2em;
    	font-weight: 700;
    	padding-top: 110px;
    }

    #hoverbar{
    	height:100%;
	    width:100%;
	    background-color: black;
	    position:absolute;
	    bottom:0;
	    margin:0;
	    padding:0;
	    opacity: 0;
	    -moz-transition: opacity ease-in-out .3s;
    	-webkit-transition: opacity ease-in-out .3s;
    	-o-transition: opacity ease-in-out .3s;
    	transition: opacity ease-in-out .3s;
	    z-index: -1;
    }


	&:hover{
		.glyphicon-search{
			opacity: 1;
			cursor: pointer;
			-moz-transition: all ease-in-out .3s;
			-webkit-transition: all ease-in-out .3s;
			-o-transition: all ease-in-out .3s;
			transition: all ease-in-out .3s;
		}

		p{
			-moz-transition: opacity ease-in-out .3s;
	    	-webkit-transition: opacity ease-in-out .3s;
	    	-o-transition: opacity ease-in-out .3s;
	    	transition: opacity ease-in-out .3s;
			opacity: 1;
		}
	}

	.glyphicon-search:hover{
		-moz-transition: all ease-in-out .3s;
		-webkit-transition: all ease-in-out .3s;
		-o-transition: all ease-in-out .3s;
		transition: all ease-in-out .3s;
		color: #EEEEEE;
	}

	&:hover > #hoverbar{
		opacity: .9;
		-moz-transition: opacity ease-in-out .3s;
    	-webkit-transition: opacity ease-in-out .3s;
    	-o-transition: opacity ease-in-out .3s;
    	transition: opacity ease-in-out .3s;

	}

	.glyphicon-search{
		-moz-transition: all ease-in-out .3s;
		-webkit-transition: all ease-in-out .3s;
		-o-transition: all ease-in-out .3s;
		transition: all ease-in-out .3s;
		color: #0961A5;
		font-size: 1.6em;
		opacity: 0;
	}

`;

export const DivP5 = styled.div`
	background-image: url(${require('assets/Node-JS-xs.jpg')});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 300px;
	-moz-transition: all ease-in-out .5s;
	-webkit-transition: all ease-in-out .5s;
	-o-transition: all ease-in-out .5s;
	transition: all ease-in-out .5s;

    padding-left: 0px!important;
    padding-right: 0px!important;
    text-align: center;

    p{
    	-moz-transition: opacity ease-in-out .3s;
    	-webkit-transition: opacity ease-in-out .3s;
    	-o-transition: opacity ease-in-out .3s;
    	transition: opacity ease-in-out .3s;
    	opacity: 0;
    	color: #0961A5;
    	font-size: 2em;
    	font-weight: 700;
    	padding-top: 110px;
    }

    #hoverbar{
    	height:100%;
	    width:100%;
	    background-color: black;
	    position:absolute;
	    bottom:0;
	    margin:0;
	    padding:0;
	    opacity: 0;
	    -moz-transition: opacity ease-in-out .3s;
    	-webkit-transition: opacity ease-in-out .3s;
    	-o-transition: opacity ease-in-out .3s;
    	transition: opacity ease-in-out .3s;
	    z-index: -1;
    }


	&:hover{
		.glyphicon-search{
			opacity: 1;
			cursor: pointer;
			-moz-transition: all ease-in-out .3s;
			-webkit-transition: all ease-in-out .3s;
			-o-transition: all ease-in-out .3s;
			transition: all ease-in-out .3s;
		}

		p{
			-moz-transition: opacity ease-in-out .3s;
	    	-webkit-transition: opacity ease-in-out .3s;
	    	-o-transition: opacity ease-in-out .3s;
	    	transition: opacity ease-in-out .3s;
			opacity: 1;
		}
	}

	.glyphicon-search:hover{
		-moz-transition: all ease-in-out .3s;
		-webkit-transition: all ease-in-out .3s;
		-o-transition: all ease-in-out .3s;
		transition: all ease-in-out .3s;
		color: #EEEEEE;
	}

	&:hover > #hoverbar{
		opacity: .9;
		-moz-transition: opacity ease-in-out .3s;
    	-webkit-transition: opacity ease-in-out .3s;
    	-o-transition: opacity ease-in-out .3s;
    	transition: opacity ease-in-out .3s;

	}

	.glyphicon-search{
		-moz-transition: all ease-in-out .3s;
		-webkit-transition: all ease-in-out .3s;
		-o-transition: all ease-in-out .3s;
		transition: all ease-in-out .3s;
		color: #0961A5;
		font-size: 1.6em;
		opacity: 0;
	}
`;