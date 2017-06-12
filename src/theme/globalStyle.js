import {injectGlobal} from 'styled-components';

/* eslint-disable */
injectGlobal`

	@import url(https://fonts.googleapis.com/css?family=Lato);
	/*@import url(http://weloveiconfonts.com/api/?family=zocial);
	@import url(http://weloveiconfonts.com/api/?family=brandico);
	@import url(http://weloveiconfonts.com/api/?family=typicons);
	@import url(http://weloveiconfonts.com/api/?family=fontawesome);*/

	/*[class*="fontawesome-"]:before {
	  font-family: 'FontAwesome', sans-serif;
	}

	[class*="zocial-"]:before {
	  font-family: 'zocial', sans-serif;
	}

	[class*="brandico-"]:before {
	  font-family: 'brandico', sans-serif;
	}

	/* typicons */
	[class*="typicons-"]:before {
	  font-family: 'Typicons', sans-serif;
	}*/


	html, body{
	  font: 'Lato', sans-serif;
	  width: 100%;
      height: 100%;
      margin: 0;
      padding: 0;
	}

	[data-reactroot] {
        position: absolute;
        width: 100% !important;
        height: 100% !important;
    }

	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}


	#menu-t:checked ~ .menu.menu{
		height: 604px;
		position: absolute;
	}

	.row.row {
	  display: -webkit-box;
	  display: -webkit-flex;
	  display: -ms-flexbox;
	  display: flex;
	  flex-wrap: wrap;
	}
	.row.row > [class*='col-'] {
	  display: flex;
	  flex-direction: column;
	}

	/*FOOTER RESPOSIVE*/

	@media screen and (max-width: 1000px){
	    .links.links, .social.social, .copyright.copyright{
	        float:none;
	        text-align:center;
	    }
	    .social.social {
	        position: relative;
	        margin: 5px 0;
	        a{
	        	margin-left: 8px
	        }
	        a:first-child{
	        	margin-left: 0px
	        }
	        padding-bottom: 10px;
	    }
	    .links.links li {
	        display:inline-block;
	        float:none;
	        padding-left: 10px;
	    }
	    .links.links li:first-child{
	    	padding-left: 0px;
	    }
	    .bar.bar {
	        position:relative;
	    }
	    .bar-wrap.bar-wrap {
	        margin-bottom:0;
	    }
	    #icon{
	    	font-size: 15px;
	    }
	    .follow.follow{
	    	font-size: 10px;
	    }
	}

	@media screen and (max-width: 835px)  {
	    .footer.footer > ul li {
	        float:none;
	        width:auto;
	    }
	}

	@media screen and (max-width: 768px)  {
	    .links.links li {
	        margin-right: 0px;
	        padding-left: 8px;
	    }
	    .links.links li:first-child{
	    	padding-left: 0px;
	    }
	}


	/* NAVBAR */
	#shrink{
		padding-top: 16px!important;
		background-color: black!important;	
		transition: all ease-in-out .5s;
		opacity: .9;
		z-index: 20;

		#header{
			width: 90px!important;
			height: 50px!important;
			//transition: all ease-in-out .5s;
		}

		#divimg{
			//transition: ease-in-out .5s;
		}

		img{
			margin-top: -35px;
			transition: ease-in-out .5s;
		}
	}
	@media screen and (max-width: 767px) {
		#shrink{
			padding-top: 5px!important;
			background-color: black!important;	
			transition: ease-in-out .5s;
			opacity: .95;
			z-index: 20;

			#header{
				width: auto!important;
				height: 50px!important;
				transition: all ease-in-out .5s;
			}

			.navbar-toggle.navbar-toggle{
				transition: all ease-in-out .5s;
				margin-top: 15px!important;
			}

			img{
				margin-top: -25px;
				transition: ease-in-out .5s;
			}
		}
	}


	.right carousel-control .right carousel-control{
		transition: all ease-in-out .4s;
	}

	.rightControl{
	  margin-top: 80%;
	  right: 35%;
	  opacity: .15;
	  transition: opacity ease-in-out .35s;

	  &:hover{
	  	opacity: 1;
	  }
	  @media only screen
	  and (max-width : 768px){
	  	&{
	  		margin-top: 135%;
	  	}
	  }
	  @media screen and (max-width: 414px) {
	  	&{
	  		margin-top: 230%;
	  	}
	  }
	}

	

	#menu-t:checked ~ .nav-icon.nav-icon:before{
		transform: translateY(17px) rotate(135deg);
		-moz-transform: translateY(17px) rotate(135deg);
		-webkit-transform: translateY(17px) rotate(135deg);
	}

	#menu-t:checked ~ .nav-icon.nav-icon:after{
		transform: translateY(-17px) rotate(-135deg);
		-moz-transform: translateY(-17px) rotate(-135deg);
		-webkit-transform: translateY(-17px) rotate(-135deg);
	}

	#menu-t:checked ~ .nav-icon.nav-icon div{
		-moz-transform: scale(0);
		-webkit-transform: scale(0);
		transform: scale(0);
	}

	.leftControl{
	  margin-top: 80%
	  right: 50%;

	  opacity: .15;
	  transition: opacity ease-in-out .35s;

	  &:hover{
	  	opacity: 1;
	  }

	  @media only screen
	  and (max-width : 768px){
	  	&{
	  		margin-top: 135%;
	  	}
	  }
	  @media screen and (max-width: 414px) {
	  	&{
	  		margin-top: 230%;
	  	}
	  }
	}
	
	.glyphicon-chevron-right{
		cursor: pointer;
	}
	.glyphicon-chevron-left{
		cursor: pointer;
	}

	.arrow.arrow {
	  position: absolute;
	  bottom: 11%;
	  left: 50.5%;
	  margin-left:-20px;
	  cursor: pointer;
	}

	.bounce.bounce {
		-webkit-animation-name: bounce;
		-moz-animation-name: bounce;
		-o-animation-name: bounce;
		animation-name: bounce;
	}
	.animated{-webkit-animation-fill-mode:both;
	-moz-animation-fill-mode:both;
	-ms-animation-fill-mode:both;
	-o-animation-fill-mode:both;

	            animation-iteration-count: infinite;
	       -moz-animation-iteration-count: infinite;
	    -webkit-animation-iteration-count: infinite;

	animation-fill-mode:both;
	-webkit-animation-duration:2s;
	-moz-animation-duration:2s;
	-ms-animation-duration:2s;
	-o-animation-duration:2s;
	animation-duration:2s;
	}


	@-webkit-keyframes bounce {
		0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);}	40% {-webkit-transform: translateY(-30px);}
		60% {-webkit-transform: translateY(-15px);}
	}

	@-moz-keyframes bounce {
		0%, 20%, 50%, 80%, 100% {-moz-transform: translateY(0);}
		40% {-moz-transform: translateY(-30px);}
		60% {-moz-transform: translateY(-15px);}
	}

	@-o-keyframes bounce {
		0%, 20%, 50%, 80%, 100% {-o-transform: translateY(0);}
		40% {-o-transform: translateY(-30px);}
		60% {-o-transform: translateY(-15px);}
	}
	@keyframes bounce {
		0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
		40% {transform: translateY(-30px);}
		60% {transform: translateY(-15px);}
	}

	@-webkit-keyframes fadeIn {
	    from { opacity: 0; }
	      to { opacity: 1; }
	}

	@keyframes fadeIn {
	    from { opacity: 0; }
	      to { opacity: 1; }
	}

	#true{
		display: none;
	}


	#false{
		display: block!important;
		-webkit-animation: fadeIn 1s;
		animation: fadeIn 1s;
	}


	#show{
		//position: relative;
		display: block!important;
		-webkit-animation: fadeIn 1s;
		animation: fadeIn 1s;

	}

`;