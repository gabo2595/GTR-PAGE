import styled from 'styled-components';

export const Div1 = styled.div`
	background-color: #131313;
	color: #EEEEEE;
	height: 560px;
	padding-top: 70px;

	@media screen and (max-width: 992px) {
		&{
			padding-top: 60px;
		}
	}

	h1{
		text-transform: uppercase;
		margin-left: 10%;
		font-size: 2.5em;
		font-weight: 900;
		color: #003067;

		@media screen and (max-width: 992px) {
			&{
				text-align: center
				margin-left: 0;
				margin-top: 0;
			}
		}

		@media screen and (max-width: 414px) {
			&{
				font-size: 2.5em;
				margin-top: 20px;
			}
		}
	}
	h3{
		margin-top: 5%;
		margin-bottom: 5%;
		margin-left: 10%;
		font-weight: 400;
		font-size: 1.7em;

		@media screen and (max-width: 992px) {
			&{
				font-size: 1.9em;
				margin-top: 5%;
				margin-bottom: 2%;
				text-align: center;
				margin-left: 0;
			}
		}

		@media screen and (max-width: 767px) {
			&{
				text-align: center;
				margin-left: 0;
			}
		}

		@media screen and (max-width: 400px) {
			&{
				font-size: 1.5em;
			}
		}
	}
	p{
		font-size: 1em;
		margin-bottom: 5%;
		padding-left: 10%;
		padding-right: 10%;
		text-align: justify;

		@media screen and (max-width: 992px) {
			&{
				font-size: 1.4em;
			}
		}

		@media screen and (max-width: 400px) {
			&{
				font-size: 1.1em;
			}
		}
	}
`;

export const Div2 = styled.div`
	background-image: url(${require('assets/prueba/bkg7-xs.b2fe831b.jpg')});
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	padding-left: 150px;
	padding-right: 150px;
	height: 560px;
	padding-top: 100px;

	@media only screen and (max-device-width: 1024px) {
    	&{
        	background-attachment: scroll;
        }
	}

	@media screen and (max-width: 992px) {
		padding-left: 180px;
		padding-right: 180px;
		padding-top: 100px;
	}
	@media screen and (max-width: 767px) {
		padding-left: 50px;
		padding-right: 50px;
	}
`;

export const Form = styled.form`
	/*padding-right: 20%;
	padding-left: 20%;*/
	padding-top: 0;
	padding-bottom: 0;


	input {
	    height: 45px; 
	    width: 100%; 
	    padding: 15px 10px;
	}

	textarea {
	    width:100%;
	    padding: 15px 10px;
	    border-radius:5px;
	    border:1px solid #7ac9b7;
	    resize: none;
	}


	input, textarea{
		border: none;
    	box-shadow: 0px 0px 3px #ccc, 0 10px 15px #eee inset;
    	border-radius: 3px;
    	-webkit-border-radius: 3px;
    	-moz-border-radius: 3px;
    	-ms-border-radius: 3px;
    	-o-border-radius: 3px;
    	-moz-transition: width .25s; 
	    -webkit-transition: width .25s; 
	    -o-transition: width .25s;
	    transition: width .25s;
	}

	input:focus{
		background: #fff;
	    border: 1px solid #555;
	    box-shadow: 0 0 3px #aaa;
	    width: 105%;
	}

	textarea:focus{
		background: #fff;
	    border: 1px solid #555;
	    box-shadow: 0 0 3px #aaa;
	    width: 105%;
	}

	button{
		@media screen and (max-width: 767px) {
		    &{
		    	width: 80px;
		    	padding: 8px;
		    }
		}
		padding: 15px;
		width: 120px;
		font-size: 15px;

		transition: all ease-in-out .3s;
		background-color: #003067;
	    border: none;
	    border-radius: 3px;
	    -webkit-border-radius: 3px;
	    -moz-border-radius: 3px;
	    -ms-border-radius: 3px;
	    -o-border-radius: 3px;
	    color: white;
	    font-weight: bold;
	    text-align: center;
	    //text-shadow: 0 -1px 0 #396715;
	}

	button:hover{
		background-color: #001833;
	}

	input:focus:invalid, textarea:focus:invalid {
		outline: none;
	    box-shadow: 0 0 5px #d45252;
	    border-color: #b03535;
	    border: 1px solid #b03535;
	}

	input:required:valid, textarea:required:valid {
		outline: none;
	    box-shadow: 0 0 5px #5cd053;
	    border-color: #28921f;
	    border: 1px solid #28921f;
	}


	input:focus + SpanHint {display: inline;}
	input:required:valid + SpanHint {background: #28921f;}
	input:required:valid + SpanHint:before {color:#28921f;}

`;

export const Span = styled.span`
	text-shadow: 3px 3px 3px black;
	color: #FF4120; 
	margin: -5px 20px 0 0; 
	float: right;
`;

export const Ul = styled.ul`
	list-style-type: none;
	list-style-position: outside;
	margin-bottom: 0px;
	li{
		padding: 10px; 
		margin: 5px;
		left: 40px;

		&:last-child{
			padding: 0px;
			padding-left: 10px;
			padding-bottom: 0;
			margin-bottom: 0;
		}
		&:first-child{
			padding-top: 0;
			padding-top: 0;
			margin-top: 0;
		}
	}
`;

export const SpanHint = styled.span`
	background: #d45252;
    border-radius: 3px 3px 3px 3px;
    color: white;
    margin-left:8px;
    padding: 1px 6px;
    z-index: 999;
    position: absolute;
    display: none;

    &:before {
    content: "";
    color:#d45252;
    position: absolute;
    top:1px;
    left:-6px;
`;

export const DivMap = styled.div`
	padding-left: 10%;
	width: 100%;
	height: 200px;
	padding-right: 10%;
	//border: 5px solid black;

	@media screen and (max-width: 992px){
		//padding-bottom: 5%;
	}
`;