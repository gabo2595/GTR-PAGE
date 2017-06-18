import styled from 'styled-components';

export const DivRow = styled.div`
	background-color: #FBFCFC;
	padding: 60px 0px 70px 0px;

	@media screen and (max-width: 768px) {
		&{
			padding: 50px 0px 20px 0px;
		}
	}
`;

export const Div0 = styled.div`
	padding: 30px 0px 60px 0px;

	h1{
		margin-top: 0px;
		letter-spacing: 3px;
		text-transform: uppercase;
		color: #0961A5;
		font-weight: 900;
		font-size: 2.5em;
		padding-left: 50px;
	}

	@media screen and (max-width: 768px) {
		&{
			font-size: .8em;

			h1{
				padding-left: 0px;
				text-align: center;
			}
		}
	}

`;

export const Div1 = styled.div`
	padding-bottom: 50px;
	padding-left: 0;
	padding-right: 0;
	.cont {
	  width: cover;
	  height: 300px;
	  position: relative;
	  perspective: 800px;
	}
	#card {
	  width: 100%;
	  height: 100%;
	  position: absolute;
	  transform-style: preserve-3d;
	  -moz-transition: transform 1s;
	  -webkit-transition: transform 1s;
	  -o-transition: transform 1s;
	  transition: transform 1s;
	}
	#card figure {
	  margin: 0;
	  display: block;
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  backface-visibility: hidden;
	}
	#card .front {
	  background: transparent;
	  text-align: center;

	  h2{
	  	color: #0961A5;
	  	margin-top: 15px;
	  	font-weight: 600;
	  	font-size: 1.5em;
	  	text-transform: uppercase;
	  }
	  p{
	  	font-size: 1.1em;
	  }
	}
	#card .back {
	  background: #1C2833;
	  color: #EEEEEE;
	  text-align: justify;
	  transform: rotateY( 180deg );

	  p{
	  	font-size: 1em;
	  	padding-left: 25px;
	  	padding-right: 25px;
	  	padding-top: 25px;
	  	padding-bottom: 5px;
	  }

	  ul li{
	  	padding-bottom: 6px;
	  }

	  @media screen and (max-width: 768px) {
	  	&{
	  		padding-top: 10px;
	  	}
	  }

	  @media screen and (max-width: 768px) and (orientation: landscape) {
	  	&{
	  		p{
		  		padding-left: 30px;
		  		padding-right: 30px;
		  		padding-bottom: 15px;
		  		padding-top: 30px;
		  	}

		  	ul li{
		  		padding-left: 35px;
		  	}
	  	}
	  }
	}
	#card.true {
	  transform: rotateY( 180deg );
	}

	@media screen and (max-width: 768px) {
		&{
			padding-bottom: 100px;
		}
	}
`;

export const Div2 = styled.div`
	padding-bottom: 50px;
	padding-left: 0;
	padding-right: 0;
	.cont { 
	  width: cover;
	  height: 300px;
	  position: relative;
	  perspective: 800px;
	}
	#card1 {
	  width: 100%;
	  height: 100%;
	  position: absolute;
	  transform-style: preserve-3d;
	  -moz-transition: transform 1s;
	  -webkit-transition: transform 1s;
	  -o-transition: transform 1s;
	  transition: transform 1s;
	}
	#card1 figure {
	  margin: 0;
	  display: block;
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  backface-visibility: hidden;
	}
	#card1 .front {
	  background: transparent;
	  text-align: center;

	  h2{
	  	color: #0961A5;
	  	margin-top: 15px;
	  	font-weight: 600;
	  	font-size: 1.5em;
	  	text-transform: uppercase;
	  }
	  p{
	  	font-size: 1.1em;
	  }
	}
	#card1 .back {
		background:  #1C2833;
		color: #EEEEEE;
		text-align: justify;
		transform: rotateY( 180deg );

		p{
			font-size: 1em;
		  	padding-left: 25px;
		  	padding-right: 25px;
		  	padding-top: 30px;
		  	padding-bottom: 15px;
	  	}

	  	ul li{
	  		padding-left: 40px;
	  	}


	  	@media screen and (max-width: 768px) {
	  		&{
		  		p{
			  		padding-left: 19px;
			  		padding-right: 19px;
			  		padding-bottom: 15px;
			  		padding-top: 30px;
			  	}

			  	ul li{
			  		padding-bottom: 30px;
			  	}
	  		}
	  	}

	  	@media screen and (max-width: 767px) {
	  		&{
		  		p{
			  		padding-left: 25px;
			  		padding-right: 25px;
			  		padding-bottom: 15px;
			  		padding-top: 30px;
			  	}

			  	ul li{
			  		padding-bottom: 30px;
			  	}
	  		}
	  	}

	  	@media screen and (min-width: 1024px) and (max-width: 1024px) and (orientation: portrait) {
	  		&{
	  			ul li{
			  		padding-left: 30px;
			  	}
	  		}
	    }

	    @media screen and (max-width: 1125px) and (orientation: landscape) {
	    	&{
	    		p{
		  	  		padding-left: 20px;
		  	  		padding-right: 20px;
		  	  		padding-bottom: 15px;
		  	  		padding-top: 30px;
	  	  		}
	  	  		ul li{
	  	  			padding-left: 18px;
	  	  		}
	    	}
	    }

	    @media screen and (max-width: 991px) and (orientation: landscape) {
	    	&{
	    		ul li{
	    			padding-left: 50px;
	    		}
	    	}
	    }

	    @media screen and (max-width: 1024px) and (orientation: portrait) {
	    	&{
	    		p{
		  	  		padding-left: 20px;
		  	  		padding-right: 20px;
		  	  		padding-bottom: 15px;
		  	  		padding-top: 30px;
	  	  		}
	  	  		ul li{
	  	  			padding-left: 20px;
	  	  		}
	    	}
	    }
	  	@media screen and (max-width: 768px) and (orientation: landscape) {
	  		&{
		  		p{
		  	  		padding-left: 30px;
		  	  		padding-right: 30px;
		  	  		padding-bottom: 15px;
		  	  		padding-top: 30px;
		  	  	}

		  		ul li{
		  			padding-left: 32px;
		  			padding-bottom: 40px;
		  		}
	  		}
	  	}

	  	@media screen and (max-width: 768px) and (orientation: portrait) {
	  		&{
		  		p{
		  	  		padding-left: 30px;
		  	  		padding-right: 30px;
		  	  		padding-bottom: 15px;
		  	  		padding-top: 30px;
		  	  	}

		  		ul li{
		  			padding-left: 50px;
		  		}
	  		}
	  	}

	  	@media screen and (max-width: 414px) and (orientation: portrait) {
	  		&{
		  		ul li{
		  			padding-left: 24px;
		  			padding-bottom: 20px;
		  		}
	  		}
	  	}
	}
	#card1.true {
	  transform: rotateY( 180deg );
	}

	@media screen and (max-width: 768px) {
		&{
			padding-bottom: 100px;
		}
	}
`;

export const Div3 = styled.div`
	padding-bottom: 50px;
	padding-left: 0;
	padding-right: 0;
	.cont { 
	  width: cover;
	  height: 300px;
	  position: relative;
	  perspective: 800px;
	}
	#card2 {
	  width: 100%;
	  height: 100%;
	  position: absolute;
	  transform-style: preserve-3d;
	  -moz-transition: transform 1s;
	  -webkit-transition: transform 1s;
	  -o-transition: transform 1s;
	  transition: transform 1s;
	}
	#card2 figure {
	  margin: 0;
	  display: block;
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  backface-visibility: hidden;
	}
	#card2 .front {
	  background: transparent;
	  text-align: center;

	  h2{
	  	color: #0961A5;
	  	margin-top: 15px;
	  	font-weight: 600;
	  	font-size: 1.5em;
	  	text-transform: uppercase;
	  }
	  p{
	  	font-size: 1.1em;
	  }
	}
	#card2 .back {
	  background:  #1C2833
	  color: #EEEEEE;
	  text-align: justify;
	  transform: rotateY( 180deg );

	  p{
	  	font-size: 1em;
	  	padding-left: 25px;
	  	padding-right: 25px;
	  	padding-top: 30px;
	  	padding-bottom: 5px;
	  }

	  ul li{
	  	padding-bottom: 10px;
	  	padding-left: 20px;
	  }


	  @media screen and (max-width: 1024px) and (orientation: landscape) {
	    	&{
	    		p{
		  	  		padding-left: 20px;
		  	  		padding-right: 20px;
		  	  		padding-bottom: 5px;
		  	  		padding-top: 30px;
	  	  		}

	  	  		ul li{
	  	  			padding-bottom: 10px;
	  	  		}
	    	}
	    }
	  @media screen and (max-width: 768px) and (orientation: landscape) {
	  	&{
	  		ul li{
	  			padding-left: 32px;
	  			padding-bottom: 20px;
	  		}
	  	}
	  }
	}
	#card2.true {
	  transform: rotateY( 180deg );
	}

	@media screen and (max-width: 768px) {
		&{
			padding-bottom: 100px;
		}
	}

`;

export const Div4 = styled.div`
	padding-bottom: 50px;
	padding-left: 0;
	padding-right: 0;
	.cont { 
	  width: cover;
	  height: 300px;
	  position: relative;
	  perspective: 800px;
	}
	#card3 {
	  width: 100%;
	  height: 100%;
	  position: absolute;
	  transform-style: preserve-3d;
	  -moz-transition: transform 1s;
  	  -webkit-transition: transform 1s;
  	  -o-transition: transform 1s;
  	  transition: transform 1s;
	}
	#card3 figure {
	  margin: 0;
	  display: block;
	  position: absolute;
	  width: 100%;
	  height: 100%;
	  backface-visibility: hidden;
	}
	#card3 .front {
	  background: transparent;
	  text-align: center;

	  h2{
	  	color: #0961A5;
	  	margin-top: 15px;
	  	font-weight: 600;
	  	font-size: 1.5em;
	  	text-transform: uppercase;
	  }
	  p{
	  	font-size: 1.1em;
	  }
	}
	#card3 .back {
		background: #1C2833;
		color: #EEEEEE;
		text-align: justify;
		transform: rotateY( 180deg );

	  	p{
	  		font-size: 1em;
	  		padding-left: 25px;
		  	padding-right: 25px;
		  	padding-top: 25px;
		  	padding-bottom: 10px;
	  	}
	  
	  	ul li{
	  		padding-bottom: 20px;
	  		padding-left: 25px;
		}

	  	@media screen and (max-width: 1024px) {
	  		&{
	  			ul li{
	  				padding-bottom: 10px;
	  			}
	  		}
	  	}

	  	@media screen and (max-width: 768px) {
	  		&{
	  			ul li{
	  				padding-bottom: 25px;
	  				padding-left: 25px;
	  			}
	  		}
	  	}

	}
	#card3.true {
	  transform: rotateY( 180deg );
	}

`;

export const Div = styled.div`
	font-size: 1.2em;
	position: absolute;
	width: 50%;
	margin-top: 10px;
`;

export const Button = styled.div`
	background-color: transparent;
	font-weight: 800;
	text-align: left;
	margin-left: 10px;
	display: inline-block;
	outline: none;
	text-decoration: none;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: .8em;
	padding: 8px 0px;
	cursor: pointer;

	&:before {
	  position: absolute;
	  padding-left: 5px;
	  top: 0;
	  left: 0;
	  width: 105px;
	  height: 2px;
	  background: #023C68;
	  content: '';
	  -webkit-transition: top .4s;
	  -moz-transition: top .4s;
	  -o-transition: top .4s;
	  transition: top .4s;
	}

	&:after {
	  position: absolute;
	  top: 0;
	  left: 0;
	  width: 2px;
	  height: 2px;
	  background: #023C68;
	  content: '';
	  -webkit-transition: height .4s;
	  -moz-transition: height .4s;
	  -o-transition: top .4s;
	  transition: height .4s;
	}

	&:hover:before {
	  top: 100%;
	  opacity: 1;
	}

	&:hover:after {
	  height: 100%;
	}
`;

export const Ul = styled.ul`
	list-style: square inside url(${require('assets/check-logo-xxxs.png')});
	li{
		padding-left: 25px;
		padding-bottom: 15px;
	}
`;