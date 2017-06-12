import styled from 'styled-components';

export const DivContainer = styled.div`
	height: auto;
`;

export const DivTitle = styled.div`
	padding-top: 30px;
	padding-bottom: 0px;
	h1{
		margin-top: 0px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: #0961A5;
		font-weight: 800;
		font-size: 2.5em;
		padding-right: 50px;
		text-align: right;
	}

	@media screen and (max-width: 991px) {
    	&{
    		h1{
    			font-size: 2em;
    			padding-bottom: 20px;
    			padding-right: 0px;
    			text-align: center;
    		}
    	}
    }
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
		font-size: 3em;
		cursor: pointer;
		color: #111;
		width: 60px;
		text-align: center;
		transition: all ease-in-out .2s;
		padding-top: 0px;
		margin-top: 10px;

		&:hover{
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
				margin-top: 0px;
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
	margin-top: 20px;
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
			margin-top: -105px;
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
	background-image: url(${require('assets/GTR-Webpage-s.png')});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 250px;
	transition: all .5s ease-out;
	display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-left: 0px!important;
    padding-right: 0px!important;

    p{
    	transition: opacity ease-in-out .3s;
    	opacity: 0;
    	color: #0961A5;
    	font-size: 2em;
    	font-weight: 700;
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
	    transition: opacity ease-in-out .3s;
	    z-index: -1;
    }


	&:hover{
		.glyphicon-search{
			opacity: 1;
			cursor: pointer;
			transition: all ease-in-out .3s;
		}

		p{
			transition: opacity ease-in-out .3s;
			opacity: 1;
		}
	}

	.glyphicon-search:hover{
		transition: all ease-in-out .3s;
		color: #EEEEEE;
	}

	&:hover > #hoverbar{
		opacity: .9;
		transition: opacity ease-in-out .3s;

	}

	.glyphicon-search{
		transition: all ease-in-out .3s;
		color: #0961A5;
		font-size: 1.6em;
		opacity: 0;
	}
`;

export const DivP2 = styled.div`
	background-image: url(${require('assets/SIGPIE.png')});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 250px;
	transition: all ease-in-out .5s;
	display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-left: 0px!important;
    padding-right: 0px!important;

    p{
    	transition: opacity ease-in-out .3s;
    	opacity: 0;
    	color: #0961A5;
    	font-size: 2em;
    	font-weight: 700;
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
	    transition: opacity ease-in-out .3s;
	    z-index: -1;
    }


	&:hover{
		.glyphicon-search{
			opacity: 1;
			cursor: pointer;
			transition: all ease-in-out .3s;
		}

		p{
			transition: opacity ease-in-out .3s;
			opacity: 1;
		}
	}

	.glyphicon-search:hover{
		transition: all ease-in-out .3s;
		color: #EEEEEE;
	}

	&:hover > #hoverbar{
		opacity: .9;
		transition: opacity ease-in-out .3s;

	}

	.glyphicon-search{
		transition: all ease-in-out .3s;
		color: #0961A5;
		font-size: 1.6em;
		opacity: 0;
	}

`;

export const DivP3 = styled.div`
	background-image: url(${require('assets/usb.jpg')});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 250px;
	transition: all ease-in-out .5s;
	display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-left: 0px!important;
    padding-right: 0px!important;

    p{
    	transition: opacity ease-in-out .3s;
    	opacity: 0;
    	color: #0961A5;
    	font-size: 2em;
    	font-weight: 700;
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
	    transition: opacity ease-in-out .3s;
	    z-index: -1;
    }


	&:hover{
		.glyphicon-search{
			opacity: 1;
			cursor: pointer;
			transition: all ease-in-out .3s;
		}

		p{
			transition: opacity ease-in-out .3s;
			opacity: 1;
		}
	}

	.glyphicon-search:hover{
		transition: all ease-in-out .3s;
		color: #EEEEEE;
	}

	&:hover > #hoverbar{
		opacity: .9;
		transition: opacity ease-in-out .3s;

	}

	.glyphicon-search{
		transition: all ease-in-out .3s;
		color: #0961A5;
		font-size: 1.6em;
		opacity: 0;
	}
`;

export const DivP4 = styled.div`
	background-image: url(${require('assets/twitter1.jpg')});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 250px;
	transition: all ease-in-out .5s;
	display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-left: 0px!important;
    padding-right: 0px!important;

    p{
    	transition: opacity ease-in-out .3s;
    	opacity: 0;
    	color: #0961A5;
    	font-size: 2em;
    	font-weight: 700;
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
	    transition: opacity ease-in-out .3s;
	    z-index: -1;
    }


	&:hover{
		.glyphicon-search{
			opacity: 1;
			cursor: pointer;
			transition: all ease-in-out .3s;
		}

		p{
			transition: opacity ease-in-out .3s;
			opacity: 1;
		}
	}

	.glyphicon-search:hover{
		transition: all ease-in-out .3s;
		color: #EEEEEE;
	}

	&:hover > #hoverbar{
		opacity: .9;
		transition: opacity ease-in-out .3s;

	}

	.glyphicon-search{
		transition: all ease-in-out .3s;
		color: #0961A5;
		font-size: 1.6em;
		opacity: 0;
	}

`;

export const DivP5 = styled.div`
	background-image: url(${require('assets/Node-JS-s.jpg')});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	height: 250px;
	transition: all ease-in-out .5s;
	display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-left: 0px!important;
    padding-right: 0px!important;

    p{
    	transition: opacity ease-in-out .3s;
    	opacity: 0;
    	color: #0961A5;
    	font-size: 2em;
    	font-weight: 700;
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
	    transition: opacity ease-in-out .3s;
	    z-index: -1;
    }


	&:hover{
		.glyphicon-search{
			opacity: 1;
			cursor: pointer;
			transition: all ease-in-out .3s;
		}

		p{
			transition: opacity ease-in-out .3s;
			opacity: 1;
		}
	}

	.glyphicon-search:hover{
		transition: all ease-in-out .3s;
		color: #EEEEEE;
	}

	&:hover > #hoverbar{
		opacity: .9;
		transition: opacity ease-in-out .3s;

	}

	.glyphicon-search{
		transition: all ease-in-out .3s;
		color: #0961A5;
		font-size: 1.6em;
		opacity: 0;
	}
`;