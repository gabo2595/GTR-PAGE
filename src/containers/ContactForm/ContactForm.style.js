import styled from 'styled-components';

export const Div1 = styled.div`
	background-color: #131313;
	color: #EEEEEE;
	h1{
		text-transform: uppercase;
		margin-top: 0;
		margin-left: 5%;
		font-size: 2.5em;
		font-weight: 800;
		color: #0961A5;

		@media screen and (max-width: 992px) {
			&{
				text-align: center
				margin-left: 0;
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


		@media screen and (max-width: 767px) {
			&{
				text-align: center;
				margin-left: 0;
			}
		}

		@media screen and (max-width: 992px) {
			&{
				font-size: 1.9em;
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
		margin-bottom: 10%;
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

export const Span1 = styled.span`
  font-size: 2.5em;
  margin-left: 11%;

  h4{
  	padding-bottom: 3%;
    display: inline-block;
    font-size: .6em;
    padding-left: 1%;
  }

  @media screen and (max-width: 400px) {
  	&{
  		font-size: 2em;
  	}
  }
`;

export const Span2 = styled.span`
  fontSize: 2em;
  margin-left: 10%;

  h4{
  	margin-bottom: 0;
    display: inline-block;
    font-size: .8em;
    padding-left: 1%;
  }

  @media screen and (max-width: 400px) {
  	&{
  		font-size: 1.6em;
  	}
  }
`;


export const Div2 = styled.div`
	background-image: url(${require('assets/bkg7.jpeg')});
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

export const Form = styled.form`
	padding-right: 20%;
	padding-left: 20%;
	padding-top: 0;
	padding-bottom: 0;


	input {
	    height: 40px; 
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
		border: 1px solid #aaa;
    	box-shadow: 0px 0px 3px #ccc, 0 10px 15px #eee inset;
    	border-radius: 2px;
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


		background-color: #1d7ce2;
	    border: 1px solid #092543;
	    border-bottom: 1px solid #092543;
	    border-radius: 5px;
	    -webkit-border-radius: 5px;
	    -moz-border-radius: 5px;
	    -ms-border-radius: 5px;
	    -o-border-radius: 5px;
	    box-shadow: inset 0 1px 0 0 #092543;
	    -webkit-box-shadow: 0 1px 0 0 #092543 inset ;
	    -moz-box-shadow: 0 1px 0 0 #092543 inset;
	    -ms-box-shadow: 0 1px 0 0 #092543 inset;
	    -o-box-shadow: 0 1px 0 0 #092543 inset;
	    color: white;
	    font-weight: bold;
	    //padding: 10px 20px;
	    text-align: center;
	    text-shadow: 0 -1px 0 #396715;
	}

	button:hover{
		opacity: .85;
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

export const DivThanks = styled.div`
	display: none;
	text-align: center;
	background-color: #1d7ce2;
	box-shadow: 10px 10px 10px black;
	opacity: .9;
	color: #EEEEEE;
	padding: 10px 10px;
	border-radius: 5px;

	h2{
		margin-top: 0;
		font-weight: 900;
	}
	h3{
		font-weight: 600;
	}


	@media screen and (min-width: 992px) {
		&{
			margin-top: 14%;
		}
	}

	@media screen and (max-width: 412px) {
		&{
			h2{
				font-size: 1.65em;
			}
			h3{
				font-size: 1.4em;
			}
		}
	}
`;